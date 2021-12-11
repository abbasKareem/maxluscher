import React from "react"
import { useNavigate } from "react-router"
import Header from "../components/Header"

const SeventhTextScreen = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center place-items-center">
        <h1 className="text-center text-3xl mt-6 text-green-500 mb-9">
          اختر اللون المفضل بالنسبة لك
        </h1>
        <div className="grid grid-cols-2 max-w-sm gap-2 md:gap-3">
          <button className="py-10 px-10 bg-sixcustom1 rounded-xl hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-sixcustom2 rounded-xl hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-sixcustom3 rounded-xl hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-sixcustom4 rounded-xl hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-sixcustom5 rounded-xl hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-sixcustom6 rounded-xl hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-sixcustom7 rounded-xl hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-sixcustom8 rounded-xl hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
        </div>
        <button
          onClick={() => navigate("/done")}
          className="mt-9 bg-green-400 text-white text-2xl hover:bg-green-600 px-8 rounded-full py-3"
        >
          التالي
        </button>
      </div>
    </>
  )
}

export default SeventhTextScreen
