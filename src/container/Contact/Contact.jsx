import React, { useContext } from "react"; // React'in temel işlevlerini ve useContext Hook'unu import ediyor
import ContactSection from "../../component/ContactSection/ContactSection"; // İletişim bölümü bileşenini import ediyor
import { CourseContext } from "../../Context/CourseContextProvider/CourseContextProvider"; // CourseContext sağlayıcısından veriyi alır
import SectionSkeleton from "../../Skeleton/SectionSkeleton"; // Yükleme sırasında gösterilecek iskelet bileşeni

const Contact = () => {
  const { isLoading } = useContext(CourseContext); // CourseContext'ten isLoading durumunu alıyor
  return (
    <div className="w-full min-h-screen dark:bg-slate-900 py-28"> {/* Ana kapsayıcı div */}
      {isLoading ? (
        <SectionSkeleton
          reverse={true} // Skeleton bileşenini ters çevirmek için parametre
          w="w-[500px]" // Genişlik parametresi
          h="h-[300px]" // Yükseklik parametresi
          button={true} // Düğme placeholder'ı için parametre
          desc={true} // Açıklama placeholder'ı için parametre
        />
      ) : (
        <ContactSection /> // Eğer yükleme tamamlandıysa iletişim bölümü bileşeni
      )}
    </div>
  );
};

export default Contact; // Contact bileşenini dışa aktarır
