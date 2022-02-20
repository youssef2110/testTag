import { takeEvery } from "redux-saga/effects"
import themeSaga from "./themeSaga"
import {
  petTypeSaga, 
  petTypeOtherSaga, 
  petNameSaga, 
  petGenderSaga, 
  petBreedSaga, 
  petColorSaga, 
  petSpraySaga,
  petAllergiesSaga, 
  petConditionsSaga,
  petBirthdaySaga,
  petAgeSaga,
  petPictureSaga,
} from "./petInfoSaga"
import { contactInfoSaga, vetInfoSaga, activationSaga } from "./generalInfoSaga"
import TYPES from "store/types"

function* rootSaga() {
  yield takeEvery(TYPES.PAGE_CHANGE_THEME, themeSaga)
  yield takeEvery(TYPES.PET_TYPE, petTypeSaga)
  yield takeEvery(TYPES.PET_TYPENAME, petTypeOtherSaga)
  yield takeEvery(TYPES.PET_NAME, petNameSaga)
  yield takeEvery(TYPES.PET_GENDER, petGenderSaga)
  yield takeEvery(TYPES.PET_BREED, petBreedSaga)
  yield takeEvery(TYPES.PET_COLOR, petColorSaga)
  yield takeEvery(TYPES.PET_SPRAY, petSpraySaga)
  yield takeEvery(TYPES.PET_ALLERGIES, petAllergiesSaga)
  yield takeEvery(TYPES.PET_CONDITIONS, petConditionsSaga)
  yield takeEvery(TYPES.PET_BIRTHDAY, petBirthdaySaga)
  yield takeEvery(TYPES.PET_AGE, petAgeSaga)
  yield takeEvery(TYPES.PET_PICTURE, petPictureSaga)
  yield takeEvery(TYPES.CONTACT_INFO, contactInfoSaga)
  yield takeEvery(TYPES.VET_INFO, vetInfoSaga)
  yield takeEvery(TYPES.ACTIVATION_INFO, activationSaga)
}

export default rootSaga
