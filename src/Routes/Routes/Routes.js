import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import About from '../../pages/About/About/About';
import Home from '../../pages/Homes/Home/Home';
import SingleProject from '../../pages/Homes/SingleProject/SingleProject';
import PortFolio from '../../pages/Portfolio/Portfolio/PortFolio';
import ServicesPage from '../../pages/Services/ServicesPage';
import Contact from '../../pages/Contact/Contact';
import ProtectedRoute from '../ProtectedRoutes/ProtectedRoutes';
import Login from '../../pages/Shared/Register/Login/Login';
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard';
import AllProjects from '../../pages/Dashboard/Projects/AllProjetcs/AllProjects';
import AddProject from '../../pages/Dashboard/Projects/AddProject/AddProject';
import AddBlog from '../../pages/Dashboard/Blog/AddBlog/AddBlog';
import AllBlog from '../../pages/Dashboard/Blog/AllBlog/AllBlog';
import UpdateBlog from '../../pages/Dashboard/Blog/UpdateBlog/UpdateBlog';

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
				path: '/project/:name/:id',
				element: <SingleProject></SingleProject>,
			},
			{
				path: '/about',
				element: <About></About>,
			},
			{
				path: '/services',
				element: <ServicesPage></ServicesPage>,
			},
			{
				path: '/portfolio',
				element: <PortFolio></PortFolio>,
			},
			{
				path: '/contact',
				element: <Contact></Contact>,
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<ProtectedRoute role={'ADMIN'}>
				<DashboardLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/dashboard/all-projects',
				element: <AllProjects />,
			},
			{
				path: '/dashboard/add-project',
				element: <AddProject />,
			},
			{
				path: '/dashboard/add-blog',
				element: <AddBlog />,
			},
			{
				path: '/dashboard/all-blog',
				element: <AllBlog />,
			},
			{
				path: '/dashboard/update-blog/:id',
				element: <UpdateBlog />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
]);
