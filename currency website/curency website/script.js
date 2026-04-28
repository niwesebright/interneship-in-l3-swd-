// ========================================
// BRIGHT CURRENCY EXCHANGE
// SIMPLE LANGUAGE SWITCHER FOR L3 SWD
// Made by: Bright Currency Team
// ========================================

// ========================================
// 1. EXCHANGE RATES (Indangagaciro)
// ========================================
let rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    RWF: 1300,
    KES: 128,
    UGX: 3780,
    TZS: 2600,
    JPY: 150,
    INR: 83.5,
    CNY: 7.25,
    CAD: 1.37,
    AUD: 1.52
};

// ========================================
// 2. ALL TRANSLATIONS (Amagambo mu ndimi zose)
// ========================================
let allTexts = {
    // ENGLISH
    en: {
        // Header
        title: "💱 BRIGHT CURRENCY EXCHANGE",
        subtitle: "Your Trusted Partner for Real-Time Currency Conversion",
        
        // Navigation
        nav1: "🏠 Home",
        nav2: "💱 Converter",
        nav3: "📊 Details",
        nav4: "📜 History",
        nav5: "⚙️ Settings",
        
        // Home Page
        welcome: "🌟 Welcome to Bright Exchange",
        welcomeText: "SimpleChange is a simple, fast platform for exchanging currencies from anywhere in the world. We provide you with real-time exchange rates, easy-to-use tools, and absolutely no hassle.",
        whyChoose: "Why choose us?",
        feature1: "⚡ Real-time exchange rates",
        feature2: "🌍 Over 12 major currencies",
        feature3: "📱 Works on all devices",
        feature4: "🔒 Safe & secure",
        feature5: "💯 100% free to use",
        quickConverter: "🚀 Quick Converter",
        amount: "💰 Amount:",
        conversionType: "🔄 Conversion Type:",
        usdToRwf: "USD → RWF (1 USD = 1,300 RWF)",
        rwfToUsd: "RWF → USD (1 RWF = 0.00077 USD)",
        eurToRwf: "EUR → RWF (1 EUR = 1,200 RWF)",
        result: "Result:",
        goConverter: "🎯 Go to Full Converter →",
        liveRates: "📊 Live Exchange Rates (vs USD)",
        
        // Converter Page
        converterTitle: "💵 Currency Converter",
        fromLabel: "🔄 From:",
        toLabel: "🎯 To:",
        swapBtn: "🔄 Swap",
        convertBtn: "✨ Convert Now",
        converting: "Converting...",
        convertedOn: "🕐 Converted on",
        rateInfo: "Rate",
        enterAmount: "❌ Please enter a valid amount!",
        
        // Details Page
        detailsTitle: "🔍 Currency Information",
        selectCurrency: "Select Currency:",
        country: "🌍 Country",
        symbol: "💱 Symbol",
        comparisonTitle: "📈 Currency Comparison",
        oneUSD: "1 USD =",
        historicalTitle: "📊 Historical Trend (USD to RWF)",
        year2024: "2024: 1,250 RWF",
        year2025: "2025: 1,300 RWF",
        year2026: "2026: 1,350 RWF",
        trendNote: "📈 RWF has depreciated by ~8% over 3 years",
        performanceTitle: "⏰ Last 30 Days Performance",
        highest: "⬆️ Highest: 1,310",
        lowest: "⬇️ Lowest: 1,285",
        
        // History Page
        historyTitle: "📜 Conversion History",
        searchPlaceholder: "🔍 Search currency...",
        allCurrencies: "🌍 All Currencies",
        clearBtn: "🗑️ Clear All",
        noHistory: "📭 No conversion history yet. Try converting some currencies!",
        statsTitle: "📊 Statistics",
        totalConversions: "Total Conversions:",
        mostUsed: "Most Used Currency:",
        lastConversion: "Last Conversion:",
        clearConfirm: "⚠️ Are you sure you want to clear all conversion history?",
        clearedMsg: "✅ History cleared successfully!",
        
        // Settings Page
        settingsTitle: "⚙️ Settings",
        appearance: "🎨 Appearance",
        darkMode: "🌙 Dark Mode",
        defaultCurrencyTitle: "💰 Default Currency",
        saveDefault: "💾 Save Default Currency",
        languageTitle: "🌐 Language",
        saveLanguage: "💾 Save Language",
        aboutTitle: "ℹ️ About",
        version: "Version:",
        developer: "Developer:",
        ratesUpdated: "Rates Updated:",
        supported: "Supported Currencies:",
        contact: "Contact:",
        
        // Footer
        footerEmail: "🏦 Bright Currency Exchange | 📧 brightcurrencyexchange@gmail.com",
        footerRights: "© 2024 Bright Currency Exchange. All Rights Reserved.",
        footerRates: "⏱️ Rates updated daily at 00:00 UTC",
        
        // Common
        saved: "✅ Saved successfully!"
    },
    
    // KINYARWANDA
    rw: {
        // Header
        title: "💱 BRIGHT CURRENCY EXCHANGE",
        subtitle: "Uruhushya Rwawe Rwizewe mu Guhindura Ifaranga mu Gihe Nyakuri",
        
        // Navigation
        nav1: "🏠 Ahabanza",
        nav2: "💱 Muhinduzi",
        nav3: "📊 Ibya Bujyije",
        nav4: "📜 Amateka",
        nav5: "⚙️ Igenamiterere",
        
        // Home Page
        welcome: "🌟 Murakaza Neza kuri Bright Exchange",
        welcomeText: "SimpleChange ni urubuga rworoshye, rwihuse rwo guhindura ifaranga ahantu hose ku isi. Tubaha amakuru y'igihe nyakuri, ibikoresho byoroshye gukoresha, kandi nta tata.",
        whyChoose: "Kuki utuhitamo?",
        feature1: "⚡ Amakuru y'igihe nyakuri",
        feature2: "🌍 Amafaranga 12+ nyamukuru",
        feature3: "📱 Ikora kuri za aparateri zose",
        feature4: "🔒 Amakuru ari umutekano",
        feature5: "💯 Kureka gusa ku buntu",
        quickConverter: "🚀 Muhinduzi Wanguye",
        amount: "💰 Amafaranga:",
        conversionType: "🔄 Ubwoko bw'Imihindurire:",
        usdToRwf: "USD → RWF (1 USD = 1,300 RWF)",
        rwfToUsd: "RWF → USD (1 RWF = 0.00077 USD)",
        eurToRwf: "EUR → RWF (1 EUR = 1,200 RWF)",
        result: "Igisubizo:",
        goConverter: "🎯 Kuri Muhinduzi Wuzuye →",
        liveRates: "📊 Amakuru y'Ifaranga (kuruta USD)",
        
        // Converter Page
        converterTitle: "💵 Muhinduzi w'Ifaranga",
        fromLabel: "🔄 Kuva:",
        toLabel: "🎯 Kugeza:",
        swapBtn: "🔄 Hindanisha",
        convertBtn: "✨ Hindura Noneho",
        converting: "Irahindurwa...",
        convertedOn: "🕐 Yahinduwe ku",
        rateInfo: "Igipimo",
        enterAmount: "❌ Andika amafaranga nyakuri!",
        
        // Details Page
        detailsTitle: "🔍 Amakuru y'Ifaranga",
        selectCurrency: "Hitamo Ifaranga:",
        country: "🌍 Igihugu",
        symbol: "💱 Ikimenyetso",
        comparisonTitle: "📈 Ugereranije",
        oneUSD: "1 USD =",
        historicalTitle: "📊 Amateka y'Imihindagurikire (USD ku RWF)",
        year2024: "2024: 1,250 RWF",
        year2025: "2025: 1,300 RWF",
        year2026: "2026: 1,350 RWF",
        trendNote: "📈 RWF yagabanutseho ~8% mu myaka 3",
        performanceTitle: "⏰ Imyitwarire y'Iminsi 30 Ihise",
        highest: "⬆️ Iri hejuru: 1,310",
        lowest: "⬇️ Iri hasi: 1,285",
        
        // History Page
        historyTitle: "📜 Amateka y'Imihindurire",
        searchPlaceholder: "🔍 Shakisha ifaranga...",
        allCurrencies: "🌍 Amafaranga Yose",
        clearBtn: "🗑️ Hanagura Byose",
        noHistory: "📭 Nta mateka y'imihindurire. Gerageza guhindura amafaranga!",
        statsTitle: "📊 Ibibarwa",
        totalConversions: "Imihindurire Yose:",
        mostUsed: "Ifaranga Rikoreshwa Cyane:",
        lastConversion: "Imihindurire ya Nyuma:",
        clearConfirm: "⚠️ Urahatiye guhanagura amateka yose y'imihindurire?",
        clearedMsg: "✅ Amateka yasibwe neza!",
        
        // Settings Page
        settingsTitle: "⚙️ Igenamiterere",
        appearance: "🎨 Imiterere",
        darkMode: "🌙 Ijoro",
        defaultCurrencyTitle: "💰 Ifaranga Rihoraho",
        saveDefault: "💾 Bika Ifaranga Rihoraho",
        languageTitle: "🌐 Ururimi",
        saveLanguage: "💾 Bika Ururimi",
        aboutTitle: "ℹ️ Ibyawo",
        version: "Imibare:",
        developer: "Uwaburemye:",
        ratesUpdated: "Amakuru Ahindurwa:",
        supported: "Amafaranga Ashigikiwe:",
        contact: "Ibyo Twakurikira:",
        
        // Footer
        footerEmail: "🏦 Bright Currency Exchange | 📧 brightcurrencyexchange@gmail.com",
        footerRights: "© 2024 Bright Currency Exchange. Uburenganzira bwose buragirirwa.",
        footerRates: "⏱️ Amakuru ahindurwa buri munsi saa sita z'ijoro",
        
        // Common
        saved: "✅ Byabitswe neza!"
    },
    
    // FRENCH
    fr: {
        // Header
        title: "💱 BRIGHT CURRENCY EXCHANGE",
        subtitle: "Votre Partenaire de Confiance pour la Conversion de Devises",
        
        // Navigation
        nav1: "🏠 Accueil",
        nav2: "💱 Convertisseur",
        nav3: "📊 Détails",
        nav4: "📜 Historique",
        nav5: "⚙️ Paramètres",
        
        // Home Page
        welcome: "🌟 Bienvenue sur Bright Exchange",
        welcomeText: "SimpleChange est une plateforme simple et rapide pour échanger des devises partout dans le monde. Nous vous fournissons des taux de change en temps réel, des outils faciles à utiliser, et aucun tracas.",
        whyChoose: "Pourquoi nous choisir?",
        feature1: "⚡ Taux de change en temps réel",
        feature2: "🌍 Plus de 12 devises majeures",
        feature3: "📱 Fonctionne sur tous les appareils",
        feature4: "🔒 Sûr et sécurisé",
        feature5: "💯 100% gratuit",
        quickConverter: "🚀 Convertisseur Rapide",
        amount: "💰 Montant:",
        conversionType: "🔄 Type de Conversion:",
        usdToRwf: "USD → RWF (1 USD = 1 300 RWF)",
        rwfToUsd: "RWF → USD (1 RWF = 0,00077 USD)",
        eurToRwf: "EUR → RWF (1 EUR = 1 200 RWF)",
        result: "Résultat:",
        goConverter: "🎯 Aller au Convertisseur Complet →",
        liveRates: "📊 Taux de Change en Direct (vs USD)",
        
        // Converter Page
        converterTitle: "💵 Convertisseur de Devises",
        fromLabel: "🔄 De:",
        toLabel: "🎯 À:",
        swapBtn: "🔄 Échanger",
        convertBtn: "✨ Convertir Maintenant",
        converting: "Conversion...",
        convertedOn: "🕐 Converti le",
        rateInfo: "Taux",
        enterAmount: "❌ Entrez un montant valide!",
        
        // Details Page
        detailsTitle: "🔍 Information sur la Devise",
        selectCurrency: "Sélectionnez une Devise:",
        country: "🌍 Pays",
        symbol: "💱 Symbole",
        comparisonTitle: "📈 Comparaison",
        oneUSD: "1 USD =",
        historicalTitle: "📊 Tendance Historique (USD vers RWF)",
        year2024: "2024: 1 250 RWF",
        year2025: "2025: 1 300 RWF",
        year2026: "2026: 1 350 RWF",
        trendNote: "📈 Le RWF s'est déprécié d'environ 8% en 3 ans",
        performanceTitle: "⏰ Performance des 30 Derniers Jours",
        highest: "⬆️ Le plus haut: 1 310",
        lowest: "⬇️ Le plus bas: 1 285",
        
        // History Page
        historyTitle: "📜 Historique des Conversions",
        searchPlaceholder: "🔍 Rechercher une devise...",
        allCurrencies: "🌍 Toutes les Devises",
        clearBtn: "🗑️ Tout Effacer",
        noHistory: "📭 Aucun historique de conversion. Essayez de convertir des devises!",
        statsTitle: "📊 Statistiques",
        totalConversions: "Total des Conversions:",
        mostUsed: "Devise la Plus Utilisée:",
        lastConversion: "Dernière Conversion:",
        clearConfirm: "⚠️ Êtes-vous sûr de vouloir effacer tout l'historique?",
        clearedMsg: "✅ Historique effacé avec succès!",
        
        // Settings Page
        settingsTitle: "⚙️ Paramètres",
        appearance: "🎨 Apparence",
        darkMode: "🌙 Mode Sombre",
        defaultCurrencyTitle: "💰 Devise par Défaut",
        saveDefault: "💾 Enregistrer la Devise par Défaut",
        languageTitle: "🌐 Langue",
        saveLanguage: "💾 Enregistrer la Langue",
        aboutTitle: "ℹ️ À Propos",
        version: "Version:",
        developer: "Développeur:",
        ratesUpdated: "Taux Mis à Jour:",
        supported: "Devises Supportées:",
        contact: "Contact:",
        
        // Footer
        footerEmail: "🏦 Bright Currency Exchange | 📧 brightcurrencyexchange@gmail.com",
        footerRights: "© 2024 Bright Currency Exchange. Tous droits réservés.",
        footerRates: "⏱️ Taux mis à jour quotidiennement à 00:00 UTC",
        
        // Common
        saved: "✅ Enregistré avec succès!"
    }
};

