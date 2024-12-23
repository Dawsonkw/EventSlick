import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";
import { sleep } from "@/lib/utils";

type EventsListProps = {
  city: string;
};

async function Eventslist({ city }: EventsListProps) {
  await sleep(2000);
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await response.json();
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default Eventslist;
