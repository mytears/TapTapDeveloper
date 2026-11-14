import '@fontsource-variable/inter/wght.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-700.css'
import './style.css'
import { icon } from './icons.js'
import {
  advanceSideMission,
  buyItem,
  cancelSideMission,
  collectIdle,
  collectStudy,
  completeSideMission,
  endingXp,
  equippedFor,
  goalFor,
  items,
  newGame,
  rankOf,
  ranks,
  restoreGame,
  rollSideMission,
  scenes,
  spriteFor,
  statsFor,
  studyInterval,
  studyXpFor,
} from './game.js'
import { setMusic, sound } from './audio.js'
import { createScene } from './scene.js'

const storageKey = 'taptap-developer-v1'
const number = new Intl.NumberFormat('ko-KR')
const format = value => number.format(value)
const art = file => `${import.meta.env.BASE_URL}art/${file}`
const tabs = [['shop', 'bag', '상점'], ['career', 'flag', '커리어']]
const typeNames = { xp: '탭당 숙련도', credit: '탭당 크레딧', auto: '초당 크레딧' }
const slotNames = { chair: '의자 교체', desk: '책상 교체', keyboard: '키보드 교체', monitor: '모니터 교체', drink: '음료 교체', lamp: '조명 교체', network: '네트워크 교체', nas: '스토리지 교체', server: '서버 교체' }
let activeTab = 'shop'
let storageAvailable = true
let state
try {
  state = restoreGame(JSON.parse(localStorage.getItem(storageKey)))
} catch {
  state = restoreGame()
}
const welcomeCredits = collectIdle(state)

// 추후 Google AdSense / AdMob 보상형 광고 SDK 연동 지점
// 현재 테스트 단계에서는 광고 보기 클릭 시 즉시 성공(true)으로 처리합니다.
async function watchRewardedAd() {
  if (typeof window.showGoogleRewardedAd === 'function') {
    return Boolean(await window.showGoogleRewardedAd())
  }
  return true
}

