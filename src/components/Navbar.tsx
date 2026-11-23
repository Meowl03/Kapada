"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Products", href: "/products" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-violet-500/20 bg-slate-950/95 shadow-[0_8px_30px_rgba(15,23,42,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2"
          aria-label="Codeswear home"
        >
          <Image
            src="/hanger.png"
            alt="Codeswear"
            width={64}
            height={64}
            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            Codes<span className="text-violet-400">wear</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="ml-auto hidden h-full items-center gap-1 md:flex"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex h-full items-center px-4 text-sm font-semibold transition-colors duration-200 ${
                  active
                    ? "text-violet-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 bottom-0 h-0.5 origin-center rounded-full bg-violet-400 transition-transform duration-200 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/checkout"
          aria-label="Shopping cart"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-500 hover:text-white hover:shadow-[0_8px_24px_rgba(139,92,246,0.28)] md:ml-0"
        >
          <FaShoppingCart className="h-5 w-5" />
        </Link>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="grid grid-cols-4 border-t border-slate-800 bg-slate-950 px-2 py-2 md:hidden"
      >
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-lg px-2 py-2 text-center text-xs font-semibold transition-colors ${
                active
                  ? "bg-violet-500/15 text-violet-300"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;