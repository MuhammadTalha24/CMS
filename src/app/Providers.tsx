'use client';

import { store } from '@/store';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { defaultSystem } from '@chakra-ui/react';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
		</Provider>
	);
}
