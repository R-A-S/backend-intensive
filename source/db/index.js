// mongo --host 18.195.151.104 --port 27017 < index.js

use rstoliarenko
db;

show collections
db.customers.drop();
db.orders.drop();

const fName = [ 'Roman', 'Maya', 'Irina', 'Anna', 'John', 'Petya' ];
const lName = [ 'Doe', 'Fatalerorovich', 'McLane', 'Johnson', 'Shevchenko' ];
const products = [ 'Apples', 'Carrots', 'Spaceships', 'Oranges', 'Beefs', 'Airplanes', 'Blackjack', 'Bug' ];

for (let i = 0; i < 3000; i++) {
    const { insertedId } = db.customers.insertOne({
        name: {
            first: fName[ Math.floor(Math.random() * fName.length) ],
            last:  lName[ Math.floor(Math.random() * lName.length) ],
        },
        balance: Math.floor(Math.random() * 10000),
        created: new Date().toString(),
    });

    const orders = Math.floor(Math.random() * (10 - 1) + 1);
    for (let j = 0; j < orders; j++) {
        const document = {
            customerId: insertedId.valueOf(),
            count:      parseInt(orders / 2 + 1) ,
            price:      Math.floor(Math.random() * (100 - 20) + 20),
            discount:   Math.floor(Math.random() * (30 - 5) + 5),
            title:      'Category' + Math.floor(Math.random() * products.length),
            product:    products[ Math.floor(Math.random() * products.length) ],
        };

        db.orders.bulkWrite([{ insertOne: { document: document } }]);
    }
    print(i)
}
print('-----------------<<<<<<<<< DONE >>>>>>>>>>------------------')
print('Orders count :', db.orders.count())
print('Customers size :', db.customers.dataSize() / 1024, 'KB')
print('Orders size :', db.orders.dataSize() / 1024, 'KB')
print('Total size :', db.customers.dataSize() + db.orders.dataSize() / 1024, 'KB')
