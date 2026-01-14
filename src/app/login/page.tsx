"use client"

import { auth } from "@/utils/client-credentials"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "sonner"
import { useForm } from "@tanstack/react-form"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export default function LoginPage() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        },

        onSubmit: ({ value }) => {
           login(value.email, value.password)
        }
    })

    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const login = async (email: string, password: string) => {
        try {
            setLoading(true)
            await signInWithEmailAndPassword(auth, email, password)
            router.replace("/dashboard")
        } catch {
            toast.error("Failed to sign in")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>
                        Admin Login
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4" >
                    <form id="login-form" onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                        
                    }} className="space-y-4">
                        <FieldGroup>
                            <form.Field name="email">

                                {(field) => {
                                    const isInvalid =
                                        field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field data-invalid={isInvalid}>
                                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                            <Input
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                aria-invalid={isInvalid}
                                                placeholder="john_doe@email.com"
                                            />
                                        </Field>
                                    )
                                }

                                }



                            </form.Field>

                        </FieldGroup>
                        <FieldGroup>
                            <form.Field name="password">

                                {(field) => {
                                    const isInvalid =
                                        field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field data-invalid={isInvalid}>
                                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                            <Input
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                aria-invalid={isInvalid}
                                                type="password"
                                                
                                            />
                                        </Field>
                                    )
                                }

                                }



                            </form.Field>

                        </FieldGroup>


                    </form>


                    <Button
                        className="w-full"
                        form="login-form"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
