export default function projectReducer(state = [], action) {
    switch(action.type) {
        case "CREATE_PROJECT":
            return [...state, {...action.project}]
        default: 
            return state
    }
}