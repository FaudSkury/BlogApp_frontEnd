import { useState, useCallback } from "react";

export interface responseData {
  message: string;
  [key: string]: unknown;
}

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (
      configObject: {
        url: string;
        method?: string;
        body?: object;
        headers?: HeadersInit;
      },
      manageData: (data: responseData) => void,
      signal?: AbortSignal
    ) => {
      const { url, method, body, headers } = configObject;
      const Rmethod = method ? method : "GET";
      const Rbody = body ? JSON.stringify(body) : null;
      const Rheaders = headers
        ? headers
        : { "Content-Type": "application/json" };

      setIsLoading(true);

      try {
        const response = await fetch(url, {
          signal: signal,
          method: Rmethod,
          body: Rbody,
          headers: Rheaders,
        });
        if (!response.ok) {
          throw new Error("Something went wrong, try again later");
        }
        const data: responseData = await response.json();
        manageData(data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }

      setIsLoading(false);
    },
    []
  );
  return { isLoading, error, sendRequest };
};
