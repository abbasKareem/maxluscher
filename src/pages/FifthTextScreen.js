import React from "react"
import Header from "../components/Header"
import { useNavigate } from "react-router"

const FifthTextScreen = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center place-items-center">
        <h1 className="text-center text-3xl mt-6 text-green-500 mb-9">
          اختر اللون المفضل بالنسبة لك
        </h1>
        <div className="grid grid-cols-3 max-w-sm gap-2 md:gap-3">
          <button className="py-10 px-10 bg-fifcustom1 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom2 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom3 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom4 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom5 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom6 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom7 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom8 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom9 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom10 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom11 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-fifcustom12 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
        </div>
        <button
          onClick={() => navigate("/sixth-test")}
          className="mt-9 bg-green-400 text-white text-2xl hover:bg-green-600 px-8 rounded-full py-3"
        >
          التالي
        </button>
      </div>
    </>
  )
}

export default FifthTextScreen
