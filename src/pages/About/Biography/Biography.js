import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import './Biography.scss';
const Biography = () => {
	//* progress bar scroll area
	const myRef = document.querySelector('.biographySkill__biography');
	return (
		<div className="biographySkill">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="biographySkill__biography">
							<h3 className="title">Biography</h3>
							<p className="description">
								Bring to the table win-win survival strategies to ensure proactive domination. At
								the end of the day, going forward, a new normal that has evolved from generation X
								is on the runway heading towards a streamlined cloud solution. User generated
								content in real-time will have multiple touchpoints for offshoring. Capitalize on
								low hanging fruit to identify a ballpark value added activity to beta test. Override
								the digital divide with additional clickthroughs from DevOps data analytics
								communication.
								<br />
								User generated content in real-time will have multiple touchpoints for offshoring.
								Capitalize on low hanging fruit to identify a ballpark value added activity to beta
								test. Override the digital divide with additional clickthroughs from DevOps.
								Languages realizes why a new common language one could refuse to pay expensive
								translators.
							</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="biographySkill__skill">
							<h3>Professional Skills</h3>
							<div className="skillbar clearfix">
								<div className="skillbar-title">
									<span>Front-End development</span>
								</div>
								<ProgressBar
									width="100%"
									height="10px"
									rect
									fontColor="#ffff"
									percentage="89"
									rectPadding="1px"
									rectBorderRadius="20px"
									trackPathColor="transparent"
									trackBorderColor="grey"
									scrollArea={myRef}
									defColor={{
										excellent: '#e55137',
									}}
								/>
							</div>
							<div className="skillbar clearfix">
								<div className="skillbar-title">
									<span>Back-End development</span>
								</div>
								<ProgressBar
									width="100%"
									height="10px"
									rect
									fontColor="#ffff"
									percentage="75"
									rectPadding="1px"
									rectBorderRadius="20px"
									trackPathColor="transparent"
									trackBorderColor="grey"
									scrollArea={myRef}
									defColor={{
										excellent: '#e55137',
									}}
								/>
							</div>
							<div className="skillbar clearfix">
								<div className="skillbar-title">
									<span>Database</span>
								</div>
								<ProgressBar
									width="100%"
									height="10px"
									rect
									fontColor="#ffff"
									percentage="70"
									rectPadding="1px"
									rectBorderRadius="20px"
									trackPathColor="transparent"
									trackBorderColor="grey"
									scrollArea={myRef}
									defColor={{
										excellent: '#e55137',
									}}
								/>
							</div>
							<div className="skillbar clearfix">
								<div className="skillbar-title">
									<span>Authentication</span>
								</div>
								<ProgressBar
									width="100%"
									height="10px"
									rect
									fontColor="#ffff"
									percentage="80"
									rectPadding="1px"
									rectBorderRadius="20px"
									trackPathColor="transparent"
									trackBorderColor="grey"
									scrollArea={myRef}
									defColor={{
										excellent: '#e55137',
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Biography;
