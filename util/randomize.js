playKeyboard();

let audio = new AudioSynth();
let piano = audio.createInstrument('piano');

let notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
// Every mode with it's composition. 
// W is whole step
// H is half step
let modes = {
    'ionian' : 'W–W–H–W–W–W–H',
    'dorian' : 'W–H–W–W–W–H–W',
    'phrygian' : 'H–W–W–W–H–W–W',
    'lydian' : 'W–W–W–H–W–W–H 	',
    'mixolydian' : 'W–W–H–W–W–H–W',
    'aeolian' : 'W–H–W–W–H–W–W',
    'locrian' : 'H–W–W–H–W–W–W'
}

$('#get-scale').on('click', playC);

function playC() {
    piano.play('C', 4, 2);    
}