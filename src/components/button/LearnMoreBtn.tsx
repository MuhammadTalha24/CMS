import { useColors, usefont } from '@/hooks';
import { Button, ButtonProps, Center, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { Icon } from '@/components';

type LearnMoreButtonProps = ButtonProps & {
	href: string;
};
const LearnMoreButton: FC<LearnMoreButtonProps> = ({ href, children }) => {
	const { colors } = useColors();
	const { fonts } = usefont();
	return (
		<Link href={href || ''}>
			<Flex justifyContent='flex-start' alignItems='center'>
				<Button
					fontSize={{ base: '1rem', lg: '1.2rem' }}
					bg='transparent'
					display='inline-block'
					mr='8px'
					transition='.3s'
					fontFamily={fonts?.OpenSans}
					_hover={{
						marginRight: '12px',
					}}
				>
					{children}
				</Button>
				<Center mt='4px'>
					<Icon color={colors?.brand} name='arrowRight' />
				</Center>
			</Flex>
		</Link>
	);
};

export default LearnMoreButton;
