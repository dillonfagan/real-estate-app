export type Property = {
    imageUrl: string;
    title: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    address: Address;
};

export type Address = {
    street: string;
    city: string;
    state: string;
};