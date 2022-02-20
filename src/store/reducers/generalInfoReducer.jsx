import TYPES from "store/types"

const initialState = {
  contactInfo : '',
  vetInfo : '',
  activation : '',
}

function generalInfoReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.CONTACT_INFO:
      return {
        ...state,
        contactInfo: action.payload
      }
    case TYPES.VET_INFO:
      return {
        ...state,
        vetInfo: action.payload
    }
    case TYPES.ACTIVATION_INFO:
      return {
        ...state,
        activation: action.payload
    }
    default:
      return state
  }
}

export default generalInfoReducer
