import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { data } from '@/lib/config/data';
import Link from 'next/link';
import { FlexImage, Heading } from '@/components';

type HeaderProps = FlexProps & {
	image?: string;
};

const Header: FC<HeaderProps> = ({}) => {
	const { header } = data;
	return (
		<Flex py='2rem'>
			<Link href='/'>
				<FlexImage maxW='14rem' mr='3rem' image={header?.logo} />
			</Link>
			<Flex w='full' justifyContent='center' alignItems='center' h={'auto'}>
				{header?.navItems?.map((item, i: number) => (
					<Link href='/' key={i}>
						<Flex mx='2rem'>
							<Heading fontSize='1.5rem'>{item?.name}</Heading>
						</Flex>
					</Link>
				))}
			</Flex>
		</Flex>
	);
};

export default Header;
