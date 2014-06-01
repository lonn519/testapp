if (Questions.find().count() === 0) {


var questionId = Questions.insert({
  qid: '1',
  answers: '4',
  qtext: 'Where did A and L first meet?'
});

  Answers.insert({
    qid: questionId,
    aid: '1',
    atext: 'A donut shop.',
    upvoters: [], votes: 0
  });

  Answers.insert({
    qid: questionId,
    aid: '2',
    atext: 'The mall.',
    upvoters: [], votes: 0
  });

  Answers.insert({
    qid: questionId,
    aid: '3',
    atext: 'At a Katy Perry concert.',
    upvoters: [], votes: 0
  });

  Answers.insert({
    qid: questionId,
    aid: '4',
    atext: 'In Peru.',
    upvoters: [], votes: 0
  });

var questionId = Questions.insert({
  qid: '2',
  answers: '4',
  qtext: 'What was the subject of their first email?'
});

Answers.insert({
  qid: questionId,
  aid: '1',
  atext: 'Yo baby.',
  upvoters: [], votes: 0
});

Answers.insert({
  qid: questionId,
  aid: '2',
  atext: 'I am a Nigerian Prince.',
  upvoters: [], votes: 0
});

Answers.insert({
  qid: questionId,
  aid: '3',
  atext: 'So amazing. #10 will make you cry.',
  upvoters: [], votes: 0
});

Answers.insert({
  qid: questionId,
  aid: '4',
  atext: 'Marry me.',
  upvoters: [], votes: 0
});

var questionId = Questions.insert({
  qid: '3',
  answers: '4',
  qtext: 'Where did they get engaged?'
});

Answers.insert({
  qid: questionId,
  aid: '1',
  atext: 'At home.',
  upvoters: [], votes: 0
});

Answers.insert({
  qid: questionId,
  aid: '2',
  atext: 'Niagra Falls',
  upvoters: [], votes: 0
});

Answers.insert({
  qid: questionId,
  aid: '3',
  atext: 'Fairview Mall',
  upvoters: [], votes: 0
});

Answers.insert({
  qid: questionId,
  aid: '4',
  atext: 'Belize',
  upvoters: [], votes: 0
});

}
