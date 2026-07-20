import React from 'react'
import { Link } from 'react-router-dom'
import { CAMPAIGN, CONTACT } from '../../constants/campaign'

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-3 py-5 sm:px-4 sm:py-10">
      <div className="mb-6 text-center sm:mb-10">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Contact Us</h1>
        <p className="mt-1 text-base text-campaign-green sm:mt-2 sm:text-lg">మమ్మల్ని సంప్రదించండి</p>
      </div>

      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-6">
        <div className="rounded-2xl border border-campaign-green/20 bg-campaign-green/5 p-4 sm:p-6">
          <h2 className="text-base font-bold text-gray-900 sm:text-lg">{CONTACT.community}</h2>
          <p className="mt-1 text-sm text-campaign-green sm:text-base">{CONTACT.communityTelugu}</p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:mt-4">{CONTACT.messageEnglish}</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{CONTACT.messageTelugu}</p>
        </div>

        <div className="rounded-2xl border border-campaign-orange/20 bg-campaign-orange/5 p-4 sm:p-6">
          <h2 className="text-base font-bold text-gray-900 sm:text-lg">Election Details</h2>
          <dl className="mt-3 space-y-3 text-sm sm:mt-4">
            <div>
              <dt className="font-semibold text-gray-500">Date</dt>
              <dd className="text-gray-900">{CAMPAIGN.electionDate}</dd>
              <dd className="text-campaign-green">{CAMPAIGN.electionDateTelugu}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-500">Time</dt>
              <dd className="text-gray-900">{CAMPAIGN.electionTime}</dd>
              <dd className="text-campaign-green">{CAMPAIGN.electionTimeTelugu}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-500">Symbol</dt>
              <dd className="text-gray-900">
                Serial No. {CAMPAIGN.serialNumber} — {CAMPAIGN.symbol} Symbol
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-campaign-green p-4 text-center text-white sm:mt-8 sm:p-6">
        <p className="text-base font-bold sm:text-lg">{CAMPAIGN.slogans.primaryEnglish}</p>
        <p className="mt-1 text-sm sm:text-base">{CAMPAIGN.slogans.primaryTelugu}</p>
        <Link
          to="/qr"
          className="mt-4 flex min-h-12 w-full items-center justify-center rounded-xl bg-campaign-orange px-5 py-3 text-sm font-semibold text-white active:bg-orange-600 sm:mx-auto sm:inline-flex sm:min-h-0 sm:w-auto sm:rounded-lg sm:py-2.5"
        >
          Share Campaign QR Code
        </Link>
      </div>
    </div>
  )
}

export default Contact
