'use client';
import { Footer, HeaderAnimation } from '@/components';
import { FC, useEffect, useState } from 'react';

import { useColors } from '@/hooks';
import { Box, BoxProps, Center, Spinner } from '@chakra-ui/react';

type LayoutProps = BoxProps & {
	isHomePage?: boolean;
};

const PageLayout: FC<LayoutProps> = ({ children, isHomePage, ...props }) => {
	const [isLoading, setIsLoading] = useState(true);
	const { colors } = useColors();

	useEffect(() => {
		const timeout = setTimeout(() => setIsLoading(false), 3000); // Adjust time as needed
		return () => clearTimeout(timeout);
	}, []);

	if (isLoading) {
		return (
			<Center minH='100vh' bg={colors?.black}>
				<Spinner color={colors?.white} size='xl' />
			</Center>
		);
	}
	return (
		<Box bg={colors?.black} {...props}>
			<HeaderAnimation />
			<Box minH={'80vh'}>{children}</Box>
			<Footer isHomePage={isHomePage} />
		</Box>
	);
};

export default PageLayout;
