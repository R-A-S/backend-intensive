// mongo --host 18.195.151.104 --port 27017 < index.js
// use rstoliarenko

const customersCursor = db.customers.find();

const data = [];

customersCursor.forEach((customer) => {
    const {
        _id,
        name: { first, last },
    } = customer;

    const ordersCursor = db.orders.find({ customerId: _id.valueOf() });
    const customerOrders = [];

    ordersCursor.forEach((order) => {
        const { _id, count, price, discount, product } = order;

        customerOrders.push({
            _id: _id.valueOf(),
            count,
            price,
            discount,
            product,
        });
    });
    data.push({ fName: first, lName: last, orders: customerOrders });
});

print(tojson(data));
