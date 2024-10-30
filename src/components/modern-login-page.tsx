'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Hardcoded credentials (for demo purposes only)
const VALID_CREDENTIALS = [
  { username: 'hello', password: 'hello123' }
]

export function ModernLoginPageComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const isValidCredential = VALID_CREDENTIALS.some(
      cred => cred.username === username && cred.password === password
    )

    if (isValidCredential) {
      localStorage.setItem('isLoggedIn', 'true')
      router.push('/research-resources')  // Update this line
    } else {
      setError('Username or password invalid')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-900 bg-opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]">
      <div className="flex flex-col items-center">
        <img 
          src="/images/RD-Axis.png" 
          alt="RD Axis Logo" 
          className="w-48 mb-8" 
        />
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-white">Welcome to RD Axis</h2>
            <p className="mt-2 text-sm text-gray-400">Log In</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <Label htmlFor="username" className="sr-only">Username</Label>
              <UserIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="username"
                name="username"
                type="text"
                required
                className="pl-10 w-full py-3 border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative">
              <Label htmlFor="password" className="sr-only">Password</Label>
              <LockIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="pl-10 pr-10 w-full py-3 border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <Button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
              >
                Log In
              </Button>
            </div>
          </form>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition duration-200">
                ¿Forgot your Password?
              </a>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition duration-200">
                Create an Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
