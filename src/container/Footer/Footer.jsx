import React, { useState } from "react"; // React ve useState Hook'unu import eder
import { Link } from "react-router-dom"; // React Router'dan Link bileşenini import eder
import { CategoryList, PagesList, SocialIcons } from "../../component"; // Diğer bileşenleri import eder

const Footer = () => {
  const [categories, setCategories] = useState([]); // Category listesi için state tanımlar
  const links = ["courses", "about", "contact"]; // Sayfa linklerinin listesi
  return (
    <div className="w-full bg-neutral-100 dark:bg-slate-800"> {/* Footer'ın ana kapsayıcısı */}
      <div className="flex justify-between flex-wrap gap-5 px-4 sm:px-10 py-10"> {/* Esnek bir yapı için flex container */}
        <div className="w-full lg:w-[23%] md:w-[48%]"> {/* Footer'ın birinci bölümü */}
          <Link
            className="text-white dark:text-white capitalize
                 font-bold text-3xl"
            to="/"
          >
            Ya
            <span
              className="text-slate-900
                  dark:text-white"
            >
              kut.
            </span>
          </Link>
          <p className="py-3 text-slate-700 dark:text-slate-300 w-full"> {/* Tanıtıcı metin */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            architecto accusamus quam itaque necessitatibus! Neque!
          </p>
        </div>

        <div className="w-full lg:w-[23%] md:w-[48%]"> {/* Footer'ın ikinci bölümü */}
          <h1
            className="text-slate-900 dark:text-white capitalize
                 font-bold text-3xl"
          >
             kategoriler
          </h1>
          <CategoryList /> {/* Kategori listesini render eder */}
        </div>

        <div className="w-full lg:w-[23%] md:w-[48%]"> {/* Footer'ın üçüncü bölümü */}
          <h1
            className="text-slate-900 dark:text-white capitalize
                 font-bold text-3xl"
          >
            linkler
          </h1>
          <PagesList /> {/* Sayfa linklerini render eder */}
        </div>

        <div className="w-full lg:w-[23%] md:w-[48%]"> {/* Footer'ın dördüncü bölümü */}
          <h1
            className="text-slate-900 dark:text-white capitalize
                 font-bold text-3xl"
          >
            iletişime geç
          </h1>
          <div className="py-3">
            <div className="relative w-full border border-slate-400 dark:border-slate-500 rounded"> {/* Email girişi */}
              <input
                type="text"
                className="w-full p-3 rounded outline-0 dark:bg-slate-800 dark:text-white"
                placeholder="E- Postanı gir"
              />
              <span
                className="absolute right-0 top-0 flex items-center
               justify-center bg-main dark:bg-sky-500 text-white cursor-pointer h-full w-14 text-lg"
              >
                Git
              </span>
            </div>
            <SocialIcons /> {/* Sosyal medya ikonlarını render eder */}
          </div>
        </div>
      </div>
      <div className="w-full py-5 border-t border-slate-400 dark:border-slate-500 text-center"> {/* Footer alt bilgisi */}
        <p className="text-xl text-slate-900 dark:text-white">
          &copy;2025 Yakut.
        </p>
      </div>
    </div>
  );
};

export default Footer; // Footer bileşenini dışa aktarır
