Template.questionPage.helpers({
  answers: function() {
    return Answers.find({qid: this._id});
  }
});
