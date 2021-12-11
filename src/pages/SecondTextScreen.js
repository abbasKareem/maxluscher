import React from "react"
import { useNavigate } from "react-router"
import Header from "../components/Header"
const SecondTextScreen = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center place-items-center">
        <h1 className="text-center text-3xl mt-6 text-green-500 mb-9">
          اختر اللون المفضل بالنسبة لك
        </h1>
        <div className="grid grid-cols-3 max-w-sm gap-2 md:gap-4">
          <button className="py-10 px-10 bg-scustom1 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <div className="py-10 px-10  "></div>
          <button className="py-10 px-10 bg-scustom2 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <div className="py-10 px-10  "></div>
          <button className="py-10 px-10 bg-scustom3 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <div className="py-10 px-10  "></div>
          <button className="py-10 px-10 bg-scustom4 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <div className="py-10 px-10  "></div>
          <button className="py-10 px-10 bg-scustom5 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
        </div>
        <button
          onClick={() => navigate("/third-test")}
          className="mt-9 bg-green-400 text-white hover:bg-green-600 px-8 rounded-full py-3"
        >
          التالي
        </button>
      </div>
    </>
  )
}

export default SecondTextScreen
