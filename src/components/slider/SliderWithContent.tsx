/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Heading, Icon, NormalText, Overlay } from '@/components';
import { useColors } from '@/hooks';
import { zIndex } from '@/lib/config/constants';
import { Box, Center, Image } from '@chakra-ui/react'; // If you're using Chakra UI
import { FC, useRef } from 'react';
import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Custom Previous Button
const PreviousButton = ({ onClick }: { onClick?: () => void }) => {
	const { colors } = useColors();
	return (
		<Center
			position='absolute'
			bottom='18%'
			right='16%'
			width='40px'
			h='40px'
			zIndex={zIndex?.hero}
			cursor='pointer'
			onClick={onClick} // Pass onClick here
		>
			<Icon color={colors?.white} name='arrowLeft' />
		</Center>
	);
};

const NextButton = ({ onClick }: { onClick?: () => void }) => {
	const { colors } = useColors();
	return (
		<Center
			position='absolute'
			bottom='10%'
			right='16%'
			width='40px'
			h='40px'
			zIndex={zIndex?.hero}
			cursor='pointer'
			onClick={onClick} // Pass onClick here
		>
			<Icon color={colors?.white} name='arrowRight' />
		</Center>
	);
};
// Custom Next Button

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
	const sliderRef = useRef<SlickSlider | null>(null);
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
		prevArrow: (
			<PreviousButton onClick={() => sliderRef.current?.slickPrev()} />
		),
		nextArrow: <NextButton onClick={() => sliderRef.current?.slickNext()} />,
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
		<Box overflowX='hidden' h='full' w='full' mt='80px'>
			<SlickSlider ref={sliderRef} {...settings}>
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
							{item?.heading && <Overlay />}

							{item?.heading && (
								<Box
									zIndex={zIndex?.hero}
									position='absolute'
									w={{ base: '90%', lg: '70%' }}
									top='50%'
									left='50%'
									transform={'translate(-50%, -50%)'}
								>
									<Heading
										fontSize={{ base: '1.2rem', md: '2rem', lg: '2.5rem' }}
										fontWeight='600'
										color={colors?.white}
										textAlign={'center'}
									>
										{item?.heading}
									</Heading>
									{item?.text && (
										<NormalText
											fontSize={{ base: '.875rem', md: '1rem', lg: '1.25rem' }}
											textAlign={'center'}
											fontWeight='200'
										>
											{item?.text}
										</NormalText>
									)}
									{item?.textlist?.map((item: any, i: number) => (
										<NormalText
											key={i}
											fontSize={{ base: '.875rem', md: '1rem', lg: '1.25rem' }}
											color={colors?.white}
											fontWeight='200'
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
