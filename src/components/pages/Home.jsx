import React from 'react'
import { Link } from 'react-router-dom'
import FanIcon from '../common/FanIcon'
import CandidateCard from '../common/CandidateCard'
import { CAMPAIGN, CANDIDATES, POSTERS } from '../../constants/campaign'

function Home() {
  const featuredCandidate = CANDIDATES.find((candidate) => candidate.featured)

  return (
    <div className="pb-2">
      <section className="relative overflow-hidden bg-gradient-to-b from-campaign-orange/20 via-white to-campaign-green/10">
        <div className="mx-auto max-w-6xl px-3 py-4 sm:px-4 sm:py-8 lg:py-12">
          <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border-[3px] border-campaign-green shadow-lg sm:rounded-3xl sm:border-4 sm:shadow-2xl lg:shadow-2xl">
              <img
                src={POSTERS[0].image}
                alt={POSTERS[0].title}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-3 rounded-xl bg-campaign-orange px-3 py-2 text-white shadow-md sm:-bottom-4 sm:left-4 sm:rounded-2xl sm:px-4 sm:py-3">
              <p className="text-[10px] uppercase tracking-wide opacity-90 sm:text-xs">Vote for</p>
              <p className="text-sm font-bold sm:text-lg">{CAMPAIGN.symbol} Symbol</p>
            </div>
          </div>

          <div className="mt-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-campaign-green px-3 py-1.5 text-xs font-semibold text-white sm:px-4 sm:py-2 sm:text-sm">
                <FanIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                Serial {CAMPAIGN.serialNumber} · {CAMPAIGN.symbolTelugu}
              </div>

              <h1 className="mt-4 text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                {CAMPAIGN.titleEnglish}
              </h1>
              <p className="mt-2 text-lg font-semibold leading-snug text-campaign-green sm:text-xl lg:text-2xl">
                {CAMPAIGN.titleTelugu}
              </p>

              <div className="mt-5 rounded-2xl border border-campaign-orange/30 bg-campaign-orange/10 p-4 sm:p-5">
                <p className="text-base font-bold text-campaign-orange sm:text-lg">
                  {CAMPAIGN.slogans.primaryEnglish}
                </p>
                <p className="mt-1 text-base text-gray-800 sm:text-lg">{CAMPAIGN.slogans.primaryTelugu}</p>
              </div>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link
                  to="/posters"
                  className="flex min-h-12 items-center justify-center rounded-xl bg-campaign-green px-5 py-3.5 text-sm font-semibold text-white active:bg-green-800 sm:min-h-0 sm:flex-1 sm:py-3"
                >
                  View Posters
                </Link>
                <Link
                  to="/videos"
                  className="flex min-h-12 items-center justify-center rounded-xl border-2 border-campaign-orange px-5 py-3.5 text-sm font-semibold text-campaign-orange active:bg-campaign-orange active:text-white sm:min-h-0 sm:flex-1 sm:py-3"
                >
                  Watch Videos
                </Link>
                <Link
                  to="/qr"
                  className="flex min-h-12 items-center justify-center rounded-xl bg-campaign-orange px-5 py-3.5 text-sm font-semibold text-white active:bg-orange-600 sm:min-h-0 sm:flex-1 sm:py-3"
                >
                  Share QR Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-3 py-6 sm:px-4 sm:py-10">
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-campaign-orange/30 bg-campaign-orange/5 p-4 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-campaign-orange sm:text-sm">
              Election Date
            </p>
            <p className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">{CAMPAIGN.electionDate}</p>
            <p className="text-sm text-campaign-green sm:text-base">{CAMPAIGN.electionDateTelugu}</p>
          </div>
          <div className="rounded-2xl border border-campaign-green/30 bg-campaign-green/5 p-4 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-campaign-green sm:text-sm">
              Voting Time
            </p>
            <p className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">{CAMPAIGN.electionTime}</p>
            <p className="text-sm text-gray-700 sm:text-base">{CAMPAIGN.electionTimeTelugu}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:col-span-2 sm:p-6 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm">Our Message</p>
            <p className="mt-2 text-base font-bold text-gray-900 sm:text-lg">
              {CAMPAIGN.slogans.secondaryEnglish}
            </p>
            <p className="text-sm text-campaign-green sm:text-base">{CAMPAIGN.slogans.secondaryTelugu}</p>
          </div>
        </div>
      </section>

      {featuredCandidate && (
        <section className="bg-campaign-green/5 py-6 sm:py-10">
          <div className="mx-auto max-w-6xl px-3 sm:px-4">
            <div className="mb-5 text-center sm:mb-8">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Lead Candidate</h2>
              <p className="text-sm text-campaign-green sm:text-base">ప్రధాన అభ్యర్థి</p>
            </div>
            <CandidateCard candidate={featuredCandidate} featured />
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-3 py-6 sm:px-4 sm:py-10">
        <div className="mb-5 text-center sm:mb-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Our Team</h2>
          <p className="text-sm text-campaign-green sm:text-base">మా అభ్యర్థులు</p>
        </div>
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {CANDIDATES.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </section>

      <section className="border-y border-campaign-orange/20 bg-campaign-orange/10 px-3 py-8 sm:py-10">
        <div className="mx-auto max-w-4xl text-center">
          <FanIcon className="mx-auto h-12 w-12 sm:h-16 sm:w-16" />
          <p className="mt-4 text-lg font-bold leading-snug text-gray-900 sm:text-2xl">
            Vote for Serial No. {CAMPAIGN.serialNumber} — {CAMPAIGN.symbol} Symbol
          </p>
          <p className="mt-2 text-base text-campaign-green sm:text-lg">
            సీరియల్ సంఖ్య {CAMPAIGN.serialNumber} · {CAMPAIGN.symbolTelugu} గుర్తు
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
