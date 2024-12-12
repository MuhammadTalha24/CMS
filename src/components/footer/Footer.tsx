/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Grid, GridProps } from '@chakra-ui/react';
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

type FooterProps = GridProps & {
	image?: string;
};

const Footer: FC<FooterProps> = ({}) => {
	const { footer } = data;
	const { colors } = useColors();
	return (
		<Box>
			<SectionWrapper backgroundColor={colors?.primary}>
				<FooterLink />
			</SectionWrapper>
			<SectionWrapper py='3rem'>
				<Grid gridTemplateColumns={'repeat(4, 1fr)'}>
					<FlexImage w='250px' h='auto' image='/logo/logo.png' />
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
