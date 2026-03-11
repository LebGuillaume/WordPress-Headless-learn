import Image from "next/image";
import PropertyCard from "../PropertyCard/PropertyCard";

export default function Results({ properties }) {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
      {properties.map((property) => (
        <PropertyCard
          key={property.databaseId}
          destination={property.uri}
          bedrooms={property.propertyFeatures.bedrooms}
          bathrooms={property.propertyFeatures.bathrooms}
          price={property.propertyFeatures.price}
          image={property.featuredImage?.node?.sourceUrl}
          title={property.title}
          hasParking={property.propertyFeatures.hasParking}
          petFriendly={property.propertyFeatures.petFriendly}
        ></PropertyCard>
      ))}
    </div>
  );
}
