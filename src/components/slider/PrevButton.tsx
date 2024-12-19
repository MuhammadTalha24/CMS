import { useColors } from '@/hooks';
import { zIndex } from '@/lib/config/constants';
import { Center } from '@chakra-ui/react';
import { Icon } from '../icon';

const PrevButton = ({ onClick }: { onClick?: () => void }) => {
	const { colors } = useColors();
	return (
		<Center
			position='absolute'
			bottom={{ base: '10px', md: '50%' }}
			left={{ base: '60%', sm: '75%', md: '80px' }}
			transform='translateY(-10px)'
			width='40px'
			h='40px'
			borderRadius='full'
			bg={colors?.black}
			zIndex={zIndex?.hero}
			cursor='pointer'
			onClick={onClick} // Pass onClick here
		>
			<Icon color={colors?.white} name='arrowLeft' />
		</Center>
	);
};

export default PrevButton;
