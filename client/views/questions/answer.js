Template.answer.events({
  'click .upvote': function(e) {
    e.preventDefault();
    //alert(this._id);
    Meteor.call('upvote', this._id);
  }
});
