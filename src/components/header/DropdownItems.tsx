/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Heading, Icon, NormalText, SectionPadding } from '@/components';
import { useColors } from '@/hooks';
import { padding } from '@/lib/config/constants';
import Link from 'next/link';

type DropdownItemsProps = BoxProps & {
	item: any;
	handleToggle: (name: string) => void;
	setActiveDropdown: () => void;
	activeDropdown: string | null;
};

const DropdownItems: FC<DropdownItemsProps> = ({
	item,
	handleToggle,
	activeDropdown,
	setActiveDropdown,
	...props
}) => {
	const { colors } = useColors();
	return (
		<Box {...props}>
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
				top={activeDropdown === item.name ? '100%' : '-75vh'} // Move dropdown to position
				left='0'
				bg={colors?.black}
				opacity='.8'
				py='4rem'
				zIndex={'11'}
				transition='top 0.6s ease-out' // Smooth transition effect
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
					{item.dropdown.map((dropdownItem: any, j: number) => (
						<SectionPadding key={j} breakInside='avoid'>
							<Link
								href={dropdownItem.link}
								onClick={setActiveDropdown} // Close dropdown on click
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
	);
};

export default DropdownItems;
