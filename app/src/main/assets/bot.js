(function(){
    'use strict';

    // Remove old panel if exists
    var old = document.getElementById('ab_control_panel');
    if (old) old.remove();
    var oldL = document.getElementById('ab_launcher');
    if (oldL) oldL.remove();

    // =========================================
    //  LAUNCHER BUTTON
    // =========================================
    var launcher = document.createElement('div');
    launcher.id = 'ab_launcher';
    launcher.innerHTML = '<span style="font-size:26px">⚡</span>';
    launcher.style.cssText = 'position:fixed;bottom:22px;right:22px;z-index:2147483647;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#8800ff,#cc44ff);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 26px rgba(136,0,255,.6);transition:transform .2s';
    document.body.appendChild(launcher);

    // =========================================
    //  PANEL
    // =========================================
    var panel = document.createElement('div');
    panel.id = 'ab_control_panel';
    panel.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:2147483647;width:290px;background:rgba(16,8,30,.96);border:1px solid rgba(180,79,255,.3);border-radius:18px;padding:16px 14px 12px;color:#fff;font-family:sans-serif;box-shadow:0 8px 48px rgba(140,0,255,.4);display:none;max-width:94vw;user-select:none';

    panel.innerHTML = ''
        + '<div id="ab_drag" style="display:flex;justify-content:space-between;align-items:center;color:#c79aff;font-weight:700;font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);padding-bottom:8px;margin-bottom:10px;cursor:grab">'
        +   '<span>⚡ TG :- @GOKUXOWNER12 💸</span>'
        +   '<span id="ab_close" style="cursor:pointer;opacity:.5;font-size:16px">✕</span>'
        + '</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-bottom:8px">'
        +   '<label style="font-size:7px;color:#8888aa;text-transform:uppercase;display:flex;flex-direction:column;align-items:center">L1<input id="l1" value="1" style="width:100%;text-align:center;background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:3px;font-size:13px;font-weight:700;outline:none"></label>'
        +   '<label style="font-size:7px;color:#8888aa;text-transform:uppercase;display:flex;flex-direction:column;align-items:center">L2<input id="l2" value="2" style="width:100%;text-align:center;background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:3px;font-size:13px;font-weight:700;outline:none"></label>'
        +   '<label style="font-size:7px;color:#8888aa;text-transform:uppercase;display:flex;flex-direction:column;align-items:center">L3<input id="l3" value="5" style="width:100%;text-align:center;background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:3px;font-size:13px;font-weight:700;outline:none"></label>'
        +   '<label style="font-size:7px;color:#8888aa;text-transform:uppercase;display:flex;flex-direction:column;align-items:center">L4<input id="l4" value="12" style="width:100%;text-align:center;background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:3px;font-size:13px;font-weight:700;outline:none"></label>'
        +   '<label style="font-size:7px;color:#8888aa;text-transform:uppercase;display:flex;flex-direction:column;align-items:center">L5<input id="l5" value="25" style="width:100%;text-align:center;background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:3px;font-size:13px;font-weight:700;outline:none"></label>'
        +   '<label style="font-size:7px;color:#8888aa;text-transform:uppercase;display:flex;flex-direction:column;align-items:center">L6<input id="l6" value="55" style="width:100%;text-align:center;background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:3px;font-size:13px;font-weight:700;outline:none"></label>'
        + '</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;gap:2px;background:rgba(0,0,0,.35);border-radius:10px;padding:6px 4px;margin-bottom:8px;text-align:center;font-size:7px;color:#8888aa;text-transform:uppercase">'
        +   '<div>Period<br><span id="p_period" style="color:#80c8ff;font-size:11px;font-weight:700;text-transform:none">--</span></div>'
        +   '<div>Pred<br><span id="p_num" style="color:#ffd76a;font-size:14px;font-weight:700;text-transform:none">-</span></div>'
        +   '<div>Side<br><span id="p_side" style="color:#22c55e;font-size:11px;font-weight:700;text-transform:none">-</span></div>'
        +   '<div>Conf<br><span style="color:#f59e0b;font-size:11px;font-weight:700;text-transform:none">88%</span></div>'
        +   '<div>Level<br><span id="p_lvl" style="color:#ff6b6b;font-size:11px;font-weight:700;text-transform:none">1</span></div>'
        + '</div>'
        + '<div style="display:flex;gap:6px;margin:6px 0 4px">'
        +   '<button id="btn_start" style="flex:1;padding:8px;background:linear-gradient(135deg,#8800ff,#cc44ff);color:#fff;border:none;border-radius:8px;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.5px;cursor:pointer">▶ START</button>'
        +   '<button id="btn_stop" disabled style="flex:1;padding:8px;background:rgba(239,68,68,.15);color:#ef4444;border:1px solid rgba(239,68,68,.2);border-radius:8px;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;opacity:.5">■ STOP</button>'
        + '</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;gap:2px;margin:6px 0 4px;background:rgba(0,0,0,.2);border-radius:8px;padding:4px 2px;text-align:center;font-size:7px;color:#8888aa;text-transform:uppercase">'
        +   '<div>Wins<br><span id="s_win" style="color:#22c55e;font-size:13px;font-weight:800;text-transform:none">0</span></div>'
        +   '<div>Loss<br><span id="s_loss" style="color:#ef4444;font-size:13px;font-weight:800;text-transform:none">0</span></div>'
        +   '<div>Step<br><span id="s_step" style="color:#f59e0b;font-size:13px;font-weight:800;text-transform:none">1/6</span></div>'
        +   '<div>Bal<br><span id="s_bal" style="color:#80c8ff;font-size:13px;font-weight:800;text-transform:none">0</span></div>'
        +   '<div>P/L<br><span id="s_pl" style="color:#fff;font-size:13px;font-weight:800;text-transform:none">+0</span></div>'
        + '</div>'
        + '<div id="log" style="margin-top:6px;padding:4px 8px;background:rgba(0,0,0,.35);border-radius:8px;font-size:8px;color:#777;max-height:40px;overflow-y:auto;font-family:monospace;line-height:1.5">▶ Ready</div>';

    document.body.appendChild(panel);

    var isRunning = false;
    var wins = 0, losses = 0, step = 0, level = 1;
    var totalProfit = 0;
    var activeBet = null, lastPeriod = null;
    var loopTimer = null, waiting = false, isBetting = false;

    var logEl = document.getElementById('log');
    var winEl = document.getElementById('s_win');
    var lossEl = document.getElementById('s_loss');
    var stepEl = document.getElementById('s_step');
    var balEl = document.getElementById('s_bal');
    var plEl = document.getElementById('s_pl');
    var periodEl = document.getElementById('p_period');
    var numEl = document.getElementById('p_num');
    var sideEl = document.getElementById('p_side');
    var lvlEl = document.getElementById('p_lvl');
    var startBtn = document.getElementById('btn_start');
    var stopBtn = document.getElementById('btn_stop');

    function log(msg, type){
        type = type || 'info';
        var color = type === 'win' ? '#22c55e' : type === 'loss' ? '#ef4444' : type === 'ai' ? '#b44fff' : '#666';
        var d = document.createElement('div');
        d.style.color = color;
        d.textContent = msg;
        logEl.appendChild(d);
        logEl.scrollTop = logEl.scrollHeight;
        while (logEl.children.length > 20) logEl.removeChild(logEl.firstChild);
    }

    function getLevels(){
        return [
            parseInt(document.getElementById('l1').value) || 1,
            parseInt(document.getElementById('l2').value) || 2,
            parseInt(document.getElementById('l3').value) || 5,
            parseInt(document.getElementById('l4').value) || 12,
            parseInt(document.getElementById('l5').value) || 25,
            parseInt(document.getElementById('l6').value) || 55
        ];
    }

    var API = 'https://draw.ar-lottery01.com/WinGo/WinGo_30S/GetHistoryIssuePage.json';

    function fetchResults(size){
        return fetch(API + '?pageNo=1&pageSize=' + size + '&ts=' + Date.now())
            .then(function(r){ return r.json(); })
            .then(function(j){
                if (!j.data || !j.data.list || !j.data.list.length) return null;
                return j.data.list.map(function(i){ return Number(i.number || i.result_number || 0); });
            })
            .catch(function(){ return null; });
    }

    function getPrediction(){
        return fetchResults(10).then(function(res){
            if (!res || res.length < 10) return {number: 0, side: 'BIG'};

            var freq = [0,0,0,0,0,0,0,0,0,0];
            for (var i = 0; i < res.length; i++){
                var n = res[i];
                if (n >= 0 && n <= 9) freq[n]++;
            }

            freq[0] = 0;
            freq[5] = 0;

            for (var i = 0; i <= 9; i++){
                if (freq[i] >= 2) freq[i] = freq[i] % 2;
            }

            for (var i = 1; i <= 9; i++){
                var j = 10 - i;
                if (j >= 0 && j <= 9 && i < j){
                    var p = Math.min(freq[i], freq[j]);
                    freq[i] -= p;
                    freq[j] -= p;
                }
            }

            var remaining = [];
            for (var i = 0; i <= 9; i++){
                if (freq[i] > 0) remaining.push(i);
            }

            var predNum;
            if (remaining.length === 0) predNum = 0;
            else if (remaining.length === 1) predNum = (10 - remaining[0]) % 10;
            else {
                var sum = 0;
                for (var i = 0; i < remaining.length; i++) sum += remaining[i];
                predNum = (10 - (sum % 10)) % 10;
            }

            var side = (predNum >= 0 && predNum <= 4) ? 'BIG' : 'SMALL';
            return {number: predNum, side: side};
        });
    }

    function getBalance(){
        var sels = ['.balance', '.user-balance', '.wallet-balance', '.credit', '[class*="balance"]', '[class*="bal"]'];
        for (var i = 0; i < sels.length; i++){
            var el = document.querySelector(sels[i]);
            if (el){
                var txt = el.innerText.trim().replace(/[^0-9.]/g, '');
                var n = parseFloat(txt);
                if (!isNaN(n) && n > 0) return n;
            }
        }
        return null;
    }

    function findAmtInput(){
        var sels = ['input[type="number"]', 'input[type="text"]', 'input[class*="amount"]',
                    'input[class*="bet"]', '.bet-amount-input', '.amount-input',
                    'input[placeholder*="amount"]', 'input[placeholder*="bet"]', 'input'];
        for (var i = 0; i < sels.length; i++){
            var els = document.querySelectorAll(sels[i]);
            for (var k = 0; k < els.length; k++){
                var el = els[k];
                var type = el.getAttribute('type') || '';
                var cls = el.className || '';
                var ph = el.getAttribute('placeholder') || '';
                if (type === 'number' || /amount|bet|input|number/i.test(cls) || /amount|bet|enter/i.test(ph)){
                    return el;
                }
            }
        }
        return null;
    }

    function clickBigSmall(opt){
        var cls = ['.' + opt, '.bet-' + opt, '.btn-' + opt, '[class*="' + opt + '"]'];
        for (var i = 0; i < cls.length; i++){
            try {
                var el = document.querySelector(cls[i]);
                if (el){ el.click(); return true; }
            } catch(e){}
        }
        var all = document.querySelectorAll('button, div[role="button"], span, div');
        var targets = opt === 'big' ? ['Big','BIG','big'] : ['Small','SMALL','small'];
        for (var i = 0; i < all.length; i++){
            var txt = all[i].innerText ? all[i].innerText.trim() : '';
            for (var k = 0; k < targets.length; k++){
                if (txt === targets[k]){ all[i].click(); return true; }
            }
        }
        for (var i = 0; i < all.length; i++){
            var txt = all[i].innerText ? all[i].innerText.toLowerCase().trim() : '';
            if (txt.indexOf(opt) >= 0){ all[i].click(); return true; }
        }
        return false;
    }

    function clickConfirm(){
        return new Promise(function(ok){
            var tries = 0;
            var iv = setInterval(function(){
                var sels = ['button.bet-amount','button.confirm','.confirm-btn','[class*="confirm"]',
                            '[class*="bet-btn"]','[class*="place"]','.btn-primary','.btn-success','.btn-bet',
                            'button[type="submit"]','button'];
                var btn = null;
                for (var i = 0; i < sels.length; i++){
                    try {
                        var els = document.querySelectorAll(sels[i]);
                        for (var k = 0; k < els.length; k++){
                            var el = els[k];
                            var txt = (el.innerText || '').toLowerCase();
                            var r = el.getBoundingClientRect();
                            if ((/bet|confirm|place|ok|submit|yes|go/i.test(txt) ||
                                 (el.className && el.className.indexOf('bet') >= 0) ||
                                 (el.className && el.className.indexOf('confirm') >= 0)) &&
                                r.width > 20 && r.height > 10){
                                btn = el;
                                break;
                            }
                        }
                        if (btn) break;
                    } catch(e){}
                }
                if (btn){
                    clearInterval(iv);
                    btn.click();
                    ok(true);
                    return;
                }
                if (++tries > 25){
                    clearInterval(iv);
                    ok(false);
                }
            }, 300);
        });
    }

    function updateUI(){
        winEl.innerText = wins;
        lossEl.innerText = losses;
        stepEl.innerText = (step + 1) + '/6';
        lvlEl.innerText = level;
        var b = getBalance();
        if (b !== null && b > 0) balEl.innerText = b.toFixed(2);
        var sign = totalProfit >= 0 ? '+' : '';
        plEl.innerText = sign + totalProfit.toFixed(2);
        plEl.style.color = totalProfit > 0 ? '#22c55e' : totalProfit < 0 ? '#ef4444' : '#fff';
    }

    function doBet(){
        if (!isRunning || waiting || isBetting) return;

        getPrediction().then(function(pred){
            numEl.innerText = pred.number;
            sideEl.innerText = pred.side;

            var lv = getLevels();
            var amt = lv[step] || lv[0];
            var bal = getBalance();
            if (bal !== null && amt > bal){
                log('Insufficient balance: ' + bal, 'loss');
                return;
            }

            isBetting = true;
            updateUI();

            var opt = pred.side === 'SMALL' ? 'small' : 'big';
            log('🎯 Bet: ' + opt.toUpperCase() + ' ₹' + amt + ' (Pred: ' + pred.number + ')', 'ai');

            var inp = findAmtInput();
            if (inp){
                inp.value = amt;
                inp.dispatchEvent(new Event('input', {bubbles: true}));
                inp.dispatchEvent(new Event('change', {bubbles: true}));
            }

            setTimeout(function(){
                if (!clickBigSmall(opt)){
                    log('❌ Select failed', 'loss');
                    isBetting = false;
                } else {
                    log('✅ Selected: ' + opt.toUpperCase(), 'info');
                }
            }, 300);

            setTimeout(function(){
                clickConfirm().then(function(done){
                    if (done){
                        activeBet = {opt: opt, amount: amt};
                        log('✅ Bet placed: ₹' + amt, 'win');
                    } else {
                        log('❌ Confirm failed', 'loss');
                    }
                    isBetting = false;
                });
            }, 700);
        });
    }

    function checkResult(num){
        if (!activeBet) return;

        var won = (activeBet.opt === 'small' && num <= 4) ||
                  (activeBet.opt === 'big' && num > 4);

        if (won){
            wins++;
            step = 0;
            level = 1;
            totalProfit += activeBet.amount;
            log('✅ WIN! +' + activeBet.amount + ' | ' + num, 'win');
        } else {
            losses++;
            step = Math.min(step + 1, 5);
            if (level < 3) level++;
            totalProfit -= activeBet.amount;
            log('❌ LOSS! -' + activeBet.amount + ' | ' + num, 'loss');
        }

        activeBet = null;
        waiting = false;
        isBetting = false;
        updateUI();
    }

    function checkForNew(){
        return fetchResults(1).then(function(res){
            if (!res || !res.length) return false;
            return fetch(API + '?pageNo=1&pageSize=1&ts=' + Date.now())
                .then(function(r){ return r.json(); })
                .then(function(j){
                    if (!j.data || !j.data.list || !j.data.list.length) return false;
                    var latest = j.data.list[0];
                    var period = latest.issueNumber || latest.issue_number || '';
                    var number = Number(latest.number || latest.result_number || 0);

                    var nextP = period;
                    if (period){
                        try { nextP = (BigInt(period) + 1n).toString(); } catch(e){}
                    }
                    if (nextP) periodEl.innerText = nextP.slice(-6);
                    updateUI();

                    if (period && period !== lastPeriod){
                        lastPeriod = period;
                        if (activeBet){
                            waiting = true;
                            checkResult(number);
                            return true;
                        } else {
                            log('New period: ' + period.slice(-6), 'info');
                            setTimeout(function(){
                                if (isRunning && !isBetting) doBet();
                            }, 500);
                            return true;
                        }
                    }
                    return false;
                });
        }).catch(function(){ return false; });
    }

    function mainLoop(){
        if (!isRunning) return;
        checkForNew().then(function(found){
            if (!found && !activeBet && !waiting && !isBetting) doBet();
            loopTimer = setTimeout(mainLoop, 2000);
        });
    }

    startBtn.onclick = function(){
        if (isRunning) return;
        isRunning = true;
        startBtn.disabled = true;
        startBtn.style.opacity = '0.5';
        stopBtn.disabled = false;
        stopBtn.style.opacity = '1';

        waiting = false;
        activeBet = null;
        lastPeriod = null;
        isBetting = false;
        totalProfit = 0;
        wins = 0; losses = 0; step = 0; level = 1;
        updateUI();

        log('🚀 STARTED', 'ai');
        if (loopTimer) clearTimeout(loopTimer);
        mainLoop();
    };

    stopBtn.onclick = function(){
        isRunning = false;
        startBtn.disabled = false;
        startBtn.style.opacity = '1';
        stopBtn.disabled = true;
        stopBtn.style.opacity = '0.5';
        if (loopTimer) clearTimeout(loopTimer);
        activeBet = null;
        waiting = false;
        isBetting = false;
        updateUI();
        log('⏹ STOPPED', 'info');
    };

    var dragging = false, dx = 0, dy = 0;
    var hdr = document.getElementById('ab_drag');

    hdr.addEventListener('mousedown', function(e){
        dragging = true;
        var r = panel.getBoundingClientRect();
        dx = e.clientX - r.left;
        dy = e.clientY - r.top;
    });
    hdr.addEventListener('touchstart', function(e){
        var t = e.touches[0];
        var r = panel.getBoundingClientRect();
        dx = t.clientX - r.left;
        dy = t.clientY - r.top;
        dragging = true;
    }, {passive: true});

    function moveTo(x, y){
        var l = Math.max(0, Math.min(window.innerWidth - panel.offsetWidth, x));
        var t = Math.max(0, Math.min(window.innerHeight - panel.offsetHeight, y));
        panel.style.left = l + 'px';
        panel.style.right = 'auto';
        panel.style.top = t + 'px';
        panel.style.bottom = 'auto';
    }

    document.addEventListener('mousemove', function(e){
        if (!dragging) return;
        moveTo(e.clientX - dx, e.clientY - dy);
    });
    document.addEventListener('touchmove', function(e){
        if (!dragging) return;
        var t = e.touches[0];
        moveTo(t.clientX - dx, t.clientY - dy);
    }, {passive: true});
    document.addEventListener('mouseup', function(){ dragging = false; });
    document.addEventListener('touchend', function(){ dragging = false; });

    updateUI();
    log('✅ GOKU BOT Ready', 'ai');
    log('🔥 Click START', 'info');
    console.log('%c⚡ GOKU BOT LOADED', 'color:#b44fff;font-weight:bold;font-size:14px');
})();