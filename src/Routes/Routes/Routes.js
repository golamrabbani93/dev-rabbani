import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import About from '../../pages/About/About/About';
import Home from '../../pages/Homes/Home/Home';
import SingleProject from '../../pages/Homes/SingleProject/SingleProject';
import PortFolio from '../../pages/Portfolio/Portfolio/PortFolio';
import ServicesPage from '../../pages/Services/ServicesPage';
import Contact from '../../pages/Contact/Contact';

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
				path: '/Contact',
				element: <Contact></Contact>,
			},
		],
	},
]);
