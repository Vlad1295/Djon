import profilePageReducer from "./Reducer/profilePageReducer";
import messagePageReducer from "./Reducer/messagePageReducer";

let store = {
  _state: {
    profilePage: {
      pos: [
        { id: 1, message: "my First post", like: 52 },
        { id: 2, message: "my second post", like: 34 },
      ],
      newPostText: "hello",
    },
    messagePage: {
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
    },
    fri: [
      { src: "../../imf.jpeg", name: "петя" },
      { src: "../../imf.jpeg", name: "вася" },
      { src: "../../imf.jpeg", name: "лёлик" },
      { src: "../../imf.jpeg", name: "болик" },
    ],
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );

    this._state.messagePage = messagePageReducer(
      this._state.messagePage,
      action
    );

    this._callSubscriber(this._state);
  },
};

export default store;