// Current language
let currentLanguage = "en";

// ========================================
// 3. MAIN LANGUAGE FUNCTION
// ========================================

// Change language function - called when user selects new language
function changeLanguage() {
    let langSelect = document.getElementById("languageSelect");
    if (langSelect) {
        currentLanguage = langSelect.value;
        // Save to localStorage
        localStorage.setItem("appLanguage", currentLanguage);
        // Update all text on page
        updateAllText();
        // Show success message
        showMessage(allTexts[currentLanguage].saved);
    }
}

// Update all text on the current page
function updateAllText() {
    let t = allTexts[currentLanguage];
    if (!t) return;
    
    // Update header
    let headerH1 = document.querySelector("header h1");
    if (headerH1) headerH1.innerHTML = t.title;
    
    let headerP = document.querySelector("header p");
    if (headerP) headerP.innerHTML = t.subtitle;
    
    // Update navigation buttons
    let navButtons = document.querySelectorAll("nav button a");
    if (navButtons.length >= 5) {
        if (navButtons[0]) navButtons[0].innerHTML = t.nav1;
        if (navButtons[1]) navButtons[1].innerHTML = t.nav2;
        if (navButtons[2]) navButtons[2].innerHTML = t.nav3;
        if (navButtons[3]) navButtons[3].innerHTML = t.nav4;
        if (navButtons[4]) navButtons[4].innerHTML = t.nav5;
    }
    
    // Update footer
    let footer = document.querySelector("footer");
    if (footer) {
        let footerPs = footer.querySelectorAll("p");
        if (footerPs.length >= 3) {
            if (footerPs[0]) footerPs[0].innerHTML = t.footerEmail;
            if (footerPs[1]) footerPs[1].innerHTML = t.footerRights;
            if (footerPs[2]) footerPs[2].innerHTML = t.footerRates;
        }
    }
    
    // Update based on current page
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "" || currentPage === "index.html") {
        updateHomePage(t);
    } else if (currentPage === "converter.html") {
        updateConverterPage(t);
    } else if (currentPage === "details.html") {
        updateDetailsPage(t);
    } else if (currentPage === "history.html") {
        updateHistoryPage(t);
    } else if (currentPage === "setting.html") {
        updateSettingsPage(t);
    }
}

