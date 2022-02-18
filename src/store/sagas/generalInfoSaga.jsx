import { select } from "redux-saga/effects"

export function* contactInfoSaga() {
    const conatctInfo = yield select((state) => state.generalInfo.contactInfo)
    let info = JSON.parse(localStorage.getItem("generalInfo"))
    info.contact = conatctInfo
    localStorage.setItem("generalInfo", JSON.stringify(info))
}
export function* vetInfoSaga() {
  const vetInfo = yield select((state) => state.generalInfo.vetInfo)
  let info = JSON.parse(localStorage.getItem("generalInfo"))
  info.veterinarian = vetInfo
  localStorage.setItem("generalInfo", JSON.stringify(info))
}

