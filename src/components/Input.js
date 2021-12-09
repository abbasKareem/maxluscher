import React from "react"

const Input = ({ svg, placeholder, type, name }) => {
  return (
    <div className="relative ml-20 flex items-center text-gray-300 focus-within:text-gray-600">
      {svg}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-80 h-12 mt-8 bg-white rounded-full font-semibold shadow-sm pl-12 border-gray-100 focus:outline-none focus:shadow-lg md:mx-4 md:w-12/12"
      />
    </div>
  )
}

export default Input
