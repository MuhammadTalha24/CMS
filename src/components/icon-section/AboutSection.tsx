/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Center, Grid, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
	FlexColumn,
	FlexImage,
	Heading,
	LearnMoreBtn,
	NormalText,
} from '@/components';
import { responsive } from '@/lib/config/constants';

type IconSectionProps = GridProps & {
	data: any;
	order?: boolean;
};

const IconSection: FC<IconSectionProps> = ({ data, order, ...props }) => {
	return (
		<Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={12} {...props}>
			<Center order={order ? 2 : 1}>
				<FlexImage
					image={data?.icon}
					mb={{ base: 12, md: 0 }}
					h={{ base: 'full', lg: '90%', xl: '80%', '2xl': '70%' }}
				/>
			</Center>

			<FlexColumn order={order ? 1 : 2} justifyContent='center'>
				<TextHeading>{data?.heading}</TextHeading>
				<Heading fontWeight='700' fontSize={responsive?.smallTitle} py='1rem'>
					{data?.shortDescription}
				</Heading>
				<NormalText
					lineHeight='1.7'
					fontSize={{ base: '.75rem', md: '.875rem', lg: '1rem' }}
					fontWeight={responsive?.text}
				>
					{data?.description}
				</NormalText>
				<Box mt='1rem'>
					<LearnMoreBtn href='/about/tech-novelty'>Learn More</LearnMoreBtn>
				</Box>
			</FlexColumn>
		</Grid>
	);
};

export default IconSection;

const TextHeading = ({ children }: { children: string }) => (
	<Heading fontSize={responsive?.bigTitle} fontWeight='700' lineHeight='1.2'>
		{children}
	</Heading>
);
