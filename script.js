// ==========================================
// 1. KHO DỮ LIỆU CHUẨN (CHỮ CÁI & 10 BÀI PHÂN XƯỞNG)
// ==========================================
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
        { id: "g1", type: "command", title: "Mẫu câu: Hãy... (～してください)", structure: "Hãy + Động từ (V)", use: "Chỉ thị công nhân làm việc", vi: "Hãy bật máy lên.", jp: "機械をつけてください。" },
        { id: "g2", type: "report", title: "Mẫu câu: Bị hỏng... (～が壊れた)", structure: "Chủ ngữ + bị hỏng", use: "Báo cáo sự cố thiết bị", vi: "Máy số 3 bị hỏng rồi.", jp: "3番機が壊れました。" }
    ],
    dialogue: [
        { id: 1, title: "Nhắc nhở an toàn máy cắt (裁断機の安全確認)", vi: "Khi dùng máy cắt, tuyệt đối không được đưa tay vào vùng nguy hiểm.", jp: "裁断機を使用するとき、危険エリアには絶対に手を入れないでください。" },
        { id: 2, title: "Kiểm tra lệch màu in (印刷の色ズレ確認)", vi: "Màu in này bị lệch rồi. Hãy điều chỉnh lại trục mực ngay.", jp: "印刷の色がズレています。すぐにインク軸を調整してください。" },
        { id: 3, title: "Báo cáo kẹt giấy máy gấp (折機の紙詰まり報告)", vi: "Báo cáo, máy gấp đang bị kẹt giấy và dừng đột ngột.", jp: "報告します、折機が紙詰まりを起こして急に止まりました。" },
        { id: 4, title: "Kiểm tra bọt khí cán màng (ラミネートの気泡)", vi: "Hãy kiểm tra kỹ, sản phẩm cán màng không được có bọt khí.", jp: "しっかり確認してください、ラミネート製品に気泡が入ってはいけません。" },
        { id: 5, title: "Yêu cầu dập ghim đóng gáy (製本のホチキス留め)", vi: "Hãy kiểm tra xem gáy sách có bị lệch ghim không.", jp: "本の背表紙のホチキス留めがズレていないか確認してください。" },
        { id: 6, title: "Vệ sinh lô cuốn mực (印刷ローラーの清補)", vi: "Hết ca làm việc, phải vệ sinh sạch lô cuốn mực bằng dung dịch.", jp: "作業シフトが終わったら、必ず洗浄液でインクローラーを掃除してください。" },
        { id: 7, title: "Kiểm tra nếp nhăn giấy (紙のシワチェック)", vi: "Giấy bị nhăn rồi! Hãy dừng máy và kiểm tra lại trục cấp giấy.", jp: "紙にシワが寄っています！機械を止めて給紙軸を確認してください。" },
        { id: 8, title: "Xử lý lỗi ngược trang (丁合の乱丁・落丁対策)", vi: "Cuốn sách này bị ngược trang rồi. Phải kiểm tra lại khâu xếp trang.", jp: "この本はページが逆になっています。丁合（ちょうあい）工程を再確認してください。" },
        { id: 9, title: "Thay dao cắt định kỳ (裁断刃の定期交換)", vi: "Dao cắt bị cùn rồi, đường cắt không đẹp. Hãy thay dao mới.", jp: "裁断刃が鈍くなって、切り口が綺麗ではありません。新しい刃に交換してください。" },
        { id: 10, title: "Kiểm tra số lượng thành phẩm (完成品の数量確認)", vi: "Đóng gói đủ năm mươi cuốn một thùng rồi dán nhãn lên nhé.", jp: "1箱に50冊ずつ梱包して、ラベルを貼ってくださいね。" }
    ]
};

// Biến toàn cục lưu trạng thái học tập
let currentSpokenText = "";
let currentAudioType = ""; // 'alphabet', 'grammar', 'dialogue'
let userXP = parseInt(localStorage.getItem('cyber_viet_xp')) || 0;
let userStreak = parseInt(localStorage.getItem('cyber_viet_streak')) || 1;

// ==========================================
// 2. KHỞI CHẠY APP & ĐỒNG BỘ ĐIỀU HƯỚNG DOCK
// ==========================================
window.onload = function() {
    updateStatsDisplay();
    switchScreen('home');
};

