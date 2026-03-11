import Image from "next/image";

export default function Gallery({ columns, crop, items }) {
  const columnWidth = 100 / columns;
  return (
    <div className={`flex flex-wrap max-w-5xl mx-auto`}>
      {items.map((item, index) => (
        <div
          style={{ width: `${columnWidth}%` }}
          key={item.id}
          className="p-5 flex-grow"
        >
          <Image
            className={`w-full h-full ${crop ? "object-cover" : ""}`}
            src={item.attributes.url}
            alt={item.alt || "Gallery image"}
            width={item.attributes.width}
            height={item.attributes.height}
          />
        </div>
      ))}
    </div>
  );
}
