/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heading, NormalText } from '@/components';
import { Box, Grid, Text } from '@chakra-ui/react';
import { data } from '@/lib/config/data';
import { useColors, usefont } from '@/hooks';

const contactStyle = {
	background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/contact/one.jpg")`,
	backgroundPosition: 'center center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	minHeight: 'auto',
};

const ContactSection = () => {
	const { contact } = data;

	const { colors } = useColors();
	const { fonts } = usefont();
	return (
		<Box w='full' h='full'>
			<Grid gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}>
				<Box pb='3rem' pr={4}>
					<Heading fontSize={{ base: '1.2rem', lg: '3rem' }} fontWeight='700'>
						{contact?.touch?.title}
					</Heading>
					<NormalText mb='2rem'>{contact?.shortDescription}</NormalText>

					<Box>
						<Heading fontWeight='600' fontSize='1.375rem'>
							Email:
						</Heading>
						{contact?.touch?.emai?.map((item: any, i: number) => (
							<Text
								key={i}
								fontFamily={fonts?.OpenSans}
								fontSize='1rem'
								color={colors?.white}
								py='.4rem'
							>
								<Text as={'span'} fontWeight='500'>
									{item?.boldText}
								</Text>{' '}
								{item?.mail}
							</Text>
						))}

						<Heading fontWeight='600' fontSize='1.375rem' mt='1rem'>
							{contact?.touch?.phone?.title}
						</Heading>
						<NormalText>{contact?.touch?.phone?.phone}</NormalText>

						<Heading fontWeight='600' fontSize='1.375rem' mt='1rem'>
							{contact?.touch?.address?.title}
						</Heading>
						<NormalText>{contact?.touch?.address?.officeName}</NormalText>
						<NormalText>{contact?.touch?.address?.address}</NormalText>
					</Box>
				</Box>
				<Box>
					<Box
						w='full'
						minH={{ base: '300px!important', md: '500px!important' }}
						borderRadius={4}
						style={contactStyle}
					></Box>
				</Box>
			</Grid>
		</Box>
	);
};

export default ContactSection;
