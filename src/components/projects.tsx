'use client';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import { Fragment, useEffect } from 'react';
import Project from '@/components/project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Projects() {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection('Projects');
		}
	}, [inView, setActiveSection]);

	return (
		<section ref={ref} className='scroll-mt-28' id='projects'>
			<SectionHeading>My Projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<Fragment key={index}>
						<Project {...project} />
					</Fragment>
				))}
			</div>
		</section>
	);
}
