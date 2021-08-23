import React, { useState } from 'react';

const UseStateCounter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	return <div>
		useState:{' '}
		<span className='count' onClick={increment}>
			{count}
		</span>
	</div>;
};

export default UseStateCounter;