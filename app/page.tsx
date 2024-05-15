import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 ">
      <div className=" space-y-6 text-center">
        <div className="flex items-center justify-center">
          <Image src="/images/logo.jpg" alt="image" width={200} height={200} className='rounded-full shadow-xl shadow-neutral-500' />
        </div>
        <h1 className={cn( "text-6xl font-bold text-white drop-shadow-md", font.className,)}>
            Welcome to <span className="text-red-500">ZechtNime</span>
          </h1>
          <p className="text-white text-lg">
            Make your dream come true
          </p>
          <div>
            <LoginButton mode="redirect" asChild>
              <Button variant="secondary" size="xl">
                Sign in
              </Button>
            </LoginButton>
          </div>
      </div>
    </div>
  );
}
