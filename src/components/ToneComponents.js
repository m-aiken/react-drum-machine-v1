import Tone from 'tone';

let buffersLoaded = 0;

const bufferCountAddOne = () => {
  buffersLoaded++;
};

// Check every 250ms if all 10 buffers have loaded
// If all loaded resolve promise - Else call checkBuffers function again
export const checkBuffers = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      buffersLoaded === 10 ? resolve() : checkBuffers();
    }, 250)
  );
};

// Master Volume
export const masterGain = new Tone.Gain().toMaster();

// Limiter
const limiter = new Tone.Limiter(-12).connect(masterGain);

// Reverb
const reverbFilter = new Tone.Filter({
  type: 'highpass',
  frequency: 500,
  Q: 0
}).connect(limiter);

export const reverb = new Tone.Reverb({
  wet: 1,
  decay: 1
}).connect(reverbFilter);
reverb.generate();

// Kick
export const kickGain = new Tone.Gain().connect(limiter);

export const kickReverb = new Tone.Gain({
  gain: 0
}).connect(reverb);

export const kick = new Tone.Sampler(
  {
    C3: 'sounds/kick.wav'
  },
  bufferCountAddOne()
)
  .connect(kickReverb)
  .connect(kickGain);

// Boom
export const boomGain = new Tone.Gain().connect(limiter);

export const boomReverb = new Tone.Gain({
  gain: 0
}).connect(reverb);

export const boom = new Tone.Sampler(
  {
    C3: 'sounds/boom.wav'
  },
  bufferCountAddOne()
)
  .connect(boomReverb)
  .connect(boomGain);

// Snare
export const snareGain = new Tone.Gain().connect(limiter);

export const snareReverb = new Tone.Gain({
  gain: 0
}).connect(reverb);

export const snare = new Tone.Sampler(
  {
    C3: 'sounds/snare.wav'
  },
  bufferCountAddOne()
)
  .connect(snareReverb)
  .connect(snareGain);

// Rimshot
export const rimGain = new Tone.Gain().connect(limiter);

export const rimReverb = new Tone.Gain({
  gain: 0
}).connect(reverb);

export const rim = new Tone.Sampler(
  {
    C3: 'sounds/rim.wav'
  },
  bufferCountAddOne()
)
  .connect(rimReverb)
  .connect(rimGain);

// Closed Hi-Hat
export const clhatGain = new Tone.Gain().connect(limiter);

export const clhatReverb = new Tone.Gain({
  gain: 0
}).connect(reverb);

export const clhat = new Tone.Sampler(
  {
    C3: 'sounds/clhat.wav'
  },
  bufferCountAddOne()
)
  .connect(clhatReverb)
  .connect(clhatGain);

// Open Hi-Hat
export const ophatGain = new Tone.Gain().connect(limiter);

export const ophatReverb = new Tone.Gain({
  gain: 0
}).connect(reverb);

export const ophat = new Tone.Sampler(
  {
    C3: 'sounds/ophat.wav'
  },
  bufferCountAddOne()
)
  .connect(ophatReverb)
  .connect(ophatGain);

// Cowbell
export const cowbellGain = new Tone.Gain().connect(limiter);

export const cowbellReverb = new Tone.Gain({
  gain: 0
}).connect(reverb);

export const cowbell = new Tone.Sampler(
  {
    C3: 'sounds/cowbell.wav'
  },
  bufferCountAddOne()
)
  .connect(cowbellReverb)
  .connect(cowbellGain);

// Clave
export const claveGain = new Tone.Gain().connect(limiter);

export const claveReverb = new Tone.Gain({
  gain: 0
}).connect(reverb);

export const clave = new Tone.Sampler(
  {
    C3: 'sounds/clave.wav'
  },
  bufferCountAddOne()
)
  .connect(claveReverb)
  .connect(claveGain);

// Maraca
export const maracaGain = new Tone.Gain().connect(limiter);

export const maracaReverb = new Tone.Gain({
  gain: 0
}).connect(reverb);

export const maraca = new Tone.Sampler(
  {
    C3: 'sounds/maraca.wav'
  },
  bufferCountAddOne()
)
  .connect(maracaReverb)
  .connect(maracaGain);

// Conga
export const congaGain = new Tone.Gain().connect(limiter);

export const congaReverb = new Tone.Gain({
  gain: 0
}).connect(reverb);

export const conga = new Tone.Sampler(
  {
    C3: 'sounds/conga.wav'
  },
  bufferCountAddOne()
)
  .connect(congaReverb)
  .connect(congaGain);
