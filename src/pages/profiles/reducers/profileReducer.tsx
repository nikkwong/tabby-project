export default function ProfileReducer(state, action) {
  switch (action.type) {
    case "SET_PERSON":
      return { ...state, person: action.payload };
  }
}
