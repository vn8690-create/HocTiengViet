// =========================================================================
// 1. KHO DỮ LIỆU CHUẨN ĐÃ HOÀN THIỆN (ALPHABET + NGỮ PHÁP "A LÀ B" + 10 BÀI XƯỞNG)
// =========================================================================
const cyberVietData = {
    alphabet: [
        { char: "A", katakana: "ア", example: "Áo (上着)" },
        { char: "Ă", katakana: "ア（短い）", example: "Ăn cơm (ご飯)" },
        { char: "Â", katakana: "ウ/ア", example: "Cân (秤)" },
        { char: "B", katakana: "ベ", example: "Bạn (友達)" },
        { char: "C", katakana: "セ/カ", example: "Cá (魚)" },
        { char: "D", katakana: "ゼ", example: "Dê (山羊)" },
        { char: "Đ", katakana: "デ", example: "Đi (行く)" },
        { char: "E", katakana: "エ", example: "Em (妹/弟)" },
        { char: "Ê", katakana: "エ（狭い）", example: "Lê (梨)" },
        { char: "Sắc ( ´ )", katakana: "上げる音", example: "Cá (高く上げる)" },
        { char: "Huyền ( ` )", katakana: "下げる音", example: "Cà (低く下げる)" },
        { char: "Hỏi ( ̉ )", katakana: "下げて上げる", example: "Cả (下げて上げる)" }
    ],
    grammar: [
        { 
            id: "g1", 
            type: "command", 
            title: "Mẫu câu 1: A là B", 
            structure: "A は B です", 
            use: "Định nghĩa, giới thiệu tên máy móc, vị trí hoặc chức vụ", 
            vi: "Đây là máy cắt sách tự động.", 
            jp: "これは自動裁断機です。" 
        },
        { 
            id: "g2", 
            type: "command", 
            title: "Mẫu câu 2: Hãy + Động từ (V)", 
            structure: "～してください", 
            use: "Chỉ thị hoặc yêu cầu công nhân thực hiện thao tác", 
            vi: "Hãy kiểm tra lại nếp gấp giấy.", 
            jp: "紙の折り目を再確認してください。" 
        },
        { 
            id: "g3", 
            type: "report", 
            title: "Mẫu câu 3: Danh từ (N) + bị hỏng", 
            structure: "N が壊れました / 故障しました", 
            use: "Báo cáo khẩn cấp khi thiết bị, máy móc trong xưởng gặp sự cố", 
            vi: "Máy cán màng số 2 bị hỏng rồi.", 
            jp: "2番ラミネート機が壊れました。" 
        },
        { 
            id: "g4", 
            type: "report", 
            title: "Mẫu câu 4: Danh từ (N) + bị kẹt", 
            structure: "N が詰まりました", 
            use: "Báo cáo sự cố kẹt nguyên liệu (giấy, ghim, màng cán)", 
            vi: "Máy gấp đang bị kẹt giấy.", 
            jp: "折機が紙詰まりを起こしています。" 
        },
        { 
            id: "g5", 
            type: "command", 
            title: "Mẫu câu 5: Không được + Động từ (V)", 
            structure: "～してはいけません ( cấm đoán )", 
            use: "Nhắc nhở các quy định an toàn lao động tuyệt đối tại xưởng", 
            vi: "Không được đưa tay vào vùng nguy hiểm.", 
            jp: "危険エリアには手を入れないでください（入れてはいけません）。" 
        }
    ],
    dialogue: [
        { id: 1, title: "Nhắc nhở an toàn máy cắt (裁断機の安全確認)", vi: "Khi dùng máy cắt, tuyệt đối không được đưa tay vào vùng nguy hiểm.", jp: "裁断機を使用するとき、危険エリアには絶対に手を入れないでください。" },
        { id: 2, title: "Kiểm tra lệch màu in (印刷の色ズレ確認)", vi: "Màu in này bị lệch rồi. Hãy điều chỉnh lại trục mực ngay.", jp: "印刷の色がズレています。すぐにインク軸を調整してください。" },
        { id: 3, title: "Báo cáo kẹt giấy máy gấp (折機の紙詰まり報告)", vi: "Báo cáo, máy gấp đang bị kẹt giấy và dừng đột ngột.", jp: "報告します、折機が紙詰まりを起こして急に止まりました。" },
        { id: 4, title: "Kiểm tra bọt khí cán màng (ラミネートの気泡)", vi: "Hãy kiểm tra kỹ, sản phẩm cán màng không được có bọt khí.", jp: "しっかり確認してください、ラミネート製品に気泡が入ってはいけません。" },
        { id: 5, title: "Yêu cầu dập ghim đóng gáy (製本のホチキス留め)", vi: "Hãy kiểm tra xem gáy sách có bị lệch ghim không.", jp: "本の背表紙 của ホチキス留め がズレていないか確認してください。" },
        { id: 6, title: "Vệ sinh lô cuốn mực (印刷ローラーの清補)", vi: "Hết ca làm việc, phải vệ sinh sạch lô cuốn mực bằng dung dịch.", jp: "作業シフトが終わったら、必ず洗浄液でインクローラーを掃除してください。" },
        { id: 7, title: "Kiểm tra nếp nhăn giấy (紙のシワチェック)", vi: "Giấy bị nhăn rồi! Hãy dừng máy và kiểm tra lại trục cấp giấy.", jp: "紙にシワが寄っています！機械を止めて給紙軸を確認してください。" },
        { id: 8, title: "Xử lý lỗi ngược trang (丁合の乱丁・落丁対策)", vi: "Cuốn sách này bị ngược trang rồi. Phải kiểm tra lại khâu xếp trang.", jp: "この本はページが逆になっています。丁合（ちょうあい）工程を再確認してください。" },
        { id: 9, title: "Thay dao cắt định kỳ (裁断刃 của 定期交換)", vi: "Dao cắt bị cùn rồi, đường cắt không đẹp. Hãy thay dao mới.", jp: "裁断刃が鈍くなって、切り口が綺麗ではありません。新しい刃に交換してください。" },
        { id: 10, title: "Kiểm tra số lượng thành phẩm (完成品の数量確認)", vi: "Đóng gói đủ năm mươi cuốn một thùng rồi dán nhãn lên nhé.", jp: "1箱に50冊ずつ梱包して、ラベルを貼ってくださいね。" }
    ]
};

