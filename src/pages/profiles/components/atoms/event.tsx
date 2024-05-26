import PersonEvent from "@/models/PersonEvent";
import Tags from "../molecules/tags";

export default function Event({ event }: { event: PersonEvent }) {
  return (
    <div className="font-display px-3 py-1 mt-3">
      <h3 className="font-body text-lg font-bold">{event.title}</h3>
      <p className="font-body mb-4">{event.description}</p>
      <Tags tags={event.tags} />
    </div>
  );
}
