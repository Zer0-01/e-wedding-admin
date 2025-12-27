'use client'

import useAuthStore from "@/store/auth-store"
import { auth } from "@/utils/client-credentials"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const setUser = useAuthStore((state) => state.setUser)
    const setLoading = useAuthStore((state) => state.setLoading)

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
    }, [setLoading, setUser])

    return children
}

export default AuthProvider