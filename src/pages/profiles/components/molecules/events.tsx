import PersonEvent from "@/models/PersonEvent";
import Event from "../atoms/event";

export default function Events({ events }: { events: PersonEvent[] }) {
  return (
    <div className="flex flex-col gap-6">
      {events.map((event, idx) => (
        <div key={idx}>
          <hr />
          <Event event={event} />
        </div>
      ))}
    </div>
  );
}
