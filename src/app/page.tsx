"use client"

import useAuthStore from "@/store/auth-store";
import { redirect } from "next/navigation";

export default function HomePage() {
  const { user, loading } = useAuthStore()

  if (loading) return null

  redirect(user ? "/dashboard" : "/login")
}
