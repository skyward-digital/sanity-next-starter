import Link from "next/link";

type CallToActionProps = {
  linkText: string;
  url: string;
};

export default function CallToAction({ linkText, url }: CallToActionProps) {
  return (
    <Link
      className="my-4 mx-2 inline-flex rounded-lg bg-gray-800 px-3 py-2 text-lg text-white no-underline transition duration-200 ease-in-out hover:bg-black focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
      href={url}
    >
      {linkText}
    </Link>
  );
}
