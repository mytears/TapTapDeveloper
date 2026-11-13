# 탭탭 개발자 (TapTap Developer) — 작업 인계 및 개발 정리 문서

현재 작업 폴더는 `C:\Users\mytea\Desktop\@@pro.ject@@\@@Git\TapTapDeveloper`입니다. 이 문서는 지금까지 진행된 개발 내역과 아키텍처, 아트 규격, 게임 밸런스 규칙을 정리한 문서입니다. 후속 개발 시 이 문서와 `src/`, `public/`의 실제 구현을 기준으로 작업하세요.

---

## 1. 프로젝트 개요 및 주요 작업 이력

《탭탭 개발자》는 반지하 단칸방의 백수로 시작해 저궤도 우주 정거장의 우주해커까지 성장하는 한국어 세로형 픽셀아트 탭(클리커) 게임입니다.

### 주요 개발 및 개선 내역 요약
1. **웹 서버(`127.0.0.1:4444`) 및 GitHub Pages 자동 배포 구축**
   - 로컬 테스트용 Go 정적 웹서버(`dist/SimpleWebServer.exe`)가 `npm.cmd run build` 시 삭제되지 않도록 [vite.config.js](vite.config.js)에 `build: { emptyOutDir: false }`를 설정했습니다.
   - GitHub Actions 워크플로([.github/workflows/deploy.yml](.github/workflows/deploy.yml))를 추가해 `main` 브랜치 푸시 시 `https://mytears.github.io/TapTapDeveloper/`로 자동 빌드·배포되도록 구성했습니다.
2. **캐릭터 상·하체 레이어 분리 및 슬롯형 장비 교체 시스템**
   - 기존에 캐릭터·책상·노트북이 통째로 붙어 있던 이미지를 분리하여, 캐릭터 하체(`char-legs.webp`)는 책상 뒤에, 캐릭터 상체 및 타건 프레임(`char-upper.webp`, `char-upper-type.webp`)은 책상과 키보드 위에 오도록 다층 레이어(`z-index` 1~7)로 재구성했습니다.
   - 캐릭터 주변 외곽선의 흰색 노이즈(헤일로)를 제거하고 `160x120` 해상도 기준 1px `#2d1b2e` 외곽선으로 통일했습니다.
   - 상점 장비를 **26종(기본 장착 4종 포함 총 30종 스프라이트)**으로 확장하고, 같은 슬롯(`chair`, `desk`, `keyboard`, `monitor`, `drink`)의 상위 아이템 구매 시 기존 장비 이미지가 새 장비로 즉시 교체되도록 구현했습니다.
