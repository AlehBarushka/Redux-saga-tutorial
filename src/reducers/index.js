const initState = {
  people: [],
  planets: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case 'SET_PEOPLE':
      return {
        ...state,
        people: [...state.people, ...action.payload],
      };
    case 'SET_PLANETS':
      return {
        ...state,
        planets: [...state.planets, ...action.payload],
      };

    default:
      return state;
  }
}
