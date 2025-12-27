import { Property } from "@/types/property";
import { numberFormatter } from "@/utils/format";
import { pluralize } from "@/utils/pluralize";

interface Props {
  property: Property;
}

export default function PropertyDetails({ property }: Props) {
  const { title, price, bedrooms, bathrooms, imageUrl, address } = property;
  return (
    <div>
      <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
      <div className="flex flex-col gap-2 p-4">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <h4 className="font-semibold text-xl">
          ${numberFormatter.format(price)}
        </h4>
        <div>
          <div className="flex gap-3">
            <p>{pluralize({ count: bedrooms, word: "bed" })}</p>
            <p>{pluralize({ count: bathrooms, word: "bath" })}</p>
          </div>
          <p className="text-gray-400">
            {address.street}, {address.city}, {address.state}
          </p>
        </div>
      </div>
    </div>
  );
}
