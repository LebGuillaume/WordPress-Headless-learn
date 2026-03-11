import Input from "components/Input/Input";
import { useEffect, useState } from "react";
import queryString from "query-string";
export default function Filters({ onSearch }) {
  const [petFriendly, setPetFriendly] = useState(false);
  const [hasParking, setHasParking] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const handleSearch = () => {
    // Implement search logic here, e.g., fetch results based on the filter values
    onSearch({
      petFriendly,
      hasParking,
      minPrice,
      maxPrice,
    });
  };
  useEffect(() => {
    const {
      petFriendly: petFriendlyInitial,
      hasParking: hasParkingInitial,
      minPrice: minPriceInitial,
      maxPrice: maxPriceInitial,
    } = queryString.parse(window.location.search);
    setPetFriendly(petFriendlyInitial === "true");
    setHasParking(hasParkingInitial === "true");
    setMinPrice(minPriceInitial);
    setMaxPrice(maxPriceInitial);
  }, []);

  return (
    <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
      <div className="flex-1">
        <div>
          <label>
            <input
              type="checkbox"
              checked={hasParking}
              onChange={(e) => setHasParking((value) => !value)}
            />
            <span className="ml-2">has parking</span>
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={petFriendly}
              onChange={(e) => setPetFriendly((value) => !value)}
            />
            <span className="ml-2">Pet friendly</span>
          </label>
        </div>
      </div>
      <div className="flex-1">
        <span className="block mb-2">Min price</span>
        <Input
          type="number"
          placeholder="Enter minimum price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <span className="block mb-2">Max price</span>
        <Input
          type="number"
          placeholder="Enter maximum price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="button-link" onClick={handleSearch}>
        search
      </div>
    </div>
  );
}
