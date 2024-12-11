/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Icon, IconNameOptions } from '@/components';
import Link from 'next/link';

type SocialIconProps = {
	item: {
		iconName: IconNameOptions;
		color: string;
		link: string;
	};
};
const SocialIcon: FC<SocialIconProps> = ({ item }) => {
	return (
		<Link href={item?.link}>
			<Box mx='.5rem'>
				<Icon size={24} name={item?.iconName} color={item?.color} />
			</Box>
		</Link>
	);
};

export default SocialIcon;
