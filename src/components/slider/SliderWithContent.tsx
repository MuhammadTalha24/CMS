/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Heading, NormalText, Overlay } from '@/components';
import { useColors } from '@/hooks';
import { zIndex } from '@/lib/config/constants';
// import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Image } from '@chakra-ui/react'; // If you're using Chakra UI
import { FC } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// const styles = {
// 	buttonStyle: {
// 		ariaLabel: 'Previous',
// 		position: 'absolute',
// 		top: '50%',
// 		transform: 'translateY(-50%)',
// 		zIndex: '10',
// 		bg: 'rgba(0, 0, 0, 0.5)',
// 		color: 'white',
// 		borderRadius: 'full',
// 		p: { base: '18px', sm: '8px', md: '12px' },
// 		size: {
// 			base: 'sm', // Adjust size for small screens
// 			sm: 'lg',
// 		},
// 	},
// };

// Custom Previous Button
// const PreviousButton = ({ onClick }: { onClick?: () => void }) => {
// 	return (
// 		<IconButton
// 			aria-label='Previous'
// 			// icon={<ArrowBackIcon />}
// 			position='absolute'
// 			left={{ base: '20px', sm: '50px', md: '150px', lg: '200px', xl: '245px' }}
// 			top='50%'
// 			transform='translateY(-50%)'
// 			zIndex='10'
// 			bg='rgba(0, 0, 0, 0.5)'
// 			color='white'
// 			borderRadius='full'
// 			onClick={onClick}
// 			_hover={{ bg: 'rgba(0, 0, 0, 0.8)' }}
// 			p={{ base: '18px', sm: '8px', md: '12px' }}
// 			size={{
// 				base: 'sm', // Adjust size for small screens
// 				sm: 'lg',
// 			}}
// 		/>
// 	);
// };

// Custom Next Button
// const NextButton = ({ onClick }: { onClick?: () => void }) => {
// 	return (
// 		<IconButton
// 			aria-label='Next'
// 			// icon={<Icon name='search' />}
// 			position='absolute'
// 			right={{
// 				base: '20px',
// 				sm: '50px',
// 				md: '150px',
// 				lg: '200px',
// 				xl: '245px',
// 			}}
// 			top='50%'
// 			transform='translateY(-50%)'
// 			zIndex='10'
// 			bg='rgba(0, 0, 0, 0.5)'
// 			color='white'
// 			borderRadius='full'
// 			onClick={onClick}
// 			_hover={{ bg: 'rgba(0, 0, 0, 0.8)' }}
// 			p={{ base: '18px', sm: '8px', md: '12px' }}
// 			size={{
// 				base: 'sm', // Adjust size for small screens
// 				sm: 'lg',
// 			}}
// 		/>
// 	);
// };

type SliderItem = {
	heading: string;
	text?: string;
	image: string;
	textlist?: string[];
};
type SliderData = {
	one: SliderItem;
	two: SliderItem;
	three: SliderItem;
	four: SliderItem;
};

type SliderWithContentProps = {
	sliderData: SliderData;
};

const SliderWithContent: FC<SliderWithContentProps> = ({ sliderData }) => {
	const { colors } = useColors();
	const valuesMap = Object.values(sliderData);

	const settings = {
		centerMode: true,
		centerPadding: '300px',
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		slidesToShow: 1,
		infinite: true,
		speed: 1500,
		// prevArrow: <PreviousButton />,
		// nextArrow: <Icon name='arrow' />,
		responsive: [
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 1,
					centerPadding: '300px',
				},
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1,
					centerPadding: '250px',
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					centerPadding: '200px',
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerPadding: '100px',
				},
			},
			{
				breakpoint: 480, // For small devices
				settings: {
					slidesToShow: 1,
					centerPadding: '0px',
				},
			},
		],
	};

	return (
		<Box overflowX='hidden' h='full' w='full'>
			<SlickSlider {...settings}>
				{valuesMap.map((item, index) => (
					<Box key={index} px='20px' overflow='hidden'>
						<Box position={item?.heading && 'relative'} h='80vh'>
							<Image
								src={item?.image}
								alt={`slide-${index}`}
								borderRadius='md'
								boxShadow='md'
								objectFit='cover'
								w='full'
								h='full'
							/>
							{/* {item.heading && <Overlay />} */}
							{item?.heading && <Overlay />}

							{item?.heading && (
								<Box
									zIndex={zIndex?.hero}
									position='absolute'
									w='70%'
									top='50%'
									left='50%'
									transform={'translate(-50%, -50%)'}
								>
									<Heading
										fontSize={{ base: '1.5rem', lg: '3rem' }}
										fontWeight='600'
										color={colors?.white}
										textAlign={'center'}
									>
										{item?.heading}
									</Heading>
									{item?.text && (
										<NormalText fontSize='1.5rem' textAlign={'center'}>
											{item?.text}
										</NormalText>
									)}
									{item?.textlist?.map((item: any, i: number) => (
										<NormalText
											key={i}
											fontSize={{ base: '1.5rem', lg: '1.5rem' }}
											color={colors?.white}
										>
											{`• ${item}`}
										</NormalText>
									))}
								</Box>
							)}
						</Box>
					</Box>
				))}
			</SlickSlider>
		</Box>
	);
};

export default SliderWithContent;
