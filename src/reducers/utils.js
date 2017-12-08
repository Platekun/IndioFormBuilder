export const updateQuestion = (question, id, fn) => {
  if (question instanceof Array) {
    return question.map(
      (question) => updateQuestion(question, id, fn)
    );
  } else {
    if (question.id === id) {
      return fn(question);
    } else if (question.subInputs.length) {
      return {
        ...question,
        subInputs: question.subInputs.map(
          (subQuestion) => updateQuestion(subQuestion, id, fn)
        )
      };
    } else {
      return question;
    }
  }
};

export const removeQuestion = (question, id) => {
  if (question.id === id) {
    return undefined;
  } else if (question.subInputs.length) {
    return {
      ...question,
      subInputs: question.subInputs.map(
        (subquestion) => removeQuestion(subquestion, id)
      ).filter((x) => !!x)
    };
  } else {
    return question;
  }
};
