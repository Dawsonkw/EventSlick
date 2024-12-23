import Eventslist from "@/components/events-list";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import { sleep } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";
type EventsPageProps = {
  params: {
    city: string;
    className: string;
  };
};

async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <Eventslist city={city} />
      </Suspense>
    </main>
  );
}

export default EventsPage;
