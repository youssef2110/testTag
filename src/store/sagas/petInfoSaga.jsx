import { select } from "redux-saga/effects"

export function* petTypeSaga() {
  const petInfo = yield select((state) => state.petInfo.type)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.type = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}

export function* petTypeOtherSaga() {
  const petInfo = yield select((state) => state.petInfo.typeOther)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.typeOther = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}
export function* petNameSaga() {
  const petInfo = yield select((state) => state.petInfo.name)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.name = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}
export function* petGenderSaga() {
  const petInfo = yield select((state) => state.petInfo.gender)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.gender = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}
export function* petBreedSaga() {
  const petInfo = yield select((state) => state.petInfo.breed)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.breed = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}
export function* petColorSaga() {
  const petInfo = yield select((state) => state.petInfo.color)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.color = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}
export function* petSpraySaga() {
  const petInfo = yield select((state) => state.petInfo.spray)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.spray = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}
export function* petAllergiesSaga() {
  const petInfo = yield select((state) => state.petInfo.allergies)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.allergies = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}
export function* petConditionsSaga() {
  const petInfo = yield select((state) => state.petInfo.conditions)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.conditions = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}
export function* petBirthdaySaga() {
    const petInfo = yield select((state) => state.petInfo.birthday)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.birthday = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}
export function* petAgeSaga() {
    const petInfo = yield select((state) => state.petInfo.age)
    let info = JSON.parse(localStorage.getItem("petInfo"))
    info.age = petInfo
  localStorage.setItem("petInfo", JSON.stringify(info))
}
export function* petPictureSaga() {
  const petInfo = yield select((state) => state.petInfo.picture)
  const petInfo2 = yield select((state) => state.petInfo.picturePreview)
  let info = JSON.parse(localStorage.getItem("petInfo"))
  info.picture = petInfo
  info.picturePreview = petInfo2
  localStorage.setItem("petInfo", JSON.stringify(info))
}

