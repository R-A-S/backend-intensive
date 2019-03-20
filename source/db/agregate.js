// mongo --host 18.195.151.104 --port 27017 < index.js
use rstoliarenko

const customersCursor = db.customers.find();

const data = [];

customersCursor.forEach((customer) => {
    const {
        _id,
        name: { first, last },
    } = customer;

    const customerOrders = db.orders.aggregate([
        { $match: { customerId: _id.valueOf() } },
        { $group: { _id: '$product', total: { $sum: '$count' } } },
        { $sort: { total: 1 } }
    ]);

    data.push({ fName: first, lName: last, orders: customerOrders.toArray() });
});

print(tojson(data));
