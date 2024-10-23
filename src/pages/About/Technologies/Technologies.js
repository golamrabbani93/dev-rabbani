import {useGetAllTechnologiesQuery} from '../../../redux/features/technologies/technologies.management';
import Loader from '../../Shared/Loader/Loader';
import {motion} from 'framer-motion';
import './Technologies.scss';
const Technologies = () => {
	const {data: technologies, isLoading} = useGetAllTechnologiesQuery('');

	if (isLoading) {
		return <Loader></Loader>;
	}

	return (
		<div className="technologies">
			<div className="project_details py-5">
				<div className="project_details--technology">
					<h2 className="text-white">Technologies that I understand</h2>

					<div className="technology row justify-content-center align-items-center">
						{technologies?.data?.map((item, index) => (
							<motion.div
								key={index}
								initial={{y: 200, opacity: 0, scale: 0}}
								whileInView={{y: 0, opacity: 1, scale: 1}}
								transition={{duration: 0.6}}
								className="card flex-column justify-content-center align-items-center"
							>
								{item?.image?.length > 200 ? (
									<img
										className="img-fluid"
										alt=""
										src={`data:image/svg+xml;utf8,${encodeURIComponent(item.image)}`}
									/>
								) : (
									<img className="img-fluid" alt="" src={item.image} />
								)}

								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<div />
		</div>
	);
};

export default Technologies;
