import TYPES from "store/types"

const initialState = {
  type : '',
  typeOther : '',
  name : '',
  gender : '',
  breed : '',
  color : '',
  spray : false,
  allergies : [''],
  conditions : [''],
  birthday :'',
  age :'',
  picture : '',
  picturePreview : '',
}

function petInfoReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.PET_TYPE:
      return {
        ...state,
        type: action.payload
      }
    case TYPES.PET_TYPENAME:
      return {
        ...state,
        typeOther: action.payload
    }
    case TYPES.PET_NAME:
      return {
        ...state,
        name: action.payload
    }
    case TYPES.PET_GENDER:
      return {
        ...state,
        gender: action.payload
    }
    case TYPES.PET_BREED:
      return {
        ...state,
        breed: action.payload
    }
    case TYPES.PET_COLOR:
      return {
        ...state,
        color: action.payload
    }
    case TYPES.PET_SPRAY:
      return {
        ...state,
        spray: action.payload
    }
    case TYPES.PET_ALLERGIES:
      return {
        ...state,
        allergies: action.payload
    }
    case TYPES.PET_CONDITIONS:
      return {
        ...state,
        conditions: action.payload
    }
    case TYPES.PET_BIRTHDAY:
      return {
        ...state,
        birthday: action.payload
    }
    case TYPES.PET_AGE:
      return {
        ...state,
        age: action.payload
    }
    case TYPES.PET_PICTURE:
      return {
        ...state,
        picture: action.payload.picture,
        picturePreview: action.payload.picturePreview
    }
    default:
      return state
  }
}

export default petInfoReducer
