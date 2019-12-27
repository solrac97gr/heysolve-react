const reducer = (state,action) => {
    switch(action.type){
        case 'SET_FAVORITE':
            return {
                ...state,
                favoritesTecnics:[...state.favoritesTecnics,action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
               ...state,
               favoritesTecnics:state.favoritesTecnics.filter(
                   items => items.id !== action.payload
               )
            }
        default:
            return state
    }
}
export default reducer
