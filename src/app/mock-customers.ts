import { Customer } from './Interfaces/customer';

export let CUSTOMERS: Customer[] = [
  {
    companyName: 'Dylan Inc',
    address: '123 Success st.',
    contacts: [
      {
        role: 'CEO',
        name: 'Dylan Thompson',
        email: 'dthompson2016@my.fit.edu',
        phone_number: '123-456-7891'
      },
      {
        role: 'SalesDood',
        name: 'Billy Bob',
        email: 'Billybob@email.com',
        phone_number: '123-456-7891'
      }
    ],
  },
  {
    companyName: 'Kyle Inc',
    address: '124 Success st.',
    contacts: [
      {
        role: 'CEO',
        name: 'Kyle Ruiz',
        email: 'kruiz2015@my.fit.edu',
        phone_number: '123-456-7891'
      },
      {
        role: 'IDK tbh',
        name: 'Billy Bob',
        email: 'Billybob@email.com',
        phone_number: '123-456-7891'
      }
    ],
  }, 
  {
    companyName: 'Mohammed Inc',
    address: '125 Success st.',
    contacts: [
      {
        role: 'CEO',
        name: 'Mohammed Alzadjali',
        email: 'kruiz2015@my.fit.edu',
        phone_number: '123-456-7891'
      },
      {
        role: 'slave',
        name: 'Billy Bob',
        email: 'Billybob@email.com',
        phone_number: '123-456-7891'
      }
    ],
  },
];

