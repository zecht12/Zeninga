import Link from "next/link";
import { RiInstagramLine, RiFacebookLine, RiThreadsLine, RiTwitterLine, RiWhatsappLine } from 'react-icons/ri'

const Socials = () => {
    return(
        <div className="flex items-center gap-x-4 text-lg">
            <Link href="/" className="text-slate-100 hover:text-blue-500 transition-all duration-300">
                <RiWhatsappLine />
            </Link>
            <Link href="/" className="text-slate-100 hover:text-blue-500 transition-all duration-300">
                <RiFacebookLine />
            </Link>
            <Link href="/" className="text-slate-100 hover:text-blue-500 transition-all duration-300">
                <RiTwitterLine />
            </Link>
            <Link href="/" className="text-slate-100 hover:text-blue-500 transition-all duration-300">
                <RiThreadsLine />
            </Link>
            <Link href="/" className="text-slate-100 hover:text-blue-500 transition-all duration-300">
                <RiInstagramLine />
            </Link>
        </div>
    )
};

export default Socials;