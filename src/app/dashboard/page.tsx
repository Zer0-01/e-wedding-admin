import AdminGuard from "@/components/admin-guard"

export default function DashboardPage() {
    return (
        <AdminGuard>
            <div>Admin Dashboard</div>
        </AdminGuard>
    )
}
