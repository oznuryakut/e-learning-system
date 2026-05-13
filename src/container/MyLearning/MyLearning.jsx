import React from "react"; // React kütüphanesini import eder
import { useContext } from "react"; // React'in useContext Hook'unu import eder
import { CourseItem } from "../../component"; // CourseItem bileşenini import eder
import { CourseContext } from "../../Context/CourseContextProvider/CourseContextProvider"; // CourseContext'i import eder
import CardSkeleton from "../../Skeleton/CardSkeleton"; // Yüklenme animasyonu için Skeleton bileşenini import eder

const MyLearning = () => {
  const { isLoading, Data } = useContext(CourseContext); // Context'ten yüklenme durumu ve kurs verilerini alır
  const courses = Data.filter((course) => course.id === 22); // ID'si 22 olan kursları filtreler

  return (
    <div className="dark:bg-slate-900 h-full w-full py-20"> {/* Sayfa düzeni */}
      {/* Üst Başlık */}
      <div className="bg-neutral-100 h-32 w-screen dark:bg-slate-800 px-4 sm:px-10 flex items-center">
        <h1 className=" dark:text-white capitalize text-5xl">my learning</h1> {/* Ana başlık */}
      </div>

      <div className="px-4 sm:px-10"> {/* Ana içerik alanı */}
        <h2 className="text-slate-900 w-28 font-medium py-2 dark:border-slate-400 border-b-4 border-slate-900 dark:text-slate-200 text-xl my-4 capitalize">
          all courses {/* Alt başlık */}
        </h2>
        <div className="flex gap-5 flex-wrap"> {/* Kurs kartları alanı */}
          {isLoading ? ( // Yüklenme durumu kontrol edilir
            <CardSkeleton status={true} /> // Yüklenme sırasında Skeleton bileşeni gösterilir
          ) : (
            courses.map((course) => ( // Kurslar yüklendiğinde listeleme yapılır
              <CourseItem
                course={course} // Kurs verisi
                key={course.id} // Her kurs için benzersiz bir anahtar
                url={`${course.title}/learn`} // Kursun detay sayfası için URL
                state={course} // Kursun durumu
                status={true} // Kurs tamamlanma durumu
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLearning; // MyLearning bileşenini dışa aktarır
