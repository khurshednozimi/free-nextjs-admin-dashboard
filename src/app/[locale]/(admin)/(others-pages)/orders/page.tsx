import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заказы | Masion Nozimi",
  description: "Журнал заказов LakLak и Instagram",
};

export default function OrdersPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Заказы" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-8 dark:border-gray-800 dark:bg-white/3">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Заказов пока нет. После запуска (31 октября) новые заказы с LakLak и Instagram будут отображаться здесь.
        </p>
      </div>
    </div>
  );
}
