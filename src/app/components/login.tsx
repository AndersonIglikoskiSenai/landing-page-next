"use client"

import type React from "react"

import { useState } from "react"
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { X } from "lucide-react"
import { auth } from "@/app/lib/firebaseconfig"
import { useRouter } from "next/navigation"

interface LoginProps {
  onClose: () => void
}

export default function Login({ onClose }: LoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      if (!user.emailVerified) {
        await sendEmailVerification(user)
        setError("Verifique seu email para confirmar o cadastro.")
      } else {
        router.push("/profile")
        onClose()
      }
    } catch (error: any) {
      console.error("Login error:", error)

      // Handle Firebase auth errors
      const errorCode = error.code
      switch (errorCode) {
        case "auth/user-not-found":
          setError("Usuário não encontrado.")
          break
        case "auth/wrong-password":
          setError("Senha incorreta.")
          break
        case "auth/invalid-email":
          setError("Email inválido.")
          break
        case "auth/too-many-requests":
          setError("Muitas tentativas. Tente novamente mais tarde.")
          break
        default:
          setError("Erro ao fazer login. Tente novamente mais tarde.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full flex overflow-hidden">
        <div className="bg-gray-600 text-white p-8 flex-1 hidden text-center md:block">
          <h1 className="text-4xl font-bold mb-6">BEM VINDO!</h1>
          <div className="space-y-4">
            <p>Que bom ter você aqui.</p>
            <p>Faça login para continuar.</p>
            <p>
              Não tem uma conta?{" "}
              <a href="/register" className="text-gray-900 hover:bg-gray-200">
                Crie uma agora!
              </a>
            </p>
          </div>
        </div>
        <div className="flex-1 p-8 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className=" text-black text-4xl font-bold mb-6 text-gray-700">ENTRAR!</h1>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="text-black border-2 border-blue-900 rounded-lg p-2 w-full"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="block text-gray-700">Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="text-black border-2 border-blue-900 rounded-lg p-2 w-full"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <button type="submit" className="bg-blue-500 text-white mt-4 py-2 px-4 rounded w-full" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </div>
          </form>
          <button
            type="button"
            className="bg-blue-500 text-white mt-4 py-2 px-4 rounded w-full"
            onClick={() => {
              router.push("/register")
              onClose()
            }}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  )
}
