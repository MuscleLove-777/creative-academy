/* ============================================
   Level 4: 動画・映像制作
   ============================================ */
const LEVEL4_DATA = {
    id: 4,
    title: "動画・映像制作",
    icon: "🎬",
    description: "動画制作の基礎知識からショート動画、編集技術、広告動画まで実践的な映像制作スキルを学ぶ",
    modules: [
        {
            id: 401,
            title: "動画制作の基礎知識",
            duration: "20分",
            content: `
<h2>動画制作の基本用語</h2>
<p>動画制作を始める前に、基本的な技術用語を理解しておきましょう。これらの用語は撮影・編集・書き出しのすべての工程で使われます。</p>

<table>
<tr><th>用語</th><th>正式名称</th><th>意味</th><th>一般的な設定値</th></tr>
<tr><td>fps</td><td>Frames Per Second</td><td>1秒間あたりのフレーム（静止画）数。多いほどなめらか</td><td>24fps / 30fps / 60fps</td></tr>
<tr><td>解像度</td><td>Resolution</td><td>画面の画素（ピクセル）数。高いほど鮮明</td><td>1920x1080（FHD）</td></tr>
<tr><td>アスペクト比</td><td>Aspect Ratio</td><td>画面の横と縦の比率</td><td>16:9 / 9:16 / 1:1</td></tr>
<tr><td>ビットレート</td><td>Bitrate</td><td>1秒あたりのデータ量。高いほど高画質だがファイルも大きい</td><td>10〜50 Mbps</td></tr>
<tr><td>コーデック</td><td>Codec</td><td>動画の圧縮・展開方式</td><td>H.264 / H.265 / ProRes</td></tr>
</table>

<h2>解像度の種類と選び方</h2>
<p>動画の解像度は用途に応じて適切に選択します。</p>

<table>
<tr><th>名称</th><th>解像度（px）</th><th>通称</th><th>主な用途</th></tr>
<tr><td>SD</td><td>720 x 480</td><td>標準画質</td><td>DVD、旧式テレビ</td></tr>
<tr><td>HD</td><td>1280 x 720</td><td>ハイビジョン</td><td>Web動画、SNS</td></tr>
<tr><td>Full HD</td><td>1920 x 1080</td><td>フルハイビジョン</td><td>YouTube、テレビ放送</td></tr>
<tr><td>WQHD</td><td>2560 x 1440</td><td>2K</td><td>高品質Web動画</td></tr>
<tr><td>4K UHD</td><td>3840 x 2160</td><td>4K</td><td>映画、高品質映像制作</td></tr>
<tr><td>8K UHD</td><td>7680 x 4320</td><td>8K</td><td>放送局、展示映像</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">実務での推奨設定</div>
ほとんどのWeb動画・SNS動画では<strong>Full HD（1920 x 1080）/ 30fps / H.264</strong>が標準です。4K撮影はトリミングや手ブレ補正に余裕が出るメリットがありますが、編集PCのスペックとストレージ容量に注意しましょう。
</div>

<h2>fpsの使い分け</h2>
<table>
<tr><th>fps</th><th>特徴</th><th>適した用途</th></tr>
<tr><td>24fps</td><td>映画的な質感、やや残像感あり</td><td>映画、MV、シネマティック動画</td></tr>
<tr><td>30fps</td><td>自然な動き、Web標準</td><td>YouTube、SNS動画、Vlog</td></tr>
<tr><td>60fps</td><td>非常になめらか、動きの速いシーン向き</td><td>スポーツ、ゲーム実況、スローモーション素材</td></tr>
<tr><td>120fps以上</td><td>超スローモーション用</td><td>スローモーション演出、特殊撮影</td></tr>
</table>

<h2>撮影の基本</h2>

<h3>構図の基本ルール</h3>
<ul>
<li><strong>三分割法:</strong> 画面を縦横3等分し、交点に被写体を配置する。最も基本的で汎用性の高い構図</li>
<li><strong>日の丸構図:</strong> 被写体を画面中央に配置。インパクトが強いがやや単調</li>
<li><strong>対角線構図:</strong> 被写体を対角線上に配置し、動きやダイナミズムを演出</li>
<li><strong>リーディングライン:</strong> 道路、手すりなど線状の要素で視線を誘導する</li>
</ul>

<h3>3点照明</h3>
<p>映像制作における基本的なライティング手法です。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>キーライト（主光源）</strong>
被写体の斜め前方45度から照射するメインの光。最も明るい光源で、被写体の形状を決定する。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>フィルライト（補助光）</strong>
キーライトの反対側から照射し、影を和らげる。キーライトの半分程度の明るさが目安。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>バックライト（逆光）</strong>
被写体の背後から照射し、輪郭を浮き立たせる。被写体を背景から分離し、立体感を生む。
</div>
</div>
</div>

<h3>音声収録の基本</h3>
<ul>
<li><strong>ピンマイク:</strong> 襟元に装着。インタビューやプレゼン撮影に最適</li>
<li><strong>ショットガンマイク:</strong> カメラ上部に装着。指向性が高く、前方の音を集中的に拾う</li>
<li><strong>ワイヤレスマイク:</strong> 自由な動きが必要な撮影に。最近はスマホ対応の小型製品が人気</li>
<li><strong>収録レベル:</strong> ピーク値が-12dB〜-6dB程度になるよう調整。0dBを超えると音割れが発生する</li>
</ul>

<h2>基本的なカメラワーク</h2>
<table>
<tr><th>カメラワーク</th><th>動き</th><th>効果</th></tr>
<tr><td>フィックス</td><td>カメラ固定</td><td>安定感、説明的な映像</td></tr>
<tr><td>パン</td><td>左右に回転</td><td>広がりを見せる、視線誘導</td></tr>
<tr><td>ティルト</td><td>上下に回転</td><td>高さやスケール感を演出</td></tr>
<tr><td>ズーム</td><td>レンズの画角を変更</td><td>注目点への集中・解放</td></tr>
<tr><td>ドリー</td><td>カメラ自体が前後移動</td><td>臨場感、被写体への接近</td></tr>
<tr><td>トラッキング</td><td>被写体を追いかけて移動</td><td>動きの躍動感</td></tr>
</table>
            `,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "fpsとは何の略ですか？",
                    options: ["File Processing Speed", "Frames Per Second", "Full Picture Size", "Format Per Stream"],
                    answer: 1,
                    explanation: "fpsはFrames Per Second（フレーム毎秒）の略で、1秒間あたりのフレーム（静止画）数を表します。数値が大きいほどなめらかな映像になります。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "Full HDの解像度として正しいものはどれですか？",
                    options: ["1280 x 720", "1920 x 1080", "2560 x 1440", "3840 x 2160"],
                    answer: 1,
                    explanation: "Full HD（フルハイビジョン）の解像度は1920 x 1080pxです。YouTube動画やテレビ放送で広く使われている標準的な解像度です。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "3点照明で、被写体の斜め前方45度から照射するメインの光を何と呼びますか？",
                    options: ["フィルライト", "バックライト", "キーライト", "アンビエントライト"],
                    answer: 2,
                    explanation: "キーライト（主光源）は被写体の斜め前方45度から照射するメインの光源です。最も明るく、被写体の形状を決定する役割を持ちます。"
                },
                {
                    id: "q401_4",
                    type: "fill",
                    question: "カメラを左右に回転させるカメラワークを何と呼びますか？（カタカナで）",
                    answer: "パン",
                    explanation: "パンは、カメラを三脚上で左右に回転させるカメラワークです。広がりを見せたり、視線を誘導する効果があります。"
                }
            ]
        },
        {
            id: 402,
            title: "ショート動画制作",
            duration: "20分",
            content: `
<h2>ショート動画の特徴</h2>
<p>TikTok、Instagram Reels、YouTube Shortsなど、<strong>60秒以内の縦型動画</strong>がSNSマーケティングの主流になっています。短い時間で視聴者の注意を引き、行動を促す設計が求められます。</p>

<h2>縦型動画の構成テンプレート</h2>
<p>効果的なショート動画は、以下の3パート構成が基本です。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>フック（最初の3秒）</strong>
最も重要なパート。「え？」「なにこれ？」と思わせる要素で離脱を防ぐ。具体的な数字、意外な事実、問いかけ、インパクトのあるビジュアルが効果的。
<br><br>
例：「これ知らない人、損してます」「たった3秒で印象が変わるデザインテクニック」
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>本題（4〜50秒）</strong>
フックで引きつけた視聴者に対して、価値のある情報を提供する。テンポよく、1つのトピックに集中する。「ステップ1→ステップ2→ステップ3」のような段階的な構成が分かりやすい。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>CTA（最後の3〜10秒）</strong>
「フォローしてね」「保存して見返してね」「コメントで教えて」など、次のアクションを明確に指示する。フォロー誘導、いいね、コメント促進、プロフィールへの遷移など。
</div>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">ショート動画の黄金比率</div>
<strong>フック 3秒 + 本題 45秒 + CTA 7秒 = 55秒</strong><br>
60秒ギリギリではなく、少し余裕を持たせた55秒程度が理想です。アルゴリズムは「完全視聴率」を重視するため、短めの方がパフォーマンスが上がる傾向があります。
</div>

<h2>テロップデザイン</h2>
<p>ショート動画では<strong>音声をOFFで視聴するユーザーが約70%</strong>と言われています。テロップ（字幕）は必須要素です。</p>

<h3>テロップの基本ルール</h3>
<ul>
<li><strong>フォントサイズ:</strong> スマホで読めるサイズ。最低でも画面幅の1/15程度</li>
<li><strong>配置:</strong> 画面中央〜やや下。上部・下部のUIエリアを避ける</li>
<li><strong>背景:</strong> 半透明の座布団（背景帯）を敷いて可読性を確保する</li>
<li><strong>文字数:</strong> 1画面に表示するテロップは<strong>20文字以内</strong>が理想</li>
<li><strong>強調:</strong> キーワードだけ色やサイズを変えて目立たせる</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">テロップのスタイル例</div>
<table>
<tr><th>スタイル</th><th>特徴</th><th>適した動画</th></tr>
<tr><td>白文字＋黒フチ</td><td>最も汎用的、どんな背景でも読める</td><td>全般</td></tr>
<tr><td>座布団付き</td><td>色付き帯の上に文字を配置</td><td>情報系、ハウツー</td></tr>
<tr><td>手書き風</td><td>カジュアルで親しみやすい</td><td>Vlog、日常系</td></tr>
<tr><td>タイプライター演出</td><td>文字が1文字ずつ現れる</td><td>ストーリー性のある動画</td></tr>
</table>
</div>

<h2>BGM・効果音</h2>
<p>動画の雰囲気を決定づけるBGMと効果音は、<strong>著作権フリーの素材</strong>を使用することが重要です。</p>

<table>
<tr><th>サービス</th><th>特徴</th><th>料金</th><th>おすすめポイント</th></tr>
<tr><td>Artlist</td><td>高品質BGM＆効果音が無制限DL</td><td>年額約$16.6/月〜</td><td>CM・広告にも使える包括ライセンス</td></tr>
<tr><td>Epidemic Sound</td><td>40,000曲以上のライブラリ</td><td>月額$15〜</td><td>YouTube・SNS向けプランが充実</td></tr>
<tr><td>YouTube Audio Library</td><td>YouTube向け無料BGM</td><td>無料</td><td>YouTube投稿なら手軽に利用可能</td></tr>
<tr><td>DOVA-SYNDROME</td><td>日本の無料BGMサイト</td><td>無料</td><td>和風・ポップなど日本語で探しやすい</td></tr>
<tr><td>効果音ラボ</td><td>日本の無料効果音サイト</td><td>無料</td><td>効果音の種類が豊富</td></tr>
</table>

<h2>トランジション効果</h2>
<p>カット間のつなぎに使うトランジション効果は、動画のテンポとスタイルを左右します。</p>

<table>
<tr><th>トランジション</th><th>効果</th><th>使い方</th><th>注意点</th></tr>
<tr><td>カット（直接切替）</td><td>テンポが速く、スピード感を演出</td><td>最も基本的なつなぎ方</td><td>使いすぎても違和感が少ない</td></tr>
<tr><td>ディゾルブ（オーバーラップ）</td><td>前後のシーンが重なりながら転換</td><td>時間経過、場所の変化</td><td>多用すると眠い印象に</td></tr>
<tr><td>ワイプ</td><td>画面が一方向から切り替わる</td><td>場面転換、比較演出</td><td>レトロな印象を与えることも</td></tr>
<tr><td>ズームイン/アウト</td><td>被写体に急接近/離脱</td><td>注目ポイントの強調、フック</td><td>酔う可能性があるため短く</td></tr>
<tr><td>スウィッシュパン</td><td>高速パンでブラーしながら転換</td><td>テンポの良い場面切替</td><td>ショート動画で人気</td></tr>
<tr><td>マスクトランジション</td><td>オブジェクトで画面を覆い隠して転換</td><td>クリエイティブな演出</td><td>手間がかかるが高い効果</td></tr>
</table>

<h2>スマホ撮影テクニック</h2>
<p>プロ品質の動画機材がなくても、<strong>スマートフォンで十分にクオリティの高い映像</strong>が撮影できます。</p>

<div class="info-box tip">
<div class="info-box-title">スマホ撮影の7つのコツ</div>
<ol>
<li><strong>横持ちでなく縦持ち:</strong> ショート動画は9:16。横型コンテンツは16:9で横持ち</li>
<li><strong>グリッド線をON:</strong> カメラ設定で三分割グリッドを表示し、構図を意識する</li>
<li><strong>AE/AFロック:</strong> 画面長押しで露出とフォーカスを固定。撮影中の明るさのチラつきを防ぐ</li>
<li><strong>自然光を活用:</strong> 窓際で顔に光が当たるポジションがベスト。逆光は避ける</li>
<li><strong>三脚・ジンバルを使う:</strong> 手持ちのブレはクオリティを大きく下げる。最低限三脚は用意</li>
<li><strong>外付けマイク:</strong> スマホ内蔵マイクは音質が悪い。ワイヤレスピンマイクの導入が効果的</li>
<li><strong>4Kで撮影、FHDで書き出し:</strong> 4K撮影しておけば、後からトリミングや手ブレ補正に使える</li>
</ol>
</div>
            `,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "ショート動画の構成で最も重要とされるパートはどれですか？",
                    options: ["エンディング", "本題の導入部分", "フック（最初の3秒）", "CTAの後のエンドカード"],
                    answer: 2,
                    explanation: "ショート動画では最初の3秒（フック）が最も重要です。この3秒で視聴者の注意を引けなければ、すぐにスワイプされてしまいます。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "ショート動画のテロップで1画面に表示する理想の文字数は？",
                    options: ["5文字以内", "20文字以内", "50文字以内", "100文字以内"],
                    answer: 1,
                    explanation: "テロップは1画面に表示する文字数を20文字以内に抑えるのが理想です。スマホの小さな画面で瞬時に読める量にすることが重要です。"
                },
                {
                    id: "q402_3",
                    type: "choice",
                    question: "高速パンでブラーしながら場面を切り替えるトランジションは何ですか？",
                    options: ["ディゾルブ", "ワイプ", "スウィッシュパン", "マスクトランジション"],
                    answer: 2,
                    explanation: "スウィッシュパンは高速でパン（横振り）することでブラー（ぼかし）効果が生まれ、テンポよく場面を切り替えるトランジションです。"
                },
                {
                    id: "q402_4",
                    type: "fill",
                    question: "高品質なBGMと効果音が無制限ダウンロードでき、CM・広告にも使える包括ライセンスが特徴の音楽サービスの名前は？",
                    answer: "Artlist",
                    explanation: "Artlistは高品質なBGMと効果音を無制限にダウンロードでき、商用利用可能な包括ライセンスが特徴の音楽サブスクリプションサービスです。"
                }
            ]
        },
        {
            id: 403,
            title: "動画編集の実践",
            duration: "20分",
            content: `
<h2>動画編集ソフト比較</h2>
<p>動画編集ソフトは用途、スキルレベル、予算に応じて適切なものを選びましょう。</p>

<table>
<tr><th>ソフト</th><th>開発元</th><th>料金</th><th>対応OS</th><th>レベル</th><th>特徴</th></tr>
<tr><td>Adobe Premiere Pro</td><td>Adobe</td><td>月額2,728円〜</td><td>Win / Mac</td><td>中〜上級</td><td>業界標準。After Effectsとの連携が強み</td></tr>
<tr><td>DaVinci Resolve</td><td>Blackmagic</td><td>無料 / 買切47,980円</td><td>Win / Mac / Linux</td><td>中〜上級</td><td>カラーグレーディングが世界最高峰</td></tr>
<tr><td>Final Cut Pro</td><td>Apple</td><td>買切48,800円</td><td>Mac専用</td><td>中級</td><td>Mac環境で最適化。直感的な操作性</td></tr>
<tr><td>CapCut</td><td>ByteDance</td><td>無料 / Pro月額1,200円</td><td>Win / Mac / iOS / Android</td><td>初級</td><td>ショート動画特化。テンプレート豊富</td></tr>
<tr><td>iMovie</td><td>Apple</td><td>無料</td><td>Mac / iOS</td><td>初級</td><td>入門に最適。シンプル操作</td></tr>
<tr><td>Filmora</td><td>Wondershare</td><td>年額6,980円〜</td><td>Win / Mac</td><td>初〜中級</td><td>エフェクト豊富でバランスが良い</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">おすすめの選び方</div>
<ul>
<li><strong>プロの映像制作:</strong> Premiere Pro または DaVinci Resolve</li>
<li><strong>カラーグレーディング重視:</strong> DaVinci Resolve（無料版でも十分高機能）</li>
<li><strong>Mac環境で手軽に:</strong> Final Cut Pro</li>
<li><strong>ショート動画メイン:</strong> CapCut</li>
<li><strong>初心者でまず始めたい:</strong> iMovie → Filmora → Premiere Pro の順にステップアップ</li>
</ul>
</div>

<h2>編集ワークフロー</h2>
<p>効率的な動画編集は、正しいワークフローに従うことで実現します。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>素材整理（インジェスト）</strong>
撮影素材をPC内のフォルダに日付やシーンごとに整理。ファイル名をリネームし、プロキシ（低解像度の編集用ファイル）を必要に応じて作成する。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>ラフカット（粗編集）</strong>
使える素材を選び、大まかな順番に並べる。不要な部分をカットし、全体の流れを作る。この段階では細部にこだわらない。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>ファインカット（精密編集）</strong>
カットのタイミングを微調整し、テンポを整える。J-カット、L-カットなどの技法を活用し、シーン間の繋がりをスムーズにする。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>テロップ・テキスト挿入</strong>
字幕、タイトル、ローワーサード（画面下部の名前表示）などを追加する。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>BGM・効果音・ナレーション</strong>
音楽と効果音を追加し、音量バランスを調整する。ナレーションがある場合は先に配置し、それに合わせて映像を調整する。
</div>
</div>
<div class="step">
<div class="step-num">6</div>
<div class="step-content">
<strong>カラーグレーディング</strong>
映像の色味を調整し、統一感やムードを演出する。
</div>
</div>
<div class="step">
<div class="step-num">7</div>
<div class="step-content">
<strong>書き出し（エクスポート）</strong>
用途に応じた設定でファイルを出力する。
</div>
</div>
</div>

<h2>カット編集のテクニック</h2>
<p>プロの編集者が使うカットテクニックを学びましょう。</p>

<table>
<tr><th>テクニック</th><th>説明</th><th>効果</th><th>使用例</th></tr>
<tr><td>J-カット</td><td>次のシーンの音声が映像より先に始まる</td><td>自然な場面転換。次のシーンへの期待感</td><td>インタビュー → 現場映像</td></tr>
<tr><td>L-カット</td><td>前のシーンの音声が映像転換後も続く</td><td>余韻を残す。感情の持続</td><td>話者の声が続く中で反応カットに切替</td></tr>
<tr><td>クロスカット</td><td>2つの場面を交互に見せる</td><td>同時進行の緊張感</td><td>電話シーン、追いかけっこ</td></tr>
<tr><td>マッチカット</td><td>形状や動きが似た映像同士をつなぐ</td><td>視覚的な連続性と驚き</td><td>回転するボール → 回転する地球</td></tr>
<tr><td>ジャンプカット</td><td>同一シーンで時間を飛ばす</td><td>テンポアップ、退屈な部分のスキップ</td><td>YouTube動画の「えー」をカット</td></tr>
<tr><td>カットアウェイ</td><td>メインの映像から一時的に別の映像を挿入</td><td>情報の補足、単調さの解消</td><td>料理の説明中に食材のクローズアップ</td></tr>
</table>

<h2>カラーグレーディングの基礎</h2>
<p>カラーグレーディングは映像の<strong>色味・明るさ・コントラストを調整し、映像に感情やムードを付加する</strong>技術です。</p>

<h3>カラーコレクションとカラーグレーディングの違い</h3>
<ul>
<li><strong>カラーコレクション:</strong> 撮影時のホワイトバランスのズレや露出の不均一を修正し、ニュートラルな状態にすること（技術的な補正）</li>
<li><strong>カラーグレーディング:</strong> 補正済みの映像にクリエイティブな色味を加え、作品のトーンやムードを作ること（芸術的な演出）</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">基本的な調整項目</div>
<ul>
<li><strong>露出（Exposure）:</strong> 全体の明るさ</li>
<li><strong>コントラスト（Contrast）:</strong> 明暗の差</li>
<li><strong>ハイライト / シャドウ:</strong> 明るい部分と暗い部分を個別に調整</li>
<li><strong>彩度（Saturation）:</strong> 色の鮮やかさ</li>
<li><strong>色温度（Temperature）:</strong> 暖色〜寒色の調整</li>
<li><strong>ティント（Tint）:</strong> 緑〜マゼンタの色かぶり補正</li>
</ul>
</div>

<h2>書き出し設定</h2>
<p>編集が完了したら、<strong>配信先に応じた最適な設定</strong>で書き出します。</p>

<table>
<tr><th>配信先</th><th>推奨コーデック</th><th>解像度</th><th>fps</th><th>ビットレート目安</th></tr>
<tr><td>YouTube</td><td>H.264 / H.265</td><td>1920x1080 〜 3840x2160</td><td>30 / 60</td><td>15〜45 Mbps</td></tr>
<tr><td>Instagram Reels</td><td>H.264</td><td>1080x1920</td><td>30</td><td>10〜15 Mbps</td></tr>
<tr><td>TikTok</td><td>H.264</td><td>1080x1920</td><td>30</td><td>10〜15 Mbps</td></tr>
<tr><td>Webサイト埋め込み</td><td>H.264</td><td>1920x1080</td><td>30</td><td>8〜12 Mbps</td></tr>
<tr><td>社内共有</td><td>H.264 / ProRes</td><td>1920x1080</td><td>30</td><td>15〜30 Mbps</td></tr>
</table>
            `,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "カラーグレーディングが世界最高峰と評される動画編集ソフトはどれですか？",
                    options: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve", "CapCut"],
                    answer: 2,
                    explanation: "DaVinci Resolveはカラーグレーディング機能が世界最高峰と評されています。無料版でも高度なカラー調整が可能で、ハリウッド映画の色彩調整にも使用されています。"
                },
                {
                    id: "q403_2",
                    type: "choice",
                    question: "次のシーンの音声が映像より先に始まるカットテクニックは何ですか？",
                    options: ["L-カット", "J-カット", "ジャンプカット", "マッチカット"],
                    answer: 1,
                    explanation: "J-カットは、次のシーンの音声が映像より先に聞こえてくるテクニックです。タイムライン上で音声が「J」の字のように先行する形になることからこの名がつきました。"
                },
                {
                    id: "q403_3",
                    type: "choice",
                    question: "動画編集ワークフローの正しい順序はどれですか？",
                    options: [
                        "カラーグレーディング → ラフカット → テロップ → 書き出し",
                        "素材整理 → ラフカット → ファインカット → 書き出し",
                        "テロップ → BGM → ラフカット → 書き出し",
                        "書き出し → ラフカット → カラーグレーディング → テロップ"
                    ],
                    answer: 1,
                    explanation: "正しいワークフローは、素材整理→ラフカット→ファインカット→テロップ→BGM/効果音→カラーグレーディング→書き出しの順です。"
                },
                {
                    id: "q403_4",
                    type: "fill",
                    question: "撮影時の色のズレを修正してニュートラルな状態にする技術的な補正を何と呼びますか？（カタカナで）",
                    answer: "カラーコレクション",
                    explanation: "カラーコレクションは、ホワイトバランスのズレや露出の不均一を修正してニュートラルな映像にする技術的な補正です。これに対し、カラーグレーディングは芸術的な色味の演出を行います。"
                }
            ]
        },
        {
            id: 404,
            title: "広告動画・ブランド動画",
            duration: "20分",
            content: `
<h2>広告動画の種類</h2>
<p>マーケティング目的で使用される動画は、目的やフォーマットによって複数の種類に分かれます。</p>

<table>
<tr><th>種類</th><th>尺</th><th>目的</th><th>配信先</th><th>特徴</th></tr>
<tr><td>プレロール広告</td><td>6〜30秒</td><td>認知拡大</td><td>YouTube（動画再生前）</td><td>スキップ可/不可の2種類あり</td></tr>
<tr><td>インフィード広告</td><td>15〜60秒</td><td>興味喚起</td><td>SNSフィード内</td><td>自然に溶け込むネイティブ形式</td></tr>
<tr><td>ストーリーズ広告</td><td>15秒以内</td><td>即時アクション</td><td>Instagram/Facebook</td><td>縦型フルスクリーン</td></tr>
<tr><td>ブランドムービー</td><td>60〜180秒</td><td>ブランド価値の伝達</td><td>Webサイト、イベント</td><td>感情に訴えるストーリー</td></tr>
<tr><td>商品紹介動画</td><td>30〜120秒</td><td>商品理解</td><td>EC、LP、SNS</td><td>機能・ベネフィットを視覚化</td></tr>
<tr><td>テスティモニアル</td><td>30〜90秒</td><td>信頼構築</td><td>LP、SNS</td><td>顧客の声・事例紹介</td></tr>
<tr><td>ハウツー動画</td><td>60〜300秒</td><td>顧客教育</td><td>YouTube、自社サイト</td><td>使い方や活用法を解説</td></tr>
</table>

<h2>ABCD法則（YouTube広告の設計フレームワーク）</h2>
<p>Googleが提唱する、効果的なYouTube広告を設計するための<strong>ABCDフレームワーク</strong>は、動画広告制作の基本指針です。</p>

<div class="steps">
<div class="step">
<div class="step-num">A</div>
<div class="step-content">
<strong>Attract（注意を引く）</strong>
最初の5秒で視聴者の注意を捕える。人の顔、驚きの映像、直接的な語りかけ、テンポの良い編集で引きつける。スキップされる前に興味を持たせることが必須。
</div>
</div>
<div class="step">
<div class="step-num">B</div>
<div class="step-content">
<strong>Brand（ブランドを伝える）</strong>
最初の5秒以内にブランド名やロゴを自然に露出する。音声、テロップ、商品映像など複数チャネルでブランドを認知させる。
</div>
</div>
<div class="step">
<div class="step-num">C</div>
<div class="step-content">
<strong>Connect（感情で繋がる）</strong>
ストーリーテリングやユーモア、共感できるシチュエーションで視聴者の感情に訴える。「自分ごと」として感じてもらう演出が重要。
</div>
</div>
<div class="step">
<div class="step-num">D</div>
<div class="step-content">
<strong>Direct（行動を促す）</strong>
明確なCTAで次の行動を指示する。「今すぐ検索」「アプリをダウンロード」「Webサイトを確認」など具体的に。期間限定オファーで緊急性を加えるのも効果的。
</div>
</div>
</div>

<h2>絵コンテの作成</h2>
<p>絵コンテ（ストーリーボード）は、<strong>動画の設計図</strong>です。撮影前に全体の構成を視覚化し、チームで共有するために不可欠なツールです。</p>

<h3>絵コンテに含める要素</h3>
<ul>
<li><strong>シーン番号:</strong> カットの順番</li>
<li><strong>画角の指示:</strong> ワイド、ミディアム、クローズアップなどのショットサイズ</li>
<li><strong>ラフスケッチ:</strong> 画面に映る構図のイメージ（簡単な棒人間でもOK）</li>
<li><strong>セリフ / ナレーション:</strong> そのカットで話される言葉</li>
<li><strong>アクション:</strong> 被写体の動き、カメラワーク</li>
<li><strong>BGM / 効果音の指示:</strong> 音の切り替わりポイント</li>
<li><strong>尺:</strong> 各カットの秒数</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">絵コンテ作成ツール</div>
<ul>
<li><strong>Canva:</strong> テンプレートを使って手軽にストーリーボードを作成</li>
<li><strong>Boords:</strong> オンライン絵コンテ作成ツール。チーム共有が簡単</li>
<li><strong>紙とペン:</strong> 最もシンプルで素早い。アイデア出しの段階ではこれで十分</li>
</ul>
</div>

<h2>ナレーション収録</h2>
<p>ナレーション（ボイスオーバー）は動画の<strong>情報伝達と雰囲気づくり</strong>の両方を担います。</p>

<h3>収録環境の準備</h3>
<ul>
<li><strong>静かな環境:</strong> エアコン、PCファン、外部の騒音を可能な限り排除</li>
<li><strong>反響対策:</strong> カーテンや毛布で壁を覆い、反響を減らす。クローゼットの中も良い収録環境になる</li>
<li><strong>マイク:</strong> USB接続のコンデンサーマイクが手軽。口元から拳1〜2個分の距離が目安</li>
<li><strong>ポップフィルター:</strong> 「パ行」「バ行」の破裂音を防ぐ</li>
</ul>

<h3>AI音声合成の活用</h3>
<p>近年は<strong>AI音声合成</strong>の品質が飛躍的に向上しています。コスト削減や多言語対応に活用できます。</p>
<ul>
<li><strong>VOICEVOX:</strong> 無料の日本語AI音声合成。複数のキャラクターボイスを選択可能</li>
<li><strong>ElevenLabs:</strong> 英語圏で高品質。自分の声をクローンする機能もあり</li>
<li><strong>VOICEPEAK:</strong> 買い切りの日本語ナレーションソフト。自然な抑揚</li>
</ul>

<h2>モーショングラフィックス</h2>
<p>モーショングラフィックスは、<strong>テキスト、図形、イラストなどに動きをつけた映像表現</strong>です。広告動画やブランド動画で多用されます。</p>

<h3>モーショングラフィックスの活用シーン</h3>
<ul>
<li><strong>タイトルアニメーション:</strong> テキストがスライド、フェード、バウンスで登場する演出</li>
<li><strong>データの視覚化:</strong> グラフや数値がアニメーションで変化する</li>
<li><strong>アイコンアニメーション:</strong> サービスの特徴をアイコンの動きで直感的に伝える</li>
<li><strong>トランジション:</strong> シーン間の切替にグラフィックアニメーションを使用</li>
<li><strong>ロゴアニメーション:</strong> ブランドロゴに動きをつけて印象を強化</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">モーショングラフィックスの制作ツール</div>
<table>
<tr><th>ツール</th><th>特徴</th><th>レベル</th></tr>
<tr><td>After Effects</td><td>業界標準。自由度が最も高い</td><td>上級</td></tr>
<tr><td>Canva（アニメーション）</td><td>テンプレートで手軽に作成</td><td>初級</td></tr>
<tr><td>Lottie / Rive</td><td>Web・アプリ向け軽量アニメーション</td><td>中級</td></tr>
<tr><td>DaVinci Resolve（Fusion）</td><td>無料でVFXも可能</td><td>中〜上級</td></tr>
</table>
</div>

<h2>動画KPI（効果測定指標）</h2>
<p>動画マーケティングの成果を測定するための<strong>主要KPI</strong>を理解し、改善サイクルを回しましょう。</p>

<table>
<tr><th>KPI</th><th>指標名</th><th>説明</th><th>目安</th></tr>
<tr><td>再生回数</td><td>View Count</td><td>動画が再生された総回数</td><td>リーチの規模を把握</td></tr>
<tr><td>視聴維持率</td><td>Retention Rate</td><td>動画をどこまで見たかの割合</td><td>50%以上が良好</td></tr>
<tr><td>平均視聴時間</td><td>Avg. Watch Time</td><td>1回あたりの平均視聴秒数</td><td>尺の40%以上が目標</td></tr>
<tr><td>クリック率</td><td>CTR</td><td>動画内のリンクやCTAのクリック率</td><td>1〜3%が一般的</td></tr>
<tr><td>エンゲージメント率</td><td>Engagement Rate</td><td>いいね・コメント・シェアの割合</td><td>3〜6%が良好</td></tr>
<tr><td>コンバージョン率</td><td>CVR</td><td>動画視聴後の目標達成率</td><td>業種・目的により異なる</td></tr>
<tr><td>CPV</td><td>Cost Per View</td><td>1再生あたりの広告コスト</td><td>3〜20円が一般的</td></tr>
<tr><td>ROAS</td><td>Return on Ad Spend</td><td>広告費用対効果</td><td>200%以上が目標</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">KPI分析の注意点</div>
<ul>
<li>再生回数だけで効果を判断しない。<strong>視聴維持率と組み合わせて</strong>評価する</li>
<li>動画の<strong>目的に合ったKPI</strong>を設定する（認知目的ならリーチ重視、獲得目的ならCVR重視）</li>
<li>A/Bテストで動画のどの要素が成果に影響しているかを特定する</li>
<li>定期的にレポートを作成し、<strong>PDCA</strong>サイクルを回す</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "GoogleのABCDフレームワークで「B」が意味するものはどれですか？",
                    options: ["Budget（予算）", "Brand（ブランドを伝える）", "Benefit（便益を示す）", "Broadcast（配信する）"],
                    answer: 1,
                    explanation: "ABCDフレームワークのBはBrand（ブランドを伝える）です。最初の5秒以内にブランド名やロゴを自然に露出し、視聴者にブランドを認知させます。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "絵コンテ（ストーリーボード）の役割として最も適切なものはどれですか？",
                    options: ["完成動画の色味を決定する", "撮影前に動画全体の構成を視覚化する", "BGMの選曲を行う", "ナレーションの録音レベルを設定する"],
                    answer: 1,
                    explanation: "絵コンテは動画の設計図です。撮影前に全体の構成を視覚化し、チーム全体で完成イメージを共有するために使用されます。"
                },
                {
                    id: "q404_3",
                    type: "choice",
                    question: "動画の視聴維持率（Retention Rate）として良好とされる目安はどれですか？",
                    options: ["10%以上", "30%以上", "50%以上", "90%以上"],
                    answer: 2,
                    explanation: "動画の視聴維持率は50%以上が良好とされます。つまり、動画の半分以上を視聴してもらえている状態が望ましいということです。"
                },
                {
                    id: "q404_4",
                    type: "fill",
                    question: "テキスト、図形、イラストなどに動きをつけた映像表現を何と呼びますか？（カタカナで）",
                    answer: "モーショングラフィックス",
                    explanation: "モーショングラフィックスは、テキスト・図形・イラストなどの静的な要素に動き（モーション）を加えた映像表現です。広告動画やブランド動画で多用されます。"
                }
            ]
        }
    ]
};
