import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weatherbit.io/v2.0/current?",
  }),
  endpoints: (builder) => ({
    getWeatherByZipCode: builder.query<() => void, string>({
      query: (zipCode: string) =>
        `&postal_code=${zipCode}&country=US&key=key=${"???"}&units=I`,
    }),
  }),
});

export const { useGetWeatherByZipCodeQuery } = weatherApi;
