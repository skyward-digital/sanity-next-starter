/* This message is for development purposes only and should not be on production */
import Link from "next/link";

export default function NoComponentsMessage() {
  return (
    <main className="mx-auto border w-96 py-6 px-8 m-12 rounded-md">
      <h1 className="mb-3 text-lg font-semibold">No components found</h1>
      Navigate to the{" "}
      <Link
        className="underline hover:no-underline underline-offset-2"
        href="/studio"
      >
        Sanity Studio
      </Link>{" "}
      to add some components for this page.
    </main>
  );
}
