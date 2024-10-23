import React from 'react';
import {ConfigProvider, Layout, theme} from 'antd';
import Sidebar from './SideBar';
import {FaHome, FaSignOutAlt} from 'react-icons/fa';
import {Link, Outlet} from 'react-router-dom';
import './DashboardLayout.css';
import {useAppDispatch} from '../../redux/hooks';
import {logOut} from '../../redux/features/auth/authSlice';
const {Header, Content, Footer} = Layout;

const DashboardLayout = () => {
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(logOut());
	};
	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};
	return (
		// <div className="sideNav " style={{background: 'rgba(0,0,0,0.0)'}}>
		<ConfigProvider theme={darkTheme}>
			<Layout style={{height: '100%'}}>
				<Sidebar />

				<Layout>
					<Header style={{padding: '0 auto'}}>
						<nav className="w-[20%]">
							<ul className="d-flex justify-between items-center max-w-4xl mx-auto ">
								{/* Home */}
								<Link
									to={'/'}
									className="full-link d-flex  justify-content-center "
									style={{
										alignItems: 'center',
									}}
								>
									<FaHome className="text-xl " />
									<span>Home</span>
								</Link>

								{/* Logout */}
								<li
									onClick={handleLogout}
									className="text-white flex items-center space-x-2 cursor-pointer hover:text-primary transition font-bold list-none me-4 "
								>
									<span className="list-link">
										<FaSignOutAlt className="ms-3" />
										<span>Logout</span>
									</span>
								</li>
							</ul>
						</nav>
					</Header>
					<Content>
						<div
							style={{
								minHeight: 340,
								padding: 0,
								margin: '16px 16px 40px 16px',
							}}
						>
							<Outlet />
						</div>
					</Content>
				</Layout>
			</Layout>
		</ConfigProvider>
		// </div>
	);
};
export default DashboardLayout;
