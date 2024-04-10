import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import { Fragment } from 'react';
import Project from '@/components/project';

export default function Projects() {
	return (
		<section>
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
