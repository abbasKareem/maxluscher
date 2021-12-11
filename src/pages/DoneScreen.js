import React from "react"
import Header from "../components/Header"

const DoneScreen = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-center text-3xl mt-10 text-green-500 mb-6">
          لقد انتهيت من الاختبار بنجاح
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-28 w-28 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>

        <h1 className="text-center text-3xl mt-10 text-green-500 mb-6">
          متابعة علمية الدفع لرؤية نتائج اختبارك
        </h1>
        <button className="mt-9 bg-green-400 text-white hover:bg-green-600 px-8 rounded-full py-3">
          متابعة علمية الدفع
        </button>
      </div>
    </>
  )
}

export default DoneScreen
