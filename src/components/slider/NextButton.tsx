import { useColors } from '@/hooks';
import { zIndex } from '@/lib/config/constants';
import { Center } from '@chakra-ui/react';
import { Icon } from '@/components';

const NextButton = ({ onClick }: { onClick?: () => void }) => {
	const { colors } = useColors();
	return (
		<Center
			position='absolute'
			bottom={{ base: '10px', md: '50%' }}
			right={{ base: '40px', md: '80px' }}
			transform='translateY(-10px)'
			width='40px'
			h='40px'
			borderRadius='full'
			bg={colors?.black}
			zIndex={zIndex?.hero}
			cursor='pointer'
			onClick={onClick} // Pass onClick here
		>
			<Icon color={colors?.white} name='arrowRight' />
		</Center>
	);
};

export default NextButton;
