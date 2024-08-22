import UserAuthForm from "@/components/user-auth-form";

export default function Login() {
  return (
    <div className="grid place-items-center w-full min-h-screen bg-gray-100">
      <div className="flex flex-col bg-white w-full max-w-sm shadow-2xl rounded-lg p-8 gap-2">
        <h3 className="text-primary font-black text-2xl">Log in</h3>
        <p className="text-muted-foreground text-sm mb-4">
          login with your email & password to continue to the application.
        </p>
        <UserAuthForm />
        <p className="text-muted-foreground text-sm mt-2">
          Test credentials
          <br />
          <span className="inline-flex items-center justify-between w-full">
            <span>email: test@gsu.com</span>
            <span>pass: password</span>
          </span>
        </p>
      </div>
    </div>
  );
}
