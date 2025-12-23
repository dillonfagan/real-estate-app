interface Props {
  imageUrl: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
}

const priceFormatter = new Intl.NumberFormat('en-US');

export default function PropertyCard({ imageUrl, title, bedrooms, bathrooms, price }: Props) {
  return (
    <div className="card bg-base-100 cursor-pointer shadow-sm hover:shadow-lg">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">${priceFormatter.format(price)}</h2>
        <div className="flex gap-3">
            <span>{bedrooms} beds</span>
            <span>{bathrooms} baths</span>
        </div>
      </div>
    </div>
  );
}
