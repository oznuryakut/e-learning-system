import React from "react"; // React kütüphanesini import eder
import { useContext } from "react"; // useContext Hook'unu import eder
import { Link } from "react-router-dom"; // React Router'dan Link bileşenini import eder
import { Images } from "../../Assets/images"; // Görselleri import eder
import { Form } from "../../component"; // Form bileşenini import eder
import { CourseContext } from "../../Context/CourseContextProvider/CourseContextProvider"; // CourseContext'i import eder

import SignupLoginSkeleton from "../../Skeleton/SignupLoginSkeleton"; // Skeleton bileşenini import eder (yüklenme animasyonu için)

const LogIn = () => {
  const { isLoading } = useContext(CourseContext); // Context'ten isLoading durumunu alır

  return (
    <div className="w-full min-h-screen dark:bg-slate-900 py-28"> {/* Sayfa düzeni */}
      <div className="w-screen">
        {isLoading ? ( // Yüklenme durumu kontrol edilir
          <SignupLoginSkeleton /> // Eğer yükleniyorsa Skeleton bileşeni gösterilir
        ) : ( // Yüklenme tamamlandıysa asıl içerik render edilir
          <div className="flex justify-between flex-col-reverse md:flex-row items-center flex-wrap gap-5 px-4 sm:px-10">
            {/* Görsel Bölümü */}
            <div className="w-full md:w-[48%]">
              <img src={Images.logIn} alt="" className="w-[500px]" /> {/* Login sayfasına ait görsel */}
            </div>

            {/* Form Bölümü */}
            <div className="w-full md:w-[48%] flex flex-col gap-3 p-3">
              <h1 className="text-4xl dark:text-white">Hoş Geldin!</h1> {/* Başlık */}
              <h1 className="text-lg text-slate-500 dark:text-slate-300">
                Devam etmek için giriş yapın {/* Alt başlık */}
              </h1>
              <Form type="log in" /> {/* Giriş formu */}
              <div className="flex items-center gap-2">
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Hesabınız yok mu? {/* Kullanıcıya yönlendirme mesajı */}
                </p>
                <Link to="/sign-up" className="text-main dark:text-white"> {/* Kayıt ol bağlantısı */}
                  Kayıt ol
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogIn; // LogIn bileşenini dışa aktarır
