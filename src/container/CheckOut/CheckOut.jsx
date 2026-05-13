import { useState } from "react"; // React'in useState Hook'u, durum yönetimi için kullanılıyor
import { useParams } from "react-router-dom"; // URL'den parametre almak için kullanılıyor
import {
  CheckBilling,
  CheckOutHeader,
  OrderDetail,
  PaymentMethods,
  ProceedButton,
  Summary,
} from "../../component"; // Çeşitli bileşenler import ediliyor
import CheckOutHeaderSkeleton from "../../Skeleton/CheckOutHeaderSkeleton"; // Yükleme sırasında gösterilecek iskelet bileşeni
import OrderDetailSkeleton from "../../Skeleton/OrderDetailSkeleton";
import ProceedBtnSkeleton from "../../Skeleton/ProceedBtnSkeleton";
import SummarySkeleton from "../../Skeleton/SummarySkeleton";
import useFetch from "../../useFetch"; // Veri çekmek için özel bir React Hook'u

const url = "https://raw.githubusercontent.com/oznuryakut/my-json-files/refs/heads/main/courses.json"; // Veri kaynağının URL'si

const CheckOut = () => {
  const [credit, setCredit] = useState(false); // Kredi kartı seçimini yönetmek için durum değişkeni
  const { id } = useParams(); // URL'den "id" parametresini alıyor
  const { Data, isLoading } = useFetch(url); // useFetch Hook'u ile veri yüklenip yüklenmediğini ve çekilen veriyi kontrol ediyor
  const Course = Data.find((course) => course.id == id); // ID'ye göre doğru kursu buluyor

  return (
    <div className="fixed min-h-screen w-full top-0 left-0 bg-white dark:bg-slate-900 z-10"> {/* Ana kapsayıcı */}
      {/* ========================== Header ========================== */}

      {isLoading ? (
        <CheckOutHeaderSkeleton /> // Yükleme sırasında gösterilecek başlık iskeleti
      ) : (
        <CheckOutHeader title={Course.title} /> // Kurs başlığı gösteriliyor
      )}

      {/* =========================== Main =========================== */}
      <div className="flex justify-between gap-y-5 w-full flex-wrap pt-28 pb-40 max-h-[800px] overflow-auto">
        <div className="w-full md:w-[50%] px-4 sm:px-10 "> {/* Sol taraf */}
          <div className="flex flex-col gap-4">
            <CheckBilling /> {/* Fatura bilgileri */}
            
            <PaymentMethods
              credit={credit} // Kredi kartı seçimi durumu
              setCredit={setCredit} // Kredi kartı seçimini güncelleyen fonksiyon
            />

            {/* ================== Order details ================== */}
            {isLoading ? (
              <OrderDetailSkeleton /> // Yükleme sırasında gösterilecek sipariş detayları iskeleti
            ) : (
              <OrderDetail
                name={Course.name} // Kurs adı
                price={Course.price} // Kurs fiyatı
                cost={Course.cost} // Kurs maliyeti
                image={Course.image} // Kurs resmi
              />
            )}
          </div>
        </div>
        <div className="w-full md:w-[50%] px-4 sm:px-10"> {/* Sağ taraf */}
          {/* ====================== Summary ====================== */}

          {isLoading ? (
            <SummarySkeleton /> // Yükleme sırasında gösterilecek özet iskeleti
          ) : (
            <Summary cost={Course.cost} price={Course.price} /> // Sipariş özeti
          )}

          {/* ================= Proceed button ================= */}

          {isLoading ? (
            <ProceedBtnSkeleton /> // Yükleme sırasında gösterilecek devam düğmesi iskeleti
          ) : (
            <ProceedButton total={Course.price} /> // Toplam fiyatla birlikte devam düğmesi
          )}
        </div>
        {/* ======================= Footer ======================= */}
        <div className="bg-transparent h-24 md:h-10 w-full"></div> {/* Alt boşluk */}
      </div>
    </div>
  );
};

export default CheckOut; // CheckOut bileşeni dışa aktarılıyor
