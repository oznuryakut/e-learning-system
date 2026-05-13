import React from "react"; // React kütüphanesini import eder
import { useLocation } from "react-router-dom"; // React Router'dan useLocation Hook'unu import eder
import { WatchCourse } from "../../component"; // WatchCourse bileşenini import eder

const Learn = () => {
  const { state } = useLocation(); // useLocation Hook'u ile mevcut rotanın durumunu alır

  return (
    <>
      {/* WatchCourse bileşenini çağırır ve "state" verisini prop olarak aktarır */}
      <WatchCourse Data={state} />
    </>
  );
};

export default Learn; // Learn bileşenini dışa aktarır
