import uuid from 'uuid/v4';
import _ from 'lodash';
const initialState =   [
    {
      id: uuid(),
      name: "David Hakobyan",
      profession: "Developer",
      status: "Shortlisted",
      date: new Date("2017-06-14"),
      level: "Intern"
    },
    {
      id: uuid(),
      name: "Ann Brown",
      profession: "Developer",
      status: "Rejected",
      date: new Date("2017-05-14"),
      level: "Junior"
    },
    {
      id: uuid(),
      name: "Maria Sharapova",
      profession: "Designer",
      status: "Accepted",
      date: new Date("2017-06-10"),
      level: "Middle"
    },
    {
      id: uuid(),
      name: "Erik Davtyan",
      profession: "Developer",
      status: "Rejected",
      date: new Date(),
      level: "Senior"
    },
    {
      id: uuid(),
      name: "Hakob Paronyan",
      profession: "Engineer",
      status: "Shortlisted",
      date: new Date("2018-06-14"),
      level: "Junior"
    },
    {
      id: uuid(),
      name: "Hillary Banks",
      profession: "Designer",
      status: "Accepted",
      date: new Date(),
      level: "Junior"
    }
  ]

export default function(candidates = initialState, action) {
  switch(action.type) {
    case "CANDIDATE_CHANGE":
      const changedCandidate = Object.assign({}, {
        ..._.find(candidates, {id: action.payload.id}),
        name: action.payload.name,
        profession: action.payload.profession,
        status: action.payload.status,
        date: action.payload.date,
        level: action.payload.level
      });
      const index = _.findIndex(candidates, {id: changedCandidate.id});
      const newState = candidates.slice();
      newState[index] = changedCandidate;
      return newState;
      break;
    case "ADD_CANDIDATE":
      return [...candidates, action.payload];
      break;
    case "DELETE_CANDIDATE":
      const {id} = action.payload;
      const deleteIndex = _.findIndex(candidates, {id: id});
      let _newState = candidates.slice();
      _newState.splice(deleteIndex, 1);
      return _newState;
      break;
  }
  return candidates;
}