// Update Home Page
function updateHomePage(t) {
    // Welcome title
    let welcomeTitle = document.querySelector(".box h3");
    if (welcomeTitle && welcomeTitle.innerText.includes("Welcome")) {
        welcomeTitle.innerHTML = t.welcome;
    }
    
    // Welcome text
    let welcomeText = document.querySelector(".box p");
    if (welcomeText && welcomeText.innerText.includes("SimpleChange")) {
        welcomeText.innerHTML = t.welcomeText;
    }
    
    // Why choose us title
    let whyTitles = document.querySelectorAll(".box h3");
    if (whyTitles[1] && whyTitles[1].innerText.includes("Why")) {
        whyTitles[1].innerHTML = t.whyChoose;
    }
    
    // Features list
    let featureList = document.querySelectorAll(".box ul li");
    if (featureList.length >= 5) {
        featureList[0].innerHTML = t.feature1;
        featureList[1].innerHTML = t.feature2;
        featureList[2].innerHTML = t.feature3;
        featureList[3].innerHTML = t.feature4;
        featureList[4].innerHTML = t.feature5;
    }
    
    // Quick converter title
    if (whyTitles[2] && whyTitles[2].innerText.includes("Quick")) {
        whyTitles[2].innerHTML = t.quickConverter;
    }
    
    // Amount label
    let labels = document.querySelectorAll(".box label");
    if (labels[0]) labels[0].innerHTML = t.amount;
    if (labels[1]) labels[1].innerHTML = t.conversionType;
    
    // Button
    let converterBtn = document.querySelector(".box button");
    if (converterBtn) converterBtn.innerHTML = t.goConverter;
    
    // Live rates title
    if (whyTitles[3] && whyTitles[3].innerText.includes("Live")) {
        whyTitles[3].innerHTML = t.liveRates;
    }
}

