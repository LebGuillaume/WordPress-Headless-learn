import Link from "next/link";

export default function ButtonLink({ destination, label }) {
  return (
    <Link href={destination}>
      <div className="button-link">{label}</div>
    </Link>
  );
}
