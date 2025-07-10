export type AddressInfo = {
    address_name: string;
    address: string;
    number: string;
    complement?: string;
    district: string;
    zip_code: string;
    city: string;
    state: string;
}

export type ProfileAddress = AddressInfo & { id: number };

export type APIGetAdresses = {
    addresses: ProfileAddress;
}

