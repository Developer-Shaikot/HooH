import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		addTour: builder.mutation({
			query: (body) => {
				const payload = new FormData();

				for (const [key, value] of Object.entries(body)) {
					payload.append(key, value);
				}

				return {
					url: "/package", // tour package
					method: "POST",
					body: payload,
				};
			},

			invalidatesTags: ["Tour"],
		}),

		getAllTours: builder.query({
			query: () => "/package",
			providesTags: ["Tour"],
		}),

		searchTours: builder.query({
			query: (params) =>
				`/package/search?city=${params.city}&place=${
					params.place
				}&category=${encodeURIComponent(params.category)}`,
			providesTags: ["Tour"],
		}),
	}),
});

export const { useAddTourMutation, useGetAllToursQuery, useSearchToursQuery } = extendedApiSlice;
