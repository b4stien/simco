import Immutable from 'immutable';

import * as actions from './actions';


function makeResults(worker) {
    return function results(state, action, wholeState) {
        if(state === undefined) {
            state = Immutable.Map({
                isComputing: false,
                hasComputed: false,
                data: []
            });
        }

        if(action.type === actions.START_COMPUTE) {
            worker.postMessage({
                MAX_LENGTH: 20,
                PEOPLE_IN_CAR: 2,
                ITERATIONS: 1000,
                people: wholeState.get('people'),
                uniqueRides: wholeState.get('uniqueRides')
            });
            return state.set('isComputing', true);
        }

        if(action.type === actions.END_COMPUTE) {
            state = state.set('isComputing', false);
            state = state.set('hasComputed', true);
            return state.set('data', action.data);
        }

        return state;
    }
}


function uniqueRides(state=1, action) {
    if(action.type === actions.CHANGE_UNIQUE_RIDES) {
        return parseInt(action.uniqueRides);
    }

    return state;
}


function people(state=1, action) {
    if(action.type === actions.CHANGE_PEOPLE) {
        return parseInt(action.people);
    }

    return state;
}


export default function makeReducer(worker) {
    const results = makeResults(worker);

    return function(state, action) {
        if(state === undefined) {
            state = Immutable.Map();
        }

        state = state.set('uniqueRides', uniqueRides(state.get('uniqueRides'), action));
        state = state.set('people', people(state.get('people'), action));
        state = state.set('results', results(state.get('results'), action, state));

        return state;
    }
}
