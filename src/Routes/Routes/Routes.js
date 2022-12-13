import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import Home from '../../pages/Homes/Home/Home';
import SingleProject from '../../pages/Homes/SingleProject/SingleProject';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/project/:id',
				element: <SingleProject></SingleProject>,
			},
		],
	},
]);
