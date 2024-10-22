import {baseApi} from '../../api/baseApi';

const projectManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProject: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.map((item) => {
						params.append(item.name, item.value);
					});
				}
				return {
					url: '/projects',
					method: 'GET',
					params: params,
				};
			},
			providesTags: ['Projects'],
			transformResponse: (response) => {
				const data = response?.data;
				return {
					data,
				};
			},
		}),
		getSingleProject: builder.query({
			query: (id) => {
				return {
					url: `/projects/${id}`,
					method: 'GET',
				};
			},
			providesTags: ['Projects'],
			transformResponse: (response) => {
				const data = response?.data;
				return {
					data,
				};
			},
		}),
		addProject: builder.mutation({
			query: (projectData) => ({
				url: '/projects/create-project',
				method: 'POST',
				body: projectData,
			}),
			invalidatesTags: ['Projects'],
		}),
	}),
});

export const {useGetAllProjectQuery, useGetSingleProjectQuery, useAddProjectMutation} =
	projectManagementApi;
