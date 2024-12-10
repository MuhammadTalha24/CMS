/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { data } from '@/lib/config/data';
import Link from 'next/link';
import { FlexColumn, Heading, NormalText } from '@/components';
import { useColors } from '@/hooks';

type FooterProps = GridProps & {
	image?: string;
};

const Footer: FC<FooterProps> = ({}) => {
	const { footer } = data;
	const { colors } = useColors();
	return (
		<Box>
			<Grid gridTemplateColumns={'repeat(4, 1fr)'}>
				{footer?.map((item: any, i: number) => (
					<Box mb='1rem' key={i}>
						<Heading fontSize='1.2rem' mb='1.2rem'>
							{item?.title}
						</Heading>
						<FlexColumn>
							{item?.links?.map((links: any, i: number) => (
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
				))}
			</Grid>
			<NormalText textAlign='center' py='1rem'>
				© tech.novelty. All right reserved.
			</NormalText>
		</Box>
	);
};

export default Footer;
