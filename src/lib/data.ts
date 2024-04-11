import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import facethefactsImg from '../../public/face-the-facts.jpg';
import geospatialmlImg from '../../public/geospatial-ml.jpg';
import cracwarholImg from '../../public/crac-warhol.jpg';
import rustdnaconverterImg from '../../public/rust-dna-converter.jpg';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Graduated bootcamp',
		location: 'Miami, FL',
		description:
			'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
		icon: React.createElement(LuGraduationCap),
		date: '2019',
	},
	{
		title: 'Front-End Developer',
		location: 'Orlando, FL',
		description:
			'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
		icon: React.createElement(CgWorkAlt),
		date: '2019 - 2021',
	},
	{
		title: 'Full-Stack Developer',
		location: 'Houston, TX',
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: '2021 - present',
	},
] as const;

export const projectsData = [
	{
		title: 'Face The Facts',
		description:
			"I worked as a full-stack developer on this open-source project for three years. It is a mobile app to show politician's information by scanning politicians' posters.",
		tags: [
			'Python',
			'FastAPI',
			'PostgreSQL',
			'Docker',
			'AWS',
			'Redis Pub/Sub',
			'Typescript',
			'React',
		],
		imageUrl: facethefactsImg,
	},
	{
		title: 'Geospatial ML',
		description:
			'I contributed to it as a machine learning engineer. Developed a convolutional neural network (U-Net) for Semantic Image Segmentation of satellite images.',
		tags: [
			'Python',
			'TensorFlow',
			'Matplotlib',
			'Jupyter',
			'Google Colab',
			'OpenCV',
		],
		imageUrl: geospatialmlImg,
	},
	{
		title: 'CRAC/Warhol',
		description:
			'I contributed to it as both a DevOps and smart contract engineer. CRAC/Warhol project aims to revolutionize advertising on social media through NFT (Non-fungible Token) technology.',
		tags: ['DigitalOcean', 'NGINX', 'PostgreSQL', 'Node.js'],
		imageUrl: cracwarholImg,
	},
	{
		title: 'Rust DNA Converter',
		description:
			'I created a DNA converter to convert a DNA sequence into an RNA sequence and to translate it into an amino acid sequence. All codes are written in Rust.',
		tags: ['Rust'],
		imageUrl: rustdnaconverterImg,
	},
] as const;

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'Prisma',
	'MongoDB',
	'Redux',
	'GraphQL',
	'Apollo',
	'Express',
	'PostgreSQL',
	'Python',
	'Django',
	'Framer Motion',
] as const;
