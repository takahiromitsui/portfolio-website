'use client';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			<SectionHeading>About Me</SectionHeading>
			<p className='mb-3'>
				After completing my master&apos;s degree in molecular biology at Tokyo
				Medical and Dental University, I decided to follow my passion for coding
				and relocated to Germany. I enrolled at CODE University of Applied
				Sciences in Berlin, where I actively participated in three projects and
				secured two working student positions.{' '}
				<span className='italic'>
					I&apos;m particularly drawn to the problem-solving aspect of
					programming
				</span>
				, finding immense satisfaction in overcoming challenges. My primary tech
				stack comprises
				<span className='font-medium'>
					{' '}
					FastAPI, Flask, Node.js, NestJs, Next.js, React and PostgreSQL
				</span>
				, with additional proficiency in TypeScript. Eager to stay abreast of
				emerging technologies, I&apos;m always on the lookout for opportunities
				to expand my skill set. Currently, I&apos;m actively seeking a{' '}
				<span className='font-medium'>full-time position</span> as a software
				developer.
			</p>

			<p>
				<span className='italic'>When I&apos;m not coding</span>, I indulge in
				bouldering and climbing to stay active and challenge myself physically.
			</p>
		</motion.section>
	);
}
