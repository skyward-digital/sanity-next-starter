import PageComponents from "@/components/PageComponents";

import { usePreview } from "@/sanity/lib/sanity.preview";

type PagePreviewProps = {
  query: string;
  queryParams?: { slug: string };
};

export default function PagePreview({ query, queryParams }: PagePreviewProps) {
  const pageData = usePreview(null, query, queryParams);

  return <PageComponents components={pageData[0]?.components || []} />;
}
