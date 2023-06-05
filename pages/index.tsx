import Page from "@/components/Page";
import { groq } from "next-sanity";

import { client } from "@/sanity/lib/sanity.client";
import Component from "@/types/Component";

const query = groq`*[_type == "page" && slug.current == '/']{"components": pageBuilder[]}`;

type HomepageProps = {
  preview: boolean;
  components: Component[];
  queryParams?: { slug: string };
};

const Homepage = ({ preview, components, queryParams }: HomepageProps) => {
  return (
    <Page
      preview={preview}
      components={components}
      query={query}
      queryParams={queryParams}
    />
  );
};

export async function getStaticProps({ preview = false, queryParams = null }) {
  if (preview) {
    return { props: { preview, components: [], queryParams } };
  }
  const pageData = await client.fetch(query);

  return {
    props: {
      components: pageData[0]?.components || [],
      preview,
      queryParams,
    },
  };
}

export default Homepage;
