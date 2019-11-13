export interface Purchase {
    id: number;
    customer_name: string;
    product: string;
    no_of_licenses: number;
    licenses: number[];
    expiration_date: string;
    licenseKeyType: string; //Will probably need changed to enum type later
}
