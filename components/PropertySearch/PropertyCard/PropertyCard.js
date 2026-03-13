import {
  faBath,
  faBed,
  faDog,
  faParking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ ...props }) {
  return (
    <a
      className="border border-gray-200 rounded-lg p-4 hover:bg-slate-200"
      href={props.destination}
    >
      <Image
        className="h-[200px] w-full object-cover"
        src={props.image}
        alt={props.title}
        width={300}
        height={200}
      ></Image>
      <h1 className="mt-3 text-lg font-bold">{props.title}</h1>
      <p>{props.price} €</p>
      <div className="flex justify-between mt-2 text-sm">
        <div className="">
          <FontAwesomeIcon icon={faBed} className="mr-2" />
          <span>{props.bedrooms || 0} bedrooms</span>
        </div>
        <div className="">
          <FontAwesomeIcon icon={faBath} />
          <span>{props.bathrooms || 0} bathrooms</span>
        </div>
      </div>
      <div className="flex justify-between mt-2 text-sm">
        {props.hasParking && (
          <div className="">
            <FontAwesomeIcon icon={faParking} className="mr-2" />
            <span>{props.hasParking ? "Has parking" : ""}</span>
          </div>
        )}
        <div>
          {props.petFriendly && (
            <>
              <FontAwesomeIcon icon={faDog} />
              <span>Pet friendly</span>
            </>
          )}
        </div>
      </div>
    </a>
  );
}
