export default function(
  state =
  [
    {
      id: 0,
      name: "David Hakobyan",
      profession: "Developer",
      status: "Shortlisted"
    },
    {
      id: 1,
      name: "Ann Brown",
      profession: "Developer",
      status: "Rejected"
    },
    {
      id: 2,
      name: "Maria Sharapova",
      profession: "Designer",
      status: "Accepted"
    },
    {
      id: 3,
      name: "Erik Davtyan",
      profession: "Developer",
      status: "Rejected"
    },
    {
      id: 4,
      name: "Hakob Paronyan",
      profession: "Engineer",
      status: "Shortlisted"
    },
    {
      id: 5,
      name: "Hillary Banks",
      profession: "Designer",
      status: "Accepted"
    }
  ],
  action) {
  switch(action.type) {
    case "STATUS_CHANGED":
      const newState = state.slice();
      newState[action.payload.id].status = action.payload.status;
      return newState;
      break;
  }
  return state;
}
