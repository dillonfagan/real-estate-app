import { Property } from "@/lib/types/property";

export function useProperties(): Property[] {
  return [
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
}
