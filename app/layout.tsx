import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Rise Enclave | Premium Real Estate',
  description: 'Find Your Dream Property with our premium real estate agency.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-zinc-950 text-zinc-50 antialiased selection:bg-beige-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