// Update Converter Page
function updateConverterPage(t) {
    let converterTitle = document.querySelector(".box h3");
    if (converterTitle) converterTitle.innerHTML = t.converterTitle;
    
    let labels = document.querySelectorAll(".box label");
    if (labels.length >= 3) {
        if (labels[0]) labels[0].innerHTML = t.amount;
        if (labels[1]) labels[1].innerHTML = t.fromLabel;
        if (labels[2]) labels[2].innerHTML = t.toLabel;
    }
    
    let buttons = document.querySelectorAll(".box button");
    if (buttons.length >= 2) {
        if (buttons[0]) buttons[0].innerHTML = t.swapBtn;
        if (buttons[1]) buttons[1].innerHTML = t.convertBtn;
    }
}

// Update Details Page
function updateDetailsPage(t) {
    let titles = document.querySelectorAll(".box h3");
    if (titles[0]) titles[0].innerHTML = t.detailsTitle;
    if (titles[1]) titles[1].innerHTML = t.comparisonTitle;
    if (titles[2]) titles[2].innerHTML = t.historicalTitle;
    if (titles[3]) titles[3].innerHTML = t.performanceTitle;
    
    let currencyLabel = document.querySelector(".box label");
    if (currencyLabel) currencyLabel.innerHTML = t.selectCurrency;
    
    // Comparison list
    let compList = document.querySelector("#comparison ul");
    if (compList) {
        let items = compList.querySelectorAll("li");
        if (items.length >= 5) {
            items[0].innerHTML = "🇪🇺 0.92 EUR";
            items[1].innerHTML = "🇬🇧 0.79 GBP";
            items[2].innerHTML = "🇷🇼 1,300 RWF";
            items[3].innerHTML = "🇰🇪 128 KES";
            items[4].innerHTML = "🇯🇵 150 JPY";
        }
    }
    
    // Historical bars
    let bars = document.querySelectorAll(".bar");
    if (bars.length >= 3) {
        bars[0].innerHTML = t.year2024;
        bars[1].innerHTML = t.year2025;
        bars[2].innerHTML = t.year2026;
    }
    
    let trendNote = document.querySelector(".box p");
    if (trendNote && trendNote.innerText.includes("depreciated")) {
        trendNote.innerHTML = t.trendNote;
    }
    
    let performanceP = document.querySelectorAll(".box p")[1];
    if (performanceP && performanceP.innerText.includes("Highest")) {
        performanceP.innerHTML = `${t.highest} | ${t.lowest}`;
    }
}

