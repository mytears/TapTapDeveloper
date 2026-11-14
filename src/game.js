export const ranks = [
  { title: '백수', xp: 0, scene: 0, tapXp: 1, studyXp: 1, task: '첫 번째 코드 실행하기', reward: 25 },
  { title: '코딩 독학러', xp: 50, scene: 1, tapXp: 2, studyXp: 2, task: '깃허브에 포트폴리오 올리기', reward: 80 },
  { title: '국비학원 수료생', xp: 180, scene: 2, tapXp: 4, studyXp: 4, task: '팀 프로젝트 발표 무사히 마치기', reward: 190 },
  { title: '수습 인턴', xp: 520, scene: 3, tapXp: 8, studyXp: 8, task: '실서버 첫 버그 핫픽스하기', reward: 420 },
  { title: '주니어 개발자', xp: 1350, scene: 4, tapXp: 15, studyXp: 15, task: '신규 서비스 첫 정식 배포하기', reward: 950 },
  { title: '미들급 개발자', xp: 3200, scene: 5, tapXp: 28, studyXp: 28, task: '레거시 결제 모듈 리팩토링하기', reward: 2100 },
  { title: '시니어 개발자', xp: 7200, scene: 6, tapXp: 52, studyXp: 52, task: '새벽 대규모 트래픽 장애 복구하기', reward: 4600 },
  { title: '테크 리드', xp: 15500, scene: 7, tapXp: 95, studyXp: 95, task: '글로벌 마이크로서비스 전환하기', reward: 9800 },
  { title: '수석 아키텍트', xp: 32000, scene: 8, tapXp: 175, studyXp: 175, task: '차세대 클라우드 코어 설계하기', reward: 21000 },
  { title: 'CTO', xp: 65000, scene: 9, tapXp: 320, studyXp: 320, task: '유니콘 기술 상장(IPO) 리드하기', reward: 45000 },
  { title: 'AI 연구소장', xp: 130000, scene: 10, tapXp: 600, studyXp: 600, task: '초거대 자율형 AI 모델 깨우기', reward: 95000 },
  { title: '우주해커', xp: 250000, scene: 11, tapXp: 1200, studyXp: 1200, task: '지구와 저궤도 정거장 통신 복구하기', reward: 200000 },
]

export const endingXp = 380000
export const offlineLimit = 4 * 60 * 60
export const studyInterval = 10000
export const scenes = [
  { name: '반지하 단칸방', file: 'bg-shabby.webp' },
  { name: '좁은 고시원 방', file: 'bg-gosiwon.webp' },
  { name: '달빛 옥탑방 원룸', file: 'room-detailed.webp' },
  { name: '창고형 초기 스타트업', file: 'bg-garage.webp' },
  { name: '개발팀 일반 사무실', file: 'office-detailed.webp' },
  { name: '공유오피스 라운지', file: 'bg-lounge.webp' },
  { name: '판교 테크밸리 사옥', file: 'bg-pangyo.webp' },
  { name: '중앙 데이터 서버실', file: 'server-detailed.webp' },
  { name: '고층 코너 임원실', file: 'bg-executive.webp' },
  { name: '한강뷰 펜트하우스 서재', file: 'bg-penthouse.webp' },
  { name: '초거대 양자 AI 연구소', file: 'bg-ailab.webp' },
  { name: '저궤도 우주 정거장', file: 'orbit-detailed.webp' },
]

