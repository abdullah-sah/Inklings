import type { FC } from 'react';
import type { BlogCategory } from '@/types';

type Props = {
	category: BlogCategory;
};

const CategoryTag: FC<Props> = ({ category }) => {
	return (
		<span className='flex items-center justify-center h-8 px-3 py-1 lowercase rounded-full text-cta bg-background'>
			<p>{category}</p>
		</span>
	);
};

export default CategoryTag;
