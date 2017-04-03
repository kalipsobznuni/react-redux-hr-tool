export default function(candidateID, status) {
  return {
    type: "STATUS_CHANGED",
    payload: {
      id: candidateID,
      status: status
    }
  }
}
