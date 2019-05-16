export function MyReducer(state,action) {
    switch (action.type) {
        case "UPDATE_TITLE":
            console.log(action);
            return {
                ...state,
                title: action.payload.title
            }
    }
    return state
}