3. **모니터·키보드·책상 시점 및 비율 전면 교정 (`160x120` 네이티브 픽셀 스케일)**
   - **모든 모니터 뒷면(3/4 후면 시점) 통일**: 기본 구형 CRT 모니터(`mon-crt.webp`)부터 FHD 코딩 모니터(`mon-single.webp`), 듀얼 모니터(`monitor.webp`), 울트라와이드 커브드 모니터(`mon-ultra.webp`), 공간 홀로그램 디스플레이(`mon-holo.webp`)까지 모두 **캐릭터(우측 상단)를 향해 화면이 놓이고, 관찰자(좌측 하단) 쪽으로는 모니터 뒷면 하우징·VESA 브래킷·듀얼 암/스탠드 기둥이 보이도록** `\` 대각선 구도로 제작했습니다.
   - **키보드 정방향 교정**: 모든 키보드(`kb-basic`, `kb-membrane`, `kb-mech`, `keyboard`, `kb-laser`)를 `24x14` 네이티브 픽셀 크기로 제작하고, 캐릭터 양손 바로 아래(우측 상단 가장자리)에 팜레스트와 스페이스바가 오고 모니터 쪽(좌측 하단 가장자리)에 기능키와 케이블이 오도록 방향을 맞췄습니다.
   - **책상 상판 깊이(앞뒤 폭) 확장**: 컴퓨터 장비들이 책상 밖으로 삐져나오지 않도록 기본 나무 책상(`desk-wood.webp`)과 모션 데스크(`desk-modern.webp`)의 상판 앞뒤 폭을 기존 대비 약 2배(`16px` 깊이, 전체 `78x40`)로 넓혀 모니터·외장 SSD·키보드·마우스·음료가 모두 상판 안쪽에 안정적으로 놓이도록 수정했습니다.
4. **커리어 12단계 확장 & 직급별 전용 픽셀아트 배경 12종 제작**
   - 커리어를 기존 8단계에서 **12단계**로 확장하고, 허름한 반지하·고시원·옥탑방에서 시작해 초기 스타트업, 일반 사무실, 공유오피스, 판교 사옥, 서버실, 임원실, 한강뷰 펜트하우스, 양자 AI 연구소, 우주 정거장으로 발전하는 **12종의 `160x120` 픽셀아트 배경**을 제작·적용했습니다.
5. **커리어 직급에 따른 기본 탭당 XP & 10초 자동 학습 XP 스케일링**
   - 아이템을 구매하지 않아도 커리어 직급이 올라가면 **기본 탭당 XP(`tapXp`)**와 **10초마다 오르는 자동 학습 XP(`studyXp`)**가 직급에 맞춰 함께 증가하도록 구현했습니다.
6. **돌발 외주 미션 시스템 (보상형 광고 연동 구조)**
   - 코딩 탭 도중 주기적으로(첫 미션 6탭, 이후 12~18탭 간격) 또는 상단 **`돌발 미션`** 버튼 클릭 시 **8종의 돌발 외주 미션**(`약간은 위험해 보이는 사이트 만들기`, `간단한 홍보 사이트 만들기`, `킬링타임용 게임 만들기` 등)이 등장합니다.
   - **`광고 보기 (즉시 완료)`** 버튼 클릭 시 `watchRewardedAd()` 훅을 통해 즉시 성공 처리되어 보상을 지급하며(추후 Google AdSense / AdMob 보상형 광고 SDK 연동 준비 완료), **`의뢰 취소`**로 거절할 수도 있습니다.
7. **하단 메뉴 간소화 및 모바일 터치 UX 개선**
   - 하단 메뉴에서 잘 쓰이지 않는 `의뢰` 버튼을 제거하고 **`상점` · `커리어` 2열 버튼**으로 정리했습니다. 최종 목표 숙련도(`380,000 XP`) 도달 시 자동으로 엔딩 팝업이 열립니다.
   - 모바일 브라우저에서 화면을 빠르게 터치할 때 파란색/하늘색 하이라이트 영역이 깜빡이지 않도록 `-webkit-tap-highlight-color: transparent` 및 `user-select: none`을 전역 적용했습니다.
   - 상단 헤더에 테스트 및 디버깅을 위한 **`돌발 미션`** 버튼과 **`다음 직급`** 버튼을 배치했습니다.

---

## 2. 12단계 커리어 · 배경 · 기본 XP 테이블

| 단계 | 직급 (`title`) | 작업실 배경 이름 | 배경 파일 (`public/art/`) | 요구 숙련도 (`xp`) | 기본 탭당 XP (`tapXp`) | 10초 자동 XP (`studyXp`) |
| :---: | :--- | :--- | :--- | ---: | ---: | ---: |
| 1 | **백수** | 반지하 단칸방 | `bg-shabby.webp` | 0 | +1 XP | +1 XP |
| 2 | **코딩 독학러** | 좁은 고시원 방 | `bg-gosiwon.webp` | 50 | +2 XP | +2 XP |
| 3 | **국비학원 수료생** | 달빛 옥탑방 원룸 | `room-detailed.webp` | 180 | +4 XP | +4 XP |
| 4 | **수습 인턴** | 창고형 초기 스타트업 | `bg-garage.webp` | 520 | +8 XP | +8 XP |
| 5 | **주니어 개발자** | 개발팀 일반 사무실 | `office-detailed.webp` | 1,350 | +15 XP | +15 XP |
| 6 | **미들급 개발자** | 공유오피스 라운지 | `bg-lounge.webp` | 3,200 | +28 XP | +28 XP |
| 7 | **시니어 개발자** | 판교 테크밸리 사옥 | `bg-pangyo.webp` | 7,200 | +52 XP | +52 XP |
| 8 | **테크 리드** | 중앙 데이터 서버실 | `server-detailed.webp` | 15,500 | +95 XP | +95 XP |
| 9 | **수석 아키텍트** | 고층 코너 임원실 | `bg-executive.webp` | 32,000 | +175 XP | +175 XP |
| 10 | **CTO** | 한강뷰 펜트하우스 서재 | `bg-penthouse.webp` | 65,000 | +320 XP | +320 XP |
| 11 | **AI 연구소장** | 초거대 양자 AI 연구소 | `bg-ailab.webp` | 130,000 | +600 XP | +600 XP |
| 12 | **우주해커** | 저궤도 우주 정거장 | `orbit-detailed.webp` | 250,000 | +1,200 XP | +1,200 XP |

- 최종 엔딩 달성 숙련도(`endingXp`): **`380,000 XP`**

---

## 3. 장비 슬롯 및 레이어 구조 (`160x120` 기준)

작업실 뷰포트(`.viewport`) 내부의 캐릭터와 장비는 아래의 앞뒤 순서(`z-index` / `--depth`)로 겹쳐 렌더링됩니다.

1. **`--depth: 1` (의자 & 후면 대형 설비)**:
   - `chair` 슬롯: 기본 나무 의자(`chair-wood`) → 인체공학 메쉬 의자(`chair`) → 프로 게이밍 의자(`chair-gaming`) → 천연가죽 회장님 의자(`chair-boss`) → 무중력 궤도 포드 의자(`chair-zerog`)
   - 주변 설비: `cluster`(서버 클러스터), `link`(위성 업링크 안테나)
2. **`z-index: 2` (캐릭터 하체)**:
   - `public/art/char-legs.webp` (책상 아래로 다리와 흰 운동화가 보임)
   - 주변 설비: `nas`(4베이 고속 NAS 스토리지)
3. **`--depth: 3` (책상)**:
   - `desk` 슬롯 (`78x40`): 기본 나무 책상(`desk-wood`) → 모션 데스크(`desk-modern`)
4. **`--depth: 4` (키보드 & 중경 설비)**:
   - `keyboard` 슬롯 (`24x14`, 캐릭터 정방향): 기본 일반 키보드(`kb-basic`) → 멤브레인 키보드(`kb-membrane`) → RGB 기계식 키보드(`kb-mech`) → 무접점 커스텀 키보드(`keyboard`) → 홀로그램 무접점 레이저 키보드(`kb-laser`)
   - 주변 설비: `assistant`(AI 코딩 로봇), `server`(미니 빌드 서버)
5. **`z-index: 5` (캐릭터 상체 및 타건 애니메이션)**:
   - `public/art/char-upper.webp` (기본 프레임), `public/art/char-upper-type.webp` (타건 프레임)
6. **`--depth: 6~7` (책상 위 전면 장비 & 전경 설비)**:
   - `monitor` 슬롯 (캐릭터를 향한 후면 3/4 시점): 구형 CRT 모니터(`mon-crt`) → FHD 코딩 모니터(`mon-single`) → 듀얼 모니터(`monitor`) → 울트라와이드 커브드 모니터(`mon-ultra`) → 공간 홀로그램 디스플레이(`mon-holo`)
   - `mouse` 슬롯: 버티컬 무선 마우스(`mouse-ergo`)
   - `drink` 슬롯: 아이스 아메리카노(`coffee`) → 고카페인 에너지 드링크(`drink-energy`) → 전자동 에스프레소 머신(`drink-espresso`)
   - `ssd` 슬롯: 고속 외장 SSD(`ssd`)
   - 주변 설비: `tools`(하드웨어 디버깅 킷), `quantum`(양자 컴파일러), `core`(궤도 AI 코어)

---

## 4. 파일 구조

| 경로 | 역할 |
| --- | --- |
| `index.html` | Vite HTML 진입점. `#app`을 만들고 `src/main.js`를 불러옵니다. |
| `src/main.js` | 화면·팝업 렌더링, 탭·구매·돌발 미션 이벤트, 광고 보상 훅(`watchRewardedAd`), 10초 자동 XP 타이머, 로컬 저장, 디버그 버튼, 오디오 호출을 담당합니다. |
| `src/game.js` | 12단계 직급(`ranks`), 12종 작업실(`scenes`), 8종 돌발 미션(`sideMissions`), 26종 상점 장비(`items`) 데이터와 스탯 계산(`statsFor`), 세이브/복원(`restoreGame`) 로직을 담습니다. |
| `src/scene.js` | 작업실 배경 전환, 타건 프레임 전환, XP 플로팅 텍스트, 승급 연출, 슬롯별 장비 스프라이트 렌더링(`setGear`)을 담당합니다. |
| `src/style.css` | 세로 한 열 레이아웃(`max-width: 438px`), 모바일 터치 하이라이트 방지, 돌발 미션 카드, 작업실 레이어 및 장비 배치 좌표를 정의합니다. |
| `src/audio.js` | Web Audio로 타건음·구매음·승급음·완료음과 배경음 2곡을 합성합니다. |
| `src/icons.js` | 버튼과 상태 표시에 사용하는 SVG 아이콘 경로 모음입니다. |
| `public/art/` | 12종의 커리어 배경(`bg-*.webp`, `*-detailed.webp`)과 분리된 캐릭터 스프라이트(`char-upper.webp`, `char-upper-type.webp`, `char-legs.webp`)가 위치합니다. |
| `public/art/gear/` | 기본 장착 장비 4종과 상점 업그레이드 장비 26종을 포함한 투명 WebP 스프라이트(네이티브 `160x120` 픽셀 비율 및 `#2d1b2e` 1px 외곽선 적용)가 위치합니다. |
| `.github/workflows/deploy.yml` | GitHub Pages 자동 빌드 및 배포 워크플로입니다. |

