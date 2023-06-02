type HeroProps = {
  heading: string;
  tagline: string;
};

export default function Hero({ heading, tagline }: HeroProps) {
  return (
    <div className="bg-gray-200 p-12 text-center">
      <h1 className="mb-6 text-6xl">{heading}</h1>
      <h2 className="text-lg font-light">{tagline}</h2>
    </div>
  );
}
