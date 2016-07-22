Template.body.events({
    'click #btn_write': function(evt, tmpl) {
        evt.preventDefault();

        var name = $("#writer").val();
        var article = $('#article').val();

        var obj = {};
        obj.name = name;
        obj.article = article;
        // Database.insert(obj);
        Meteor.call('insertData', obj, function (err, rslt) {
            if(err) alert(err);
            else alert(rslt);
        });
    },
    'click #btn_remove': function(evt, tmpl) {
        evt.preventDefault();

        // Database.remove({
        //     _id: this._id
        // });
        Meteor.call('removeData', this._id, function (err, rslt) {
            alert(rslt);
        });
    },
    'click #btn_login': function(evt, tmpl) {
        evt.preventDefault();

        var myid = $("#myid").val();
        var mypw = $('#mypw').val();

        var obj = {};
        obj.myid = myid;
        obj.mypw = mypw;
        // Database.insert(obj);
        Meteor.call('login', obj, function (err, rslt) {
            if(err) alert(err);
            else alert(rslt);
        });
    }

});

Template.body.helpers({
    lists: function() {
        // return Database.find().fetch();
        Meteor.call('readData', function(err, rslt){
            Session.set('lists', rslt);
        });
        return Session.get('lists');
    }
});