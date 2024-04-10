'use client';
import Image from 'next/image';
import portrait from '../../public/portrait.jpg';
import { motion } from 'framer-motion';

export default function Intro() {
	return (
		<section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
			<div className='flex items-center justify-center'>
				<div className='relative'>
					<motion.div
						initial={{
							opacity: 0,
							scale: 0,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<Image
							src={portrait}
							alt='Takahiro Mitsui portrait'
							width={192}
							height={192}
							quality={95}
							priority={true}
							className='h-24 w-24 rounded-full  object-cover border-[0.35rem] border-white shadow-xl'
						/>
						<motion.span
							className='absolute bottom-0 right-0 text-4xl'
							initial={{
								opacity: 0,
								scale: 0,
							}}
							animate={{
								opacity: 1,
								scale: 1,
							}}
							transition={{
								type: 'spring',
								stiffness: 125,
								delay: 0.5,
								duration: 0.7,
							}}
						>
							👋
						</motion.span>
					</motion.div>
				</div>
			</div>
			<motion.h1
				className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className='font-bold'>Hello, I'm Takahiro.</span> I'm a{' '}
				<span className='font-bold'>full-stack developer</span> with{' '}
				<span className='font-bold'>4 years</span> of experience. I thrive on
				creating <span className='italic'>web applications</span>. My expertise
				lies in <span className='underline'>Python (FastAPI/Flask)</span> and{' '}
				<span className='underline'>Typescript/JavaScript (NextJS)</span>.
			</motion.h1>
		</section>
	);
}
