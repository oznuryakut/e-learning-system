import React from "react";
import { FaCreditCard, FaLock, FaPaypal } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";

const PaymentMethods = ({
  
  credit,

  setCredit,

}) => {

  const hanldeCredit = () => {
 
    setCredit(true);
  };
  return (
    <div className="flex flex-col gap-3">
      {/* ============================== Info ============================== */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-4xl dark:text-white">Ödeme metodu</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm dark:text-slate-300">
            Güvenli bağlantı
          </span>
          <span className="text-sm dark:text-slate-300">
            <FaLock />
          </span>
        </div>
      </div>
      {/* ============================== Methods ============================== */}
      <div>
        <ul className="border dark:border-slate-500">
          
          
      
          {/* ============================== Credit ============================== */}
          <label htmlFor="credit" onClick={hanldeCredit}>
            <li className="w-full bg-neutral-100 dark:bg-slate-800 dark:border-slate-500 border flex itemes-center p-3 cursor-pointer gap-3">
              <input
                type="radio"
                className="cursor-pointer"
                name="pay"
                id="credit"
              />
              <div className="flex gap-2 items-center">
                <span>
                  <FaCreditCard className="dark:text-white" />
                </span>
                <span className="text-lg dark:text-white">Kredi Kartı</span>
              </div>
            </li>
          </label>
          {credit && (
            <div className="w-full p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-lg dark:text-white">Karttaki Ad</label>
                <input
                  type="text"
                  placeholder="Karttaki Ad"
                  className="border outline-none p-3 bg-transparent dark:text-white dark:border-slate-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg dark:text-white">Kart Numarası</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="border outline-none p-3 bg-transparent dark:text-white dark:border-slate-500"
                />
              </div>
              <div className="flex flex-wrap justify-between gap-y-3">
                <div className="w-full md:w-[48%] flex flex-col gap-2">
                  <label className="text-lg dark:text-white">CVC/CVV</label>
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border outline-none p-3 bg-transparent dark:text-white dark:border-slate-500"
                  />
                </div>
                <div className="w-full md:w-[48%] flex flex-col gap-2">
                  <label className="text-lg dark:text-white">Son kullanma tarihi</label>
                  <input
                    type="date"
                    placeholder="AY/YIL"
                    className="border outline-none p-3 bg-transparent dark:text-white dark:border-slate-500"
                  />
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PaymentMethods;
