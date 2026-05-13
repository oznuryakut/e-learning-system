// React ve diğer gerekli kütüphaneleri import ediyor
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, ProtectedRoute, ScrollToTop, WatchCourse } from "./component"; // Komponentleri içe aktarıyor
import {
  Courses,
  Footer,
  Course,
  Home,
  About,
  Contact,
  LogIn,
  SignUp,
  Category,
  Learn,
  NotFound,
  MyLearning,
  Profile,
  CheckOut,
} from "./container"; // Sayfa bileşenlerini içe aktarıyor
import { ThemeContext } from "./Context/ThemeContextProvider/ThemeContextProvider"; // Tema için Context
import { CourseContextProvider } from "./Context/CourseContextProvider/CourseContextProvider"; // Kurs verileri için Context
import AuthenticationContextProvider from "./Context/AuthenticationContextProvider/AuthenticationContextProvider"; // Kullanıcı doğrulama için Context
import "./index.css"; // Global CSS dosyasını içe aktarıyor

function App() {
  const { Dark, darkMode } = useContext(ThemeContext); // Tema durumu için ThemeContext kullanıyor
  return (
    <div className={`${Dark === "dark" ? "dark" : ""} p-0 overflow-x-hidden`}>
      {/* Kullanıcı doğrulama sağlayıcısı */}
      <AuthenticationContextProvider>
        {/* Kurs verileri sağlayıcısı */}
        <CourseContextProvider>
          <ScrollToTop /> {/* Sayfa kaydırma kontrolü */}
          <Header /> {/* Üst menü */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Ana sayfa */}
            <Route path="/courses" element={<Courses />} /> {/* Tüm kurslar */}
            <Route path="/courses/:categoryid" element={<Category />} /> {/* Belirli bir kategori */}
            <Route path="/course/:id" element={<Course />} /> {/* Belirli bir kurs */}
            <Route
              path="/course/:id/learn"
              element={
                <ProtectedRoute> {/* Giriş korumalı rota */}
                  <Learn />
                </ProtectedRoute>
              }
            />
            <Route path="/course/:id/learn" element={<WatchCourse />} /> {/* Kurs izleme */}
            <Route path="/contact" element={<Contact />} /> {/* İletişim */}
            <Route path="/about" element={<About />} /> {/* Hakkında */}
            <Route
              path="/mylearning"
              element={
                <ProtectedRoute> {/* Giriş korumalı öğrenme sayfası */}
                  <MyLearning />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/edit-profile"
              element={
                <ProtectedRoute> {/* Giriş korumalı profil düzenleme */}
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/check-out/:id"
              element={
                <ProtectedRoute> {/* Giriş korumalı ödeme sayfası */}
                  <CheckOut />
                </ProtectedRoute>
              }
            />
            <Route path="/log-in" element={<LogIn />} /> {/* Giriş yap */}
            <Route path="/sign-up" element={<SignUp />} /> {/* Kayıt ol */}
            <Route path="*" element={<NotFound />} /> {/* 404 hata sayfası */}
          </Routes>
          <Footer /> {/* Alt menü */}
        </CourseContextProvider>
      </AuthenticationContextProvider>
    </div>
  );
}

export default App; // Uygulamayı dışa aktarır