---

## 5. 실행, 웹 빌드 및 배포 방법

### 개발 서버 및 웹 빌드 (`dist/`)
```powershell
npm.cmd ci
npm.cmd run dev      # http://localhost:5173/ 개발 서버 실행
npm.cmd run build    # dist/ 폴더에 정적 웹 빌드 생성 (dist/SimpleWebServer.exe 유지됨)
```
- `dist/SimpleWebServer.exe`를 실행하면 `http://127.0.0.1:4444`에서 빌드된 웹 버전을 바로 테스트할 수 있습니다.
- 코드를 수정한 뒤 `127.0.0.1:4444`에 반영하려면 반드시 `npm.cmd run build`를 실행해야 합니다.

### GitHub Pages 배포
- 로컬 변경 사항을 커밋한 뒤 `git push origin main`을 실행하면 GitHub Actions가 자동으로 빌드를 수행해 `https://mytears.github.io/TapTapDeveloper/`에 배포합니다.

### Android APK 빌드 (사용자 요청 시에만 수행)
- **APK는 사용자가 명시적으로 요청할 때만 빌드합니다.**
```powershell
$env:ANDROID_HOME = Join-Path $env:LOCALAPPDATA 'Android\Sdk'
npm.cmd run android:sync
Set-Location android
.\gradlew.bat assembleDebug
```