// Update History Page
function updateHistoryPage(t) {
    let titles = document.querySelectorAll(".box h3");
    if (titles[0]) titles[0].innerHTML = t.historyTitle;
    if (titles[1]) titles[1].innerHTML = t.statsTitle;
    
    let searchInput = document.getElementById("search");
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    
    let filterSelect = document.getElementById("filter");
    if (filterSelect && filterSelect.options[0]) {
        filterSelect.options[0].text = t.allCurrencies;
    }
    
    let clearButton = document.querySelector(".box button");
    if (clearButton) clearButton.innerHTML = t.clearBtn;
    
    // Update stats labels
    let statPs = document.querySelectorAll("#stats p");
    if (statPs.length >= 3) {
        let strongs = statPs[0].querySelectorAll("strong");
        if (strongs[0]) strongs[0].innerHTML = t.totalConversions;
        strongs = statPs[1].querySelectorAll("strong");
        if (strongs[0]) strongs[0].innerHTML = t.mostUsed;
        strongs = statPs[2].querySelectorAll("strong");
        if (strongs[0]) strongs[0].innerHTML = t.lastConversion;
    }
}

// Update Settings Page
function updateSettingsPage(t) {
    let titles = document.querySelectorAll(".box h3");
    if (titles[0]) titles[0].innerHTML = t.settingsTitle;
    if (titles[1]) titles[1].innerHTML = t.appearance;
    if (titles[2]) titles[2].innerHTML = t.defaultCurrencyTitle;
    if (titles[3]) titles[3].innerHTML = t.languageTitle;
    if (titles[4]) titles[4].innerHTML = t.aboutTitle;
    
    let modeText = document.getElementById("modeText");
    if (modeText) modeText.innerHTML = t.darkMode;
    
    let saveCurrencyBtn = document.querySelectorAll(".box button")[0];
    if (saveCurrencyBtn) saveCurrencyBtn.innerHTML = t.saveDefault;
    
    let saveLangBtn = document.querySelectorAll(".box button")[1];
    if (saveLangBtn) saveLangBtn.innerHTML = t.saveLanguage;
    
    // About section
    let aboutPs = document.querySelectorAll(".box p");
    if (aboutPs.length >= 5) {
        aboutPs[0].innerHTML = `<strong>${t.version}</strong> 2.0.0`;
        aboutPs[1].innerHTML = `<strong>${t.developer}</strong> Bright Currency Team`;
        aboutPs[2].innerHTML = `<strong>${t.ratesUpdated}</strong> Daily`;
        aboutPs[3].innerHTML = `<strong>${t.supported}</strong> 12+`;
        aboutPs[4].innerHTML = `<strong>${t.contact}</strong><br>📧 brightcurrencyexchange@gmail.com<br>📞 +250 788 123 456`;
    }
}

