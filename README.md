# 株式会社はぐめいど - 公式ホームページ

医療人材の循環を創ることで、地域医療の持続性を支える「株式会社はぐめいど」の公式コーポレートサイトです。

## 🌐 サイト構成

```
TOP（index.html）
├─ 私たちが取り組む課題（pages/issues.html）
├─ 事業紹介（pages/services.html）
│  ├─ はぐなびStudent（pages/hagunavi-student.html）
│  ├─ HugNavi（pages/hugnavi.html）
│  └─ 地域医療留学（pages/chiiki-ryugaku.html）
├─ 事業実績（pages/achievements.html）
├─ 代表メッセージ（pages/message.html）
├─ パートナー募集（pages/partner.html）
├─ 会社情報（pages/company.html）
└─ お問い合わせ（pages/contact.html）
```

## 📁 ディレクトリ構成

```
hugmade/
├─ index.html              # TOPページ
├─ pages/                  # 下層ページ
│  ├─ issues.html
│  ├─ services.html
│  ├─ hagunavi-student.html
│  ├─ hugnavi.html
│  ├─ chiiki-ryugaku.html
│  ├─ achievements.html
│  ├─ message.html
│  ├─ partner.html
│  ├─ company.html
│  └─ contact.html
├─ css/
│  └─ style.css            # 共通スタイルシート
├─ js/
│  └─ main.js              # 共通JavaScript
├─ images/                 # 画像ディレクトリ（プレースホルダー）
├─ .nojekyll               # GitHub Pages Jekyll無効化
└─ README.md
```

## 🚀 GitHub Pages 公開手順

### 1. GitHubリポジトリを作成
GitHubで新規リポジトリ（例: `hugmade-site`）を作成します。

### 2. ファイルをアップロード
このディレクトリの中身を、リポジトリにpushしてください。

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 3. GitHub Pagesを有効化
リポジトリの **Settings → Pages** で以下を設定:
- **Source**: Deploy from a branch
- **Branch**: `main` / `/ (root)`

数分後、`https://<your-username>.github.io/<repo-name>/` で公開されます。

## ✨ 特長

- **完全静的HTML/CSS/JS** — サーバー不要、GitHub Pagesでそのまま動作
- **レスポンシブデザイン** — PC・タブレット・スマートフォンに最適化
- **スクロールアニメーション** — IntersectionObserverによる軽量フェードイン
- **ハンバーガーメニュー** — モバイル時の自動切替
- **お問い合わせフォーム** — デモ動作（バリデーション付き）
- **ウォームベージュ × クリーン** — 医療・教育に最適な配色

## 🎨 デザイン仕様

- **メインカラー**: `#8b6f47` (ウォームブラウン)
- **アクセント**: `#c9a87c` (ベージュゴールド)
- **背景**: `#fdfaf5` (アイボリー) / `#f5ede0` (ベージュ)
- **テキスト**: `#3a342c` (ダークブラウン)
- **フォント**: Hiragino Sans / Noto Sans JP / Yu Gothic

## 📝 カスタマイズ

### お問い合わせフォームを実運用する
`pages/contact.html` のフォームは現在ダミーです。実運用時は以下のサービスとの連携を推奨:
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Google Forms](https://www.google.com/forms/about/)

### ロゴ画像を差し替える
現在は `<span class="logo-mark">は</span>` のテキストロゴです。
画像ロゴに差し替える場合は、`images/logo.png` を配置し、各HTMLの `.logo-mark` を `<img>` タグに変更してください。

## 📄 ライセンス

© 2025 株式会社はぐめいど. All Rights Reserved.
