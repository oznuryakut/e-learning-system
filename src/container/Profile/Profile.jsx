import React, { useContext, useState } from "react"; // React ve gerekli Hook'ları import eder
import { FaCheckCircle } from "react-icons/fa"; // React-icons'dan bir ikon import eder
import { AddNewInformation, Alert, ViewProfile } from "../../component"; // Diğer bileşenleri import eder
import { AuthenticationContext } from "../../Context/AuthenticationContextProvider/AuthenticationContextProvider"; // Kimlik doğrulama bağlamını import eder

const Profile = () => {
  const [alert, setAlert] = useState(false); // Alert durumunu kontrol eden bir state
  const { user, setUser } = useContext(AuthenticationContext); // Kullanıcı bilgilerini bağlamdan çeker
  const [newName, setNewname] = useState(user.username); // Kullanıcı adını düzenlemek için bir state
  const avator = user ? user.username.slice(0, 1) : null; // Kullanıcı adının ilk harfi ile avatar oluşturur

  // Kullanıcı bilgilerini güncelleme fonksiyonu
  const update = () => {
    if (newName !== user.username) { // Yeni ad eski adla aynı değilse
      setAlert(true); // Alert'i aktif hale getirir
      setUser({ ...user, username: newName }); // Kullanıcı adını günceller
      setTimeout(() => {
        setAlert(false); // 10 saniye sonra alert'i kapatır
      }, 10000);
    }
  };

  return (
    <div className="min-h-screen dark:bg-slate-900 w-full py-28">
      <div className="px-4 sm:px-10 flex justify-between flex-wrap gap-y-5">
        {/* Sol Bölüm: Kullanıcı Profili Görüntüleme */}
        <div className="w-full lg:w-[48%]">
          <ViewProfile
            avator={avator} // Avatar harfi
            username={user.username} // Kullanıcı adı
            email={user.email} // Kullanıcı e-posta adresi
          />
        </div>

        {/* Sağ Bölüm: Yeni Bilgi Ekleme ve Alert */}
        <div className="w-full lg:w-[48%] border dark:border-slate-600">
          <AddNewInformation
            newName={newName} // Yeni kullanıcı adı
            setNewname={setNewname} // Yeni ad değiştirme fonksiyonu
            update={update} // Güncelleme fonksiyonu
          />
          {/* Alert Mesajı */}
          {alert && (
            <Alert
              close={true} // Kapatma butonu
              setAlert={setAlert} // Alert durumunu değiştirme
              fix={true} // Sabit durumu
              text="Değişiklikleriniz başarıyla kaydedildi." // Alert mesajı
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile; // Profile bileşenini dışa aktarır
