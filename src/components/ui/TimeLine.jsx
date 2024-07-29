import React, { useEffect, useState } from 'react';
import pkg from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = pkg;
import 'react-vertical-timeline-component/style.min.css';
import { useStore } from '@nanostores/react';
import { isDark } from '../../themeStore';

export default function timeline({ items }) {
	const $isDark = useStore(isDark);

	return (
		<VerticalTimeline lineColor={'rgb(224, 99, 48)'}>
			{items.map((el) => (
				<VerticalTimelineElement
					key={el.id}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: 'white',
						color: 'black',
						borderBottom: '5px solid rgb(224, 99, 48)',
						boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
					}}
					contentArrowStyle={{
						borderRight: '10px solid  white',
						boxShadow: '0 0 0px 0 rgba(0,0,0,0.2)',
						color: 'white',
					}}
					dateClassName="text-white"
					date={el.date}
					iconStyle={{ background: 'rgb(224, 99, 48)' }}
					icon={<img src="/work.ico" style={{width: "60%", height: '60%', position: 'relative', top: '15%', left: '20%'}} ></img>}
					>
					<h3 className="vertical-timeline-element-title">{el.company}</h3>
					<h4 className="vertical-timeline-element-subtitle">{el.location}</h4>
					<p>{el.description}</p>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
}
