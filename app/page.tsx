"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedChart, setSelectedChart] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
      <main className="flex w-full flex-col items-center gap-10 p-6 sm:p-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
            Sales Analysis Dashboard
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Presented by <span className="font-semibold text-slate-900 dark:text-white">Chłopaki z GitHub&apos;a</span>
          </p>
        </div>

        {/* Charts Grid */}
        <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chart 1 - Quantity by Variety */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Total Quantity by Variety</h3>
            </div>
            <div
              className="relative w-full h-96 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedChart({ src: "/chart1_quantity.png", title: "Total Quantity by Variety" })}
            >
              <Image
                src="/chart1_quantity.png"
                alt="Total Quantity by Variety"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Chart 2 - Monthly Profit */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Monthly Profit by Class</h3>
            </div>
            <div
              className="relative w-full h-96 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedChart({ src: "/chart2_profit.png", title: "Monthly Profit by Class" })}
            >
              <Image src="/chart2_profit.png" alt="Monthly Profit by Class" fill className="object-contain" />
            </div>
          </div>

          {/* Chart 3 - Revenue Share */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Revenue Share by Variety</h3>
            </div>
            <div
              className="relative w-full h-96 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedChart({ src: "/chart3_revenue.png", title: "Revenue Share by Variety" })}
            >
              <Image src="/chart3_revenue.png" alt="Revenue Share by Variety" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedChart && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedChart(null)}
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{selectedChart.title}</h3>
                <button
                  onClick={() => setSelectedChart(null)}
                  className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="relative w-full h-[calc(90vh-80px)]" onClick={(e) => e.stopPropagation()}>
                <Image src={selectedChart.src} alt={selectedChart.title} fill className="object-contain p-8" />
              </div>
            </div>
          </div>
        )}

        {/* Python Code Sample */}
        <div className="w-full max-w-5xl bg-slate-900 dark:bg-black rounded-xl overflow-hidden border border-slate-800 dark:border-slate-800">
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
              <span className="text-blue-300">df_merged</span>[<span className="text-green-400">&quot;month&quot;</span>
              ] = <span className="text-blue-300">df_merged</span>[
              <span className="text-green-400">&quot;date&quot;</span>
              ].<span className="text-yellow-300">dt</span>.<span className="text-yellow-300">to_period</span>(
              <span className="text-green-400">&quot;M&quot;</span>){"\n"}
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
              <span className="text-blue-300">monthly_profit</span> = <span className="text-blue-300">df_merged</span>.
              <span className="text-yellow-300">groupby</span>([
              <span className="text-green-400">&quot;month&quot;</span>,{" "}
              <span className="text-green-400">&quot;type&quot;</span>])[
              <span className="text-green-400">&quot;revenue&quot;</span>].
              <span className="text-yellow-300">sum</span>().<span className="text-yellow-300">unstack</span>
              (fill_value=
              <span className="text-orange-400">0</span>){"\n"}
              <span className="text-blue-300">monthly_profit</span>.<span className="text-yellow-300">plot</span>(kind=
              <span className="text-green-400">&quot;bar&quot;</span>, ax=
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>], stacked=
              <span className="text-purple-400">True</span>){"\n"}
              <span className="text-blue-300">monthly_total</span> = <span className="text-blue-300">df_merged</span>.
              <span className="text-yellow-300">groupby</span>(<span className="text-green-400">&quot;month&quot;</span>
              )[
              <span className="text-green-400">&quot;revenue&quot;</span>].
              <span className="text-yellow-300">sum</span>(){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>].
              <span className="text-yellow-300">plot</span>(<span className="text-yellow-300">range</span>(
              <span className="text-yellow-300">len</span>(<span className="text-blue-300">monthly_total</span>)),{" "}
              <span className="text-blue-300">monthly_total</span>.<span className="text-yellow-300">values</span>,
              color=
              <span className="text-green-400">&quot;red&quot;</span>, linewidth=
              <span className="text-orange-400">2</span>, marker=
              <span className="text-green-400">&quot;o&quot;</span>, label=
              <span className="text-green-400">&quot;Total&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>].
              <span className="text-yellow-300">set_title</span>(
              <span className="text-green-400">&quot;Monthly Profit by Class (PLN)&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>].
              <span className="text-yellow-300">set_xlabel</span>(
              <span className="text-green-400">&quot;Month&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>].
              <span className="text-yellow-300">set_ylabel</span>(
              <span className="text-green-400">&quot;Profit (PLN)&quot;</span>){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>].
              <span className="text-yellow-300">legend</span>(){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">1</span>].
              <span className="text-yellow-300">tick_params</span>(axis=
              <span className="text-green-400">&quot;x&quot;</span>, rotation=
              <span className="text-orange-400">45</span>){"\n"}
              {"\n"}
              <span className="text-blue-300">revenue_by_variety</span> ={" "}
              <span className="text-blue-300">df_merged</span>.<span className="text-yellow-300">groupby</span>(
              <span className="text-green-400">&quot;variety&quot;</span>)[
              <span className="text-green-400">&quot;revenue&quot;</span>].
              <span className="text-yellow-300">sum</span>().<span className="text-yellow-300">sort_values</span>
              (ascending=
              <span className="text-purple-400">False</span>){"\n"}
              <span className="text-blue-300">top_varieties</span> ={" "}
              <span className="text-blue-300">revenue_by_variety</span>.<span className="text-yellow-300">head</span>(
              <span className="text-orange-400">6</span>){"\n"}
              <span className="text-blue-300">other</span> = <span className="text-blue-300">revenue_by_variety</span>.
              <span className="text-yellow-300">iloc</span>[<span className="text-orange-400">6</span>:].
              <span className="text-yellow-300">sum</span>(){"\n"}
              <span className="text-purple-400">if</span> <span className="text-blue-300">other</span> &gt;{" "}
              <span className="text-orange-400">0</span>:{"\n"}
              {"    "}
              <span className="text-blue-300">top_varieties</span>[
              <span className="text-green-400">&quot;Other&quot;</span>] = <span className="text-blue-300">other</span>
              {"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">2</span>].
              <span className="text-yellow-300">pie</span>({"\n"}
              {"    "}
              <span className="text-blue-300">top_varieties</span>,{"\n"}
              {"    "}labels=<span className="text-blue-300">top_varieties</span>.
              <span className="text-yellow-300">index</span>,{"\n"}
              {"    "}autopct=<span className="text-green-400">&quot;%1.1f%%&quot;</span>,{"\n"}
              {"    "}startangle=<span className="text-orange-400">90</span>,{"\n"}
              {"    "}textprops={"{"}
              <span className="text-green-400">&quot;fontsize&quot;</span>: <span className="text-orange-400">10</span>,{" "}
              <span className="text-green-400">&quot;weight&quot;</span>:{" "}
              <span className="text-green-400">&quot;bold&quot;</span>
              {"}"},{"\n"}){"\n"}
              <span className="text-blue-300">axes</span>[<span className="text-orange-400">2</span>].
              <span className="text-yellow-300">set_title</span>(
              <span className="text-green-400">&quot;Revenue Share by Variety&quot;</span>, fontsize=
              <span className="text-orange-400">12</span>){"\n"}
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
