import UserAuthForm from "@/components/user-auth-form";

export default function Login() {
  return (
    <div className="grid place-items-center w-full min-h-screen bg-gray-100">
      <div className="flex flex-col bg-white w-full max-w-sm shadow-2xl rounded p-4 gap-2">
        <h3 className="text-primary font-black text-2xl">Log in</h3>
        <UserAuthForm />
      </div>
    </div>
  );
}
