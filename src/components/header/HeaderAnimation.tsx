'use client';
import { FlexProps, Flex, Center, Box } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { HeaderContainer, IconContainer } from './index';
import {
	FlexImage,
	Icon,
	MenuDrawer,
	NormalText,
	SectionPadding,
	Heading,
} from '@/components';
import { data } from '@/lib/config/data';
import Link from 'next/link';
import { useColors } from '@/hooks';
import { padding, zIndex } from '@/lib/config/constants';

type HeaderAnimationProps = FlexProps & {};

const HeaderAnimation: FC<HeaderAnimationProps> = () => {
	const { header } = data;

	// State to track active dropdown
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	// Toggle dropdown visibility
	const handleToggle = (itemName: string) => {
		setActiveDropdown(activeDropdown === itemName ? null : itemName);
	};

	const { colors } = useColors();
	return (
		<Box position='relative' zIndex={zIndex?.header} w='full' bg='red'>
			<HeaderContainer zIndex='1000'>
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
										<Box>
											<Flex
												alignItems='center'
												cursor='pointer'
												onClick={() => item.dropdown && handleToggle(item.name)}
												px='1rem'
												_hover={{ color: colors?.textBlack }}
											>
												<Heading fontSize='1.2rem' mr='.5rem' userSelect='none'>
													{item.name}
												</Heading>
												{item.dropdown && (
													<>
														{activeDropdown === item.name ? (
															<Icon color={colors?.white} name='arrowUp' />
														) : (
															<Icon color={colors?.white} name='arrowDown' />
														)}
													</>
												)}
											</Flex>

											<Box
												position='absolute'
												w='full'
												h='70vh'
												top={activeDropdown === item.name ? '100%' : '-1000px'} // Move dropdown to position
												left='0'
												bg={colors?.dark}
												py='4rem'
												zIndex={zIndex?.headerDropdown}
												transition='top 0.7s ease-in-out' // Smooth transition effect
											>
												<Heading
													fontSize='1.5rem'
													fontWeight='600'
													color={colors?.white}
													px={{
														base: padding.layoutPadding_X_Mobile,
														lg: padding.layoutPadding_X,
													}}
													mb='1.5rem'
												>
													{`${item.name}`}
												</Heading>

												<Box
													style={{
														columnCount: 3,
														columnGap: '1rem', // Optional: space between columns
													}}
												>
													{item.dropdown.map((dropdownItem, j: number) => (
														<SectionPadding key={j} breakInside='avoid'>
															<Link
																href={dropdownItem.link}
																onClick={() => setActiveDropdown(null)} // Close dropdown on click
															>
																<NormalText
																	py='0.5rem'
																	_hover={{ textDecoration: 'underline' }}
																	color={colors?.white}
																>
																	{dropdownItem.name}
																</NormalText>
															</Link>
														</SectionPadding>
													))}
												</Box>
											</Box>
										</Box>
									) : (
										// Non-Dropdown Items
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
		</Box>
	);
};

export default HeaderAnimation;
