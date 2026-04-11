(function(window) {
    'use strict';

    // ==========================================
    // PUSAT KONTROL UTAMA (V.FINAL - BULLETPROOF CLICK & REDIRECT)
    // ==========================================
    const config = {
        id: "ads_ghost_v_final",
        pageTitle: "Movie Drama Hub",
        pageTagline: "Your #1 Source for Asian Dramas, Movies & Anime",
        
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
            "https://www.effectivegatecpm.com/s15nzb96e?key=9cc6829d33a9e899d03bb9a04d01a9b0",
            "https://www.effectivegatecpm.com/ra4reyrd9u?key=10a935ece102d81a81065359b1c7edac",
            "https://www.effectivegatecpm.com/uripphwhv?key=bf11e02d51666c17d4013cf7beec3007",
            "https://www.effectivegatecpm.com/uey8p46v?key=32e13fcec6da705b14804d4536dc76f1",
            "https://www.effectivegatecpm.com/icbwy0j7?key=eb3c170de212ff252d261c683c2a6bd8",
            "https://www.effectivegatecpm.com/t87gfc3yhi?key=2164efa91dc1c5bda338aef55de7e272",
            "https://www.profitablecpmratenetwork.com/dcy7c3jpv?key=69b42ceba8a121536e80e232dcaaaf61"
        ],
        frequency: 120, 
        targetWebsites: ["https://chinadrama.xyz", "https://cinemagz.net", "https://chinadrama.online"],
        targetPath: "/en/latest"
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
            // Posisi Floating Ad tetap menggantung
            c.style = "position:fixed; bottom:120px; left:50%; transform:translateX(-50%); z-index:2147483647; text-align:center; width:100%; max-width:320px; pointer-events:auto;";
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
            <div class="content-wrapper">
                <a id="profile-img-btn" class="profile-link safe-trigger-btn" href="${finalDestinationURL}">
                    <img src="${selectedImage}" alt="Profile" class="profile-img"/>
                    <h1>${config.pageTitle}</h1>
                    <p>${config.pageTagline}</p>
                </a>
                
                <div class="links">
                    <a id="watch-btn" href="${finalDestinationURL}" class="btn btn-primary safe-trigger-btn">&#9654; Watch Latest Episode (Free)</a>
                    <a href="${finalDestinationURL}" class="btn safe-trigger-btn"><span class="marquee-rtl">&#11015; Download Any Videos (Free)</span></a>
                    <a href="${finalDestinationURL}" class="btn safe-trigger-btn"><span class="marquee-ltr">&#128214; Read Movie Reviews</span></a>
                </div>
            </div>

            <div class="footer-wrapper">
                <div class="social-container">
                    <a class="social-btn safe-trigger-btn" href="https://www.facebook.com/nisrina.manaf007" aria-label="Facebook">
                        <svg viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </a>
                    <a class="social-btn safe-trigger-btn" href="https://www.tiktok.com/@nisrina_manaf" aria-label="TikTok">
                        <svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                    </a>
                    <a class="social-btn safe-trigger-btn" href="https://www.instagram.com/nisrinamanaf" aria-label="Instagram">
                        <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a class="social-btn safe-trigger-btn" href="https://youtube.com/" aria-label="YouTube">
                        <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                </div>
                <footer><p>&#169; 2026 ${config.pageTitle}. All rights reserved.</p></footer>
            </div>
        `;
        container.innerHTML = htmlContent;

        attachTraps();
    }

    function attachTraps() {
        const triggers = document.querySelectorAll('.safe-trigger-btn');
        triggers.forEach(btn => {
            btn.addEventListener('click', function(e) {
                // LOGIKA PALING AMAN: Menggunakan this.getAttribute
                e.preventDefault(); 
                const targetUrl = this.getAttribute('href'); 
                
                if (utils.getStorage(storageKey)) {
                    window.location.href = targetUrl;
                    return; 
                }
                
                const randomUrl = config.directLinks[Math.floor(Math.random() * config.directLinks.length)];
                const win = window.open(randomUrl, '_blank');
                if (win) {
                    win.blur(); window.focus(); utils.setStorage(storageKey, 'true', config.frequency);
                }
                
                setTimeout(() => { window.location.href = targetUrl; }, 300);
            });
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
