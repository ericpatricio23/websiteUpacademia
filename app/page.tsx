import Hero from "./componentes/hero/Hero"
import Plans from "./componentes/planos/Plans"
import Map from "./componentes/map/Map"

export default function Home() {
  return (
    <div>

      <section id="hero" className="scroll-mt-28">
        <Hero />
      </section>

      <section id="planos" className="scroll-mt-28">
        <Plans />
      </section>

      <section id="map" className="scroll-mt-28">
        <Map />
      </section>

    </div>
  )
}
