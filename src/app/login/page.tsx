"use client"

import { auth } from "@/utils/client-credentials"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const router = useRouter()

    const login = async () => {
        await signInWithEmailAndPassword(auth, "superadmin@lakarsoft.com", "Blackkuro01#")
        router.replace("/dashboard")
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <button onClick={login}>Login</button>
        </div>
    )
}
