import EditableField from "@/components/form/EditableField";

export default function ProfileStat({
  title,
  value,
  editing,
  onChange,
}: {
  editing: boolean;
  onChange: Function;
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="subtitle">{title}</p>
      <EditableField
        tag={"p"}
        className="font-body"
        editing={editing}
        onChange={onChange}
      >
        {value}
      </EditableField>
    </div>
  );
}
