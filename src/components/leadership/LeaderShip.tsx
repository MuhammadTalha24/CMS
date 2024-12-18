import { responsive } from '@/lib/config/constants';
import { Box, BoxProps, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { data } from '@/lib/config/data';
import { FlexColumn, Heading, NormalText } from '@/components';

const PADDING = { base: '1rem', lg: '8rem', xl: '12rem', '2xl': '18rem' };

type LeaderShipProps = BoxProps & {};

const LeaderShip: FC<LeaderShipProps> = ({ ...props }) => {
	const { leadershipSection } = data;

	return (
		<Box {...props}>
			<FlexColumn alignItems='center'>
				<TextHeading textAlign='center' mb={4}>
					{leadershipSection?.heading}
				</TextHeading>

				<NormalText
					fontSize={{ base: '.75rem', md: '.875rem', lg: '1rem' }}
					lineHeight='1.7'
					textAlign='center'
					px={PADDING}
				>
					{leadershipSection?.description}
				</NormalText>
			</FlexColumn>
		</Box>
	);
};

export default LeaderShip;
const TextHeading = ({
	children,
	...props
}: TextProps & { children: string }) => (
	<Heading
		fontSize={responsive?.smallTitle}
		fontWeight='700'
		// lineHeight='1.2'
		{...props}
	>
		{children}
	</Heading>
);
