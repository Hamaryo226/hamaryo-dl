import { Software, Category } from "./types";

export const categories: Category[] = [
  {
    id: "all",
    name: "すべて",
    description: "すべてのソフトウェア",
  },
  {
    id: "productivity",
    name: "生産性向上",
    description: "作業効率を向上させるツール",
  },
  {
    id: "utilities",
    name: "ユーティリティ",
    description: "システムユーティリティとツール",
  },
  {
    id: "development",
    name: "開発ツール",
    description: "プログラミングと開発支援",
  },
  {
    id: "media",
    name: "メディア",
    description: "画像・動画・音声処理",
  },
  {
    id: "games",
    name: "ゲーム",
    description: "ゲームとエンターテイメント",
  },
];

export const software: Software[] = [
  {
    id: "Supplemental-Documentation-System",
    name: "Supplemental-Documentation-System",
    description:
      "聴覚障碍者の支援内容をシステムで代替するため、講義動画から音声、スライドを抽出し、ノートテイク資料を作成するシステムを開発。",
    longDescription:
      "障害者差別解消法によって、大学には障碍者への合理的配慮義務が課せられている。東京大学バリアフリー支援室1)によると、聴覚障碍のある学生への支援としてパソコンテイク、ノートテイク、ノート作成、字幕挿入の4つが挙げられている。しかし、これらは支援を行う情報保障者の不足や能力差が課題となっている。実際に、規模の小さい大学では人員的余裕がなくノートテイクの補助ができなかった事例や、希望された理工系の情報保障者を割り当てられなかった事例などがJASSOに報告されている2)3)。 本プロジェクトでは、聴覚障碍者に向けて情報保障者が行う支援内容をシステムで代替するため、講義動画から音声、スライドを抽出し、ノートテイクされた資料を作成するシステムを開発し、課題の解決を図った。",
    version: "1.0.0",
    releaseDate: "2023-12-17",
    category: "productivity",
    tags: ["支援システム", "PHP", "Python", "動画処理"],
    downloadUrl:
      "https://github.com/ProEn-B-TeamD/Supplemental-Documentation-System/archive/refs/heads/main.zip",
    imageUrl: "../public/sds.webp",
    screenshots: [
      "../public/sds.webp",
      "/screenshots/text-editor-pro-2.png",
      "/screenshots/text-editor-pro-3.png",
    ],
    requirements: {
      os: ["Windows 10+"],
      memory: "未計測",
      storage: "113MB",
      other: ["ffmpeg", "Python 3.8+"],
    },
    changelog: [
      {
        version: "1.0.0",
        date: "2023-12-31",
        changes: ["パフォーマンスの改善"],
      },
    ],
    downloads: 0,
    rating: 0.1,
  },
  {
    id: "Frailty-Check-System",
    name: "Frailty-Check-System",
    description: "高齢者に向けたフレイルチェックシステム開発プロジェクト",
    longDescription:
      "高齢者のフレイルチェックを支援するため、Djangoや音声認識を用いたWebシステムを開発。",
    version: "1.0.0",
    releaseDate: "2024-12-02",
    category: "utilities",
    tags: ["ファイル管理", "自動化", "Python", "Django", "音声認識"],
    downloadUrl:
      "https://github.com/ProEn-A16/Frailty-Check-System/archive/refs/heads/main.zip",
    imageUrl: "/",
    screenshots: ["/", "/"],
    requirements: {
      os: ["Windows 11"],
      memory: "未計測",
      storage: "3.7MB",
    },
    changelog: [
      {
        version: "1.0.0",
        date: "2025-01-11",
        changes: ["システム最適化"],
      },
    ],
    downloads: 0,
    rating: 0.1,
  },
  {
    id: "Taiko-Re-Strap-Next",
    name: "Taiko-Re-Strap-Next",
    description: "",
    longDescription: "",
    version: "0.0.1",
    releaseDate: "2024-05-10",
    category: "games",
    tags: ["音楽ゲーム", "オープンソース", "C#", "Dxlib"],
    downloadUrl:
      "https://github.com/Hamaryo226/Taiko-Re-Strap-Next/releases/download/Initial-Version/Taiko-Re-Strap-Next-main.zip",
    imageUrl: "/",
    screenshots: ["/", "/", "/"],
    requirements: {
      os: ["Windows 10+"],
      memory: "4GB RAM",
      storage: "200MB",
      other: ["DirectX 11対応グラフィックカード"],
    },
    changelog: [
      {
        version: "0.0.1",
        date: "2024-09-17",
        changes: ["初期バージョン"],
      },
    ],
    downloads: 0,
    rating: 0.1,
  },
  {
    id: "Taiko-Re-Strap",
    name: "Taiko-Re-Strap",
    description:
      "某音楽ゲームのアーケード版をPCで再現したソフトウェア「Taiko-Re-Strap」を開発。",
    longDescription:
      "某音楽ゲームのアーケード版をPCで再現したソフトウェア「Taiko-Re-Strap」を開発。",
    version: "0.7.6",
    releaseDate: "2024-05-28",
    category: "games",
    tags: ["音楽ゲーム", "オープンソース"],
    downloadUrl:
      "https://github.com/Hamaryo226/Taiko-Re-Strap/archive/refs/heads/master.zip",
    imageUrl: "/",
    screenshots: ["/", "/", "/", "/"],
    requirements: {
      os: ["Windows 8+"],
      memory: "16GB RAM",
      storage: "500MB",
    },
    changelog: [
      {
        version: "0.7.6",
        date: "2024-05-28",
        changes: [
          "SlimDX依存排除。",
          "一部コードの最適化",
          "アイコン変更(DiscordRPCも)、ダブルプレイ時にリザルトから出られない不具合を修正、2Pキャラクター,カウンター周りを修正、ダブルプレイ時のリザルトに2Pを追加。",
          "難易度[2]以下の王冠とスコアランク、スコアボードの対応。",
          "リザルトの背景転調が正しく動作していなかった問題を修正、選曲の王冠,スコアランクの登場&退場のアニメーション＋拡大率の修正、タイトルでバナパスアニメーションのスキップを仮実装。",
          "選曲へ戻れない不具合を修正。",
          "分岐譜面シンボルの追加。裏譜面の難易度表記のアニメーションが止まる問題を修正。",
          "リザルト画面の改善(キャラクタークリア追加、山の転調、サブタイトル追加)、タイトル画面の改善(キャラクター座標修正、裏でエントリーキーが有効になっていた問題を修正)。選曲画面の一部の座標を修正。",
          "ダブルプレイ時の難易度選択画面にて他プレイヤーの選択待機状態の効果音を修正、背景に難易度シンボルを追加、リザルト修正。",
          "リザルトや段位に関する改善。",
          "細かい調整（※詳しくは更新されたコードをご確認ください。）",
          "段位周りの改善（Chara,Puchi,合格パネル,外伝ヘッダー）",
          "音色機能",
          "Mobの描画順を修正",
          "50コンボ以下のCombo_numberの座標を修正",
          "DiscordRPCにTitleステージ追加",
        ],
      },
      {
        version: "0.6.9.1",
        date: "2023-03-13",
        changes: [
          "一部の使っていないクラスをコメントアウト、特定のテクスチャの品質向上、",
          "使っていないコードを削除",
          "起動メッセージ削除、選曲画面に自己ベスト(鬼,裏鬼の高いスコアの方),BPM,プレイ回数を表示、ジャッジメーターに現在のBPMを追加。",
          "ゲームミュージックの文字列修正、ボカロ以外のジャンルフォントカラーを修正。",
          "モードバーにカーソルを追加、選曲バーに影を追加、魂点滅が動作していなかった点を修正。",
          "BoxとBarで鬼,裏鬼の表示優先度が違っていたのを修正。",
          "段位入場アニメーションの追加、挑戦画面のカーソルとオプション設定を追加。",
          "演奏ゲーム右上の長いタイトル時と短いタイトル時に座標が変化するように。",
          "フォルダテキストのサイズ変更、一部テクスチャの軽量化、履歴パネルの数字関連を調整、バーの展開長さを調整。",
          "一部簡素化、エントリーのネームプレートの名前ズレを修正",
        ],
      },
      {
        version: "0.5.9.4",
        date: "2022-09-16",
        changes: [
          "リザルト画面にスコアランク、王冠を表示するように(2P不可)",
          "エンディングアニメの追加、入魂時のキャラクターエフェクトの追加(仮テクスチャ)",
          "選曲のジャンルバックのスクロール速度を調整",
          "(CYakigasi氏)のネームプレート調整機能の移植、演奏終了演出(クリア成功)を従来のものに変更",
          "風船のフレーム座標の修正",
          "演奏オプションをmtaikoに表示、難易度選択画面にいくつか効果音を追加",
          "演奏オプションアイコンを選曲画面、リザルト画面に表示",
          "不要なテクスチャの読み込みを削除、ドンダフルコンボのループを追加",
          "キャラクターエフェクトのフェード追加",
          "下背景変更、下背景のフェード追加",
          "魂の点滅実装、その他調整",
          "MTaiko,Level-up&downを画像一枚化、リザルトの演出の一部を追加、ソフト名「Taiko-Re-Strap」に決定！",
          "ボカロのフォントカラー修正、ネームプレートの段位表示を削除",
          "下クリア背景に船を追加",
          "リザルトにキャラクターを表示",
          "選曲画面の描画順を修正、タイトルと選曲画面のキャラクタの再生速度,座標を修正、難易度選択画面に操作ガイド追加",
          "オプション設定の文字ずれ修正",
          "Box_Charaの描画順修正",
          ".NETFramework4.8.1(仮)",
          "2PMTaikoの描画ミスを修正",
        ],
      },
      {
        version: "0.4.5",
        date: "2022-04-17",
        changes: [
          ".Net Framwork 4.8 Runtimeの同梱、2P Rollエフェクトの修正、演奏中の2Pスコアランクの追加、AssemblyInfoの更新",
          "2Pスコアランクのコードを一旦削除、リザルトの演出スキップを追加",
        ],
      },
      {
        version: "0.3.2",
        date: "2022-04-08",
        changes: [
          "通常背景の上背景と下背景それに伴ったクリア背景の追加、2P用のプチキャラを選択できるように",
          "changelogの追加、ASIO4ALL、DirectX、SlimDXのインストーラーを同梱(/インストールが必要)",
          "使われていないコード、Usingの削除",
        ],
      },
      {
        version: "0.2.1",
        date: "2022-03-20",
        changes: [
          "東方背景の追加(現在アーカイブ化)",
          "演奏右上のタイトル名が縮小倍率時の座標ずれを修正(タイトル名が短い時のセンターラインのずれは直せてない)",
        ],
      },
      {
        version: "0.1.0",
        date: "2022-03-02",
        changes: ["難易度選択画面のタイトル、サブタイトルの文字縮小の追加"],
      },
    ],
    downloads: 0,
    rating: 0.1,
  },
  {
    id: "TaikoGreen",
    name: "TaikoGreen",
    description: "",
    longDescription: "",
    version: "0.0.1",
    releaseDate: "????-??",
    category: "games",
    tags: ["音楽ゲーム", "オープンソース", "C#", "SlimDX"],
    downloadUrl: "/",
    imageUrl: "/",
    screenshots: ["/", "/", "/"],
    requirements: {
      os: ["Windows 8+"],
      memory: "16GB RAM",
      storage: "150MB",
      other: [""],
    },
    changelog: [
      {
        version: "1.1.0",
        date: "2025-04-20",
        changes: ["王冠機能の追加", "一部コラボ背景の追加"],
      },
    ],
    downloads: 0,
    rating: 0.1,
  },
];
