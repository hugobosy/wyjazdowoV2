import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, {useState} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import { getQueryClient } from '@/helpers/reactQuery';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(getQueryClient());
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
}
