import { Main } from "next/document";
import { Login } from "../component/login";

export default function Home() {
  return (
    <main className="flex item-center justify-center h-screen">
      <Login />
    </main>
  );
}
