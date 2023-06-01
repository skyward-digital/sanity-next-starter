import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";
import SanityDocumentWithSlug from "@/types/SanityDocumentWithSlug";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    // For page previews
    case `page`:
      return S.document().views([
        // Show the standard form
        S.view.form(),
        // Adds the iFrame to preview
        S.view
          .component(Iframe)
          .options({
            // Correctly configures URL of iFrame based on slug
            url: (doc: SanityDocumentWithSlug) =>
              doc?.slug?.current && doc?.slug?.current != "/"
                ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/preview?slug=${doc.slug.current}`
                : `${process.env.NEXT_PUBLIC_BASE_URL}/api/preview`,
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
