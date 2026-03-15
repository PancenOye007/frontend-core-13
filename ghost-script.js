(function(window) {
    'use strict';

    const config = {
        id: "ads_ghost_v2",
        // Direct Link Adsterra
        urls: [
            "https://www.effectivegatecpm.com/s15nzb96e?key=9cc6829d33a9e899d03bb9a04d01a9b0",
			"https://www.effectivegatecpm.com/ra4reyrd9u?key=10a935ece102d81a81065359b1c7edac",
			"https://www.effectivegatecpm.com/uripphwhv?key=bf11e02d51666c17d4013cf7beec3007",
			"https://www.effectivegatecpm.com/uey8p46v?key=32e13fcec6da705b14804d4536dc76f1",
			"https://www.effectivegatecpm.com/icbwy0j7?key=eb3c170de212ff252d261c683c2a6bd8",
			"https://www.effectivegatecpm.com/t87gfc3yhi?key=2164efa91dc1c5bda338aef55de7e272",
			"https://www.effectivegatecpm.com/ztv22cvz?key=3f7b1221a3f92d8309a8ecbd28769d1f",
			"https://www.effectivegatecpm.com/u0miyj4a?key=3f8d1c41c71aee68c25cef0e2b7d36cc"
        ],
        frequency: 120, 
        
        // ROTASI WEB TUJUAN
        targetWebsites: [
            "https://chinadrama.xyz",
            "https://cinemagz.net",
            "https://chinadrama.online"
        ],
        targetPath: "/en/latest"
    };

    const storageKey = 'act_log_' + config.id;

    // Pilih 1 web target secara acak untuk sesi ini
    const selectedWeb = config.targetWebsites[Math.floor(Math.random() * config.targetWebsites.length)];
    const finalDestinationURL = selectedWeb + config.targetPath;

    const utils = {
        setStorage: function(name, value, minutes) {
            const expiry = new Date().getTime() + (minutes * 60 * 1000);
            localStorage.setItem(name, JSON.stringify({ value, expiry }));
        },
        getStorage: function(name) {
            const itemStr = localStorage.getItem(name);
            if (!itemStr) return null;
            const item = JSON.parse(itemStr);
            if (new Date().getTime() > item.expiry) {
                localStorage.removeItem(name); return null;
            }
            return item.value;
        },
        injectBanner: function() {
            if (document.getElementById('promo-zone-wrapper')) return;
            var container = document.createElement('div');
            container.id = 'promo-zone-wrapper'; 
            container.style = "position:fixed; bottom:0; left:50%; transform:translateX(-50%); z-index:2147483647; text-align:center; width:100%; max-width:320px;";
            
            var closeBtn = document.createElement('div');
            closeBtn.innerHTML = "<span style='background:rgba(0,0,0,0.5); color:#fff; border-radius:10px 10px 0 0; padding:2px 10px; cursor:pointer; font-size:10px; float:right;'>Close</span>";
            closeBtn.onclick = function() { container.style.display = 'none'; };
            container.appendChild(closeBtn);

            window.atOptions = {
                'key' : 'cbbbef1dd648a19b2dea3e278ec2775f',
                'format' : 'iframe',
                'height' : 250, 'width' : 300, 'params' : {}
            };
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.highperformanceformat.com/cbbbef1dd648a19b2dea3e278ec2775f/invoke.js';
            container.appendChild(script); document.body.appendChild(container);
        }
    };

    function attachTrap(elementId) {
        const btn = document.getElementById(elementId);
        if (!btn) return;
        
        // Set href untuk tombol-tombol netral
        btn.href = finalDestinationURL;

        btn.addEventListener('click', function(e) {
            if (utils.getStorage(storageKey)) return; // Jika sudah klik, biarkan normal
            
            e.preventDefault(); 
            const randomUrl = config.urls[Math.floor(Math.random() * config.urls.length)];
            const win = window.open(randomUrl, '_blank');
            if (win) {
                win.blur(); window.focus();
                utils.setStorage(storageKey, 'true', config.frequency);
                setTimeout(() => { window.location.href = finalDestinationURL; }, 500);
            }
        });
    }

    function startGhostEngine() {
        if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', utils.injectBanner); } 
        else { utils.injectBanner(); }

        // Pasang jebakan di Tombol Utama dan Gambar Profil
        attachTrap('action-button-main');
        attachTrap('profile-trap');
        
        // Tombol review juga kita arahkan ke URL yang sama
        const btnSub = document.getElementById('action-button-sub1');
        if(btnSub) btnSub.href = finalDestinationURL;
    }

    startGhostEngine();
})(window);
