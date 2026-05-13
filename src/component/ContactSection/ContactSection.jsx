import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const ContactSection = () => {
  return (
    <div className="w-screen px-4 sm:px-10">
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="w-full lg:w-[48%]">
          <iframe
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDw1AJQrl2rXgOH6Cm0ZybFz0qRoxBPOBI&callback=initMap"
            className="w-full h-96 lg:h-[320px] dark:invert border border-slate-400"
          ></iframe>
          <div className="mt-5">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-200">
                  <HiLocationMarker className="text-2xl" />
                </div>
                <h1 className="text-xl text-slate-900 dark:text-white">
                  Üniversite Mahallesi Merkez, Elazığ,  <br /> Türkiye
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-200">
                  <FaPhone className="text-xl" />
                </div>
                <h1 className="text-xl text-slate-900 dark:text-white">
                  54648646777 <br />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Mobil
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[48%] flex flex-col gap-3 p-0 lg:p-3">
          <div>
            <input
              type="text"
              placeholder="Ad *"
              className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Soyad *"
              className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Telefon *"
              className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="E-posta *"
              className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
            />
          </div>
          <div className="">
            <textarea
              placeholder="Mesaj *"
              className="text-lg p-3 h-32 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
            ></textarea>
          </div>
          <div className="">
            <button className="text-xl p-3 bg-main text-white dark:bg-sky-500 cursor-pointer w-full sm:w-[80%] outline-0 rounded">
              Gönder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
