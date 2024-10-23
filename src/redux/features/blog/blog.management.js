import {baseApi} from '../../api/baseApi';

const blogManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllBlog: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.map((item) => {
						params.append(item.name, item.value);
					});
				}
				return {
					url: '/blogs',
					method: 'GET',
					params: params,
				};
			},
			providesTags: ['Blogs'],
			transformResponse: (response) => {
				const data = response?.data;
				return {
					data,
				};
			},
		}),
		getSingleBlog: builder.query({
			query: (id) => {
				return {
					url: `/blogs/${id}`,
					method: 'GET',
				};
			},
			providesTags: ['Blogs'],
			transformResponse: (response) => {
				const data = response?.data;
				return {
					data,
				};
			},
		}),
		addBlog: builder.mutation({
			query: (blogData) => ({
				url: '/blogs/create-blog',
				method: 'POST',
				body: blogData,
			}),
			invalidatesTags: ['Blogs'],
		}),
	}),
});

export const {useGetAllBlogQuery, useGetSingleBlogQuery, useAddBlogMutation} = blogManagementApi;
