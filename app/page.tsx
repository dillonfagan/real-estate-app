"use client";

import { useDrawer } from "@/lib/components/drawer/context";
import PropertyCard from "@/lib/components/property-card";
import PropertyDetails from "@/lib/components/property-details";
import { useProperties } from "@/lib/hooks/properties";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const { open } = useDrawer();
  const properties = useProperties();

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
