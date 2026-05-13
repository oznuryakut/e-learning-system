import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../Assets/images";
import { Form } from "../../component";
import { CourseContext } from "../../Context/CourseContextProvider/CourseContextProvider";
import SignupLoginSkeleton from "../../Skeleton/SignupLoginSkeleton";

const SignUp = () => {
  const { isLoading } = useContext(CourseContext);
  return (
    <div className="w-full min-h-screen dark:bg-slate-900 py-28">
      <div className="w-screen">
        {isLoading ? (
          <SignupLoginSkeleton threeinput={true} />
        ) : (
          <div className="flex justify-between flex-col-reverse md:flex-row items-center flex-wrap gap-5  px-4 sm:px-10">
            <div className="w-full md:w-[48%]">
              <img src={Images.sigUp} alt="" className="w-[600px]" />
            </div>

            <div className="w-full md:w-[48%] flex flex-col gap-3 p-3">
              <h1 className="text-4xl dark:text-white">  Merhaba! </h1>

              <h1 className="text-lg text-slate-500 dark:text-slate-300">
               Yeni bir hesap oluştur
              </h1>
              <Form thirdinput={true} type="sign up" />
              <div className="flex items-center gap-2">
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Hesabın var mı?
                </p>
                <Link to="/log-in" className="text-main dark:text-white">
                  Giriş Yap
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
