// Cross-browser compatibility: Firefox exposes the promise-based `browser`
// namespace natively, while Chrome/Edge use `chrome` (also promise-based
// since Manifest V3). Falling back keeps a single codebase working everywhere.
const api = typeof browser !== "undefined" ? browser : chrome;

const hostname = window.location.hostname;

// 1. اعمال وضعیت هنگام لود صفحه
api.storage.local.get([hostname]).then((result) => {
    const mode = result[hostname] || "0";
    applyMode(mode);
}).catch((err) => {
    console.error("Smart RTL Aligner: failed to read stored mode.", err);
});

// 2. گوش دادن به تغییرات از سمت Popup
api.runtime.onMessage.addListener((request) => {
    if (request && request.action === "set_rtl_mode") {
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
