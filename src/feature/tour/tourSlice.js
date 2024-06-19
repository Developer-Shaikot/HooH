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

			providesTags: ["Tour"],
		}),
	}),
});

export const { useAddTourMutation } = extendedApiSlice;
