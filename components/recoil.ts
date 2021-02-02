import { atom } from "recoil";

export const activeTab = atom({
  key: 'selectedActiveTab',
  default: 'home'
})

export default activeTab