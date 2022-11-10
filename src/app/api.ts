import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weatherbit.io/v2.0/current?",
  }),
  endpoints: (builder) => ({
    getWeatherByZipCode: builder.query<() => void, string>({
      query: (zipCode: string) =>
        `&postal_code=${zipCode}&country=US&key=key=${"505ef68a61ca46fcba582a1e6e0daf3c"}&units=I`,
    }),
  }),
});

export const { useGetWeatherByZipCodeQuery } = weatherApi;