export const sideMissions = [
  {
    id: 'risky-site',
    title: '약간은 위험해 보이는 사이트 만들기',
    desc: '수상한 의뢰인이 다크모드 전용 비밀 커뮤니티 제작을 요청했습니다.',
    creditMult: 16,
    xpMult: 14,
  },
  {
    id: 'promo-site',
    title: '간단한 홍보 사이트 만들기',
    desc: '동네 수제버거 사장님이 내일 오픈이라며 원페이지 랜딩을 부탁했습니다.',
    creditMult: 13,
    xpMult: 12,
  },
  {
    id: 'killing-time-game',
    title: '킬링타임용 게임 만들기',
    desc: '출퇴근길에 한 손으로 탭해서 즐길 수 있는 중독성 미니게임을 만듭니다.',
    creditMult: 15,
    xpMult: 15,
  },
  {
    id: 'wedding-card',
    title: '모바일 청첩장 긴급 제작',
    desc: '주말 결혼식인데 청첩장 링크가 깨졌다는 친구의 다급한 SOS입니다.',
    creditMult: 12,
    xpMult: 13,
  },
  {
    id: 'goods-bot',
    title: '한정판 굿즈 재고 알림 봇 만들기',
    desc: '품절 대란 피규어가 재입고되면 0.1초 만에 알려주는 알림 봇입니다.',
    creditMult: 14,
    xpMult: 14,
  },
  {
    id: 'viral-test',
    title: '바이럴 밈 성향 테스트 만들기',
    desc: 'SNS에서 폭발적으로 공유될 개발자 유형 심리테스트 웹앱을 제작합니다.',
    creditMult: 15,
    xpMult: 13,
  },
  {
    id: 'legacy-mall',
    title: '10년 된 레거시 쇼핑몰 심폐소생',
    desc: '익스플로러에서만 돌아가던 전설의 쇼핑몰 결제창을 최신 웹으로 고칩니다.',
    creditMult: 18,
    xpMult: 16,
  },
  {
    id: 'kimchi-chart',
    title: '실시간 시세 전광판 사이트 만들기',
    desc: '전 세계 거래소 시세 차이를 한눈에 비교하는 초고속 대시보드를 구축합니다.',
    creditMult: 17,
    xpMult: 15,
  },
  {
    id: 'market-inventory',
    title: '전통시장 재고 관리 앱 만들기',
    desc: '시장 상인들이 휴대폰으로 오늘 남은 상품과 수량을 바로 기록할 수 있게 해 달랍니다.',
    creditMult: 15,
    xpMult: 14,
  },
  {
    id: 'festival-map',
    title: '동네 축제 길찾기 지도 만들기',
    desc: '축제 방문객이 공연장, 화장실, 푸드트럭 위치를 쉽게 찾도록 지도를 제작합니다.',
    creditMult: 14,
    xpMult: 13,
  },
  {
    id: 'cat-cam',
    title: '고양이 쉼터 라이브캠 연결하기',
    desc: '보호소에서 입양을 기다리는 고양이들의 모습을 웹으로 생중계해 달라고 합니다.',
    creditMult: 16,
    xpMult: 15,
  },
  {
    id: 'library-qr',
    title: '작은 도서관 QR 대출 시스템 만들기',
    desc: '책과 회원증의 QR을 읽어 종이 대출 장부를 대신할 시스템을 만듭니다.',
    creditMult: 15,
    xpMult: 14,
  },
  {
    id: 'food-truck-order',
    title: '푸드트럭 주문 대기표 만들기',
    desc: '손님이 종이 번호표 없이 주문 순서와 조리 완료 여부를 확인할 수 있게 합니다.',
    creditMult: 14,
    xpMult: 13,
  },
  {
    id: 'farm-alert',
    title: '스마트팜 센서 경보 연결하기',
    desc: '한밤중에 온실 온도가 위험 범위를 벗어나면 담당자에게 알림을 보냅니다.',
    creditMult: 17,
    xpMult: 15,
  },
  {
    id: 'indie-localization',
    title: '인디 게임 다국어 패치 만들기',
    desc: '게임 출시를 앞두고 번역을 적용하고 긴 대사가 화면 밖으로 나가는 문제를 고칩니다.',
    creditMult: 16,
    xpMult: 15,
  },
  {
    id: 'podcast-captions',
    title: '팟캐스트 자막 검색 기능 만들기',
    desc: '검색 결과에서 원하는 대목을 누르면 그 시점부터 재생되도록 플레이어를 수정합니다.',
    creditMult: 15,
    xpMult: 14,
  },
  {
    id: 'escape-room-timer',
    title: '방탈출 카페 타이머 고치기',
    desc: '새 테마 오픈 전에 힌트 버튼과 남은 시간 표시가 함께 작동하도록 수리합니다.',
    creditMult: 13,
    xpMult: 13,
  },
  {
    id: 'bakery-preorders',
    title: '빵집 케이크 예약 페이지 만들기',
    desc: '날짜별로 만들 수 있는 수량을 제한하고 픽업 시간을 받을 수 있게 합니다.',
    creditMult: 14,
    xpMult: 14,
  },
  {
    id: 'archive-recovery',
    title: '사라진 사진 아카이브 복구하기',
    desc: '전시를 앞둔 사진 동호회가 접속 불가한 서버에서 원본 사진을 되찾아 달랍니다.',
    creditMult: 18,
    xpMult: 16,
  },
  {
    id: 'league-scoreboard',
    title: '동호회 리그 전광판 만들기',
    desc: '주말 풋살 대회에서 점수를 입력하면 관객 화면과 순위표가 동시에 바뀌어야 합니다.',
    creditMult: 15,
    xpMult: 14,
  },
  {
    id: 'exhibit-audio',
    title: '전시회 오디오 가이드 만들기',
    desc: '관람객이 작품 번호를 입력하면 이어폰으로 해설을 들을 수 있는 웹앱을 제작합니다.',
    creditMult: 13,
    xpMult: 12,
  },
  {
    id: 'transit-board',
    title: '마을버스 도착 안내판 고치기',
    desc: '시간표 제공 주소가 바뀌어 멈춘 정류장 안내판에 실시간 도착 정보를 다시 연결합니다.',
    creditMult: 16,
    xpMult: 15,
  },
  {
    id: 'conference-checkin',
    title: '개발자 행사 체크인 시스템 만들기',
    desc: '행사장 입구에서 참가자 QR을 읽어 입장을 처리하고 중복 체크인을 막습니다.',
    creditMult: 17,
    xpMult: 16,
  },
  {
    id: 'spreadsheet-cleanup',
    title: '뒤엉킨 주문 내역 자동 정리하기',
    desc: '세 가지 형식으로 쌓인 월별 주문 파일을 합치고 누락·중복 주문을 찾아냅니다.',
    creditMult: 12,
    xpMult: 12,
  },
]

