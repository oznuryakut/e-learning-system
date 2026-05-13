import React from "react";

const CheckBilling = () => {
  return (
    <div className="flex flex-col gap-4">
      {" "}
      <h1 className="text-4xl dark:text-white font-serif font-normal">
        Ödeme
      </h1>
      <p className="text-xl dark:text-slate-200 font-medium">Fatura adresi</p>
      <div className="flex items-center justify-between w-full md:w-60">
        <label className="dark:text-slate-300">Ülke</label>
        <span className="dark:text-slate-300">Gerekli</span>
      </div>
      <div className="w-full md:w-60">
        <select className="w-full dark:text-white bg-transparent p-3 border outline-none dark:border-slate-400 cursor-pointer">
        <option value="TÜRKİYE" className="dark:bg-slate-900">
            TR
          </option>
          <option value="United State America" className="dark:bg-slate-900">
            USA
          </option>
          
          <option value="UK" className="dark:bg-slate-900">
            UK
          </option>
        </select>
      </div>
    </div>
  );
};

export default CheckBilling;
