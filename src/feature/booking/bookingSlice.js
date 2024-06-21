import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		addBooking: builder.mutation({
			query: (body) => {
				return {
					url: "/booking",
					method: "POST",
					body,
				};
			},

			invalidatesTags: ["Booking"],
		}),

		getAllBooking: builder.query({
			query: () => "/booking",
			providesTags: ["Booking"],
		}),

		acceptBooking: builder.mutation({
			query: (id) => {
				return {
					url: `/booking/accepted/${id}`,
					method: "PATCH",
				};
			},
			invalidatesTags: ["Booking"],
		}),

		declineBooking: builder.mutation({
			query: (id) => {
				return {
					url: `/booking/declined/${id}`,
					method: "PATCH",
				};
			},
			invalidatesTags: ["Booking"],
		}),
	}),
});

export const {
	useAcceptBookingMutation,
	useAddBookingMutation,
	useDeclineBookingMutation,
	useGetAllBookingQuery,
} = extendedApiSlice;
