import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Hoodies", href: "/products/hoodies", image: "/images/hoodie-gray.jpg" },
  { name: "Mugs", href: "/products/mugs", image: "/images/mug-white.jpg" },
  { name: "T-Shirts", href: "/products/tshirt", image: "/images/tshirt-white.jpg" },
];

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Products</h1>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="p-5 text-lg font-semibold">{category.name}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
