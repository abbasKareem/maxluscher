import React from "react"
import { useNavigate } from "react-router"
import Header from "../components/Header"

const FirstTextScreen = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen min-h-screen">
      <Header />

      <div className="flex flex-col items-center h-screen">
        <h1 className="text-green-500 text-2xl md:mr-64 mt-10">
          اختر اللون المفضل بالنسبة لك
        </h1>
        <div className="w-screen min-h-screen max-w-3xl mx-auto p-8 xs:grid-cols-1">
          <div className="grid grid-cols-2 max-w-sm gap-2 md:gap-4">
            <button className="py-20 px-10 bg-red-500 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-gray-800 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-green-700 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-orange hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-yellow-400 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-black hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-yellow-800 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-emerald hover:shadow-2xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button
              onClick={() => navigate("/second-test")}
              className="mt-9 bg-emerald text-white hover:bg-green-600 px-8 rounded-full py-3"
            >
              التالي
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstTextScreen
