import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-300 via-sky-100 to-green-200 px-6 py-12">
      <Link href="/tic-tac-toe">
        <h1 className="mb-8 cursor-pointer text-center text-6xl font-extrabold tracking-tight text-purple-700 drop-shadow-lg transition-transform hover:scale-105 hover:text-purple-500 sm:text-7xl md:text-8xl">
          Hank&apos;s Clubhouse
        </h1>
      </Link>
      <Image
        src="/steve-chicken-smash.png"
        alt="Minecraft Steve in Super Smash Bros"
        width={1024}
        height={1024}
        priority
        className="w-full max-w-4xl rounded-3xl shadow-2xl"
      />
    </div>
  );
}
