const inishialState = {
  product: [],
  basket: [],
  favorite: [],
};

export const Reducer = (state = inishialState, action) => {
  switch (action.type) {
    case "REMOVE" :  
    const del = state.basket.filter((el , idx) => idx !== action.payload.idi)
    return {...state , basket : del}


    
    case "ADD_TO_BASKET":
      const findBasket = state.basket.find((el) => {
        return el.id === action.payload.id;
      });
      if (findBasket) {
        return {...state,basket: state.basket.map((el) => {
            return el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el;
         }),
        };
      } else {
        return {...state,basket: [...state.basket, { ...action.payload ,  quantity: 1 }],
        };
      }


      
      case "ADD_TO_FAVORITE" :
        const findFavorite = state.favorite.find((el) => {
          return el.id === action.payload.id
        })
        if(findFavorite) {
return {...state , favorive: [...state.favorite]}
        }else{
          return {...state , favorite:[...state.favorite , {...action.payload}]}
        }
    default:
      return state;
  }
};
