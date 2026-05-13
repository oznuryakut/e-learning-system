import React from "react";

const AddNewInformation = ({ newName, setNewname, update }) => {
  return (
    <>
      <div className="px-4 sm:px-10 border-b py-4 dark:border-slate-600">
        <h1 className="text-center text-3xl dark:text-white font-semibold">
          Profil
        </h1>
        <h1 className="text-center text-xl text-slate-600  dark:text-slate-300">
        Kendiniz hakkında bilgi ekleyin
        </h1>
      </div>
      <div className="px-4 sm:px-10 border-b py-4 dark:border-slate-600">
        <h1 className="text-xl dark:text-white font-semibold">Temel:</h1>
        <div className="flex flex-col gap-3 my-2">
          <input
            type="text"
            className="bg-transparent dark:text-white outline-none border dark:border-slate-600 p-3"
            value={newName}
            onChange={(e) => setNewname(e.target.value)}
          />
          <input
            type="text"
            className="bg-transparent dark:text-white outline-none border dark:border-slate-600 p-3"
            placeholder="Başlık"
          />
        </div>
      </div>
      <div className="px-4 sm:px-10 border-b py-4 dark:border-slate-600">
        <h1 className="text-xl dark:text-white font-semibold">Linkler:</h1>
        <div className="flex flex-col gap-3 my-2">
          <input
            type="text"
            className="bg-transparent dark:text-white placeholder:font-light placeholder:text-slate-700 dark:placeholder:text-slate-300 outline-none border dark:border-slate-600 p-3"
            placeholder="Web sitesi (http(s)://..)"
          />
          <div className="border dark:border-slate-600 border-black flex">
            <div className="p-3 h-full w-40 border-r border-black bg-neutral-200 dark:bg-slate-700 dark:text-white">
              <span className=" text-sm">http://twitter.com/</span>
            </div>
            <input
              type="text"
              className="bg-transparent placeholder:font-light placeholder:text-slate-700 dark:placeholder:text-slate-300 dark:text-white outline-none p-3"
              placeholder="Twitter Profili"
            />
          </div>
          <div className="border dark:border-slate-600 border-black flex">
            <div className="p-3 h-full w-54 border-r border-black bg-neutral-200 dark:bg-slate-700 dark:text-white">
              <span className=" text-sm">http://www.facebook.com/</span>
            </div>
            <input
              type="text"
              className="bg-transparent placeholder:font-light placeholder:text-slate-700 dark:placeholder:text-slate-300 dark:text-white outline-none p-3"
              placeholder="Facebook Profili"
            />
          </div>
          <div className="border dark:border-slate-600 border-black flex">
            <div className="p-3 h-full w-52 border-r border-black bg-neutral-200 dark:bg-slate-700 dark:text-white">
              <span className=" text-sm">http://www.linkedin.com/</span>
            </div>
            <input
              type="text"
              className="bg-transparent placeholder:font-light placeholder:text-slate-700 dark:placeholder:text-slate-300 dark:text-white outline-none p-3"
              placeholder="LinkedIn Profili"
            />
          </div>
          <div className="border dark:border-slate-600 border-black flex">
            <div className="p-3 h-full w-52 border-r border-black bg-neutral-200 dark:bg-slate-700 dark:text-white">
              <span className=" text-sm">http://www.youtube.com/</span>
            </div>
            <input
              type="text"
              className="bg-transparent placeholder:font-light placeholder:text-slate-700 dark:placeholder:text-slate-300 dark:text-white outline-none p-3"
              placeholder="Youtube Profili"
            />
          </div>
          <button
            className="p-3 w-32 text-xl rounded bg-main text-white dark:bg-sky-500"
            onClick={update}
          >
            Kaydet
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewInformation;
