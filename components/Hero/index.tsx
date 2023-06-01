type HeroProps = {
  heading: string;
  tagline: string;
};

export default function Hero({ heading, tagline }: HeroProps) {
  return (
    <div className="bg-gray-200 p-6 text-center">
      <h1 className="mb-5 text-5xl">{heading}</h1>
      <h2>{tagline}</h2>
    </div>
  );
}
