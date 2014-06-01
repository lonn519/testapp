if (Questions.find().count() === 0) {
  Questions.insert({
    qid: '1',
    answers: '4',
    qtext: 'Where did A and L first meet?'
  });

  Questions.insert({
    qid: '2',
    answers: '4',
    qtext: 'What was the subject of their first email?'
  });

  Questions.insert({
    qid: '3',
    answers: '4',
    qtext: 'Where did they get engaged?'
  });

  //answers

  Answers.insert({
    qid: '1',
    aid: '1',
    atext: 'A donut shop.'
  });

  Answers.insert({
    qid: '1',
    aid: '2',
    atext: 'The mall.'
  });

  Answers.insert({
    qid: '1',
    aid: '3',
    atext: 'At a Katy Perry concert.'
  });

  Answers.insert({
    qid: '1',
    aid: '4',
    atext: 'In Peru.'
  });


}
