import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import PageComponent from "@/components/Page";
import Component from "@/types/Component";

import { client } from "@/sanity/lib/sanity.client";

// We use a query parameter 'slug' which we then pass in as a second argument when fetching
const query = groq`*[_type == "page" && slug.current == $slug]{"components": pageBuilder[]}`;

interface pageProps {
  preview: boolean;
  components: Component[];
  queryParams?: { slug: string };
}

const Page = ({ components, preview, queryParams }: pageProps) => {
  return (
    <PageComponent
      components={components}
      preview={preview}
      query={query}
      queryParams={queryParams}
    />
  );
};

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  params,
}) => {
  const queryParams = { slug: params?.slug ?? `` };
  if (preview) {
    return {
      props: { preview, components: [], queryParams },
      revalidate: 300
    };
  }

  const pageData = await client.fetch(query, queryParams);

  return {
    props: {
      components: pageData[0]?.components || [],
      preview,
      queryParams: null,
    },
    revalidate: 300
  };
};

// Prepares Next.js to know which routes already exist and excludes the homepage
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "page" && defined(slug.current) && slug.current != '/'][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: true };
};

export default Page;
