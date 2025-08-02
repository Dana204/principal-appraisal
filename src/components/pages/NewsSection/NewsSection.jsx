import React from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle';
import NewsImage1 from '../../../assets/images/hero-image2.jpg';
import NewsImage2 from '../../../assets/images/hero-image2.jpg';
import NewsImage3 from '../../../assets/images/hero-image2.jpg';
import NewsImage4 from '../../../assets/images/hero-image2.jpg';
import './NewsSection.css'
import NewsCard from '../../NewsCard/NewsCard';

const NewsSection = () => {
    var newsList = [
		{
			title: '.Net Software Development',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, ea ab deserunt laboriosam.',
			image: NewsImage1,
		},
		{
			title: 'Android Applications',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, ea ab deserunt laboriosam.',
			image: NewsImage2,
		},
		{
			title: 'Hardware Solutions',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, ea ab deserunt laboriosam.',
			image: NewsImage3,
		},
		{
			title: 'Consultancy Services',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, ea ab deserunt laboriosam.',
			image: NewsImage4,
		},
	];
  return (
		<div className='news-section' id='news'>
			<div className='container'>
				<SectionTitle
					subtitle={'Newsletter'}
					title='Stay Informed With Our Latest News'
					highlight='Informed'
					variant={'right'}
				/>
				<div className='news-section__grid grid-container'>
					{newsList.map((news, idx) => (
						<NewsCard
							key={idx}
							title={news.title}
							text={news.text}
							image={news.image}
						/>
					))}
				</div>
			</div>
		</div>
  );
}

export default NewsSection