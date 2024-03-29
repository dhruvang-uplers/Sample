let lastId = 0;

export default function Reducer(state = [], action) {
    if (action.type === 'BUG_ADDED') {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    } else if (action.type === "BUG_RESOLVED") {
        return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true })
    } else if (action.type === "BUG_REMOVED") {
        return state.filter(bug => bug.id !== action.payload.id)

    } else {
        return state
    }
}