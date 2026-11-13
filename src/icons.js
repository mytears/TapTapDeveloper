const paths = {
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18',
  terminal: 'M4 5h16v14H4zM7 9l3 3-3 3m5 0h5',
  gear: 'M9 3h6l1 3 3 1 2 4-2 2v4l-3 3h-3l-2 2-3-2H5l-2-4 1-3-1-3 2-4h3zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  sound: 'M3 9h4l5-4v14l-5-4H3zm12 0q4 3 0 6m3-9q7 6 0 12',
  mute: 'M3 9h4l5-4v14l-5-4H3zm13 1 5 5m0-5-5 5',
  coin: 'M12 3 20 7v10l-8 4-8-4V7zM12 8v8m-2-7h4m-4 6h4',
  bolt: 'M13 2 4 14h7l-1 8 10-12h-8z',
  up: 'm5 12 7-7 7 7m-7-7v14',
  arrow: 'M4 12h15m-6-6 6 6-6 6',
  chevron: 'm9 6 6 6-6 6',
  pin: 'M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0zm-5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
  clock: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9-5v5l3 2',
  keyboard: 'M3 6h18v12H3zm4 4h1m3 0h1m3 0h2M7 14h10',
  coffee: 'M5 6h12l-2 14H7zm1 4h10m-6-7h5',
  monitor: 'M3 4h18v12H3zm9 12v4m-5 0h10',
  chair: 'M7 3h10v10H7zm-3 9v4h16v-4m-8 4v5m-5 0h10',
  chip: 'M6 6h12v12H6zm3 3h6v6H9zM9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3',
  server: 'M4 4h16v7H4zm0 9h16v7H4zm3-6h2m-2 9h2m6-9h2m-2 9h2',
  robot: 'M4 8h16v12H4zm8-5v5m-4 4v2m8-2v2m-7 3h6',
  antenna: 'M12 12v8m-5 0h10m-5-8v.1m-3-4a5 5 0 0 0 0 8m6-8a5 5 0 0 1 0 8M6 5a9 9 0 0 0 0 14m12-14a9 9 0 0 1 0 14',
  bag: 'M5 8h14l2 13H3zm4 0V6a3 3 0 0 1 6 0v2',
  flag: 'M5 22V3m0 1h13l-3 4 3 4H5',
  close: 'm6 6 12 12m0-12L6 18',
  lock: 'M6 10h12v11H6zm3 0V7a3 3 0 1 1 6 0v3',
  check: 'm5 12 4 4L19 6',
  layers: 'm12 3 9 5-9 5-9-5zm-9 9 9 5 9-5M3 16l9 5 9-5',
  play: 'M6 4l14 8-14 8V4z',
}

export function icon(name) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="${paths[name]}"/></svg>`
}
