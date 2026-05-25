/* ===== UNIVERSAL SPEECH FUNCTION ===== */
/**
 * Phát âm text với Web Speech API
 * @param {string} text - Text cần phát âm
 * @param {string} lang - Mã ngôn ngữ (mặc định: 'vi-VN')
 * @param {number} rate - Tốc độ phát âm (0.5-2, mặc định: 0.8)
 */
function speakText(text, lang = 'vi-VN', rate = 0.8) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        // CHỖ FIX: Chỉ trim khoảng trắng, KHÔNG .toLowerCase() 
        // vì các ký tự đặc biệt Việt (Ă, Ê, Ô, etc) cần giữ nguyên
        let cleanText = text.trim();
        
        let speech = new SpeechSynthesisUtterance(cleanText);
        speech.lang = lang;
        speech.rate = rate;
        speech.pitch = 1.0;
        speech.volume = 1.0;
        
        window.speechSynthesis.speak(speech);
    }
}
