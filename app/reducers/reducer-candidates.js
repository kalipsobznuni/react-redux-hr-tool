import uuid from 'uuid/v4';
import _ from 'lodash';
import moment from 'moment';
const initialState =   [
    {
      id: uuid(),
      name: "David Hakobyan",
      profession: "Developer",
      status: "Shortlisted",
      date: moment("2017-06-14"),
    },
    {
      id: uuid(),
      name: "Ann Brown",
      profession: "Developer",
      status: "Rejected",
      date: moment("2017-05-14"),
    },
    {
      id: uuid(),
      name: "Maria Sharapova",
      profession: "Designer",
      status: "Accepted",
      date: moment("2017-06-10"),
    },
    {
      id: uuid(),
      name: "Erik Davtyan",
      profession: "Developer",
      status: "Rejected",
      date: moment(),
    },
    {
      id: uuid(),
      name: "Hakob Paronyan",
      profession: "Engineer",
      status: "Shortlisted",
      date: moment("2018-06-14"),
    },
    {
      id: uuid(),
      name: "Hillary Banks",
      profession: "Designer",
      status: "Accepted",
      date: moment(),
    }
  ]

export default function(state = initialState, action) {
  switch(action.type) {
    case "CANDIDATE_CHANGE":
      const changedCandidate = Object.assign({}, {
        ..._.find(state, {id: action.payload.id}),
        name: action.payload.name,
        profession: action.payload.profession,
        status: action.payload.status,
        date: action.payload.date,
        time: action.payload.time
      });
      const index = _.findIndex(state, {id: changedCandidate.id});
      const newState = state.slice();
      newState[index] = changedCandidate;
      return newState;
      break;
    case "ADD_CANDIDATE":
      return [...state, action.payload];
      break;
  }
  return state;
}
