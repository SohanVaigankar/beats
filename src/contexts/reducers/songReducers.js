import {
  PLAY,
  PAUSE,
  PREVIOUS,
  NEXT,
  CHANGE_SONG,
} from "../actions/songActions";

export const songReducer = (state, action) => {
  switch (action.type) {
    case PLAY:
      return { ...state };
    case PAUSE:
      return { ...state };
    case PREVIOUS:
      return { ...state };
    case NEXT:
      return { ...state };
    case CHANGE_SONG:
      return { ...state };
    default:
      return state;
  }
};