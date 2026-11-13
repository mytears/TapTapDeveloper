const tracks = [
  {
    step: 0.25,
    melody: [72, 0, 76, 79, 0, 76, 74, 0, 69, 0, 72, 76, 0, 74, 72, 0, 67, 0, 71, 74, 0, 71, 69, 0, 65, 0, 69, 72, 0, 74, 72, 0],
    bass: [48, 45, 43, 41],
    voice: 'triangle',
  },
  {
    step: 0.32,
    melody: [69, 0, 76, 0, 79, 0, 76, 0, 67, 0, 74, 0, 77, 0, 74, 0, 65, 0, 72, 0, 76, 0, 72, 0, 64, 0, 71, 0, 74, 0, 71, 0],
    bass: [45, 43, 41, 40],
    voice: 'sine',
  },
]

let context
let musicBus
let musicTimer
let activeTrack
let noise
let tapIndex = 0

function ensureAudio() {
  const Audio = window.AudioContext || window.webkitAudioContext
  if (!Audio) return false
  if (!context) {
    context = new Audio()
    noise = context.createBuffer(1, Math.floor(context.sampleRate * 0.055), context.sampleRate)
    const samples = noise.getChannelData(0)
    for (let i = 0; i < samples.length; i += 1) samples[i] = Math.random() * 2 - 1
  }
  if (context.state === 'suspended') context.resume().catch(() => {})
  return true
}

function tone(note, start, duration, volume, voice, output = context.destination) {
  const oscillator = context.createOscillator()
  const envelope = context.createGain()
  oscillator.type = voice
  oscillator.frequency.value = 440 * 2 ** ((note - 69) / 12)
  envelope.gain.setValueAtTime(0.0001, start)
  envelope.gain.exponentialRampToValueAtTime(volume, start + 0.009)
  envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration)
  oscillator.connect(envelope).connect(output)
  oscillator.start(start)
  oscillator.stop(start + duration)
}

export function sound(name) {
  if (!ensureAudio()) return
  const time = context.currentTime
  if (name === 'tap') {
    const source = context.createBufferSource()
    const filter = context.createBiquadFilter()
    const envelope = context.createGain()
    source.buffer = noise
    filter.type = 'bandpass'
    filter.frequency.value = [1050, 1350, 1600][tapIndex % 3]
    filter.Q.value = 1.15
    envelope.gain.setValueAtTime(0.19, time)
    envelope.gain.exponentialRampToValueAtTime(0.0001, time + 0.048)
    source.connect(filter).connect(envelope).connect(context.destination)
    source.start()
    tapIndex += 1
    return
  }
  const notes = { buy: [71, 78], claim: [72, 76, 79], rank: [67, 72, 76, 79, 84], end: [69, 72, 76, 81, 88, 93] }
  notes[name].forEach((note, index) => tone(note, time + index * 0.075, 0.26, 0.06, 'triangle'))
}

export function setMusic(enabled, orbit) {
  const track = tracks[Number(orbit)]
  if (enabled && activeTrack === track) return
  clearInterval(musicTimer)
  if (musicBus) {
    musicBus.disconnect()
    musicBus = undefined
  }
  activeTrack = undefined
  if (!enabled || !ensureAudio()) return
  activeTrack = track
  musicBus = context.createGain()
  musicBus.gain.value = 0.55
  musicBus.connect(context.destination)
  let next = context.currentTime + 0.03
  let position = 0
  function schedule() {
    next = Math.max(next, context.currentTime)
    while (next < context.currentTime + 0.35) {
      const note = track.melody[position]
      if (note) tone(note, next, track.step * 1.8, 0.06, track.voice, musicBus)
      if (position % 4 === 0) {
        const bass = track.bass[Math.floor(position / 8)]
        tone(bass, next, track.step * 3.9, 0.09, 'sine', musicBus)
      }
      next += track.step
      position = (position + 1) % track.melody.length
    }
  }
  schedule()
  musicTimer = setInterval(schedule, 100)
}
