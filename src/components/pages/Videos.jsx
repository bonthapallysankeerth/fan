import React from 'react'
import { Link } from 'react-router-dom'
import { VIDEOS } from '../../constants/campaign'

function Videos() {
  return (
    <div className="mx-auto max-w-6xl px-3 py-5 sm:px-4 sm:py-10">
      <div className="mb-6 text-center sm:mb-10">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Campaign Videos</h1>
        <p className="mt-1 text-base text-campaign-green sm:mt-2 sm:text-lg">ప్రచార వీడియోలు</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:mt-4 sm:text-base">
          Watch campaign messages and candidate updates.
        </p>
      </div>

      {VIDEOS.length > 0 ? (
        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:gap-8">
          {VIDEOS.map((video) => (
            <article
              key={video.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-video bg-gray-900">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 sm:p-5">
                <h2 className="text-base font-bold text-gray-900 sm:text-lg">{video.title}</h2>
                <p className="text-sm text-campaign-green">{video.titleTelugu}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-campaign-orange/40 bg-campaign-orange/5 p-6 text-center sm:p-10">
          <p className="text-5xl sm:text-6xl">🎬</p>
          <h2 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Videos Coming Soon</h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Campaign videos will be added here. Check back for updates.
          </p>
          <p className="mt-2 text-sm text-campaign-green sm:text-base">వీడియోలు త్వరలో జోడించబడతాయి</p>
          <Link
            to="/posters"
            className="mt-5 flex min-h-12 w-full items-center justify-center rounded-xl bg-campaign-green px-5 py-3 text-sm font-semibold text-white active:bg-green-800 sm:mt-6 sm:inline-flex sm:min-h-0 sm:w-auto sm:rounded-lg sm:py-2.5"
          >
            View Posters Instead
          </Link>
        </div>
      )}
    </div>
  )
}

export default Videos