const app = document.querySelector('#app')
app.innerHTML = `
  <header class="topbar">
    <h1><img src="${import.meta.env.BASE_URL}icon.png" alt="">탭탭 개발자</h1>
    <div class="header-actions">
      <span id="save-status" role="status" hidden>저장 불가</span>
      <button class="debug-button" id="debug-mission" type="button" title="디버그: 돌발 외주 미션 즉시 발생">${icon('bolt')} 돌발 미션</button>
      <button class="debug-button" id="debug-rank" type="button" title="디버그: 다음 커리어로 승급 및 테스트 크레딧 지급">${icon('up')} 다음 직급</button>
      <button class="icon-button" id="sound" type="button" aria-label="효과음" aria-pressed="true">${icon('sound')}</button>
      <button class="icon-button" id="settings" type="button" aria-label="설정" aria-haspopup="dialog">${icon('gear')}</button>
    </div>
  </header>
  <main class="workspace">
    <section class="play" aria-label="개발자 키우기">
      <div class="rank-card">
        <div class="rank-top">
          <h2 id="rank-title">백수</h2>
          <span class="balance">${icon('coin')} <strong id="credits">0</strong><span class="sr-only"> 크레딧</span></span>
        </div>
        <div class="progress-caption"><span id="next-rank"></span><span id="rank-xp"></span></div>
        <progress id="progress" aria-label="승급 숙련도" max="100" value="0"></progress>
      </div>
      <div class="viewport" id="viewport" role="button" tabindex="0" aria-label="작업실에서 코딩" aria-describedby="scene-name tap-yield">
        <img id="scene-image" class="scene-background" alt="" fetchpriority="high">
        <div class="scene-character scene-character-legs">
          <img src="${art('char-legs.webp')}" alt="" draggable="false">
        </div>
        <div class="scene-character scene-character-upper">
          <img src="${art('char-upper.webp')}" alt="" draggable="false">
          <img class="typing-frame" src="${art('char-upper-type.webp')}" alt="" draggable="false">
        </div>
        <span id="scene-name" class="location"></span>
        <div class="scene-gear" role="group" aria-label="작업실에 배치한 장비"></div>
      </div>
      <p class="tap-hint"><strong>화면을 터치해 코딩</strong><span id="tap-yield"></span></p>
      <div class="passive">
        <span class="study">${icon('clock')} <span id="study-rate">10초마다 +1 XP</span> <span class="study-time" id="study-time" aria-hidden="true"></span></span>
        <span id="auto-credit" hidden></span>
      </div>
    </section>
    <nav class="menu" aria-label="성장 메뉴">
      ${tabs.map(([id, glyph, title]) => `<button type="button" data-tab="${id}" aria-haspopup="dialog">${icon(glyph)} <span>${title}</span></button>`).join('')}
    </nav>
  </main>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
  <dialog id="mission-dialog" class="side-mission" aria-labelledby="mission-label mission-title" aria-describedby="mission-desc mission-reward">
    <span class="mission-badge" id="mission-label">${icon('bolt')} 돌발 외주 미션</span>
    <h2 id="mission-title" class="mission-title"></h2>
    <p id="mission-desc" class="mission-desc"></p>
    <p id="mission-reward" class="mission-reward"></p>
    <p id="mission-feedback" role="status"></p>
    <div class="side-mission-actions">
      <button type="button" id="mission-ad" class="mission-ad-btn">${icon('play')} 광고 보기 (즉시 완료)</button>
      <button type="button" id="mission-cancel" class="mission-cancel-btn" autofocus>의뢰 취소</button>
    </div>
  </dialog>
  <dialog id="menu-dialog" class="menu-dialog" aria-labelledby="panel-title">
    <div class="dialog-top">
      <h2 id="panel-title"></h2><span id="panel-count"></span>
      <form method="dialog"><button class="icon-button" type="submit" aria-label="닫기">${icon('close')}</button></form>
    </div>
    <p id="panel-feedback" role="status"></p>
    <div class="panel-list" id="panel-list" tabindex="0" aria-labelledby="panel-title"></div>
  </dialog>
  <dialog id="settings-dialog" aria-labelledby="settings-title">
    <div class="dialog-top"><h2 id="settings-title">설정</h2><form method="dialog"><button class="icon-button" type="submit" aria-label="닫기">${icon('close')}</button></form></div>
    <label class="setting-row">효과음 <input type="checkbox" data-setting="sound" /></label>
    <label class="setting-row">배경음 <input type="checkbox" data-setting="music" /></label>
    <label class="setting-row">탭 진동 <input type="checkbox" data-setting="vibration" /></label>
  </dialog>
  <dialog id="ending-dialog" aria-labelledby="ending-title">
    <div class="ending-icon">${icon('antenna')}</div>
    <h2 id="ending-title">지구, 들리나요?</h2>
    <p>통신이 복구됐어요. 눅눅한 반지하 단칸방에서 CRT 모니터로 첫 코드를 치던 개발자는 이제 우주 정거장을 지키는 우주해커가 됐습니다.</p>
    <form method="dialog"><button class="primary-small" type="submit">작업실로 돌아가기</button></form>
  </dialog>`

const byId = id => document.getElementById(id)
const viewport = byId('viewport')
const scene = createScene(viewport, byId('scene-image'), art)
const panel = byId('panel-list')
const missionDialog = byId('mission-dialog')
const missionAd = byId('mission-ad')
const menuDialog = byId('menu-dialog')
const settingsDialog = byId('settings-dialog')
const endingDialog = byId('ending-dialog')
let toastTimer
let lastRank
let panelSignature
let unlockedAudio = false
let saveTimer
let watchingMission
let lastStudyTime = document.hidden ? undefined : Math.floor(performance.now())

function save() {
  clearTimeout(saveTimer)
  saveTimer = undefined
  try {
    localStorage.setItem(storageKey, JSON.stringify(state))
    storageAvailable = true
  } catch {
    storageAvailable = false
  }
  byId('save-status').hidden = storageAvailable
}

function toast(message) {
  if (menuDialog.open) {
    byId('panel-feedback').textContent = message
    return
  }
  const element = byId('toast')
  element.textContent = message
  element.classList.add('visible')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => element.classList.remove('visible'), 2550)
}

