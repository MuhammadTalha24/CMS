/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FlexCenter, NormalText } from '@/components';
import Link from 'next/link';
import { useColors } from '@/hooks';
import { data } from '@/lib/config/data';
import { responsive } from '@/lib/config/constants';

type FooterLinkProps = FlexProps & {};
const FooterLink: FC<FooterLinkProps> = ({ ...props }) => {
	const { colors } = useColors();
	const { footer } = data;
	return (
		<FlexCenter {...props}>
			{footer?.footerLinks?.map((item: any, i: number) => (
				<Link href={item?.link} key={i}>
					<NormalText
						mx={{ base: 1, md: '1rem' }}
						transition='.3s'
						color={colors?.lightWhite}
						_hover={{ color: colors?.white }}
						fontSize={responsive?.smallText}
					>
						{item?.text}
					</NormalText>
				</Link>
			))}
		</FlexCenter>
	);
};

export default FooterLink;
