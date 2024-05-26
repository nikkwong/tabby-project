export default function Tag({ tag }: { tag: string }) {
  return (
    <div className="font-display bg-hue-2-secondary px-3 py-1 rounded">
      <span className="hue-2-tertiary">#{tag}</span>
    </div>
  );
}
