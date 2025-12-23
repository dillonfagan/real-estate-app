import { numberFormatter } from "@/utils/format";
import { pluralize } from "@/utils/pluralize";

interface Props {
  imageUrl: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
}

export default function PropertyCard({ imageUrl, title, bedrooms, bathrooms, price }: Props) {
  return (
    <div className="card bg-base-100 cursor-pointer shadow-sm hover:shadow-lg">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">${numberFormatter.format(price)}</h2>
        <div className="flex gap-3">
            <span>{pluralize({ word: "bed", count: bedrooms })}</span>
            <span>{pluralize({ word: "bath", count: bathrooms })}</span>
        </div>
      </div>
    </div>
  );
}
