import React, { useState, createContext } from "react"; // React kütüphanesinden gerekli fonksiyonları import ediyor

export const AuthenticationContext = createContext(); // Kullanıcı kimlik doğrulama için bir Context oluşturuyor

const AuthenticationContextProvider = (props) => { // AuthenticationContext için bir Provider oluşturuyor
  const [user, setUser] = useState(null); // Kullanıcı bilgilerini tutmak için bir state oluşturuyor (varsayılan olarak null)
  const [alert, setAlert] = useState(false); // Uyarı mesajını yönetmek için bir state oluşturuyor

  const logOut = () => { // Kullanıcının çıkış yapmasını sağlayan bir fonksiyon
    setUser(null); // Kullanıcı bilgisini temizler
    setAlert(true); // Uyarıyı etkinleştirir
    setTimeout(() => { // Uyarıyı 10 saniye sonra kapatır
      setAlert(false); 
    }, 10000); 
  };

  return (
    <AuthenticationContext.Provider value={{ user, setUser, logOut, alert }}> 
      {/* Context sağlayıcı: Bu bağlamı kullanan bileşenlere user, setUser, logOut ve alert değerlerini sağlar */}
      {props.children} {/* Sağlayıcının içine yerleştirilen çocuk bileşenler */}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider; // AuthenticationContextProvider bileşenini dışa aktarır
