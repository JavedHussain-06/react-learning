export type counterState = {
  count: number;
};

export type counterAction = {
  type: "INCREMENT" | "DECREMENT";
};

export const counterReducer = (state: counterState, action: counterAction) : counterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};