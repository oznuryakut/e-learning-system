// React kütüphanesinden React ve createContext fonksiyonlarını import ediyoruz
import React, { createContext } from "react";
// useFetch adlı özel hook'u import ediyoruz
import useFetch from "../../useFetch";

// API'den veri almak için kullanılan URL
const url =
  "https://raw.githubusercontent.com/oznuryakut/my-json-files/refs/heads/main/categories.json";

// Kategoriler için bir Context oluşturuyoruz
const CategoryContex = createContext();

// Kategoriler için bir Context Provider bileşeni tanımlıyoruz
const CategoriesContextProvider = (props) => {
  // useFetch hook'u ile veri çekme işlemini gerçekleştiriyoruz
  const { isLoading, Data } = useFetch(url);

  return (
    // Context sağlayıcı: Bu bağlamı kullanan bileşenlere isLoading ve Data değerlerini sağlıyoruz
    <CategoryContex.Provider value={{ isLoading, Data }}>
      {props.children} {/* Sağlayıcının içine yerleştirilen alt bileşenler */}
    </CategoryContex.Provider>
  );
};

// CategoriesContextProvider ve CategoryContex'i dışa aktarıyoruz
export { CategoriesContextProvider, CategoryContex };
