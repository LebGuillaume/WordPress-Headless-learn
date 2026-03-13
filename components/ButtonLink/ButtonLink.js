import Link from "next/link";

export default function ButtonLink({ destination, label }) {
  return (
    <a href={destination}>
      <div className="button-link">{label}</div>
    </a>
  );
}
