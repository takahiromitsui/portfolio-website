'use client';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import { Fragment } from 'react';
import Project from '@/components/project';
import { useSectionInView } from '@/lib/hooks';
import { useTranslation } from '../app/i18n/client';

export default function Projects({
	params: { lng },
}: {
	params: { lng: string };
}) {
	const { ref } = useSectionInView('projects', 0.5);
	const { t } = useTranslation(lng, 'projects');
	const isEnglish = t('title') === 'My Projects';
	const lngSetting = isEnglish ? 'en' : 'jp';
	return (
		<section ref={ref} className='scroll-mt-28 mb-28' id='projects'>
			<SectionHeading>{t('title')}</SectionHeading>
			<div>
				{projectsData[lngSetting as keyof typeof projectsData].map(
					(project, index) => (
						<Fragment key={index}>
							<Project {...project} />
						</Fragment>
					)
				)}
			</div>
		</section>
	);
}
