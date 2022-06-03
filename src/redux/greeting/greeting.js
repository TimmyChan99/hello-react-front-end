const GET_MESSAGES = 'GET_MESSAGES';

const initialState = {
  greeting: '',
};

const getMessagesAction = (payload) => ({
  type: GET_MESSAGES,
  payload,
});

export const getMessagesAPI = () => async (dispatch) => {
  const getData = await fetch('http://localhost:3001/api/v1/greetings');
  const resp = await getData.json();
  dispatch(getMessagesAction(resp.messages));
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return { ...state, greeting: action.payload };

    default:
      return state;
  }
};

export default greetingReducer;
