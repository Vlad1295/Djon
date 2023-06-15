
export type DialogDataType = {
  id: number;
  name: string;
};

type MessageDataType = {
  id: number;
  message: string;
};

type InitialStateType = typeof initialState;
let initialState = {
  messagedata: [
    { id: 1, message: "hi" },
    { id: 2, message: "hoooow are you" },
    { id: 3, message: "We well" },
  ] as Array<MessageDataType>,
  dialogdata: [
    { id: 1, name: "Свеtttта" },
    { id: 2, name: "Ира" },
    { id: 3, name: "Даша" },
  ] as Array<DialogDataType>,
};

const messagePageReducer = (state = initialState, action): InitialStateType => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        messagedata: [
          ...state.messagedata,
          { id: 4, message: action.newMessageBody },
        ],
      };
    default:
      return state;
  }
};
type SendMessageType = {
  type: "SEND_MESSAGE";
  newMessageBody: string;
};
export const sendMessage = (newMessageBody: string): SendMessageType => ({
  type: "SEND_MESSAGE",
  newMessageBody,
});
export default messagePageReducer;
