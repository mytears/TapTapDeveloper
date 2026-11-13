# 탭탭 개발자 (TapTap Developer)

반지하 단칸방의 백수로 시작해 저궤도 우주 정거장의 우주해커까지 성장하는 한국어 세로형 픽셀아트 탭 게임입니다.

## 주요 특징
- **12단계 커리어 & 12종의 전용 작업실 배경**: 반지하 단칸방 → 좁은 고시원 방 → 달빛 옥탑방 원룸 → 창고형 초기 스타트업 → 개발팀 일반 사무실 → 공유오피스 라운지 → 판교 테크밸리 사옥 → 중앙 데이터 서버실 → 고층 코너 임원실 → 한강뷰 펜트하우스 서재 → 초거대 양자 AI 연구소 → 저궤도 우주 정거장까지 승급할 때마다 배경과 기본 탭당 XP·10초 자동 학습 XP가 함께 성장합니다.
- **슬롯별 장비 교체 시스템 (26종 업그레이드)**: 의자, 책상, 키보드, 모니터, 음료, 마우스, 외장 SSD, 서버 등 장비를 구매하면 작업실의 실제 소품 이미지가 상위 장비로 즉시 교체·배치됩니다.
- **돌발 외주 미션**: 코딩 도중 등장하는 다양한 외주 미션(`약간은 위험해 보이는 사이트 만들기`, `간단한 홍보 사이트 만들기`, `킬링타임용 게임 만들기` 등)을 광고 보기(테스트 모드 즉시 완료)로 완수하거나 취소할 수 있습니다.

## 브라우저에서 실행 및 빌드

```powershell
npm.cmd ci
npm.cmd run dev      # 개발 서버 (http://localhost:5173/)
npm.cmd run build    # 배포용 정적 웹 빌드 (dist/)
```

- 자세한 작업 이력과 아키텍처, 장비·커리어 명세는 [HANDOFF.md](HANDOFF.md)를 참고하세요.

## Android 테스트 빌드

JDK 21과 Android SDK Platform 35, Build Tools 35.0.0을 사용합니다.

```powershell
$env:ANDROID_HOME = Join-Path $env:LOCALAPPDATA 'Android\Sdk'
npm.cmd run android:sync
Set-Location android
.\gradlew.bat assembleDebug
```

테스트 APK는 `android/app/build/outputs/apk/debug/app-debug.apk`에 생성됩니다.
