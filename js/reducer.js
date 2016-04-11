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
                MAX_LENGTH: wholeState.get('advanced').get('MAX_LENGTH'),
                PEOPLE_IN_CAR: wholeState.get('advanced').get('PEOPLE_IN_CAR'),
                ITERATIONS: wholeState.get('advanced').get('ITERATIONS'),
                TRIM: wholeState.get('advanced').get('TRIM'),
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


function advanced(state, action) {
    if(state === undefined) {
        state = Immutable.Map({
            ITERATIONS: 1000,
            PEOPLE_IN_CAR: 2,
            MAX_LENGTH: 20,
            TRIM: false,
            shown: false
        });
    }

    if(action.type === actions.TOGGLE_ADVANCED) {
        return state.set('shown', !state.get('shown'));
    }

    if(action.type === actions.CHANGE_ITERATIONS) {
        return state.set('ITERATIONS', parseInt(action.iterations));
    }

    if(action.type === actions.CHANGE_MAX_LENGTH) {
        return state.set('MAX_LENGTH', parseInt(action.maxLength));
    }

    if(action.type === actions.CHANGE_TRIM) {
        return state.set('TRIM', action.trim === 'true');
    }

    return state;
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

        state = state.set('advanced', advanced(state.get('advanced'), action));
        state = state.set('uniqueRides', uniqueRides(state.get('uniqueRides'), action));
        state = state.set('people', people(state.get('people'), action));
        state = state.set('results', results(state.get('results'), action, state));

        return state;
    }
}