function updateMusic() {
  setMusic(unlockedAudio && state.music && !document.hidden, ranks[rankOf(state.xp)].scene >= 10)
}

function renderPanel(index) {
  const settings = {
    shop: ['장비 상점', `${format(state.credits)} 크레딧`],
    career: ['커리어', `${index + 1} / ${ranks.length}`],
  }
  const [title, count] = settings[activeTab]
  byId('panel-title').textContent = title
  byId('panel-count').textContent = count
  const signature = [activeTab, index, state.owned.join(',')].join('|')
  if (signature !== panelSignature) {
    panelSignature = signature
    if (activeTab === 'shop') panel.innerHTML = items.map(item => itemRow(item, index)).join('')
    if (activeTab === 'career') panel.innerHTML = ranks.map((rank, i) => rankRow(rank, i, index)).join('')
  }
  for (const button of panel.querySelectorAll('[data-price]')) {
    button.classList.toggle('affordable', state.credits >= Number(button.dataset.price))
  }
}

function itemRow(item, index) {
  const owned = state.owned.includes(item.id)
  const locked = item.rank > index
  const equipped = equippedFor(state)
  const sprite = spriteFor(item)
  const isCurrentVisual = owned && equipped[item.slot] === sprite
  const label = isCurrentVisual ? '장착 중' : '보유 중'
  const action = owned ? `<span class="owned-label">${icon('check')} ${label}</span>`
    : locked ? `<span class="locked-label" title="${ranks[item.rank].title}에서 해금">${icon('lock')}</span>`
      : `<button class="buy" type="button" data-buy="${item.id}" data-price="${item.price}" aria-label="${item.title} 구매, ${format(item.price)} 크레딧">${icon('coin')} ${format(item.price)}</button>`
  const slotTag = slotNames[item.slot] ? ` · ${slotNames[item.slot]}` : ''
  const detail = locked ? `${ranks[item.rank].title}에서 해금` : `${typeNames[item.type]} +${format(item.power)}${slotTag}`
  return `<div class="list-row ${locked ? 'locked' : ''}">
    <span class="item-icon shop-item-icon ${item.type}"><img src="${art(`gear/${sprite}.webp`)}" alt=""></span>
    <div class="row-text"><strong>${item.title}</strong><small>${detail}</small></div>${action}
  </div>`
}

function rankRow(rank, index, current) {
  const area = scenes[rank.scene]
  return `<div class="list-row ${index === current ? 'current' : ''}">
    <span class="item-icon xp">${icon(index < current ? 'check' : 'up')}</span>
    <div class="row-text"><strong>${rank.title} · ${area.name}</strong><small>숙련도 ${format(rank.xp)} · 탭당 기본 +${format(rank.tapXp)} XP · 10초마다 +${format(rank.studyXp)} XP</small></div>
    <span class="row-tag">${index === current ? '현재 직급' : index < current ? '달성' : `LV.${String(index + 1).padStart(2, '0')}`}</span>
  </div>`
}

function renderSideMission() {
  const mission = state.activeMission
  if (!mission) {
    missionDialog.close()
    return
  }
  if (document.querySelector('dialog[open]')) return
  byId('mission-title').textContent = mission.title
  byId('mission-desc').textContent = mission.desc
  byId('mission-reward').textContent = `+${format(mission.credits)} 크레딧 · +${format(mission.xp)} XP`
  byId('mission-feedback').textContent = ''
  missionAd.disabled = watchingMission === mission
  missionDialog.showModal()
}

