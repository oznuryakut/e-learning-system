import { Categories } from "../../component"; // Categories bileşenini import eder
import { CategoriesContextProvider } from "../../Context/CategoriesContextProvider/CategoriesContextProvider"; // Kategoriler için Context Provider'ı import eder

const Courses = () => {
  return (
    <div className="w-full min-h-screen dark:bg-slate-900 py-28"> {/* Ana kapsayıcı div */}
      <CategoriesContextProvider> {/* Kategoriler Context'ini sağlar */}
        <Categories /> {/* Categories bileşenini render eder */}
      </CategoriesContextProvider>
    </div>
  );
};

export default Courses; // Courses bileşenini dışa aktarır
