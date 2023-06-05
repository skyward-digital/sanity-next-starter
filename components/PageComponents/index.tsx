import { ComponentType } from "react";

import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import NoComponentsMessage from "@/components/NoComponentsMessage";

import Component from "@/types/Component";

// Mapping Sanity components to React components
const componentMap: Record<Component["_type"], ComponentType<any>> = {
  hero: Hero,
  callToAction: CallToAction,
};

type PageComponentsProps = {
  components: Component[];
};

export default function PageComponents({ components }: PageComponentsProps) {
  if (!components?.length) return <NoComponentsMessage />;

  return (
    <main>
      {components.map((component) => {
        // Dynamically gets the correct component
        const PageBuilderComponent = componentMap[component._type];

        if (!PageBuilderComponent) return null;

        return <PageBuilderComponent key={component._key} {...component} />;
      })}
    </main>
  );
}
