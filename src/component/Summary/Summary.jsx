const Summary = ({ price, cost }) => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <h1 className="text-3xl dark:text-4xl dark:text-white">Özet</h1>
      <div className="flex flex-col gap-2">
        <div className="w-full md:w-[70%] flex items-center justify-between">
          <span className="dark:text-slate-300">İndirimsiz Fiyat:</span>
          <span className="dark:text-slate-300"> {cost} tl</span>
        </div>
        <div className="w-full md:w-[70%] flex items-center justify-between">
          <span className="dark:text-slate-300">İndirimler:</span>
          <span className="dark:text-slate-300">{price - cost} tl</span>
        </div>
      </div>
      <div className="w-full md:w-[70%] border-t pt-3 flex items-center justify-between">
        <span className="dark:text-slate-200 text-lg font-medium">Toplam:</span>
        <span className="dark:text-slate-200 text-lg font-medium">
          {price} tl
        </span>
      </div>
    </div>
  );
};

export default Summary;
