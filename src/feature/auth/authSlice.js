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
			invalidatesTags: ["User"],
		}),

		logout: builder.mutation({
			query: (body) => ({
				url: "/user/logout",
				method: "POST",
				body,
			}),
			invalidatesTags: ["User"],
		}),

		loggedInUser: builder.query({
			query: () => ({ url: "/user" }),
			providesTags: ["User"],
		}),

		getAllGuides: builder.query({
			query: () => ({ url: "/user/guides" }),
			providesTags: ["User"],
		}),
	}),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useLogoutMutation,
	useLoggedInUserQuery,
	useGetAllGuidesQuery,
} = extendedApiSlice;
