import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type ContainerProps = BoxProps & {};
const Container: FC<ContainerProps> = ({ ...props }) => {
	return <Box {...props}></Box>;
};

export default Container;
