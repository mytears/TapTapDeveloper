# 탭탭 개발자

세로형 픽셀아트 탭 게임입니다. 코딩으로 숙련도와 크레딧을 모으고, 장비를 장착해 백수에서 우주해커까지 성장합니다. 진행 상황은 현재 브라우저나 앱에 자동으로 저장됩니다.

게임 화면을 보고 있으면 10초마다 숙련도가 1 XP 오릅니다. 다른 탭으로 이동하면 타이머가 멈추고 돌아왔을 때 이어집니다.

## 브라우저에서 실행

```powershell
npm.cmd ci
npm.cmd run dev
```

[PC 미리보기](http://localhost:5173/)를 엽니다. 같은 Wi-Fi에 연결된 폰에서는 터미널에 표시되는 Network 주소를 엽니다. 수정한 코드는 개발 서버에서 브라우저에 반영됩니다.

## Android 테스트 빌드

JDK 21과 Android SDK Platform 35, Build Tools 35.0.0을 사용합니다. Windows에서 기본 경로에 SDK를 설치했다면 아래 명령으로 빌드합니다.

```powershell
$env:ANDROID_HOME = Join-Path $env:LOCALAPPDATA 'Android\Sdk'
npm.cmd run android:sync
Set-Location android
.\gradlew.bat assembleDebug
```

테스트 APK는 `android/app/build/outputs/apk/debug/app-debug.apk`에 생성됩니다.

## 게임 아트와 오디오

`public/art`의 작업실 배경 4종, 장비 12종, 개발자 기본·타건 프레임은 내장 이미지 생성 도구로 만들었습니다. 상점에서 구매한 장비는 작업실에 배치되며, 게임을 다시 열면 보유 장비를 복원합니다. [이미지 생성 프롬프트](ART-PROMPTS.md)를 참고하세요. 사운드는 `src/audio.js`에서 합성합니다.
