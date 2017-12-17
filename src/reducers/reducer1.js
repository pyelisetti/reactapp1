const reducer1 = (state=[], action) => {
	switch (action.type) {

		case 'GET_TIME':
			return Object.assign({}, state, {
		 		timeValue: action.timeValue });

		default:
			return state;

	}

};

export default reducer1;
