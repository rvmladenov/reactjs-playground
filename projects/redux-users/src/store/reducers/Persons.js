import Actions from '../actions/actions';

const initState = {
    persons: []
};

const reducer = (state = initState, action) => {
    let personsArr = [...state.persons];

    switch (action.type) {
        case Actions.DELETE:
            personsArr = personsArr.filter(person => person.id !== action.value);
            return {
                persons: personsArr
            };
            break;
        case Actions.ADD:
            personsArr.push(action.value);
            return {
                persons: personsArr
            };
        break;
    }

    return state;
};

export default reducer;