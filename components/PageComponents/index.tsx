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
  return (
    <main>
      {components && components.length > 0 ? (
        components.map((component, index: number) => {
          // Dynamically gets the correct component
          const PageBuilderComponent = componentMap[component._type];
          // Gets non-Sanity parts of component object
          const { _type, _key, ...props } = component;
          // Returns the component if it's found in the map, otherwise returns null
          return PageBuilderComponent ? (
            <PageBuilderComponent key={index} {...props} />
          ) : null;
        })
      ) : (
        <NoComponentsMessage />
      )}
    </main>
  );
}
