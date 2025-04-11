import Header from "@/app/(landing)/header";
import Footer from "@/app/(landing)/footer";
import { ReactNode } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Link } from "lucide-react";

export default function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}

      <section className="bg-black">
        <div className="max-w-7xl m-auto py-25">
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h1 className="text-white text-4xl font-extrabold">
              Lorem Ipsum <span className="text-teal-400">Dummy Text</span> Demo
            </h1>
            <p className="text-gray-300 mt-2">
              Get the best advices from our experts, including expert artists,
              painters, marathon enthusiasts and RDX, totally free.
            </p>
            <Link href={"/contact-us"}>
              <button className="mt-6 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00bba7_0%,#393BB2_50%,#7ccf00_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Explore
                </span>
              </button>
            </Link>
          </BackgroundLines>
        </div>
      </section>
      <Footer />
    </>
  );
}
