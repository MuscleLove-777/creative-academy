/* ============================================
   Level 2: コピーライティング
   ============================================ */
const LEVEL2_DATA = {
    id: 2,
    title: "コピーライティング",
    icon: "✍️",
    description: "人を動かす文章術を、基本原則からメディア別実践まで体系的に学ぶ",
    modules: [
        {
            id: 201,
            title: "コピーライティングの基本原則",
            duration: "15分",
            content: `
<h2>AIDA法則</h2>
<p>コピーライティングの最も基本的なフレームワークが<strong>AIDA法則</strong>です。読み手の心理プロセスに沿ってコピーを構成します。</p>

<div class="info-box formula">
<div class="info-box-title">AIDA法則</div>
<ul>
<li><strong>A = Attention（注意）:</strong> 読み手の目を止める。ヘッドラインの役割</li>
<li><strong>I = Interest（興味）:</strong> 「自分に関係がある」と思わせる。リード文の役割</li>
<li><strong>D = Desire（欲求）:</strong> 「欲しい」と感じさせる。ベネフィット提示の役割</li>
<li><strong>A = Action（行動）:</strong> 具体的な行動を促す。CTAの役割</li>
</ul>
</div>

<h3>AIDAの各段階と具体例</h3>
<table>
<tr><th>段階</th><th>読み手の心理</th><th>コピーの例</th></tr>
<tr><td>Attention</td><td>「何だろう？」</td><td>「年収を2倍にした人が、最初にやめた習慣とは」</td></tr>
<tr><td>Interest</td><td>「面白そう」</td><td>「実は、毎日やっているあの行動が原因でした」</td></tr>
<tr><td>Desire</td><td>「自分もそうなりたい」</td><td>「この方法を使った受講生の87%が3ヶ月で成果を実感」</td></tr>
<tr><td>Action</td><td>「やってみよう」</td><td>「今なら無料体験実施中。まずは7日間お試しください」</td></tr>
</table>

<h2>コピーの3要素：ヘッドライン・ボディ・CTA</h2>

<h3>ヘッドライン（見出し）</h3>
<p>広告の父デイヴィッド・オグルヴィは「<strong>ヘッドラインを読む人は本文を読む人の5倍いる</strong>」と述べました。ヘッドラインはコピーの中で最も重要な要素です。</p>

<h3>ボディコピー（本文）</h3>
<p>ヘッドラインで惹きつけた読者に対して、<strong>具体的なベネフィット</strong>を伝え、信頼性を構築し、不安を解消する部分です。</p>

<h3>CTA（Call to Action）</h3>
<p>読者に<strong>具体的な行動</strong>を促す要素です。「詳しくはこちら」ではなく、具体的な動詞を使いましょう。</p>

<table>
<tr><th>悪いCTA</th><th>良いCTA</th><th>改善ポイント</th></tr>
<tr><td>こちらをクリック</td><td>無料ガイドを今すぐダウンロード</td><td>得られるものを具体的に</td></tr>
<tr><td>お問い合わせ</td><td>専門家に30秒で無料相談する</td><td>ハードルの低さを提示</td></tr>
<tr><td>登録はこちら</td><td>1分で無料アカウントを作成</td><td>所要時間を明示</td></tr>
</table>

<h2>ベネフィット vs フィーチャー</h2>
<p>コピーライティングで最も重要な区別が、<strong>フィーチャー（特徴）とベネフィット（利益）</strong>の違いです。</p>

<div class="info-box tip">
<div class="info-box-title">フィーチャーとベネフィットの違い</div>
<ul>
<li><strong>フィーチャー:</strong> 商品・サービスの客観的な特徴（「what」）</li>
<li><strong>ベネフィット:</strong> その特徴が顧客にもたらす恩恵（「so what?」）</li>
</ul>
変換のコツ: フィーチャーの後に「だから、あなたは〜できる」を付けるとベネフィットになります。
</div>

<table>
<tr><th>フィーチャー（特徴）</th><th>ベネフィット（利益）</th></tr>
<tr><td>バッテリー容量5000mAh</td><td>充電を気にせず1日中使える</td></tr>
<tr><td>講師は元Google社員</td><td>世界最先端の実務ノウハウが学べる</td></tr>
<tr><td>24時間365日サポート</td><td>深夜のトラブルでも安心して対応してもらえる</td></tr>
<tr><td>全額返金保証付き</td><td>リスクゼロで試せるから、今すぐ始められる</td></tr>
</table>

<h2>USP（独自の売り）</h2>
<p>USP（Unique Selling Proposition）とは、<strong>他社にはない、自社だけの独自の強み</strong>です。全てのコピーはUSPを中心に構築されるべきです。</p>

<h3>有名なUSPの例</h3>
<ul>
<li><strong>ドミノ・ピザ:</strong> 「30分以内にお届けします。届かなければ無料」</li>
<li><strong>M&M's:</strong> 「口でとろけて、手でとけない」</li>
<li><strong>FedEx:</strong> 「絶対に、翌日届けます」</li>
</ul>

<h2>3つのNOT</h2>
<p>コピーライティングの大前提として、読者は基本的に以下の3つの壁を持っています。</p>

<div class="info-box warning">
<div class="info-box-title">読者の3つのNOT</div>
<ol>
<li><strong>NOT Read（読まない）:</strong> ほとんどの人はあなたのコピーを読まない。だからヘッドラインで注意を引く</li>
<li><strong>NOT Believe（信じない）:</strong> 読んでも信じない。だから証拠（データ・事例・推薦）を示す</li>
<li><strong>NOT Act（行動しない）:</strong> 信じても行動しない。だから緊急性・限定性・リスク除去で後押しする</li>
</ol>
</div>
            `,
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "AIDA法則の「D」は何を表しますか？",
                    options: ["Decision（決定）", "Desire（欲求）", "Demand（需要）", "Direction（方向）"],
                    answer: 1,
                    explanation: "AIDA法則のDはDesire（欲求）です。読み手に「欲しい」と感じさせる段階を指します。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "「バッテリー容量5000mAh」はフィーチャーとベネフィットのどちらですか？",
                    options: ["フィーチャー", "ベネフィット", "USP", "CTA"],
                    answer: 0,
                    explanation: "バッテリー容量5000mAhは商品の客観的な特徴（フィーチャー）です。ベネフィットに変換すると「充電を気にせず1日中使える」になります。"
                },
                {
                    id: "q201_3",
                    type: "choice",
                    question: "3つのNOTに含まれないのはどれですか？",
                    options: ["NOT Read", "NOT Believe", "NOT Share", "NOT Act"],
                    answer: 2,
                    explanation: "3つのNOTはNOT Read（読まない）、NOT Believe（信じない）、NOT Act（行動しない）です。NOT Shareは含まれません。"
                },
                {
                    id: "q201_4",
                    type: "fill",
                    question: "他社にはない独自の売りを表すマーケティング用語の略称は？（アルファベット3文字）",
                    answer: "USP",
                    explanation: "USP（Unique Selling Proposition）は他社にはない自社だけの独自の強みを表すマーケティング用語です。"
                }
            ]
        },
        {
            id: 202,
            title: "ヘッドラインとキャッチコピー",
            duration: "15分",
            content: `
<h2>4Uの法則</h2>
<p>優れたヘッドラインは<strong>4つのU</strong>を満たしています。これはコピーライターのMichael Masterson（マイケル・マスターソン）が提唱したフレームワークです。</p>

<div class="info-box formula">
<div class="info-box-title">4Uの法則</div>
<ul>
<li><strong>Urgent（緊急性）:</strong> 「今すぐ」読む理由を与える</li>
<li><strong>Unique（独自性）:</strong> 他にはない切り口で伝える</li>
<li><strong>Ultra-specific（超具体性）:</strong> 数字や具体例で曖昧さを排除する</li>
<li><strong>Useful（有用性）:</strong> 読者にとっての明確なメリットを示す</li>
</ul>
4つすべてを満たす必要はありませんが、最低2つは含めましょう。
</div>

<h3>4Uの適用例</h3>
<table>
<tr><th>要素なし（弱い例）</th><th>4U適用（強い例）</th><th>含まれるU</th></tr>
<tr><td>英語学習のコツ</td><td>30日で英語が話せるようになる5つの習慣</td><td>Urgent + Ultra-specific + Useful</td></tr>
<tr><td>ダイエット方法</td><td>医師が教える、食べても太らない人の唯一の共通点</td><td>Unique + Ultra-specific + Useful</td></tr>
<tr><td>投資のすすめ</td><td>【残り3日】年利8%の非公開ファンド、限定30名</td><td>Urgent + Ultra-specific + Unique</td></tr>
</table>

<h2>ヘッドラインパターン集</h2>
<p>効果が実証されたヘッドラインには共通のパターンがあります。以下のテンプレートを活用しましょう。</p>

<table>
<tr><th>パターン</th><th>構造</th><th>例</th></tr>
<tr><td>数字型</td><td>「[数字]つの[方法/理由/秘訣]」</td><td>「売上を3倍にした7つの施策」</td></tr>
<tr><td>疑問型</td><td>「なぜ〜なのか？」「〜していませんか？」</td><td>「なぜ頭のいい人ほど失敗するのか？」</td></tr>
<tr><td>How to型</td><td>「〜する方法」「〜のやり方」</td><td>「初心者でもプロ並みの写真を撮る方法」</td></tr>
<tr><td>証言型</td><td>「私が〜した結果」</td><td>「朝5時起きを1年続けた結果、人生が変わった」</td></tr>
<tr><td>警告型</td><td>「〜してはいけない」「〜は危険」</td><td>「副業を始める前に知るべき3つのリスク」</td></tr>
<tr><td>秘密型</td><td>「〜の秘密」「〜が知らない事実」</td><td>「トップ営業マンだけが知っている交渉の秘密」</td></tr>
<tr><td>比較型</td><td>「AとBの違い」「〜 vs 〜」</td><td>「年収500万と年収1000万の人の朝の過ごし方の違い」</td></tr>
<tr><td>限定型</td><td>「〜限定」「今だけ」</td><td>「先着100名限定：通常価格の70%OFFで受講可能」</td></tr>
</table>

<h2>名作キャッチコピー分析</h2>
<p>歴史に残るキャッチコピーには、普遍的な法則が詰まっています。</p>

<h3>日本の名作キャッチコピー</h3>
<table>
<tr><th>キャッチコピー</th><th>企業/商品</th><th>優れている理由</th></tr>
<tr><td>「お、ねだん以上。」</td><td>ニトリ</td><td>価格以上の価値というUSPを7文字で表現</td></tr>
<tr><td>「そうだ 京都、行こう。」</td><td>JR東海</td><td>読者の衝動を代弁。句読点の使い方が秀逸</td></tr>
<tr><td>「カラダにピース。」</td><td>カルピス</td><td>健康（ピース=peace）と社名の韻を踏む</td></tr>
<tr><td>「あなたと、コンビに。」</td><td>ファミリーマート</td><td>業態名（コンビニ）と寄り添い感を掛けた言葉遊び</td></tr>
<tr><td>「NO MUSIC, NO LIFE.」</td><td>タワーレコード</td><td>英語の否定構文で音楽の不可欠さを強調</td></tr>
</table>

<h3>世界の名作キャッチコピー</h3>
<table>
<tr><th>キャッチコピー</th><th>企業</th><th>テクニック</th></tr>
<tr><td>「Just Do It.」</td><td>Nike</td><td>3語で行動を促す。シンプルさの極致</td></tr>
<tr><td>「Think Different.」</td><td>Apple</td><td>既存の常識への挑戦を2語で表現</td></tr>
<tr><td>「Because You're Worth It.」</td><td>L'Oreal</td><td>読者自身の価値を肯定する</td></tr>
</table>

<h2>SNS向けコピーの特徴</h2>
<p>SNSでは<strong>スクロールの速度が速い</strong>ため、一瞬で目を止めるコピーが必要です。</p>

<div class="info-box tip">
<div class="info-box-title">SNSコピーのポイント</div>
<ul>
<li><strong>最初の1行が勝負:</strong> タイムラインでは冒頭しか表示されない</li>
<li><strong>共感 or 意外性:</strong> 「わかる！」か「えっ？」を引き出す</li>
<li><strong>具体的な数字:</strong> 「売上UP」より「売上147%UP」</li>
<li><strong>問いかけ:</strong> 質問形式は反応率（エンゲージメント）が高い</li>
<li><strong>短く・リズムよく:</strong> 体言止め・倒置法で歯切れよく</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q202_1",
                    type: "choice",
                    question: "4Uの法則に含まれないのはどれですか？",
                    options: ["Urgent", "Universal", "Ultra-specific", "Useful"],
                    answer: 1,
                    explanation: "4Uの法則はUrgent（緊急性）、Unique（独自性）、Ultra-specific（超具体性）、Useful（有用性）です。Universalは含まれません。"
                },
                {
                    id: "q202_2",
                    type: "choice",
                    question: "「なぜ頭のいい人ほど失敗するのか？」はどのヘッドラインパターンですか？",
                    options: ["数字型", "How to型", "疑問型", "証言型"],
                    answer: 2,
                    explanation: "「なぜ〜なのか？」は疑問型パターンです。読者の好奇心を刺激し、答えを知りたいという欲求を生み出します。"
                },
                {
                    id: "q202_3",
                    type: "choice",
                    question: "SNS向けコピーで最も重要なのはどれですか？",
                    options: ["長文で詳しく説明する", "最初の1行で目を止める", "専門用語を多く使う", "全文を大文字で書く"],
                    answer: 1,
                    explanation: "SNSではスクロール速度が速く、タイムラインでは冒頭しか表示されないため、最初の1行で目を止めることが最も重要です。"
                },
                {
                    id: "q202_4",
                    type: "fill",
                    question: "4Uの法則を提唱したコピーライターの名前は？（カタカナで）",
                    answer: "マイケル・マスターソン",
                    explanation: "マイケル・マスターソン（Michael Masterson）が4Uの法則を提唱しました。"
                }
            ]
        },
        {
            id: 203,
            title: "セールスライティング",
            duration: "18分",
            content: `
<h2>PAS法（Problem-Agitate-Solution）</h2>
<p>セールスライティングで最も使われるフレームワークが<strong>PAS法</strong>です。読者の問題意識に寄り添い、解決策を提示します。</p>

<div class="info-box formula">
<div class="info-box-title">PAS法の構造</div>
<ol>
<li><strong>Problem（問題提起）:</strong> 読者の抱える問題を明確にする</li>
<li><strong>Agitate（煽り/共感）:</strong> その問題を放置するとどうなるか、痛みを具体化する</li>
<li><strong>Solution（解決策）:</strong> あなたの商品・サービスが解決策であることを示す</li>
</ol>
</div>

<h3>PAS法の具体例</h3>
<div class="info-box tip">
<div class="info-box-title">英会話教材のPAS法</div>
<p><strong>P:</strong> 英語を勉強しているのに、いつまでたっても話せない...。会議で外国人に話しかけられると、頭が真っ白になりませんか？</p>
<p><strong>A:</strong> このままだと、昇進のチャンスを逃すだけでなく、後輩に追い抜かれてしまうかもしれません。実際、英語力不足で希望の部署に異動できなかった人は昨年だけで4,000人以上います。</p>
<p><strong>S:</strong> 「スピークマスター」なら、1日15分のシャドーイングだけで、3ヶ月後には会議で堂々と発言できるレベルに。受講生の92%が「英語への恐怖心がなくなった」と回答しています。</p>
</div>

<h2>PREP法</h2>
<p>論理的な文章構成に適したフレームワークです。<strong>ビジネス文書やプレゼン</strong>で多用されます。</p>

<table>
<tr><th>要素</th><th>役割</th><th>例</th></tr>
<tr><td>Point（結論）</td><td>最初に主張を述べる</td><td>「コンテンツマーケティングは最も費用対効果の高い集客方法です」</td></tr>
<tr><td>Reason（理由）</td><td>なぜそう言えるのか</td><td>「なぜなら、広告と違い資産として蓄積され、長期的にリードを獲得し続けるからです」</td></tr>
<tr><td>Example（具体例）</td><td>事例やデータで裏付ける</td><td>「実際、弊社のブログは月間10万PVを達成し、広告費を年間500万円削減しました」</td></tr>
<tr><td>Point（結論）</td><td>再度主張を繰り返す</td><td>「だからこそ、今コンテンツマーケティングに投資すべきなのです」</td></tr>
</table>

<h2>BEAFの法則</h2>
<p>ECサイトの商品ページに特化した構成フレームワークです。</p>

<div class="info-box formula">
<div class="info-box-title">BEAFの法則</div>
<ul>
<li><strong>B = Benefit（利益）:</strong> 商品を使うとどうなるか</li>
<li><strong>E = Evidence（証拠）:</strong> なぜそれが信じられるか（レビュー・データ・受賞歴）</li>
<li><strong>A = Advantage（優位性）:</strong> 競合と比べて何が優れているか</li>
<li><strong>F = Feature（特徴）:</strong> 具体的なスペック・仕様</li>
</ul>
</div>

<h2>ストーリーテリング: Before → After → Bridge</h2>
<p>人はストーリーに引き込まれます。<strong>BAB（Before-After-Bridge）</strong>フレームワークで、読者を主人公にしたストーリーを描きましょう。</p>

<table>
<tr><th>要素</th><th>内容</th><th>ポイント</th></tr>
<tr><td>Before（現在の苦痛）</td><td>読者が今抱えている問題・不満</td><td>できるだけ具体的に、読者の言葉で描写する</td></tr>
<tr><td>After（理想の未来）</td><td>問題が解決された理想の状態</td><td>五感に訴える描写で鮮明にイメージさせる</td></tr>
<tr><td>Bridge（橋渡し）</td><td>BeforeからAfterに至る手段</td><td>あなたの商品・サービスが「橋」になる</td></tr>
</table>

<h2>社会的証明（ソーシャルプルーフ）</h2>
<p>人は他者の行動に影響を受けます。<strong>社会的証明</strong>を活用して信頼性を高めましょう。</p>

<table>
<tr><th>種類</th><th>例</th><th>効果</th></tr>
<tr><td>数字</td><td>「累計10万人が受講」</td><td>人気の証明（バンドワゴン効果）</td></tr>
<tr><td>顧客の声</td><td>「この教材のおかげでTOEIC200点UP！」</td><td>リアルな体験による信頼性</td></tr>
<tr><td>権威者の推薦</td><td>「東大教授も推薦」</td><td>専門家のお墨付き</td></tr>
<tr><td>メディア掲載</td><td>「日経新聞・NHKで紹介」</td><td>第三者メディアの権威</td></tr>
<tr><td>受賞歴</td><td>「2025年グッドデザイン賞受賞」</td><td>客観的な評価の証明</td></tr>
<tr><td>ビフォーアフター</td><td>「3ヶ月前 → 現在の変化写真」</td><td>目に見える成果の提示</td></tr>
</table>

<h2>LP（ランディングページ）構成テンプレート</h2>
<p>セールスライティングの集大成がLPです。以下の構成が効果的です。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>ファーストビュー</strong>
キャッチコピー + サブコピー + CTA + メインビジュアル。3秒以内に「何のページか」「自分に関係あるか」を伝える。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>問題提起（共感）</strong>
「こんなお悩みありませんか？」で読者の痛みに寄り添う。3〜5個の箇条書き。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>解決策の提示</strong>
あなたの商品・サービスがどう解決するかを明示。ベネフィット中心に。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>特徴・実績</strong>
具体的な機能説明、数字で示す実績、競合との差別化ポイント。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>社会的証明</strong>
お客様の声、導入事例、メディア掲載実績、受賞歴。
</div>
</div>
<div class="step">
<div class="step-num">6</div>
<div class="step-content">
<strong>料金・プラン</strong>
価格の根拠（アンカリング）、プラン比較、保証の提示。
</div>
</div>
<div class="step">
<div class="step-num">7</div>
<div class="step-content">
<strong>FAQ</strong>
よくある質問で不安を解消。購入を迷う理由を先回りして潰す。
</div>
</div>
<div class="step">
<div class="step-num">8</div>
<div class="step-content">
<strong>最終CTA</strong>
限定性・緊急性を加えた最後のCTA。「今すぐ〜」で行動を促す。
</div>
</div>
</div>
            `,
            quiz: [
                {
                    id: "q203_1",
                    type: "choice",
                    question: "PAS法の「A」は何を表しますか？",
                    options: ["Action（行動）", "Agitate（煽り/共感）", "Advantage（優位性）", "Attention（注意）"],
                    answer: 1,
                    explanation: "PAS法のAはAgitate（煽り/共感）です。問題を放置した場合の痛みを具体化し、解決への動機を高めます。"
                },
                {
                    id: "q203_2",
                    type: "choice",
                    question: "PREP法で最初と最後に来る要素はどれですか？",
                    options: ["Problem", "Point", "Proof", "Purpose"],
                    answer: 1,
                    explanation: "PREP法ではPoint（結論）を最初と最後に述べます。結論→理由→具体例→結論の構成です。"
                },
                {
                    id: "q203_3",
                    type: "choice",
                    question: "社会的証明として最も効果的でないのはどれですか？",
                    options: ["顧客のレビュー", "メディア掲載実績", "自社の自画自賛コメント", "受賞歴"],
                    answer: 2,
                    explanation: "自社による自画自賛は第三者の評価ではないため、社会的証明としての効果は低いです。"
                },
                {
                    id: "q203_4",
                    type: "fill",
                    question: "ECサイト商品ページ向けの構成フレームワークで、B・E・A・Fの頭文字からなるものは？",
                    answer: "BEAF",
                    explanation: "BEAFの法則はBenefit（利益）、Evidence（証拠）、Advantage（優位性）、Feature（特徴）の順に構成するフレームワークです。"
                }
            ]
        },
        {
            id: 204,
            title: "メディア別ライティング実践",
            duration: "15分",
            content: `
<h2>メディア別の文章特性</h2>
<p>同じメッセージでも、<strong>メディアによって最適な書き方は全く異なります</strong>。それぞれの特性を理解し、使い分けましょう。</p>

<table>
<tr><th>メディア</th><th>推奨文字数</th><th>トーン</th><th>特徴</th></tr>
<tr><td>Web記事（ブログ）</td><td>2,000〜5,000字</td><td>わかりやすく丁寧</td><td>SEOを意識した構造化</td></tr>
<tr><td>SNS投稿（X/Twitter）</td><td>〜140字</td><td>カジュアル・共感重視</td><td>一文一義・インパクト重視</td></tr>
<tr><td>SNS投稿（Instagram）</td><td>〜2,200字</td><td>ビジュアルを補完</td><td>ハッシュタグ戦略が重要</td></tr>
<tr><td>メールマガジン</td><td>500〜1,500字</td><td>親しみやすく簡潔</td><td>件名が開封率を左右</td></tr>
<tr><td>広告コピー（リスティング）</td><td>見出し30字 + 説明90字</td><td>端的・行動喚起</td><td>限られた文字数で訴求</td></tr>
<tr><td>プレスリリース</td><td>800〜1,500字</td><td>客観的・公式</td><td>5W1Hを冒頭に</td></tr>
</table>

<h2>Web記事（ブログ）の書き方</h2>
<p>Web記事は<strong>SEO（検索エンジン最適化）</strong>と<strong>読者体験</strong>の両方を意識して書く必要があります。</p>

<h3>記事構成の基本</h3>
<ul>
<li><strong>タイトル:</strong> 検索キーワードを含み、クリックしたくなる表現にする</li>
<li><strong>リード文:</strong> 記事の要約。読者の悩みに共感し、記事を読むメリットを提示</li>
<li><strong>見出し（H2/H3）:</strong> 目次として機能する、内容がわかる見出し</li>
<li><strong>本文:</strong> 1段落3〜4行以内。箇条書き・表・画像を効果的に使う</li>
<li><strong>まとめ:</strong> 要点の再確認とCTA</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">SEOライティングのコツ</div>
<ul>
<li>1記事1キーワードを基本とし、タイトル・見出し・冒頭100文字に含める</li>
<li>共起語（関連キーワード）を自然に散りばめる</li>
<li>E-E-A-T（経験・専門性・権威性・信頼性）を意識した内容にする</li>
<li>内部リンク・外部リンクを適切に配置する</li>
</ul>
</div>

<h2>SNS投稿の書き方</h2>

<h3>X（Twitter）の投稿テクニック</h3>
<ul>
<li><strong>1行目で興味を引く:</strong> 「知らないと損する〜」「実は〜だった」</li>
<li><strong>改行を活用:</strong> 視覚的に読みやすくする</li>
<li><strong>箇条書き:</strong> 情報を整理して伝える</li>
<li><strong>最後にCTA:</strong> 「いいね・RTで保存」「続きはリプ欄で」</li>
</ul>

<h3>Instagram投稿のキャプション</h3>
<ul>
<li><strong>1行目がすべて:</strong> 「続きを読む」をタップさせる冒頭文</li>
<li><strong>ストーリー性:</strong> 写真の背景にあるエピソードを語る</li>
<li><strong>ハッシュタグ:</strong> 10〜15個。大・中・小のボリュームを混ぜる</li>
</ul>

<h2>メールの書き方</h2>
<p>メールマーケティングでは<strong>件名が開封率の80%を決める</strong>と言われています。</p>

<table>
<tr><th>件名パターン</th><th>例</th><th>開封率への効果</th></tr>
<tr><td>パーソナライズ</td><td>「田中さん、特別なご案内です」</td><td>名前入りは開封率26%向上</td></tr>
<tr><td>数字入り</td><td>「3つの無料特典をお届けします」</td><td>具体的な数字で期待感を醸成</td></tr>
<tr><td>緊急性</td><td>「【本日23:59まで】限定セール」</td><td>締め切り効果で即時開封を促す</td></tr>
<tr><td>好奇心</td><td>「あの方法、もう試しましたか？」</td><td>答えを知りたい欲求を刺激</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">メール件名のNG</div>
<ul>
<li>全角大文字や過度な記号（★★★）はスパム判定されやすい</li>
<li>「Re:」「Fw:」の偽装は信頼を損なう</li>
<li>件名が長すぎる（40文字以上はモバイルで切れる）</li>
</ul>
</div>

<h2>広告コピーの書き方</h2>
<p>広告コピーは<strong>極めて限られた文字数</strong>で最大の効果を出す必要があります。</p>

<h3>リスティング広告のコツ</h3>
<ul>
<li>検索キーワードを見出しに含める（品質スコア向上）</li>
<li>数字・具体的なベネフィットを入れる</li>
<li>CTAを明確にする（「無料見積もり」「今すぐ購入」）</li>
<li>競合との差別化ポイントを入れる</li>
</ul>

<h2>プレスリリースの書き方</h2>
<p>プレスリリースは<strong>報道機関向けの公式文書</strong>です。客観的な事実を簡潔に伝えることが求められます。</p>

<h3>プレスリリースの構成</h3>
<ul>
<li><strong>タイトル:</strong> ニュース性のある一文（30〜40文字）</li>
<li><strong>サブタイトル:</strong> 補足情報（任意）</li>
<li><strong>リード文:</strong> 5W1H（Who/What/When/Where/Why/How）を冒頭に</li>
<li><strong>本文:</strong> 詳細情報を重要度順に記述（逆三角形構造）</li>
<li><strong>会社概要:</strong> 企業の基本情報</li>
<li><strong>問い合わせ先:</strong> 担当者名・電話番号・メール</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">メディア別ライティングの鉄則</div>
<ul>
<li><strong>読者を知る:</strong> そのメディアを使う人は誰か、何を求めているか</li>
<li><strong>フォーマットに従う:</strong> 各メディアの慣習・制約を理解する</li>
<li><strong>1メディア1目的:</strong> 欲張らず、1つのメッセージに絞る</li>
<li><strong>計測と改善:</strong> データを見て、見出し・CTA・タイミングを最適化する</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q204_1",
                    type: "choice",
                    question: "メールマーケティングで開封率の80%を決めると言われる要素はどれですか？",
                    options: ["本文の長さ", "件名", "送信時間", "差出人名"],
                    answer: 1,
                    explanation: "メールの件名が開封率の80%を決めると言われています。パーソナライズ、数字、緊急性の活用が効果的です。"
                },
                {
                    id: "q204_2",
                    type: "choice",
                    question: "プレスリリースのリード文に含めるべき要素はどれですか？",
                    options: ["AIDA", "5W1H", "CRAP", "4U"],
                    answer: 1,
                    explanation: "プレスリリースのリード文にはWho/What/When/Where/Why/How（5W1H）を含め、読者がすぐに要点を把握できるようにします。"
                },
                {
                    id: "q204_3",
                    type: "choice",
                    question: "SEOライティングで意識すべきGoogleの品質評価基準は何ですか？",
                    options: ["AIDA", "4U", "E-E-A-T", "BEAF"],
                    answer: 2,
                    explanation: "E-E-A-T（Experience:経験、Expertise:専門性、Authoritativeness:権威性、Trustworthiness:信頼性）はGoogleの品質評価ガイドラインで重視される基準です。"
                },
                {
                    id: "q204_4",
                    type: "fill",
                    question: "Web記事のSEOで、1記事あたり集中すべきキーワードの数はいくつですか？（数字で）",
                    answer: "1",
                    explanation: "SEOの基本は1記事1キーワードです。複数のキーワードを狙うと焦点がぼやけ、どのキーワードでも上位表示されにくくなります。"
                }
            ]
        }
    ]
};
