import {baseApi} from '../../api/baseApi';

const technologyManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllTechnologies: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.map((item) => {
						params.append(item.name, item.value);
					});
				}
				return {
					url: '/technologies',
					method: 'GET',
					params: params,
				};
			},
			providesTags: ['Technologies'],
			transformResponse: (response) => {
				const data = response?.data;
				return {
					data,
				};
			},
		}),

		addTechnology: builder.mutation({
			query: (projectData) => ({
				url: '/technologies/create-technology',
				method: 'POST',
				body: projectData,
			}),
			invalidatesTags: ['Technologies'],
		}),
	}),
});

export const {useGetAllTechnologiesQuery, useAddTechnologyMutation} = technologyManagementApi;
