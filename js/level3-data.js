/* ============================================
   Level 3: グラフィックデザイン実践
   ============================================ */
const LEVEL3_DATA = {
    id: 3,
    title: "グラフィックデザイン実践",
    icon: "🖌️",
    description: "バナー・SNS・プレゼン・ロゴなど、実務で求められるグラフィックデザインスキルを習得する",
    modules: [
        {
            id: 301,
            title: "バナー・広告デザイン",
            duration: "20分",
            content: `
<h2>バナーデザインの基本構成</h2>
<p>Web広告やディスプレイ広告で使われるバナーは、限られたスペースで<strong>ユーザーの注意を引き、行動を促す</strong>ことが求められます。効果的なバナーは4つの要素で構成されています。</p>

<div class="info-box tip">
<div class="info-box-title">バナーの4大構成要素</div>
<ol>
<li><strong>キャッチコピー:</strong> 一目で伝わるメッセージ。短く、具体的に、ベネフィットを訴求する</li>
<li><strong>ビジュアル:</strong> 商品画像やイメージ写真。視線を集める中心要素</li>
<li><strong>CTA（Call To Action）:</strong> 「今すぐ申し込む」「詳しくはこちら」などの行動喚起ボタン</li>
<li><strong>ロゴ・ブランド要素:</strong> 企業やサービスの信頼性を担保するブランドマーク</li>
</ol>
</div>

<h2>主要バナーサイズ一覧</h2>
<p>Google広告やSNS広告で使用される代表的なバナーサイズを把握しておきましょう。</p>

<table>
<tr><th>名称</th><th>サイズ（px）</th><th>用途</th><th>特徴</th></tr>
<tr><td>レクタングル（中）</td><td>300 x 250</td><td>ディスプレイ広告</td><td>最も汎用性が高い定番サイズ</td></tr>
<tr><td>レクタングル（大）</td><td>336 x 280</td><td>ディスプレイ広告</td><td>中より視認性が高い</td></tr>
<tr><td>リーダーボード</td><td>728 x 90</td><td>ページ上部・下部</td><td>横長でヘッダー/フッター向き</td></tr>
<tr><td>スカイスクレイパー</td><td>160 x 600</td><td>サイドバー</td><td>縦長でサイドバーに最適</td></tr>
<tr><td>モバイルバナー</td><td>320 x 50</td><td>スマホ広告</td><td>モバイルの標準サイズ</td></tr>
<tr><td>モバイルインタースティシャル</td><td>320 x 480</td><td>スマホ全画面</td><td>高いインパクト</td></tr>
<tr><td>ビルボード</td><td>970 x 250</td><td>ページ上部</td><td>大型で注目度が高い</td></tr>
</table>

<h2>CTAボタンのデザイン</h2>
<p>CTAボタンはバナーの<strong>コンバージョン率を左右する最重要要素</strong>です。クリックしたくなるボタンには共通のデザイン原則があります。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>コントラストを強くする</strong>
背景色に対して目立つ色を選ぶ。補色関係（例：青い背景にオレンジのボタン）が効果的。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>具体的な動詞を使う</strong>
「こちら」ではなく「無料で試す」「今すぐダウンロード」のように具体的なアクションを明示する。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>十分な余白を確保する</strong>
ボタンの周囲に余白を設けることで視認性が上がり、クリック率が向上する。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>緊急性を加える</strong>
「期間限定」「残りわずか」「本日23:59まで」などの限定感がクリック率を高める。
</div>
</div>
</div>

<h2>視線誘導テクニック</h2>
<p>ユーザーの視線を意図した順序で誘導することで、バナーの伝達効率を最大化できます。</p>

<h3>Z型レイアウト</h3>
<p>横書きのコンテンツでは、ユーザーの視線は<strong>左上 → 右上 → 左下 → 右下</strong>の順に「Z」の形で動きます。重要な情報をこの動線上に配置しましょう。</p>
<ul>
<li><strong>左上:</strong> ロゴやブランド名（最初に目に入る）</li>
<li><strong>右上:</strong> キャッチコピーの補足情報</li>
<li><strong>中央:</strong> メインビジュアル</li>
<li><strong>右下:</strong> CTAボタン（最後にアクションへ導く）</li>
</ul>

<h3>F型レイアウト</h3>
<p>テキストが多いコンテンツでは、視線は<strong>「F」の形</strong>で動きます。上部の横ラインと左側の縦ラインに重要情報を配置します。</p>

<h2>Good / Bad デザイン比較</h2>

<div class="info-box warning">
<div class="info-box-title">Bad: やりがちな失敗バナー</div>
<ul>
<li>文字が小さすぎて読めない（特にスマホ表示時）</li>
<li>要素を詰め込みすぎて余白がない</li>
<li>CTAボタンが背景に埋もれて目立たない</li>
<li>フォントを3種類以上使って統一感がない</li>
<li>画像が低解像度でぼやけている</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">Good: 効果的なバナーの特徴</div>
<ul>
<li>メッセージが1つに絞られている</li>
<li>キャッチコピーは15文字以内で明確</li>
<li>CTAボタンが一目で分かる配色と大きさ</li>
<li>余白を活かしたすっきりしたレイアウト</li>
<li>ブランドカラーで統一されたデザイン</li>
</ul>
</div>

<div class="info-box tip">
<div class="info-box-title">実務Tips</div>
A/Bテストでバナーの効果を比較検証しましょう。キャッチコピー、CTAの文言、配色などを1要素ずつ変えてテストすることで、データに基づいたデザイン改善ができます。クリック率（CTR）が0.1%変わるだけでも、大量配信では大きな差になります。
</div>
            `,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "バナーデザインの4大構成要素に含まれないものはどれですか？",
                    options: ["キャッチコピー", "CTA（行動喚起）", "ナビゲーションメニュー", "ロゴ・ブランド要素"],
                    answer: 2,
                    explanation: "バナーの4大構成要素はキャッチコピー、ビジュアル、CTA、ロゴ・ブランド要素です。ナビゲーションメニューはWebサイトの要素であり、バナーには含まれません。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "最も汎用性が高い定番のバナーサイズはどれですか？",
                    options: ["728 x 90", "300 x 250", "160 x 600", "320 x 50"],
                    answer: 1,
                    explanation: "300 x 250（レクタングル中）は最も汎用性が高い定番バナーサイズです。ほぼすべてのWebサイトの広告枠に対応しています。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "Z型レイアウトでCTAボタンを配置するのに最も適した位置はどこですか？",
                    options: ["左上", "中央", "左下", "右下"],
                    answer: 3,
                    explanation: "Z型レイアウトでは視線が左上→右上→左下→右下の順に動きます。最後に視線が到達する右下にCTAボタンを配置することで、自然な流れでアクションへ導けます。"
                },
                {
                    id: "q301_4",
                    type: "fill",
                    question: "バナーに設置する行動喚起ボタンのことを、アルファベット3文字で何と呼びますか？",
                    answer: "CTA",
                    explanation: "CTA（Call To Action）は「行動喚起」を意味し、ユーザーにクリックなどの具体的な行動を促すボタンや要素を指します。"
                }
            ]
        },
        {
            id: 302,
            title: "SNSクリエイティブデザイン",
            duration: "20分",
            content: `
<h2>各SNSの推奨画像サイズ</h2>
<p>SNSごとに推奨される画像サイズが異なります。<strong>正しいサイズで制作しないと、画像が切れたり粗くなったりする</strong>ため、事前に確認しておくことが重要です。</p>

<table>
<tr><th>プラットフォーム</th><th>投稿タイプ</th><th>推奨サイズ（px）</th><th>アスペクト比</th></tr>
<tr><td>Instagram</td><td>フィード（正方形）</td><td>1080 x 1080</td><td>1:1</td></tr>
<tr><td>Instagram</td><td>フィード（縦型）</td><td>1080 x 1350</td><td>4:5</td></tr>
<tr><td>Instagram</td><td>ストーリーズ / リール</td><td>1080 x 1920</td><td>9:16</td></tr>
<tr><td>X（旧Twitter）</td><td>画像投稿</td><td>1200 x 675</td><td>16:9</td></tr>
<tr><td>X（旧Twitter）</td><td>ヘッダー画像</td><td>1500 x 500</td><td>3:1</td></tr>
<tr><td>YouTube</td><td>サムネイル</td><td>1280 x 720</td><td>16:9</td></tr>
<tr><td>YouTube</td><td>チャンネルアート</td><td>2560 x 1440</td><td>16:9</td></tr>
<tr><td>TikTok</td><td>動画カバー</td><td>1080 x 1920</td><td>9:16</td></tr>
<tr><td>Facebook</td><td>フィード画像</td><td>1200 x 630</td><td>1.91:1</td></tr>
<tr><td>Facebook</td><td>カバー画像</td><td>820 x 312</td><td>約2.6:1</td></tr>
</table>

<h2>Instagram向けデザインのポイント</h2>
<p>Instagramは<strong>ビジュアルファースト</strong>のプラットフォームです。美しい写真やグラフィックが求められます。</p>

<h3>フィード投稿のデザイン</h3>
<ul>
<li><strong>グリッドの統一感:</strong> プロフィール画面で9枚が並ぶため、全体のトーンや配色を統一する</li>
<li><strong>余白を活かす:</strong> 文字入り画像は余白を多めにとり、スクロール中でも読みやすくする</li>
<li><strong>カルーセル投稿:</strong> 最大10枚のスライドで情報を分割。1枚目にフックとなるタイトルを配置</li>
<li><strong>文字サイズ:</strong> スマホで閲覧されるため、最低でも24pt以上を推奨</li>
</ul>

<h3>ストーリーズ / リールのデザイン</h3>
<ul>
<li>上下の<strong>セーフゾーン</strong>（上部約14%、下部約10%）にはUIが重なるため重要な要素を置かない</li>
<li>テキストは画面中央に配置し、背景には半透明のオーバーレイを敷く</li>
<li>最初の1〜2秒でフックとなる要素（テキストや動き）を見せる</li>
</ul>

<h2>X（旧Twitter）向けデザインのポイント</h2>
<p>Xは<strong>テキスト主体</strong>のプラットフォームですが、画像付き投稿はエンゲージメント率が大幅に向上します。</p>
<ul>
<li><strong>タイムライン映え:</strong> 流し読みされるため、大きな文字と強いコントラストが有効</li>
<li><strong>OGP画像:</strong> リンク共有時に表示されるカード画像は1200 x 630pxで作成</li>
<li><strong>情報グラフィック:</strong> データや比較情報を視覚化すると、リポストされやすい</li>
<li><strong>ブランド認知:</strong> プロフィール画像（400 x 400px）とヘッダー画像に統一感を持たせる</li>
</ul>

<h2>YouTube向けデザインのポイント</h2>
<p>YouTubeでは<strong>サムネイル</strong>がクリック率を左右する最重要要素です。</p>

<div class="info-box tip">
<div class="info-box-title">クリックされるサムネイルの法則</div>
<ul>
<li><strong>人の顔（表情）:</strong> 驚き・喜びなどの感情が伝わる表情を大きく配置</li>
<li><strong>テキストは3〜5語:</strong> 長い文章は読まれない。キーワードを大きく配置</li>
<li><strong>コントラスト:</strong> 背景と文字の明暗差を強くして視認性を確保</li>
<li><strong>一貫したブランディング:</strong> シリーズ動画は統一テンプレートを使い、チャンネル認知を高める</li>
</ul>
</div>

<h2>TikTok向けデザインのポイント</h2>
<ul>
<li><strong>縦型9:16:</strong> 全画面縦型が基本。横型コンテンツは表示が小さくなる</li>
<li><strong>テキスト位置:</strong> 画面下部にはユーザー名・説明文のUIが重なるため、テキストは中央〜上部に配置</li>
<li><strong>動画カバー画像:</strong> プロフィール画面で一覧表示される。統一デザインでブランド感を出す</li>
<li><strong>トレンド対応:</strong> 流行のフォーマットやエフェクトをデザインに取り入れると発見されやすい</li>
</ul>

<h2>Canva / Figmaテンプレート活用</h2>
<p>ゼロからデザインを作る必要はありません。テンプレートを活用すれば、<strong>プロクオリティのデザインを短時間で制作</strong>できます。</p>

<table>
<tr><th>ツール</th><th>特徴</th><th>おすすめ用途</th><th>料金</th></tr>
<tr><td>Canva</td><td>テンプレート豊富、直感的操作</td><td>SNS投稿、バナー、プレゼン</td><td>無料〜月1,500円</td></tr>
<tr><td>Figma</td><td>コンポーネント管理、チーム連携</td><td>UI/UX、ブランドテンプレート</td><td>無料〜月1,800円</td></tr>
<tr><td>Adobe Express</td><td>Adobe連携、ブランドキット</td><td>SNS、動画サムネイル</td><td>無料〜月1,078円</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">テンプレート活用のコツ</div>
テンプレートをそのまま使うのではなく、<strong>ブランドカラー・フォント・ロゴに差し替えて自社仕様にカスタマイズ</strong>しましょう。テンプレートの「構成」を参考にしつつ、オリジナリティを加えることがポイントです。
</div>
            `,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "Instagramのストーリーズ / リールの推奨画像サイズはどれですか？",
                    options: ["1080 x 1080", "1200 x 675", "1080 x 1920", "1280 x 720"],
                    answer: 2,
                    explanation: "Instagramのストーリーズ / リールの推奨サイズは1080 x 1920px（アスペクト比9:16）です。縦型フルスクリーンで表示されます。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "YouTubeのサムネイルデザインで最も効果的な要素はどれですか？",
                    options: ["細かいテキストで内容を詳しく説明する", "感情が伝わる人の顔を大きく配置する", "企業ロゴを画面いっぱいに表示する", "余白を最大限に取って情報を減らす"],
                    answer: 1,
                    explanation: "YouTubeサムネイルでは、驚き・喜びなどの感情が伝わる人の表情を大きく配置することで、クリック率が向上します。"
                },
                {
                    id: "q302_3",
                    type: "choice",
                    question: "Instagramのストーリーズで重要な要素を避けるべきエリアはどこですか？",
                    options: ["画面中央", "画面左右の端", "画面の上下（セーフゾーン外）", "画面の右上のみ"],
                    answer: 2,
                    explanation: "ストーリーズの上部約14%と下部約10%にはUIが重なるため、重要な要素は配置しないようにします。これをセーフゾーンと呼びます。"
                },
                {
                    id: "q302_4",
                    type: "fill",
                    question: "テンプレートが豊富で直感的に操作できるデザインツールで、SNS投稿やバナー制作に広く使われるサービスの名前は？",
                    answer: "Canva",
                    explanation: "Canvaはテンプレートが豊富で直感操作が可能なデザインツールです。SNS投稿、バナー、プレゼン資料など幅広い用途に対応し、無料プランでも多くの機能が使えます。"
                }
            ]
        },
        {
            id: 303,
            title: "プレゼン資料・インフォグラフィック",
            duration: "20分",
            content: `
<h2>プレゼン資料デザインの基本原則</h2>
<p>プレゼン資料は「読む」ものではなく「見る」ものです。<strong>1スライド1メッセージ</strong>の原則を守り、聴衆がひと目で理解できるデザインを心がけましょう。</p>

<div class="info-box formula">
<div class="info-box-title">1スライド1メッセージの原則</div>
<ul>
<li>各スライドで伝えたいことは<strong>1つだけ</strong>に絞る</li>
<li>タイトルにメッセージ（結論）を書く。「売上推移」ではなく「売上は前年比120%に成長」</li>
<li>本文テキストは<strong>最大3行程度</strong>に収める</li>
<li>詳細情報は補足資料（Appendix）にまとめる</li>
</ul>
</div>

<h2>レイアウトパターン</h2>
<p>プレゼン資料でよく使われるレイアウトパターンを覚えておくと、制作スピードが上がります。</p>

<table>
<tr><th>パターン名</th><th>構成</th><th>適した内容</th><th>ポイント</th></tr>
<tr><td>タイトルスライド</td><td>中央にタイトル＋サブタイトル</td><td>表紙、セクション区切り</td><td>シンプルに。背景画像を効果的に使う</td></tr>
<tr><td>テキスト＋画像</td><td>左に文字、右に画像（またはその逆）</td><td>概要説明、事例紹介</td><td>画像は文字を補完する役割</td></tr>
<tr><td>3カラム</td><td>横に3つの要素を並列配置</td><td>比較、3つのポイント</td><td>アイコンを添えると視認性アップ</td></tr>
<tr><td>グラフ＋解説</td><td>グラフを大きく配置＋短い解説文</td><td>数値データの提示</td><td>グラフのタイトルに結論を書く</td></tr>
<tr><td>フルイメージ</td><td>全面に画像、テキストオーバーレイ</td><td>インパクト演出、感情訴求</td><td>テキストの可読性に注意</td></tr>
<tr><td>タイムライン</td><td>横軸に時間、ポイントを配置</td><td>プロジェクト計画、沿革</td><td>ステップ数は5〜7に収める</td></tr>
</table>

<h2>プレゼン資料のデザインルール</h2>
<h3>フォント</h3>
<ul>
<li><strong>タイトル:</strong> 28〜36pt、太字</li>
<li><strong>本文:</strong> 18〜24pt</li>
<li><strong>注釈:</strong> 12〜14pt</li>
<li>フォントは<strong>2種類以内</strong>に抑える（見出し用＋本文用）</li>
</ul>

<h3>配色</h3>
<ul>
<li>メインカラー1色＋アクセントカラー1色＋グレー系を基本にする</li>
<li>企業資料ではコーポレートカラーをベースにする</li>
<li>強調したい数値やキーワードだけにアクセントカラーを使う</li>
</ul>

<h2>インフォグラフィックの種類</h2>
<p>インフォグラフィックは、<strong>複雑な情報やデータを視覚的に分かりやすく表現する手法</strong>です。目的に応じて適切な種類を選びましょう。</p>

<table>
<tr><th>種類</th><th>特徴</th><th>適した内容</th><th>例</th></tr>
<tr><td>統計型</td><td>数値データを図やグラフで表現</td><td>調査結果、市場データ</td><td>棒グラフ、円グラフ、ピクトグラム</td></tr>
<tr><td>プロセス型</td><td>手順やフローを順番に示す</td><td>業務フロー、利用手順</td><td>フローチャート、ステップ図</td></tr>
<tr><td>比較型</td><td>2つ以上の項目を対比する</td><td>プラン比較、Before/After</td><td>対比表、Venn図</td></tr>
<tr><td>タイムライン型</td><td>時系列で出来事を配置する</td><td>歴史、プロジェクト進行</td><td>年表、ロードマップ</td></tr>
<tr><td>地理型</td><td>地図上にデータを表示する</td><td>地域別データ、店舗分布</td><td>コロプレスマップ、ピンマップ</td></tr>
<tr><td>階層型</td><td>組織や分類の上下関係を示す</td><td>組織図、分類体系</td><td>ツリー図、ピラミッド図</td></tr>
</table>

<h2>データビジュアライゼーションの基本</h2>
<p>データを視覚化する際は、<strong>データの種類に応じた適切なグラフ</strong>を選ぶことが重要です。</p>

<div class="info-box tip">
<div class="info-box-title">データに合ったグラフの選び方</div>
<ul>
<li><strong>推移を見せたい:</strong> 折れ線グラフ、エリアグラフ</li>
<li><strong>比較したい:</strong> 棒グラフ（横棒は項目名が長い場合に適する）</li>
<li><strong>割合を見せたい:</strong> 円グラフ（5項目以内）、帯グラフ</li>
<li><strong>分布を見せたい:</strong> 散布図、ヒートマップ</li>
<li><strong>構成を見せたい:</strong> 積み上げ棒グラフ、ツリーマップ</li>
</ul>
</div>

<div class="info-box warning">
<div class="info-box-title">データビジュアライゼーションのNG</div>
<ul>
<li><strong>3Dグラフ:</strong> 見た目は派手だが、正確な値の読み取りが困難になる</li>
<li><strong>円グラフの乱用:</strong> 6項目以上は判別が難しい。横棒グラフに変更する</li>
<li><strong>Y軸を0から始めない棒グラフ:</strong> 差が実際より大きく見え、ミスリードの原因になる</li>
<li><strong>装飾過多:</strong> グラデーション、影、パターンなどはデータの読み取りを妨げる</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "プレゼン資料デザインの基本原則として正しいものはどれですか？",
                    options: ["1スライドに情報をなるべく多く盛り込む", "1スライド1メッセージに絞る", "スライドのタイトルは省略してよい", "本文テキストは10行以上書く"],
                    answer: 1,
                    explanation: "プレゼン資料の基本原則は「1スライド1メッセージ」です。各スライドで伝えたいことを1つに絞り、聴衆がひと目で理解できるようにします。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "時系列で出来事を配置するインフォグラフィックの種類は何ですか？",
                    options: ["統計型", "プロセス型", "タイムライン型", "階層型"],
                    answer: 2,
                    explanation: "タイムライン型のインフォグラフィックは、年表やロードマップなど、時系列で出来事を配置するのに適しています。"
                },
                {
                    id: "q303_3",
                    type: "choice",
                    question: "データビジュアライゼーションのNGとして正しいものはどれですか？",
                    options: ["折れ線グラフで推移を表現する", "横棒グラフで項目名が長いデータを比較する", "3Dグラフで正確なデータを表現する", "5項目以内で円グラフを使用する"],
                    answer: 2,
                    explanation: "3Dグラフは見た目は派手ですが、奥行きによって正確な値の読み取りが困難になるため、データビジュアライゼーションではNGとされています。"
                },
                {
                    id: "q303_4",
                    type: "fill",
                    question: "データの推移を見せたい場合に最適なグラフの種類は？（漢字＋カタカナで）",
                    answer: "折れ線グラフ",
                    explanation: "推移（時系列の変化）を見せたい場合は、折れ線グラフが最も適しています。エリアグラフも同様の用途に使えます。"
                }
            ]
        },
        {
            id: 304,
            title: "ロゴ・アイコンデザイン",
            duration: "20分",
            content: `
<h2>ロゴの種類</h2>
<p>ロゴはブランドの顔ともいえる要素です。主に以下の種類があり、ブランドの特性や用途に応じて選択します。</p>

<table>
<tr><th>種類</th><th>特徴</th><th>メリット</th><th>代表例</th></tr>
<tr><td>ワードマーク</td><td>ブランド名をタイポグラフィで表現</td><td>名前を直接覚えてもらえる</td><td>Google、SONY、Coca-Cola</td></tr>
<tr><td>レターマーク</td><td>頭文字やイニシャルをデザイン化</td><td>長い社名をコンパクトに</td><td>IBM、HBO、NASA</td></tr>
<tr><td>シンボルマーク</td><td>抽象的または具象的なアイコン</td><td>言語を超えた認知が可能</td><td>Apple（リンゴ）、Nike（スウッシュ）</td></tr>
<tr><td>コンビネーション</td><td>シンボル＋テキストの組み合わせ</td><td>シンボルと名前の両方で認知</td><td>Adidas、Starbucks、Amazon</td></tr>
<tr><td>エンブレム</td><td>テキストがシンボルの中に組み込まれる</td><td>格式・伝統を感じさせる</td><td>BMW、Harley-Davidson、大学の校章</td></tr>
<tr><td>マスコット</td><td>キャラクターを使ったロゴ</td><td>親しみやすさ、感情的なつながり</td><td>KFC（カーネル）、Michelin</td></tr>
</table>

<h2>ロゴデザインの5原則</h2>
<p>優れたロゴには共通する5つの原則があります。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>シンプル（Simple）</strong>
複雑な装飾を避け、必要最小限の要素で構成する。シンプルなロゴは記憶に残りやすく、あらゆるサイズで使用できる。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>記憶に残る（Memorable）</strong>
一度見たら忘れないインパクトを持たせる。独自の形状や意外性のある要素が記憶定着を助ける。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>普遍的（Timeless）</strong>
トレンドに流されず、10年後も古びないデザインにする。流行のグラデーションやエフェクトに頼らない。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>汎用的（Versatile）</strong>
名刺、看板、Webサイト、SNSアイコンなど、あらゆる媒体・サイズで使えるように設計する。単色でも成立するかを確認する。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>適切（Appropriate）</strong>
ブランドの業種・ターゲット・価値観に合ったデザインにする。法律事務所にポップなフォントは不適切。
</div>
</div>
</div>

<h2>アイコンデザインの基本</h2>
<p>アイコンは<strong>小さなスペースで情報を瞬時に伝える</strong>ための視覚要素です。UIデザインやプレゼン資料で多用されます。</p>

<h3>アイコンの設計ルール</h3>
<ul>
<li><strong>グリッドシステム:</strong> 24px x 24pxや32px x 32pxなどのグリッド上にデザインし、ピクセルパーフェクトを目指す</li>
<li><strong>線の太さの統一:</strong> すべてのアイコンでストロークの太さを統一する（例：2px）</li>
<li><strong>スタイルの統一:</strong> 線画（アウトライン）か塗り（ソリッド）か、セット全体で統一する</li>
<li><strong>視覚的な大きさの調整:</strong> 正方形は円形より大きく見えるため、円形アイコンはやや大きめに描く</li>
<li><strong>メタファーの明確さ:</strong> 「保存＝フロッピーディスク」「検索＝虫眼鏡」のように、広く認知されたメタファーを使用する</li>
</ul>

<h2>ファビコン・アプリアイコン</h2>
<p>ファビコンやアプリアイコンは、<strong>極小サイズでもブランドを識別できる</strong>デザインが求められます。</p>

<div class="info-box tip">
<div class="info-box-title">ファビコン・アプリアイコンのサイズ</div>
<table>
<tr><th>種類</th><th>サイズ</th><th>用途</th></tr>
<tr><td>ファビコン</td><td>16 x 16px / 32 x 32px</td><td>ブラウザタブに表示</td></tr>
<tr><td>iOSアプリアイコン</td><td>1024 x 1024px</td><td>App Storeおよびホーム画面</td></tr>
<tr><td>Androidアプリアイコン</td><td>512 x 512px</td><td>Google Playおよびホーム画面</td></tr>
<tr><td>PWAアイコン</td><td>192 x 192px / 512 x 512px</td><td>ホーム画面に追加時</td></tr>
</table>
</div>

<h3>ファビコンデザインのポイント</h3>
<ul>
<li>ロゴの<strong>シンボル部分だけ</strong>を切り出して使うのが基本</li>
<li>テキスト（社名）は入れない。16pxでは読めないため</li>
<li>背景とのコントラストを強くし、ダークモードでも視認できるようにする</li>
<li>ICO形式（.ico）でマルチサイズ対応にする</li>
</ul>

<h2>ロゴのバリエーション展開</h2>
<p>1つのロゴで全ての場面に対応することは難しいため、<strong>バリエーション</strong>を用意しておくことが実務では不可欠です。</p>

<table>
<tr><th>バリエーション</th><th>用途</th><th>内容</th></tr>
<tr><td>フルカラー版</td><td>通常使用</td><td>正規のブランドカラーで表現</td></tr>
<tr><td>モノクロ版</td><td>白黒印刷、スタンプ</td><td>色情報なしでも成立するデザイン</td></tr>
<tr><td>白抜き版</td><td>暗い背景上での使用</td><td>白一色で表現</td></tr>
<tr><td>横型 / 縦型</td><td>掲載スペースに合わせて</td><td>レイアウト違いのバリエーション</td></tr>
<tr><td>アイコン版</td><td>SNSアイコン、ファビコン</td><td>シンボル部分のみを切り出し</td></tr>
<tr><td>最小使用サイズ</td><td>ガイドライン用</td><td>視認性を維持できる最小サイズを定義</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">ロゴ使用のNGパターン</div>
<ul>
<li>ロゴの色を勝手に変える</li>
<li>ロゴを回転、変形、引き伸ばす</li>
<li>ロゴの近くに他の要素を密着させる（アイソレーションエリアの侵害）</li>
<li>背景とコントラストが低い配色で使用する</li>
<li>ロゴの上にテキストや画像を重ねる</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "ブランド名をタイポグラフィだけで表現するロゴの種類はどれですか？",
                    options: ["シンボルマーク", "ワードマーク", "エンブレム", "レターマーク"],
                    answer: 1,
                    explanation: "ワードマークは、ブランド名そのものをタイポグラフィで表現するロゴの種類です。Google、SONY、Coca-Colaなどが代表例です。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "ロゴデザインの5原則に含まれないものはどれですか？",
                    options: ["シンプル", "カラフル", "汎用的", "普遍的"],
                    answer: 1,
                    explanation: "ロゴの5原則はシンプル、記憶に残る、普遍的、汎用的、適切の5つです。「カラフル」は含まれず、むしろモノクロでも成立することが求められます。"
                },
                {
                    id: "q304_3",
                    type: "choice",
                    question: "ファビコンのデザインで適切なものはどれですか？",
                    options: ["会社名をフルで入れる", "複雑なグラデーションを使う", "ロゴのシンボル部分だけを切り出して使う", "正方形の枠線で囲む"],
                    answer: 2,
                    explanation: "ファビコンは16px程度の極小サイズで使われるため、ロゴのシンボル部分だけを切り出して使うのが基本です。テキストは読めないため入れません。"
                },
                {
                    id: "q304_4",
                    type: "fill",
                    question: "ロゴの周囲に確保すべき、他の要素を配置してはいけない余白領域のことを何と呼びますか？（カタカナで）",
                    answer: "アイソレーションエリア",
                    explanation: "アイソレーションエリアは、ロゴの周囲に確保する余白のことです。他の要素がロゴに近づきすぎると視認性が下がるため、一定の余白を設けるルールが定められます。"
                }
            ]
        }
    ]
};
