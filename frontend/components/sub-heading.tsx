import type { FC } from 'react';
import { cn } from '@/lib/utils';

type Props = {
	text: string;
	className?: string;
	containerClassName?: string;
};

const SubHeading: FC<Props> = ({ className, containerClassName, text }) => {
	return (
		<div
			className={cn(
				'z-20 flex flex-row items-center gap-2',
				containerClassName
			)}
		>
			<span className='w-2 h-4 rounded-full bg-secondary sm:w-3 sm:h-8'></span>
			<h2 className={cn('font-bold font-heading sm:text-3xl', className)}>
				{text}
			</h2>
		</div>
	);
};
export default SubHeading;
