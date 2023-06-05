/* This message is for development purposes only and should not be on production */
import Link from "next/link";

export default function NoComponentsMessage() {
  return (
    <main className="m-12 mx-auto w-96 rounded-md border px-8 py-6">
      <h1 className="mb-3 text-lg font-semibold">No components found</h1>
      Navigate to the{" "}
      <Link
        className="underline underline-offset-2 hover:no-underline"
        href="/studio"
      >
        Sanity Studio
      </Link>{" "}
      to add some components for this page.
    </main>
  );
}
