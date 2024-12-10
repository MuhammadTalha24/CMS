import {
	AccordionItem,
	AccordionItemContent,
	AccordionItemTrigger,
	AccordionRoot,
} from '@/components/ui/accordion';
import { data } from '@/lib/config/data';

const AccordionComp = () => {
	const { faq } = data;
	return (
		<AccordionRoot collapsible defaultValue={['item one']}>
			{faq.map((item, index) => (
				<AccordionItem key={index} value={item?.value}>
					<AccordionItemTrigger cursor='pointer'>
						{item?.question}
					</AccordionItemTrigger>
					<AccordionItemContent>{item?.answer}</AccordionItemContent>
				</AccordionItem>
			))}
		</AccordionRoot>
	);
};

export default AccordionComp;
