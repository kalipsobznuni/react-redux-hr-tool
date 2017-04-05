export default function(newCandidate) {
  return {
    type: "ADD_CANDIDATE",
    payload: {
      id: newCandidate.id,
      name: newCandidate.name,
      profession: newCandidate.profession,
      status: newCandidate.status
    }
  }
}
