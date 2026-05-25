/* ===== DATA ===== */
const vietnameseData = {
    alphabet: [
        { char: 'A', name: 'A', pronunciation: 'A', example: 'Ăn - Eatting' },
        { char: 'Ă', name: 'Ă', pronunciation: 'Ă', example: 'Ăn cơm - Eat rice' },
        { char: 'Â', name: 'Â', pronunciation: 'Â', example: 'Ây là - That is' },
        { char: 'B', name: 'B', pronunciation: 'Be', example: 'Bà - Grandmother' },
        { char: 'C', name: 'C', pronunciation: 'Ce', example: 'Cái - Item/object' },
        { char: 'D', name: 'D', pronunciation: 'De', example: 'Dạo này - Lately' },
        { char: 'Đ', name: 'Đ', pronunciation: 'De', example: 'Đi - Go' },
        { char: 'E', name: 'E', pronunciation: 'E', example: 'Em - Younger sibling' },
        { char: 'Ê', name: 'Ê', pronunciation: 'Ê', example: 'Êm - Soft' },
        { char: 'G', name: 'G', pronunciation: 'Ge', example: 'Gặp - Meet' },
        { char: 'H', name: 'H', pronunciation: 'Ha', example: 'Hôm nay - Today' },
        { char: 'I', name: 'I', pronunciation: 'I', example: 'Ít - Little' },
        { char: 'K', name: 'K', pronunciation: 'Ka', example: 'Khi - When' },
        { char: 'L', name: 'L', pronunciation: 'Le', example: 'Lại - Again' },
        { char: 'M', name: 'M', pronunciation: 'Me', example: 'Mẹ - Mother' },
        { char: 'N', name: 'N', pronunciation: 'Ne', example: 'Năng - Ability' },
        { char: 'O', name: 'O', pronunciation: 'O', example: 'Ơi - Hey' },
        { char: 'Ô', name: 'Ô', pronunciation: 'Ô', example: 'Ông - Grandfather' },
        { char: 'Ơ', name: 'Ơ', pronunciation: 'Ơ', example: 'Ơi - Oh' },
        { char: 'P', name: 'P', pronunciation: 'Pe', example: 'Phần - Part' },
        { char: 'Q', name: 'Q', pronunciation: 'Cu', example: 'Qua - Through' },
        { char: 'R', name: 'R', pronunciation: 'Re', example: 'Ra - Out' },
        { char: 'S', name: 'S', pronunciation: 'Se', example: 'Sáng - Morning' },
        { char: 'T', name: 'T', pronunciation: 'Te', example: 'Thời - Time' },
        { char: 'Th', name: 'Th', pronunciation: 'The', example: 'Thằng - Boy' },
        { char: 'Tr', name: 'Tr', pronunciation: 'Tre', example: 'Trọng - Important' },
        { char: 'U', name: 'U', pronunciation: 'U', example: 'Ưu - Prefer' },
        { char: 'Ư', name: 'Ư', pronunciation: 'Ư', example: 'Ưu tiên - Priority' },
        { char: 'V', name: 'V', pronunciation: 'Ve', example: 'Và - And' },
        { char: 'X', name: 'X', pronunciation: 'Si', example: 'Xin - Please' },
        { char: 'Y', name: 'Y', pronunciation: 'I', example: 'Ý - Idea' }
    ],
    grammar: [
        {
            id: 1,
            title: 'Chào hỏi cơ bản',
            category: 'greeting',
            vietnamese: 'Xin chào, anh khỏe không?',
            japanese: 'こんにちは、お疲れ様です。',
            example: 'Dùng khi gặp người lần đầu trong ngày'
        },
        {
            id: 2,
            title: 'Mệnh lệnh - Đeo kính bảo vệ',
            category: 'command',
            vietnamese: 'Bạn phải đeo kính bảo vệ!',
            japanese: '保護メガネを着用してください！',
            example: 'Nhắc nhở an toàn trong xưởng'
        },
        {
            id: 3,
            title: 'Mệnh lệnh - Sắp xếp vật dụng',
            category: 'command',
            vietnamese: 'Hãy sắp xếp những thứ này lại.',
            japanese: 'これらのものを整理してください。',
            example: 'Hướng dẫn công việc vệ sinh 5S'
        },
        {
            id: 4,
            title: 'Báo cáo sự cố - Lỗi sản phẩm',
            category: 'report',
            vietnamese: 'Tôi phát hiện lỗi ở sản phẩm này.',
            japanese: 'この製品に欠陥があります。',
            example: 'Báo cáo vấn đề cho quản lý'
        },
        {
            id: 5,
            title: 'Báo cáo sự cố - Máy hỏng',
            category: 'report',
            vietnamese: 'Máy này không hoạt động bình thường.',
            japanese: 'この機械が正常に動作していません。',
            example: 'Thông báo khi thiết bị gặp vấn đề'
        },
        {
            id: 6,
            title: 'Hỏi về quy trình',
            category: 'greeting',
            vietnamese: 'Anh có thể hướng dẫn tôi quy trình này không?',
            japanese: 'このプロセスを教えていただけますか？',
            example: 'Yêu cầu giúp đỡ khi không hiểu công việc'
        },
        {
            id: 7,
            title: 'Cảm ơn',
            category: 'greeting',
            vietnamese: 'Cảm ơn bạn đã giúp tôi.',
            japanese: 'ご協力ありがとうございました。',
            example: 'Bày tỏ lòng cảm ơn đồng nghiệp'
        },
        {
            id: 8,
            title: 'Mệnh lệnh - Kiểm tra chất lượng',
            category: 'command',
            vietnamese: 'Kiểm tra kỹ lưỡng sản phẩm này.',
            japanese: 'この製品をよく検査してください。',
            example: 'Hướng dẫn quy trình kiểm tra'
        }
    ],
    dialogues: [
        {
            id: 1,
            title: 'Nhắc nhở an toàn',
            vietnamese: 'Bạn phải đeo kính bảo vệ khi làm việc ở đây. Đó là quy tắc an toàn của chúng tôi.',
            japanese: 'ここで作業する場合、保護メガネを着用する必要があります。これは私たちの安全ルールです。',
            category: 'safety'
        },
        {
            id: 2,
            title: 'Dọn dẹp vệ sinh 5S',
            vietnamese: 'Bây giờ chúng ta cần sắp xếp khu vực làm việc, loại bỏ những thứ không cần thiết, và vệ sinh sạch sẽ theo tiêu chuẩn 5S.',
            japanese: '今、私たちは作業エリアを整理し、不要なものを取り除き、5S基準に従ってきれいに掃除する必要があります。',
            category: 'cleaning'
        },
        {
            id: 3,
            title: 'Báo cáo sản phẩm lỗi',
            vietnamese: 'Tôi phát hiện ra một lỗi trong sản phẩm này. Chúng ta cần báo cáo ngay cho quản lý và không được bán sản phẩm lỗi này.',
            japanese: 'この製品に欠陥があることに気付きました。すぐにマネージャーに報告する必要があり、この欠陥製品は販売できません。',
            category: 'quality'
        },
        {
            id: 4,
            title: 'Hỏi về quy trình làm việc',
            vietnamese: 'Em xin hỏi, quy trình kiểm tra chất lượng sản phẩm như thế nào? Anh có thể hướng dẫn em không?',
            japanese: '申し訳ございませんが、製品品質検査のプロセスはどのようなものですか？ご指導していただけますか？',
            category: 'training'
        },
        {
            id: 5,
            title: 'Báo cáo tình trạng công việc',
            vietnamese: 'Công việc hôm nay đã hoàn thành 80%. Chúng tôi sẽ hoàn tất phần còn lại vào chiều nay.',
            japanese: '今日の仕事は80％完了しました。残りの部分は今日の午後に完了します。',
            category: 'report'
        },
        {
            id: 6,
            title: 'Yêu cầu hỗ trợ',
            vietnamese: 'Anh ơi, máy này có vấn đề rồi. Liệu anh có thể giúp tôi sửa chữa nó không?',
            japanese: 'すみません、この機械に問題があります。修理を手伝っていただけますか？',
            category: 'help'
        },
        {
            id: 7,
            title: 'Tuân thủ tiêu chuẩn an toàn',
            vietnamese: 'Vui lòng không chạy hoặc đi nhanh trên sàn xưởng. Điều này có thể gây nguy hiểm cho bạn và những người khác.',
            japanese: '工場の床を走ったり、速く歩いたりしないでください。これはあなたと他の人に危険を及ぼす可能性があります。',
            category: 'safety'
        },
        {
            id: 8,
            title: 'Báo cáo về hiệu suất',
            vietnamese: 'Tháng này, nhóm của chúng ta đã tăng năng suất lên 15% so với tháng trước. Rất tốt!',
            japanese: '今月、私たちのチームは先月と比べて生産性を15％向上させました。素晴らしい！',
            category: 'report'
        },
        {
            id: 9,
            title: 'Hỏi về lịch trình',
            vietnamese: 'Khi nào chúng ta sẽ bắt đầu dự án mới? Tôi muốn biết lịch trình cụ thể.',
            japanese: '新しいプロジェクトをいつ開始しますか？具体的なスケジュールを知りたいです。',
            category: 'planning'
        },
        {
            id: 10,
            title: 'Cảm ơn và lời tạm biệt',
            vietnamese: 'Cảm ơn bạn rất nhiều vì đã giúp tôi ngày hôm nay. Hẹn gặp lại bạn vào ngày mai.',
            japanese: '今日、私を手伝ってくれてありがとうございました。明日またお会いしましょう。',
            category: 'courtesy'
        }
    ]
};

