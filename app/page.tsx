import Image from "next/image";
import { Button } from "@/components/ui/button";
import { League_Spartan, Montserrat, Open_Sans, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"]
});

const head = League_Spartan({
  subsets: ["latin"],
  weight: ["700"]
});

const body = Montserrat({
  subsets: ["latin"],
  weight: ["400"]
});

const bodyBold = Montserrat({
  subsets: ["latin"],
  weight: ["600"]
});

const button = Open_Sans({
  subsets: ["latin"],
  weight: ["700"]
})

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#153067] to-zinc-900">
      <div className=" space-y-6 text-center">
        <div className="flex items-center justify-center">
          <Image src="/avatar.jpg" alt="image" width={200} height={200} className='rounded-full shadow-xl shadow-slate-600' />
        </div>
        <h1 className="text-6xl font-CodecProExtraBold text-white drop-shadow-md">
            Welcome to <span className="text-red-500">Zeninga</span>
          </h1>
          <p className={cn("text-white text-lg", body.className)}>
            Make your dream come true
          </p>
          <div>
            <LoginButton mode="redirect" asChild>
              <Button variant="secondary" size="xl" className={cn(button.className)}>
                Sign in
              </Button>
            </LoginButton>
          </div>
      </div>
    </div>
  );
}
