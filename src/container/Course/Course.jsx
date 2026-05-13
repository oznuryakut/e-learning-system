import { useRef, createContext, useState } from "react"; // React'ten gerekli Hook'lar ve context oluşturma işlevi import ediliyor
import { useParams } from "react-router-dom"; // URL parametrelerini almak için kullanılıyor
import { FaCheck, FaCircle, FaHashtag } from "react-icons/fa"; // FontAwesome simgeleri import ediliyor
import {
  Back, // Geri dönüş bileşeni
  CourseBuySmallMedia, // Küçük ekranlarda kurs satın alma bileşeni
  CourseContent, // Kurs içeriği bileşeni
  CourseInfo, // Kurs bilgileri bileşeni
  LargeMediaCoursePreview, // Büyük medya önizlemesi için bileşen
  List, // Listeleme bileşeni
  PreviewCourse, // Kurs önizleme bileşeni
  SmallMediaCoursePreview, // Küçük medya önizleme bileşeni
} from "../../component"; // Gerekli bileşenler import ediliyor
import ListSkeleton from "../../Skeleton/ListSkeleton"; // Listeleme için iskelet bileşeni
import LargeMediaSkeleton from "../../Skeleton/LargeMediaSkeleton"; // Büyük medya için iskelet bileşeni
import CourseInfoSkeleton from "../../Skeleton/CourseInfoSkeleton"; // Kurs bilgileri için iskelet bileşeni
import SmallMediSkeleton from "../../Skeleton/SmallMediSkeleton"; // Küçük medya için iskelet bileşeni
import CourseContentSkeleton from "../../Skeleton/CourseContentSkeleton"; // Kurs içeriği için iskelet bileşeni
import CourseBuySkeleton from "../../Skeleton/CourseBuySkeleton"; // Kurs satın alma için iskelet bileşeni
import useFetch from "../../useFetch"; // Veri çekme işlemi için özel Hook

const url =
  "https://raw.githubusercontent.com/oznuryakut/my-json-files/refs/heads/main/courses.json"; // JSON verilerinin bulunduğu URL

export const SingleContext = createContext(); // SingleContext oluşturuluyor

const Course = () => {
  const { isLoading, Data } = useFetch(url); // useFetch Hook'u ile veriler çekiliyor
  const { id } = useParams(); // URL parametresinden kurs ID'si alınıyor
  const singleCourse = Data.find((course) => course.title === id); // ID'ye göre ilgili kurs bulunuyor
  const [preview, setPreview] = useState(false); // Önizleme durumu için state
  const [selected, setSelected] = useState(0); // Seçili öğe için state

  const Accourdin = (i) => {
    if (selected === i) {
      return setSelected(null); // Aynı öğe seçilirse seçimi kaldırır
    }
    setSelected(i); // Yeni öğeyi seçer
  };

  const handlePreview = () => {
    setPreview(!preview); // Önizleme durumunu değiştirir
  };

  const videoRef = useRef(); // Video referansı oluşturulur

  const handlePause = () => videoRef.current.pause(); // Videoyu durdurur
  const handlePlay = () => videoRef.current.play(); // Videoyu oynatır

  return (
    <div className="w-full min-h-screen dark:bg-slate-900 pt-28"> {/* Ana kapsayıcı div */}
      <SingleContext.Provider
        value={{
          isLoading, // Yükleme durumu
          singleCourse, // Seçili kurs
          selected, // Seçili öğe
          videoRef, // Video referansı
          handlePause, // Videoyu durdurma fonksiyonu
          handlePlay, // Videoyu oynatma fonksiyonu
          handlePreview, // Önizleme kontrol fonksiyonu
          Accourdin, // Akordeon kontrol fonksiyonu
          preview, // Önizleme durumu
        }}
      >
        {/* ======================== Back ======================== */}
        <Back url={`/courses`} /> {/* Geri dönüş bileşeni */}
        {/* ======================== Small media course preview ======================== */}
        {isLoading ? <SmallMediSkeleton /> : <SmallMediaCoursePreview />} {/* Küçük medya için bileşen veya iskelet */}
        {/* ======================== Preview Video ======================== */}
        {isLoading ? "" : <PreviewCourse />} {/* Video önizleme */}
        {/* ======================== Course buy in small media ======================== */}
        {isLoading ? <CourseBuySkeleton /> : <CourseBuySmallMedia />} {/* Küçük ekranda kurs satın alma */}
        {/* ======================== Course description ======================== */}
        {isLoading ? <CourseInfoSkeleton /> : <CourseInfo />} {/* Kurs bilgileri */}
        {/* ======================== Large media course preview ======================== */}
        {isLoading ? <LargeMediaSkeleton /> : <LargeMediaCoursePreview />} {/* Büyük medya önizleme */}
        {/* ======================== What you will learn ======================== */}
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <List
            title="Öğreneceklerin" // Başlık
            type={singleCourse.whatYouLearn} // Öğrenilecekler listesi
            border={"border"} // Stil
            padding={"p-5"} // Padding
            flex={"flex"} // Flex düzeni
            icon={<FaCheck />} // Onay simgesi
          />
        )}
        {/* ======================== This course include ======================== */}
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <List
            title="Şunları içeriyor " // Başlık
            type={singleCourse.thisCourseInclude} // Kursun içerikleri
            flex={"flex"} // Flex düzeni
            icon={<FaHashtag />} // Hashtag simgesi
          />
        )}
        {/* ======================== Course content  ======================== */}
        {isLoading ? <CourseContentSkeleton /> : <CourseContent />} {/* Kurs içeriği */}
        {/* ======================== Requirments  ======================== */}
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <List
            title="Gereksinimler" // Başlık
            type={singleCourse.requirements} // Gereksinim listesi
            size={true} // Stil
            borderT={"border-t"} // Üst sınır çizgisi
            borderB={"border-b"} // Alt sınır çizgisi
            padding={"py-2"} // Dikey padding
            icon={<FaCircle />} // Daire simgesi
          />
        )}
      </SingleContext.Provider>
    </div>
  );
};

export default Course; // Course bileşenini dışa aktarır
