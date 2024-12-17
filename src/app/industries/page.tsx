import { IndustriesFaq, PageLayout, SectionPadding } from '@/components';
import { useColors } from '@/hooks';
const scrollTop = { scrollMarginTop: '100px' };

import React from 'react';

const ServicePage = () => {
	const { colors } = useColors();
	return (
		<PageLayout>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<IndustriesFaq id='industries' style={scrollTop} />
			</SectionPadding>
		</PageLayout>
	);
};

export default ServicePage;
