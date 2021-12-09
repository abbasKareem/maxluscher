import React from "react"
import Header from "../components/Header"

const LoginScreen = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10">
      <div className="mb-6 block md:col-span-7">
        <Header />
        <h1 className="text-center text-3xl mt-10 text-green-500 mb-9">
          تسجيل الدخول
        </h1>
        <form className="flex flex-col items-center justify-center">
          <div className="relative ml-20 flex items-center text-gray-300 focus-within:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute ml-3 md:ml-8 mt-10 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="البريد الالكتروني"
              className="w-80 h-12 mt-8 bg-gray-100 rounded-full font-semibold shadow-sm pl-12 border-gray-100 focus:outline-none focus:shadow-lg md:mx-4 md:w-12/12"
            />
          </div>

          <div className="relative ml-20 flex items-center text-gray-300 focus-within:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute ml-3 md:ml-8 mt-10 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <input
              name="password"
              type="password"
              placeholder="كلمة المرور"
              className="w-80 h-12 mt-8 bg-gray-100 rounded-full font-semibold shadow-sm pl-12 border-gray-100 focus:outline-none  focus:shadow-lg  md:mx-4 md:w-12/12"
            />
          </div>

          <div className="text-center">
            <button className="mt-9 bg-green-400 text-white hover:bg-green-600 px-8 rounded-full py-3">
              تسجيل الدخول
            </button>
          </div>
        </form>
      </div>
      <div className="bg-green-400 flex flex-col justify-center items-center h-screen md:col-span-3 ">
        <h1 className="text-white text-2xl ">انشاء حساب جديد</h1>
        <p className="text-white text-l mt-8 mr-4 ml-8">
          قم بانشاء حساب جديد لبدء اختبار ماكس لوشر التشخيصي
        </p>

        <button class=" mt-7 px-6 py-2 text-white transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-white focus:outline-none">
          انشاء حساب
        </button>
      </div>
    </div>
  )
}

export default LoginScreen
