import React from 'react'
import { POSTERS } from '../../constants/campaign'

function Posters() {
  return (
    <div className="mx-auto max-w-6xl px-3 py-5 sm:px-4 sm:py-10">
      <div className="mb-6 text-center sm:mb-10">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Campaign Posters</h1>
        <p className="mt-1 text-base text-campaign-green sm:mt-2 sm:text-lg">ప్రచార పోస్టర్లు</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:mt-4 sm:text-base">
          Download and share official election posters.
        </p>
      </div>

      <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {POSTERS.map((poster) => (
          <article
            key={poster.id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="overflow-hidden bg-gray-100">
              <img
                src={poster.image}
                alt={poster.title}
                className="w-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h2 className="text-base font-bold text-gray-900 sm:text-lg">{poster.title}</h2>
              <p className="text-sm text-campaign-green">{poster.titleTelugu}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:mt-3">{poster.description}</p>
              <a
                href={poster.image}
                download
                className="mt-4 flex min-h-12 w-full items-center justify-center rounded-xl bg-campaign-green px-4 py-3 text-sm font-semibold text-white active:bg-green-800 sm:min-h-0 sm:inline-flex sm:w-auto sm:rounded-lg sm:py-2"
              >
                Download Poster
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Posters
