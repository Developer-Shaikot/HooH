import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (body) => {
				return {
					url: "/user/register",
					method: "POST",
					body,
				};
			},
			providesTags: ["User"],
		}),

		login: builder.mutation({
			query: (body) => ({
				url: "/user/login",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Profile", "PendingReceive"],
		}),

		logout: builder.mutation({
			query: (body) => ({
				url: "/user/logout",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Profile"],
		}),

		loggedInUser: builder.query({
			query: () => ({
				url: "/user",
			}),
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useLoggedInUserQuery } =
	extendedApiSlice;
