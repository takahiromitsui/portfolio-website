'use client';
import Link from 'next/link';
import { useTranslation } from '../i18n/client';

export default function Page({ params: { lng } }: { params: { lng: string } }) {
	const { t } = useTranslation(lng, 'page');
	return (
		<>
			<h1>{t('title')}</h1>
			<Link href={`/${lng}/second-page`}>second page</Link>
		</>
	);
}
