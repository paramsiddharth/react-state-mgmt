import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { INCREMENT } from './action-types';

const ReduxCounter = () => {
	const count = useSelector(state => state.count);
	const dispatch = useDispatch();
	const increment = () => dispatch({ type: INCREMENT });

	return <div>
		Redux:{' '}
		<span className='count' onClick={increment}>
			{count}
		</span>
	</div>;
};

export default ReduxCounter;