import React from "react"
import Header from "../components/Header"
import { useNavigate } from "react-router"
import first from "../pages/images/first.png"
import second from "../pages/images/second.png"
import three from "../pages/images/three.png"
import four from "../pages/images/four.png"
import five from "../pages/images/five.png"
import six from "../pages/images/six.png"
import seven from "../pages/images/seven.png"

const SixthTextScreen = () => {
  const navigate = useNavigate()

  const style = {
    color: "#000000",
    ":hover": {
      border: "5px solid #900",
    },
  }

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center place-items-center">
        <h1 className="text-center text-3xl mt-6 text-green-500 mb-9">
          اختر اللون المفضل بالنسبة لك
        </h1>
        <div className="grid grid-cols-3 mx-1 max-w-sm gap-2 md:gap-3">
          <div className="py-10 px-10   "></div>
          <button className="bg-transparent hover:shadow-2xl   focus:outline-none focus:ring focus:ring-black focus:translate-y-7 active:bg-blue-300">
            <img
              src={first}
              width="100%"
              height="100%"
              style={style}
              alt="first"
            />
          </button>

          <div className="py-10 px-10 "></div>
          <button className="bg-transparent hover:shadow-2xl  focus:outline-none focus:ring focus:ring-black">
            <img
              src={second}
              width="100%"
              height="100%"
              style={style}
              alt="second"
            />
          </button>
          <div className="py-10 px-10 "></div>
          <button className="bg-transparent hover:shadow-2xl  focus:outline-none focus:ring focus:ring-black">
            <img
              src={three}
              width="100%"
              height="100%"
              style={style}
              alt="three"
            />
          </button>
          <div className="py-10 px-10 "></div>
          <button className="bg-transparent hover:shadow-2xl  focus:outline-none focus:ring focus:ring-black">
            <img
              src={four}
              width="100%"
              height="100%"
              style={style}
              alt="four"
            />
          </button>
          <div className="py-10 px-10 rounded-xl "></div>
          <button className="bg-transparent hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black">
            <img
              src={five}
              width="100%"
              height="100%"
              style={style}
              alt="five"
            />
          </button>
          <div className="py-10 px-10 rounded-xl "></div>
          <button className="bg-transparent hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black">
            <img src={six} width="100%" height="100%" style={style} alt="six" />
          </button>
          <div className="py-10 px-10  rounded-xl"></div>
          <button className="bg-transparent hover:shadow-2xl rounded-xl focus:outline-none focus:ring focus:ring-black">
            <img
              src={seven}
              width="100%"
              height="100%"
              style={style}
              alt="seven"
            />
          </button>
          <div className="py-10 px-10 "></div>
        </div>

        <button
          onClick={() => navigate("/seventh-test")}
          className="mt-9 bg-green-400 text-white text-2xl hover:bg-green-600 px-8 rounded-full py-3"
        >
          التالي
        </button>
      </div>
    </>
  )
}

export default SixthTextScreen
