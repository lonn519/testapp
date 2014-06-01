Answers = new Meteor.Collection('answers');


Meteor.methods({
  upvote: function(answerId) {
    Answers.update(answerId, {
      //$addToSet: {upvoters: user._id},
      $inc: {votes: 1}
    });
  }
});
