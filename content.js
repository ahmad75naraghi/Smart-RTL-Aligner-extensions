const hostname = window.location.hostname;

// 1. اعمال وضعیت هنگام لود صفحه
chrome.storage.local.get([hostname], (result) => {
    const mode = result[hostname] || "0";
    applyMode(mode);
});

// 2. گوش دادن به تغییرات از سمت Popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "set_rtl_mode") {
        applyMode(request.mode);
    }
});

function applyMode(mode) {
    if (mode === "0") {
        document.documentElement.removeAttribute("data-rtl-mode");
    } else {
        document.documentElement.setAttribute("data-rtl-mode", mode);
    }
}