/* ===== STATE MANAGEMENT ===== */
let appState = {
    currentScreen: 'home',
    currentAlphabet: null,
    currentGrammar: null,
    currentDialogue: null,
    xp: 0,
    streak: 0,
    completedAlphabets: [],
    completedGrammars: [],
    completedDialogues: [],
    grammarFilter: 'all',
    shadowingMode: false
};

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadState();
    renderAlphabetGrid();
    renderGrammarList();
    renderDialogueList();
    setupEventListeners();
});

function initializeApp() {
    console.log('🚀 Cyber Tiếng Việt Pro initialized');
}

function setupEventListeners() {
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const screen = e.target.getAttribute('data-screen');
            switchScreen(screen);
        });
    });

    // Modal close button
    const modal = document.getElementById('shadowing-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeShadowingModal();
        });
    }
}

/* ===== SCREEN MANAGEMENT ===== */
function switchScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(screenName);
    if (targetScreen) {
        targetScreen.classList.add('active');
        appState.currentScreen = screenName;
        updateNavButtons();
        scrollToTop();
    }
}

function updateNavButtons() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-screen') === appState.currentScreen) {
            btn.classList.add('active');
        }
    });
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

/* ===== ALPHABET FUNCTIONS ===== */
function renderAlphabetGrid() {
    const grid = document.getElementById('alphabet-grid');
    if (!grid) return;

    grid.innerHTML = vietnameseData.alphabet.map(item => `
        <div class="alphabet-box ${appState.completedAlphabets.includes(item.char) ? 'active' : ''}"
             onclick="selectAlphabet('${item.char}')">
            ${item.char}
        </div>
    `).join('');

    updateAlphabetProgress();
}

