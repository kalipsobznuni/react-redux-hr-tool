function changeQuestion(info) {
  return {
    type: "CHANGE_QUESTIONS",
    payload: {
      profession: info.profession,
      level: info.level,
      question: info.question,
      index: info.index
    }
  }
}

function addQuestion(profession, level) {
  return {
    type: "ADD_QUESTION",
    payload: {
      profession: profession,
      level: level
    }
  }
}

function removeQuestion(profession, level, index) {
  return {
    type: "REMOVE_QUESTION",
    payload: {
      professionR: profession,
      levelR: level,
      indexR: index
    }
  }
}

export {changeQuestion, addQuestion, removeQuestion};
