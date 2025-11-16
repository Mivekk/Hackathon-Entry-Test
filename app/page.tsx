import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
      <main className="flex w-full max-w-6xl flex-col items-center gap-10 p-6 sm:p-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
            Sales Analysis Dashboard
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Presented by <span className="font-semibold text-slate-900 dark:text-white">Chłopaki z GitHub&apos;a</span>
          </p>
        </div>

        {/* Image Container */}
        <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <div className="relative w-full aspect-video">
            <Image src="/sales_analysis.png" alt="Sales Analysis" fill className="object-contain p-4" priority />
          </div>
        </div>

        {/* Python Code Sample */}
        <div className="w-full bg-slate-900 dark:bg-black rounded-xl overflow-hidden border border-slate-800 dark:border-slate-800">
          <div className="flex items-center justify-between px-5 py-3 bg-slate-800 dark:bg-slate-900 border-b border-slate-700">
            <span className="text-sm font-mono text-slate-300">sales_analysis.py</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <pre className="p-6 overflow-x-auto text-sm">
            <code className="text-slate-300">
              <span className="text-purple-400">import</span> <span className="text-blue-400">matplotlib.pyplot</span>{" "}
              <span className="text-purple-400">as</span> <span className="text-blue-400">plt</span>
              {"\n"}
              <span className="text-purple-400">import</span> <span className="text-blue-400">pandas</span>{" "}
              <span className="text-purple-400">as</span> <span className="text-blue-400">pd</span>
              {"\n"}
              {"\n"}
              <span className="text-blue-300">df</span> = <span className="text-blue-400">pd</span>.
              <span className="text-yellow-300">read_csv</span>(
              <span className="text-green-400">&quot;jablka.txt&quot;</span>, sep=
              <span className="text-green-400">&quot;\t&quot;</span>, names=[
              <span className="text-green-400">&quot;date&quot;</span>,{" "}
              <span className="text-green-400">&quot;variety&quot;</span>,{" "}
              <span className="text-green-400">&quot;type&quot;</span>,{" "}
              <span className="text-green-400">&quot;customer_id&quot;</span>,{" "}
              <span className="text-green-400">&quot;quantity&quot;</span>]){"\n"}
              <span className="text-blue-300">df</span>[<span className="text-green-400">&quot;date&quot;</span>] ={" "}
              <span className="text-blue-400">pd</span>.<span className="text-yellow-300">to_datetime</span>(
              <span className="text-blue-300">df</span>[<span className="text-green-400">&quot;date&quot;</span>]){"\n"}
              <span className="text-blue-300">prices</span> = <span className="text-blue-400">pd</span>.
              <span className="text-yellow-300">read_csv</span>(
              <span className="text-green-400">&quot;cennik.txt&quot;</span>, sep=
              <span className="text-green-400">&quot;\t&quot;</span>, names=[
              <span className="text-green-400">&quot;variety&quot;</span>,{" "}
              <span className="text-green-400">&quot;price&quot;</span>], decimal=
              <span className="text-green-400">&quot;,&quot;</span>){"\n"}
              {"\n"}
              <span className="text-blue-300">df_merged</span> = <span className="text-blue-300">df</span>.
              <span className="text-yellow-300">merge</span>(<span className="text-blue-300">prices</span>, on=
              <span className="text-green-400">&quot;variety&quot;</span>){"\n"}
              <span className="text-blue-300">df_merged</span>[
              <span className="text-green-400">&quot;revenue&quot;</span>] ={" "}
              <span className="text-blue-300">df_merged</span>[
              <span className="text-green-400">&quot;quantity&quot;</span>] *{" "}
              <span className="text-blue-300">df_merged</span>[<span className="text-green-400">&quot;price&quot;</span>
              ]{"\n"}
              {"\n"}
              <span className="text-blue-300">fig</span>, <span className="text-blue-300">axes</span> ={" "}
              <span className="text-blue-400">plt</span>.<span className="text-yellow-300">subplots</span>(
              <span className="text-orange-400">1</span>, <span className="text-orange-400">3</span>, figsize=(
              <span className="text-orange-400">15</span>, <span className="text-orange-400">4</span>)){"\n"}
              {"\n"}
              <span className="text-blue-300">df</span>.<span className="text-yellow-300">groupby</span>(
              <span className="text-green-400">&quot;variety&quot;</span>)[
              <span className="text-green-400">&quot;quantity&quot;</span>].
              <span className="text-yellow-300">sum</span>().<span className="text-yellow-300">plot</span>(kind=
              <span className="text-green-400">&quot;bar&quot;</span>, ax=
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">0</span>], color=
              <span className="text-green-400">&quot;steelblue&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">0</span>].
              <span className="text-yellow-300">set_title</span>(
              <span className="text-green-400">&quot;Total Quantity by Variety&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">0</span>].
              <span className="text-yellow-300">set_xlabel</span>(
              <span className="text-green-400">&quot;Variety&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">0</span>].
              <span className="text-yellow-300">set_ylabel</span>(
              <span className="text-green-400">&quot;Quantity&quot;</span>){"\n"}
              {"\n"}
              <span className="text-blue-300">df</span>.<span className="text-yellow-300">groupby</span>(
              <span className="text-green-400">&quot;type&quot;</span>)[
              <span className="text-green-400">&quot;quantity&quot;</span>].
              <span className="text-yellow-300">sum</span>().<span className="text-yellow-300">plot</span>(kind=
              <span className="text-green-400">&quot;bar&quot;</span>, ax=
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>], color=
              <span className="text-green-400">&quot;orange&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>].
              <span className="text-yellow-300">set_title</span>(
              <span className="text-green-400">&quot;Sales by Type&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>].
              <span className="text-yellow-300">set_xlabel</span>(
              <span className="text-green-400">&quot;Type&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>].
              <span className="text-yellow-300">set_ylabel</span>(
              <span className="text-green-400">&quot;Quantity&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>].
              <span className="text-yellow-300">tick_params</span>(axis=
              <span className="text-green-400">&quot;x&quot;</span>, rotation=
              <span className="text-orange-400">0</span>){"\n"}
              {"\n"}
              <span className="text-blue-300">revenue_by_variety</span> ={" "}
              <span className="text-blue-300">df_merged</span>.<span className="text-yellow-300">groupby</span>(
              <span className="text-green-400">&quot;variety&quot;</span>)[
              <span className="text-green-400">&quot;revenue&quot;</span>].
              <span className="text-yellow-300">sum</span>(){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">2</span>].
              <span className="text-yellow-300">pie</span>(<span className="text-blue-300">revenue_by_variety</span>,
              labels=
              <span className="text-blue-300">revenue_by_variety</span>.<span className="text-yellow-300">index</span>,
              autopct=
              <span className="text-green-400">&quot;%1.1f%%&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">2</span>].
              <span className="text-yellow-300">set_title</span>(
              <span className="text-green-400">&quot;Revenue Share by Variety&quot;</span>){"\n"}
              {"\n"}
              <span className="text-blue-400">plt</span>.<span className="text-yellow-300">tight_layout</span>(){"\n"}
              <span className="text-blue-400">plt</span>.<span className="text-yellow-300">savefig</span>(
              <span className="text-green-400">&quot;sales_analysis.png&quot;</span>){"\n"}
            </code>
          </pre>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-slate-400 dark:text-slate-600 mt-4">
          <p>© 2025 Chłopaki z GitHub&apos;a</p>
        </div>
      </main>
    </div>
  );
}