// Show temporary message
function showMessage(msg) {
    // Check if message div exists, if not create it
    let msgDiv = document.getElementById("tempMessage");
    if (!msgDiv) {
        msgDiv = document.createElement("div");
        msgDiv.id = "tempMessage";
        msgDiv.style.position = "fixed";
        msgDiv.style.bottom = "20px";
        msgDiv.style.right = "20px";
        msgDiv.style.backgroundColor = "#4CAF50";
        msgDiv.style.color = "white";
        msgDiv.style.padding = "12px 20px";
        msgDiv.style.borderRadius = "8px";
        msgDiv.style.zIndex = "9999";
        msgDiv.style.fontSize = "14px";
        document.body.appendChild(msgDiv);
    }
    
    msgDiv.innerHTML = msg;
    msgDiv.style.display = "block";
    
    setTimeout(function() {
        msgDiv.style.display = "none";
    }, 2000);
}

// ========================================
// 4. CONVERTER FUNCTIONS
// ========================================

function convertCurrency() {
    let amountInput = document.getElementById("amount");
    let fromSelect = document.getElementById("from");
    let toSelect = document.getElementById("to");
    let resultDiv = document.getElementById("result");
    let datetimeP = document.getElementById("datetime");
    let t = allTexts[currentLanguage];
    
    if (!amountInput || !fromSelect || !toSelect || !resultDiv) return;
    
    let amount = parseFloat(amountInput.value);
    
    if (isNaN(amount) || amount <= 0) {
        alert(t.enterAmount);
        return;
    }
    
    showLoader(true);
    
    setTimeout(function() {
        let fromRate = rates[fromSelect.value];
        let toRate = rates[toSelect.value];
        let result = (amount / fromRate) * toRate;
        let formattedResult = result.toFixed(2);
        
        resultDiv.innerHTML = `
            <div style="font-size: 1.5rem; text-align: center;">
                ${amount} ${fromSelect.value} = 
                <strong style="color: #FFD700;">${formattedResult} ${toSelect.value}</strong>
            </div>
            <div style="font-size: 0.8rem; text-align: center; margin-top: 10px;">
                ${t.rateInfo}: 1 ${fromSelect.value} = ${(toRate/fromRate).toFixed(4)} ${toSelect.value}
            </div>
        `;
        
        if (datetimeP) {
            let now = new Date();
            datetimeP.innerHTML = `${t.convertedOn}: ${now.toLocaleString()}`;
        }
        
        saveToHistory(amount, fromSelect.value, toSelect.value, result);
        showLoader(false);
    }, 500);
}

