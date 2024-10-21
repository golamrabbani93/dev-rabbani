import DevrabbaniForm from '../../../../components/Form/DevrabbaniForm';
import DevrabbaniInput from '../../../../components/Form/DevrabbaniInput';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginSchema} from '../../../../schemas/register/loing.schema';
import {ConfigProvider, theme} from 'antd';
import {useLoginMutation} from '../../../../redux/features/auth/authApi';
import {toast} from 'sonner';
import verifyToken from '../../../../utils/verifyToken';
import {useAppDispatch} from '../../../../redux/hooks';
import {setUser} from '../../../../redux/features/auth/authSlice';
import {useNavigate} from 'react-router-dom';

const Login = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const defaultValues = {
		email: 'devrabbani9@gmail.com',
		password: '@Rab bani@5456',
	};
	const [login] = useLoginMutation();
	const handleLogin = async (data) => {
		const toastId = toast.loading('Logging in...');

		// eslint-disable-next-line @typescript-eslint/no-explicit-any

		const res = await login(data);

		const token = res?.data?.token;
		if (res.error) {
			toast.error(res?.error?.data?.message, {id: toastId, duration: 2000});
		} else {
			toast.success('Logged In', {id: toastId, duration: 2000});
			const user = verifyToken(token);
			dispatch(setUser({user, token}));
			navigate(`/dashboard`);
		}
	};
	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};
	return (
		<ConfigProvider theme={darkTheme}>
			<div className="min-vh-100 d-flex align-items-center justify-content-center bg-black text-white">
				<div
					className=" p-4 rounded-3 shadow-lg w-100 my-4"
					style={{
						maxWidth: '600px',
						backdropFilter: 'blur(10px)',
					}}
				>
					<h2
						className="text-center fw-bold text-uppercase mb-4"
						style={{letterSpacing: '0.1rem', color: 'white'}}
					>
						Admin Login
					</h2>
					<DevrabbaniForm
						onSubmit={handleLogin}
						resolver={zodResolver(loginSchema)}
						defaultValues={defaultValues}
					>
						{/* Email */}
						<div className="mb-3 ">
							<DevrabbaniInput
								name={'email'}
								type={'email'}
								label="Email"
								placeholder="Your Email"
							/>
						</div>

						{/* Password */}
						<div className="mb-3">
							<DevrabbaniInput
								name={'password'}
								type={'password'}
								label="Password"
								placeholder="Your Password"
							/>
						</div>

						{/* Submit Button */}
						<div className="text-center">
							<button
								type="submit"
								className="btn btn-primary w-100 py-2"
								style={{
									fontSize: '2rem',
								}}
							>
								Login
							</button>
						</div>
					</DevrabbaniForm>
				</div>
			</div>
		</ConfigProvider>
	);
};

export default Login;
