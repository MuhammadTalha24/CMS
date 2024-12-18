import {
	PageLayout,
	SectionPadding,
	Banner,
	FlexColumn,
	Heading,
	NormalText,
} from '@/components';
import { responsive } from '@/lib/config/constants';
import { data } from '@/lib/config/data';
import { TextProps } from '@chakra-ui/react';

const PADDING = { base: '1rem', lg: '8rem', xl: '12rem', '2xl': '18rem' };

import React from 'react';

const page = () => {
	const { valueTogether } = data;
	const partnersData = valueTogether?.cardData[0];
	return (
		<PageLayout>
			<Banner imgSrc='/about/partners/one.jpg' />
			<SectionPadding py='4rem'>
				<FlexColumn py='.5rem' alignItems='center'>
					<TextHeading textAlign='center' mb={4}>
						{partnersData?.title}
					</TextHeading>

					<NormalText
						fontSize={{ base: '.75rem', md: '.875rem', lg: '1rem' }}
						lineHeight='1.7'
						textAlign='center'
						px={PADDING}
					>
						{partnersData?.description}
					</NormalText>
				</FlexColumn>
			</SectionPadding>
		</PageLayout>
	);
};

export default page;

const TextHeading = ({
	children,
	...props
}: TextProps & { children: string }) => (
	<Heading
		fontSize={responsive?.smallTitle}
		fontWeight='700'
		// lineHeight='1.2'
		{...props}
	>
		{children}
	</Heading>
);
