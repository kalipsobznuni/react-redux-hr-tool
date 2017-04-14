export default function(changedCandidate) {
  return {
    type: "CANDIDATE_CHANGE",
    payload: {
      id: changedCandidate.id,
      name: changedCandidate.name,
      profession: changedCandidate.profession,
      status: changedCandidate.status,
      date: changedCandidate.date,
      level: changedCandidate.level
    }
  }
}
