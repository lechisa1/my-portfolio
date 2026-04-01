import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lechisa Bedasa | Full-Stack Developer',
  description: 'Professional Full-Stack Developer specializing in building scalable web applications with modern technologies. View my portfolio, projects, and experience.',
  keywords: ['Full-Stack Developer', 'Web Developer', 'React', 'Next.js', 'Node.js', 'Laravel', 'Portfolio'],
  authors: [{ name: 'Lechisa Bedasa' }],
  creator: 'Lechisa Bedasa',
  openGraph: {
    title: 'Lechisa Bedasa | Full-Stack Developer',
    description: 'Professional Full-Stack Developer specializing in building scalable web applications with modern technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lechisa Bedasa | Full-Stack Developer',
    description: 'Professional Full-Stack Developer specializing in building scalable web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${poppins.className}`}>
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}