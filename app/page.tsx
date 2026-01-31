"use client";

import { useDrawer } from "@/components/drawer/context";
import PropertyCard from "@/components/property-card";
import PropertyDetails from "@/components/property-details";
import { Property } from "@/types/property";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const properties: Property[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Aurora Unit A",
    bedrooms: 1,
    bathrooms: 1,
    price: 850,
    address: {
      street: "101 Elderberry Ln, Unit A",
      city: "Aurora",
      state: "IL",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Aurora Unit B",
    bedrooms: 1,
    bathrooms: 1,
    price: 875,
    address: {
      street: "101 Elderberry Ln, Unit B",
      city: "Aurora",
      state: "IL",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Property Title 3",
    bedrooms: 2,
    bathrooms: 1,
    price: 1_000,
    address: {
      street: "102 Elderberry Ln",
      city: "Aurora",
      state: "IL",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Property Title 4",
    bedrooms: 2,
    bathrooms: 2,
    price: 1_200,
    address: {
      street: "103 Elderberry Ln",
      city: "Aurora",
      state: "IL",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Property Title 5",
    bedrooms: 2,
    bathrooms: 2,
    price: 1_250,
    address: {
      street: "104 Elderberry Ln",
      city: "Aurora",
      state: "IL",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Property Title 6",
    bedrooms: 3,
    bathrooms: 2,
    price: 1_500,
    address: {
      street: "105 Elderberry Ln",
      city: "Aurora",
      state: "IL",
    },
  },
];

export default function Home() {
  const { open } = useDrawer();

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
      <main className="grid grid-cols-2 h-[calc(100vh-64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4 overflow-y-auto overflow-x-visible">
          <label className="hidden drawer-button" htmlFor="the-drawer" />
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              property={property}
              onClick={() => open(<PropertyDetails property={property} />)}
            />
          ))}
        </div>
        <div className="pt-4 pr-4 pb-4">
          <div className="card bg-base-100 h-full overflow-hidden">
            Placeholder
          </div>
        </div>
      </main>
    </div>
  );
}
