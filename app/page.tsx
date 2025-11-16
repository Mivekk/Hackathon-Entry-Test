"use client";

import Image from "next/image";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Miesięczny przychód w PLN dla klasy jabłek i wszystkich jabłek
              </h3>
            </div>
            <div
              className="relative w-full h-96 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedChart({ src: "/chart1.png", title: "Total Quantity by Variety" })}
            >
              <Image src="/chart1.png" alt="Total Quantity by Variety" fill className="object-contain" priority />
            </div>
          </div>

          {/* Chart 2 - Monthly Profit */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Łączny profit w PLN według odmiany
              </h3>
            </div>
            <div
              className="relative w-full h-96 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedChart({ src: "/chart2.png", title: "Monthly Profit by Class" })}
            >
              <Image src="/chart2.png" alt="Monthly Profit by Class" fill className="object-contain" />
            </div>
          </div>

          {/* Chart 3 - Revenue Share */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Miesięczny przychód w PLN dla zsumowanej sprzedaży
              </h3>
            </div>
            <div
              className="relative w-full h-96 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedChart({ src: "/chart3.png", title: "Revenue Share by Variety" })}
            >
              <Image src="/chart3.png" alt="Revenue Share by Variety" fill className="object-contain" />
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

        {/* Python Code Blocks Grid */}
        <div className="w-full max-w-[1400px] space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Python Analysis Code</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Code Block 1 - Data Loading */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Miesięczny przychód w PLN dla klasy jabłek i wszystkich jabłek
                </h3>
              </div>
              <div className="overflow-x-auto">
                <SyntaxHighlighter
                  language="python"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  {`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

cennik_df = pd.read_csv("cennik.txt", sep="\t",header=None, names=['variety','priceforkg'])
jablka_df = pd.read_csv("jablka.txt", sep="\t", header=None, names=["date", "variety", "class", "code", "value"])
jablka_df['date'] = pd.to_datetime(jablka_df['date'])
jablka_df['value'] = np.int32(jablka_df['value'])
cennik_df['priceforkg'] = (
    cennik_df['priceforkg']
    .astype(str)
    .str.replace(",", ".", regex=False)
    .astype(np.float32)
)

merged = jablka_df.merge(cennik_df, on="variety", how="left")
merged["profit"] = merged["value"] * merged["priceforkg"]
merged["date"] = pd.to_datetime(merged["date"])
merged["month"] = merged["date"].dt.to_period("M")
monthly_profit = merged.groupby("month")["profit"].sum()

plt.figure(figsize=(15, 4))

plt.plot(
    monthly_profit.index.astype(str),
    monthly_profit.values,
    marker="o",
    linewidth=2,
    markersize=8,
    label="Total"
)

monthly_profit_class = merged.groupby(["month", "class"])["profit"].sum().unstack()

for cls in monthly_profit_class.columns:
    plt.plot(
        monthly_profit_class.index.astype(str),
        monthly_profit_class[cls],
        marker="o",
        linewidth=2,
        markersize=6,
        label=f"Class {cls}"
    )

plt.xlabel("Miesiąc", fontsize=14)
plt.ylabel("Przychód [PLN]", fontsize=14)
plt.title("MMiesięczny przychód w PLN dla klasy jabłek i wszystkich jabłek", fontsize=18)

plt.xticks(rotation=45, fontsize=12)
plt.yticks(fontsize=12)
plt.grid(True, linestyle="--", linewidth=0.6)
plt.legend()
plt.tight_layout()
plt.show()`}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* Code Block 2 - Quantity Analysis */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Łączny profit w PLN według odmiany
                </h3>
              </div>
              <div className="overflow-x-auto">
                <SyntaxHighlighter
                  language="python"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  {`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

cennik_df = pd.read_csv("cennik.txt", sep="\t",header=None, names=['variety','priceforkg'])
jablka_df = pd.read_csv("jablka.txt", sep="\t", header=None, names=["date", "variety", "class", "code", "value"])
jablka_df['date'] = pd.to_datetime(jablka_df['date'])
jablka_df['value'] = np.int32(jablka_df['value'])
cennik_df['priceforkg'] = (
    cennik_df['priceforkg']
    .astype(str)
    .str.replace(",", ".", regex=False)
    .astype(np.float32)
)           

merged = jablka_df.merge(cennik_df, on="variety", how="left")
merged["profit"] = merged["value"] * merged["priceforkg"]
merged["date"] = pd.to_datetime(merged["date"])
merged["month"] = merged["date"].dt.to_period("M")
monthly_profit = merged.groupby("month")["profit"].sum()

variety_profit = merged.groupby("variety").agg(
    total_profit=("profit", "sum"),
    price=("priceforkg", "first")
)

plt.figure(figsize=(10,6))
plt.bar(variety_profit.index, variety_profit["total_profit"], color='skyblue')

plt.xlabel("Odmiana")
plt.ylabel("Łaczny Profit [PLN]")
plt.title("Łaczny Profit w PLN według odmiany")
plt.xticks(rotation=45, ha='right')

plt.grid(axis='y', linestyle='--', linewidth=0.5)
plt.tight_layout()
plt.show()`}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* Code Block 3 - Revenue Analysis */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Miesięczny przychód w PLN dla zsumowanej sprzedaży
                </h3>
              </div>
              <div className="overflow-x-auto">
                <SyntaxHighlighter
                  language="python"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  {`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

cennik_df = pd.read_csv("cennik.txt", sep="\t",header=None, names=['variety','priceforkg'])
jablka_df = pd.read_csv("jablka.txt", sep="\t", header=None, names=["date", "variety", "class", "code", "value"])
jablka_df['date'] = pd.to_datetime(jablka_df['date'])
jablka_df['value'] = np.int32(jablka_df['value'])
cennik_df['priceforkg'] = (
    cennik_df['priceforkg']
    .astype(str)
    .str.replace(",", ".", regex=False)
    .astype(np.float32)
)

merged = jablka_df.merge(cennik_df, on="variety", how="left")
merged["profit"] = merged["value"] * merged["priceforkg"]
merged["date"] = pd.to_datetime(merged["date"])
merged["month"] = merged["date"].dt.to_period("M")
monthly_profit = merged.groupby("month")["profit"].sum()


plt.figure(figsize=(15, 4))

plt.plot(
    monthly_profit.index.astype(str),
    monthly_profit.values,
    marker="o",
    linewidth=2,
    markersize=8
)

plt.xlabel("Miesiąc", fontsize=14)
plt.ylabel("Przychód[PLN]", fontsize=14)
plt.title("Miesięczny przychód w PLN dla zsumowanej sprzedaży", fontsize=18)

plt.xticks(rotation=45, fontsize=12)
plt.yticks(fontsize=12)

plt.grid(True, linestyle="--", linewidth=0.6)

plt.tight_layout()
plt.show()`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-slate-400 dark:text-slate-600 mt-4">
          <p>© 2025 Chłopaki z GitHub&apos;a</p>
        </div>
      </main>
    </div>
  );
}
