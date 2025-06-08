import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push('/');
      } else {
        setUser(user);
      }
    });
  }, []);

  return (
    <div>
      <h1>Välkommen till Rattsagt Dashboard</h1>
      <p>{user?.email}</p>
    </div>
  );
}