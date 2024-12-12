import { FlexColumn, Heading } from '@/components';
import { responsive } from '@/lib/config/constants';

import { data } from '@/lib/config/data';
import { FlexProps } from '@chakra-ui/react';
import { FC } from 'react';

type IndustryHeadingProps = FlexProps & {};
const IndustryHeading: FC<IndustryHeadingProps> = ({ ...props }) => {
	const { missionVision } = data;
	return (
		<FlexColumn alignItems='left' {...props}>
			<Heading fontSize={responsive?.smallTitle} fontWeight='700'>
				{missionVision?.heading?.title}
			</Heading>
		</FlexColumn>
	);
};

export default IndustryHeading;
