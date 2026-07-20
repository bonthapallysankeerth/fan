import React from 'react'
import { APP_URL } from '../../constants/app'
import { CAMPAIGN } from '../../constants/campaign'
import FanIcon from '../common/FanIcon'

function QrCode() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-5 px-3 py-5 sm:gap-6 sm:px-4 sm:py-10">
      <div className="text-center">
        <FanIcon className="mx-auto h-12 w-12 sm:h-14 sm:w-14" />
        <h1 className="mt-3 text-xl font-bold text-gray-900 sm:mt-4 sm:text-2xl">Scan to Join Our Campaign</h1>
        <p className="mt-2 text-sm text-gray-600">
          Scan this QR code to open the official election campaign website.
        </p>
        <p className="text-sm text-campaign-green">అధికారిక ప్రచార వెబ్‌సైట్‌కు వెళ్లండి</p>
      </div>

      <div className="w-full max-w-[min(100%,18rem)] rounded-2xl border-4 border-campaign-green bg-white p-4 shadow-lg sm:max-w-xs sm:p-6">
        <img
          src="/qr-code.png"
          alt={`QR code for ${APP_URL}`}
          className="aspect-square w-full"
        />
      </div>

      <div className="w-full text-center">
        <p className="text-sm font-semibold text-campaign-orange">
          Serial No. {CAMPAIGN.serialNumber} · Vote for {CAMPAIGN.symbol} Symbol
        </p>
        <p className="mt-2 break-all px-2 text-xs text-gray-500 sm:text-sm">{APP_URL}</p>
      </div>

      <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center sm:gap-3">
        <a
          href="/qr-code.png"
          download="newshivalayanagar-election-qr.png"
          className="flex min-h-12 items-center justify-center rounded-xl bg-campaign-green px-4 py-3 text-sm font-medium text-white active:bg-green-800 sm:min-h-0 sm:rounded-lg sm:py-2"
        >
          Download PNG
        </a>
        <a
          href="/qr-code.svg"
          download="newshivalayanagar-election-qr.svg"
          className="flex min-h-12 items-center justify-center rounded-xl border border-campaign-orange px-4 py-3 text-sm font-medium text-campaign-orange active:bg-campaign-orange active:text-white sm:min-h-0 sm:rounded-lg sm:py-2"
        >
          Download SVG
        </a>
      </div>
    </div>
  )
}

export default QrCode
