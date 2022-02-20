import TYPES from "store/types"

export function contactInfoAction(payload) {
    return {
      type: TYPES.CONTACT_INFO,
      payload: payload
    }
}
  
export function VetInfoAction(payload) {
  return {
    type: TYPES.VET_INFO,
    payload: payload
  }
}

export function ActivationAction(payload) {
  return {
    type: TYPES.ACTIVATION_INFO,
    payload: payload
  }
}