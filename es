<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Hafen Consolidators — Fletes Globales y Comercio</title>

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    
    <style>
        /* Base Variables */
        :root{
            --gold:#d4af37;
            --navy:#0d1b2a;
            --muted:#6b6b6b;
            --maxw:1320px;
            --white:#ffffff;
            --black:#0b0b0b;
            --light-bg: #f7f9fb;
            --highlight-bg: rgba(212, 175, 55, 0.08); /* Gold highlight */
        }

        /* Font Awesome Icons (Internalized for Performance) */
        @font-face {
            font-family: 'Font Awesome 6 Free';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2) format('woff2');
        }
        .fas {
            font-family: 'Font Awesome 6 Free';
            font-weight: 900;
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
        }
        /* Specific Icon Definitions */
        .fa-ship:before { content: "\f21a"; }
        .fa-plane:before { content: "\f072"; }
        .fa-plane-departure:before { content: "\f5b0"; }
        .fa-warehouse:before { content: "\f494"; }
        .fa-handshake:before { content: "\f2b5"; }
        .fa-route:before { content: "\f4d7"; }
        .fa-box-open:before { content: "\f49e"; }
        .fa-passport:before { content: "\f5ea"; }
        .fa-shield-alt:before { content: "\f3ed"; }
        .fa-money-check-dollar:before { content: "\f4c3"; } /* New icon for money */
        .fa-globe:before { content: "\f0ac"; }
        .fa-laptop-code:before { content: "\f5fc"; }
        .fa-users:before { content: "\f0c0"; }
        .fa-chart-line:before { content: "\f201"; }
        .fa-bullhorn:before { content: "\f0a1"; } /* Icon for marketing */
        .fa-phone-alt:before { content: "\f879"; } /* Icon for Phone in Footer */
        .fa-envelope:before { content: "\f0e0"; } /* Icon for Email in Footer */
        
        /* WhatsApp Icon (using a basic solid fill for simplicity in single-file format) */
        .fa-whatsapp:before { content: "\f232"; font-family: 'Font Awesome 6 Brands'; } 
        @font-face {
            font-family: 'Font Awesome 6 Brands';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2) format('woff2');
        }
        .fab {
            font-family: 'Font Awesome 6 Brands';
            font-weight: 400;
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
        }


        /* Base Reset & Typography */
        *, *::before, *::after{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
            margin:0;
            font-family:'Open Sans', Arial, sans-serif;
            background:var(--white);
            color:var(--black);
            line-height:1.6;
            -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, h4 {
            font-family: 'Montserrat', sans-serif;
            line-height: 1.2;
            color: var(--navy);
        }

        /* Utility Classes & Components */
        .container{max-width:var(--maxw); margin:0 auto; padding:0 28px}

        .btn{
            padding:12px 22px; 
            border-radius:8px; 
            font-weight:700; 
            text-decoration:none; 
            display:inline-block;
            transition: transform 0.2s, opacity 0.2s;
            text-align: center;
            cursor: pointer;
        }
        .btn:hover{transform: translateY(-2px)}
        .btn-primary{background:var(--gold); color:#081226; border:none;}
        .btn-primary:hover{background: #c3a133}
        .btn-ghost{border:1px solid #bbb; color:#222; background:transparent}
        .btn-ghost:hover{background: #f0f0f0}

        /* Header */
        header{
            position:sticky; top:0; left:0; right:0; 
            height:88px;
            background:rgba(255,255,255,0.98);
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding:0 36px;
            border-bottom:1px solid #eee;
            z-index:1000;
            box-shadow:0 2px 8px rgba(0,0,0,0.03);
        }
        .brand{
            display:flex; align-items:center; gap:14px;
        }
        .brand img{height:56px; display:block}
        .brand .title{font-weight:700; font-size:13px; letter-spacing:1px; color:#666}

        nav{display:flex; gap:26px; font-weight:600}
        nav a{color:var(--black); text-decoration:none; font-size:15px; transition:color .2s}
        nav a:hover{color:var(--gold)}
        /* Estilo específico para o seletor de idioma */
        nav a.lang-switch {
            font-weight: 800;
            border-left: 1px solid #ccc;
            padding-left: 20px;
            color: var(--navy);
        }


        .contact-mini{ text-align:right; font-size:13px; color:#222}
        .contact-mini a {
            color: #222; 
            text-decoration: none; 
            transition: color 0.2s;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .contact-mini a:hover { color: var(--gold); }
        .contact-mini i {
            margin-right: 4px;
            font-size: 16px;
            color: #25D366; /* WhatsApp Green */
        }

        /* Hamburger Menu */
        .hamburger {
            display: none; 
            cursor: pointer;
            width: 30px;
            height: 21px;
            justify-content: space-around;
            flex-direction: column;
            z-index: 1001;
        }
        .hamburger span {
            display: block;
            width: 100%;
            height: 3px;
            background-color: var(--navy);
            border-radius: 3px;
            transition: all 0.3s ease;
        }
        .hamburger.active span:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }

        /* Mobile Nav */
        .mobile-nav {
            display: none;
            position: fixed;
            top: 88px; 
            left: 0;
            width: 100%;
            height: calc(100vh - 88px);
            background: rgba(255, 255, 255, 0.95);
            z-index: 999;
            flex-direction: column;
            align-items: center;
            padding-top: 40px;
            overflow-y: auto;
        }
        .mobile-nav.open {
            display: flex;
        }
        .mobile-nav a {
            padding: 15px 20px;
            font-size: 1.2rem;
            color: var(--navy);
            text-decoration: none;
            width: 80%;
            text-align: center;
            border-bottom: 1px solid #eee;
            transition: background 0.2s;
        }
        .mobile-nav a:hover {
            background: var(--light-bg);
            color: var(--gold);
        }
        
        /* === V9 EXCHANGE BAR STYLES === */
        #exchange-bar {
            position: sticky;
            top: 88px; /* Stick right under the main header */
            background-color: var(--navy);
            color: var(--white);
            z-index: 900; /* Below the main header */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 8px 0;
        }
        .rate-container {
            max-width: var(--maxw);
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 28px;
            flex-wrap: wrap;
        }
        .rate-title {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 14px;
            color: var(--gold);
            display: flex;
            align-items: center;
            gap: 6px;
            flex-shrink: 0;
            margin-right: 15px;
        }
        .rate-list {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            flex-grow: 1;
        }
        .rate-item {
            font-weight: 600;
            font-size: 14px;
            color: var(--white);
            white-space: nowrap;
        }
        .rate-item span {
            font-weight: 800;
            color: var(--gold);
            margin-left: 4px;
        }
        .rate-update-info {
            font-style: italic;
            font-weight: 400;
            color: #ccc;
            font-size: 11px;
            white-space: nowrap;
            margin-left: 15px;
            flex-shrink: 0;
        }
        /* Mobile adjustment for Exchange Bar */
        @media(max-width: 980px) {
            #exchange-bar {
                top: 70px; /* Adjust sticky position for smaller header */
            }
            .rate-container {
                justify-content: center;
                text-align: center;
                gap: 10px;
            }
            .rate-title {
                margin-bottom: 5px;
            }
            .rate-list {
                justify-content: center;
            }
            .rate-update-info {
                width: 100%;
                text-align: center;
                margin-top: 5px;
            }
        }
        @media(max-width: 560px) {
             .rate-item {
                font-size: 13px;
             }
             .rate-update-info {
                font-size: 10px;
             }
             .rate-list {
                gap: 12px;
             }
        }
        /* === END V9 EXCHANGE BAR STYLES === */


        /* Hero */
        .hero{
            min-height:100vh; 
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative;
            background:linear-gradient(135deg,#ffffff 0%,#f7f9fb 100%);
            padding-top:88px;
            overflow:hidden;
        }
        .hero .inner{
            max-width:var(--maxw);
            width:100%;
            padding:80px 28px;
            display:grid;
            grid-template-columns:1fr 420px;
            gap:48px;
            align-items:center;
        }
        .hero h2{font-size:48px; margin:0 0 16px; opacity: 0;}
        .hero p{color:var(--muted); font-size:17px; max-width:680px; opacity: 0;}
        .cta-group{margin-top:30px; display:flex; gap:14px}
        .cta-group a {opacity: 0;}

        .quick-card{
            background:#fff; 
            padding:24px; 
            border-radius:12px; 
            border:1px solid #e6e6e6; 
            box-shadow:0 10px 30px rgba(0,0,0,0.04);
            transition: all 0.3s;
        }
        .quick-card:hover { transform: translateY(-3px); box-shadow:0 12px 35px rgba(0,0,0,0.08); }

        .quick-card h3{margin:0 0 12px; color:var(--navy)}
        .quick-card ul{margin:0; padding-left:18px; color:var(--muted); font-size:15px; line-height:1.6}

        /* Sections */
        .section{
            max-width:var(--maxw); 
            margin:90px auto; 
            padding:0 28px;
        }
        .section .section-header{ text-align:center; margin-bottom:40px}
        .section h2{font-size:36px; color:var(--navy); margin-bottom:12px; font-weight:800}
        .section p.lead{color:var(--muted); max-width:850px; margin:0 auto; font-size: 18px;}

        .grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
            gap:24px;
        }
        .card{
            background:#fff; 
            padding:26px; 
            border-radius:12px; 
            border:1px solid #e7e7e7; 
            box-shadow:0 8px 26px rgba(0,0,0,0.04);
            transition: all 0.3s;
        }
        .card:hover { transform: translateY(-3px); box-shadow:0 10px 30px rgba(0,0,0,0.08); }
        .card h3{margin-top:0; color:var(--navy)}
        .card p{color:var(--muted)}
        .card i.fas, .card i.fab {color: var(--gold); margin-right: 10px;}
        
        /* Global Hubs Layout Refinement (V3) */
        .hubs-list {
            column-count: 3;
            column-gap: 40px;
            margin-top: 20px;
        }
        .hubs-list p {
            margin-bottom: 12px;
            break-inside: avoid;
            font-size: 15px;
            color: var(--navy);
        }

        /* Careers Highlight Card (V4 Improvement) */
        .career-highlight {
            background: var(--highlight-bg);
            border-left: 5px solid var(--gold);
            padding: 26px 30px;
            margin-bottom: 30px;
        }
        .career-highlight h3 {
            color: var(--gold);
            margin-bottom: 8px;
            font-size: 1.5rem;
        }
        .career-highlight .lead-text {
            color: var(--navy);
            font-weight: 600;
            margin-bottom: 15px;
        }
        
        /* Portfolio / Cases */
        .portfolio-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:24px}

        /* Animations area */
        .animations-section{padding:80px 0; background:linear-gradient(135deg,#fbfdff 0%,#f1f6fb 100%); position:relative; overflow:hidden; margin-top:90px; margin-bottom:90px;}
        .animation-area{position:relative; width:100%; height:480px; border-radius:10px; overflow:hidden; border:2px solid rgba(212,175,55,0.08); background:linear-gradient(180deg,#eaf6ff 0%,#ffffff 100%); cursor:none;}
        .map-background{position:absolute; inset:0; background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="%23d4af37" stroke-width="0.5" stroke-dasharray="2,2"/></svg>'); background-size:220px 220px; opacity:0.12}

        /* Interactive Elements */
        .interactive-element {
            position: absolute;
            transition: transform 0.1s linear; 
            pointer-events: none; 
            will-change: transform; 
        }
        
        .container-ship{position:absolute; bottom:18%; left:20%; width:200px; height:50px; transform-origin:center; z-index:10}
        .ship-body{position:absolute;width:100%;height:100%; background:linear-gradient(to bottom,#34495e,#2c3e50); border-radius:10px 40px 10px 10px}
        .ship-deck{position:absolute; top:-30px; left:10px; width:180px; height:30px; background:#34495e; border-radius:5px 5px 0 0}
        .ship-containers{position:absolute; top:-60px; left:20px; width:160px; height:30px; display:flex; gap:6px}
        .ship-container{flex:1;background:var(--gold); border:2px solid var(--navy)}

        .cargo-plane{position:absolute; top:18%; right:12%; width:180px; height:50px}
        .plane-body{position:absolute;width:160px;height:40px;border-radius:20px 40px 10px 10px;background:linear-gradient(to bottom,#e74c3c,#c0392b)}
        .plane-wing{position:absolute; width:200px; height:15px; background:#34495e; top:15px; left:-20px; border-radius:3px}
        .plane-tail{position:absolute; width:30px; height:25px; background:#34495e; top:-5px; right:-5px}
        .plane-windows{position:absolute; width:100px; height:10px; top:15px; left:30px; display:flex; gap:6px}
        .plane-window{width:10px; height:10px; background:#fff; border-radius:50%}

        .water{position:absolute; bottom:0; left:0; width:100%; height:26%; background:linear-gradient(to bottom,transparent 0%,#1e90ff 100%); z-index:1}
        .wave{
            position:absolute; bottom:0; left:0; width:2400px; height:24px; 
            background-image:url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v46c29.1-7.2 60.4-11 93-11s63.9 3.8 93 11c29.1 7.2 60.4 11 93 11s63.9-3.8 93-11c29.1-7.2 60.4-11 93 11s63.9 3.8 93 11V0H0z" fill="%231e90ff"/></svg>'); 
            background-size:1200px 100%;
            animation: wave 12s linear infinite; 
        }
        .wave:nth-child(2) {
            animation-delay: -6s; 
            opacity: 0.7;
        }

        /* Contact & Forms */
        .contact-container{display:grid; grid-template-columns:1fr 1fr; gap:36px}
        .contact-form{background:#f6f8fb; padding:25px; border-radius:8px; border:1px solid #eee}
        .form-control{
            font-family:'Open Sans', Arial, sans-serif;
            font-size: 15px;
        }

        /* Footer */
        footer{background:var(--navy); color:#fff; padding:46px 28px; margin-top:60px}
        .footer-flex{max-width:var(--maxw); margin:0 auto; display:flex; flex-wrap:wrap; gap:36px; justify-content:space-between}
        .footer-logo{height:86px; margin-top:16px; filter: invert(0.8) grayscale(1)} 
        .footer-column{min-width:220px; max-width:360px}
        .footer-column h4{margin:0 0 12px; color:#fff}
        .footer-column p, .footer-column li{color:#d6d6d6; font-size:14px}
        .footer-column a{color:#d6d6d6; text-decoration:none; transition: color .2s;}
        .footer-column a:hover{color: var(--gold);}
        .footer-column .contact-link {
             display: flex; 
             align-items: center; 
             margin-bottom: 5px; 
        }
        .footer-column .contact-link i {
            margin-right: 8px;
            font-size: 18px;
        }

        /* Animations Keyframes */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float { 
            0%{transform:translateY(0) translateX(0)}
            25%{transform:translateY(-18px) translateX(10px)}
            50%{transform:translateY(-8px) translateX(18px)}
            75%{transform:translateY(-12px) translateX(8px)}
            100%{transform:translateY(0) translateX(0)}
        }
        .floating{animation:float 14s ease-in-out infinite}
        @keyframes wave {
            from { background-position-x: 0; }
            to { background-position-x: -1200px; } 
        }

        /* Custom Cursor Style (V3) */
        .custom-cursor {
            position: fixed;
            width: 18px;
            height: 18px;
            background: var(--gold);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%,-50%);
            transition: transform 0.05s ease, width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            mix-blend-mode: difference;
        }
        .custom-cursor.hover-state {
            width: 36px;
            height: 36px;
            background: var(--navy);
            opacity: 0.7;
        }
        
        /* ========== RESPONSIVE DESIGN ========== */
        @media(max-width:1100px){
            .hero .inner{grid-template-columns:1fr 1fr; gap:30px;}
            .hubs-list { column-count: 2; }
        }

        @media(max-width:980px){
            nav{display:none} 
            .hamburger{display:flex} 
            header{padding:0 18px; height: 70px;}
            .mobile-nav {top: 70px; height: calc(100vh - 70px);}
            .contact-mini{display: none;}
            .hero .inner{grid-template-columns:1fr; padding:40px 18px; text-align: center;}
            .hero h2 {font-size: 38px;}
            .cta-group{justify-content: center;}
            .section h2{font-size: 32px;}
            .contact-container{grid-template-columns:1fr}
            .client-logo{max-width:110px}
            .container-ship{width:160px}
            .footer-flex{justify-content: center;}
            .hubs-list { column-count: 1; }
        }

        @media(max-width:560px){
            header{padding:0 14px; height: 70px;}
            .mobile-nav {top: 70px; height: calc(100vh - 70px);}
            .brand img{height:44px}
            .hero h2{font-size:28px}
            .hero p{font-size:15px}
            .quick-card{padding:16px}
            .hero .inner{padding:36px 12px}
            .btn{padding: 10px 18px; font-size: 14px;}
            .cta-group {flex-direction: column; gap: 10px;}
        }
    </style>
</head>
<body>

<header>
    <div class="brand">
        <img src="data:image/png;base64,{{HAFEN_BASE64}}" alt="Logotipo de Hafen Consolidators">
        <div class="title">HAFEN CONSOLIDATORS</div>
    </div>

    <nav aria-label="Navegación Principal">
        <a href="#home">Inicio</a>
        <a href="#services">Servicios</a>
        <a href="#portfolio">Portafolio</a>
        <a href="#cases">Casos de Estudio</a>
        <a href="#hubs">Centros Globales</a>
        <a href="#about">Nosotros</a>
        <a href="#careers">Empleos</a>
        <a href="#contact">Contacto</a>
        <a class="lang-switch" href="/index.html" title="Cambiar a Inglés">ENGLISH</a>
    </nav>
    
    <div class="contact-mini">
        <a href="https://wa.me/447594716370" target="_blank" style="margin-bottom: 2px;">
            <i class="fab fa-whatsapp" aria-hidden="true"></i> Contáctenos por WhatsApp
        </a>
        <strong>+44 7594 716370</strong><br>
        contact@hafenconsolidators.com
    </div>

    <div class="hamburger" id="hamburgerButton">
        <span></span>
        <span></span>
        <span></span>
    </div>
</header>

<div class="mobile-nav" id="mobileNavMenu">
    <a href="#home">Inicio</a>
    <a href="#services">Servicios</a>
    <a href="#portfolio">Portafolio</a>
    <a href="#cases">Casos de Estudio</a>
    <a href="#hubs">Centros Globales</a>
    <a href="#about">Nosotros</a>
    <a href="#careers">Empleos</a>
    <a href="#contact">Contacto</a>
    <a href="/index.html" class="lang-switch">ENGLISH</a>
</div>

<section id="exchange-bar" aria-label="Tasas de Cambio Diarias">
    <div class="rate-container">
        <div class="rate-title">
            <i class="fas fa-money-check-dollar"></i> TASAS DE CAMBIO DIARIAS (BRL)
        </div>
        <div class="rate-list">
            <div class="rate-item">USD <span>**5.15**</span></div>
            <div class="rate-item">EUR <span>**5.60**</span></div>
            <div class="rate-item">GBP <span>**6.45**</span></div>
            <div class="rate-item">CAD <span>**3.80**</span></div>
            <div class="rate-item">CNY <span>**0.72**</span></div>
        </div>
        <div class="rate-update-info">
            Actualizado: **12/12/2025** (Solo Referencia)
        </div>
    </div>
</section>
<section id="home" class="hero" aria-label="Soluciones de Flete Global Hero">
    <div class="inner">
        <div>
            <h2 style="animation: fadeInUp 1s ease forwards 0.3s;">Fletes Globales, NVOCC y Soluciones Avanzadas de Cadena de Suministro</h2>
            <p style="animation: fadeInUp 1s ease forwards 0.6s;">
                Ofrecemos logística internacional de precisión, consolidación, fletes aéreos y marítimos, rutas de comercio cruzado y apoyo comercial global para micro, pequeñas y medianas empresas — con tecnología, fiabilidad y excelencia de servicio de estándar británico.
            </p>
            <div class="cta-group">
                <a class="btn btn-primary" href="#contact" style="animation: fadeInUp 1s ease forwards 0.9s;">Solicitar Cotización</a>
                <a class="btn btn-ghost" href="#services" style="animation: fadeInUp 1s ease forwards 1.1s;">Explorar Nuestros Servicios</a>
            </div>
        </div>

        <aside class="quick-card" aria-label="Resumen de Datos Clave">
            <h3>Datos Clave</h3>
            <ul>
                <li><strong>Sede:</strong> Guayaquil, Ecuador</li>
                <li><strong>Línea Directa Internacional:</strong> +44 7594 716370</li>
                <li>**Núcleo:** Fletes Globales • Comercio • NVOCC • Comercio Cruzado</li>
            </ul>
        </aside>
    </div>

    <div style="position:absolute; right:6%; top:10%; font-size:38px; opacity:0.08;" class="floating" aria-hidden="true"><i class="fas fa-ship"></i></div>
    <div style="position:absolute; left:6%; bottom:12%; font-size:40px; opacity:0.06;" class="floating" aria-hidden="true"><i class="fas fa-plane"></i></div>
</section>

<section id="services" class="section" aria-label="Nuestros Servicios">
    <div class="section-header">
        <h2>Nuestros Servicios</h2>
        <p class="lead">Soluciones logísticas integrales adaptadas al comercio internacional: consolidación, aduanas, almacenamiento y gestión de la cadena de suministro de extremo a extremo.</p>
    </div>

    <div class="grid container">
        <article class="card"><h3><i class="fas fa-ship"></i> Flete Marítimo (LCL/FCL)</h3><p>Rutas inteligentes, cargas consolidadas y opciones de contenedor completo con cobertura global.</p></article>
        <article class="card"><h3><i class="fas fa-plane-departure"></i> Flete Aéreo</h3><p>Servicios de carga aérea prioritaria con opciones de tiempo definido y manejo premium.</p></article>
        <article class="card"><h3><i class="fas fa-warehouse"></i> Almacenamiento y Distribución</h3><p>Instalaciones aduaneras, control de inventario y redes de distribución regional.</p></article>
        <article class="card"><h3><i class="fas fa-handshake"></i> Comercio y Abastecimiento (Sourcing)</h3><p>Adquisición internacional, consolidación de proveedores y soporte de cumplimiento normativo.</p></article>
        <article class="card"><h3><i class="fas fa-route"></i> Operaciones de Comercio Cruzado</h3><p>Envíos confidenciales a terceros países con rutas y documentación eficientes.</p></article>
        <article class="card"><h3><i class="fas fa-box-open"></i> Consolidación de Proveedores</h3><p>Servicios semanales de consolidación multifábrica para reducir costos y plazos de entrega.</p></article>
        <article class="card"><h3><i class="fas fa-passport"></i> Despacho de Aduanas</h3><p>Pre-despacho y corretaje de aduanas para un tránsito fronterizo rápido.</p></article>
        <article class="card"><h3><i class="fas fa-shield-alt"></i> Seguro y Gestión de Riesgos</h3><p>Optimización de seguros de flete y mitigación de riesgos de carga.</p></article>
    </div>
</section>

<section id="portfolio" class="section" aria-label="Portafolio de Operaciones Seleccionadas">
    <div class="section-header">
        <h2>Portafolio</h2>
        <p class="lead">Operaciones y capacidades seleccionadas que demuestran nuestra experiencia logística de extremo a extremo.</p>
    </div>

    <div class="portfolio-grid container">
        <article class="card">
            <h3>Marítimo y Consolidación</h3>
            <p>Rutas de consolidación a través de Asia, Europa y las Américas con seguimiento en tiempo real y optimización de rutas.</p>
        </article>

        <article class="card">
            <h3>Movimientos Aéreos Express</h3>
            <p>Flete aéreo prioritario para piezas críticas y reposición de inventario estacional.</p>
        </article>

        <article class="card">
            <h3>Cadena de Frío y Contenedores Reefer</h3>
            <p>Manejo de temperatura controlada que preserva la integridad desde el origen hasta el tránsito de destino.</p>
        </article>
    </div>
</section>

<section id="cases" class="section" aria-label="Casos de Estudio de Clientes">
    <div class="section-header">
        <h2>Casos de Estudio</h2>
        <p class="lead">Resultados reales de clientes logrados a través de una consolidación y planificación de rutas más inteligentes.</p>
    </div>

    <div class="grid container">
        <article class="card">
            <h3>Spare Parts Global</h3>
            <p>5.4 toneladas/mes — China → Panamá → Brasil — Reducción de plazo de entrega **17→9 días** — Agotamiento de existencias **−41%** — Solución aérea + marítima de múltiples proveedores.</p>
        </article>

        <article class="card">
            <h3>FreshHarvest Premium</h3>
            <p>Contenedor Reefer LCL — Ecuador → Róterdam — Deterioro **4.7%→1.1%** — Tránsito **24→17 días** — Integridad de cadena de frío **99.2%**.</p>
        </article>

        <article class="card">
            <h3>ElectroNova Components</h3>
            <p>Comercio cruzado Shenzhen → México → Chile — Costo de flete **−14%** — Pre-despacho de aduanas — Fiabilidad JIT **99.8%**.</p>
        </article>

        <article class="card">
            <h3>ModaExpress LATAM</h3>
            <p>Consolidación de prendas — Vietnam → Bogotá — Eficiencia de volumen **+32%** — Reservas semanales — Estabilidad en temporada alta.</p>
        </article>

        <article class="card">
            <h3>HeavyMach Solutions</h3>
            <p>Piezas de maquinaria — India → Paraguay — Manejo de OOG — Optimización de seguros — Retrasos **−52%**.</p>
        </article>
    </div>
</section>

<section id="hubs" class="section" aria-label="Nuestros Centros Globales">
    <div class="section-header">
        <h2>Centros Globales</h2>
        <p class="lead">Oficinas estratégicas y centros de socios que apoyan las operaciones en todo el mundo.</p>
    </div>

    <div class="card container hubs-list">
        <p><strong>Nicaragua</strong> — Centro Comercial Novacentro, Torre Nova 2, Piso 9.</p>
        <p><strong>Honduras</strong> — Torre Nova 2, Piso 11, Tegucigalpa.</p>
        <p><strong>Cuba</strong> — 20 Genesis Close, George Town KY1-1208.</p>
        <p><strong>República Dominicana</strong> — Rafael Augusto Sanchez Nº 86, Santo Domingo.</p>
        <p><strong>Perú</strong> — Av. Miguel Grau 709, Lima.</p>
        <p><strong>Taiwán</strong> — Shin Liang Center, Taichung.</p>
        <p><strong>Filipinas</strong> — East Bloc Building 1, Tagbilaran City.</p>
        <p><strong>Canadá</strong> — Edmonton T5K 2P7.</p>
        <p><strong>EE. UU.</strong> — North Miami 33181.</p>
        <p><strong>Arabia Saudita</strong> — Jeddah 23412.</p>
        <p><strong>Pakistán</strong> — Karachi 75500.</p>
        <p><strong>Tayikistán</strong> — Dushanbe 734000.</p>
        <p><strong>Lituania</strong> — Vilnius 01103.</p>
        <p><strong>Estonia / Letonia</strong> — Skanstes iela 25, Riga.</p>
        <p><strong>Ucrania</strong> — Kyiv 04112.</p>
        <p><strong>Eslovenia</strong> — Ljubljana 1000.</p>
        <p><strong>Bulgaria</strong> — Plovdiv 4000.</p>
        <p><strong>Omán</strong> — Duqm 006.</p>
    </div>
</section>

<section id="about" class="section" aria-label="Acerca de Hafen Consolidators">
    <div class="section-header">
        <h2>Acerca de Nosotros</h2>
        <p class="lead">Empresa independiente NVOCC y de Comercio Internacional con soluciones integradas de transporte de carga, abastecimiento y consolidación.</p>
    </div>

    <div class="grid container" style="align-items:center;">
        <article class="card">
            <h3>Hafen Consolidators</h3>
            <p>
                Hafen Consolidators es una compañía independiente NVOCC y de Comercio Internacional con sede en Guayaquil, Ecuador. Ofrecemos soluciones integradas de transporte de carga, abastecimiento, consolidación y logística de comercio cruzado para negocios globales — enfocados en micro, pequeñas y medianas empresas que buscan rutas comerciales fiables y rentables.
            </p>
            <p style="color:var(--muted)"><strong>Capacidades Principales:</strong> Consolidación, rutas de comercio cruzado, pre-despacho de aduanas, almacenamiento aduanero y consolidación de proveedores.</p>
        </article>

        <article class="card">
            <h3>Nuestro Enfoque</h3>
            <p>
                Combinamos experiencia operativa práctica con planificación impulsada por la tecnología — optimización de rutas, documentación transparente y asociaciones globales de confianza — para reducir los plazos de entrega y el costo total de adquisición, mejorando la fiabilidad del servicio.
            </p>
            <p style="color:var(--muted)"><strong>Nuestra promesa:</strong> mejoras prácticas y medibles para los clientes que operan a nivel internacional.</p>
        </article>
    </div>
</section>

<section id="animations" class="animations-section" aria-label="Mapa Logístico Interactivo">
    <div class="section-header" style="padding-top:8px;">
        <h2>Mapa Logístico Interactivo</h2>
        <p class="lead">Mueva su cursor o toque la pantalla para guiar nuestro barco y avión a través del área del mapa interactivo.</p>
    </div>

    <div class="container">
        <div class="animation-area" id="animation-area">
            <div class="map-background"></div>
                        <div class="interactive-element container-ship" data-speed="0.05">
                <div class="ship-body"></div>
                <div class="ship-deck"></div>
                <div class="ship-containers">
                    <div class="ship-container"></div>
                    <div class="ship-container"></div>
                    <div class="ship-container"></div>
                </div>
            </div>
                        <div class="interactive-element cargo-plane" data-speed="0.1">
                <div class="plane-body">
                    <div class="plane-windows">
                        <div class="plane-window"></div>
                        <div class="plane-window"></div>
                    </div>
                </div>
                <div class="plane-wing"></div>
                <div class="plane-tail"></div>
            </div>
                        <div class="water">
                <div class="wave"></div>
                <div class="wave" style="opacity: 0.5;"></div>
            </div>
        </div>
    </div>
</section>

<section id="careers" class="section" aria-label="Oportunidades de Empleo">
    <div class="section-header">
        <h2>Empleos</h2>
        <p class="lead">Únase a nuestro equipo global. Buscamos profesionales en logística, comercio y gestión de la cadena de suministro.</p>
    </div>

    <div class="container career-highlight">
        <h3>Únete a Hafen: Crece con Nosotros</h3>
        <p class="lead-text">Estamos en una fase de crecimiento y buscamos individuos apasionados y orientados a la precisión para expandir nuestra presencia global.</p>
        <p>Envíe su CV y carta de presentación a <a href="mailto:careers@hafenconsolidators.com" style="color:var(--navy)">careers@hafenconsolidators.com</a>.</p>
    </div>
</section>

<section id="contact" class="section" aria-label="Formulario de Contacto">
    <div class="section-header">
        <h2>Contáctenos</h2>
        <p class="lead">Comuníquese con nuestro equipo para cotizaciones, soporte o consultas comerciales.</p>
    </div>

    <div class="contact-container container">
        <div class="contact-form">
                        <form action="/submit-form" method="POST">
                <p style="font-weight:700; color:var(--navy); margin-bottom:18px;">Solicite una Cotización Rápida</p>

                <label for="name" style="display:block; margin-bottom:5px; font-size:14px; font-weight:600;">Nombre Completo:</label>
                <input type="text" id="name" name="name" class="form-control" required style="width:100%; padding:10px; margin-bottom:15px; border:1px solid #ccc; border-radius:5px;">

                <label for="email" style="display:block; margin-bottom:5px; font-size:14px; font-weight:600;">Correo Electrónico:</label>
                <input type="email" id="email" name="email" class="form-control" required style="width:100%; padding:10px; margin-bottom:15px; border:1px solid #ccc; border-radius:5px;">

                <label for="service" style="display:block; margin-bottom:5px; font-size:14px; font-weight:600;">Servicio Requerido:</label>
                <select id="service" name="service" class="form-control" required style="width:100%; padding:10px; margin-bottom:15px; border:1px solid #ccc; border-radius:5px;">
                    <option value="">-- Seleccionar Servicio --</option>
                    <option value="LCL">Consolidación LCL</option>
                    <option value="FCL">Flete Marítimo FCL</option>
                    <option value="Air">Flete Aéreo</option>
                    <option value="Cross-Trade">Comercio Cruzado</option>
                    <option value="Trading">Comercio y Abastecimiento</option>
                    <option value="Other">Otro</option>
                </select>

                <label for="message" style="display:block; margin-bottom:5px; font-size:14px; font-weight:600;">Detalles del Envío (Orígen, Destino, Peso/Volumen):</label>
                <textarea id="message" name="message" rows="4" class="form-control" required style="width:100%; padding:10px; margin-bottom:20px; border:1px solid #ccc; border-radius:5px;"></textarea>

                <button type="submit" class="btn btn-primary" style="width:100%;">Enviar Solicitud de Cotización</button>
            </form>
        </div>

        <aside style="padding-top:25px;">
            <h3 style="margin-top:0;">Información de Contacto Directo</h3>
            <p>Estamos disponibles 24/7 para consultas operativas y soporte urgente.</p>
            
            <p class="contact-link"><i class="fas fa-phone-alt"></i> <strong>Línea Internacional:</strong> +44 7594 716370</p>
            <p class="contact-link"><i class="fas fa-envelope"></i> <strong>Email:</strong> contact@hafenconsolidators.com</p>
            <p class="contact-link"><i class="fab fa-whatsapp"></i> <a href="https://wa.me/447594716370" target="_blank">Chat de WhatsApp (24/7)</a></p>
            
            <h4 style="margin-top:30px;">Oficina Central (HQ)</h4>
            <p style="color:var(--muted)">Guayaquil, Ecuador<br>Atendemos globalmente a través de nuestros centros de socios.</p>
        </aside>
    </div>
</section>

<footer>
    <div class="footer-flex">
        <div class="footer-column">
            <img src="data:image/png;base64,{{HAFEN_BASE64}}" alt="Hafen Consolidators Logo" class="footer-logo">
            <p>Hafen Consolidators ofrece soluciones logísticas internacionales de precisión, con enfoque en NVOCC, consolidación y comercio cruzado para empresas en crecimiento.</p>
        </div>
        <div class="footer-column">
            <h4>Enlaces Rápidos</h4>
            <ul>
                <li><a href="#services">Nuestros Servicios</a></li>
                <li><a href="#hubs">Centros Globales</a></li>
                <li><a href="#about">Acerca de Nosotros</a></li>
                <li><a href="#contact">Solicitar Cotización</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h4>Contacto</h4>
            <p class="contact-link"><i class="fas fa-phone-alt"></i> +44 7594 716370</p>
            <p class="contact-link"><i class="fas fa-envelope"></i> <a href="mailto:contact@hafenconsolidators.com">contact@hafenconsolidators.com</a></p>
            <p class="contact-link"><i class="fab fa-whatsapp"></i> <a href="https://wa.me/447594716370" target="_blank">WhatsApp (24/7)</a></p>
            <p style="margin-top:15px;">Guayaquil, Ecuador</p>
        </div>
    </div>
    <div style="text-align:center; margin-top:20px; border-top:1px solid #333; padding-top:15px; font-size:12px; color:#999;">
        &copy; 2025 Hafen Consolidators. Todos los derechos reservados.
    </div>
</footer>

<script>
    // Script para alternância do menu móvel
    const hamburger = document.getElementById('hamburgerButton');
    const mobileNav = document.getElementById('mobileNavMenu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('open');
    });

    // Script para o cursor personalizado (se aplicável, com base no seu CSS)
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', e => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        // Adiciona efeito de hover para botões e links
        document.querySelectorAll('a, button, .btn').forEach(el => {
            el.addEventListener('mouseover', () => cursor.classList.add('hover-state'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover-state'));
        });
    }

    // Animação interativa (Parallax)
    const animationArea = document.getElementById('animation-area');
    if (animationArea) {
        const interactiveElements = animationArea.querySelectorAll('.interactive-element');

        animationArea.addEventListener('mousemove', e => {
            const rect = animationArea.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            interactiveElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
                const translateX = (deltaX * speed) * -1;
                const translateY = (deltaY * speed) * -1;

                el.style.transform = `translate(${translateX}px, ${translateY}px)`;
            });
        });
    }

    // Animação de entrada (FadeInUp)
    const elementsToAnimate = document.querySelectorAll('.hero h2, .hero p, .cta-group a');
    elementsToAnimate.forEach(el => {
        const delay = parseFloat(el.style.animationDelay) || 0;
        el.style.animation = `fadeInUp 1s ease forwards ${delay}s`;
    });
</script>

</body>
</html>
