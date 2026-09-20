import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Товары | Masion Nozimi",
  description: "Ассортимент магазина Masion Nozimi",
};

const products = [
  { sku: "MN-PANT-BLK-M", name: "Трусы хлопковые", color: "Чёрный", size: "M", buy: 35, sell: 120, stockLaklak: 0, stockHome: 0 },
  { sku: "MN-PANT-BEG-L", name: "Трусы хлопковые", color: "Бежевый", size: "L", buy: 35, sell: 120, stockLaklak: 0, stockHome: 0 },
  { sku: "MN-BRA-BLK-75B", name: "Бюстгальтер", color: "Чёрный", size: "75B", buy: 42, sell: 180, stockLaklak: 0, stockHome: 0 },
  { sku: "MN-NGN-PNK-M", name: "Сорочка ночная", color: "Розовый", size: "M", buy: 45, sell: 220, stockLaklak: 0, stockHome: 0 },
  { sku: "MN-NGN-WHT-L", name: "Сорочка ночная", color: "Белый", size: "L", buy: 45, sell: 220, stockLaklak: 0, stockHome: 0 },
  { sku: "MN-PJ-GRY-M", name: "Пижама комплект", color: "Серый", size: "M", buy: 40, sell: 250, stockLaklak: 0, stockHome: 0 },
  { sku: "MN-PJ-BLU-L", name: "Пижама комплект", color: "Голубой", size: "L", buy: 40, sell: 250, stockLaklak: 0, stockHome: 0 },
  { sku: "MN-LACE-RED-S", name: "Трусы кружевные", color: "Красный", size: "S", buy: 38, sell: 150, stockLaklak: 0, stockHome: 0 },
];

export default function ProductsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Товары" />
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/3">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-white/5">
              <tr className="text-xs font-medium text-gray-500">
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Название</th>
                <th className="px-4 py-3">Цвет</th>
                <th className="px-4 py-3">Размер</th>
                <th className="px-4 py-3">Закупка</th>
                <th className="px-4 py-3">Продажа</th>
                <th className="px-4 py-3">LakLak</th>
                <th className="px-4 py-3">Дом</th>
                <th className="px-4 py-3">Статус</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                const total = p.stockLaklak + p.stockHome;
                return (
                  <tr key={p.sku} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="px-4 py-3 font-medium text-gray-800 dark:text-white/90">{p.sku}</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{p.name}</td>
                    <td className="px-4 py-3">{p.color}</td>
                    <td className="px-4 py-3">{p.size}</td>
                    <td className="px-4 py-3">{p.buy} TJS</td>
                    <td className="px-4 py-3">{p.sell} TJS</td>
                    <td className="px-4 py-3">{p.stockLaklak}</td>
                    <td className="px-4 py-3">{p.stockHome}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700">
                        {total === 0 ? "Нет в наличии" : total <= 2 ? "Мало" : "В наличии"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
