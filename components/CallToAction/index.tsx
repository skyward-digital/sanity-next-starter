import CallToAction from "@/types/CallToAction";
import Link from "next/link";

export default function CallToActionSection({
  title,
  description,
  buttonText,
  url = "",
}: CallToAction) {
  return (
    <section className="max-w-4xl p-10 mx-auto">
      <h2 className="text-4xl mb-3">{title}</h2>
      <p className="text-lg font-light mb-2">{description}</p>
      <Link
        className="my-4 inline-flex rounded-lg bg-gray-800 px-6 py-2 text-lg text-white no-underline transition duration-200 ease-in-out hover:bg-black focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
        href={url}
      >
        {buttonText}
      </Link>
    </section>
  );
}
