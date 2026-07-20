import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', labelTelugu: 'హోమ్', icon: '🏠' },
  { to: '/posters', label: 'Posters', labelTelugu: 'పోస్టర్లు', icon: '🖼️' },
  { to: '/videos', label: 'Videos', labelTelugu: 'వీడియోలు', icon: '▶️' },
  { to: '/qr', label: 'QR', labelTelugu: 'QR', icon: '📱' },
  { to: '/contact', label: 'Contact', labelTelugu: 'సంప్రదించు', icon: '📞' },
]

function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-campaign-green/15 bg-white/95 backdrop-blur md:hidden"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 pb-[env(safe-area-inset-bottom)]">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex min-h-[3.75rem] min-w-[3.5rem] flex-1 flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-2 text-center transition active:scale-95 ${
                isActive ? 'text-campaign-orange' : 'text-gray-500'
              }`
            }
          >
            <span className="text-lg leading-none" aria-hidden="true">
              {item.icon}
            </span>
            <span className="text-[10px] font-semibold leading-tight">{item.label}</span>
            <span className="text-[9px] leading-tight opacity-80">{item.labelTelugu}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default BottomNav