const firstMissionTapRange = [24, 36]
const missionTapRange = [60, 90]

function randomMissionTaps([min, max]) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

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
  // 0. 백수 (반지하 단칸방)
  { id: 'kb-membrane', title: '멤브레인 키보드', price: 15, rank: 0, type: 'xp', power: 1, slot: 'keyboard', tier: 1 },
  { id: 'lamp-basic', title: '집게형 독서등', price: 25, rank: 0, type: 'xp', power: 1, slot: 'lamp', tier: 1 },
  { id: 'coffee', title: '아이스 아메리카노', price: 35, rank: 0, type: 'xp', power: 2, slot: 'drink', tier: 1 },
  // 1. 코딩 독학러 (좁은 고시원 방)
  { id: 'chair-ergo', title: '인체공학 메쉬 의자', price: 75, rank: 1, type: 'xp', power: 3, slot: 'chair', tier: 1, file: 'chair' },
  { id: 'books', title: '개발 입문서 세트', price: 95, rank: 1, type: 'xp', power: 2, slot: 'books', tier: 1 },
  { id: 'mon-single', title: 'FHD 코딩 모니터', price: 120, rank: 1, type: 'credit', power: 3, slot: 'monitor', tier: 1 },
  // 2. 국비학원 수료생 (달빛 옥탑방 원룸)
  { id: 'mouse-ergo', title: '버티컬 무선 마우스', price: 190, rank: 2, type: 'credit', power: 5, slot: 'mouse', tier: 1 },
  { id: 'router-basic', title: '가정용 유무선 공유기', price: 230, rank: 2, type: 'auto', power: 1, slot: 'network', tier: 1 },
  { id: 'kb-mech', title: 'RGB 기계식 키보드', price: 280, rank: 2, type: 'xp', power: 7, slot: 'keyboard', tier: 2 },
  // 3. 수습 인턴 (창고형 초기 스타트업)
  { id: 'mon-dual', title: '듀얼 모니터', price: 420, rank: 3, type: 'credit', power: 9, slot: 'monitor', tier: 2, file: 'monitor' },
  { id: 'lamp-led', title: '밝기 조절 LED 스탠드', price: 500, rank: 3, type: 'xp', power: 5, slot: 'lamp', tier: 2 },
  { id: 'ssd', title: '고속 외장 SSD', price: 580, rank: 3, type: 'xp', power: 11, slot: 'ssd', tier: 1 },
  // 4. 주니어 개발자 (개발팀 일반 사무실)
  { id: 'server', title: '미니 빌드 서버', price: 820, rank: 4, type: 'auto', power: 8, slot: 'server', tier: 1 },
  { id: 'chair-gaming', title: '프로 게이밍 의자', price: 1100, rank: 4, type: 'xp', power: 18, slot: 'chair', tier: 2 },
  { id: 'power-ups', title: '정전 대비 무정전 전원장치', price: 1250, rank: 4, type: 'auto', power: 4, slot: 'power', tier: 1 },
  { id: 'drink-energy', title: '고카페인 에너지 드링크', price: 1450, rank: 4, type: 'xp', power: 22, slot: 'drink', tier: 2 },
  // 5. 미들급 개발자 (공유오피스 라운지)
  { id: 'tools', title: '하드웨어 디버깅 킷', price: 1950, rank: 5, type: 'credit', power: 24, slot: 'tools', tier: 1 },
  { id: 'router-mesh', title: '메시 와이파이 공유기', price: 2250, rank: 5, type: 'auto', power: 10, slot: 'network', tier: 2 },
  { id: 'assistant', title: 'AI 코딩 로봇', price: 2600, rank: 5, type: 'xp', power: 35, slot: 'assistant', tier: 1 },
  // 6. 시니어 개발자 (판교 테크밸리 사옥)
  { id: 'kb-custom', title: '무접점 커스텀 키보드', price: 3600, rank: 6, type: 'xp', power: 50, slot: 'keyboard', tier: 3, file: 'keyboard' },
  { id: 'lamp-studio', title: '집중 작업용 와이드 조명', price: 4200, rank: 6, type: 'xp', power: 30, slot: 'lamp', tier: 3 },
  { id: 'mon-ultra', title: '울트라와이드 커브드 모니터', price: 4800, rank: 6, type: 'credit', power: 45, slot: 'monitor', tier: 3 },
  // 7. 테크 리드 (중앙 데이터 서버실)
  { id: 'desk-modern', title: '모션 데스크', price: 6500, rank: 7, type: 'credit', power: 65, slot: 'desk', tier: 1 },
  { id: 'backup-array', title: '자동 백업 스토리지', price: 7600, rank: 7, type: 'auto', power: 25, slot: 'nas', tier: 1 },
  { id: 'cluster', title: '서버 클러스터', price: 8800, rank: 7, type: 'auto', power: 45, slot: 'cluster', tier: 1 },
  // 8. 수석 아키텍트 (고층 코너 임원실)
  { id: 'chair-boss', title: '천연가죽 회장님 의자', price: 12500, rank: 8, type: 'xp', power: 110, slot: 'chair', tier: 3 },
  { id: 'lamp-smart', title: 'AI 자동 조절 데스크 조명', price: 14500, rank: 8, type: 'xp', power: 75, slot: 'lamp', tier: 4 },
  { id: 'drink-espresso', title: '전자동 에스프레소 머신', price: 16500, rank: 8, type: 'xp', power: 140, slot: 'drink', tier: 3 },
  // 9. CTO (한강뷰 펜트하우스 서재)
  { id: 'server-nas', title: '4베이 고속 NAS 스토리지', price: 23000, rank: 9, type: 'auto', power: 120, slot: 'nas', tier: 2 },
  { id: 'router-enterprise', title: '기업용 고속 네트워크 허브', price: 27500, rank: 9, type: 'auto', power: 75, slot: 'network', tier: 3 },
  { id: 'link', title: '위성 업링크 안테나', price: 32000, rank: 9, type: 'credit', power: 180, slot: 'link', tier: 1 },
  // 10. AI 연구소장 (초거대 양자 AI 연구소)
  { id: 'kb-laser', title: '홀로그램 무접점 레이저 키보드', price: 46000, rank: 10, type: 'xp', power: 280, slot: 'keyboard', tier: 4 },
  { id: 'mon-holo', title: '공간 홀로그램 디스플레이', price: 62000, rank: 10, type: 'credit', power: 260, slot: 'monitor', tier: 4 },
  { id: 'gpu-rack', title: 'AI 학습용 GPU 워크스테이션', price: 71000, rank: 10, type: 'auto', power: 180, slot: 'server', tier: 2 },
  { id: 'chair-zerog', title: '무중력 궤도 포드 의자', price: 82000, rank: 10, type: 'xp', power: 360, slot: 'chair', tier: 4 },
  // 11. 우주해커 (저궤도 우주 정거장)
  { id: 'quantum', title: '양자 컴파일러', price: 115000, rank: 11, type: 'xp', power: 550, slot: 'quantum', tier: 1 },
  { id: 'network-quantum', title: '행성 간 양자 통신 라우터', price: 138000, rank: 11, type: 'auto', power: 300, slot: 'network', tier: 4 },
  { id: 'core', title: '궤도 AI 코어', price: 160000, rank: 11, type: 'auto', power: 450, slot: 'core', tier: 1 },
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
  return {
    xp: 0,
    credits: 0,
    taps: 0,
    studyMs: 0,
    owned: [],
    claimed: [],
    activeMission: null,
    missionTapsRemaining: randomMissionTaps(firstMissionTapRange),
    sound: true,
    music: false,
    vibration: true,
    savedAt: now,
  }
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
  if (Array.isArray(raw.claimed)) {
    state.claimed = ranks.map((_, index) => index).filter(index => raw.claimed.includes(index) && state.xp >= goalFor(index))
  }
  if (raw.activeMission && typeof raw.activeMission === 'object') {
    const found = sideMissions.find(m => m.id === raw.activeMission.id)
    if (found && Number.isSafeInteger(raw.activeMission.credits) && Number.isSafeInteger(raw.activeMission.xp)) {
      state.activeMission = {
        id: found.id,
        title: found.title,
        desc: found.desc,
        credits: raw.activeMission.credits,
        xp: raw.activeMission.xp,
      }
    }
  }
  if (Number.isInteger(raw.missionTapsRemaining) && raw.missionTapsRemaining > 0 && raw.missionTapsRemaining <= missionTapRange[1]) {
    state.missionTapsRemaining = raw.missionTapsRemaining
  } else if (state.activeMission) {
    state.missionTapsRemaining = randomMissionTaps(missionTapRange)
  }
  return state
}

