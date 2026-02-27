import './globals.css'

export const metadata = {
  title: 'Mission Control - Kimchi HQ',
  description: 'Project management dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}