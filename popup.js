document.addEventListener('DOMContentLoaded', async () => {
    // گرفتن تب فعال و استخراج Hostname
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.url || tab.url.startsWith("chrome://")) return;
    
    const url = new URL(tab.url);
    const hostname = url.hostname;
    const buttons = document.querySelectorAll('.mode-btn');

    // لود وضعیت ذخیره شده
    chrome.storage.local.get([hostname], (result) => {
        const activeMode = result[hostname] || "0";
        updateActiveButton(activeMode);
    });

    // هندل کردن کلیک روی حالت‌ها
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.getAttribute('data-mode');
            chrome.storage.local.set({ [hostname]: mode }, () => {
                updateActiveButton(mode);
                // ارسال پیام به تب برای اعمال تغییرات بلادرنگ
                chrome.tabs.sendMessage(tab.id, { action: "set_rtl_mode", mode: mode }).catch(err => {
                    console.error("Content script not reachable.", err);
                });
            });
        });
    });

    function updateActiveButton(mode) {
        buttons.forEach(b => b.classList.remove('active'));
        document.querySelector(`.mode-btn[data-mode="${mode}"]`).classList.add('active');
    }
});