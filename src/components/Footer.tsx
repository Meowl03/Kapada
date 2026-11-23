import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-7 sm:px-6 md:flex-row lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Codeswear home">
          <Image src="/hanger.png" alt="Codeswear" width={240} height={160} className="h-14 w-44 object-contain" />
        </Link>

        <p className="text-sm text-slate-400 md:border-l md:border-slate-700 md:pl-5">
          © {new Date().getFullYear()} Codeswear
        </p>

        <div className="flex items-center gap-3 md:ml-auto">
          <a href="#" aria-label="Facebook" className="text-slate-400 transition hover:text-white">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="text-slate-400 transition hover:text-white">
            <FaTwitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" className="text-slate-400 transition hover:text-white">
            <FaInstagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-slate-400 transition hover:text-white">
            <FaLinkedinIn className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
