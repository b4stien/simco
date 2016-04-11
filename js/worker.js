function label(contains) {
    if(contains.length === 1) {
        return String(contains[0]);
    }

    return `${contains[0]}-${contains[contains.length - 1]}`;
}


onmessage = function(e) {
    let { MAX_LENGTH, PEOPLE_IN_CAR, ITERATIONS, people, uniqueRides } = e.data;

    let tmpFreqs = Array(Math.floor(people/PEOPLE_IN_CAR) + 1).fill().map(() => (0));

    Array(ITERATIONS).fill().map(() => {
        let draws = Array(people).fill().map(() => (Math.floor(Math.random()*uniqueRides) + 1));
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

        tmpFreqs[shared]++;
    });

    const frequencies = tmpFreqs.map((freq) => (freq / ITERATIONS));

    const centerGroupSize = Math.floor(frequencies.length / MAX_LENGTH) || 1;
    const borderGroupSize = Math.ceil(frequencies.length / MAX_LENGTH);

    let finalLength;
    let centerGroupNumber;
    let borderGroupNumber;
    if(frequencies.length <= MAX_LENGTH) {
        finalLength = frequencies.length;
        centerGroupNumber = frequencies.length;
        borderGroupNumber = 0;
    }
    else {
        finalLength = MAX_LENGTH;
        centerGroupNumber = MAX_LENGTH - (frequencies.length % MAX_LENGTH);
        borderGroupNumber = MAX_LENGTH - centerGroupNumber;
    }

    let borderGroupBeforeCenter = Math.ceil(borderGroupNumber / 2);

    let workedFrequencies = Array(finalLength).fill();
    frequencies.map((freq, i) => {
        let newIndex;
        if(i < (borderGroupBeforeCenter*borderGroupSize)) {
            newIndex = Math.floor(i / borderGroupSize);
        }
        else if(i >= (borderGroupBeforeCenter*borderGroupSize + centerGroupNumber*centerGroupSize)) {
            let fakeI = i - (borderGroupBeforeCenter*borderGroupSize + centerGroupNumber*centerGroupSize);
            newIndex = borderGroupBeforeCenter + centerGroupNumber + Math.floor(fakeI / borderGroupSize);
        }
        else {
            let fakeI = i - borderGroupBeforeCenter*borderGroupSize;
            newIndex = borderGroupBeforeCenter + Math.floor(fakeI / centerGroupSize);
        }

        if(workedFrequencies[newIndex] === undefined) {
            workedFrequencies[newIndex] = {
                freq: 0,
                contains: []
            }
        }

        workedFrequencies[newIndex].freq += freq;
        workedFrequencies[newIndex].contains.push(i);
    });

    const formattedFrequencies = workedFrequencies.map((wf) => ({label: label(wf.contains), freq: wf.freq}));
    postMessage({ formattedFrequencies});
}
