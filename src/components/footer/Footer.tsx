/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Flex, Grid, GridProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { data } from '@/lib/config/data';
import {
	FlexImage,
	FollowText,
	FooterColumnLinks,
	FooterLink,
	NormalText,
	SectionPadding,
} from '@/components';
import { useColors } from '@/hooks';
const TEMPLATE_COLUMNS = {
	base: '1fr',
	md: '1fr 1fr',
	xl: 'repeat(4, 1fr)',
};

type FooterProps = GridProps & {
	image?: string;
	isHomePage?: boolean;
};

const Footer: FC<FooterProps> = ({ isHomePage }) => {
	const { footer } = data;
	const { colors } = useColors();
	return (
		<Box>
			{isHomePage && (
				<SectionWrapper backgroundColor={colors?.primary}>
					<FooterLink />
				</SectionWrapper>
			)}

			<SectionWrapper py='3rem' backgroundColor={colors?.primary}>
				<Grid gridTemplateColumns={TEMPLATE_COLUMNS}>
					<Flex
						justifyContent='center'
						alignItems={{ base: 'flex-start', xl: 'center' }}
						px='1rem'
						mb={{ base: 12, md: 0 }}
					>
						<FlexImage
							justifyContent='center'
							w='250px'
							h='auto'
							image='/logo/footerLogo.png'
						/>
					</Flex>
					{footer?.columnLinks.map((item: any, i: number) => (
						<FooterColumnLinks data={item} key={i} />
					))}
					<FollowText />
				</Grid>
			</SectionWrapper>
			<SectionWrapper>
				<NormalText textAlign='center' py='1rem'>
					{footer?.copyrightText}
				</NormalText>
			</SectionWrapper>
		</Box>
	);
};

export default Footer;

const SectionWrapper = ({
	children,
	...props
}: BoxProps & { children: ReactNode }) => {
	const { colors } = useColors();
	return (
		<SectionPadding
			borderTop={`1px solid ${colors?.borderColor}`}
			py='1rem'
			{...props}
		>
			{children}
		</SectionPadding>
	);
};
