export class Customer {
  constructor(
    public id: number,
    public customer_name: string,
    public product: string,
    public no_of_licenses: number,
    public licenses,
    public expiration_date: string
  ) { }
}
