"use client";
import { useEffect, useState } from "react";
import Results from "./Results/Results";
import Pagination from "./Pagination/Pagination";
import { useRouter, useParams } from "next/navigation";
import queryString from "query-string";
import Filters from "components/Filters/Filters";

export default function PropertySearch() {
  const [properties, setProperties] = useState([]);
  const [total, setTotal] = useState(0);
  const pageSize = 3;
  const router = useRouter();
  const params = useParams();
  const search = async () => {
    const { page, petFriendly, hasParking, minPrice, maxPrice } =
      queryString.parse(window.location.search);
    const filters = {};
    if (petFriendly === "true") {
      filters.petFriendly = true;
    }
    if (hasParking === "true") {
      filters.hasParking = true;
    }
    if (minPrice) {
      filters.minPrice = parseFloat(minPrice);
    }
    if (maxPrice) {
      filters.maxPrice = parseFloat(maxPrice);
    }
    const response = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || 1),
        ...filters,
      }),
    });
    const data = await response.json();
    console.log("Search results", data);
    setProperties(data.properties);
    setTotal(data.total);
  };
  const handlePageChange = async (page) => {
    const { petFriendly, hasParking, minPrice, maxPrice } = queryString.parse(
      window.location.search,
    );

    await router.push(
      `/${params.slug.join("/")}?page=${page}&petFriendly=${petFriendly === "true"}&hasParking=${hasParking === "true"}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
    );
    search();
    // Implement pagination logic here, e.g., fetch new results based on the page number
  };
  useEffect(() => {
    search();
  }, []);
  const handlSearch = async ({
    petFriendly,
    hasParking,
    minPrice,
    maxPrice,
  }) => {
    await router.push(
      `/${params.slug.join("/")}?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
    );
    search();
    // Implement search logic here, e.g., fetch results based on the filter values
  };
  return (
    <div className="my-10 p-5 border border-gray-300">
      <Filters onSearch={handlSearch} />
      <Results properties={properties} />
      <Pagination
        onPageClick={handlePageChange}
        total={Math.ceil(total / pageSize)}
      />
    </div>
  );
}
