import { Footer, HeaderAnimation } from '@/components';
import { FC } from 'react';

import { useColors } from '@/hooks';
import { Box, BoxProps } from '@chakra-ui/react';

type LayoutProps = BoxProps & {
	isHomePage?: boolean;
};

const PageLayout: FC<LayoutProps> = ({ children, isHomePage, ...props }) => {
	const { colors } = useColors();
	return (
		<Box bg={colors?.black} {...props}>
			<HeaderAnimation />
			<Box minH={'80vh'}>{children}</Box>
			<Footer isHomePage={isHomePage} />
		</Box>
	);
};

export default PageLayout;
