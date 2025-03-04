import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logout from "@/components/Logout";

const HomePage: React.FC = async () => {
    
    const session = await auth();

    if (!session?.user) { redirect("/"); }

    return (
        <div className="flex flex-col items-center m-4">
            <h1 className="text-3xl my-2">Welcome {session?.user?.name || 'Guest'}</h1>
            <Image
                src={session?.user?.image || '/globe.svg'}
                alt={session?.user?.name || 'Guest'}
                width={72}
                height={72}
                className="rounded-full"
            />
            <Logout />
        </div>
    );
};

export default HomePage;