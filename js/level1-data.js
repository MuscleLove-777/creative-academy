/* ============================================
   Level 1: デザインの基礎
   ============================================ */
const LEVEL1_DATA = {
    id: 1,
    title: "デザインの基礎",
    icon: "🎨",
    description: "デザインの4大原則、色彩理論、タイポグラフィ、構図の基本を学ぶ",
    modules: [
        {
            id: 101,
            title: "デザインの4大原則",
            duration: "15分",
            content: `
<h2>CRAP原則とは</h2>
<p>デザインの基礎を学ぶうえで最も重要なのが、<strong>CRAP原則</strong>です。これはデザイナーのRobin Williamsが提唱した4つの基本原則で、あらゆるデザインに適用できます。</p>

<div class="info-box tip">
<div class="info-box-title">CRAP原則</div>
<ul>
<li><strong>C</strong> = Contrast（コントラスト）</li>
<li><strong>R</strong> = Repetition（反復）</li>
<li><strong>A</strong> = Alignment（整列）</li>
<li><strong>P</strong> = Proximity（近接）</li>
</ul>
この4つを意識するだけで、デザインの品質は劇的に向上します。
</div>

<h3>1. Contrast（コントラスト）</h3>
<p>コントラストとは、<strong>異なる要素の差をはっきりさせること</strong>です。中途半端な差は混乱を招きます。やるなら大胆に差をつけましょう。</p>

<table>
<tr><th>要素</th><th>Before（悪い例）</th><th>After（良い例）</th></tr>
<tr><td>文字サイズ</td><td>見出し16px / 本文14px</td><td>見出し32px / 本文14px</td></tr>
<tr><td>色</td><td>薄いグレーの背景に中間グレーの文字</td><td>白い背景に濃い黒の文字</td></tr>
<tr><td>太さ</td><td>見出しRegular / 本文Regular</td><td>見出しBold / 本文Regular</td></tr>
<tr><td>形状</td><td>似た大きさの四角が並ぶ</td><td>大きな画像と小さなテキストブロック</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">よくある失敗</div>
コントラストが弱いと、ユーザーは何が重要なのか判断できません。「少しだけ違う」は「同じ」に見えます。差をつけるなら思い切って変えましょう。
</div>

<h3>2. Repetition（反復）</h3>
<p>反復とは、<strong>デザイン要素を繰り返し使うこと</strong>で一貫性を持たせることです。色、フォント、レイアウトパターン、アイコンスタイルなどを統一することで、デザイン全体にまとまりが生まれます。</p>
<ul>
<li>見出しのスタイル（色・サイズ・フォント）を全ページで統一する</li>
<li>ボタンの形状や色を一貫させる</li>
<li>余白のパターンを繰り返す（例: セクション間は常に48px）</li>
<li>同じアイコンセットを使い続ける</li>
</ul>

<h3>3. Alignment（整列）</h3>
<p>整列とは、<strong>ページ上のすべての要素を意図的に配置すること</strong>です。何一つ「なんとなく」置いてはいけません。</p>

<table>
<tr><th>Before（悪い例）</th><th>After（良い例）</th></tr>
<tr><td>テキストが左揃え・中央揃え・右揃え混在</td><td>基本は左揃えで統一、強調時のみ中央揃え</td></tr>
<tr><td>画像やボタンが微妙にずれている</td><td>グリッドに沿って正確に配置</td></tr>
<tr><td>見えない線（軸）がバラバラ</td><td>強い軸を1つ決めて、全要素をそこに揃える</td></tr>
</table>

<h3>4. Proximity（近接）</h3>
<p>近接とは、<strong>関連する要素を近くに配置し、無関係な要素を離すこと</strong>です。空間的な距離が、情報の関連性を視覚的に伝えます。</p>
<ul>
<li>ラベルとフォーム入力欄は近づける</li>
<li>セクションとセクションの間は広く空ける</li>
<li>画像とそのキャプションは密接させる</li>
<li>関連するナビゲーション項目はグループ化する</li>
</ul>

<h2>グリッドシステム</h2>
<p>グリッドシステムとは、<strong>ページを均等な列に分割して要素を配置する仕組み</strong>です。プロのデザインが整って見える最大の理由がグリッドの活用です。</p>

<table>
<tr><th>グリッド種類</th><th>用途</th><th>特徴</th></tr>
<tr><td>12カラムグリッド</td><td>Webデザイン全般</td><td>最も汎用的。2/3/4/6分割が可能</td></tr>
<tr><td>8カラムグリッド</td><td>雑誌・エディトリアル</td><td>印刷物で多用される</td></tr>
<tr><td>モジュラーグリッド</td><td>複雑なレイアウト</td><td>列だけでなく行も定義する</td></tr>
<tr><td>ベースライングリッド</td><td>タイポグラフィ</td><td>テキストの行間を揃える</td></tr>
</table>

<h2>余白（ホワイトスペース）の重要性</h2>
<p>余白は「何もない空間」ではなく、<strong>情報を整理し、視線を誘導する能動的なデザイン要素</strong>です。</p>

<div class="info-box tip">
<div class="info-box-title">余白の効果</div>
<ul>
<li><strong>可読性の向上:</strong> テキスト周囲の余白は読みやすさを大幅に改善する</li>
<li><strong>高級感の演出:</strong> 余白が多いデザインはラグジュアリーな印象を与える</li>
<li><strong>注目の集中:</strong> 周囲に余白を置くと、要素が際立つ</li>
<li><strong>情報の整理:</strong> グループ間の余白が情報構造を明確にする</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q101_1",
                    type: "choice",
                    question: "CRAP原則の「C」は何を表しますか？",
                    options: ["Color（色彩）", "Contrast（コントラスト）", "Composition（構図）", "Consistency（一貫性）"],
                    answer: 1,
                    explanation: "CRAP原則のCはContrast（コントラスト）です。異なる要素の差をはっきりさせることを意味します。"
                },
                {
                    id: "q101_2",
                    type: "choice",
                    question: "近接（Proximity）の原則として正しいものはどれですか？",
                    options: ["要素を等間隔に配置する", "関連する要素を近くに、無関係な要素を離す", "すべての要素を中央に寄せる", "要素を大小交互に配置する"],
                    answer: 1,
                    explanation: "近接の原則は、関連する情報を近くに配置し、無関係な情報は離すことで、情報の関連性を視覚的に伝えます。"
                },
                {
                    id: "q101_3",
                    type: "choice",
                    question: "Webデザインで最も汎用的に使われるグリッドシステムはどれですか？",
                    options: ["4カラムグリッド", "8カラムグリッド", "12カラムグリッド", "16カラムグリッド"],
                    answer: 2,
                    explanation: "12カラムグリッドが最も汎用的です。2分割、3分割、4分割、6分割など柔軟なレイアウトが可能です。"
                },
                {
                    id: "q101_4",
                    type: "fill",
                    question: "CRAP原則を提唱したデザイナーの名前は？（フルネーム・英語で）",
                    answer: "Robin Williams",
                    explanation: "Robin Williamsは著書『The Non-Designer's Design Book』でCRAP原則を広く知らしめました。"
                }
            ]
        },
        {
            id: 102,
            title: "色彩理論とカラーデザイン",
            duration: "18分",
            content: `
<h2>色相環（カラーホイール）</h2>
<p>色彩理論の基礎となるのが<strong>色相環</strong>です。12色の色相環を理解することで、美しい配色を論理的に作れるようになります。</p>

<table>
<tr><th>分類</th><th>色名</th><th>色相角度</th></tr>
<tr><td>原色（Primary）</td><td>赤・黄・青</td><td>0° / 60° / 240°</td></tr>
<tr><td>二次色（Secondary）</td><td>橙・緑・紫</td><td>30° / 120° / 300°</td></tr>
<tr><td>三次色（Tertiary）</td><td>赤橙・黄橙・黄緑・青緑・青紫・赤紫</td><td>各中間</td></tr>
</table>

<h2>配色パターン</h2>
<p>色相環上の位置関係で配色パターンが決まります。それぞれに特徴があり、目的に応じて使い分けます。</p>

<table>
<tr><th>配色パターン</th><th>色相環上の関係</th><th>特徴</th><th>使用例</th></tr>
<tr><td>補色（Complementary）</td><td>正反対の2色</td><td>最も強いコントラスト</td><td>CTAボタン、注意喚起</td></tr>
<tr><td>類似色（Analogous）</td><td>隣り合う3色</td><td>調和的で自然な印象</td><td>風景写真、ナチュラル系</td></tr>
<tr><td>トライアド（Triadic）</td><td>等間隔の3色</td><td>バランスの取れた鮮やかさ</td><td>子供向け、ポップなデザイン</td></tr>
<tr><td>スプリット補色</td><td>補色の両隣2色+基準色</td><td>補色より柔らかいコントラスト</td><td>ブランドカラー</td></tr>
<tr><td>モノクロマティック</td><td>同一色相の濃淡</td><td>統一感・洗練された印象</td><td>高級ブランド、ミニマル</td></tr>
</table>

<h2>色の三属性：HSB / RGB / CMYK</h2>

<h3>HSB（色相・彩度・明度）</h3>
<p>人間の色知覚に最も近いカラーモデルで、<strong>デザイン作業で最も直感的</strong>に使えます。</p>
<ul>
<li><strong>H（Hue / 色相）:</strong> 色相環上の位置（0°〜360°）</li>
<li><strong>S（Saturation / 彩度）:</strong> 色の鮮やかさ（0%〜100%）</li>
<li><strong>B（Brightness / 明度）:</strong> 色の明るさ（0%〜100%）</li>
</ul>

<h3>RGB（光の三原色）</h3>
<p><strong>画面表示用</strong>のカラーモデルです。赤・緑・青の光を混ぜて色を表現します（加法混色）。</p>

<h3>CMYK（色の三原色+黒）</h3>
<p><strong>印刷用</strong>のカラーモデルです。シアン・マゼンタ・イエロー・キー（黒）のインクを混ぜて色を表現します（減法混色）。</p>

<div class="info-box warning">
<div class="info-box-title">RGB vs CMYKの注意</div>
画面で見る色（RGB）と印刷した色（CMYK）は異なります。特にRGBの鮮やかな青や緑はCMYKでは再現できないことが多いです。印刷物のデザインでは必ずCMYKモードで作業しましょう。
</div>

<h2>カラーユニバーサルデザイン</h2>
<p>日本人男性の約5%（20人に1人）は色覚多様性を持っています。<strong>色だけに頼らない情報伝達</strong>が重要です。</p>
<ul>
<li>色に加えて、形状やパターンでも区別できるようにする</li>
<li>赤と緑の組み合わせを避ける（P型・D型色覚では区別困難）</li>
<li>コントラスト比を十分に確保する（WCAG 2.1: テキスト4.5:1以上）</li>
<li>色覚シミュレーションツールで確認する</li>
</ul>

<h2>ブランドカラー設計</h2>
<p>ブランドカラーは<strong>企業やサービスの第一印象を決める</strong>重要な要素です。色には心理的効果があり、戦略的に選ぶ必要があります。</p>

<table>
<tr><th>色</th><th>心理効果</th><th>業界での使用例</th></tr>
<tr><td>赤</td><td>情熱・緊急性・エネルギー</td><td>飲食（コカコーラ）、EC（楽天）</td></tr>
<tr><td>青</td><td>信頼・安定・知性</td><td>金融（みずほ）、IT（Facebook）</td></tr>
<tr><td>緑</td><td>自然・健康・安心</td><td>環境（Whole Foods）、金融（ゆうちょ）</td></tr>
<tr><td>黄</td><td>楽しさ・注意・親しみ</td><td>通信（カカオトーク）、飲食（マクドナルド）</td></tr>
<tr><td>紫</td><td>高級感・創造性・神秘</td><td>美容（ANNA SUI）、配送（FedEx）</td></tr>
<tr><td>黒</td><td>洗練・高級・権威</td><td>ファッション（CHANEL）、車（Mercedes）</td></tr>
<tr><td>白</td><td>清潔・シンプル・純粋</td><td>テクノロジー（Apple）、医療</td></tr>
<tr><td>橙</td><td>活力・友好・冒険</td><td>EC（Amazon）、エンタメ（Nickelodeon）</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">配色の60-30-10ルール</div>
効果的な配色の黄金比は <strong>60% : 30% : 10%</strong> です。
<ul>
<li><strong>60%:</strong> ベースカラー（背景・大面積）</li>
<li><strong>30%:</strong> サブカラー（補助的な要素）</li>
<li><strong>10%:</strong> アクセントカラー（CTA・強調要素）</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q102_1",
                    type: "choice",
                    question: "色相環で正反対に位置する2色の関係を何と呼びますか？",
                    options: ["類似色", "トライアド", "補色", "モノクロマティック"],
                    answer: 2,
                    explanation: "色相環で正反対に位置する2色の関係を補色（Complementary）と呼びます。最も強いコントラストが生まれます。"
                },
                {
                    id: "q102_2",
                    type: "choice",
                    question: "印刷用のカラーモデルはどれですか？",
                    options: ["RGB", "HSB", "CMYK", "HEX"],
                    answer: 2,
                    explanation: "CMYKはシアン・マゼンタ・イエロー・キー（黒）のインクを混ぜて色を表現する印刷用カラーモデルです。"
                },
                {
                    id: "q102_3",
                    type: "choice",
                    question: "配色の60-30-10ルールで、10%に該当するのはどれですか？",
                    options: ["ベースカラー", "サブカラー", "アクセントカラー", "ニュートラルカラー"],
                    answer: 2,
                    explanation: "10%はアクセントカラーです。CTAボタンや強調要素など、最も目立たせたい部分に使います。"
                },
                {
                    id: "q102_4",
                    type: "fill",
                    question: "WCAG 2.1で通常テキストに求められる最低コントラスト比は？（数字:1の形式で）",
                    answer: "4.5:1",
                    explanation: "WCAG 2.1では通常テキストのコントラスト比は4.5:1以上が求められます。大きな文字は3:1以上です。"
                }
            ]
        },
        {
            id: 103,
            title: "タイポグラフィの基本",
            duration: "15分",
            content: `
<h2>フォントの分類</h2>
<p>フォントは大きく5つのカテゴリに分類されます。それぞれの特徴を理解し、目的に合ったフォントを選ぶことが重要です。</p>

<table>
<tr><th>分類</th><th>特徴</th><th>代表例</th><th>適した用途</th></tr>
<tr><td>セリフ（Serif）</td><td>文字の端に小さな飾り（セリフ）がある</td><td>Times New Roman, Georgia, 明朝体</td><td>書籍・論文・フォーマルな文書</td></tr>
<tr><td>サンセリフ（Sans-serif）</td><td>セリフがないシンプルな形状</td><td>Helvetica, Arial, ゴシック体</td><td>Web・UI・モダンなデザイン</td></tr>
<tr><td>スクリプト（Script）</td><td>手書き・筆記体のような形状</td><td>Brush Script, Pacifico</td><td>招待状・ロゴ・装飾的な用途</td></tr>
<tr><td>ディスプレイ（Display）</td><td>装飾的で目立つ形状</td><td>Impact, Cooper Black</td><td>見出し・ポスター・タイトル</td></tr>
<tr><td>等幅（Monospace）</td><td>全文字が同じ幅</td><td>Courier, Consolas</td><td>コード表示・技術文書</td></tr>
</table>

<h2>フォント解剖学（Anatomy of Type）</h2>
<p>フォントの各部分には専門用語があります。デザイナー間のコミュニケーションに必要な基本用語を押さえましょう。</p>
<ul>
<li><strong>ベースライン（Baseline）:</strong> 文字が載る基準線</li>
<li><strong>エックスハイト（x-height）:</strong> 小文字xの高さ。可読性に大きく影響する</li>
<li><strong>アセンダー（Ascender）:</strong> エックスハイトより上に伸びる部分（b, d, hなど）</li>
<li><strong>ディセンダー（Descender）:</strong> ベースラインより下に伸びる部分（g, p, yなど）</li>
<li><strong>カウンター（Counter）:</strong> 文字の囲まれた空間（o, e, aの内側）</li>
<li><strong>カーニング（Kerning）:</strong> 特定の文字ペア間のスペース調整</li>
<li><strong>トラッキング（Tracking）:</strong> 文字列全体の文字間隔</li>
<li><strong>リーディング（Leading）:</strong> 行間の高さ（行送り）</li>
</ul>

<h2>可読性（Readability）と視認性（Legibility）</h2>

<div class="info-box formula">
<div class="info-box-title">可読性 vs 視認性</div>
<ul>
<li><strong>視認性（Legibility）:</strong> 個々の文字をどれだけ区別しやすいか → フォント自体の性質</li>
<li><strong>可読性（Readability）:</strong> テキスト全体をどれだけ楽に読めるか → フォント選択+組版の結果</li>
</ul>
</div>

<h3>可読性を高めるポイント</h3>
<table>
<tr><th>要素</th><th>推奨値</th><th>理由</th></tr>
<tr><td>本文フォントサイズ</td><td>16px以上（Web）</td><td>小さすぎると目が疲れる</td></tr>
<tr><td>行間（line-height）</td><td>1.5〜1.8倍</td><td>広すぎても狭すぎても読みにくい</td></tr>
<tr><td>1行の文字数</td><td>40〜60文字（欧文）/ 25〜35文字（和文）</td><td>長すぎると行を見失う</td></tr>
<tr><td>段落間の余白</td><td>本文サイズの1〜1.5倍</td><td>段落の区切りが明確になる</td></tr>
</table>

<h2>日本語フォント</h2>
<p>日本語フォントは欧文フォントとは異なる特徴と課題があります。</p>

<h3>和文フォントの基本分類</h3>
<ul>
<li><strong>明朝体:</strong> セリフ体に対応。横画が細く縦画が太い。可読性が高く長文向き</li>
<li><strong>ゴシック体:</strong> サンセリフ体に対応。線の太さが均一。視認性が高くUI・見出し向き</li>
<li><strong>丸ゴシック体:</strong> ゴシック体の角を丸めた形。柔らかい印象で子供向け・カジュアルな場面に</li>
<li><strong>教科書体:</strong> 手書きに近い形。教育用途に使用</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">日本語フォントの注意点</div>
日本語フォントは漢字・ひらがな・カタカナで数千〜数万文字を含むため、<strong>ファイルサイズが非常に大きい</strong>（1書体で数MB〜数十MB）です。Webで使用する場合は、サブセット化やCDNの利用が必須です。
</div>

<h2>Webフォント</h2>
<p>Webフォントを使うことで、ユーザーの端末にインストールされていないフォントもWebサイトで表示できます。</p>
<ul>
<li><strong>Google Fonts:</strong> 無料で使える最大のWebフォントサービス。日本語フォントも充実（Noto Sans JPなど）</li>
<li><strong>Adobe Fonts:</strong> Adobe Creative Cloudユーザーが使えるフォントサービス</li>
<li><strong>フォントフォーマット:</strong> WOFF2が最も軽量で推奨。ブラウザ対応も十分</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">Webフォント選びのコツ</div>
<ul>
<li>本文用は<strong>Noto Sans JP</strong>が安定した選択肢（可読性・ウェイト豊富）</li>
<li>必要なウェイトだけ読み込む（Regular + Boldで十分なことが多い）</li>
<li>font-display: swap; でFOIT（Flash of Invisible Text）を防ぐ</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q103_1",
                    type: "choice",
                    question: "文字の端に小さな飾りがあるフォント分類はどれですか？",
                    options: ["サンセリフ", "セリフ", "スクリプト", "等幅"],
                    answer: 1,
                    explanation: "セリフ（Serif）は文字の端にセリフと呼ばれる小さな飾りがあるフォントです。Times New Romanや明朝体がこれに該当します。"
                },
                {
                    id: "q103_2",
                    type: "choice",
                    question: "フォント用語で、特定の文字ペア間のスペースを調整することを何と呼びますか？",
                    options: ["トラッキング", "リーディング", "カーニング", "ベースライン"],
                    answer: 2,
                    explanation: "カーニング（Kerning）は特定の文字ペア間のスペースを調整することです。文字列全体の文字間隔を調整するのはトラッキングです。"
                },
                {
                    id: "q103_3",
                    type: "choice",
                    question: "Web上で推奨されるフォントフォーマットはどれですか？",
                    options: ["OTF", "TTF", "WOFF", "WOFF2"],
                    answer: 3,
                    explanation: "WOFF2が最も軽量で、現在のブラウザ対応も十分なため推奨されます。"
                },
                {
                    id: "q103_4",
                    type: "fill",
                    question: "小文字xの高さを基準とするフォント用語は？（英語で）",
                    answer: "x-height",
                    explanation: "x-height（エックスハイト）は小文字xの高さで、フォントの可読性に大きく影響する重要な指標です。"
                }
            ]
        },
        {
            id: 104,
            title: "構図とビジュアルヒエラルキー",
            duration: "15分",
            content: `
<h2>構図の基本法則</h2>
<p>構図とは、<strong>画面内に要素をどう配置するか</strong>を決めるルールです。優れた構図は見る人の視線を自然に誘導し、メッセージを効果的に伝えます。</p>

<h3>三分割法（Rule of Thirds）</h3>
<p>画面を縦横3等分する線の<strong>交点に重要な要素を配置</strong>する手法です。最もシンプルで効果的な構図法則のひとつです。</p>
<ul>
<li>写真撮影で最も基本的なテクニック</li>
<li>被写体を中央に置くより動きや緊張感が生まれる</li>
<li>交点は4つあり、最も重要な要素を左上か右上に配置するのが一般的</li>
</ul>

<h3>黄金比（Golden Ratio）</h3>
<p>黄金比は <strong>1 : 1.618</strong> の比率で、自然界にも多く存在する「美しい比率」です。</p>

<div class="info-box formula">
<div class="info-box-title">黄金比の数値</div>
<strong>1 : 1.618（約 5 : 8）</strong>
<br><br>
黄金比に基づく長方形は、正方形を切り取ると残りが再び黄金比の長方形になるという特性があります。この性質から黄金螺旋（フィボナッチスパイラル）が生まれます。
</div>

<h3>フィボナッチ数列と黄金螺旋</h3>
<p>フィボナッチ数列（1, 1, 2, 3, 5, 8, 13, 21...）に基づく螺旋を構図に活用できます。<strong>螺旋の中心に最も重要な要素</strong>を配置し、螺旋に沿って視線を誘導します。</p>
<ul>
<li>Appleの製品写真やロゴデザインでも活用されている</li>
<li>三分割法より洗練された構図になるが、適用は難しい</li>
</ul>

<h2>視線誘導パターン</h2>

<h3>Z型パターン</h3>
<p>視線が<strong>左上→右上→左下→右下</strong>とZ字型に動くパターンです。テキストが少ないページ（ランディングページ、広告等）で有効です。</p>
<ul>
<li>左上にロゴ・ブランド名を配置</li>
<li>右上にナビゲーション・CTAを配置</li>
<li>中央の対角線上にメインビジュアルを配置</li>
<li>右下にCTA（行動喚起）ボタンを配置</li>
</ul>

<h3>F型パターン</h3>
<p>視線が<strong>左上から右に、次の行も左から右に</strong>と、F字型に動くパターンです。テキスト量の多いページ（ブログ、ニュースサイト等）で自然に発生します。</p>
<ul>
<li>最初の数行はしっかり読まれる</li>
<li>下に行くほど左側しか見られなくなる</li>
<li>重要な情報は左側・上部に配置する</li>
</ul>

<h2>ビジュアルヒエラルキー</h2>
<p>ビジュアルヒエラルキーとは、<strong>デザイン要素の重要度に視覚的な優先順位</strong>をつけることです。ユーザーが情報を瞬時に理解できるよう、以下の手法で階層を作ります。</p>

<table>
<tr><th>手法</th><th>効果</th><th>使用例</th></tr>
<tr><td>サイズ</td><td>大きい要素ほど重要に見える</td><td>見出しを本文の2倍以上にする</td></tr>
<tr><td>色・コントラスト</td><td>目立つ色は注目を集める</td><td>CTAボタンを鮮やかな色にする</td></tr>
<tr><td>位置</td><td>上・左にある要素が先に見られる</td><td>最重要情報をファーストビューに</td></tr>
<tr><td>余白</td><td>余白で囲まれた要素は際立つ</td><td>キャッチコピーの周囲に余白を確保</td></tr>
<tr><td>太さ・ウェイト</td><td>太い文字は重要感を演出</td><td>見出しはBold、本文はRegular</td></tr>
</table>

<h2>ネガティブスペース（余白の活用）</h2>
<p>ネガティブスペースとは、<strong>デザイン要素が存在しない空間</strong>のことです。単なる「空き」ではなく、積極的にデザインに活用できます。</p>
<ul>
<li>FedExのロゴに隠された矢印（EとXの間のネガティブスペース）</li>
<li>余白を広く取ることで高級感・洗練された印象を演出</li>
<li>情報の区切りとして機能（罫線の代わりに余白で区切る）</li>
</ul>

<h2>ゲシュタルトの法則</h2>
<p>人間の脳は視覚情報を自動的にグループ化して認識します。この心理法則をデザインに活用しましょう。</p>

<table>
<tr><th>法則</th><th>内容</th><th>デザインへの応用</th></tr>
<tr><td>近接の法則</td><td>近くにある要素はグループとして認識される</td><td>関連情報をまとめて配置する</td></tr>
<tr><td>類似の法則</td><td>似た形・色・サイズの要素はグループとして認識される</td><td>同じカテゴリのアイテムを同じスタイルにする</td></tr>
<tr><td>閉合の法則</td><td>不完全な形でも脳が補完して完全な形として認識する</td><td>ロゴデザインで一部を省略して洗練させる</td></tr>
<tr><td>連続の法則</td><td>視線は滑らかな線や曲線に沿って流れる</td><td>要素を曲線的に配置して視線を誘導する</td></tr>
<tr><td>図と地の法則</td><td>前景（図）と背景（地）を区別して認識する</td><td>ネガティブスペースを活用したロゴデザイン</td></tr>
<tr><td>共通運命の法則</td><td>同じ方向に動く要素はグループとして認識される</td><td>アニメーションでグループ感を演出する</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">構図のまとめ</div>
構図の法則は「絶対的なルール」ではなく「ガイドライン」です。まずは三分割法やZ型パターンを意識的に使い、慣れてきたら意図的にルールを破ることで、より印象的なデザインを生み出すことができます。
</div>
            `,
            quiz: [
                {
                    id: "q104_1",
                    type: "choice",
                    question: "黄金比の比率として正しいものはどれですか？",
                    options: ["1 : 1.414", "1 : 1.500", "1 : 1.618", "1 : 1.732"],
                    answer: 2,
                    explanation: "黄金比は1 : 1.618の比率です。自然界にも多く存在し、「最も美しい比率」とされています。"
                },
                {
                    id: "q104_2",
                    type: "choice",
                    question: "テキスト量の多いWebページで自然に発生する視線パターンはどれですか？",
                    options: ["Z型パターン", "F型パターン", "S型パターン", "O型パターン"],
                    answer: 1,
                    explanation: "F型パターンはテキスト量の多いページ（ブログ、ニュースサイト等）で自然に発生する視線パターンです。"
                },
                {
                    id: "q104_3",
                    type: "choice",
                    question: "ゲシュタルトの法則で、近くにある要素がグループとして認識される法則を何と呼びますか？",
                    options: ["類似の法則", "閉合の法則", "近接の法則", "連続の法則"],
                    answer: 2,
                    explanation: "近接の法則は、物理的に近くにある要素をグループとして認識するという心理法則です。CRAP原則のProximityにも通じます。"
                },
                {
                    id: "q104_4",
                    type: "fill",
                    question: "画面を縦横3等分し、交点に重要な要素を配置する構図法則を何と呼びますか？（日本語で）",
                    answer: "三分割法",
                    explanation: "三分割法（Rule of Thirds）は最もシンプルで効果的な構図法則のひとつで、写真撮影の基本テクニックです。"
                }
            ]
        }
    ]
};
