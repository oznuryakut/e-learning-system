import {
  Hero, // Ana başlık ve tanıtım bileşeni
  PopularCourses, // Popüler kurslar bileşeni
  StudentsSay, // Öğrenci yorumları bileşeni
  BecomeTeacher, // Öğretmen olma çağrısı bileşeni
} from "../../component"; // Diğer bileşenleri import eder

const Home = () => {
  return (
    <>
      <Hero /> {/* Ana sayfa başlığı ve tanıtımı */}
      <PopularCourses /> {/* Popüler kursları gösterir */}
      <BecomeTeacher /> {/* Öğretmen olma bölümünü render eder */}
      <StudentsSay /> {/* Öğrenci yorumları bölümünü render eder */}
    </>
  );
};

export default Home; // Home bileşenini dışa aktarır
