import Immutable from 'immutable';

import * as actions from './actions';


const PEOPLE_IN_CAR = 2;
const ITERATIONS = 10000;


function results(state, action, wholeState) {
    if(state === undefined) {
        state = Immutable.Map({
            hasComputed: false,
            data: []
        });
    }

    if(action.type === actions.START_COMPUTE) {
        let ur = wholeState.get('uniqueRide');
        let p = wholeState.get('people');
        let freqs = Array(Math.floor(p/PEOPLE_IN_CAR) + 1).fill().map(() => (0));

        Array(ITERATIONS).fill().map((_, i) => {
            let draws = Array(p).fill().map(() => (Math.floor(Math.random()*ur) + 1));
            let tmp = {};
            let shared = 0;

            draws.map((draw) => {
                if(tmp[draw] === undefined) {
                    tmp[draw] = 1;
                }
                else {
                    tmp[draw]++;
                }

                if(tmp[draw] === PEOPLE_IN_CAR) {
                    shared++;
                    tmp[draw] = 0;
                }
            });

            freqs[shared]++;
        });

        console.log(freqs.map((freq) => (freq / ITERATIONS * 100)));

        return Immutable.Map({
            hasComputed: true,
            data: freqs
        });
    }

    return state;
}


function uniqueRide(state=1, action) {
    if(action.type === actions.CHANGE_UNIQUE_RIDE) {
        return parseInt(action.uniqueRide);
    }

    return state;
}


function people(state=1, action) {
    if(action.type === actions.CHANGE_PEOPLE) {
        return parseInt(action.people);
    }

    return state;
}


export default function reducer(state, action) {
    if(state === undefined) {
        state = Immutable.Map();
    }

    state = state.set('uniqueRide', uniqueRide(state.get('uniqueRide'), action));
    state = state.set('people', people(state.get('people'), action));
    state = state.set('results', results(state.get('results'), action, state));

    return state;
}