function render() {
  const index = rankOf(state.xp)
  const rank = ranks[index]
  const stats = statsFor(state)
  const goal = goalFor(index)
  const percent = Math.min(100, Math.floor((state.xp - rank.xp) * 100 / (goal - rank.xp)))
  const area = scenes[rank.scene]
  if (index !== lastRank) {
    lastRank = index
    byId('rank-title').textContent = rank.title
    byId('scene-name').textContent = area.name
    scene.set(rank.scene, art(area.file))
    updateMusic()
  }
  byId('next-rank').textContent = ranks[index + 1] ? `다음 직급 · ${ranks[index + 1].title}` : (state.xp >= endingXp ? '최고 직급 마스터' : '최종 목표 · 지구 통신 복구')
  byId('rank-xp').textContent = `${format(state.xp)} / ${format(goal)} XP`
  byId('progress').value = percent
  byId('credits').textContent = format(state.credits)
  byId('study-rate').textContent = `10초마다 +${format(studyXpFor(index))} XP`
  byId('auto-credit').hidden = !stats.auto
  byId('auto-credit').textContent = `+${format(stats.auto)} 크레딧/초`
  byId('tap-yield').textContent = `+${format(stats.credit)} 크레딧 · +${format(stats.xp)} 숙련도`
  byId('sound').setAttribute('aria-pressed', state.sound)
  byId('sound').innerHTML = icon(state.sound ? 'sound' : 'mute')
  const nextTitle = ranks[index + 1]?.title
  byId('debug-rank').innerHTML = `${icon('up')} ${nextTitle ? '다음 직급' : (state.xp < endingXp ? '최종 XP' : '처음으로')}`
  scene.setGear(equippedFor(state), items)
  if (state.xp >= endingXp && !state.claimed.includes(ranks.length - 1)) {
    state.claimed.push(ranks.length - 1)
    play('end')
    menuDialog.close()
    missionDialog.close()
    endingDialog.showModal()
    save()
  }
  renderSideMission()
  if (menuDialog.open) renderPanel(index)
}

function play(name) {
  unlockedAudio = true
  if (state.sound) sound(name)
  updateMusic()
}

function tap(event) {
  collectIdle(state)
  const stats = statsFor(state)
  const before = rankOf(state.xp)
  state.taps += 1
  state.xp += stats.xp
  state.credits += stats.credit
  const after = rankOf(state.xp)
  let x = 44 + state.taps % 5 * 3
  let y = 63
  if (event.detail > 0 && viewport.contains(event.target)) {
    const rect = viewport.getBoundingClientRect()
    x = Math.max(17, Math.min(83, (event.clientX - rect.left) / rect.width * 100))
    y = Math.max(23, (event.clientY - rect.top) / rect.height * 100)
  }
  scene.tap(x, y, `+${format(stats.xp)} XP`)
  play(after === before ? 'tap' : 'rank')
  if (state.vibration) navigator.vibrate?.(12)
  const mission = advanceSideMission(state)
  if (after > before) announceRank(after)
  if (mission || after > before) {
    save()
  } else if (!saveTimer) {
    saveTimer = setTimeout(save, 500)
  }
  render()
}

function announceRank(index) {
  toast(`승급! ${ranks[index].title} (${scenes[ranks[index].scene].name})`)
  scene.promote()
}

function updateStudy() {
  if (lastStudyTime === undefined) return 0
  const now = Math.floor(performance.now())
  const before = rankOf(state.xp)
  const xp = collectStudy(state, now - lastStudyTime)
  lastStudyTime = now
  const countdown = `${Math.ceil((studyInterval - state.studyMs) / 1000)}초`
  if (byId('study-time').textContent !== countdown) byId('study-time').textContent = countdown
  if (xp) {
    scene.gain(57, 37, `+${format(xp)} XP`, 'study-xp')
    const after = rankOf(state.xp)
    if (after > before) announceRank(after)
  }
  return xp
}

app.addEventListener('click', event => {
  if (event.target.closest('button, input, label, dialog') || document.querySelector('dialog[open]')) return
  tap(event)
})
missionAd.addEventListener('click', async () => {
  const mission = state.activeMission
  if (!mission || watchingMission === mission) return
  watchingMission = mission
  missionAd.disabled = true
  const feedback = byId('mission-feedback')
  feedback.textContent = ''
  let watched
  try {
    watched = await watchRewardedAd()
  } catch {
    if (state.activeMission === mission) feedback.textContent = '광고를 불러오지 못했습니다. 다시 시도해 주세요.'
    return
  } finally {
    if (watchingMission === mission) watchingMission = undefined
    if (state.activeMission === mission) missionAd.disabled = false
  }
  if (state.activeMission !== mission) return
  if (!watched) {
    feedback.textContent = '광고 시청이 취소되었습니다.'
    return
  }
  const before = rankOf(state.xp)
  const done = completeSideMission(state)
  const after = rankOf(state.xp)
  scene.gain(50, 42, `+${format(done.xp)} XP`, 'study-xp')
  play(after > before ? 'rank' : 'claim')
  if (after > before) {
    announceRank(after)
  } else {
    toast(`외주 성공! +${format(done.credits)} 크레딧 · +${format(done.xp)} XP`)
  }
  save()
  render()
})
function declineMission() {
  if (!cancelSideMission(state)) return
  toast('외주 의뢰를 취소했습니다.')
  save()
  render()
}

