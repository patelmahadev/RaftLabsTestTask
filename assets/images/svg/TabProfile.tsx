import color from '@/assets/color/color';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

function TabProfile(props: any) {
	return (
		<Svg
			width={22}
			height={22}
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11 11c-2.438 0-4.42-1.973-4.42-4.4 0-2.427 1.982-4.4 4.42-4.4 2.44 0 4.421 1.973 4.421 4.4 0 2.427-1.982 4.4-4.42 4.4zm4.154.74a6.576 6.576 0 002.4-6.163c-.436-2.885-2.848-5.194-5.76-5.53C7.779-.42 4.37 2.693 4.37 6.6c0 2.079.968 3.931 2.477 5.14C3.137 13.127.43 16.384.005 20.78A1.114 1.114 0 001.11 22a1.09 1.09 0 001.092-.98c.443-4.91 4.22-7.82 8.799-7.82s8.355 2.91 8.798 7.82a1.09 1.09 0 001.093.98c.655 0 1.166-.57 1.103-1.22-.424-4.396-3.132-7.653-6.842-9.04"
				fill={props.fillColor || color.white}
			/>
		</Svg>
	);
}

export default TabProfile;
