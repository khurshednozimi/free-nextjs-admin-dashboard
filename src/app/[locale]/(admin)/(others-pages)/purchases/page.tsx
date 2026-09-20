import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Закупки | Masion Nozimi",
  description: "Партии с Pinduoduo и себестоимость",
};

export default function PurchasesPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Закупки" />
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/3">
        <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
          Первая партия (бюджет 500 TJS)
        </h3>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <li>• Поставщик: Pinduoduo</li>
          <li>• Плановая дата заказа: 9 октября 2026</li>
          <li>• Лимит: товар 420–450 TJS + доставка 30–50 TJS</li>
          <li>• Статус: не заказано</li>
        </ul>
      </div>
    </div>
  );
}
