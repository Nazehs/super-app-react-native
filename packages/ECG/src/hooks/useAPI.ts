import { useState, useCallback } from 'react';

type ApiOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: { [key: string]: string };
  body?: any;
  queryParams?: { [key: string]: string | number };
};

type ApiResponse<T> = {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
  makeRequest: (endpoint: string, options?: ApiOptions) => void;
};

const useApi = <T extends unknown>(): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = useCallback(
    async (endpoint: string, options: ApiOptions = {}) => {
      setIsLoading(true);
      try {
        const response = await mockApiCall(endpoint, options);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error as Error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return { data, error, isLoading, makeRequest };
};

const mockApiCall = (endpoint: string, options: ApiOptions) => {
  return new Promise<{ data: any }>(resolve => {
    setTimeout(() => {
      resolve({ data: `Response for ${endpoint}` });
    }, 5000);
  });
};

export default useApi;
