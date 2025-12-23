import PropertyCard from "@/components/property-card";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const properties = [
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 1",
      bedrooms: 2,
      bathrooms: 2,
      price: 1_200,
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 2",
      bedrooms: 2,
      bathrooms: 2,
      price: 1_200,
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 3",
      bedrooms: 2,
      bathrooms: 2,
      price: 1_200,
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 4",
      bedrooms: 2,
      bathrooms: 2,
      price: 1_200,
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 5",
      bedrooms: 2,
      bathrooms: 2,
      price: 1_200,
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 6",
      bedrooms: 2,
      bathrooms: 2,
      price: 1_200,
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
        <div className="navbar-start">
          <button className="btn btn-ghost font-bold text-lg text-red-600">
            RedHouse
          </button>
        </div>
        <div className="navbar-center">
          <label className="input input-bordered">
            <MagnifyingGlassIcon className="size-6" />
            <input placeholder="Search" type="search" />
          </label>
        </div>
        <div className="navbar-end"></div>
      </div>
      <div className="grid grid-cols-2 p-4 gap-4">
        <div className="grid grid-cols-2 gap-4">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              imageUrl={property.imageUrl}
              title={property.title}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              price={property.price}
            />
          ))}
        </div>
        <div className="overflow-hidden">
          <div className="card bg-base-100">Placeholder</div>
        </div>
      </div>
    </main>
  );
}
