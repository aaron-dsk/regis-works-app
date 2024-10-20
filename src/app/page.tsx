import { redirect } from 'next/navigation'

export default function Home() {
  // Check if user is logged in
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true'

  if (isLoggedIn) {
    redirect('/(auth)/recommended-jobs')
  } else {
    redirect('/login')
  }
}