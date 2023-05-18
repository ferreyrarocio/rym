import { ADD_FAVORITE, REMOVE_FAVORITE} from "./action-type";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, action) => {
  //{ type, payload }
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharactersFav: [...state.allCharactersFav, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== Number(action.payload)
        ),
      };

      
    default:
      return { ...state };
  }
};

export default reducer;

// const store = createStore(
//     reducer,
//     composeEnhancers(applyMiddleware(thunkMiddleware))
//     );
// export default store;
