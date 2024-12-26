import { auth, signOut } from "@/auth";

export default async function Profile() {
  const session = await auth()

  if (!session?.user) return null

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <pre>{JSON.stringify(session.user, null, 2)}</pre>

      <form
        action={async () => {
          "use server"
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button type="submit">Signout</button>
      </form>


    </div>
  );
}
