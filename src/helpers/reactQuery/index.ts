import { QueryClient } from '@tanstack/query-core';

export const queryClient = new QueryClient();

export const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
