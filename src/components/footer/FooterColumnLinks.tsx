/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FlexColumn, Heading, NormalText } from '@/components';
import Link from 'next/link';
import { useColors } from '@/hooks';

type FooterColumnLinksProps = BoxProps & {
	data: {
		title: string;
		links: {
			link: string;
			text: string;
		}[];
	};
};
const FooterColumnLinks: FC<FooterColumnLinksProps> = ({ data, ...props }) => {
	const { colors } = useColors();
	return (
		<Box mb='1rem' {...props}>
			<Heading fontSize='1.2rem' mb='1.2rem'>
				{data?.title}
			</Heading>
			<FlexColumn>
				{data?.links?.map((links: any, i: number) => (
					<Link key={i} href={links?.link}>
						<NormalText
							color={colors?.textBlack}
							transition='.3s'
							mb='.8rem'
							display='inline-block'
							_hover={{ color: colors?.white }}
						>
							{links?.text}
						</NormalText>
					</Link>
				))}
			</FlexColumn>
		</Box>
	);
};

export default FooterColumnLinks;
