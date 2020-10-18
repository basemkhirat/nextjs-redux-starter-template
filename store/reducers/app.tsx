const initialState = {
	message: "",
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case "MESSAGE":
			return { ...state, message: action.payload };
		default:
			return state;
	}
};

export default app;
