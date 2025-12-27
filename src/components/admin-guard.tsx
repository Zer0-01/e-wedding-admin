"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import useAuthStore from "@/store/auth-store"

export default function AdminGuard({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuthStore()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) router.replace("/login")
    }, [user, loading, router])

    if (loading || !user) return null

    return children
}
