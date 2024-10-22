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
			providesTags: ['project'],
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
			invalidatesTags: ['project'],
		}),
	}),
});

export const {useGetAllProjectQuery, useAddProjectMutation} = projectManagementApi;
