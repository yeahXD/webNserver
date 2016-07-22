// cl = console.log;
//
// var tmp = Test.find({ no: 2963 }).fetch();
// var tmp2 = Test.findOne({ no: 3827 });
// var tmp3 = Test.find({
//     no: {$gte: 2134, $lt: 2199, $ne: 2157},
//     calc: {$in: [27134310, 27097275]}
// }).fetch();
// var standard = Test.findOne({
//     _id: 'ADswYCSMSqCxhaycP'
// });
//
// // cl(Test.find({
// //    createdAt: {$lt: standard.createdAt}
// // }).fetch().length);
//
// // cl(tmp[0]);
// // cl(tmp2);
// // cl(tmp3);
// // cl(standard);
//
// var obj = {};
// obj.key = 'val';
// obj.key2 = 'val2';
// obj.key3 = 10;
// cl(obj);
//
// var arr = [];
// arr.push('val1');
// arr.push('val2');
// cl(arr);
// arr.pop();
// cl(arr.length);


Meteor.methods({
    'insertData': function (obj) {
        //로그인되어있는가? 권한이 있는가? --> validation
        Database.insert(obj);
        return "글이 작성되었습니다";
    },
    'readData': function () {
        var lists = Database.find().fetch();
        return lists;
    },
    'removeData': function (_id) {
        Database.remove({_id: _id});
        return "삭제되었습니다.";
    },
    'login': function (obj) {
        var id = obj.myid;
        var pw = obj.mypw;
        var user = Database.findOne({id: id, pw: pw});
        if(user){
            if(user.pw === pw){
                return '로그인되었습니다.'
            }else
                return '비밀번호가 다릅니다'
        }else{
            return '일치하는 사용자가 없습니다.'
        }
    }
});