import ButtonLink from "components/ButtonLink/ButtonLink";
import Link from "next/link";
import { FaHouseUser, FaHeart } from "react-icons/fa";
export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {
  console.log("MainMenu Props", items);
  return (
    <div className="bg-slate-800 text-white px-5 h-16 flex items-center sticky top-0 z-50">
      <div className="py-4 pl-5 flex text-pink-600">
        <FaHouseUser size={30} />
        <FaHeart size={30} className="ml-2" />
      </div>
      <div className="flex flex-1 justify-end">
        {(items || []).map((item) => (
          <div
            key={item.id}
            className="px-4 hover:bg-slate-700 rounded transition-colors cursor-poiter relative group"
          >
            <div>
              <a href={item.destination} className="p-5 block">
                {item.label}
              </a>
            </div>
            {!!item.subMenuItems?.length && (
              <div className="absolute top-full right-0 bg-slate-700 text-white rounded -mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto ">
                {item.subMenuItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className=" p-5 hover:bg-slate-600 whitespace-nowrap flex justify-end "
                  >
                    <a href={subItem.destination} className="block">
                      {subItem.label}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="ml- my-auto">
          <ButtonLink
            destination={callToActionDestination}
            label={callToActionLabel}
          ></ButtonLink>
        </div>
      </div>
    </div>
  );
};
