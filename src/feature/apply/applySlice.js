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
		acceptGuide: builder.mutation({
			query: (id) => {
				return {
					url: `/apply/accept/${id}`,
					method: "PATCH",
				};
			},
			invalidatesTags: ["User"],
		}),
		declineGuide: builder.mutation({
			query: (id) => {
				return {
					url: `/apply/reject/${id}`,
					method: "PATCH",
				};
			},
			invalidatesTags: ["User"],
		}),
		getAllApplicant: builder.query({
			query: () => ({ url: "/apply" }),
			providesTags: ["User"],
		}),
	}),
});

export const {
	useRegisterGuideMutation,
	useGetAllApplicantQuery,
	useAcceptGuideMutation,
	useDeclineGuideMutation,
} = extendedApiSlice;
