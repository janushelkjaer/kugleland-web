import { Particles } from "./components/ui/particles";


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex-1">
        <div className="relative isolate px-6 pt-14 lg:px-8 w-full z-10">

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10">

            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                kugleland
              </h1>
              <p className="mt-8 text-pretty text-lg font-normal text-gray-400 sm:text-md">
                Det er okay at være fjollet...
              </p>
            </div>
          </div>

        </div>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#000000"}
          refresh
        />
      </main>

    </div>
  );
}
