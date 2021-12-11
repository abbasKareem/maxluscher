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
            <button className="py-20 px-10 bg-fcustom1 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-fcustom2 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-fcustom3 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-fcustom4 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-fcustom5 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-fcustom6 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-fcustom7 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button className="py-20 px-10 bg-fcustom8 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
            <button
              onClick={() => navigate("/second-test")}
              className="mt-9 bg-green-700 text-white hover:bg-green-600 px-8 rounded-full py-3"
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
