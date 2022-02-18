import TYPES from "store/types"

const initialState = {
  contactInfo : '',
  vetInfo : '',
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
    default:
      return state
  }
}

export default generalInfoReducer
