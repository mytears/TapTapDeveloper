export const ranks = [
  { title: '백수', xp: 0, scene: 0, task: '첫 번째 코드 실행하기', reward: 20 },
  { title: '코딩 독학러', xp: 50, scene: 0, task: '포트폴리오 올리기', reward: 90 },
  { title: '인턴', xp: 240, scene: 1, task: '첫 버그 수정하기', reward: 220 },
  { title: '주니어 개발자', xp: 800, scene: 1, task: '서비스 첫 배포하기', reward: 560 },
  { title: '시니어 개발자', xp: 2400, scene: 2, task: '새벽 장애 복구하기', reward: 1500 },
  { title: '테크 리드', xp: 6500, scene: 2, task: '위성 제어 시스템 완성하기', reward: 3600 },
  { title: '궤도 시스템 엔지니어', xp: 15000, scene: 3, task: '정거장 방화벽 수리하기', reward: 7800 },
  { title: '우주해커', xp: 32000, scene: 3, task: '지구와 정거장 통신 복구하기', reward: 15000 },
]

export const endingXp = 42000
export const offlineLimit = 4 * 60 * 60
export const studyInterval = 10000
export const scenes = [
  { name: '나의 원룸', file: 'room-detailed.webp' },
  { name: '개발팀 사무실', file: 'office-detailed.webp' },
  { name: '중앙 서버실', file: 'server-detailed.webp' },
  { name: '궤도 정거장', file: 'orbit-detailed.webp' },
]

export const defaultEquipped = {
  chair: 'chair-wood',
  desk: 'desk-wood',
  keyboard: 'kb-basic',
  monitor: 'mon-crt',
}

export const legacyItemMap = {
  keyboard: 'kb-custom',
  chair: 'chair-ergo',
  monitor: 'mon-dual',
}

export const items = [
  // 백수 (Rank 0)
  { id: 'kb-membrane', title: '멤브레인 키보드', price: 15, rank: 0, type: 'xp', power: 1, slot: 'keyboard', tier: 1 },
  { id: 'coffee', title: '아이스 아메리카노', price: 35, rank: 0, type: 'xp', power: 2, slot: 'drink', tier: 1 },
  // 코딩 독학러 (Rank 1)
  { id: 'chair-ergo', title: '인체공학 메쉬 의자', price: 70, rank: 1, type: 'xp', power: 3, slot: 'chair', tier: 1, file: 'chair' },
  { id: 'mon-single', title: 'FHD 코딩 모니터', price: 115, rank: 1, type: 'credit', power: 3, slot: 'monitor', tier: 1 },
  { id: 'mouse-ergo', title: '버티컬 무선 마우스', price: 170, rank: 1, type: 'credit', power: 4, slot: 'mouse', tier: 1 },
  // 인턴 (Rank 2)
  { id: 'kb-mech', title: 'RGB 기계식 키보드', price: 240, rank: 2, type: 'xp', power: 6, slot: 'keyboard', tier: 2 },
  { id: 'mon-dual', title: '듀얼 모니터', price: 340, rank: 2, type: 'credit', power: 6, slot: 'monitor', tier: 2, file: 'monitor' },
  { id: 'ssd', title: '고속 외장 SSD', price: 460, rank: 2, type: 'xp', power: 8, slot: 'ssd', tier: 1 },
  { id: 'server', title: '미니 빌드 서버', price: 620, rank: 2, type: 'auto', power: 4, slot: 'server', tier: 1 },
  // 주니어 개발자 (Rank 3)
  { id: 'chair-gaming', title: '프로 게이밍 의자', price: 820, rank: 3, type: 'xp', power: 12, slot: 'chair', tier: 2 },
  { id: 'drink-energy', title: '고카페인 에너지 드링크', price: 1050, rank: 3, type: 'xp', power: 14, slot: 'drink', tier: 2 },
  { id: 'tools', title: '하드웨어 디버깅 킷', price: 1350, rank: 3, type: 'credit', power: 12, slot: 'tools', tier: 1 },
  { id: 'assistant', title: 'AI 코딩 로봇', price: 1750, rank: 3, type: 'xp', power: 20, slot: 'assistant', tier: 1 },
  // 시니어 개발자 (Rank 4)
  { id: 'kb-custom', title: '무접점 커스텀 키보드', price: 2300, rank: 4, type: 'xp', power: 28, slot: 'keyboard', tier: 3, file: 'keyboard' },
  { id: 'mon-ultra', title: '울트라와이드 커브드 모니터', price: 2900, rank: 4, type: 'credit', power: 22, slot: 'monitor', tier: 3 },
  { id: 'desk-modern', title: '모션 데스크', price: 3600, rank: 4, type: 'credit', power: 26, slot: 'desk', tier: 1 },
  { id: 'cluster', title: '서버 클러스터', price: 4500, rank: 4, type: 'auto', power: 18, slot: 'cluster', tier: 1 },
  // 테크 리드 (Rank 5)
  { id: 'chair-boss', title: '천연가죽 회장님 의자', price: 5800, rank: 5, type: 'xp', power: 48, slot: 'chair', tier: 3 },
  { id: 'drink-espresso', title: '전자동 에스프레소 머신', price: 7200, rank: 5, type: 'xp', power: 55, slot: 'drink', tier: 3 },
  { id: 'server-nas', title: '4베이 고속 NAS 스토리지', price: 8800, rank: 5, type: 'auto', power: 36, slot: 'nas', tier: 1 },
  { id: 'link', title: '위성 업링크 안테나', price: 10500, rank: 5, type: 'credit', power: 45, slot: 'link', tier: 1 },
  // 궤도 시스템 엔지니어 (Rank 6)
  { id: 'kb-laser', title: '홀로그램 무접점 레이저 키보드', price: 12500, rank: 6, type: 'xp', power: 95, slot: 'keyboard', tier: 4 },
  { id: 'mon-holo', title: '공간 홀로그램 디스플레이', price: 14500, rank: 6, type: 'credit', power: 75, slot: 'monitor', tier: 4 },
  { id: 'chair-zerog', title: '무중력 궤도 포드 의자', price: 17000, rank: 6, type: 'xp', power: 120, slot: 'chair', tier: 4 },
  { id: 'quantum', title: '양자 컴파일러', price: 19500, rank: 6, type: 'xp', power: 140, slot: 'quantum', tier: 1 },
  // 우주해커 (Rank 7)
  { id: 'core', title: '궤도 AI 코어', price: 24000, rank: 7, type: 'auto', power: 120, slot: 'core', tier: 1 },
]

