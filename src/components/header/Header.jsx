import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FanIcon from '../common/FanIcon'
import { CAMPAIGN } from '../../constants/campaign'

const navLinks = [
  { to: '/', label: 'Home', labelTelugu: 'హోమ్' },
  { to: '/posters', label: 'Posters', labelTelugu: 'పోస్టర్లు' },
  { to: '/videos', label: 'Videos', labelTelugu: 'వీడియోలు' },
  { to: '/qr', label: 'QR Code', labelTelugu: 'QR కోడ్' },
  { to: '/contact', label: 'Contact', labelTelugu: 'సంప్రదించండి' },
]

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-campaign-green/15 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3">
        <Link to="/" className="flex min-w-0 flex-1 items-center gap-2.5 sm:max-w-none sm:gap-3 md:flex-none">
          <FanIcon className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
          <div className="min-w-0">
            <p className="truncate text-xs font-bold leading-tight text-campaign-green sm:text-sm md:text-base">
              <span className="md:hidden">NSN Community Elections</span>
              <span className="hidden md:inline">{CAMPAIGN.titleEnglish}</span>
            </p>
            <p className="truncate text-[11px] leading-tight text-gray-600 sm:text-xs">
              {CAMPAIGN.titleTelugu}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Desktop navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-campaign-orange text-white'
                    : 'text-gray-700 hover:bg-campaign-orange/10 hover:text-campaign-orange'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-campaign-green px-2.5 py-1.5 text-white sm:gap-2 sm:px-3">
          <span className="text-[10px] uppercase tracking-wide opacity-90 sm:text-xs">No.</span>
          <span className="text-base font-bold sm:text-lg">{CAMPAIGN.serialNumber}</span>
          <FanIcon className="hidden h-5 w-5 sm:block" />
        </div>
      </div>
    </header>
  )
}

export default Header