export function rankOf(xp) {
  const next = ranks.findIndex(rank => xp < rank.xp)
  return next === -1 ? ranks.length - 1 : next - 1
}

export function goalFor(rankIndex) {
  return ranks[rankIndex + 1]?.xp ?? endingXp
}

export function studyXpFor(rankIndex) {
  return ranks[rankIndex]?.studyXp ?? 1
}

export function tapXpFor(rankIndex) {
  return ranks[rankIndex]?.tapXp ?? 1
}

export function statsFor(state) {
  const index = rankOf(state.xp)
  const stats = { xp: tapXpFor(index), credit: 1, auto: 0 }
  for (const item of items) {
    if (state.owned.includes(item.id)) stats[item.type] += item.power
  }
  return stats
}

export function rollSideMission(state, excludeId) {
  const index = rankOf(state.xp)
  const stats = statsFor(state)
  const pool = sideMissions.filter(m => m.id !== excludeId)
  const picked = pool[Math.floor(Math.random() * pool.length)] ?? sideMissions[0]
  const baseCredit = Math.max(stats.credit * picked.creditMult, Math.round(ranks[index].reward * 0.45))
  const baseXp = Math.max(stats.xp * picked.xpMult, studyXpFor(index) * 4)
  state.activeMission = {
    id: picked.id,
    title: picked.title,
    desc: picked.desc,
    credits: baseCredit,
    xp: baseXp,
  }
  state.missionTapsRemaining = randomMissionTaps(missionTapRange)
  return state.activeMission
}

export function advanceSideMission(state) {
  if (state.activeMission) return
  state.missionTapsRemaining -= 1
  if (state.missionTapsRemaining === 0) return rollSideMission(state)
}

export function completeSideMission(state) {
  if (!state.activeMission) return null
  const completed = state.activeMission
  state.credits += completed.credits
  state.xp += completed.xp
  state.activeMission = null
  return completed
}

export function cancelSideMission(state) {
  if (!state.activeMission) return false
  state.activeMission = null
  return true
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
  const ticks = Math.floor(total / studyInterval)
  state.studyMs = total % studyInterval
  if (ticks < 1) return 0
  const xp = ticks * studyXpFor(rankOf(state.xp))
  state.xp += xp
  return xp
}
