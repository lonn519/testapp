Meteor.publish('p_questions', function() {
  return Questions.find();
});

Meteor.publish('p_answers', function() {
  return Answers.find();
});
