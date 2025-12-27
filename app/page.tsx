"use client";

import { useDrawer } from "@/components/drawer/context";
import PropertyCard from "@/components/property-card";
import PropertyDetails from "@/components/property-details";
import { Property } from "@/types/property";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const { open } = useDrawer();

  const properties: Property[] = [
    {
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 1",
      bedrooms: 1,
      bathrooms: 1,
      price: 850,
      address: {
        street: "101 Elderberry Ln",
        city: "Aurora",
        state: "IL"
      }
    },
    {
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 2",
      bedrooms: 1,
      bathrooms: 1,
      price: 875,
      address: {
        street: "102 Elderberry Ln",
        city: "Aurora",
        state: "IL"
      }
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 3",
      bedrooms: 2,
      bathrooms: 1,
      price: 1_000,
      address: {
        street: "103 Elderberry Ln",
        city: "Aurora",
        state: "IL"
      }
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 4",
      bedrooms: 2,
      bathrooms: 2,
      price: 1_200,
      address: {
        street: "104 Elderberry Ln",
        city: "Aurora",
        state: "IL"
      }
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 5",
      bedrooms: 2,
      bathrooms: 2,
      price: 1_250,
      address: {
        street: "105 Elderberry Ln",
        city: "Aurora",
        state: "IL"
      }
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 6",
      bedrooms: 3,
      bathrooms: 2,
      price: 1_500,
      address: {
        street: "106 Elderberry Ln",
        city: "Aurora",
        state: "IL"
      }
    },
  ];

  return (
    <div className="drawer-content">
      <header className="navbar bg-base-100 shadow-lg sticky top-0 z-10">
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
      </header>
      <main className="grid grid-cols-2 p-4 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <label className="hidden drawer-button" htmlFor="the-drawer" />
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              property={property}
              onClick={() => open(<PropertyDetails property={property} />)}
            />
          ))}
        </div>
        <div className="overflow-hidden">
          <div className="card bg-base-100">Placeholder</div>
        </div>
      </main>
    </div>
  );
}
