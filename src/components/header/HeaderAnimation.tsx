'use client';
import { FlexProps, Flex, Center, Box } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { HeaderContainer, IconContainer } from './index';
import {
	FlexImage,
	Icon,
	MenuDrawer,
	SectionPadding,
	Heading,
} from '@/components';
import { data } from '@/lib/config/data';
import Link from 'next/link';
import { useColors } from '@/hooks';
import { zIndex } from '@/lib/config/constants';
import DropdownItems from './DropdownItems';

type HeaderAnimationProps = FlexProps & {};

const HeaderAnimation: FC<HeaderAnimationProps> = () => {
	const { header } = data;

	// State to track active dropdown
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	// Toggle dropdown visibility
	const handleToggle = (itemName: string) => {
		setActiveDropdown(activeDropdown === itemName ? null : itemName);
	};

	// Hide dropdown when clicking on the 30vh area
	const handleOutsideClick = () => {
		setActiveDropdown(null);
	};

	// Effect to disable scrolling when a dropdown is open
	useEffect(() => {
		if (activeDropdown) {
			document.body.style.overflow = 'hidden'; // Disable scrolling
		} else {
			document.body.style.overflow = ''; // Restore scrolling
		}

		// Cleanup on component unmount
		return () => {
			document.body.style.overflow = '';
		};
	}, [activeDropdown]);

	const { colors } = useColors();
	return (
		<Box position='relative' zIndex={zIndex?.header} w='full' h='80px'>
			<HeaderContainer>
				<SectionPadding>
					<Flex alignItems='center'>
						<Center
							justifyContent={{ base: 'center', xl: 'flex-start' }}
							w={{ base: 'full', xl: 'auto' }}
							order={{ base: 2, md: 1 }}
						>
							<Link href='/'>
								<FlexImage maxW='14rem' image={header?.logo} />
							</Link>
						</Center>
						<Box display={{ base: 'block', xl: 'none' }}>
							<MenuDrawer>
								<IconContainer w='36px' display='inline'>
									<Icon color={colors?.white} name='menu' size={24} />
								</IconContainer>
							</MenuDrawer>
						</Box>
						<Flex
							w='full'
							justifyContent='center'
							alignItems='center'
							h='auto'
							display={{ base: 'none', xl: 'flex' }}
							order={{ base: 1, md: 2 }}
						>
							{header?.navItems?.map((item, i) => (
								<Box key={i}>
									{/* If dropdown exists */}
									{item.dropdown ? (
										<DropdownItems
											activeDropdown={activeDropdown}
											handleToggle={handleToggle}
											item={item}
											setActiveDropdown={handleOutsideClick}
										/>
									) : (
										<Link href={item.link}>
											<Heading
												fontSize='1.2rem'
												cursor='pointer'
												_hover={{ color: 'gray.300' }}
												px='1rem'
											>
												{item.name}
											</Heading>
										</Link>
									)}
								</Box>
							))}
						</Flex>
					</Flex>
				</SectionPadding>
			</HeaderContainer>
			{activeDropdown && (
				<Box
					position='absolute'
					top='70vh'
					left='0'
					w='full'
					h='100vh' /* Bottom 30vh area */
					onClick={handleOutsideClick} /* Handle clicks */
					bg='transparent' /* Transparent click area */
					zIndex='1099' /* Behind dropdown but above other elements */
				/>
			)}
		</Box>
	);
};

export default HeaderAnimation;
