Template.body.events({
    'click #btn_write': function (evt, tmpl) {
        evt.preventDefault();
        var name = $("#writer").val();
        var article = $("#article").val();

        var obj = {};
        obj.name = name;
        obj.article = article;
        Database.insert(obj);
    },
    'click #btn_remove': function (evt, tmpl) {
        evt.preventDefault();
        Database.remove({
            id: this._id
        });
    }
});

Template.body.helpers({
   lists: function () {
       return Database.find().fetch();
   }
});