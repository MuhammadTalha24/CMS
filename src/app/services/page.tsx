import { PageLayout, SectionPadding, ServiceSection } from '@/components';
import { useColors } from '@/hooks';

const scrollTop = { scrollMarginTop: '100px' };
import React from 'react';

const ServicePage = () => {
	const { colors } = useColors();

	return (
		<PageLayout>
			<SectionPadding py={'3rem'} bg={colors?.black}>
				<ServiceSection style={scrollTop} id='service' />
			</SectionPadding>
		</PageLayout>
	);
};

export default ServicePage;
