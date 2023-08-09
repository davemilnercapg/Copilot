/* write a function to retrieve customer records from a database with the following object structure:   */
 var customers = [
   {
     id: 1,
     name: 'John',
     email: 'johnson@mail',
     age: 25
   },
   {
     id: 2,
     name: 'Mary',
     email: 'mary@mail',
     age: 23
   },
   {
     id: 3,
     name: 'Andrew',
     email: 'andrew@mail',
     age: 31
   }
 ];

 function getCustomers() {
     return customers;
 }

 function getCustomerById(id) {
     return customers.find(customer => customer.id === id);
 }

 function getCustomersByName(name) {
     return customers.filter(customer => customer.name === name);
 }
