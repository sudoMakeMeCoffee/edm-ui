import { create } from "zustand";

const useSideBarStore = create((set) => ({
    showSideBar: false,

    setShowSideBar: (value) => set({showSideBar: value}) 
}))

export default useSideBarStore