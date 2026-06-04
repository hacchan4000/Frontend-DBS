'use client';

interface RequestProps {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
  authorization?: boolean;
}

export const DefaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const ApiService = async ({
  url,
  method = 'GET',
  body,
  headers = {},
  params = {},
  authorization = true,
}: RequestProps) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_EXPRESS_BASE_URL;

    if (!baseUrl) {
      throw new Error(
        'NEXT_PUBLIC_EXPRESS_BASE_URL is missing'
      );
    }

    // Build query params
    const queryString = new URLSearchParams(
      Object.entries(params).reduce(
        (acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        },
        {} as Record<string, string>
      )
    );

    const fullUrl = `${baseUrl}${url}${
      queryString.toString()
        ? `?${queryString}`
        : ''
    }`;

    // optional token
    const token =
      authorization
        ? localStorage.getItem('token')
        : null;

    const response = await fetch(fullUrl, {
      method,

      headers: {
        ...DefaultHeaders,

        ...(authorization &&
          token && {
            Authorization: `Bearer ${token}`,
          }),

        ...headers,
      },

      ...(body && {
        body: JSON.stringify(body),
      }),
    });

    if (!response.ok) {
      throw new Error(
        `API Error: ${response.status}`
      );
    }

    return await response.json();

  } catch (error) {
    console.error('ApiService Error:', error);
    throw error;
  }
};