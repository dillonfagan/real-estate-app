import { Property } from "@/types/property";
import { numberFormatter } from "@/utils/format";
import { pluralize } from "@/utils/pluralize";

interface Props {
  property: Property;
  onClick?: () => void;
}

export default function PropertyCard({ property, onClick }: Props) {
  const { imageUrl, title, bedrooms, bathrooms, price, address } = property;
  return (
    <div
      className="card bg-base-100 cursor-pointer shadow-sm hover:shadow-lg"
      onClick={onClick}
    >
      <figure>
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">${numberFormatter.format(price)}/month</h2>
        <div>
          <div className="flex gap-3">
            <span>{pluralize({ word: "bed", count: bedrooms })}</span>
            <span>{pluralize({ word: "bath", count: bathrooms })}</span>
          </div>
          <p className="text-gray-400">
            {address.street}, {address.city}, {address.state}
          </p>
        </div>
      </div>
    </div>
  );
}
