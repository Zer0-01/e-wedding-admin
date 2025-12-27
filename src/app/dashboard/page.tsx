"use client"

import AdminGuard from "@/components/admin-guard"
import { auth } from "@/utils/client-credentials"
import { signOut } from "firebase/auth"

export default function DashboardPage() {
    return (
        <AdminGuard>
            <div>Admin Dashboard</div>
            <button
                onClick={() => signOut(auth)}
                className="text-sm text-muted-foreground"
            >
                Logout
            </button>        </AdminGuard>
    )
}
