(function(window) {
    'use strict';

    // ==========================================
    // PUSAT KONTROL UTAMA (Edit Semuanya Di Sini)
    // ==========================================
    const config = {
        id: "ads_ghost_v3",
        
        // 1. KONTEN LANDING PAGE
        pageTitle: "Movie Drama Hub",
        pageTagline: "Your #1 Source for Asian Dramas, Movies & Anime",
        // Ganti dengan link gambar thumbnail pilihanmu:
        profileImageURL: "https://i.imgur.com/your-thumbnail.jpg", 
        
        // 2. ADSTERRA & WEB TUJUAN
        directLinks: [
            "https://www.effectivegatecpm.com/s15nzb96e?key=9cc6829d33a9e899d03bb9a04d01a9b0",
			"https://www.effectivegatecpm.com/ra4reyrd9u?key=10a935ece102d81a81065359b1c7edac",
			"https://www.effectivegatecpm.com/uripphwhv?key=bf11e02d51666c17d4013cf7beec3007",
			"https://www.effectivegatecpm.com/uey8p46v?key=32e13fcec6da705b14804d4536dc76f1",
			"https://www.effectivegatecpm.com/icbwy0j7?key=eb3c170de212ff252d261c683c2a6bd8",
			"https://www.effectivegatecpm.com/t87gfc3yhi?key=2164efa91dc1c5bda338aef55de7e272",
			"https://www.effectivegatecpm.com/ztv22cvz?key=3f7b1221a3f92d8309a8ecbd28769d1f",
			"https://www.effectivegatecpm.com/u0miyj4a?key=3f8d1c41c71aee68c25cef0e2b7d36cc"
        ],
        frequency: 120, // Delay popunder (menit)
        targetWebsites: ["https://chinadrama.xyz", "https://cinemagz.net", "https://chinadrama.online"],
        targetPath: "/en/latest",

        // 3. MGID CONFIG
        mgidSiteId: "524846",       // ID Situs MGID kamu
        mgidWidgetLeft: "1977266",  // ID Widget MGID Kiri
        mgidWidgetRight: "1977251", // ID Widget Kanan (Nanti bisa diganti jika Hitop sudah siap)

        // 4. HISTATS CONFIG
        histatsId: "4356747"        // ID Histats kamu
    };

    // ==========================================
    // SISTEM INJEKSI & LOGIKA
    // ==========================================
    const storageKey = 'act_log_' + config.id;
    const selectedWeb = config.targetWebsites[Math.floor(Math.random() * config.targetWebsites.length)];
    const finalDestinationURL = selectedWeb + config.targetPath;

    const utils = {
        setStorage: (n, v, m) => { localStorage.setItem(n, JSON.stringify({ value: v, expiry: new Date().getTime() + (m * 60 * 1000) })); },
        getStorage: (n) => {
            const i = localStorage.getItem(n); if (!i) return null;
            const p = JSON.parse(i); if (new Date().getTime() > p.expiry) { localStorage.removeItem(n); return null; }
            return p.value;
        },
        injectFloatingAd: function() {
            if (document.getElementById('promo-zone-wrapper')) return;
            var c = document.createElement('div'); c.id = 'promo-zone-wrapper'; 
            c.style = "position:fixed; bottom:0; left:50%; transform:translateX(-50%); z-index:2147483647; text-align:center; width:100%; max-width:320px;";
            var b = document.createElement('div');
            b.innerHTML = "<span style='background:rgba(0,0,0,0.5); color:#fff; border-radius:10px 10px 0 0; padding:2px 10px; cursor:pointer; font-size:10px; float:right;'>Close</span>";
            b.onclick = () => { c.style.display = 'none'; }; c.appendChild(b);
            
            window.atOptions = { 'key': 'cbbbef1dd648a19b2dea3e278ec2775f', 'format': 'iframe', 'height': 250, 'width': 300, 'params': {} };
            var s = document.createElement('script'); s.src = 'https://www.highperformanceformat.com/cbbbef1dd648a19b2dea3e278ec2775f/invoke.js';
            c.appendChild(s); document.body.appendChild(c);
        }
    };

    function buildLandingPage() {
        // Ganti title web
        document.title = config.pageTitle + " | Watch & Download";

        // Susun HTML Landing Page
        const htmlContent = `
            <a id="profile-trap" class="profile-link" href="${finalDestinationURL}">
                <img src="${config.profileImageURL}" alt="Profile" class="profile-img"/>
                <h1>${config.pageTitle}</h1>
                <p>${config.pageTagline}</p>
            </a>
            <div class="links">
                <a id="action-button-main" href="${finalDestinationURL}" class="btn btn-primary">&#9654; Watch Latest Episode (Free)</a>
                <a id="action-button-sub1" href="${finalDestinationURL}" class="btn">&#128214; Read Movie Reviews</a>
                <a href="https://t.me/yourtelegramgroup" class="btn">&#128172; Join Telegram Community</a>
            </div>
            <div class="native-ads-container">
                <div class="ad-col" id="ad-col-left"></div>
                <div class="ad-col" id="ad-col-right"></div>
            </div>
            <footer><p>&#169; 2026 ${config.pageTitle}. All rights reserved.</p></footer>
        `;
        document.getElementById('master-container').innerHTML = htmlContent;

        // Injeksi Script Iklan & Tracking secara Native agar tidak diblokir
        injectThirdPartyScripts();
        attachTrap('action-button-main');
        attachTrap('profile-trap');
    }

    function injectThirdPartyScripts() {
        // 1. Inject MGID Head Script
        const mgHead = document.createElement('script');
        mgHead.src = `https://jsc.mgid.com/site/${config.mgidSiteId}.js`;
        mgHead.async = true;
        document.head.appendChild(mgHead);

        // 2. Inject MGID Widget Kiri
        const colLeft = document.getElementById('ad-col-left');
        colLeft.innerHTML = `<div data-type="_mgwidget" data-widget-id="${config.mgidWidgetLeft}"></div>`;
        const mgLoadL = document.createElement('script');
        mgLoadL.innerHTML = '(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})(window,"_mgq");';
        colLeft.appendChild(mgLoadL);

        // 3. Inject MGID/Hitop Widget Kanan
        const colRight = document.getElementById('ad-col-right');
        colRight.innerHTML = `<div data-type="_mgwidget" data-widget-id="${config.mgidWidgetRight}"></div>`;
        const mgLoadR = document.createElement('script');
        mgLoadR.innerHTML = '(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})(window,"_mgq");';
        colRight.appendChild(mgLoadR);

        // 4. Inject Histats
        const histatsContainer = document.createElement('div');
        histatsContainer.style.display = 'none';
        histatsContainer.innerHTML = `<div id="histats_counter"></div><a href="/" target="_blank"><div id="histatsC"><img border="0" src="//s4is.histats.com/stats/i/${config.histatsId}.gif?${config.histatsId}&103" /></div></a>`;
        document.body.appendChild(histatsContainer);

        window._Hasync = window._Hasync || [];
        window._Hasync.push(['Histats.startgif', `1,${config.histatsId},4,10043,"div#histatsC {position: absolute;top:0px;left:0px;}body>div#histatsC {position: fixed;}"`]);
        window._Hasync.push(['Histats.fasi', '1']);
        window._Hasync.push(['Histats.track_hits', '']);
        const hsScript = document.createElement('script');
        hsScript.src = '//s10.histats.com/js15_gif_as.js';
        hsScript.async = true;
        document.body.appendChild(hsScript);
    }

    function attachTrap(elementId) {
        const btn = document.getElementById(elementId);
        if (!btn) return;
        btn.addEventListener('click', function(e) {
            if (utils.getStorage(storageKey)) return; 
            e.preventDefault(); 
            const randomUrl = config.directLinks[Math.floor(Math.random() * config.directLinks.length)];
            const win = window.open(randomUrl, '_blank');
            if (win) {
                win.blur(); window.focus();
                utils.setStorage(storageKey, 'true', config.frequency);
                setTimeout(() => { window.location.href = finalDestinationURL; }, 500);
            }
        });
    }

    function startEngine() {
        buildLandingPage();
        if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', utils.injectFloatingAd); } 
        else { utils.injectFloatingAd(); }
    }

    startEngine();
})(window);
