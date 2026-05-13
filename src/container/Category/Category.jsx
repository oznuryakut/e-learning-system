import React from "react"; // React kütüphanesi bileşen oluşturmak için import ediliyor
import { useState } from "react"; // React'in useState Hook'u, durum yönetimi için import ediliyor
import { useParams } from "react-router-dom"; // URL parametrelerini almak için kullanılıyor
import { Back, CourseItem } from "../../component"; // Back ve CourseItem bileşenleri import ediliyor
import CardSkeleton from "../../Skeleton/CardSkeleton"; // Yükleme sırasında kullanılan kart iskeleti bileşeni
import useFetch from "../../useFetch"; // Veri çekmek için özel bir React Hook'u import ediliyor

const url =
  "https://raw.githubusercontent.com/oznuryakut/my-json-files/refs/heads/main/courses.json"; // Veri kaynağının URL'si

const Category = () => {
  const [query, setQuery] = useState(""); // Kullanıcı arama sorgusunu yönetmek için durum değişkeni
  const { isLoading, Data } = useFetch(url); // useFetch Hook'u, veri yüklenip yüklenmediğini ve çekilen veriyi döndürüyor
  const { categoryid } = useParams(); // URL'den "categoryid" parametresini alıyor

  const courses = Data.filter((courses) => courses.categoryid == categoryid); // Belirli bir kategoriye ait kursları filtreliyor

  const filterCourses = courses.filter(
    (course) =>
      course.root.toLowerCase().includes(query.toLowerCase()) || // Arama sorgusuna göre kursların "root" alanını kontrol ediyor
      course.title.toLowerCase().includes(query.toLowerCase()) || // "title" alanını kontrol ediyor
      course.name.toLowerCase().includes(query.toLowerCase()) // "name" alanını kontrol ediyor
  );

  const change = (e) => {
    setQuery(e.target.value); // Kullanıcı arama sorgusunu güncelleyen fonksiyon
  };

  return (
    <div className="w-full min-h-screen dark:bg-slate-900 py-28"> {/* Sayfa kapsayıcısı */}
      <Back url={`/courses`} input={true} change={change} /> {/* Geri düğmesi ve arama alanı */}
      <div className="flex gap-5 flex-wrap px-4 sm:px-10"> {/* Kursları listelemek için kapsayıcı */}
        {isLoading ? ( // Eğer veri yükleniyorsa aşağıdaki bileşen gösterilir
          <CardSkeleton coursePreview={true} count={8} /> // Kart iskeleti bileşeni, 8 adet placeholder gösterir
        ) : filterCourses.length === 0 ? ( // Eğer filtrelenmiş sonuç yoksa mesaj gösterilir
          <h1 className="text-3xl dark:text-white font-medium my-10">
            Sorry we couldn't find any results for "
            <span className="text-main dark:text-sky">{query}</span>"
          </h1>
        ) : (
          filterCourses &&
          filterCourses.map((course) => ( // Filtrelenmiş kurslar listelenir
            <CourseItem
              key={course.id} // Kursun benzersiz anahtarı
              course={course} // Kurs verisi
              coursePreview={true} // Kurs önizleme özelliği
              url={course.title} // Kursun URL'ine yönlendirme
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Category; // Category bileşeni dışa aktarılır
