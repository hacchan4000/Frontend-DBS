'use client';

import { getErrorMessage } from "@/utils/handleError";

interface RequestProps {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: Record<string, unknown> | any;
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
  headers = DefaultHeaders,
  params = {},
  authorization = true,
}: RequestProps) => {
  try {
    
  const baseUrl = process.env.NEXT_PUBLIC_EXPRESS_BASE_URL;
  const FlaskUrl = process.env.NEXT_PUBLIC_EXPRESS_BASE_URL2;

  if (!baseUrl || !FlaskUrl) {
    throw new Error(
      'missing env variabels'
    );
  }

  const queryString = new URLSearchParams(
    Object.entries(params).reduce(
      (acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      },
      {} as Record<string, string>
    )
  );


  const fullUrl = url === 'predict' ? `${FlaskUrl}/${url}` :
    `${baseUrl}/${url}` +
    (queryString.toString()
      ? `?${queryString}`
      : '');



  const token = authorization
    ? localStorage.getItem('token')
    : null;

  const isFormData = body instanceof FormData;

  const response = await fetch(fullUrl, {
    method,
    headers: {
      ...(isFormData ? {} : DefaultHeaders),

      ...(token && {
        Authorization: `Bearer ${token}`,
      }),

      ...headers,
    },

    ...(body && {
      body:isFormData ? body : JSON.stringify(body)
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || 'Request failed'
    );
  }

  return data;
  } catch (error) {
    const message = getErrorMessage(error);
    throw new Error(message);
  }

};