function switchScreen(screenId) {
    // Ẩn tất cả section
    const screens = document.querySelectorAll('.screen');
    screens.forEach(scr => scr.classList.remove('active'));

    // Hiện section được chọn
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) activeScreen.classList.add('active');

    // Cập nhật trạng thái Active trên thanh Menu đáy (Bottom Nav)
    const navButtons = document.querySelectorAll('.nav-dock-btn');
    navButtons.forEach(btn => {
        if (btn.getAttribute('data-screen') === screenId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Tự động đóng Floating Player khi về trang chủ
    if (screenId === 'home') {
        closeFloatingPlayer();
    }

    // Kích hoạt nạp giao diện tương ứng
    if (screenId === 'alphabet') renderAlphabet();
    if (screenId === 'grammar') renderGrammar('all');
    if (screenId === 'dialogue') renderDialogue();
    
    updateProgressBars();
}

// ==========================================
// 3. ENGINE PHÁT ÂM TOÀN NĂNG (ĐÃ FIX LỖI CHỮ HOA)
// ==========================================
function speakText(text, subTitle = "") {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Dừng câu đang đọc dở
        
        // CHỖ FIX CỰC CHUẨN: Chuyển text sang chữ thường để trình duyệt đọc âm thuần túy
        // Tiếng Việt khi dùng .toLowerCase() vẫn giữ nguyên cấu trúc ă, â, ê, ô, đ cực kỳ an toàn!
        let cleanText = text.trim().toLowerCase();
        
        // Cơ chế bẫy dấu âm nếu người dùng click vào thẻ dấu câu độc lập
        if (text.includes("Sắc")) cleanText = "cá";
        if (text.includes("Huyền")) cleanText = "cà";
        if (text.includes("Hỏi")) cleanText = "cả";

        let speech = new SpeechSynthesisUtterance(cleanText);
        speech.lang = 'vi-VN'; // Ép giọng chuẩn Việt Nam
        speech.rate = 0.8;    // Tốc độ chậm vừa phải cho người Nhật nuốt chữ
        
        window.speechSynthesis.speak(speech);

        // Hiển thị thanh Floating Player dưới đáy mobile
        currentSpokenText = text;
        const player = document.getElementById('floating-player');
        const playerText = document.getElementById('floating-text');
        
        player.classList.remove('hidden');
        playerText.innerText = subTitle || text;
        
        // Cộng 2 điểm thưởng XP tinh thần khi click nghe học bài
        gainXP(2);
    }
}

function playFloatingAudio() {
    if (currentSpokenText) {
        speakText(currentSpokenText, document.getElementById('floating-text').innerText);
    }
}

function closeFloatingPlayer() {
    document.getElementById('floating-player').classList.add('hidden');
}

// ==========================================
// 4. HÀM RENDER GIAO DIỆN MÀN HÌNH (MOBILE FIRST)
// ==========================================

// --- Màn hình: Bảng chữ cái ---
function renderAlphabet() {
    const grid = document.getElementById('alphabet-grid');
    grid.innerHTML = '';
    
    cyberVietData.alphabet.forEach(item => {
        const card = document.createElement('div');
        card.className = "menu-item-card"; // Sử dụng lại cấu trúc css đồng nhất
        card.style = "background: rgba(255,255,255,0.03); border: 1px solid #222; border-radius: 8px; padding: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer;";
        card.innerHTML = `
            <div style="font-size: 1.8rem; font-weight: 700; color: #00ffcc; font-family: 'Orbitron';">${item.char}</div>
            <div style="color: #888; font-size: 0.85rem; margin: 3px 0;">${item.katakana}</div>
            <div style="color: #fff; font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 90px;">${item.example}</div>
        `;
        card.onclick = () => speakText(item.char, `${item.char} -> ${item.example}`);
        grid.appendChild(card);
    });
}

// --- Màn hình: Ngữ pháp + Bộ lọc nhanh ---
function renderGrammar(filterType) {
    const list = document.getElementById('grammar-list');
    list.innerHTML = '';
    
    // Xử lý active trạng thái nút lọc
    const tags = document.querySelectorAll('.filter-tag');
    tags.forEach(tag => {
        if(tag.getAttribute('onclick').includes(filterType)) tag.classList.add('active');
        else tag.classList.remove('active');
    });

    const filteredData = filterType === 'all' ? cyberVietData.grammar : cyberVietData.grammar.filter(g => g.type === filterType);

    filteredData.forEach(item => {
        const block = document.createElement('div');
        block.style = "background: rgba(255,255,255,0.02); border: 1px solid #222; border-left: 3px solid #0077ff; padding: 15px; margin-bottom: 12px; border-radius: 6px;";
        block.innerHTML = `
            <h4 style="color: #fff; font-size: 0.95rem; margin-bottom: 5px;">${item.title}</h4>
            <div style="color: #0077ff; font-family: 'Orbitron'; font-size: 0.85rem; font-weight: bold; margin-bottom: 8px;">Form: ${item.structure}</div>
            <div style="background: rgba(0,119,255,0.05); border: 1px dashed #0077ff; padding: 10px; border-radius: 4px; cursor: pointer;" onclick="speakText('${item.vi}', 'Mẫu câu chỉ thị')">
                <div style="color: #00ffcc; font-weight: bold;">🔊 ${item.vi}</div>
                <div style="color: #aaa; font-size: 0.85rem; margin-top: 2px;">${item.jp}</div>
            </div>
        `;
        list.appendChild(block);
    });
}

function filterGrammar(type) {
    renderGrammar(type);
}

// --- Màn hình: 10 bài hội thoại phân xưởng ---
function renderDialogue() {
    const list = document.getElementById('dialogue-list');
    list.innerHTML = '';

    cyberVietData.dialogue.forEach(item => {
        const box = document.createElement('div');
        box.style = "background: rgba(255,255,255,0.02); border: 1px solid #222; border-left: 3px solid #e040fb; padding: 15px; margin-bottom: 12px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;";
        box.innerHTML = `
            <div style="flex-grow: 1; padding-right: 15px;">
                <div style="color: #e040fb; font-size: 0.75rem; font-family: 'Orbitron'; margin-bottom: 4px;">LESSON 0${item.id}</div>
                <div style="color: #fff; font-weight: 600; font-size: 0.95rem; margin-bottom: 3px;">${item.title}</div>
                <div style="color: #00ffcc; font-size: 0.9rem; margin-bottom: 2px;">🔊 ${item.vi}</div>
                <div style="color: #888; font-size: 0.8rem;">${item.jp}</div>
            </div>
            <button onclick="openShadowingModal('${item.vi}')" style="background: rgba(224,64,251,0.1); border: 1px solid #e040fb; color: #e040fb; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0;"><i class="fa-solid fa-microphone"></i></button>
        `;
        // Click vào vùng chữ để nghe máy đọc mẫu
        box.querySelector('div').onclick = () => speakText(item.vi, `Lesson 0${item.id} Đang phát mẫu`);
        list.appendChild(box);
    });
}

// ==========================================
// 5. HỆ THỐNG ĐẾM XP, STREAK & SHADOWING
// ==========================================
function gainXP(amount) {
    userXP += amount;
    localStorage.setItem('cyber_viet_xp', userXP);
    updateStatsDisplay();
}

function updateStatsDisplay() {
    document.getElementById('xp-count').innerText = userXP;
    document.getElementById('total-xp').innerText = userXP;
    document.getElementById('streak-count').innerText = userStreak;
    document.getElementById('total-days').innerText = userStreak;
}

function updateProgressBars() {
    // Giả lập tiến độ tăng dần trực quan theo hành vi học tập
    document.getElementById('alphabet-progress').innerText = "100";
    document.getElementById('alphabet-progress-bar').style.width = "100%";
    
    document.getElementById('grammar-progress').innerText = "60";
    document.getElementById('grammar-progress-bar').style.width = "60%";

    document.getElementById('dialogue-progress').innerText = "85";
    document.getElementById('dialogue-progress-bar').style.width = "85%";
    document.getElementById('total-learned').innerText = "12";
}

// Điều khiển Modal Nhắc lại giọng (Shadowing Mode)
let shadowingTargetText = "";
function openShadowingModal(text) {
    shadowingTargetText = text;
    document.getElementById('shadowing-text').innerText = text;
    document.getElementById('countdown').innerText = "READY?";
    document.getElementById('shadowing-modal').classList.remove('hidden');
}

function closeShadowingModal() {
    document.getElementById('shadowing-modal').classList.add('hidden');
}

function startShadowing() {
    const cd = document.getElementById('countdown');
    cd.innerText = "Listening お手本... 🎧";
    
    // Bật máy đọc câu mẫu trước
    speakText(shadowingTargetText, "シャドーイングのお手本");
    
    // Đếm ngược 3 giây giả lập người Nhật bắt chước tự đọc to
    setTimeout(() => {
        cd.innerText = "Say it now! Đang ghi âm... 🎙️";
        cd.style.color = "#00ffcc";
    }, 2500);

    setTimeout(() => {
        cd.innerText = "SUCCESS! +10 XP ⚡";
        cd.style.color = "#e040fb";
        gainXP(10); // Cộng 10 điểm XP khi hoàn thành Shadowing thành công!
    }, 5500);
}
