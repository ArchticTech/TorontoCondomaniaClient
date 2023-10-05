import { api } from "../api/api";

export const rentalsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRentals: builder.query({
            query: () => ({
                url: "/rentals",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetRentalsQuery } = rentalsApi;
