// React ve gerekli modülleri import ediyor
import React, { createContext } from "react"; 
import useFetch from "../../useFetch"; // Verileri fetch etmek için özel bir hook kullanıyor

// JSON verilerinin bulunduğu URL'yi tanımlıyor
const url =
  "https://raw.githubusercontent.com/oznuryakut/my-json-files/refs/heads/main/courses.json";

// CourseContext adında bir React Context oluşturuyor
const CourseContext = createContext(); 

// CourseContextProvider adında bir bileşen tanımlıyor
const CourseContextProvider = (props) => { 
  // useFetch hook'u yardımıyla verileri çekiyor ve yüklenme durumunu alıyor
  const { isLoading, Data } = useFetch(url); 

  return (
    // CourseContext.Provider ile context sağlayıcıyı tanımlıyor
    <CourseContext.Provider value={{ isLoading, Data }}>
      {props.children} {/* Sağlayıcı içine yerleştirilen çocuk bileşenler */}
    </CourseContext.Provider>
  );
};

// CourseContext ve CourseContextProvider bileşenini dışa aktarıyor
export { CourseContextProvider, CourseContext };
