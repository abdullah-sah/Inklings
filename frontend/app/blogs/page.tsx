'use client';

import { useState, useEffect } from 'react';
import { IBlog } from 'types/index';
import ContentCard from '@/components/ui/content-card';
import SubHeading from '@/components/sub-heading';

export default function BlogList() {
	const [blogs, setBlogs] = useState<IBlog[]>([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const res = await fetch('/api/blogs');
				const data = await res.json();
				setBlogs(data);
			} catch (err) {
				console.error('Error fetching blogs: ', err);
			}
		};

		fetchBlogs();
	}, []);

	return (
		<section className='container mx-auto'>
			<SubHeading text='Blogs' />
			<div className='grid gap-4 sm:grid-cols-2'>
				{blogs.length > 0 &&
					blogs.map((blog, i) => (
						<ContentCard
							key={`blog-${blog.title}-card-${i}`}
							authorName={blog.user.name}
							blogName={blog.title}
							dateWritten={blog.createdAt.split('T')[0]}
							href='/'
						/>
					))}
			</div>
		</section>
	);
}
