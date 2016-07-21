//admin account
//중복을 막기위해 if문 첨가
var admin = MyUser.find({
    name: 'admin'
}).fetch();

if(admin.length === 0){
    MyUser.insert({
        name: 'admin',
        id: 'admin',
        pw: 'admin123',
        email: 'admin@gmail.com',
        phone: '010-xxxx-xxxx',
    });
}

var testDB = Test.find().fetch();

if(testDB.length === 0){
    for(var i = 0; i < 10000; i++){
        Test.insert({
            createdAt: new Date(),
            no: i,
            dbName: "testDB" + i,
            calc: i*12345,
        });
    }
}