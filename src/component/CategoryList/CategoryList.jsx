import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ handleToggle, p, title }) => {
  const categories = [
    { url: "/webdevelopment", name: "Web Geliştirme" },
    { url: "/mobiledevelopment", name: "Mobil Geliştirme" },
    { url: "/accounting", name: "Muhasebe" },
    { url: "/videoediting", name: "video editi" },
    { url: "/databases", name: "veri tabanları" },
    { url: "/basics", name: "temeller" },
    { url: "/graphicdesign", name: "grafik tasarımı" },
  ];
  return (
    <>
      <ul className={`py-2 flex ${p} gap-y-1 flex-col`}>
        {title && (
          <span className="text-gray-500 font-bold capitalize">{title}</span>
        )}
        {categories &&
          categories.map((category, id) => (
            <li
              key={id}
              className="list-none dark:text-slate-400 text-lg capitalize"
            >
              <Link
                onClick={handleToggle && handleToggle}
                to={`/courses${category.url}`}
                className="duration-300 hover:text-main dark:hover:text-white"
              >
                {category.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CategoryList;
