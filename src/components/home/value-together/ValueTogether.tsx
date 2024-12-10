import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
// import { Heading } from '@/components';
// import { data } from '@/lib/config/data';

type ValueTogetherProps = BoxProps & {
	children?: ReactNode;
};
const ValueTogether: FC<ValueTogetherProps> = ({}) => {
	// const {valueTogether} = data
	return (
		<Box>
			{/* <Heading fontSize="1.5rem">{valueTogether?.title}</Heading> */}
		</Box>
	);
};

export default ValueTogether;
