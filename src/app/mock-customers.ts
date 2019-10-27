import { Customer } from './customer';

export let CUSTOMERS: Customer[] = [
  {
    id: 1,
    customer_name: 'Company 1',
    product: 'Software 1',
    no_of_licenses: 100,
    licenses: [1, 2, 3, 100],
    expiration_date: '01/01/2020'
  },
  {
    id: 2,
    customer_name: 'Company 2',
    product: 'Software 2',
    no_of_licenses: 1000,
    licenses: [1, 2, 3, 1000],
    expiration_date: '10/31/2019'
  },
  {
    id: 3,
    customer_name: 'Company 1',
    product: 'Software 2',
    no_of_licenses: 100,
    licenses: [1, 2, 3, 100],
    expiration_date: '01/01/2020'
  },
  {
    id: 4,
    customer_name: 'Company 3',
    product: 'Software 1',
    no_of_licenses: 10,
    licenses: [1, 2, 3],
    expiration_date: '01/01/2020'
  },
  {
    id: 5,
    customer_name: 'Company 4',
    product: 'Software 3',
    no_of_licenses: 100,
    licenses: [1, 2, 3, 100],
    expiration_date: '05/01/2020'
  },
  {
    id: 6,
    customer_name: 'Company 5',
    product: 'Software 1',
    no_of_licenses: 100,
    licenses: [1, 2, 3, 100],
    expiration_date: '01/01/2020'
  },
  {
    id: 7,
    customer_name: 'Company 6',
    product: 'Software 3',
    no_of_licenses: 100,
    licenses: [1, 2, 3, 100],
    expiration_date: '01/01/2020'
  },
  {
    id: 8,
    customer_name: 'Company 2',
    product: 'Software 1',
    no_of_licenses: 1000,
    licenses: [1, 2, 3, 1000],
    expiration_date: '10/30/2019'
  },
];