function selectAlphabet(char) {
    const item = vietnameseData.alphabet.find(a => a.char === char);
    if (!item) return;

    appState.currentAlphabet = char;

    // Update UI
    document.querySelectorAll('.alphabet-box').forEach(box => box.classList.remove('active'));
    event.target.classList.add('active');

    // Display details
    document.getElementById('alphabet-char-name').textContent = `Ký tự: ${item.name}`;
    document.getElementById('alphabet-char-display').textContent = item.char;
    document.getElementById('alphabet-pronunciation').textContent = `Phát âm: ${item.pronunciation}`;
    document.getElementById('alphabet-example').textContent = `Ví dụ: ${item.example}`;

    // Mark as completed
    if (!appState.completedAlphabets.includes(char)) {
        appState.completedAlphabets.push(char);
        addXP(5);
    }

    updateAlphabetProgress();
    saveState();
}

function playAlphabetAudio() {
    if (!appState.currentAlphabet) return;

    const item = vietnameseData.alphabet.find(a => a.char === appState.currentAlphabet);
    if (!item) return;

    const utterance = new SpeechSynthesisUtterance(item.pronunciation);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    // Animate button
    animateButton('alphabet-play-btn');
}

function updateAlphabetProgress() {
    const total = vietnameseData.alphabet.length;
    const completed = appState.completedAlphabets.length;
    const percentage = Math.round((completed / total) * 100);

    document.getElementById('alphabet-progress').textContent = percentage;
    const progressBar = document.getElementById('alphabet-progress-bar');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
}

