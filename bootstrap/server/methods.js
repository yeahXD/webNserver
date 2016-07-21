cl = console.log;

var tmp = Test.find({ no: 2963 }).fetch();
var tmp2 = Test.findOne({ no: 3827 });
var tmp3 = Test.find({
    no: {$gte: 2134, $lt: 2199, $ne: 2157},
    calc: {$in: [27134310, 27097275]}
}).fetch();
var standard = Test.findOne({
    _id: 'ADswYCSMSqCxhaycP'
});

// cl(Test.find({
//    createdAt: {$lt: standard.createdAt}
// }).fetch().length);

// cl(tmp[0]);
// cl(tmp2);
// cl(tmp3);
// cl(standard);

var obj = {};
obj.key = 'val';
obj.key2 = 'val2';
obj.key3 = 10;
cl(obj);

var arr = [];
arr.push('val1');
arr.push('val2');
cl(arr);
arr.pop();
cl(arr.length);