import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Финансы | Masion Nozimi",
  description: "План и факт по выручке и прибыли",
};

export default function FinancePage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Финансы" />
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3">
          <p className="text-sm text-gray-500">Стартовый капитал</p>
          <p className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">500 TJS</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3">
          <p className="text-sm text-gray-500">План 1-го месяца</p>
          <p className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">1 600 TJS</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3">
          <p className="text-sm text-gray-500">Комиссия LakLak</p>
          <p className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">0%</p>
        </div>
      </div>
    </div>
  );
}
