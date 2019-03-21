// mongo --host 18.195.151.104 --port 27017 < pagination.js
use rstoliarenko

function pagination(size, page) {
    const pages = Math.ceil(db.customers.countDocuments({}) / size);
    if (page > pages) {
        print('max page is', pages);
    }

    const customersCursor = db.customers
        .find()
        .limit(size)
        .skip(size * (page - 1));

    const data = [];

    customersCursor.forEach((customer) => {
        const {
            _id,
            name: { first, last },
        } = customer;

        const customerOrders = db.orders.aggregate([
            { $match: { customerId: _id.valueOf() } },
            { $group: { _id: '$product', total: { $sum: '$count' } } },
            { $sort: { total: 1 } },
        ]);

        data.push({ fName: first, lName: last, orders: customerOrders.toArray() });
    });

    print(tojson(data));
}

pagination(3,4)