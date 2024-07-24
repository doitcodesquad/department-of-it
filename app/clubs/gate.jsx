import React from 'react'

export default function gate() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 mb-6 inline-block">&larr; Back to Clubs</Link>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={club.image} alt={club.name} className="w-full h-80 object-cover" />
          <div className="p-8">
            <div className="flex items-center mb-6">
              <img src={club.logo} alt={`${club.name} logo`} className="w-16 h-16 rounded-full mr-4" />
              <h1 className="text-4xl font-bold text-gray-800">{club.name}</h1>
            </div>
            <p className="text-xl text-gray-600 mb-6">{club.description}</p>
            <div className="flex items-center mb-6">
              <img src={club.lead.avatar} alt={club.lead.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-800">Club Lead</p>
                <p className="text-lg text-gray-600">{club.lead.name}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xl text-gray-600">
                <span className="font-medium">{club.memberCount}</span> members
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                Join Club
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
