(function(window) {
    'use strict';

    // ==========================================
    // PUSAT KONTROL UTAMA (V.5 - CLEAN IMAGE ROTATION)
    // ==========================================
    const config = {
        id: "ads_ghost_v5",
        pageTitle: "Movie Drama Hub",
        pageTagline: "Your #1 Source for Asian Dramas, Movies & Anime",
        
        // --- ROTASI GAMBAR PROFIL ---
        profileImages: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYSgOyWaIakV8zVKF7pFo5NnRUWvGLxOauPAoezNWBNAw3L_wZDteJGSYRjCf8HR49hOdgkHi1a6yfIGhs804JFctskrwj6vYL6S26uria83j5BAIgBmZMXm6P-wTLiHOeJyO8dCd1gSZivh18T4wk1lZ70uXZZZwCAKhXops7EvzsDwa-12qZKzzgdopq/s709/meeigth.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCcdl4EUPTunIcYmsahzlcbcFe6M7rCI6CLtHxZgdkQzbARNdn6kZTM3tEKM7l5EtBlneaa52pdzSkdkZ5cIkX3wSC2m2l2LExfaGpg5kedj4TL9sfG6RoTFguXI5_n4Kucr-dKyfc402maxlKnZLw3kCEzpgeDj34HsGdJ_KbhndMJakcTGMF3F04Tlhs/s850/mefive.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi04v34TxnrGTL5WZW-bwza0InVSa2UJDvBgsbtH7UNvhwMJsyfLST4DPP3eT_XWzd-qsRGAiM2ChNMnDLQaYs8O5tvVReeHaQ2xHCw0hJdIQlfdGqF1eLqv51aCB28fIepI-Qln5jBtrkoPFqButK9qM03xB93YEu_PhGPsrZaBaWjLlYjA8ct0rEIxJBz/s850/mefour.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOXRO0APjRZKuNl-VfD1iGLB_xQxZa8SUoOMOZZmBcdjOIzBEgs5t7gDuqlyxNuPP0nINFPy2oC0pw2-dJdhC4b_11tMquhCuNsm316b3nrdliGueXrk0xYTCBzYJSuFWouZif-llYeWbUmZwnIbmp4gzQ5fFA27_crX0Dsr5QhzkdjjWiGm8E7FS2a27t/s850/menine.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVTYFlRUc5KeFbH4C2JenRgyw8vtsVbSb-y3Pso5wN2_QhwWfpM10nqliTD9hVhfRIoAUyldV2B8SO-_usvAzIe5xO-LPlctshkoNEn2EAlBlVRND1MTmr_Tiuq6KE_Sbm-FziAfCgxgmG9jewrs3ZPz6W-7sjVYYid4DBqlJZLwEAxDW90dwueuFhyphenhyphen1Zv/s288/meone.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8fgBDWK-kQblTM6hCPeoDxkfgrLsw-BEviYH9i67XJUB69ALKgq6_g_fdORQSUiICVG-xVSteNCJOBXmLCM_w5JG-qSRJ_o5y35Zo8J_srfoeEMYXsXIVz0C2Oq0tAbIwszX8vC2-uRlCGPdAcXknUxqnTevdV0D3ilywITqpo6v_Srpb6mfjiFaF0qMI/s709/meseven.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC7cLYQO1loLamcT6KTpgOScGO0Yh3M4c1cGqdhCx2hg19tolXTaFd3wcMuAB0y5dCaOo1QLX1y-npUj0pEdhQ8z3aik6jWdCFtyp_ZNG4AvptIMBneF7yeLtKJCbbxBCPp4xwsx6-fOVJUt84qYYS4LWxA01o8kQ_gufPnnNsqGpn5JzxDnN1dZ2-p7GM/s1077/mesix.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaw6pwEAlA7XHcQOA-7bAhKZCVuwM2riDvjY49bS85uqzoz-E4PcdWxCkXaia3dZ48tIfPzWDg0LwJpNIdkRk64goAkOYKHAx0k4aVQDdeLIMcU9nwpel8qgEuRqb2CPYD9jhBmJJLrjs2CjWmasKUk1zGf-ihhPzDhduAPhqi4lwknkDAH-YJfV1i2KdK/s992/meten.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWgxPBTHI5JUWKuu0VDXs_KQM0PKu6j9b-YqjgKZq1SBqc-F2JBlATfcvLLJXVcCGEV6hSxfux3aGA8qVl5s8oegZjzuvU8Gq0vGdf8qh5t3tWCCNZrEaoBzhrRWJfLbRWZ9CiiaTfBcYwSfqryuw2ldv8sqCQyEn1RAYIJL7qhQNR05lIix79j44droHN/s1077/metree.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye95RZkuV_Wcq06zZFF6WauCla0SRjCha2GDDwD5_FhuEV_aD4KKVHBpnt1DU-RhJtSgGjo9rWzdaQ7vQfUnKcEkNd9VS1plQTUE8GxmhQ3YyE9ScgJMjndOLEwunXY_NxSpxsiMi-WkQU5REcuPLRXXtSyYNbOZ36s2UNkBkGm3bwH5TzKypyw5hJbmf/s624/metwo.png"
        ], 
        
        directLinks: [
            "https://www.effectivegatecpm.com/t87gfc3yhi?key=2164efa91dc1c5bda338aef55de7e272",
"https://www.effectivegatecpm.com/ra4reyrd9u?key=10a935ece102d81a81065359b1c7edac",
"https://www.effectivegatecpm.com/uripphwhv?key=bf11e02d51666c17d4013cf7beec3007",
"https://www.effectivegatecpm.com/uey8p46v?key=32e13fcec6da705b14804d4536dc76f1",
"https://www.effectivegatecpm.com/icbwy0j7?key=eb3c170de212ff252d261c683c2a6bd8"
        ],
        frequency: 120, 
        targetWebsites: ["https://chinadrama.xyz", "https://cinemagz.net", "https://chinadrama.online"],
        targetPath: "/en/latest",
        mgidSiteId: "524846",       
        mgidWidgetLeft: "1977266",  
        mgidWidgetRight: "1977251", 
        histatsId: "4356747"        
    };

    const storageKey = 'act_log_' + config.id;
    const selectedWeb = config.targetWebsites[Math.floor(Math.random() * config.targetWebsites.length)];
    const finalDestinationURL = selectedWeb + config.targetPath;
    const selectedImage = config.profileImages[Math.floor(Math.random() * config.profileImages.length)];

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
        document.title = config.pageTitle + " | Watch & Download";
        const container = document.getElementById('master-container');
        if (!container) return; 

        const htmlContent = `
            <a id="profile-trap" class="profile-link" href="${finalDestinationURL}">
                <img src="${selectedImage}" alt="Profile" class="profile-img"/>
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
        container.innerHTML = htmlContent;

        injectThirdPartyScripts();
        attachTrap('action-button-main');
        attachTrap('profile-trap');
    }

    function injectThirdPartyScripts() {
        const mgHead = document.createElement('script'); mgHead.src = `https://jsc.mgid.com/site/${config.mgidSiteId}.js`; mgHead.async = true; document.head.appendChild(mgHead);
        
        const colLeft = document.getElementById('ad-col-left');
        if (colLeft) {
            colLeft.innerHTML = `<div data-type="_mgwidget" data-widget-id="${config.mgidWidgetLeft}"></div>`;
            const mgLoadL = document.createElement('script'); mgLoadL.innerHTML = '(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})(window,"_mgq");'; colLeft.appendChild(mgLoadL);
        }

        const colRight = document.getElementById('ad-col-right');
        if (colRight) {
            colRight.innerHTML = `<div data-type="_mgwidget" data-widget-id="${config.mgidWidgetRight}"></div>`;
            const mgLoadR = document.createElement('script'); mgLoadR.innerHTML = '(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})(window,"_mgq");'; colRight.appendChild(mgLoadR);
        }

        const histatsContainer = document.createElement('div');
        histatsContainer.style.display = 'none';
        histatsContainer.innerHTML = `<div id="histats_counter"></div><a href="/" target="_blank"><div id="histatsC"><img border="0" src="//s4is.histats.com/stats/i/${config.histatsId}.gif?${config.histatsId}&103" /></div></a>`;
        document.body.appendChild(histatsContainer);

        window._Hasync = window._Hasync || [];
        window._Hasync.push(['Histats.startgif', `1,${config.histatsId},4,10043,"div#histatsC {position: absolute;top:0px;left:0px;}body>div#histatsC {position: fixed;}"`]);
        window._Hasync.push(['Histats.fasi', '1']);
        window._Hasync.push(['Histats.track_hits', '']);
        const hsScript = document.createElement('script'); hsScript.src = '//s10.histats.com/js15_gif_as.js'; hsScript.async = true; document.body.appendChild(hsScript);
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
                win.blur(); window.focus(); utils.setStorage(storageKey, 'true', config.frequency);
                setTimeout(() => { window.location.href = finalDestinationURL; }, 500);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            buildLandingPage(); utils.injectFloatingAd();
        });
    } else {
        buildLandingPage(); utils.injectFloatingAd();
    }
})(window);
