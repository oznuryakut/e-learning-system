import React from "react"; // React kütüphanesi bileşen oluşturmak için import ediliyor
import { Images } from "../../Assets/images"; // Resimler içeren bir dosya veya nesne import ediliyor
import { AboutInfo, Section } from "../../component"; // AboutInfo ve Section adlı bileşenler import ediliyor
import InfoSkeleton from "../../Skeleton/InfoSkeleton"; // Yükleme sırasında kullanılan iskelet ekran bileşeni
import SectionSkeleton from "../../Skeleton/SectionSkeleton"; // Yükleme sırasında kullanılan bölüm iskeleti bileşeni
import useFetch from "../../useFetch"; // Veri çekmek için özel bir React Hook'u import ediliyor

const url =
  "https://raw.githubusercontent.com/oznuryakut/my-json-files/refs/heads/main/info.json"; // Veri kaynağının URL'si

const About = () => {
  const { isLoading, Data } = useFetch(url); // useFetch Hook'u, veri yüklenip yüklenmediğini ve çekilen veriyi döndürüyor

  return (
    <div className="dark:bg-slate-900 pb-20"> {/* Karanlık mod için bir sınıf içeren ve alt boşluk ekleyen bir kapsayıcı */}
      {isLoading ? ( // Eğer veri yükleniyorsa aşağıdaki bileşen gösterilir
        <SectionSkeleton
          reverse={true} // İskeletin ters hizalanması
          w="w-[500px]" // Genişlik ayarı
          h="h-[400px]" // Yükseklik ayarı
          p="pt-24" // Üst boşluk (padding-top)
          morelines={true} // Daha fazla satır gösterme seçeneği
        />
      ) : (
        <Section
          image={Images.About} // Bölümde gösterilecek resim
          fTitle={"Biz"} // İlk başlık
          sTitle={"Kimiz?"} // İkinci başlık
          p="pt-24" // Üst boşluk (padding-top)
          w="450px" // Genişlik ayarı
        />
      )}

      <div className="mt-10 px-4 sm:px-10 gap-5 flex flex-wrap justify-between"> {/* İçeriklerin kapsayıcısı */}
        {isLoading ? ( // Eğer veri yükleniyorsa aşağıdaki iskeletler gösterilir
          <>
            <InfoSkeleton /> {/* İskelet ekranı bileşeni */}
            <InfoSkeleton />
            <InfoSkeleton />
          </>
        ) : (
          Data.map((inf) => <AboutInfo inf={inf} key={inf.id} />) // Eğer veri yüklenmişse veriler listelenir ve AboutInfo bileşeni kullanılarak işlenir
        )}
      </div>
    </div>
  );
};

export default About; // About bileşeni dışa aktarılır
