// Cross-browser compatibility: Firefox exposes the promise-based `browser`
// namespace natively, while Chrome/Edge use `chrome` (also promise-based
// since Manifest V3). Falling back keeps a single codebase working everywhere.
const api = typeof browser !== "undefined" ? browser : chrome;

document.addEventListener('DOMContentLoaded', async () => {
    // گرفتن تب فعال و استخراج Hostname
    const [tab] = await api.tabs.query({ active: true, currentWindow: true });
    const buttons = document.querySelectorAll('.mode-btn');

    if (!tab || !tab.url || !/^https?:/i.test(tab.url)) {
        showUnsupportedMessage();
        return;
    }

    const url = new URL(tab.url);
    const hostname = url.hostname;

    // لود وضعیت ذخیره شده
    try {
        const result = await api.storage.local.get([hostname]);
        const activeMode = result[hostname] || "0";
        updateActiveButton(activeMode);
    } catch (err) {
        console.error("Smart RTL Aligner: failed to read stored mode.", err);
    }

    // هندل کردن کلیک روی حالت‌ها
    buttons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const mode = btn.getAttribute('data-mode');
            try {
                await api.storage.local.set({ [hostname]: mode });
                updateActiveButton(mode);
                // ارسال پیام به تب برای اعمال تغییرات بلادرنگ
                await api.tabs.sendMessage(tab.id, { action: "set_rtl_mode", mode: mode });
            } catch (err) {
                console.error("Smart RTL Aligner: content script not reachable.", err);
            }
        });
    });

    function updateActiveButton(mode) {
        buttons.forEach(b => b.classList.remove('active'));
        const target = document.querySelector(`.mode-btn[data-mode="${mode}"]`);
        if (target) target.classList.add('active');
    }

    function showUnsupportedMessage() {
        const container = document.body;
        container.innerHTML = '';
        const h4 = document.createElement('h4');
        h4.textContent = 'RTL Alignment Mode';
        const msg = document.createElement('p');
        msg.style.fontSize = '12px';
        msg.style.color = '#666';
        msg.style.textAlign = 'center';
        msg.textContent = 'This page is not a regular website, so Smart RTL Aligner cannot run here.';
        container.appendChild(h4);
        container.appendChild(msg);
    }
});
