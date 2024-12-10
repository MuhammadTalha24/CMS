'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import { toaster } from '@/components/ui/toaster';
import { FC } from 'react';

type ToastMsgProps = ButtonProps &{
  children: string;
}

const ToastMsg:FC<ToastMsgProps> = () => {
	return (
		<Button
			variant='outline'
			size='sm'
			onClick={() =>
				toaster.success({
					title: 'Update successful',
					description: 'File saved successfully to the server',
					action: {
						label: 'Undo',
						onClick: () => console.log('Undo'),
					},
				})
			}
		>
			Click me
		</Button>
	);
};

export default ToastMsg;