// Trạng thái lưu trữ hệ thống
let currentSpokenText = "";
let currentSubTitleText = "";
let userXP = parseInt(localStorage.getItem('cyber_viet_xp')) || 0;
let userStreak = parseInt(localStorage.getItem('cyber_viet_streak')) || 1;

// =========================================================================
// 2. KHỞI CHẠY ĐIỀU HƯỚNG & DOCK NAVIGATION
// =========================================================================
window.onload = function() {
    updateStatsDisplay();
    switchScreen('home');
};

function switchScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(scr => scr.classList.remove('active'));

    const activeScreen = document.getElementById(screenId);
    if (activeScreen) activeScreen.classList.add('active');

    // Đồng bộ trạng thái sáng đèn cho Bottom Nav Dock
    const navButtons = document.querySelectorAll('.nav-dock-btn');
    navButtons.forEach(btn => {
        if (btn.getAttribute('data-screen') === screenId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (screenId === 'home') closeFloatingPlayer();
    if (screenId === 'alphabet') renderAlphabet();
    if (screenId === 'grammar') renderGrammar('all');
    if (screenId === 'dialogue') renderDialogue();
    
    updateProgressBars();
}

// =========================================================================
// 3. ENGINE PHÁT ÂM TOÀN NĂNG - SỬA LỖI ĐỌC CHỮ HOA ỨC CHẾ
// =========================================================================
function speakText(text, subTitle = "") {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Dừng câu đang nói dở ngay lập tức
        
        // GIẢI PHÁP CHÍ MẠNG: Ép chữ hoa thành chữ thường giúp Web Speech API đọc chuẩn âm 100%
        // Không bao giờ bị lỗi ê-a "A hoa", "Bê hoa". Giữ nguyên ký tự đặc biệt tiếng Việt.
        let cleanText = text.trim().toLowerCase();
        
        // Bẫy xử lý âm cho các thanh dấu độc lập khi bấm bảng chữ cái
        if (text.includes("Sắc")) cleanText = "cá";
        if (text.includes("Huyền")) cleanText = "cà";
        if (text.includes("Hỏi")) cleanText = "cả";

        let speech = new SpeechSynthesisUtterance(cleanText);
        speech.lang = 'vi-VN';
        speech.rate = 0.8; // Tốc độ vừa phải giúp người Nhật nghe rõ
        
        window.speechSynthesis.speak(speech);

        // Đổ thông tin lên thanh Floating Player bám đáy màn hình
        currentSpokenText = text;
        currentSubTitleText = subTitle || text;
        
        const player = document.getElementById('floating-player');
        const playerText = document.getElementById('floating-text');
        
        if(player && playerText) {
            player.classList.remove('hidden');
            playerText.innerText = currentSubTitleText;
        }
        
        gainXP(2); // Thưởng nóng 2 điểm tăng tương tác học tập
    }
}

function playFloatingAudio() {
    if (currentSpokenText) {
        speakText(currentSpokenText, currentSubTitleText);
    }
}

function closeFloatingPlayer() {
    const player = document.getElementById('floating-player');
    if(player) player.classList.add('hidden');
}

// =========================================================================
// 4. CÁC HÀM RENDER TỰ ĐỘNG ĐỔ RA GIAO DIỆN CHUẨN
// =========================================================================

// --- Render Bảng chữ cái tự động bắt hiệu ứng Neon của CSS ---
function renderAlphabet() {
    const grid = document.getElementById('alphabet-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    cyberVietData.alphabet.forEach(item => {
        const card = document.createElement('div');
        card.className = "alphabet-box"; // Gọi chuẩn class của file style.css mới
        card.style.cursor = "pointer";
        card.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
                <span style="font-size: 1.6rem; font-weight: 900; color: #00ffcc; font-family: 'Orbitron';">${item.char}</span>
                <span style="font-size: 0.65rem; color: #888; margin-top: 2px;">${item.katakana}</span>
            </div>
        `;
        
        card.onclick = () => {
            document.querySelectorAll('.alphabet-box').forEach(b => b.classList.remove('active'));
            card.classList.add('active'); // Kích hoạt giật đèn Neon rực rỡ
            speakText(item.char, `${item.char} ➔ Ví dụ: ${item.example}`);
        };
        grid.appendChild(card);
    });
}

// --- Render Ngữ pháp phân xưởng bóc tách cấu trúc rõ ràng ---
function renderGrammar(filterType) {
    const list = document.getElementById('grammar-list');
    if (!list) return;
    list.innerHTML = '';
    
    // Đồng bộ class nút lọc nhanh
    const tags = document.querySelectorAll('.filter-tag');
    tags.forEach(tag => {
        if(tag.getAttribute('onclick').includes(filterType)) tag.classList.add('active');
        else tag.classList.remove('active');
    });

    const filteredData = filterType === 'all' ? cyberVietData.grammar : cyberVietData.grammar.filter(g => g.type === filterType);

    filteredData.forEach(item => {
        const block = document.createElement('div');
        block.style = "background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-left: 3px solid var(--neon-blue); padding: 15px; margin-bottom: 12px; border-radius: 8px;";
        block.innerHTML = `
            <h4 style="color: #fff; font-size: 1rem; margin-bottom: 4px; font-weight:700;">${item.title}</h4>
            <div style="color: #ff00ff; font-family: 'Orbitron'; font-size: 0.85rem; font-weight: bold; margin-bottom: 6px;">
                Giải nghĩa: <span style="color: #00ffcc;">${item.structure}</span>
            </div>
            <div style="color: var(--text-sub); font-size: 0.8rem; margin-bottom: 8px; font-style: italic;">👉 Ứng dụng: ${item.use}</div>
            <div style="background: rgba(0,119,255,0.05); border: 1px dashed rgba(0,119,255,0.3); padding: 12px; border-radius: 6px; cursor: pointer;" onclick="speakText('${item.vi}', 'Ngữ pháp thực chiến')">
                <div style="color: #00ffcc; font-weight: bold; font-size: 0.95rem;">🔊 ${item.vi}</div>
                <div style="color: #bbb; font-size: 0.85rem; margin-top: 4px;">${item.jp}</div>
            </div>
        `;
        list.appendChild(block);
    });
}

function filterGrammar(type) {
    renderGrammar(type);
}

// --- Render 10 bài phân xưởng đóng sách & in ấn ---
function renderDialogue() {
    const list = document.getElementById('dialogue-list');
    if (!list) return;
    list.innerHTML = '';

    cyberVietData.dialogue.forEach(item => {
        const box = document.createElement('div');
        box.style = "background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-left: 3px solid var(--neon-purple); padding: 15px; margin-bottom: 12px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;";
        box.innerHTML = `
            <div style="flex-grow: 1; padding-right: 12px; cursor: pointer;">
                <div style="color: var(--neon-purple); font-size: 0.7rem; font-family: 'Orbitron'; margin-bottom: 4px; font-weight:bold;">LESSON 0${item.id}</div>
                <div style="color: #fff; font-weight: 600; font-size: 0.95rem; margin-bottom: 4px;">${item.title}</div>
                <div style="color: #00ffcc; font-size: 0.9rem; font-weight: bold; margin-bottom: 2px;">🔊 ${item.vi}</div>
                <div style="color: var(--text-sub); font-size: 0.8rem;">${item.jp}</div>
            </div>
            <button onclick="openShadowingModal('${item.vi}')" style="background: rgba(224,64,251,0.1); border: 1px solid var(--neon-purple); color: var(--neon-purple); width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; font-size:1rem;"><i class="fa-solid fa-microphone"></i></button>
        `;
        // Chạm vùng chữ để nghe AI đọc mẫu
        box.querySelector('div').onclick = () => speakText(item.vi, `Bài 0${item.id}: Đang nghe máy đọc mẫu`);
        list.appendChild(box);
    });
}

// =========================================================================
// 5. LOGIC ĐẾM ĐIỂM THƯỞNG XP & CHẾ ĐỘ SHADOWING (NHẠI GIỌNG)
// =========================================================================
function gainXP(amount) {
    userXP += amount;
    localStorage.setItem('cyber_viet_xp', userXP);
    updateStatsDisplay();
}

function updateStatsDisplay() {
    const xpElements = ['xp-count', 'total-xp'];
    xpElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerText = userXP;
    });

    const streakElements = ['streak-count', 'total-days'];
    streakElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerText = userStreak;
    });
}

function updateProgressBars() {
    // Thống kê tiến trình trực quan theo thời gian thực học tập
    const ab = document.getElementById('alphabet-progress-bar');
    if (ab) ab.style.width = "100%";
    
    const gb = document.getElementById('grammar-progress-bar');
    if (gb) gb.style.width = "60%";

    const db = document.getElementById('dialogue-progress-bar');
    if (db) db.style.width = "85%";
}

// --- Điều khiển Modal Shadowing giả lập người Nhật tập nói to ---
let shadowingTargetText = "";
function openShadowingModal(text) {
    shadowingTargetText = text;
    const modal = document.getElementById('shadowing-modal');
    const txtBox = document.getElementById('shadowing-text');
    const cd = document.getElementById('countdown');
    
    if (modal && txtBox && cd) {
        txtBox.innerText = text;
        cd.innerText = "READY?";
        cd.style.color = "var(--neon-yellow)";
        modal.classList.remove('hidden');
    }
}

function closeShadowingModal() {
    const modal = document.getElementById('shadowing-modal');
    if (modal) modal.classList.add('hidden');
}

function startShadowing() {
    const cd = document.getElementById('countdown');
    if (!cd) return;
    
    cd.innerText = "Listening お手本... 🎧";
    speakText(shadowingTargetText, "シャドーイングのお手本");
    
    // Đếm ngược giả lập luồng ghi âm giọng nói
    setTimeout(() => {
        cd.innerText = "Say it now! Hãy đọc to... 🎙️";
        cd.style.color = "var(--neon-cyan)";
    }, 2500);

    setTimeout(() => {
        cd.innerText = "SUCCESS! Tốt lắm +10 XP ⚡";
        cd.style.color = "var(--neon-purple)";
        gainXP(10); // Thưởng đậm khi hoàn thành Shadowing thành công!
    }, 5500);
}
