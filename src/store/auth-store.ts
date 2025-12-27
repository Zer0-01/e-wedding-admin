import { User } from "firebase/auth"
import { create } from "zustand"

type AuthState = {
    user: User | null
    loading: boolean
    setUser: (user: User | null) => void
    setLoading: (loading: boolean) => void
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true,
    setUser: (user) => set({ user }),
    setLoading: (loading) => set({ loading }),
}))

export default useAuthStore