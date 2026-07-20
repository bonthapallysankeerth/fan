export const APP_URL = 'https://newshivalayanagaryouth.vercel.app/'

export const CAMPAIGN = {
  titleTelugu: 'న్యూ శివాలయం నగర్ కమ్యూనిటీ ఎన్నికలు',
  titleEnglish: 'New Shivalayam Nagar Community Elections',
  symbol: 'Fan',
  symbolTelugu: 'ఫ్యాన్',
  serialNumber: 1,
  electionDate: '2 August 2026',
  electionDateTelugu: '2 ఆగస్టు 2026, ఆదివారం',
  electionTime: '7:00 AM – 3:00 PM',
  electionTimeTelugu: 'ఉదయం 7:00 నుంచి మధ్యాహ్నం 3:00 వరకు',
  slogans: {
    primaryTelugu: 'ఫ్యాన్ గుర్తుకే మన ఓటు',
    primaryEnglish: 'Vote for Fan Symbol',
    secondaryTelugu: 'మార్పు కోసం ఓటు వేయండి',
    secondaryEnglish: 'Vote for Change',
    footerTelugu: 'కలిసి నడుద్దాం - అభివృద్ధి చేద్దాం',
    footerEnglish: "Let's walk together — Let's develop",
  },
}

export const CANDIDATES = [
  {
    id: 'president',
    name: 'B. Sandeep Reddy',
    nameTelugu: 'బి. సందీప్ రెడ్డి',
    role: 'President',
    roleTelugu: 'అధ్యక్షుడు',
    nominationTelugu: 'అధ్యక్ష పదవికి నామినేట్ అయిన అభ్యర్థి',
    featured: true,
  },
  {
    id: 'general-secretary',
    name: 'G. Pradeep(Nani)',
    nameTelugu: 'జి. ప్రవీణ్ కుమార్',
    role: 'General Secretary',
    roleTelugu: 'ప్రధాన కార్యదర్శి',
    nominationTelugu: 'ప్రధాన కార్యదర్శి పదవికి నామినేట్ అయిన అభ్యర్థి',
    featured: false,
  },
  {
    id: 'treasurer',
    name: 'B. Revanth Kumar',
    nameTelugu: 'బి. రేవంత్ కుమార్',
    role: 'Treasurer',
    roleTelugu: 'ట్రెజరర్',
    nominationTelugu: 'ట్రెజరర్ పదవికి నామినేట్ అయిన అభ్యర్థి',
    featured: false,
  },
]

export const POSTERS = [
  {
    id: 'main-poster',
    title: 'Main Campaign Poster',
    titleTelugu: 'ప్రధాన ప్రచార పోస్టర్',
    image: '/posters/main-poster.png',
    description: 'Official election campaign poster with all candidates and voting details.',
  },
]

export const VIDEOS = [
  // Add YouTube video IDs here as campaign videos become available.
  // Example: { id: 'intro', title: 'Campaign Intro', titleTelugu: 'ప్రచార పరిచయం', youtubeId: 'VIDEO_ID' },
]

export const CONTACT = {
  community: 'New Shivalayam Nagar Community',
  communityTelugu: 'న్యూ శివాలయం నగర్ కమ్యూనిటీ',
  messageTelugu: 'ఎన్నికల సమాచారం, ప్రచార సహాయం, లేదా సమస్యల కోసం మమ్మల్ని సంప్రదించండి.',
  messageEnglish: 'Reach out for election information, campaign support, or community queries.',
}
