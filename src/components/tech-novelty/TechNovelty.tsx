import { responsive } from '@/lib/config/constants';
import { Box, BoxProps, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { data } from '@/lib/config/data';
import { FlexColumn, Heading, NormalText } from '@/components';
const PADDING = { base: '1rem', lg: '8rem', xl: '12rem', '2xl': '18rem' };

type TechNoveltyProps = BoxProps & {};

const TechNovelty: FC<TechNoveltyProps> = ({ ...props }) => {
	const { aboutSection } = data;

	return (
		<Box {...props}>
			<FlexColumn justifyContent='center' alignItems='center'>
				<TextHeading textAlign='center'>{aboutSection?.heading}</TextHeading>
				<Heading
					fontWeight='700'
					fontSize={responsive?.smallTitle}
					py='1rem'
					textAlign='center'
				>
					{aboutSection?.shortDescription}
				</Heading>
				<NormalText
					lineHeight='1.7'
					fontSize={{ base: '.75rem', md: '.875rem', lg: '1rem' }}
					fontWeight={responsive?.text}
					textAlign='center'
					px={PADDING}
				>
					{aboutSection?.description}
				</NormalText>
			</FlexColumn>
		</Box>
	);
};

export default TechNovelty;

const TextHeading = ({
	children,
	...props
}: TextProps & { children: string }) => (
	<Heading
		fontSize={responsive?.bigTitle}
		fontWeight='700'
		lineHeight='1.2'
		{...props}
	>
		{children}
	</Heading>
);
