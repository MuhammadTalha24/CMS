/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_LIMIT } from '../constants';
import mainApi from './mainApi';

export const userApi = mainApi.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		getCount: builder.query({
			query: ({ path, filters = {} }: { path: string; filters: object }) => ({
				url: `${path}/get/count`,
				params: { ...filters },
			}),
			providesTags: (_result, _error, { path }) => [path],
		}),

		getAll: builder.query({
			query: ({
				sort = '-createdAt',
				page = 1,
				limit = BASE_LIMIT,
				search = '',
				isActive,
				filters = {},
				path,
			}) => ({
				url: path,
				params: { sort, page, limit, search, isActive, ...filters },
			}),
			providesTags: (_result, _error, { path }) => [path],
		}),

		getById: builder.query({
			query: ({ path, id, invalidate = [] }) =>
				`${path}/${id}?invalidate=${invalidate}`,
			providesTags: (_result, _error, { path, invalidate = [] }) => [
				path,
				...invalidate,
			],
		}),

		post: builder.mutation({
			query: ({ path, body }) => ({
				url: path,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['filters'],
			// invalidatesTags: (_result, _error, { path, invalidate = [] }) => [
			// 	'filters',
			// 	// path,
			// 	// ...invalidate,
			// ],
		}),

		verifyCoupon: builder.mutation({
			query: ({ storeId, body }) => ({
				url: `orders/verify-coupon?storeId=${storeId}`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['filters'],
		}),

		cartTotals: builder.mutation({
			query: ({ storeId, body }) => ({
				url: `orders/get-cart?storeId=${storeId}`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['cart'],
		}),

		createOrder: builder.mutation({
			query: ({ storeId, body }) => ({
				url: `orders?storeId=${storeId}`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['order'],
		}),

		createOtp: builder.mutation({
			query: ({ body }) => ({
				url: `otp`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['otp'],
		}),

		verifyOtp: builder.mutation({
			query: ({ body }) => ({
				url: `otp/verify`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['verifyotp'],
		}),
	}),
});

export const {
	useGetByIdQuery,
	useGetAllQuery,
	usePostMutation,
	useGetCountQuery,
	useVerifyCouponMutation,
	useCartTotalsMutation,
	useCreateOrderMutation,
	useCreateOtpMutation,
	useVerifyOtpMutation,
} = userApi;