byId('mission-cancel').addEventListener('click', declineMission)
missionDialog.addEventListener('cancel', event => {
  event.preventDefault()
  declineMission()
})
byId('debug-mission').addEventListener('click', () => {
  play('claim')
  rollSideMission(state)
  save()
  render()
})
document.addEventListener('keydown', event => {
  const isViewportKey = event.target === viewport && (event.code === 'Space' || event.key === 'Enter')
  const isBodyShortcut = event.target === document.body && event.code === 'Space'
  if ((!isViewportKey && !isBodyShortcut) || document.querySelector('dialog[open]')) return
  event.preventDefault()
  if (!event.repeat) tap(event)
})
for (const dialog of [menuDialog, settingsDialog, endingDialog]) {
  dialog.addEventListener('close', renderSideMission)
}
document.querySelector('.menu').addEventListener('click', event => {
  const button = event.target.closest('[data-tab]')
  if (!button) return
  activeTab = button.dataset.tab
  byId('panel-feedback').textContent = ''
  renderPanel(rankOf(state.xp))
  menuDialog.showModal()
  panel.scrollTop = 0
})
panel.addEventListener('click', event => {
  const buy = event.target.closest('[data-buy]')
  if (buy) {
    collectIdle(state)
    const item = items.find(candidate => candidate.id === buy.dataset.buy)
    if (!buyItem(state, item.id)) {
      toast(`${format(item.price - state.credits)} 크레딧이 더 필요해요.`)
      return
    }
    play('buy')
    toast(`${item.title} 장착 완료`)
    save()
    render()
  }
})
byId('debug-rank').addEventListener('click', () => {
  const index = rankOf(state.xp)
  if (ranks[index + 1]) {
    const nextIndex = index + 1
    state.xp = ranks[nextIndex].xp
    state.credits += ranks[nextIndex].reward * 10
    play('rank')
    announceRank(nextIndex)
  } else if (state.xp < endingXp) {
    state.xp = endingXp
    state.credits += 150000
    play('rank')
    toast('디버그: 최종 의뢰 달성 XP!')
  } else {
    state = newGame()
    lastRank = undefined
    toast('디버그: 백수(처음)로 초기화')
  }
  save()
  render()
})
byId('sound').addEventListener('click', () => {
  state.sound = !state.sound
  if (state.sound) play('buy')
  save()
  render()
})
byId('settings').addEventListener('click', () => {
  for (const input of settingsDialog.querySelectorAll('[data-setting]')) input.checked = state[input.dataset.setting]
  settingsDialog.showModal()
})
settingsDialog.addEventListener('change', event => {
  const key = event.target.dataset.setting
  if (!key) return
  state[key] = event.target.checked
  unlockedAudio = true
  updateMusic()
  save()
  render()
})
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    updateStudy()
    lastStudyTime = undefined
    collectIdle(state)
    save()
  } else {
    lastStudyTime = Math.floor(performance.now())
    const reward = collectIdle(state)
    if (reward > 0) toast(`자리 비운 동안 +${format(reward)} 크레딧`)
    save()
    render()
  }
  updateMusic()
})
window.addEventListener('pagehide', () => {
  updateStudy()
  save()
})
setInterval(() => {
  if (document.hidden) return
  const xp = updateStudy()
  const credits = collectIdle(state)
  if (xp || credits) {
    save()
    render()
  }
}, 250)
render()
updateStudy()
save()
if (welcomeCredits > 0) toast(`자리 비운 동안 +${format(welcomeCredits)} 크레딧`)
