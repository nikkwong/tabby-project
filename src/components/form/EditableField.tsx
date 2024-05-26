import Edit from "@/assets/vectors/edit";
import React, { useCallback, useState } from "react";

export default function EditableField({
  editing,
  tag,
  onChange,
  ...props
}: {
  tag: string;
  editing: boolean;
  onChange: Function;
}) {
  const [hasChanges, setHasChanges] = useState(false);
  const [cached, setCached] = useState(props.children);
  const onKeyUp = useCallback(
    (e: KeyboardEvent) => {
      const value = e?.currentTarget?.innerText;
      setHasChanges(value !== props.children);
      setCached(value);
    },
    [props.children, hasChanges]
  );
  const onClick = useCallback(
    (e) => {
      onChange(cached);
      setHasChanges(false);
    },
    [cached]
  );

  return (
    <div
      className={`flex gap-4 items-center + ${
        editing && "border border-solid border-red-500 px-3"
      }`}
    >
      {React.createElement(
        tag,
        {
          ...props,
          suppressContentEditableWarning: true,
          contentEditable: editing,
          onKeyUp,
        },
        props.children
      )}
      {hasChanges ? (
        <button onClick={onClick}>Save</button>
      ) : editing ? (
        <Edit />
      ) : null}
    </div>
  );
}
