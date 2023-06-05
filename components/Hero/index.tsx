import Hero from "@/types/Hero";

export default function Hero({ heading, tagline }: Hero) {
  return (
    <section className="bg-gray-200">
      <div className="max-w-4xl mx-auto px-10 py-16">
        <h1 className="mb-6 text-6xl">{heading}</h1>
        <p className="text-lg font-light">{tagline}</p>
      </div>
    </section>
  );
}
