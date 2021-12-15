import {dataOperators} from '../Data'


const INITIAL_STATE = {
    operators : dataOperators,
};

const prodReducer =  (state = INITIAL_STATE, {type,payload}) => {
    switch (type) {
        case "ADD_OPERATOR":
            return {
                ...state,
                operators: [...state.operators,payload]
            };
            case "DELETE_OPERATOR":
                return {
                    ...state,
                    operators: state.operators.filter((operator) => operator.id !== payload),
                };    
        default:
            return state;
    }
};

export default prodReducer;