/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Box,
	BoxProps,
	Center,
	Flex,
	Grid,
	GridProps,
	Text,
	TextProps,
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { data } from '@/lib/config/data';
import {
	FlexImage,
	FollowText,
	FooterColumnLinks,
	FooterLink,
	SectionPadding,
} from '@/components';
import { useColors, usefont } from '@/hooks';
import Link from 'next/link';
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
	const copyright = footer?.copyright;
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
				<Center gap={1}>
					<CopyrightText fontSize={'.875rem'}>
						{copyright?.leftText}
						<Link href={copyright?.link} target='_blank'>
							{copyright?.thinkText}
						</Link>
						{copyright?.rightText}
					</CopyrightText>
				</Center>
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

const CopyrightText = ({
	children,
	...props
}: TextProps & { children: ReactNode }) => {
	const { fonts } = usefont();
	const { colors } = useColors();
	return (
		<Text
			color={colors?.white}
			fontWeight='400'
			fontSize='1rem'
			fontFamily={fonts?.OpenSans}
			textAlign='center'
			{...props}
		>
			{children}
		</Text>
	);
};
