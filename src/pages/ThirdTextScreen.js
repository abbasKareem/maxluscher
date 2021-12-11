import React from "react"
import { useNavigate } from "react-router"
import Header from "../components/Header"
const ThirdTextScreen = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center place-items-center">
        <h1 className="text-center text-3xl mt-6 text-green-500 mb-9">
          اختر اللون المفضل بالنسبة لك
        </h1>
        <div className="grid grid-cols-3 max-w-sm gap-2 md:gap-4">
          <button className="py-10 px-10 bg-tcustom1 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom2 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom3 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom4 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom5 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom6 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom7 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom8 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom9 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom10 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom11 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
          <button className="py-10 px-10 bg-tcustom12 hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300"></button>
        </div>
        <button
          onClick={() => navigate("/forth-test")}
          className="mt-9 bg-green-400 text-white text-2xl hover:bg-green-600 px-8 rounded-full py-3"
        >
          التالي
        </button>
      </div>
    </>
  )
}

export default ThirdTextScreen
