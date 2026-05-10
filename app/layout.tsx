export const metadata = {
  title: 'Credex AI Spend Audit',
  description: 'Instantly audit your startup\'s AI stack.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
