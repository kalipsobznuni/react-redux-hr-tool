export default function (id) {
  return {
    type: "DELETE_CANDIDATE",
    payload: {
      id: id
    }
  }
}
