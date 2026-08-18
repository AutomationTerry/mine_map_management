/**
 * BibTeX 一键复制
 * 优先使用 Clipboard API，失败时降级到 execCommand('copy')。
 */
(function () {
    'use strict';

    var copyButton = document.getElementById('copy-bibtex');
    var bibtexEntry = document.getElementById('bibtex-entry');

    if (!copyButton || !bibtexEntry) {
        return;
    }

    var states = {
        idle: '<i class="fas fa-copy"></i> Copy',
        working: '<i class="fas fa-spinner fa-spin"></i> Copying…',
        success: '<i class="fas fa-check"></i> Copied',
        error: '<i class="fas fa-xmark"></i> Copy failed'
    };

    var resetTimer = null;

    function setState(state) {
        copyButton.innerHTML = states[state] || states.idle;
    }

    function copyBibtex() {
        var text = bibtexEntry.textContent || '';
        if (!text.trim()) {
            return;
        }

        if (resetTimer) {
            window.clearTimeout(resetTimer);
            resetTimer = null;
        }

        setState('working');

        var done = function (ok) {
            setState(ok ? 'success' : 'error');
            resetTimer = window.setTimeout(function () {
                setState('idle');
                resetTimer = null;
            }, 1600);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(
                function () { done(true); },
                function () { fallbackCopy(text, done); }
            );
        } else {
            fallbackCopy(text, done);
        }
    }

    function fallbackCopy(text, done) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        ta.style.pointerEvents = 'none';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        var ok = false;
        try {
            ok = document.execCommand('copy');
        } catch (e) {
            ok = false;
        }
        document.body.removeChild(ta);
        done(ok);
    }

    copyButton.addEventListener('click', copyBibtex);
})();
