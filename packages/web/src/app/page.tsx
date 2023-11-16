import Link from "next/link";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <h1 className="text-3xl font-bold">NextAuth.js Example</h1>
        <div className="flex flex-row space-x-2 items-center justify-center">
          <Link
            href="/api/auth/signin"
            className="border border-black p-2 hover:bg-black/10 rounded"
          >
            Login
          </Link>
          <Link
            href="/api/auth/signout"
            className="border border-black p-2 hover:bg-black/10 rounded"
          >
            Sign Out
          </Link>
        </div>

        {session ? (
          <span>Home</span>
        ) : (
          <h1 className="text-5xl">You Shall Not Pass!</h1>
        )}
      </div>
    </main>
  );
}
