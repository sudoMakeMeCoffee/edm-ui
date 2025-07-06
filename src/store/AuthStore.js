import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: {},

  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setUser: (value) => set({user: value})

}))

export default useAuthStore