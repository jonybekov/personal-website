import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { FluidSimulation } from "@/components/FluidSimulation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <FluidSimulation className={styles.bg} />
      <main className={styles.main}>
        <header className="container py-10">
          <div className="flex justify-between items-center">
            <h1 className={inter.className + " " + "text-2xl font-semibold"}>
              R4Y
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a
                    className="rounded-md py-2 px-3 hover:bg-white/10"
                    href="https://blog.itsr4y.com"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section>
          <div className="container py-5 text-center">
            <h2 className="text-slate-400 text-lg">
              R4Y •{" "}
              <span className="text-white">creating things that look cool</span>{" "}
              • tashkent, uzbekistan
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
