import React from 'react'

function CandidateCard({ candidate, featured = false }) {
  return (
    <article
      className={`rounded-2xl border bg-white shadow-sm ${
        featured
          ? 'border-campaign-orange/40 bg-gradient-to-br from-white to-campaign-orange/5 p-4 sm:p-6'
          : 'border-campaign-green/20 p-4 sm:p-6'
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4">
        <span className="rounded-full bg-campaign-green/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-campaign-green sm:px-3 sm:text-xs">
          {candidate.role}
        </span>
        <span className="text-right text-[11px] leading-tight text-gray-500 sm:text-xs">
          {candidate.roleTelugu}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{candidate.name}</h3>
      <p className="mt-0.5 text-base text-campaign-green sm:mt-1 sm:text-lg">{candidate.nameTelugu}</p>
      <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:mt-4">{candidate.nominationTelugu}</p>
    </article>
  )
}

export default CandidateCard
