import {RouterProvider} from 'react-router-dom';
import './App.css';
import {router} from './Routes/Routes/Routes';
import {Toaster} from 'sonner';

function App() {
	return (
		<div className="">
			<RouterProvider router={router}></RouterProvider>
			<Toaster />
		</div>
	);
}

export default App;
