import Link from 'next/link';

const blogs = [
	{ id: '1', title: 'My First Blog' },
	{ id: '2', title: 'Tech Adventures' },
]; // Static data for now, will fetch dynamically later

export default function BlogList() {
	return (
		<div className='container py-8 mx-auto'>
			<h1 className='mb-6 text-3xl font-bold'>Blogs</h1>
			<ul className='space-y-4'>
				{blogs.map((blog) => (
					<li
						key={blog.id}
						className='p-4 text-xl font-semibold border rounded'
					>
						<Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