function swapCurrency() {
    let fromSelect = document.getElementById("from");
    let toSelect = document.getElementById("to");
    
    if (fromSelect && toSelect) {
        let temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;
        convertCurrency();
    }
}

function showLoader(show) {
    let loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = show ? "block" : "none";
    }
}

function simpleConvert() {
    let amountInput = document.getElementById("simpleAmount");
    let rateSelect = document.getElementById("simpleRate");
    let resultEl = document.getElementById("simpleResult");
    let t = allTexts[currentLanguage];
    
    if (!amountInput || !rateSelect || !resultEl) return;
    
    let amount = parseFloat(amountInput.value);
    let rate = parseFloat(rateSelect.value);
    
    if (isNaN(amount) || amount <= 0) {
        resultEl.innerHTML = t.result + " 0";
        return;
    }
    
    let result = amount * rate;
    resultEl.innerHTML = t.result + " " + result.toLocaleString();
}

// ========================================
// 5. HISTORY FUNCTIONS
// ========================================

function saveToHistory(amount, from, to, result) {
    let history = localStorage.getItem("currencyHistory");
    if (history) {
        history = JSON.parse(history);
    } else {
        history = [];
    }
    
    let historyItem = {
        id: Date.now(),
        amount: amount,
        from: from,
        to: to,
        result: result,
        date: new Date().toLocaleString()
    };
    
    history.unshift(historyItem);
    
    if (history.length > 20) history.pop();
    
    localStorage.setItem("currencyHistory", JSON.stringify(history));
    
    if (document.getElementById("historyList")) {
        displayHistory();
    }
}

function displayHistory() {
    let historyList = document.getElementById("historyList");
    if (!historyList) return;
    
    let history = localStorage.getItem("currencyHistory");
    if (history) {
        history = JSON.parse(history);
    } else {
        history = [];
    }
    
    let t = allTexts[currentLanguage];
    historyList.innerHTML = "";
    
    if (history.length === 0) {
        historyList.innerHTML = `<div class="history-item">${t.noHistory}</div>`;
        return;
    }
    
    for (let i = 0; i < history.length; i++) {
        let item = history[i];
        let div = document.createElement("div");
        div.className = "history-item";
        div.innerHTML = `
            <strong>💱 ${item.amount} ${item.from} → ${item.result.toFixed(2)} ${item.to}</strong>
            <br>
            <small>📅 ${item.date}</small>
        `;
        historyList.appendChild(div);
    }
    
    updateStats();
}

function clearHistory() {
    let t = allTexts[currentLanguage];
    if (confirm(t.clearConfirm)) {
        localStorage.removeItem("currencyHistory");
        displayHistory();
        showMessage(t.clearedMsg);
    }
}

