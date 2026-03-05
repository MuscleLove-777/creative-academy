/* ============================================
   クリエイティブアカデミー - Main Application
   ============================================ */
const App = {
    levels: [], allModules: [], currentModuleId: null, progress: {}, quizResults: {},

    init() {
        this.levels = [LEVEL1_DATA, LEVEL2_DATA, LEVEL3_DATA, LEVEL4_DATA, LEVEL5_DATA, LEVEL6_DATA];
        this.allModules = [];
        this.levels.forEach(level => { level.modules.forEach(mod => { this.allModules.push({ ...mod, levelId: level.id, levelTitle: level.title }); }); });
        this.loadProgress(); this.buildSidebar(); this.showDashboard();
        if (localStorage.getItem('creative-darkmode') === 'true') document.documentElement.setAttribute('data-theme', 'dark');
        this.updateGlobalProgress();
        document.addEventListener('click', (e) => { const h = e.target.closest('.collapsible-header'); if (h) h.parentElement.classList.toggle('open'); });
    },

    loadProgress() {
        try { const s = localStorage.getItem('creative-progress'); if (s) this.progress = JSON.parse(s);
            const sq = localStorage.getItem('creative-quiz-results'); if (sq) this.quizResults = JSON.parse(sq);
        } catch (e) { this.progress = {}; this.quizResults = {}; }
    },

    saveProgress() { localStorage.setItem('creative-progress', JSON.stringify(this.progress)); localStorage.setItem('creative-quiz-results', JSON.stringify(this.quizResults)); },
    completeModule(id) { this.progress[id] = { completed: true, completedAt: new Date().toISOString() }; this.saveProgress(); this.buildSidebar(); this.updateGlobalProgress(); },
    saveQuizResult(id, result) { this.quizResults[id] = { ...result, attemptedAt: new Date().toISOString() }; this.saveProgress(); },
    isModuleCompleted(id) { return this.progress[id] && this.progress[id].completed; },

    updateGlobalProgress() {
        const total = this.allModules.length, completed = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const fill = document.getElementById('globalProgressFill'), text = document.getElementById('globalProgressText');
        if (fill) fill.style.width = pct + '%'; if (text) text.textContent = `${pct}% 完了 (${completed}/${total})`;
    },

    buildSidebar() {
        const nav = document.getElementById('sidebarNav'); let html = '';
        this.levels.forEach(level => {
            const mods = level.modules, done = mods.filter(m => this.isModuleCompleted(m.id)).length;
            const isCurrent = this.currentModuleId && mods.some(m => m.id === this.currentModuleId);
            html += `<div class="sidebar-level"><div class="sidebar-level-header ${isCurrent ? 'expanded' : ''}" onclick="App.toggleLevel(this)">
                <span>${level.icon} Lv${level.id}: ${level.title}</span>
                <span style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.7rem;opacity:0.7;">${done}/${mods.length}</span><span class="chevron">▶</span></span>
                </div><div class="sidebar-modules ${isCurrent ? 'expanded' : ''}">`;
            mods.forEach(mod => {
                html += `<div class="sidebar-item ${this.isModuleCompleted(mod.id)?'completed':''} ${this.currentModuleId===mod.id?'active':''}" onclick="App.showModule(${mod.id})">
                    <span class="status-dot"></span><span>${mod.title}</span></div>`;
            });
            html += '</div></div>';
        });
        nav.innerHTML = html;
    },

    toggleLevel(h) { h.classList.toggle('expanded'); h.nextElementSibling.classList.toggle('expanded'); },
    toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); },

    showDashboard() {
        this.currentModuleId = null; this.showView('dashboardView'); this.buildSidebar();
        const c = document.getElementById('dashboardView');
        const total = this.allModules.length, done = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const quizzes = Object.keys(this.quizResults).length;
        const avg = quizzes > 0 ? Math.round(Object.values(this.quizResults).reduce((s, r) => s + r.percentage, 0) / quizzes) : 0;
        let html = `<div class="fade-in"><div class="dashboard-hero"><h2>クリエイティブアカデミーへようこそ</h2>
            <p>デザイン・コピーライティング・動画制作を基礎から実践まで体系的に学べる総合学習プラットフォームです。</p></div>
            <div class="dashboard-grid">
                <div class="stat-card"><div class="stat-value">${done}/${total}</div><div class="stat-label">モジュール完了</div></div>
                <div class="stat-card"><div class="stat-value">${quizzes}</div><div class="stat-label">クイズ受験数</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">平均スコア</div></div>
                <div class="stat-card"><div class="stat-value">${this.getEstimatedTime()}</div><div class="stat-label">残り学習時間</div></div>
            </div><h2 style="margin-bottom:20px;font-size:1.3rem;">学習コース</h2><div class="dashboard-grid">`;
        this.levels.forEach(level => {
            const mods = level.modules, d = mods.filter(m => this.isModuleCompleted(m.id)).length, pct = Math.round((d / mods.length) * 100);
            html += `<div class="level-card level-${level.id}" onclick="App.showModule(${mods[0].id})">
                <div class="level-card-header"><div class="level-icon">${level.icon}</div><div><h3>Level ${level.id}: ${level.title}</h3>
                <div class="level-desc">${level.description} (${mods.length}モジュール)</div></div></div>
                <div class="level-progress"><div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
                <div class="level-progress-text">${d}/${mods.length} 完了 (${pct}%)</div></div></div>`;
        });
        html += '</div></div>'; c.innerHTML = html;
    },

    getEstimatedTime() {
        let t = 0; this.allModules.forEach(m => { if (!this.isModuleCompleted(m.id)) { const match = m.duration.match(/(\d+)/); if (match) t += parseInt(match[1]); } });
        if (t === 0) return '完了！'; const h = Math.floor(t / 60), mins = t % 60; return h > 0 ? `約${h}時間${mins}分` : `約${mins}分`;
    },

    showModule(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId); if (!mod) return;
        this.currentModuleId = moduleId; this.showView('moduleView'); this.buildSidebar();
        document.getElementById('sidebar').classList.remove('open');
        const c = document.getElementById('moduleView'), level = this.levels.find(l => l.id === mod.levelId);
        const idx = this.allModules.findIndex(m => m.id === moduleId);
        const prev = idx > 0 ? this.allModules[idx - 1] : null, next = idx < this.allModules.length - 1 ? this.allModules[idx + 1] : null;
        let html = `<div class="fade-in"><div class="module-header">
            <div class="module-breadcrumb"><a onclick="App.showDashboard()">ダッシュボード</a> / <a onclick="App.showModule(${level.modules[0].id})">Level ${level.id}: ${level.title}</a> / ${mod.title}</div>
            <h1 class="module-title">${mod.title}</h1>
            <div class="module-meta"><span>⏱ ${mod.duration}</span><span>${this.isModuleCompleted(moduleId) ? '✅ 完了済み' : '📖 未完了'}</span></div></div>
            <div class="module-body">${mod.content}</div>
            <div class="module-nav"><div>${prev ? `<button class="btn btn-outline" onclick="App.showModule(${prev.id})">← ${prev.title}</button>` : ''}</div>
            <div style="display:flex;gap:12px;">${mod.quiz && mod.quiz.length > 0
                ? `<button class="btn btn-primary btn-lg" onclick="App.startQuiz(${moduleId})">理解度チェック (${mod.quiz.length}問)</button>`
                : `<button class="btn btn-success btn-lg" onclick="App.completeModule(${moduleId}); App.goToNextModule(${moduleId});">完了して次へ</button>`}</div>
            <div>${next ? `<button class="btn btn-outline" onclick="App.showModule(${next.id})">${next.title} →</button>` : ''}</div></div></div>`;
        c.innerHTML = html; document.querySelector('.content').scrollTop = 0;
    },

    startQuiz(moduleId) { const mod = this.allModules.find(m => m.id === moduleId); if (!mod || !mod.quiz) return; this.showView('quizView'); Quiz.start(moduleId, mod.quiz); },
    goToNextModule(id) { const idx = this.allModules.findIndex(m => m.id === id); if (idx < this.allModules.length - 1) this.showModule(this.allModules[idx + 1].id); else { this.showDashboard(); this.showCompletionMessage(); } },

    showCompletionMessage() {
        document.getElementById('modalContent').innerHTML = `<h2>🎓 おめでとうございます！</h2>
            <div class="score-circle pass" style="font-size:2.5rem;">🏆</div>
            <p>全モジュール完了！<br>デザイン・コピー・動画制作の基礎から実践までマスターしました。<br>クリエイティブの現場で活かしていきましょう！</p>
            <div class="modal-actions"><button class="btn btn-primary" onclick="App.closeModal()">ダッシュボードへ</button></div>`;
        document.getElementById('modalOverlay').style.display = 'flex';
    },

    closeModal() { document.getElementById('modalOverlay').style.display = 'none'; },
    showView(viewId) { ['dashboardView','moduleView','quizView','referenceView'].forEach(id => { document.getElementById(id).style.display = id === viewId ? 'block' : 'none'; }); },
    toggleDarkMode() { const d = document.documentElement.getAttribute('data-theme') === 'dark'; if (d) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('creative-darkmode','false'); } else { document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('creative-darkmode','true'); } },
    resetProgress() { if (confirm('全ての学習進捗をリセットしますか？')) { this.progress = {}; this.quizResults = {}; localStorage.removeItem('creative-progress'); localStorage.removeItem('creative-quiz-results'); this.buildSidebar(); this.updateGlobalProgress(); this.showDashboard(); } },

    showReference() {
        this.showView('referenceView'); this.buildSidebar();
        const c = document.getElementById('referenceView');
        const sections = [
            { category: 'デザイン基礎', terms: [
                { name: 'CRAP原則', desc: 'Contrast（コントラスト）・Repetition（反復）・Alignment（整列）・Proximity（近接）の4原則。デザインの基本法則' },
                { name: 'グリッドシステム', desc: '画面を格子状に分割してレイアウトを整理する手法。一貫性のあるデザインを実現する基盤' },
                { name: '余白（ホワイトスペース）', desc: '要素間の空白スペース。情報の読みやすさと視覚的な洗練さを高める重要な要素' },
                { name: 'コントラスト', desc: '色、サイズ、形状などの差異を利用して要素を際立たせる手法。視認性と階層構造を明確にする' },
                { name: 'ヒエラルキー（視覚的階層）', desc: '情報の重要度に応じて視覚的な優先順位をつけること。サイズ・色・配置で表現する' },
            ]},
            { category: '色彩・タイポグラフィ', terms: [
                { name: '色相環', desc: '色の関係性を円形に配置した図。補色、類似色、トライアドなどの配色理論の基礎となる' },
                { name: '補色', desc: '色相環で正反対に位置する色の組み合わせ。高いコントラストとインパクトを生み出す' },
                { name: 'カーニング', desc: '特定の文字ペア間のスペースを調整すること。文字の視覚的なバランスを整える技法' },
                { name: 'リーディング（行間）', desc: 'テキストの行と行の間隔。読みやすさに大きく影響する重要なタイポグラフィ要素' },
                { name: 'セリフ', desc: '文字の端にある小さな装飾（ひげ飾り）。Times New Romanなどが代表例。格式や伝統を表現' },
                { name: 'サンセリフ', desc: 'セリフのない書体。Helvetica、Arialなどが代表例。モダンでクリーンな印象を与える' },
            ]},
            { category: 'コピーライティング', terms: [
                { name: 'AIDA', desc: 'Attention（注意）→Interest（関心）→Desire（欲求）→Action（行動）の購買心理プロセスモデル' },
                { name: 'USP', desc: 'Unique Selling Proposition（独自の売り）。競合と差別化する独自の価値提案' },
                { name: 'CTA', desc: 'Call To Action（行動喚起）。ユーザーに具体的なアクションを促すボタンやテキスト' },
                { name: 'ヘッドライン', desc: '広告やコンテンツの見出し。読者の注意を引き、続きを読ませるための最重要要素' },
                { name: 'ボディコピー', desc: '本文テキスト。ヘッドラインで引きつけた読者に詳細な情報と価値を伝える部分' },
                { name: 'PAS法', desc: 'Problem（問題提起）→Agitate（問題の深刻さを強調）→Solution（解決策の提示）のコピー構成法' },
            ]},
            { category: '動画制作', terms: [
                { name: 'フレームレート', desc: '1秒間に表示するフレーム数（fps）。24fps（映画）、30fps（TV）、60fps（スポーツ・ゲーム）が一般的' },
                { name: '解像度', desc: '映像の画素数。1920x1080（FHD）、3840x2160（4K）など。画質の精細さを決定する' },
                { name: 'カラーグレーディング', desc: '映像の色調を調整・演出する後処理工程。映像の雰囲気やムードを決定する重要な工程' },
                { name: 'トランジション', desc: 'シーン間の切り替え効果。カット、フェード、ディゾルブ、ワイプなどの種類がある' },
                { name: 'LUT', desc: 'Look Up Table。色変換テーブル。カラーグレーディングのプリセットとして使用される' },
            ]},
            { category: 'ブランディング・UI/UX', terms: [
                { name: 'ブランドアイデンティティ', desc: 'ブランドの視覚的・言語的な一貫した表現体系。ロゴ、カラー、書体、トーンなどで構成' },
                { name: 'ペルソナ', desc: 'ターゲットユーザーを具体的に人物像として描いたもの。デザインや施策の方向性を定める基準' },
                { name: 'ワイヤーフレーム', desc: 'Webサイトやアプリの画面構成を示す設計図。レイアウトと情報設計を視覚化する' },
                { name: 'プロトタイプ', desc: '実際の操作感を再現した試作品。ユーザーテストやステークホルダーとの合意形成に活用' },
            ]},
            { category: 'ツール・AI', terms: [
                { name: 'Figma', desc: 'ブラウザベースのUIデザインツール。リアルタイム共同編集が特徴。業界標準のデザインツール' },
                { name: 'Canva', desc: '非デザイナー向けのオンラインデザインツール。テンプレート豊富で直感的に操作可能' },
                { name: 'Adobe CC', desc: 'Adobe Creative Cloud。Photoshop、Illustrator、Premiere Proなどプロ向けクリエイティブツール群' },
                { name: 'Midjourney', desc: 'テキストプロンプトから画像を生成するAIツール。コンセプトアートやビジュアル素材の作成に活用' },
                { name: 'ChatGPT', desc: 'OpenAIの大規模言語モデル。コピーライティング、アイデア出し、リサーチなどクリエイティブ業務を支援' },
                { name: 'Premiere Pro', desc: 'Adobe製の業界標準動画編集ソフト。映画、TV、Web動画など幅広いプロジェクトに対応' },
            ]}
        ];
        const colors = { 'デザイン基礎': '#e11d48', '色彩・タイポグラフィ': '#0891b2', 'コピーライティング': '#7c3aed', '動画制作': '#059669', 'ブランディング・UI/UX': '#dc2626', 'ツール・AI': '#f59e0b' };
        let html = `<div class="fade-in"><h1 style="font-size:1.6rem;margin-bottom:8px;">用語リファレンス</h1>
            <p style="color:var(--text-secondary);margin-bottom:24px;">クリエイティブ業界に関する重要用語の一覧です。</p>
            <div class="reference-search"><input type="text" id="refSearchInput" placeholder="用語名で検索..." oninput="App.filterReference()"></div>`;
        sections.forEach(s => {
            html += `<div class="ref-domain-section"><h2 style="font-size:1.2rem;margin:24px 0 12px;color:${colors[s.category] || '#333'}">${s.category}</h2><div style="display:grid;gap:8px;">`;
            s.terms.forEach(t => {
                html += `<div class="ref-var-row" data-var="${t.name}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:16px;border-left:4px solid ${colors[s.category] || '#333'}">
                    <div style="min-width:160px;font-weight:700;font-size:0.95rem;">${t.name}</div><div style="font-size:0.85rem;color:var(--text-secondary)">${t.desc}</div></div>`;
            });
            html += '</div></div>';
        });
        html += '</div>'; c.innerHTML = html;
    },

    filterReference() {
        const q = document.getElementById('refSearchInput').value.toLowerCase().trim();
        document.querySelectorAll('.ref-var-row').forEach(r => { r.style.display = (!q || r.getAttribute('data-var').toLowerCase().includes(q)) ? '' : 'none'; });
    }
};

document.addEventListener('DOMContentLoaded', () => { App.init(); });