/* ===== GRAMMAR FUNCTIONS ===== */
function renderGrammarList() {
    const list = document.getElementById('grammar-list');
    if (!list) return;

    const filtered = filterGrammarData(appState.grammarFilter);

    list.innerHTML = filtered.map(item => `
        <div class="grammar-item">
            <div class="grammar-title">${item.title}</div>
            <div class="grammar-vietnamese">🇻🇳 ${item.vietnamese}</div>
            <div class="grammar-japanese">🇯🇵 ${item.japanese}</div>
            <div class="grammar-example">💡 ${item.example}</div>
            <div class="grammar-controls">
                <button class="btn btn-audio" onclick="speakGrammar('${item.id}')">🔊 Phát Âm</button>
                <button class="btn btn-mic" onclick="startShadowingMode(${item.id})">🎙️ Nhắc Lại</button>
            </div>
        </div>
    `).join('');

    updateGrammarProgress();
}

function filterGrammarData(filter) {
    if (filter === 'all') return vietnameseData.grammar;
    return vietnameseData.grammar.filter(g => g.category === filter);
}

function filterGrammar(filter) {
    appState.grammarFilter = filter;

    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderGrammarList();
}

function speakGrammar(id) {
    const item = vietnameseData.grammar.find(g => g.id == id);
    if (!item) return;

    const utterance = new SpeechSynthesisUtterance(item.vietnamese);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    animateButton(event.target);
}

function updateGrammarProgress() {
    const total = vietnameseData.grammar.length;
    const completed = appState.completedGrammars.length;
    const percentage = Math.round((completed / total) * 100);

    document.getElementById('grammar-progress').textContent = percentage;
    const progressBar = document.getElementById('grammar-progress-bar');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
}

/* ===== DIALOGUE FUNCTIONS ===== */
function renderDialogueList() {
    const list = document.getElementById('dialogue-list');
    if (!list) return;

    list.innerHTML = vietnameseData.dialogues.map(item => `
        <div class="dialogue-item ${appState.completedDialogues.includes(item.id) ? 'completed' : ''}">
            <div class="dialogue-title">
                <div>${item.title}</div>
                ${appState.completedDialogues.includes(item.id) ? '<div class="dialogue-badge">✓ Hoàn thành</div>' : ''}
            </div>
            <div class="dialogue-vietnamese">🇻🇳 ${item.vietnamese}</div>
            <div class="dialogue-japanese">🇯🇵 ${item.japanese}</div>
            <div class="dialogue-controls">
                <button class="btn btn-audio" onclick="speakDialogue(${item.id})">🔊 Phát Âm</button>
                <button class="btn btn-mic" onclick="startShadowingMode(${item.id}, 'dialogue')">🎙️ Nhắc Lại</button>
            </div>
        </div>
    `).join('');

    updateDialogueProgress();
}

