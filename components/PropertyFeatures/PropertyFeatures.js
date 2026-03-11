export default function PropertyFeatures({
  price,
  bathrooms,
  bedrooms,
  petFriendly,
  hasParking,
}) {
  return (
    <div className="text-black grid grid-cols-3 align-center justify-center gap-4 bg-gray-200 p-4">
      <p>Price: {price}</p>
      <p>Bathrooms: {bathrooms}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Pet Friendly: {petFriendly ? "Yes" : "No"}</p>
      <p>Has Parking: {hasParking ? "Yes" : "No"}</p>
    </div>
  );
}
