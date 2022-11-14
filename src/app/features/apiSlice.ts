import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const WEATHERBIT_API_KEY = "???";

export const currentWeatherApi = createApi({
  reducerPath: "currentWeatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weatherbit.io/v2.0/",
    prepareHeaders: (headers) => {
      headers.set("key", WEATHERBIT_API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      getCurrentWeatherByZipCode: builder.query<{}[], any>({
        query: (zipCode: string) =>
          `current?&postal_code=${zipCode}&country=US&key=key=${"505ef68a61ca46fcba582a1e6e0daf3c"}&units=I`,
      }),
    };
  },
});

export const { useGetCurrentWeatherByZipCodeQuery } = currentWeatherApi;
