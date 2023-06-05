import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Component from "@/types/Component";
import NoComponentsMessage from "../NoComponentsMessage";

// Mapping Sanity components to React components
const componentMap: Record<Component["_type"], React.ComponentType<any>> = {
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
