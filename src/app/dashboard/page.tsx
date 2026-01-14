"use client"

import AdminGuard from "@/components/admin-guard"
import { auth } from "@/utils/client-credentials"
import { signOut } from "firebase/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, LayoutDashboard } from "lucide-react"

export default function DashboardPage() {
    return (
        <AdminGuard>
            <section className="p-4 sm:p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <LayoutDashboard className="h-5 w-5 text-muted-foreground" />
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Dashboard
                        </h1>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => signOut(auth)}
                        className="gap-2"
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className="text-3xl font-semibold tracking-tight">
                                Admin
                            </span>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className="text-3xl font-semibold tracking-tight">
                                Active
                            </span>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Access
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className="text-3xl font-semibold tracking-tight">
                                Full
                            </span>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </AdminGuard>
    )
}
