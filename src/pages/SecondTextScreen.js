import React from "react"
import Header from "../components/Header"
const SecondTextScreen = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center place-items-center">
        <h1 className="text-center text-3xl mt-6 text-green-500 mb-9">
          اختر اللون المفضل بالنسبة لك
        </h1>
        <div className="grid grid-cols-3 max-w-sm gap-2 md:gap-4">
          <button className="py-10 px-10 bg-green-500 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <div className="py-10 px-10  "></div>
          <button className="py-10 px-10 bg-green-200 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <div className="py-10 px-10  "></div>
          <button className="py-10 px-10 bg-gray-800 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <div className="py-10 px-10  "></div>
          <button className="py-10 px-10 bg-gray-800 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <div className="py-10 px-10  "></div>
          <button className="py-10 px-10 bg-black hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
        </div>
        <button className="mt-9 bg-green-400 text-white hover:bg-green-600 px-8 rounded-full py-3">
          التالي
        </button>
      </div>
    </>
  )
}

export default SecondTextScreen
