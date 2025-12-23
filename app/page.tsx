"use client";

import PropertyCard from "@/components/property-card";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useRef } from "react";

export default function Home() {
  const drawerButtonRef = useRef<HTMLLabelElement>(null);

  const properties = [
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 1",
      bedrooms: 1,
      bathrooms: 1,
      price: 850,
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 2",
      bedrooms: 1,
      bathrooms: 1,
      price: 875,
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 3",
      bedrooms: 2,
      bathrooms: 1,
      price: 1_000,
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
      price: 1_250,
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Property Title 6",
      bedrooms: 3,
      bathrooms: 2,
      price: 1_500,
    },
  ];

  return (
    <div className="drawer drawer-end">
      <input id="the-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-20">
        <label
          htmlFor="the-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
      <main className="min-h-screen drawer-content">
        <div className="navbar bg-base-100 shadow-lg sticky top-0 z-10">
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
            <label ref={drawerButtonRef} className="hidden drawer-button" htmlFor="the-drawer" />
            {properties.map((property, index) => (
              <PropertyCard
                key={index}
                imageUrl={property.imageUrl}
                title={property.title}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                price={property.price}
                onClick={() => drawerButtonRef.current?.click()}
              />
            ))}
          </div>
          <div className="overflow-hidden">
            <div className="card bg-base-100">Placeholder</div>
          </div>
        </div>
      </main>
    </div>
  );
}
