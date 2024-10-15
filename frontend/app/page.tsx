import CategoryTag from '@/components/category-tag';
import SubHeading from '@/components/sub-heading';
import ContentCard from '@/components/ui/content-card';
import { BlogCategory } from '@/types';

export default function Home() {
	const cards = [
		{
			authorName: 'Steve Gary',
			dateWritten: '2nd Aug, 2023',
			blogName: 'Gravy Tees',
			href: '/',
		},
		{
			authorName: 'Gary Stevens',
			dateWritten: '2nd Aug, 2023',
			blogName: 'Gravy Steens',
			href: '/',
		},
		{
			authorName: 'Barry Potter',
			dateWritten: '2nd Aug, 2023',
			blogName: 'Tom Marvolo Riddle',
			href: '/',
		},
	];

	const categories: BlogCategory[] = [
		'tech',
		'writing',
		'life',
		'business',
		'crypto',
	];

	return (
		<>
			<div className='flex flex-col w-full gap-24'>
				<div className='flex flex-col w-full gap-4 featured-blogs'>
					<SubHeading text='Featured blogs' />
					<div className='grid gap-4 blogs-container sm:grid-cols-2'>
						{cards.map((cardInfo, i) => (
							<ContentCard
								key={`blog-content-card-${i}`}
								authorName={cardInfo.authorName}
								dateWritten={cardInfo.dateWritten}
								blogName={cardInfo.blogName}
								href={cardInfo.href}
								containerClassName={`first:col-span-2`}
								className={``}
							/>
						))}
					</div>
				</div>

				<div className='flex flex-col w-full gap-4 featured-posts'>
					<SubHeading text='Featured posts' />
					<div className='grid gap-4 blogs-container sm:grid-cols-2'>
						{cards.map((cardInfo, i) => (
							<ContentCard
								key={`post-content-card-${i}`}
								authorName={cardInfo.authorName}
								dateWritten={cardInfo.dateWritten}
								blogName={cardInfo.blogName}
								href={cardInfo.href}
								containerClassName={`first:col-span-2`}
							/>
						))}
					</div>
				</div>
			</div>

			<section className='sticky hidden flex-col px-3 gap-2 max-h-[400px] top-24 md:flex '>
				<SubHeading text='Topics' />
				<div className='flex flex-row flex-wrap content-start gap-2 p-4 grow rounded-3xl bg-secondary'>
					{categories.slice(0, 10).map((cat, i) => (
						<CategoryTag category={cat} key={`blog-cat-${i}`} />
					))}
				</div>
			</section>
		</>
	);
}
