import { CardBack } from "./CardBack";
import { CardFront } from "./CardFront";

export function HomePage() {
  return (
    <>
      <main className="w-full">
        <div className="w-full h-80 bg-Purple-950">
          <div className="relative top-40 ml-2 z-10">
            <CardFront />
          </div>
          <div className="relative -top-55 ml-10">
            <CardBack />
          </div>
        </div>
      </main>
    </>
  );
}
