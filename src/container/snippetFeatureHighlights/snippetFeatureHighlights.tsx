import { SNIPPET_MASTER_FEATURES } from "@/utils/mockData";

const SnippetFeatureHighlights: React.FC = () => {
  return (
    <>
      <section className="p-20">
        <h2 className="font-bold text-2xl py-5">Why choose Snippet Master ?</h2>
        <ul className="px-5" style={{ listStyleType: "disc" }}>
          {SNIPPET_MASTER_FEATURES.map((item) => (
            <li key={item.id} className="font-medium text-xl">{item.featureTitle}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SnippetFeatureHighlights;
