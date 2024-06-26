'use client';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import { Fragment } from 'react';
import Project from '@/components/project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
	const { ref } = useSectionInView('Projects', 0.5);

	return (
		<section ref={ref} className='scroll-mt-28 mb-28' id='projects'>
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
