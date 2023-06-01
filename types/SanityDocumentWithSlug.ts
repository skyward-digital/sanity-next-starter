import { SanityDocument } from "sanity";

type SanityDocumentWithSlug = SanityDocument & {
  slug: {
    current: string;
  };
};

export default SanityDocumentWithSlug;
