import PublishedPage from "@/components/PublishedPage";
import Link from "next/link";

import { usePreview } from "@/sanity/lib/sanity.preview";

type PagePreviewProps = {
  query: string;
  queryParams?: { slug: string };
};

export default function PagePreview({ query, queryParams }: PagePreviewProps) {
  const pageData = usePreview(null, query, queryParams);

  return (
    <>
      <PublishedPage components={pageData[0]?.components || []} />
      <Link
        className="bg-blue-500 py-6 px-8 text-white font-bold fixed bottom-0 right-0 rounded-tl"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}