function filterHistory() {
    let searchInput = document.getElementById("search");
    if (!searchInput) return;
    
    let searchTerm = searchInput.value.toLowerCase();
    let items = document.querySelectorAll(".history-item");
    
    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        if (text.includes(searchTerm)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

function updateStats() {
    let history = localStorage.getItem("currencyHistory");
    if (history) {
        history = JSON.parse(history);
    } else {
        history = [];
    }
    
    let totalCount = document.getElementById("totalCount");
    if (totalCount) totalCount.innerText = history.length;
    
    if (history.length > 0) {
        let mostUsedSpan = document.getElementById("mostUsed");
        let lastConversionSpan = document.getElementById("lastConversion");
        
        let currencyCount = {};
        for (let i = 0; i < history.length; i++) {
            let item = history[i];
            currencyCount[item.from] = (currencyCount[item.from] || 0) + 1;
            currencyCount[item.to] = (currencyCount[item.to] || 0) + 1;
        }
        
        let mostUsed = "USD";
        let maxCount = 0;
        for (let curr in currencyCount) {
            if (currencyCount[curr] > maxCount) {
                maxCount = currencyCount[curr];
                mostUsed = curr;
            }
        }
        
        if (mostUsedSpan) mostUsedSpan.innerText = mostUsed;
        if (lastConversionSpan) lastConversionSpan.innerText = history[0].date;
    }
}

// ========================================
// 6. DARK MODE FUNCTIONS
// ========================================

function toggleMode() {
    document.body.classList.toggle("dark");
    let mode = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);
}

function loadTheme() {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
}

// ========================================
// 7. DEFAULT CURRENCY FUNCTIONS
// ========================================

function saveDefaultCurrency() {
    let select = document.getElementById("defaultCurrencySelect");
    if (select) {
        localStorage.setItem("defaultCurrency", select.value);
        showMessage(allTexts[currentLanguage].saved);
    }
}

function applyDefaultCurrency() {
    let defaultCurrency = localStorage.getItem("defaultCurrency");
    let fromSelect = document.getElementById("from");
    if (defaultCurrency && fromSelect) {
        fromSelect.value = defaultCurrency;
    }
}

// ========================================
// 8. CURRENCY DETAILS FUNCTIONS
// ========================================

function loadCurrencyInfo() {
    let currencySelect = document.getElementById("currencySelect");
    let infoDiv = document.getElementById("info");
    let rateDiv = document.getElementById("rate");
    let t = allTexts[currentLanguage];
    
    if (!currencySelect) return;
    
    let currency = currencySelect.value;
    let rateToUSD = rates[currency];
    let rateFromUSD = (1 / rateToUSD).toFixed(4);
    
    let currencyNames = {
        USD: "US Dollar", EUR: "Euro", GBP: "British Pound", RWF: "Rwandan Franc",
        KES: "Kenyan Shilling", UGX: "Ugandan Shilling", TZS: "Tanzanian Shilling",
        JPY: "Japanese Yen", INR: "Indian Rupee", CNY: "Chinese Yuan",
        CAD: "Canadian Dollar", AUD: "Australian Dollar"
    };
    
    let countries = {
        USD: "United States", EUR: "European Union", GBP: "United Kingdom", RWF: "Rwanda",
        KES: "Kenya", UGX: "Uganda", TZS: "Tanzania", JPY: "Japan",
        INR: "India", CNY: "China", CAD: "Canada", AUD: "Australia"
    };
    
    let symbols = {
        USD: "$", EUR: "€", GBP: "£", RWF: "FRw", KES: "KSh",
        UGX: "USh", TZS: "TSh", JPY: "¥", INR: "₹", CNY: "¥", CAD: "C$", AUD: "A$"
    };
    
    if (infoDiv) {
        infoDiv.innerHTML = `
            <strong>${currencyNames[currency]} (${currency})</strong><br>
            ${t.country}: ${countries[currency]}<br>
            ${t.symbol}: ${symbols[currency]}
        `;
    }
    
    if (rateDiv) {
        rateDiv.innerHTML = `
            📈 1 USD = ${rateToUSD} ${currency}<br>
            📉 1 ${currency} = ${rateFromUSD} USD
        `;
    }
}

// ========================================
// 9. LOAD SAVED LANGUAGE
// ========================================

function loadSavedLanguage() {
    let savedLang = localStorage.getItem("appLanguage");
    if (savedLang && allTexts[savedLang]) {
        currentLanguage = savedLang;
        let langSelect = document.getElementById("languageSelect");
        if (langSelect) {
            langSelect.value = savedLang;
        }
        updateAllText();
    }
}

// ========================================
// 10. INITIALIZE EVERYTHING
// ========================================

window.onload = function() {
    console.log("Bright Currency Exchange Ready!");
    
    loadTheme();
    loadSavedLanguage();
    applyDefaultCurrency();
    
    if (document.getElementById("historyList")) {
        displayHistory();
    }
    
    if (document.getElementById("currencySelect")) {
        loadCurrencyInfo();
    }
    
    if (document.getElementById("amount") && document.getElementById("from") && document.getElementById("to")) {
        convertCurrency();
    }
};