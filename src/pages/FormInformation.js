import React from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
import Header from "../components/Header"

const FormInformation = () => {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <Header />
      <div className="mb-10 pb-10  sm:h-screen md:col-span-7 bg-gray-100">
        <div className="flex flex-col justify-center items-center  mt-20">
          <h1 className="text-center text-3xl text-green-500 mx-4 lg:mr-40">
            املا الاستمارة بمعلوماتك الشخصية
          </h1>
        </div>

        <form
          action=""
          className="flex flex-col items-start justify-center md:mr-5"
        >
          <Input
            svg={
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
            placeholder={"الاسم الكامل"}
            type={"text"}
            name={"name"}
          />

          <Input
            svg={
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
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
            }
            placeholder={"العمر"}
            type={"number"}
            name={"age"}
          />

          <h6 className="text-center text-md text-green-500 ml-20 md:ml-28 mt-7">
            الجنس
          </h6>
          <div className="flex gap-3 justify-center items-center text-center ml-20 md:ml-28 mt-3 ">
            <input
              type="radio"
              id="male"
              name="sex"
              value="male"
              className="ml-2 cursor-pointer h-5 w-5"
            />
            <label
              htmlFor="male"
              className="text-green-600 items-center cursor-pointer mr-5"
            >
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              className="cursor-pointer h-5 w-5"
            />
            <label
              htmlFor="male"
              className="text-green-600 items-center cursor-pointer mr-5"
            >
              Female
            </label>
          </div>
          <h6 className="text-center text-md text-green-500 ml-20 md:ml-28 mt-7">
            التاريخ
          </h6>
          {/* Date */}

          <div class="relative mt-3 ml-20 md:ml-28 ">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              name="start"
              type="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date start"
            />
          </div>

          {/* End of Date */}
        </form>
      </div>
      <div className="md:col-span-5 bg-white">
        <div className="flex flex-col mb-20  items-center">
          <h1 className="text-center text-3xl text-green-500 mb-9">
            اهلا بك عباس
          </h1>
          <h1 className="text-center text-3xl text-green-500 mb-9 mx-4">
            اختبار ماكس لوشر التشخيصي
          </h1>
          <div className="flex flex-col gap-10 mt-2">
            <button
              onClick={() => navigate("/first-test")}
              className=" bg-gray-200 text-green-700 hover:bg-green-600 hover:shadow-lg px-6 rounded-full py-3"
            >
              بدا الاختبار
            </button>
            <button
              onClick={() => navigate(-1)}
              className=" bg-green-500 text-white hover:bg-gray-200 hover:text-green-700 px-8 rounded-full py-3"
            >
              رجوع
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormInformation
