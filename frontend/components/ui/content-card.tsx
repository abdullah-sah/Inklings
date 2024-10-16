import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type FC } from 'react';

type Props = {
	authorName: string;
	dateWritten: string;
	blogName: string;
	href: string;
	containerClassName?: string;
	className?: string;
};

const ContentCard: FC<Props> = ({
	authorName,
	blogName,
	dateWritten,
	href,
	containerClassName,
	className,
}) => {
	// const defaultImageSrc =
	// 	'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80';
	// const [imageUrl, setImageUrl] = useState('');

	// useEffect(() => {
	// 	const fetchImageUrl = async () => {
	// 		const res = await fetch(
	// 			`https://api.dicebear.com/9.x/glass/svg?seed=${authorName}`
	// 		);
	// 		const data = await res.text();
	// 		const base64svg = Buffer.from(data).toString('base64');
	// 		const svgDataUrl = `data:image/svg+xml;base64,${base64svg}`;
	// 		setImageUrl(svgDataUrl);
	// 	};

	// 	fetchImageUrl();
	// }, [imageUrl]);
	return (
		<Link href={href} className={cn(' flex flex-col', containerClassName)}>
			<div
				className={cn(
					'relative flex flex-col w-full h-48 justify-between max-w-lg mx-auto overflow-hidden shadow-xl cursor-pointer rounded-3xl backgroundImage card sm:h-72 sm:mx-0 md:max-w-full',
					'bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover',
					className
				)}
			>
				<div className='absolute top-0 left-0 w-full h-full transition duration-300 hover/card:bg-black opacity-60'></div>
			</div>
			<div className='text-content font-body'>
				<h2 className='relative z-10 text-2xl font-bold font-heading md:text-2xl'>
					{blogName}
				</h2>
				<p className='relative z-10 font-normal tracking-wider text-md text-cta/70'>
					By <span className='font-bold text-cta'>{authorName}</span> on{' '}
					{dateWritten}
				</p>
			</div>
		</Link>
	);
};

export default ContentCard;
