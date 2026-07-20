import React from 'react'
import { Link } from 'react-router-dom'
import { CAMPAIGN } from '../../constants/campaign'
import FanIcon from '../common/FanIcon'

function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-campaign-orange bg-campaign-green text-white">
      <div className="mx-auto max-w-6xl px-3 py-6 sm:px-4 sm:py-8">
        <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <FanIcon className="h-10 w-10 sm:h-12 sm:w-12" />
            <div>
              <p className="text-base font-bold leading-snug sm:text-lg">{CAMPAIGN.slogans.footerEnglish}</p>
              <p className="text-xs text-white/90 sm:text-sm">{CAMPAIGN.slogans.footerTelugu}</p>
            </div>
          </div>

          <p className="max-w-2xl text-xs text-white/85 sm:text-sm">
            {CAMPAIGN.slogans.primaryEnglish} · {CAMPAIGN.slogans.primaryTelugu}
          </p>

          <div className="hidden flex-wrap justify-center gap-2 text-sm sm:flex sm:gap-3">
            <Link to="/posters" className="rounded-full bg-white/15 px-4 py-2 active:bg-white/25">
              Posters
            </Link>
            <Link to="/videos" className="rounded-full bg-white/15 px-4 py-2 active:bg-white/25">
              Videos
            </Link>
            <Link
              to="/qr"
              className="rounded-full bg-campaign-orange px-4 py-2 font-semibold active:bg-orange-500"
            >
              Scan QR Code
            </Link>
          </div>

          <p className="text-[11px] leading-relaxed text-white/70 sm:text-xs">
            {CAMPAIGN.electionDate} · {CAMPAIGN.electionDateTelugu}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
