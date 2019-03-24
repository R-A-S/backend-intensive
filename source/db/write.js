// mongo --host 18.195.151.104 --port 27017 < index.js
load('./random.js');

use rstoliarenko
db;

show collections
db.customers.drop();

const customers = [];
for (let i = 0; i < 10; i++) {
    customers.push({
        name: {
            first: faker.fName(),
            last:  faker.lName(),
        },
        nickname: `${faker.fName()}_${faker.lName()}'_nickname'`,
        email:    `${faker.fName()}${faker.lName()}@mail.com`,
        password: `${Math.floor(Math.random() * 10000000)}${faker.lName()}`,
        created:  new Date(Date.now() - Math.random() * 1000000000).toString(),
    });
}

db.customers.insert(customers);

print('-----------------<<<<<<<<< DONE >>>>>>>>>>------------------');
