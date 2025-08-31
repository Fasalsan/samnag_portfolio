// app/layout.js
import 'aos/dist/aos.css';
import './globals.css'

export const metadata = {
  title: 'Samnang Sem',
  description: 'im samnang',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
