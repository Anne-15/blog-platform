import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')
  redirect(`/Riishi`);
}