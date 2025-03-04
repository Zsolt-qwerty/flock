import { doSocialLogin } from "@/app/actions";

const LoginForm = () => {
    return (
        <form action={doSocialLogin}>
            <button
                className="bg-pink-400 text-white p-1 px-2 rounded-md m-1 text-lg hover:bg-pink-500"
                type="submit" name="action" value="google">
                Sign in with Google
            </button>
            <button
                className="bg-black text-white p-1 px-2 rounded-md m-1 text-lg hover:bg-gray-900"
                type="submit" name="action" value="github">
                Sign in with GitHub
            </button>
        </form>
    );
}

export default LoginForm;
