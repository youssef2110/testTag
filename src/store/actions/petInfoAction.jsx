import TYPES from "store/types"

export function petTypeAction(payload) {
  return {
    type: TYPES.PET_TYPE,
    payload: payload
  }
}

export function petTypeOtherAction(payload) {
  return {
    type: TYPES.PET_TYPENAME,
    payload: payload
  }
}

export function petNameAction(payload) {
  return {
    type: TYPES.PET_NAME,
    payload: payload
  }
}

export function petGenderAction(payload) {
  return {
    type: TYPES.PET_GENDER,
    payload: payload
  }
}

export function petBreedAction(payload) {
  return {
    type: TYPES.PET_BREED,
    payload: payload
  }
}

export function petColorAction(payload) {
  return {
    type: TYPES.PET_COLOR,
    payload: payload
  }
}

export function petSprayAction(payload) {
  return {
    type: TYPES.PET_SPRAY,
    payload: payload
  }
}

export function petAllergiesAction(payload) {
  return {
    type: TYPES.PET_ALLERGIES,
    payload: payload
  }
}

export function petConditionsAction(payload) {
  return {
    type: TYPES.PET_CONDITIONS,
    payload: payload
  }
}

export function petBirthdayAction(payload) {
  return {
    type: TYPES.PET_BIRTHDAY,
    payload: payload
  }
}

export function petAgeAction(payload) {
  return {
    type: TYPES.PET_AGE,
    payload: payload
  }
}

export function petPictureAction(payload) {
  return {
    type: TYPES.PET_PICTURE,
    payload: payload
  }
}