function speakDialogue(id) {
    const item = vietnameseData.dialogues.find(d => d.id === id);
    if (!item) return;

    const utterance = new SpeechSynthesisUtterance(item.vietnamese);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    animateButton(event.target);
}

function updateDialogueProgress() {
    const total = vietnameseData.dialogues.length;
    const completed = appState.completedDialogues.length;
    const percentage = Math.round((completed / total) * 100);

    document.getElementById('dialogue-progress').textContent = percentage;
    const progressBar = document.getElementById('dialogue-progress-bar');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
}

/* ===== SHADOWING MODE ===== */
function startShadowingMode(id, type = 'grammar') {
    let item;
    if (type === 'dialogue') {
        item = vietnameseData.dialogues.find(d => d.id === id);
    } else {
        item = vietnameseData.grammar.find(g => g.id == id);
    }

    if (!item) return;

    appState.shadowingMode = true;
    document.getElementById('shadowing-text').textContent = `"${item.vietnamese}"`;
    document.getElementById('shadowing-modal').classList.add('active');
}

function closeShadowingModal() {
    document.getElementById('shadowing-modal').classList.remove('active');
    appState.shadowingMode = false;
}

function startShadowing() {
    const countdownEl = document.getElementById('countdown');
    let count = 3;

    countdownEl.textContent = count;

    const interval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownEl.textContent = count;
        } else {
            clearInterval(interval);
            countdownEl.textContent = '🎤 Bạn có 30 giây để đọc lại!';

            // Auto complete after 30 seconds
            setTimeout(() => {
                completeShadowingMode();
            }, 30000);
        }
    }, 1000);
}

function completeShadowingMode() {
    addXP(10);
    appState.streak++;

    // Show completion message
    const countdownEl = document.getElementById('countdown');
    countdownEl.innerHTML = '✅ Tuyệt vời! +10 XP<br>🔥 Streak: +1';

    setTimeout(() => {
        closeShadowingModal();
        renderDialogueList();
        renderGrammarList();
    }, 1500);

    saveState();
}

/* ===== XP & STATS ===== */
function addXP(amount) {
    appState.xp += amount;
    updateXPDisplay();
    saveState();
}

function updateXPDisplay() {
    document.getElementById('xp-count').textContent = appState.xp;
    document.getElementById('total-xp').textContent = appState.xp;
    document.getElementById('streak-count').textContent = appState.streak;
    document.getElementById('total-days').textContent = appState.streak;
    document.getElementById('total-learned').textContent = 
        appState.completedAlphabets.length + appState.completedGrammars.length + appState.completedDialogues.length;
}

/* ===== ANIMATION HELPERS ===== */
function animateButton(element) {
    if (typeof element === 'string') {
        element = document.getElementById(element);
    }

    if (!element) return;

    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'pulse 0.5s ease-in-out';
    }, 10);
}

/* ===== STATE PERSISTENCE ===== */
function saveState() {
    localStorage.setItem('cyberVietProState', JSON.stringify(appState));
}

function loadState() {
    const saved = localStorage.getItem('cyberVietProState');
    if (saved) {
        const loaded = JSON.parse(saved);
        appState = { ...appState, ...loaded };
        updateXPDisplay();
    }
}

/* ===== EXPORT FOR EXTERNAL USE ===== */
window.switchScreen = switchScreen;
window.selectAlphabet = selectAlphabet;
window.playAlphabetAudio = playAlphabetAudio;
window.filterGrammar = filterGrammar;
window.speakGrammar = speakGrammar;
window.speakDialogue = speakDialogue;
window.startShadowingMode = startShadowingMode;
window.closeShadowingModal = closeShadowingModal;
window.startShadowing = startShadowing;
window.completeShadowingMode = completeShadowingMode;
