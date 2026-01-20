import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GraduationCap, Loader2, Info, CheckCircle } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function SignupPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    registrationNumber: '',
    course: '',
    branch: '',
    yearSemester: '',
    password: '',
    confirmPassword: '',
    terms: false,
  })
  const [state, setState] = useState({ message: '', error: false, issues: [] })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const issues = []

    // Validation
    if (!formData.name) issues.push('Name is required')
    if (!formData.email) issues.push('Email is required')
    if (!formData.registrationNumber) issues.push('Registration number is required')
    if (!formData.course) issues.push('Course is required')
    if (!formData.branch) issues.push('Branch is required')
    if (!formData.yearSemester) issues.push('Year/Semester is required')
    if (!formData.password) issues.push('Password is required')
    if (!formData.confirmPassword) issues.push('Confirm password is required')
    if (formData.password !== formData.confirmPassword) issues.push('Passwords do not match')
    if (!formData.terms) issues.push('You must accept the terms and conditions')

    if (issues.length > 0) {
      setState({
        message: 'Please fix the following issues:',
        error: true,
        issues
      })
      setLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setState({
        message: 'Account created successfully! Redirecting...',
        error: false,
        issues: []
      })
      localStorage.setItem('user', JSON.stringify({
        name: formData.name,
        email: formData.email,
        registrationNumber: formData.registrationNumber
      }))
      setTimeout(() => {
        navigate('/app/dashboard')
      }, 1500)
    }, 1000)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      <div className="w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <a href="/" className="flex items-center justify-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-semibold text-2xl">MNNIT-Connect</span>
          </a>
        </div>
        <Card>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Create an Account</CardTitle>
            <CardDescription>
              Enter your details below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationNumber">Registration No.</Label>
                <Input
                  id="registrationNumber"
                  name="registrationNumber"
                  type="text"
                  placeholder="e.g., 2023BTECHCS001"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Input
                    id="course"
                    name="course"
                    type="text"
                    placeholder="e.g., B.Tech"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Input
                    id="branch"
                    name="branch"
                    type="text"
                    placeholder="e.g., CSE"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearSemester">Year/Semester</Label>
                <Input
                  id="yearSemester"
                  name="yearSemester"
                  type="text"
                  placeholder="e.g., 2nd Year / 4th Sem"
                  value={formData.yearSemester}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="terms" className="font-normal">
                  I accept the terms and conditions
                </Label>
              </div>

              {state.message && (
                <Alert variant={state.error ? 'destructive' : 'default'}>
                  {state.error ? (
                    <Info className="h-4 w-4" />
                  ) : (
                    <CheckCircle className="h-4 w-4" />
                  )}
                  <AlertTitle>{state.error ? 'Error' : 'Success'}</AlertTitle>
                  {state.issues && state.issues.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {state.issues.map((issue) => (
                        <li key={issue}>{issue}</li>
                      ))}
                    </ul>
                  ) : (
                    <AlertDescription>{state.message}</AlertDescription>
                  )}
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing Up...
                  </>
                ) : (
                  'Sign Up'
                )}
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <a href="/login" className="underline">
                Login
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
