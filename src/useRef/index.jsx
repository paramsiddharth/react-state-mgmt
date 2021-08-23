import React, { useRef } from 'react';

const UseRefCounter = () => {
	const counter = useRef();

	let count = 0;

	const increment = () => {
		counter.current.textContent = (++count).toString();
	};

	return <div>
		useRef:{' '}
		<span onClick={increment} ref={counter} className='count'>
			{count}
		</span>
	</div>;
};

export default UseRefCounter;