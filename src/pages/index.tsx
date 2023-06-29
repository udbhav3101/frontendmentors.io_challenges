import Image from "next/image";
export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div className="z-10 flex w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="border-gray-300 from-zinc-200 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30 fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl  lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
          <code className="font-mono font-bold">
            frontendmentors.io challenges
          </code>
        </p>
      </div>
    </main>
  );
}
