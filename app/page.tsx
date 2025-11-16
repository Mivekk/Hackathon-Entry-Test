import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <main className="flex w-full max-w-6xl flex-col items-center gap-8 p-6 sm:p-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Sales Analysis Dashboard
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Presented by{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">Chłopaki z GitHub&apos;a</span>
          </p>
        </div>

        {/* Image Container */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-transform hover:scale-[1.02] duration-300">
          <div className="relative w-full aspect-video">
            <Image src="/sales_analysis.png" alt="Sales Analysis" fill className="object-contain p-4" priority />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© 2025 Chłopaki z GitHub&apos;a</p>
        </div>
      </main>
    </div>
  );
}
