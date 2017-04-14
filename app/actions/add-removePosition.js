function addProfession(position) {
  return {
    type: "ADD_POSITION",
    payload: {
      newPosition: position
    }
  }
}

function removeProfession(position) {
  return {
    type: "REMOVE_POSITION",
    payload: {
      positionToRemove: position
    }
  }
}

export {addProfession, removeProfession}
