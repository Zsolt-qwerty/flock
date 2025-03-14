import { doLogout } from "@/app/actions"

const Logout = () => {
    return (
        <form action={doLogout}>
            <button
                className="bg-blue-400 my-2 text-white p-1 px-2 rounded hover:bg-blue-500"
                type="submit">
                Logout
            </button>
        </form>
    );
}

export default Logout;
