import Image from "next/image";

export default function Home() {
  return (
    <div>This is main page
        <Image src="/logo.png" alt="okay" width={100} height={100} />
        <div className="mx-4">This is a margin of 4 units</div>
        <div className="mx-10 bg-slate-400">This is a margin of 10 units with a background color of slate-400</div>
    </div>
  );
}
