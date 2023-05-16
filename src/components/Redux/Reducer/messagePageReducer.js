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
  
};

const messagePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        messagedata: [...state.messagedata, { id: 4, message: action.newMessageBody }],
      };

    default:
      return state;
  }
};

export const sendMessage = (newMessageBody) => ({
  type: "SEND_MESSAGE", newMessageBody
});
export default messagePageReducer;
