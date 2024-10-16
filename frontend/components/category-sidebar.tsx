import type { FC } from 'react';
import SubHeading from '@/components/sub-heading';
import CategoryTag from '@/components/category-tag';
import type { BlogCategory } from '@/types';

const CategorySidebar: FC = () => {
	const categories: BlogCategory[] = [
		'tech',
		'writing',
		'life',
		'business',
		'crypto',
	];
	return (
		<section className='sticky hidden flex-col px-3 gap-2 max-h-[400px] top-24 md:flex '>
			<SubHeading text='Topics' />
			<div className='flex flex-row flex-wrap content-start gap-2 p-4 grow rounded-3xl bg-secondary'>
				{categories.slice(0, 10).map((cat, i) => (
					<CategoryTag category={cat} key={`blog-cat-${i}`} />
				))}
			</div>
		</section>
	);
};

export default CategorySidebar;
