/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	AccordionItem,
	AccordionItemContent,
	AccordionItemTrigger,
	AccordionRoot,
} from '@/components/ui/accordion';
import { useColors, usefont } from '@/hooks';
import { FC } from 'react';

type AccordionComponentProps = {
	data: any;
};

const AccordionComponent: FC<AccordionComponentProps> = ({ data }) => {
	const { colors } = useColors();
	const { fonts } = usefont();
	return (
		<AccordionRoot collapsible defaultValue={['item one']}>
			{data?.map((item: any, i: number) => (
				<AccordionItem key={i} value={item?.title}>
					<AccordionItemTrigger
						cursor='pointer'
						color={colors?.white}
						py='1rem'
						fontFamily={fonts?.OpenSans}
						fontSize={{ base: '1rem', lg: '1.25rem' }}
					>
						{item?.title}
					</AccordionItemTrigger>
					<AccordionItemContent
						color={colors?.white}
						py='1rem'
						fontFamily={fonts?.OpenSans}
						fontSize={{ base: '.875rem', lg: '1rem' }}
					>
						{item?.description}
					</AccordionItemContent>
				</AccordionItem>
			))}
		</AccordionRoot>
	);
};

export default AccordionComponent;
