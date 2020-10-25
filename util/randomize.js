playKeyboard();

let audio = new AudioSynth();
let piano = audio.createInstrument('piano');

let notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
// Every mode with it's composition. 
// W is whole step
// H is half step
let modes = {
    'ionian' : 'WWHWWWH',
    'dorian' : 'WHWWWHW',
    'phrygian' : 'HWWWHWW',
    'lydian' : 'WWWHWWH',
    'mixolydian' : 'WWHWWHW',
    'aeolian' : 'WHWWHWW',
    'locrian' : 'HWWHWWW'
};

let modeMap = ['ionian', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'aeolian', 'locrian'];

var t;

function randomize() {
    // We obtain our root note
    let note = Math.floor(Math.random()*12);
    let rootNote = notes[note];

    // A list that will contain our notes from our scale
    let scale = [];
    let rootIndex = notes.indexOf(rootNote);
    let index = rootIndex;
    console.log(rootIndex);

    // We obtain our mode
    let mode = Math.floor(Math.random()*7)
    let modeName = modeMap[mode];
    let modeSteps = modes[modeName];
    for(let i = 0; i < 7; i++) {
        switch (modeSteps[i]) {
            case 'W':
                index = (index + 2) % 12;
                scale.push(notes[index]);
                console.log(notes[index]);
                console.log(index);
                break;
            case 'H':
                index = (index + 1) % 12;
                scale.push(notes[index]);
                console.log(notes[index]);
                break;
        }
    }

    function sortScale(a, b) {
        return notes.indexOf(a) - notes.indexOf(b);
    }

    scale.sort(sortScale);
    console.log(scale);
    console.log(rootNote);
    console.log(modeName);

    for(let i = 2; i <= 5; i++) {
        t = setTimeout(playNote, 1000, scale, i, 0);
        setTimeout(() => {}, 7000);
    }

    function playNote(scale, octave, j) {
        if(j < scale.length) {
            if(scale[j] == rootNote) {
                color = "red";
            } else {
                color = '#e6ffcc'
            }
            document.getElementById("KEY_" + scale[j] + "," + (octave - 4)).style.backgroundColor = color;
            piano.play(scale[j], octave, 2);
            t = setTimeout(playNote, 1000, scale, octave, j + 1);
        } else {
            clearTimeout(t);
        }
    }
}


$('#get-scale').on('click', randomize);

function playC() {
    piano.play('C', 4, 2);    
}