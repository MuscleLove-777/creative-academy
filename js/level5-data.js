/* ============================================
   Level 5: ブランディングとUI/UX
   ============================================ */
const LEVEL5_DATA = {
    id: 5,
    title: "ブランディングとUI/UX",
    icon: "💎",
    description: "ブランド構築の本質からUI/UXデザインまで、ユーザー体験を設計するスキルを習得する",
    modules: [
        {
            id: 501,
            title: "ブランドアイデンティティ設計",
            duration: "20分",
            content: `
<h2>ブランドとは何か</h2>
<p>ブランドとは単なるロゴや名前ではありません。<strong>顧客の心の中に形成される総合的なイメージと感情の集合体</strong>です。優れたブランドは企業の価値を高め、顧客のロイヤルティを築き、競合との差別化を実現します。</p>

<div class="info-box tip">
<div class="info-box-title">ブランドの定義</div>
「ブランドとは、あなたがいない部屋で人々があなたについて語ること」 ── ジェフ・ベゾス（Amazon創業者）
</div>

<h2>ブランドアイデンティティの構成要素</h2>
<p>ブランドアイデンティティとは、<strong>企業が自らをどう定義し、どう認知されたいか</strong>を体系的に整理したものです。以下の5つの要素で構成されます。</p>

<table>
<tr><th>構成要素</th><th>定義</th><th>具体例（Nike）</th></tr>
<tr><td><strong>ミッション</strong></td><td>企業が社会に対して果たす使命・存在意義</td><td>世界中のアスリートにインスピレーションとイノベーションを届ける</td></tr>
<tr><td><strong>ビジョン</strong></td><td>将来実現したい理想の姿</td><td>すべての人がアスリートである世界</td></tr>
<tr><td><strong>バリュー</strong></td><td>意思決定の基準となる価値観</td><td>イノベーション、サステナビリティ、多様性</td></tr>
<tr><td><strong>パーソナリティ</strong></td><td>ブランドの人格・性格特性</td><td>大胆、挑戦的、エネルギッシュ</td></tr>
<tr><td><strong>トーン&ボイス</strong></td><td>コミュニケーションの話し方・文体</td><td>力強く、直接的で、鼓舞するような言葉遣い</td></tr>
</table>

<h2>ブランドアーキタイプ</h2>
<p>ブランドアーキタイプとは、心理学者カール・ユングの原型理論をブランディングに応用したフレームワークです。<strong>12の普遍的な人格類型</strong>にブランドを当てはめることで、一貫したブランドパーソナリティを構築できます。</p>

<table>
<tr><th>アーキタイプ</th><th>動機</th><th>特徴</th><th>代表ブランド</th></tr>
<tr><td><strong>英雄（Hero）</strong></td><td>mastery</td><td>勇敢、決断力、強さ</td><td>Nike、FedEx</td></tr>
<tr><td><strong>賢者（Sage）</strong></td><td>理解</td><td>知恵、知識、信頼</td><td>Google、BBC</td></tr>
<tr><td><strong>探検家（Explorer）</strong></td><td>自由</td><td>冒険、発見、独立</td><td>The North Face、Jeep</td></tr>
<tr><td><strong>反逆者（Outlaw）</strong></td><td>解放</td><td>破壊的、革命的、挑発的</td><td>Harley-Davidson、Diesel</td></tr>
<tr><td><strong>魔術師（Magician）</strong></td><td>力</td><td>変革、ビジョン、想像力</td><td>Apple、Disney</td></tr>
<tr><td><strong>恋人（Lover）</strong></td><td>親密さ</td><td>情熱、感覚、魅力</td><td>Chanel、Godiva</td></tr>
<tr><td><strong>道化師（Jester）</strong></td><td>楽しさ</td><td>ユーモア、楽観、遊び心</td><td>M&M's、Old Spice</td></tr>
<tr><td><strong>世話人（Caregiver）</strong></td><td>奉仕</td><td>思いやり、寛大、保護</td><td>Johnson & Johnson、Volvo</td></tr>
<tr><td><strong>統治者（Ruler）</strong></td><td>支配</td><td>権威、責任、リーダーシップ</td><td>Mercedes-Benz、Rolex</td></tr>
<tr><td><strong>創造者（Creator）</strong></td><td>革新</td><td>想像力、表現、独自性</td><td>LEGO、Adobe</td></tr>
<tr><td><strong>一般人（Everyman）</strong></td><td>帰属</td><td>共感、誠実、現実的</td><td>IKEA、MUJI</td></tr>
<tr><td><strong>純真（Innocent）</strong></td><td>安全</td><td>素朴、楽観、誠実</td><td>Coca-Cola、Dove</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">アーキタイプの活用法</div>
自社ブランドのアーキタイプを1つ（メイン）と1つ（サブ）選び、すべてのコミュニケーションでそのキャラクターを一貫させましょう。たとえばAppleは「魔術師」をメインに「創造者」をサブとして、革新と創造性を一貫して表現しています。
</div>

<h2>ビジュアルアイデンティティ</h2>
<p>ビジュアルアイデンティティは、ブランドの<strong>視覚的な表現体系</strong>です。顧客が最初に接触するタッチポイントであり、ブランド認知の70%以上は視覚情報に依存すると言われています。</p>

<h3>ビジュアルアイデンティティの構成要素</h3>
<ul>
<li><strong>ロゴ:</strong> シンボルマーク、ロゴタイプ、コンビネーションマーク</li>
<li><strong>カラーパレット:</strong> プライマリカラー、セカンダリカラー、アクセントカラー</li>
<li><strong>タイポグラフィ:</strong> 見出し用フォント、本文用フォント、サイズ体系</li>
<li><strong>写真/イラストスタイル:</strong> 撮影トーン、イラストレーションの世界観</li>
<li><strong>アイコン/パターン:</strong> UIアイコン、背景パターン、装飾要素</li>
</ul>

<div class="info-box success">
<div class="info-box-title">色彩心理学とブランドカラー</div>
<ul>
<li><strong>赤:</strong> 情熱、エネルギー、緊急性（Coca-Cola、YouTube）</li>
<li><strong>青:</strong> 信頼、安定、専門性（Facebook、Samsung）</li>
<li><strong>黄:</strong> 楽観、親しみ、注意（McDonald's、IKEA）</li>
<li><strong>緑:</strong> 自然、成長、健康（Starbucks、Spotify）</li>
<li><strong>黒:</strong> 高級感、洗練、権威（Chanel、Nike）</li>
<li><strong>紫:</strong> 創造性、高貴、神秘性（Cadbury、Twitch）</li>
</ul>
</div>

<h2>ブランドガイドライン</h2>
<p>ブランドガイドラインとは、ブランドの使用ルールを文書化した<strong>ブランドの取扱説明書</strong>です。社内外の関係者全員が一貫したブランド表現を行うための基準となります。</p>

<h3>ブランドガイドラインに含める項目</h3>
<ul>
<li><strong>ブランドストーリー:</strong> ミッション、ビジョン、バリュー</li>
<li><strong>ロゴ使用規定:</strong> 最小サイズ、余白規定、禁止事項</li>
<li><strong>カラー規定:</strong> HEX、RGB、CMYK、Pantoneのカラーコード</li>
<li><strong>タイポグラフィ:</strong> フォントファミリー、ウェイト、サイズ体系</li>
<li><strong>写真・イラスト:</strong> 撮影ガイド、イラスト使用基準</li>
<li><strong>トーン&ボイス:</strong> 言葉遣い、Do's and Don'ts</li>
<li><strong>テンプレート:</strong> 名刺、封筒、プレゼン資料、SNS投稿</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">よくある失敗</div>
ブランドガイドラインを作っただけで放置すると、時間とともに各部門がバラバラな表現をし始めます。<strong>定期的なブランド監査</strong>と<strong>社内トレーニング</strong>を組み合わせることが、ブランドの一貫性を保つ鍵です。
</div>
            `,
            quiz: [
                {
                    id: "q501_1",
                    type: "choice",
                    question: "ブランドアイデンティティの構成要素に含まれないものはどれですか？",
                    options: ["ミッション", "バリュー", "売上目標", "パーソナリティ"],
                    answer: 2,
                    explanation: "ブランドアイデンティティはミッション、ビジョン、バリュー、パーソナリティ、トーン&ボイスで構成されます。売上目標はブランドアイデンティティの構成要素ではありません。"
                },
                {
                    id: "q501_2",
                    type: "choice",
                    question: "ブランドアーキタイプにおいて、Appleが該当するメインの類型はどれですか？",
                    options: ["英雄（Hero）", "賢者（Sage）", "魔術師（Magician）", "創造者（Creator）"],
                    answer: 2,
                    explanation: "Appleは「魔術師（Magician）」をメインアーキタイプとし、変革・ビジョン・想像力を体現するブランドとして位置づけられています。"
                },
                {
                    id: "q501_3",
                    type: "choice",
                    question: "ブランドカラーで「信頼・安定・専門性」を想起させる色はどれですか？",
                    options: ["赤", "青", "黄", "緑"],
                    answer: 1,
                    explanation: "青は信頼、安定、専門性を想起させる色で、Facebook、Samsungなど多くのテクノロジー企業がブランドカラーに採用しています。"
                },
                {
                    id: "q501_4",
                    type: "fill",
                    question: "ブランドの使用ルールを文書化したものを何と呼びますか？（カタカナ含む日本語で）",
                    answer: "ブランドガイドライン",
                    explanation: "ブランドガイドラインは、ロゴ使用規定、カラー規定、タイポグラフィなどブランドの使用ルールを体系的にまとめた文書です。"
                }
            ]
        },
        {
            id: 502,
            title: "UIデザイン",
            duration: "22分",
            content: `
<h2>UIデザインとは</h2>
<p>UI（User Interface）デザインとは、<strong>ユーザーがプロダクトと対話するための視覚的な接点</strong>を設計することです。ボタン、フォーム、ナビゲーション、レイアウトなど、ユーザーが目にして操作するすべての要素が対象です。</p>

<div class="info-box tip">
<div class="info-box-title">UIとUXの違い</div>
<ul>
<li><strong>UI（User Interface）:</strong> 見た目と操作性。「どう見えるか、どう触れるか」</li>
<li><strong>UX（User Experience）:</strong> 体験全体。「どう感じるか、目的を達成できるか」</li>
</ul>
UIは優れたUXを実現するための重要な手段の一つですが、UIだけではUXは完結しません。
</div>

<h2>UIデザインの5原則</h2>
<p>優れたUIデザインを実現するための基本原則です。</p>

<table>
<tr><th>原則</th><th>説明</th><th>実践例</th></tr>
<tr><td><strong>一貫性（Consistency）</strong></td><td>同じ操作は同じ見た目・挙動にする</td><td>すべてのページで同じスタイルのボタンを使用する</td></tr>
<tr><td><strong>フィードバック（Feedback）</strong></td><td>ユーザーの操作に即座に応答する</td><td>ボタンクリック時のアニメーション、ローディング表示</td></tr>
<tr><td><strong>可視性（Visibility）</strong></td><td>重要な情報・操作は目につく場所に配置する</td><td>CTAボタンをファーストビューに配置</td></tr>
<tr><td><strong>エラー防止（Error Prevention）</strong></td><td>そもそもエラーが起きにくい設計にする</td><td>入力フォームのリアルタイムバリデーション</td></tr>
<tr><td><strong>柔軟性（Flexibility）</strong></td><td>初心者にも上級者にも対応できる設計</td><td>ショートカットキーとGUI操作の両方を提供</td></tr>
</table>

<h2>UIコンポーネント</h2>
<p>UIは再利用可能な<strong>コンポーネント（部品）</strong>の組み合わせで構成されます。主要なUIコンポーネントを理解しましょう。</p>

<h3>ナビゲーション系</h3>
<ul>
<li><strong>ヘッダーナビゲーション:</strong> サイト全体のメニュー。グローバルナビとも呼ばれる</li>
<li><strong>サイドバー:</strong> カテゴリやフィルタの表示に使用</li>
<li><strong>ブレッドクラム:</strong> 現在地を階層表示（ホーム > カテゴリ > 商品）</li>
<li><strong>タブ:</strong> 同一画面内でコンテンツを切り替え</li>
<li><strong>ハンバーガーメニュー:</strong> モバイルでメニューを折りたたむ三本線アイコン</li>
</ul>

<h3>入力系</h3>
<ul>
<li><strong>テキストフィールド:</strong> 自由入力（プレースホルダー、ラベル、バリデーション付き）</li>
<li><strong>ドロップダウン:</strong> 選択肢が多い場合の選択UI</li>
<li><strong>ラジオボタン:</strong> 排他的な選択（1つだけ選ぶ）</li>
<li><strong>チェックボックス:</strong> 複数選択可能な項目</li>
<li><strong>トグルスイッチ:</strong> ON/OFFの切り替え</li>
<li><strong>スライダー:</strong> 範囲内の値を直感的に調整</li>
</ul>

<h3>フィードバック系</h3>
<ul>
<li><strong>モーダル:</strong> 重要な操作の確認ダイアログ</li>
<li><strong>トースト通知:</strong> 一時的なフィードバックメッセージ</li>
<li><strong>プログレスバー:</strong> 処理の進捗状況の表示</li>
<li><strong>スケルトンスクリーン:</strong> コンテンツ読み込み中のプレースホルダー</li>
</ul>

<h2>Atomic Design</h2>
<p>Atomic Designとは、Brad Frost氏が提唱した<strong>UIコンポーネントの設計方法論</strong>です。化学の概念になぞらえ、UIを5つの階層で整理します。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>Atoms（原子）</strong>
これ以上分解できない最小のUI要素。ボタン、ラベル、入力フィールド、アイコンなど。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>Molecules（分子）</strong>
複数のAtomを組み合わせた機能的なグループ。検索フォーム（入力フィールド + ボタン）、メニュー項目（アイコン + テキスト）など。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>Organisms（有機体）</strong>
複数のMoleculeを組み合わせた複雑なUIセクション。ヘッダー（ロゴ + ナビ + 検索フォーム）、商品カードリストなど。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>Templates（テンプレート）</strong>
Organismを配置したページレベルのレイアウト構造。コンテンツが入る前のワイヤーフレーム的な状態。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>Pages（ページ）</strong>
Templateに実際のコンテンツが入った最終的な画面。実データで表示を確認・検証する段階。
</div>
</div>
</div>

<h2>レスポンシブデザイン</h2>
<p>レスポンシブデザインとは、<strong>画面サイズに応じてレイアウトを最適化</strong>する設計手法です。モバイルファーストの時代において必須のスキルです。</p>

<h3>主要ブレイクポイント</h3>
<table>
<tr><th>デバイス</th><th>ブレイクポイント</th><th>レイアウト特徴</th></tr>
<tr><td>スマートフォン</td><td>~767px</td><td>1カラム、ハンバーガーメニュー、タップ操作最適化</td></tr>
<tr><td>タブレット</td><td>768px~1023px</td><td>2カラム、サイドナビ表示/非表示の切り替え</td></tr>
<tr><td>デスクトップ</td><td>1024px~1439px</td><td>3カラム以上、フルナビゲーション表示</td></tr>
<tr><td>大画面</td><td>1440px~</td><td>最大幅制限、コンテンツ中央配置</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">モバイルファーストの考え方</div>
レスポンシブデザインでは<strong>モバイルファースト</strong>（小さい画面から設計し、大きい画面に拡張していく）が推奨されます。理由は(1)モバイルトラフィックが全体の50%以上を占める、(2)制約の多い環境から始めることで本当に必要な要素が明確になる、(3)Googleがモバイルファーストインデックスを採用しているためです。
</div>

<h2>アクセシビリティ（WCAG 2.1）</h2>
<p>アクセシビリティとは、<strong>障がいの有無に関わらず、すべてのユーザーがWebコンテンツを利用できる</strong>ようにすることです。WCAG（Web Content Accessibility Guidelines）2.1が国際標準として広く採用されています。</p>

<h3>WCAGの4原則</h3>
<ul>
<li><strong>知覚可能（Perceivable）:</strong> 情報を複数の方法で提供する（画像にalt属性、動画に字幕）</li>
<li><strong>操作可能（Operable）:</strong> キーボードのみで操作できる、十分な操作時間を確保する</li>
<li><strong>理解可能（Understandable）:</strong> コンテンツが読みやすく予測可能である</li>
<li><strong>堅牢（Robust）:</strong> 様々な支援技術（スクリーンリーダー等）と互換性がある</li>
</ul>

<h3>実務で押さえるべきポイント</h3>
<ul>
<li><strong>コントラスト比:</strong> テキストと背景の色のコントラスト比は4.5:1以上（AA基準）</li>
<li><strong>フォントサイズ:</strong> 本文テキストは最低16px、拡大200%でもレイアウト崩れなし</li>
<li><strong>タッチターゲット:</strong> タップ可能な要素は最低44x44pxのサイズを確保</li>
<li><strong>フォーカスインジケーター:</strong> キーボード操作時に現在のフォーカス位置を視覚的に示す</li>
<li><strong>代替テキスト:</strong> すべての情報性のある画像にalt属性を設定する</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">法的義務としてのアクセシビリティ</div>
日本では2024年4月から改正障害者差別解消法が施行され、民間事業者にも合理的配慮の提供が義務化されました。Webアクセシビリティの対応は「あると良い」ではなく、<strong>「対応すべき」もの</strong>へと位置づけが変わっています。
</div>
            `,
            quiz: [
                {
                    id: "q502_1",
                    type: "choice",
                    question: "UIデザインの5原則に含まれないものはどれですか？",
                    options: ["一貫性", "フィードバック", "美しさ", "エラー防止"],
                    answer: 2,
                    explanation: "UIデザインの5原則は一貫性、フィードバック、可視性、エラー防止、柔軟性です。「美しさ」は重要ですが、5原則には含まれません。"
                },
                {
                    id: "q502_2",
                    type: "choice",
                    question: "Atomic Designにおいて、検索フォーム（入力フィールド + ボタン）はどの階層に該当しますか？",
                    options: ["Atoms（原子）", "Molecules（分子）", "Organisms（有機体）", "Templates（テンプレート）"],
                    answer: 1,
                    explanation: "Molecules（分子）は複数のAtomを組み合わせた機能的なグループです。検索フォームは入力フィールド（Atom）とボタン（Atom）の組み合わせなので、Moleculeに該当します。"
                },
                {
                    id: "q502_3",
                    type: "choice",
                    question: "WCAG 2.1のAA基準でテキストと背景のコントラスト比はどれ以上必要ですか？",
                    options: ["2.5:1以上", "3.0:1以上", "4.5:1以上", "7.0:1以上"],
                    answer: 2,
                    explanation: "WCAG 2.1のAA基準では、通常テキストと背景のコントラスト比は4.5:1以上が必要です。なお、大きな文字（18pt以上または14pt太字以上）は3:1以上です。"
                },
                {
                    id: "q502_4",
                    type: "fill",
                    question: "Brad Frost氏が提唱した、UIコンポーネントを5階層で整理する設計方法論の名称は？（英語で）",
                    answer: "Atomic Design",
                    explanation: "Atomic Designは化学の概念（原子→分子→有機体）になぞらえ、UIをAtoms、Molecules、Organisms、Templates、Pagesの5階層で整理する方法論です。"
                }
            ]
        },
        {
            id: 503,
            title: "UXデザイン",
            duration: "22分",
            content: `
<h2>UXデザインとは</h2>
<p>UX（User Experience）デザインとは、<strong>ユーザーがプロダクトやサービスを通じて得る体験全体</strong>を設計することです。UIデザインが「どう見えるか」に焦点を当てるのに対し、UXデザインは「ユーザーが目的を達成できるか」「快適な体験だったか」という全体像を対象とします。</p>

<div class="info-box tip">
<div class="info-box-title">UXデザインの父</div>
UX（ユーザーエクスペリエンス）という用語を最初に使ったのは、認知科学者の<strong>ドン・ノーマン</strong>です。1993年にApple社でUser Experience Architectという肩書を名乗ったのが始まりとされています。
</div>

<h2>UXデザインプロセス</h2>
<p>UXデザインは4つのフェーズを繰り返しながら進めます。<strong>ダブルダイヤモンド</strong>モデルとも呼ばれるこのプロセスでは、「発散（広げる）」と「収束（絞る）」を2回繰り返します。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>調査（Discover）</strong>
ユーザーリサーチを通じて課題やニーズを発見する。インタビュー、アンケート、行動観察、競合分析などを実施。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>定義（Define）</strong>
調査で得た情報を整理し、解決すべき課題を明確にする。ペルソナ作成、カスタマージャーニーマップ、問題定義文（HMW: How Might We）の策定。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>設計（Develop）</strong>
アイデアを形にする。ワイヤーフレーム、プロトタイプ、情報設計（IA）、UIデザインを作成。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>検証（Deliver）</strong>
ユーザーテストで仮説を検証する。ユーザビリティテスト、A/Bテスト、アクセシビリティテストを実施し、改善点を洗い出す。
</div>
</div>
</div>

<h2>ユーザーリサーチ手法</h2>
<p>UXデザインの出発点はユーザーを深く理解することです。目的に応じて適切なリサーチ手法を選択します。</p>

<table>
<tr><th>手法</th><th>種類</th><th>特徴</th><th>適した場面</th></tr>
<tr><td><strong>デプスインタビュー</strong></td><td>定性</td><td>1対1で深い動機やニーズを引き出す</td><td>新プロダクト企画、ペルソナ作成</td></tr>
<tr><td><strong>アンケート調査</strong></td><td>定量</td><td>多数のユーザーから統計的なデータを収集</td><td>市場規模把握、満足度測定</td></tr>
<tr><td><strong>行動観察（エスノグラフィー）</strong></td><td>定性</td><td>ユーザーの自然な行動を観察して潜在ニーズを発見</td><td>既存プロセスの課題発見</td></tr>
<tr><td><strong>ユーザビリティテスト</strong></td><td>定性</td><td>プロトタイプを操作してもらい問題点を発見</td><td>プロトタイプ検証、リリース前評価</td></tr>
<tr><td><strong>カードソーティング</strong></td><td>定性</td><td>情報の分類やラベルをユーザーに決めてもらう</td><td>情報設計（IA）の最適化</td></tr>
<tr><td><strong>A/Bテスト</strong></td><td>定量</td><td>2つのバリエーションの効果を統計的に比較</td><td>デザイン改善、コンバージョン最適化</td></tr>
<tr><td><strong>ヒューリスティック評価</strong></td><td>専門家</td><td>UXの専門家が経験則に基づいて評価</td><td>短期間での問題点洗い出し</td></tr>
</table>

<h2>ペルソナ</h2>
<p>ペルソナとは、<strong>ターゲットユーザーを代表する架空の人物像</strong>です。リサーチデータに基づいて作成し、チーム全員がユーザー視点で意思決定するための共通認識ツールとして機能します。</p>

<h3>ペルソナに含める項目</h3>
<ul>
<li><strong>基本情報:</strong> 名前、年齢、職業、家族構成</li>
<li><strong>行動パターン:</strong> 日常的な行動、よく使うサービス、情報収集方法</li>
<li><strong>ゴール:</strong> 達成したいこと、求める価値</li>
<li><strong>ペインポイント:</strong> 現状の不満、障壁、フラストレーション</li>
<li><strong>引用文:</strong> そのペルソナが実際に言いそうなセリフ</li>
</ul>

<h2>カスタマージャーニーマップ</h2>
<p>カスタマージャーニーマップとは、<strong>ユーザーがプロダクトと関わる体験の全プロセス</strong>を時系列で可視化したものです。各タッチポイントでのユーザーの行動、思考、感情を整理し、改善機会を特定します。</p>

<h3>カスタマージャーニーマップの構成要素</h3>
<ul>
<li><strong>フェーズ:</strong> 認知 → 検討 → 決定 → 利用 → 推奨</li>
<li><strong>行動:</strong> 各フェーズでユーザーが行う具体的な行動</li>
<li><strong>タッチポイント:</strong> ユーザーがブランドと接触するチャネルや接点</li>
<li><strong>思考:</strong> ユーザーが各段階で考えていること</li>
<li><strong>感情:</strong> ポジティブ/ネガティブの感情曲線</li>
<li><strong>改善機会:</strong> ペインポイントに対する解決策の仮説</li>
</ul>

<h2>ニールセンのユーザビリティ10原則</h2>
<p>ヤコブ・ニールセン博士が提唱した<strong>ユーザビリティの10のヒューリスティクス</strong>は、UIデザインを評価する際の最も有名な基準です。</p>

<table>
<tr><th>#</th><th>原則</th><th>説明</th></tr>
<tr><td>1</td><td><strong>システム状態の可視性</strong></td><td>今何が起きているかをユーザーに常に知らせる（例：進捗バー）</td></tr>
<tr><td>2</td><td><strong>システムと現実世界の一致</strong></td><td>ユーザーに馴染みのある言葉や概念を使う（専門用語を避ける）</td></tr>
<tr><td>3</td><td><strong>ユーザーの制御と自由</strong></td><td>間違った操作を簡単に取り消せる（「元に戻す」機能）</td></tr>
<tr><td>4</td><td><strong>一貫性と標準</strong></td><td>同じ操作は同じ結果を、プラットフォームの慣例に従う</td></tr>
<tr><td>5</td><td><strong>エラーの防止</strong></td><td>エラーメッセージよりも、そもそもエラーが起きない設計を優先</td></tr>
<tr><td>6</td><td><strong>再認より再生</strong></td><td>情報を記憶させるのではなく、見れば分かるようにする</td></tr>
<tr><td>7</td><td><strong>柔軟性と効率性</strong></td><td>ショートカットや高度な操作で上級者の効率を上げる</td></tr>
<tr><td>8</td><td><strong>美的でミニマルなデザイン</strong></td><td>不必要な情報を排除し、本質に集中させる</td></tr>
<tr><td>9</td><td><strong>エラーの認識・診断・回復の支援</strong></td><td>エラーメッセージは原因と解決策を平易に伝える</td></tr>
<tr><td>10</td><td><strong>ヘルプとドキュメント</strong></td><td>必要な情報に素早くアクセスでき、具体的な手順で解決できる</td></tr>
</table>

<h2>UXライティング</h2>
<p>UXライティングとは、<strong>プロダクト内のテキスト（マイクロコピー）</strong>を設計することです。ボタンのラベル、エラーメッセージ、説明文、プレースホルダーテキストなど、ユーザーの行動を導くすべてのテキストが対象です。</p>

<h3>UXライティングの原則</h3>
<ul>
<li><strong>明確:</strong> 曖昧さを排除し、ユーザーが迷わない言葉を選ぶ</li>
<li><strong>簡潔:</strong> 必要最小限の言葉で伝える（「送信する」ではなく「送信」）</li>
<li><strong>有用:</strong> ユーザーが次にすべきことを示す</li>
<li><strong>一貫:</strong> 同じ概念には同じ言葉を使う</li>
</ul>

<div class="info-box success">
<div class="info-box-title">良いUXライティングの例</div>
<ul>
<li>悪い例: 「エラーが発生しました（エラーコード: 0x80070005）」</li>
<li>良い例: 「保存できませんでした。インターネット接続を確認して、もう一度お試しください」</li>
</ul>
<ul>
<li>悪い例: 「空のフィールドが入力されていません」</li>
<li>良い例: 「メールアドレスを入力してください」</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q503_1",
                    type: "choice",
                    question: "UXデザインプロセス（ダブルダイヤモンド）の4フェーズの正しい順序はどれですか？",
                    options: ["設計→調査→定義→検証", "調査→定義→設計→検証", "定義→調査→検証→設計", "調査→設計→定義→検証"],
                    answer: 1,
                    explanation: "ダブルダイヤモンドモデルでは、調査（Discover）→ 定義（Define）→ 設計（Develop）→ 検証（Deliver）の順に進みます。"
                },
                {
                    id: "q503_2",
                    type: "choice",
                    question: "ニールセンの10原則のうち「間違った操作を簡単に取り消せる」ことを指す原則はどれですか？",
                    options: ["システム状態の可視性", "エラーの防止", "ユーザーの制御と自由", "一貫性と標準"],
                    answer: 2,
                    explanation: "「ユーザーの制御と自由」は、間違った操作を簡単に取り消せる（元に戻す機能など）ことを意味する原則です。"
                },
                {
                    id: "q503_3",
                    type: "choice",
                    question: "ユーザーリサーチ手法のうち「定量的」な手法はどれですか？",
                    options: ["デプスインタビュー", "行動観察", "A/Bテスト", "カードソーティング"],
                    answer: 2,
                    explanation: "A/Bテストは2つのバリエーションの効果を統計的に比較する定量的な手法です。デプスインタビュー、行動観察、カードソーティングは定性的手法です。"
                },
                {
                    id: "q503_4",
                    type: "fill",
                    question: "ターゲットユーザーを代表する架空の人物像を何と呼びますか？（カタカナで）",
                    answer: "ペルソナ",
                    explanation: "ペルソナはリサーチデータに基づいて作成された架空のユーザー像で、チーム全員がユーザー視点で意思決定するための共通認識ツールです。"
                }
            ]
        },
        {
            id: 504,
            title: "デザインツール活用",
            duration: "18分",
            content: `
<h2>デザインツールの選び方</h2>
<p>クリエイティブ制作において適切なツールを選ぶことは生産性に直結します。プロジェクトの目的、チーム構成、予算に応じて<strong>最適なツールを使い分ける</strong>スキルが重要です。</p>

<h2>Figma基本操作</h2>
<p>Figmaは<strong>ブラウザベースのUIデザイン・プロトタイピングツール</strong>で、現在最も広く使われているデザインツールです。リアルタイム共同編集が最大の特徴です。</p>

<h3>Figmaの3大機能</h3>

<h4>1. フレーム（Frame）</h4>
<p>Figmaのフレームはデザインの<strong>コンテナ（入れ物）</strong>です。アートボードの役割に加え、レスポンシブデザインの設定、レイアウトの制御が可能です。</p>
<ul>
<li>デバイスサイズのプリセット（iPhone、iPad、Desktop等）</li>
<li>フレーム内にフレームをネストしてレイアウト構造を作成</li>
<li>Constraints（制約）でリサイズ時の振る舞いを制御</li>
</ul>

<h4>2. コンポーネント（Component）</h4>
<p>コンポーネントは<strong>再利用可能なデザイン要素</strong>です。マスターコンポーネントを変更すると、すべてのインスタンス（複製）に変更が反映されます。</p>
<ul>
<li>Variants（バリアント）で状態管理（Default / Hover / Active / Disabled）</li>
<li>プロパティの公開・非公開を制御</li>
<li>ネストされたコンポーネントのスワップ（差し替え）</li>
</ul>

<h4>3. オートレイアウト（Auto Layout）</h4>
<p>オートレイアウトは、フレーム内の要素を<strong>自動的に配置・整列</strong>する機能です。CSSのFlexboxに相当する概念で、レスポンシブなデザインを効率的に作成できます。</p>
<ul>
<li>水平方向・垂直方向の自動配置</li>
<li>パディング、ギャップの数値指定</li>
<li>Hug Contents（内容に合わせる）/ Fill Container（親に合わせる）/ Fixed（固定）</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">Figma習得のコツ</div>
Figmaを効率的に使うために、まずオートレイアウトをマスターしましょう。オートレイアウトが使えると、パディングやマージンを手動で調整する手間が大幅に減り、レスポンシブ対応も容易になります。
</div>

<h2>Canva活用法</h2>
<p>Canvaは<strong>非デザイナーでもプロ品質のビジュアルを作成できる</strong>クラウドベースのデザインツールです。テンプレートが充実しており、SNS画像、プレゼン、チラシ、動画まで幅広く対応します。</p>

<h3>Canvaが得意なこと</h3>
<ul>
<li><strong>SNS投稿画像:</strong> Instagram、X（Twitter）、Facebook等の規定サイズテンプレート</li>
<li><strong>プレゼンテーション:</strong> アニメーション付きスライド作成</li>
<li><strong>印刷物:</strong> 名刺、チラシ、ポスター（PDF入稿対応）</li>
<li><strong>動画:</strong> 簡易的な動画編集、テロップ付き動画</li>
<li><strong>ブランドキット:</strong> カラー、フォント、ロゴを登録して一貫性を維持</li>
</ul>

<h2>Adobe Creative Cloud比較</h2>
<p>Adobe Creative Cloudはプロフェッショナル向けの<strong>デザインソフトウェア群</strong>です。高度な表現が必要な場合に選択されます。</p>

<table>
<tr><th>ツール</th><th>主な用途</th><th>特徴</th></tr>
<tr><td><strong>Photoshop</strong></td><td>写真編集・画像加工</td><td>ラスター画像の高度な編集、合成、レタッチ</td></tr>
<tr><td><strong>Illustrator</strong></td><td>ロゴ・イラスト制作</td><td>ベクター画像の作成、拡大縮小しても劣化しない</td></tr>
<tr><td><strong>InDesign</strong></td><td>冊子・紙媒体レイアウト</td><td>多ページドキュメントのレイアウト、文字組み</td></tr>
<tr><td><strong>Premiere Pro</strong></td><td>動画編集</td><td>プロ向け動画編集、カラーグレーディング</td></tr>
<tr><td><strong>After Effects</strong></td><td>モーショングラフィックス</td><td>アニメーション、VFX、映像の特殊効果</td></tr>
<tr><td><strong>XD</strong></td><td>UI/UXデザイン</td><td>プロトタイピング（現在はFigmaに移行推奨）</td></tr>
</table>

<h2>デザインツール総合比較</h2>
<table>
<tr><th>ツール</th><th>価格</th><th>難易度</th><th>最適な用途</th><th>共同作業</th></tr>
<tr><td><strong>Figma</strong></td><td>無料〜</td><td>中</td><td>UI/UXデザイン、プロトタイプ</td><td>リアルタイム共同編集</td></tr>
<tr><td><strong>Canva</strong></td><td>無料〜</td><td>低</td><td>SNS画像、プレゼン、チラシ</td><td>共有・コメント機能</td></tr>
<tr><td><strong>Adobe CC</strong></td><td>月額7,780円〜</td><td>高</td><td>プロフェッショナル制作全般</td><td>Creative Cloudライブラリ</td></tr>
<tr><td><strong>Sketch</strong></td><td>月額$10〜</td><td>中</td><td>UIデザイン（Mac専用）</td><td>限定的</td></tr>
<tr><td><strong>InVision</strong></td><td>無料〜</td><td>低〜中</td><td>プロトタイプ、ホワイトボード</td><td>チームコラボレーション</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">ツール選びの指針</div>
<ul>
<li><strong>UIデザインをチームで行うなら:</strong> Figma一択</li>
<li><strong>非デザイナーが素早く作りたいなら:</strong> Canva</li>
<li><strong>写真のレタッチや高度な画像編集なら:</strong> Photoshop</li>
<li><strong>ロゴやアイコンのベクター制作なら:</strong> Illustrator</li>
<li><strong>動画編集なら:</strong> Premiere Pro（プロ向け）/ CapCut（簡易向け）</li>
</ul>
</div>

<h2>デザイン素材サイト一覧</h2>
<p>クオリティの高いクリエイティブ制作には、良質な素材が欠かせません。以下は実務でよく使われる素材サイトです。</p>

<table>
<tr><th>サイト名</th><th>素材種類</th><th>ライセンス</th><th>特徴</th></tr>
<tr><td><strong>Unsplash</strong></td><td>写真</td><td>無料（商用可）</td><td>高品質な写真素材。クレジット表記推奨</td></tr>
<tr><td><strong>Pexels</strong></td><td>写真・動画</td><td>無料（商用可）</td><td>写真と動画素材が豊富。クレジット不要</td></tr>
<tr><td><strong>Pixabay</strong></td><td>写真・イラスト・動画</td><td>無料（商用可）</td><td>多種多様な素材を網羅</td></tr>
<tr><td><strong>Adobe Stock</strong></td><td>写真・動画・テンプレート</td><td>有料</td><td>Adobe CC統合、高品質でバリエーション豊富</td></tr>
<tr><td><strong>Shutterstock</strong></td><td>写真・動画・音楽</td><td>有料</td><td>世界最大級のストックフォトサービス</td></tr>
<tr><td><strong>unDraw</strong></td><td>イラスト</td><td>無料（商用可）</td><td>テック系フラットイラスト。色変更可能</td></tr>
<tr><td><strong>Font Awesome</strong></td><td>アイコン</td><td>無料/有料</td><td>Webアイコンフォントの定番</td></tr>
<tr><td><strong>Google Fonts</strong></td><td>フォント</td><td>無料（商用可）</td><td>Webフォントの定番。日本語フォントも対応</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">素材利用時の注意点</div>
無料素材でもライセンスの確認は必須です。特に以下の点に注意してください。
<ul>
<li><strong>商用利用:</strong> 商用利用が許可されているか確認する</li>
<li><strong>加工の可否:</strong> 素材の改変が認められているか</li>
<li><strong>クレジット表記:</strong> 著作者のクレジット表記が必要かどうか</li>
<li><strong>モデルリリース:</strong> 人物写真の場合、肖像権の処理がされているか</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q504_1",
                    type: "choice",
                    question: "Figmaの3大機能に含まれないものはどれですか？",
                    options: ["フレーム", "コンポーネント", "レイヤーマスク", "オートレイアウト"],
                    answer: 2,
                    explanation: "Figmaの3大機能はフレーム、コンポーネント、オートレイアウトです。レイヤーマスクはFigmaにも機能としてありますが、3大機能には含まれません。"
                },
                {
                    id: "q504_2",
                    type: "choice",
                    question: "ベクター画像の制作（ロゴ、アイコン等）に最適なAdobe製品はどれですか？",
                    options: ["Photoshop", "Illustrator", "InDesign", "After Effects"],
                    answer: 1,
                    explanation: "Illustratorはベクター画像の作成に特化したツールで、ロゴやアイコンなど拡大縮小しても劣化しないグラフィックの制作に最適です。"
                },
                {
                    id: "q504_3",
                    type: "choice",
                    question: "以下のデザイン素材サイトのうち、有料のサービスはどれですか？",
                    options: ["Unsplash", "Pexels", "unDraw", "Adobe Stock"],
                    answer: 3,
                    explanation: "Adobe Stockは有料のストックフォトサービスです。Unsplash、Pexels、unDrawは無料で商用利用可能な素材サイトです。"
                },
                {
                    id: "q504_4",
                    type: "fill",
                    question: "FigmaのオートレイアウトはCSSのどの概念に相当しますか？（英語で）",
                    answer: "Flexbox",
                    explanation: "FigmaのオートレイアウトはCSSのFlexboxに相当する概念で、要素の自動配置・整列を行い、レスポンシブなデザインを効率的に作成できます。"
                }
            ]
        }
    ]
};
