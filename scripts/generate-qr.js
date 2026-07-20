import QRCode from 'qrcode'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')
const appUrl = 'https://newshivalayanagaryouth.vercel.app/'

await mkdir(publicDir, { recursive: true })

const pngPath = path.join(publicDir, 'qr-code.png')
const svgPath = path.join(publicDir, 'qr-code.svg')

await QRCode.toFile(pngPath, appUrl, {
  errorCorrectionLevel: 'H',
  margin: 2,
  width: 512,
  color: {
    dark: '#000000',
    light: '#FFFFFF',
  },
})

const svg = await QRCode.toString(appUrl, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 2,
  color: {
    dark: '#000000',
    light: '#FFFFFF',
  },
})

await writeFile(svgPath, svg)

console.log(`Generated ${pngPath}`)
console.log(`Generated ${svgPath}`)
console.log(`QR code points to: ${appUrl}`)
