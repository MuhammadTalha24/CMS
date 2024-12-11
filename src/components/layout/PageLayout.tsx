import { Footer, Header } from '@/components';
import { FC } from 'react';

import { useColors } from '@/hooks';
import { Box, BoxProps } from '@chakra-ui/react';

type LayoutProps = BoxProps & {};

const PageLayout: FC<LayoutProps> = ({ children, ...props }) => {
	const { colors } = useColors();
	return (
		<Box bg={colors?.black} {...props}>
			<Header />
			<Box minH={'80vh'}>{children}</Box>
			<Footer />
		</Box>
	);
};

export default PageLayout;
