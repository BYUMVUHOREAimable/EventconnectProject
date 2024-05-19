import React from 'react'

export default function Stars() {
  return (
      <div className="flex items-center mt-2">
          {/* Five Stars */}
          {[1, 2, 3, 4, 5].map((index) => (
              <svg
                  key={index}
                  className="w-4 h-4 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
              >
                  <path d="M12 2L14.6 8.8L22 9.3L16.2 14L17.5 21L12 17.5L6.5 21L7.8 14L2 9.3L9.4 8.8L12 2Z" />
              </svg>
          ))}
      </div>
  )
}
