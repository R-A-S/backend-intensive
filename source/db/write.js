// mongo --host 18.195.151.104 --port 27017 < index.js
load('./random.js');

use rstoliarenko
db;

show collections
db.customers.drop();
db.orders.drop();

const customers = [];
for (let i = 0; i < 3000; i++) {
    customers.push({
        name: {
            first: faker.fName(),
            last:  faker.lName(),
        },
        balance: Math.floor(Math.random() * 10000),
        created: new Date().toString(),
    });
}
const { insertedIds } = db.customers.insertMany(customers);
const customersIds = insertedIds.map((id) => id.valueOf());
const orders = [];

customersIds.forEach((id) => {

    const ordersCount = Math.floor(Math.random() * (10 - 1) + 1);
    for (let j = 0; j < ordersCount; j++) {
        orders.push({
            customerId: id,
            count:      parseInt(ordersCount / 2 + 1),
            price:      Math.floor(Math.random() * (100 - 20) + 20),
            discount:   Math.floor(Math.random() * (30 - 5) + 5),
            title:      'Category' + Math.floor(Math.random() * 10),
            product:    faker.product(),
        });
    }
});

db.orders.insert(orders);

print('-----------------<<<<<<<<< DONE >>>>>>>>>>------------------');
print('Orders count :', db.orders.count());
print('Customers size :', db.customers.dataSize() / 1024, 'KB');
print('Orders size :', db.orders.dataSize() / 1024, 'KB');
print('Total size :', db.customers.dataSize() + db.orders.dataSize() / 1024, 'KB');
