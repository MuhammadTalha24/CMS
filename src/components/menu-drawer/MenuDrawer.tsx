/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
	DrawerBackdrop,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerRoot,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { colors } from '@/lib/config/colors';
import {
	AccordionItem,
	AccordionItemContent,
	AccordionItemTrigger,
	AccordionRoot,
	Box,
	Flex,
	Stack,
	Text,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { data } from '@/lib/config/data';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { useColors } from '@/hooks';
import { NormalText } from '../text';

type MenuDrawerProps = {
	children: ReactNode;
	handleCheckout?: () => void;
};

const MenuDrawer: FC<MenuDrawerProps> = ({ children, handleCheckout }) => {
	const { header } = data;
	const { colors } = useColors();

	return (
		<DrawerRoot placement={'start'} size={'xs'}>
			<DrawerBackdrop />
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent bg={colors?.black}>
				<DrawerCloseTrigger color={colors?.white} />
				<Flex mt={16}>
					<Stack width='full' gap={0}>
						{header?.navItems?.map((navItem: any, i: number) => (
							<AccordionRoot
								key={i}
								collapsible
								variant='plain'
								defaultValue={navItem?.dropdown ? undefined : navItem?.name}
							>
								{!navItem?.dropdown ? (
									<Link href={navItem?.link || '/'}>
										<NormalText
											px={4}
											py={2}
											fontWeight={600}
											fontSize={'1rem'}
											// _hover={{ bg: colors.hoverColor }}
										>
											{navItem?.name}
										</NormalText>
									</Link>
								) : (
									<AccordionItem value={navItem?.name}>
										<AccordionItemTrigger p={0} color={colors?.white}>
											<Flex
												justify='space-between'
												align='center'
												width='full'
												// _hover={{ bg: colors.hoverColor, cursor: 'pointer' }}
												px={4}
												py={2}
											>
												<NormalText color={colors?.white}>
													{navItem?.name}
												</NormalText>
												<Box as='span' mr='3px'>
													<IoIosArrowDown />
												</Box>
											</Flex>
										</AccordionItemTrigger>
										<Flex direction='column'>
											{navItem?.dropdown?.map((item: any, index: number) => (
												<AccordionItemContent key={index}>
													<Link href={item?.link || '/'}>
														<NormalText
															fontSize='.875rem'
															px={4}
															py={2}
															ml={4}
															fontWeight='200'
															color={colors?.white}

															// _hover={{ bg: colors.hoverColor }}
														>
															{item?.name}
														</NormalText>
													</Link>
												</AccordionItemContent>
											))}
										</Flex>
									</AccordionItem>
								)}
							</AccordionRoot>
						))}
					</Stack>
				</Flex>
			</DrawerContent>
		</DrawerRoot>
	);
};

export default MenuDrawer;
