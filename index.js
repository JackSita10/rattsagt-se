import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push('/dashboard');
      }
    });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await supabase.auth.signInWithOtp({ email });
    alert('Check your email for the login link!');
  };

  return (
    <div>
      <h1>Logga in</h1>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Din e-post" required />
        <button type="submit">Logga in</button>
      </form>
    </div>
  );
}