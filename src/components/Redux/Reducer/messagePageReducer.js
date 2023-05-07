let initialState = {
  messagedata: [
    { id: 1, message: "hi" },
    { id: 2, message: "hoooow are you" },
    { id: 3, message: "We well" },
  ],
  dialogdata: [
    { id: 1, name: "Свеtttта" },
    { id: 2, name: "Ира" },
    { id: 3, name: "Даша" },
  ],
  newMessageBody: "your message",
};

const messagePageReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case "NEW_MESSAGE_BODY":
      stateCopy = { ...state, newMessageBody: action.body };
      return stateCopy;
    case "SEND_MESSAGE":
      let body = state.newMessageBody;
      stateCopy = {
        ...state,
        newMessageBody: "",
        messagedata: [...state.messagedata, { id: 4, message: body }],
      };
      return stateCopy;
    default:
      return state;
  }
};

export const newMessageBody = (text) => ({
  type: "NEW_MESSAGE_BODY",
  body: text,
});

export const sendMessage = () => ({ type: "SEND_MESSAGE" });
export default messagePageReducer;
