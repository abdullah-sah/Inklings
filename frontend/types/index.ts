import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type BlogCategory = 'tech' | 'life' | 'writing' | 'business' | 'crypto';
