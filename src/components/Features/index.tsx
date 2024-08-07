import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 text-white">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="The DNA data storage project explores the concept of encoding digital information into the sequence of nucleotides in DNA molecules. This emerging technology offers several innovative features and benefits, particularly in terms of storage density, durability, and environmental impact."
            center
          />


          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
