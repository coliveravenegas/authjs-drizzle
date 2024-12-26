import { signIn } from "@/auth";

export default async function Login() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <form
                action={async () => {
                    "use server"
                    await signIn("github", { redirectTo: "/profile" });
                }}
            >
                <button type="submit">Signin with GitHub</button>
            </form>

        </div>
    );
}
