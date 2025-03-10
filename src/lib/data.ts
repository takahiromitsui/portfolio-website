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
		name: 'home',
		hash: '#home',
	},
	{
		name: 'about',
		hash: '#about',
	},
	{
		name: 'projects',
		hash: '#projects',
	},
	{
		name: 'skills',
		hash: '#skills',
	},
	{
		name: 'experience',
		hash: '#experience',
	},
	// {
	// 	name: 'Contact',
	// 	hash: '#contact',
	// },
] as const;

export const experiencesData = [
	{
		title: 'Full-stack Developer',
		location: 'Luup Systems - Berlin, Germany',
		description:
			'I worked as a Full-Stack Developer, building an AI-integrated web application for the EU Corporate Sustainability Reporting Directive (CSRD). I leveraged Angular, SolidJS, and gRPC to optimize performance and enhance the user experience.',
		icon: React.createElement(CgWorkAlt),
		date: '2024',
	},
	{
		title: 'Full-stack Developer',
		location: 'Face The Facts - Berlin, Germany',
		description:
			"I worked as a full-stack developer on this open-source project for three years. It is a mobile app to show politician's information by scanning politicians' posters.",
		icon: React.createElement(CgWorkAlt),
		date: '2021 - 2024',
	},
	{
		title: 'Front-End Developer',
		location: 'Foundamental - Berlin, Germany',
		description:
			'I worked as a front-end developer for 5 months. I developed an internal web application using Next.js, Typescript and integrated a GraphQL API with Apollo Server.',
		icon: React.createElement(FaReact),
		date: '2022',
	},
	{
		title: 'Backend Developer',
		location: 'Siemens Mobility - Berlin, Germany',
		description:
			'I worked as a backend developer for 6 months. I developed GraphQL API from scratch using Flask and PostgreSQL. In this project, I implemented authentication and authorisation protocols with Microsoft Azure AD and integrated machine learning model on the backend server.',
		icon: React.createElement(CgWorkAlt),
		date: '2023',
	},
	{
		title: 'Graduated University',
		location: 'CODE University of Applied Sciences - Berlin, Germany',
		description: 'I graduated after 4 years of studying software engineering.',
		icon: React.createElement(LuGraduationCap),
		date: '2024',
	},
] as const;

export const projectsData = {
	en: [
		{
			title: 'Face The Facts',
			description:
				"I worked as a full-stack developer for three years. It is a mobile app to show politicians' information by scanning politicians' posters.",
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
			url: 'https://facethefacts.app',
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
			url: 'https://github.com/emely3h/Geospatial_ML',
		},
		{
			title: 'CRAC/Warhol',
			description:
				'I contributed to it as both a DevOps and smart contract engineer. CRAC/Warhol project aims to revolutionize advertising on social media through NFT (Non-fungible Token) technology.',
			tags: ['DigitalOcean', 'NGINX', 'PostgreSQL', 'Node.js'],
			imageUrl: cracwarholImg,
			url: 'https://github.com/ProjectWarhol/backend',
		},
		{
			title: 'Rust DNA Converter',
			description:
				'I created a DNA converter to convert a DNA sequence into an RNA sequence and to translate it into an amino acid sequence. All codes are written in Rust.',
			tags: ['Rust'],
			imageUrl: rustdnaconverterImg,
			url: 'https://github.com/takahiromitsui/rust-dna-converter',
		},
	],
	jp: [
		{
			title: 'Face The Facts',
			description:
				'3年間フルスタック開発者として貢献し、政治家のポスターをスキャンすることで、その政治家の過去の投票行動や履歴書などの情報を表示するモバイルアプリ開発しました。',
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
			url: 'https://facethefacts.app',
		},
		{
			title: 'Geospatial ML',
			description:
				'機械学習エンジニアとして貢献したプロジェクトで衛星画像のセマンティックセグメンテーションのための畳み込みニューラルネットワーク（U-Net）を開発しました。',
			tags: [
				'Python',
				'TensorFlow',
				'Matplotlib',
				'Jupyter',
				'Google Colab',
				'OpenCV',
			],
			imageUrl: geospatialmlImg,
			url: 'https://github.com/emely3h/Geospatial_ML',
		},
		{
			title: 'CRAC/Warhol',
			description:
				'DevOpsエンジニアとスマートコントラクトエンジニアの両方として貢献したプロジェクトは、NFT（非代替性トークン）技術を通じたソーシャルメディアでの広告システムを開発しました。',
			tags: ['DigitalOcean', 'NGINX', 'PostgreSQL', 'Node.js'],
			imageUrl: cracwarholImg,
			url: 'https://github.com/ProjectWarhol/backend',
		},
		{
			title: 'Rust DNA Converter',
			description:
				'個人のプロジェクトでDNA配列をRNA配列に変換し、アミノ酸配列に翻訳するDNAコンバーターを作成しました。すべてのコードはRustで書かれています。',
			tags: ['Rust'],
			imageUrl: rustdnaconverterImg,
			url: 'https://github.com/takahiromitsui/rust-dna-converter',
		},
	],
} as const;

export const skillsData = [
	'HTML',
	'CSS',
	'Python',
	'JavaScript',
	'TypeScript',
	'Go',
	'Rust',
	'Flask',
	'FastAPI',
	'Node.js',
	'NestJS',
	'React',
	'Next.js',
	'Angular',
	'SolidJS',
	'Git',
	'Tailwind',
	'Prisma',
	'PostgreSQL',
	'MongoDB',
	'GraphQL',
	'Apollo',
	'Express',
	'schadcn/ui',
	'Material-UI',
	'Microsoft Azure',
	'AWS',
	'DigitalOcean',
	'NGINX',
	'Docker',
	'Redis Pub/Sub',
	'TensorFlow',
	'Matplotlib',
	'Google Colab',
	'OpenCV',
] as const;
