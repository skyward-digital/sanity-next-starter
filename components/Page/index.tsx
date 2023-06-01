import PublishedPage from "@/components/PublishedPage";
import Component from "@/types/Component";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";

const PagePreview = lazy(() => import("@/components/PagePreview"));

type PageProps = {
  preview: boolean;
  components: Component[];
  query: string;
  queryParams?: { slug: string };
};

const Page = ({ preview, components, query, queryParams }: PageProps) => {
  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <PagePreview query={query} queryParams={queryParams} />
    </PreviewSuspense>
  ) : (
    <PublishedPage components={components} />
  );
};

export default Page;
