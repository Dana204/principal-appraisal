import React from 'react'
import './NetworkSection.css';
import SectionTitle from '../../SectionTitle/SectionTitle';
import LenovoLogo from '../../../assets/images/partners/lenovo_logo.png';
import ZebraTechLogo from '../../../assets/images/partners/zebra_tech_logo.png';
import KasperskyLogo from '../../../assets/images/partners/kaspersky_logo.png';
import LexmarkLogo from '../../../assets/images/partners/lexmark_logo.png';
import MicrosoftLogo from '../../../assets/images/partners/microsoft_logo.png';
import DataCardLogo from '../../../assets/images/partners/datacard_logo.png';
import HoneywellLogo from '../../../assets/images/partners/honeywell_logo.png';
import AvtechLogo from '../../../assets/images/partners/avtech_logo.png';

const NetworkSection = () => {
	var partnersList = [LenovoLogo, ZebraTechLogo, KasperskyLogo, LexmarkLogo, MicrosoftLogo,DataCardLogo, HoneywellLogo, AvtechLogo];

	const getAltTextHandler = (path) => {
		// Extract file name from path (e.g., "/images/logos/lenovo-logo.png")
		const fileName = path.split('/').pop(); // => "lenovo-logo.png"
		const nameWithoutExtension = fileName.split('.')[0]; // => "lenovo-logo"
		const formattedName = nameWithoutExtension
			.replace(/[-_]/g, ' ') // Replace - and _ with space
			.replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize each word

		return formattedName;
	};
  return (
		<section
			id='network'
			className='network-section'>
			<div className='container'>
				<SectionTitle
					subtitle={'Our Network'}
					title='The Company We Keep'
					highlight='company'
					variant={'left'}
					mode='light'
				/>

				<div className='network-section__content'>
					<div className='network__main-clients'>
						<h4>Our Clients</h4>
						<br></br>

						<div className='grid-container'>
							{partnersList.map((partner, idx) => (
								<img
									key={idx}
									src={partner}
									alt={getAltTextHandler(partner)}
								/>
							))}
						</div>
					</div>

					<div className='network__main-partners'>
						<h4>Our Partners</h4>
						{/* <br></br> */}
						<div className='grid-container'>
							{partnersList.map((partner, idx) => (
								<img
									key={idx}
									src={partner}
									alt={getAltTextHandler(partner)}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}

export default NetworkSection;