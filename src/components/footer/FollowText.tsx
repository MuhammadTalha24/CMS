/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
	FlexCenter,
	FlexColumn,
	Heading,
	NormalText,
	SocialIcon,
} from '@/components';

import { data } from '@/lib/config/data';

type FollowTextProps = FlexProps & {};
const FollowText: FC<FollowTextProps> = ({ ...props }) => {
	const { footer } = data;
	return (
		<FlexColumn mb={{ base: 12, md: 0 }} justifyContent='center' {...props}>
			<Heading fontSize='1.2rem' textAlign='center'>
				{footer?.followText?.title}
			</Heading>
			<NormalText textAlign='center'>
				{footer?.followText?.description}
			</NormalText>
			<FlexCenter mt='1rem'>
				{footer?.socialIcons?.map((item: any, i: number) => (
					<SocialIcon item={item} key={i} />
				))}
			</FlexCenter>
		</FlexColumn>
	);
};

export default FollowText;
