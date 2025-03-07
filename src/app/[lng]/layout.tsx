import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import Header from '@/components/header';
import '../globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
	return languages.map(lng => ({ lng }));
}

export const metadata = {
	title: 'Takahiro Mitsui| Portfolio',
	description:
		'Takahiro is a full-stack developer with 3+ years of experience based in Berlin/Germany.',
};

export default function RootLayout({
	children,
	params: { lng },
}: {
	children: React.ReactNode;
	params: {
		lng: string;
	};
}) {
	return (
		<html
			lang={lng}
			dir={dir(lng)}
			className='!scroll-smooth'
			suppressHydrationWarning
		>
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				<ThemeContextProvider>
					<div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
					<div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
					<ActiveSectionProvider>
						<Header />
						{children}
						<Footer />
						<ThemeSwitch />
					</ActiveSectionProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
