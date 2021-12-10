import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

const WellcomeScreen = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="sticky top-0 z-50 flex justify-end ">
        <Header />
      </div>
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-center text-3xl text-green-500 mb-9">
          اهلا بك عباس
        </h1>
        <h1 className="text-center text-3xl text-green-500 mb-9 mx-4">
          اختبار ماكس لوشر التشخيصي
        </h1>
        <div className="flex gap-10 mt-14">
          <button className=" bg-gray-200 text-green-700 hover:bg-green-600 hover:shadow-lg px-6 rounded-full py-3">
            الملف الشخصي
          </button>
          <button
            onClick={() => navigate("/user-form")}
            className=" bg-green-500 text-white hover:bg-gray-200 hover:text-green-700 px-8 rounded-full py-3"
          >
            بدا الاختبار
          </button>
        </div>
      </div>
    </div>
  )
}

export default WellcomeScreen
