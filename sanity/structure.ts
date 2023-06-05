import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";
import SanityDocumentWithSlug from "@/types/SanityDocumentWithSlug";
import { baseUrl } from "./env";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    // For page documents, display this custom configuration in Sanity Studio (Preview pane with iFrame of draft content)
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
                ? `${baseUrl}/api/preview?slug=${doc.slug.current}`
                : `${baseUrl}/api/preview`,
          })
          .title("Preview"),
      ]);
    default:
      // For all other document types, show the standard configuration
      return S.document().views([S.view.form()]);
  }
};
