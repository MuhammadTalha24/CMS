/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import FaqHeader from './FaqHeader';

import {
	AccordionItem,
	AccordionItemContent,
	AccordionItemTrigger,
	AccordionRoot,
} from '@/components/ui/accordion';
import Container from './Container';

type FaqCompProps = BoxProps & {
	faq: {
		title: string;
		description: string;
	}[];
};
const FaqComp: FC<FaqCompProps> = ({ faq, ...props }) => {
	return (
		<Container {...props}>
			<FaqHeader>FAQ</FaqHeader>
			<AccordionRoot collapsible defaultValue={['item one']}>
				{faq.map((item, i) => (
					<AccordionItem key={i} value={item?.title}>
						<AccordionItemTrigger cursor='pointer'>
							{item?.title}
						</AccordionItemTrigger>
						<AccordionItemContent>{item?.description}</AccordionItemContent>
					</AccordionItem>
				))}
			</AccordionRoot>
		</Container>
	);
};

export default FaqComp;
