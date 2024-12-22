import type { Metadata } from 'next';
import './globals.css';
import Providers from './Providers';
import localFont from 'next/font/local';

const NibProRegular = localFont({
	src: './fonts/NibPro-Regular.ttf',
	variable: '--font-nibpro-regular',
});

const NibProSemiBold = localFont({
	src: './fonts/NibPro-SemiBold.ttf',
	variable: '--font-nibpro-bold',
});

const NibProBold = localFont({
	src: './fonts/NibPro-Bold.ttf',
	variable: '--font-nibpro-bold',
});

export const metadata: Metadata = {
	title: 'Tech Novelty',
	description:
		'Tech Novelty Limited delivers cutting-edge IT solutions and tailored services to drive business success.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${NibProRegular.variable} ${NibProSemiBold.variable} ${NibProBold.variable}`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
