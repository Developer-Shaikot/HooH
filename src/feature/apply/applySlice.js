import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		registerGuide: builder.mutation({
			query: (body) => {
				return {
					url: "/apply",
					method: "POST",
					body,
				};
			},
			providesTags: ["User"],
		}),
	}),
});

export const { useRegisterGuideMutation } = extendedApiSlice;