export function spriteFor(itemOrId) {
  if (typeof itemOrId === 'string') {
    const found = items.find(candidate => candidate.id === itemOrId)
    return found ? (found.file ?? found.id) : itemOrId
  }
  return itemOrId.file ?? itemOrId.id
}

export function equippedFor(state) {
  const slots = { ...defaultEquipped }
  for (const item of items) {
    if (!state.owned.includes(item.id)) continue
    slots[item.slot] = spriteFor(item)
  }
  return slots
}

export function newGame(now = Date.now()) {
  return { xp: 0, credits: 0, taps: 0, studyMs: 0, owned: [], claimed: [], sound: true, music: false, vibration: true, savedAt: now }
}

export function restoreGame(raw, now = Date.now()) {
  const state = newGame(now)
  if (!raw || typeof raw !== 'object') return state
  for (const field of ['xp', 'credits', 'taps', 'savedAt']) {
    if (Number.isSafeInteger(raw[field]) && raw[field] >= 0) state[field] = raw[field]
  }
  if (Number.isInteger(raw.studyMs) && raw.studyMs >= 0 && raw.studyMs < studyInterval) {
    state.studyMs = raw.studyMs
  }
  for (const field of ['sound', 'music', 'vibration']) {
    if (typeof raw[field] === 'boolean') state[field] = raw[field]
  }
  if (Array.isArray(raw.owned)) {
    const migrated = raw.owned.map(id => legacyItemMap[id] ?? id)
    state.owned = items.filter(item => migrated.includes(item.id)).map(item => item.id)
  }
  if (Array.isArray(raw.claimed)) state.claimed = ranks.map((_, index) => index).filter(index => raw.claimed.includes(index) && state.xp >= goalFor(index))
  return state
}

export function rankOf(xp) {
  const next = ranks.findIndex(rank => xp < rank.xp)
  return next === -1 ? ranks.length - 1 : next - 1
}

export function goalFor(rankIndex) {
  return ranks[rankIndex + 1]?.xp ?? endingXp
}

export function statsFor(state) {
  const stats = { xp: 1, credit: 1, auto: 0 }
  for (const item of items) {
    if (state.owned.includes(item.id)) stats[item.type] += item.power
  }
  return stats
}

export function buyItem(state, id) {
  const item = items.find(candidate => candidate.id === id)
  if (!item || state.owned.includes(id) || rankOf(state.xp) < item.rank || state.credits < item.price) return false
  state.owned.push(id)
  state.credits -= item.price
  return true
}

export function claimTask(state, index) {
  if (!ranks[index] || state.claimed.includes(index) || state.xp < goalFor(index)) return false
  state.claimed.push(index)
  state.credits += ranks[index].reward
  return true
}

export function collectIdle(state, now = Date.now()) {
  const seconds = Math.min(offlineLimit, Math.floor((now - state.savedAt) / 1000))
  if (now < state.savedAt) state.savedAt = now
  if (seconds < 1) return 0
  const reward = seconds * statsFor(state).auto
  state.savedAt = now - ((now - state.savedAt) % 1000)
  state.credits += reward
  return reward
}

export function collectStudy(state, elapsedMs) {
  const total = state.studyMs + elapsedMs
  const xp = Math.floor(total / studyInterval)
  state.studyMs = total % studyInterval
  state.xp += xp
  return xp
}
