import {Layout, Menu} from 'antd';
import {Link, NavLink} from 'react-router-dom';
const {Sider} = Layout;

const Sidebar = () => {
	const sideItems = [
		{
			key: 'Dashboard',
			label: (
				<NavLink
					style={{
						textDecoration: 'none',
					}}
					to="/dashboard"
				>
					Dashboard
				</NavLink>
			),
		},
		{
			key: 'ProjectsManagement',
			label: 'Projects Management',

			children: [
				{
					key: 'AllProjects',
					label: (
						<NavLink
							style={{
								textDecoration: 'none',
							}}
							to="/dashboard/all-projects"
						>
							All Projects
						</NavLink>
					),
				},
				{
					key: 'AddProject',
					label: (
						<NavLink
							style={{
								textDecoration: 'none',
							}}
							to="/dashboard/add-project"
						>
							Add Project
						</NavLink>
					),
				},
			],
		},
	];

	return (
		<Sider
			breakpoint="lg"
			collapsedWidth="0"
			onBreakpoint={(broken) => {
				// console.log(broken);
			}}
			style={{height: '100vh', position: 'sticky', top: '0', left: '0'}}
			onCollapse={(collapsed, type) => {
				console.log(collapsed, type);
			}}
		>
			<div className="demo-logo-vertical" />
			<div
				style={{
					color: 'white',
					fontSize: '3rem',
					fontWeight: 'bold',
					textAlign: 'center',
					margin: '2rem 0 2rem 0',
				}}
			>
				<Link className="hover:text-primary full-link" to="/">
					DR
				</Link>
			</div>
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideItems} />
		</Sider>
	);
};

export default Sidebar;
