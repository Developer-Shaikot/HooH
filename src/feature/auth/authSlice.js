import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (body) => {
				return {
					url: "/auth/register",
					method: "POST",
					body,
				};
			},
			providesTags: ["User"],
		}),

		login: builder.mutation({
			query: (body) => ({
				url: "/auth/login",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Profile", "Dashboard"],
		}),

		loginWithGoogle: builder.mutation({
			query: (body) => ({
				url: "/auth/login-google",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Profile", "Dashboard"],
		}),

		getLoggedInUser: builder.query({
			query: () => "/auth/loggedin-user",
			providesTags: ["Profile", "User"],
		}),

		logout: builder.mutation({
			query: (body) => ({
				url: "/auth/logout",
				method: "PATCH",
				body,
			}),
			invalidatesTags: ["Profile", "User"],
		}),

		resetPassword: builder.mutation({
			query: (body) => ({
				url: "/auth/reset-password",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Profile"],
		}),
	}),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useLoginWithGoogleMutation,
	useLogoutMutation,
	useGetLoggedInUserQuery,
	useResetPasswordMutation,
} = extendedApiSlice;
