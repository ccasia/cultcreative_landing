import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to new-landing page with default locale
  redirect('/my/new-landing');
}
