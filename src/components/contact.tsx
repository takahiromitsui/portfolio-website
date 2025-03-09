'use client';

import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
// import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from '@/components/submit-btn';
// import toast from 'react-hot-toast';

export default function Contact() {
	const { ref } = useSectionInView('about');// change it temporally

	return (
		<motion.section
			id='contact'
			ref={ref}
			className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact me</SectionHeading>

			<p className='text-gray-700 -mt-6 dark:text-white/80'>
				Please contact me directly at{' '}
				<a className='underline' href='mailto:takahiro.mitsui.career@gmail.com'>
					takahiro.mitsui.career@gmail.com
				</a>
			</p>
		</motion.section>
	);
}
