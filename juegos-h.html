<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juegos H - BVH3 CYBERGAMES</title>
    <link rel="icon" href="src/Logo.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="estilos.css">
    <style>
        body {
            margin: 0;
            background: linear-gradient(135deg, #0a0a23 0%, #1a1a3e 50%, #2d1b69 100%);
            overflow-x: hidden;
        }
        
        /* Partículas de fondo */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }
        
        .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #0fffc3;
            animation: float 6s infinite ease-in-out;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            50% { transform: translateY(-100px) rotate(180deg); opacity: 1; }
        }
        
        /* Menú lateral */
        .sidebar {
            position: fixed;
            top: 0;
            left: -250px;
            width: 250px;
            height: 100vh;
            background: linear-gradient(180deg, #0a0a23 0%, #1a1a3e 100%);
            border-right: 2px solid #0fffc3;
            box-shadow: 0 0 30px #0fffc3;
            transition: left 0.3s ease;
            z-index: 1000;
            padding-top: 60px;
        }
        
        .sidebar.open {
            left: 0;
        }
        
        .sidebar .menu-item {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            color: #fff;
            text-decoration: none;
            transition: background 0.3s, transform 0.2s;
            border-bottom: 1px solid rgba(15, 255, 195, 0.2);
        }
        
        .sidebar .menu-item:hover {
            background: linear-gradient(90deg, rgba(15, 255, 195, 0.2), rgba(255, 0, 204, 0.2));
            transform: translateX(10px);
        }
        
        .sidebar .menu-item i {
            margin-right: 15px;
            font-size: 1.2rem;
            color: #0fffc3;
        }
        
        /* Header superior */
        .top-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            background: linear-gradient(90deg, rgba(10, 10, 35, 0.95), rgba(26, 26, 62, 0.95));
            backdrop-filter: blur(10px);
            border-bottom: 2px solid #0fffc3;
            box-shadow: 0 2px 20px rgba(15, 255, 195, 0.3);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            z-index: 999;
        }
        
        .menu-toggle {
            background: none;
            border: none;
            color: #0fffc3;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 10px;
            border-radius: 5px;
            transition: background 0.3s, transform 0.2s;
        }
        
        .menu-toggle:hover {
            background: rgba(15, 255, 195, 0.2);
            transform: rotate(90deg);
        }
        
        .back-button {
            color: #0fffc3;
            text-decoration: none;
            padding: 12px 20px;
            border: 2px solid #0fffc3;
            border-radius: 10px;
            background: rgba(15, 255, 195, 0.1);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            font-family: 'Orbitron', Arial, sans-serif;
            font-size: 1rem;
            font-weight: 600;
            box-shadow: 0 0 15px rgba(15, 255, 195, 0.3);
            position: relative;
            overflow: hidden;
        }
        
        .back-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(15, 255, 195, 0.3), transparent);
            transition: left 0.5s;
        }
        
        .back-button:hover {
            background: linear-gradient(90deg, rgba(15, 255, 195, 0.2), rgba(255, 0, 204, 0.2));
            color: #fff;
            transform: translateX(-5px);
            box-shadow: 0 0 25px rgba(15, 255, 195, 0.6), 0 0 15px rgba(255, 0, 204, 0.3);
        }
        
        .back-button:hover::before {
            left: 100%;
        }
        
        .header-logo {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .header-logo img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 2px solid #0fffc3;
            box-shadow: 0 0 15px #0fffc3;
        }
        
        .header-title {
            font-family: 'Orbitron', Arial, sans-serif;
            background: linear-gradient(90deg, #0fffc3, #ff00cc);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 1.2rem;
            font-weight: bold;
        }
        
        /* Contenido principal */
        .main-content {
            margin-top: 80px;
            padding: 20px;
            z-index: 2;
            position: relative;
        }
        
        /* Loading animation */
        .loading-icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(15, 255, 195, 0.3);
            border-radius: 50%;
            border-top-color: #0fffc3;
            animation: spin 1s ease-in-out infinite;
            margin-right: 10px;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        /* Overlay para cerrar menú */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s;
            z-index: 998;
        }
        
        .overlay.show {
            opacity: 1;
            visibility: visible;
        }
        .panel-section {
            width: 100%;
            margin: 2rem 0;
            padding: 0;
            background: none;
            backdrop-filter: none;
            border: none;
            border-radius: 0;
            box-shadow: none;
        }
        
        .panel-title {
            font-family: 'Orbitron', Arial, sans-serif;
            background: linear-gradient(90deg, #0fffc3, #00bfff, #ff00cc, #0fffc3);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: #00ffe7;
            font-size: 2rem;
            margin-bottom: 2rem;
            text-align: center;
            letter-spacing: 2px;
            animation: rgb-glow 2.5s linear infinite;
            text-shadow: 0 0 12px #00ffe7, 0 0 24px #ff00cc;
        }
        
        .panel-content {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
            padding: 1.5rem 1rem;
            max-width: 1600px;
            margin: 0 auto;
        }
        
        .game-card {
            width: 300px;
            height: 340px;
            flex-shrink: 0;
            background: rgba(10, 10, 35, 0.9);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(15, 255, 195, 0.5);
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(15, 255, 195, 0.3), 0 0 20px rgba(255, 0, 204, 0.15) inset;
            padding: 1rem;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
        }
        
        .game-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(from 0deg, transparent, rgba(15, 255, 195, 0.3), transparent, rgba(255, 0, 204, 0.3), transparent);
            animation: rotate-border 4s linear infinite;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        @keyframes rotate-border {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .game-card::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            bottom: 2px;
            background: rgba(10, 10, 35, 0.95);
            border-radius: 14px;
            z-index: -1;
        }
        
        .game-card:hover::before {
            opacity: 1;
        }
        
        .game-card:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 20px 40px rgba(15, 255, 195, 0.4), 0 0 30px rgba(255, 0, 204, 0.3) inset, 0 0 60px rgba(0, 191, 255, 0.2);
            border-color: rgba(15, 255, 195, 0.8);
        }
        
        .game-card img {
            width: 220px;
            height: 140px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 0.8rem;
            border: 2px solid #ff00cc;
            box-shadow: 0 0 20px rgba(15, 255, 195, 0.5), 0 0 12px rgba(255, 0, 204, 0.4);
            transition: all 0.4s ease;
            background: #111;
            flex-shrink: 0;
            position: relative;
            overflow: hidden;
            filter: brightness(1.1) contrast(1.1) saturate(1.2);
        }
        
        .game-card:hover img {
            transform: scale(1.15);
            filter: brightness(1.4) saturate(1.6) contrast(1.2);
            border-color: #0fffc3;
            box-shadow: 0 0 30px rgba(15, 255, 195, 0.7), 0 0 20px rgba(255, 0, 204, 0.5), 0 0 40px rgba(0, 191, 255, 0.3);
        }
        }
        
        .game-card h2 {
            font-size: 1.1rem;
            margin: 0.3rem 0 0.4rem 0;
            color: #fff;
            font-family: 'Orbitron', Arial, sans-serif;
            font-weight: 600;
            background: linear-gradient(90deg, #0fffc3, #ff00cc);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 10px rgba(15, 255, 195, 0.3);
            transition: all 0.3s ease;
        }
        
        .game-card:hover h2 {
            text-shadow: 0 0 15px rgba(15, 255, 195, 0.6), 0 0 10px rgba(255, 0, 204, 0.4);
            transform: translateY(-2px);
        }
        
        .game-rating .star {
            background: linear-gradient(90deg, #ff00cc, #0fffc3);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 0.9rem;
            margin-bottom: 0.4rem;
            display: block;
            transition: all 0.3s ease;
        }
        
        .game-card:hover .star {
            transform: scale(1.1);
            filter: drop-shadow(0 0 8px rgba(15, 255, 195, 0.4));
        }
        
        .game-card p {
            font-size: 0.8rem;
            color: #b2fefa;
            margin-bottom: 0.8rem;
            line-height: 1.3;
            flex-grow: 1;
            display: flex;
            align-items: center;
            text-align: center;
            opacity: 0.9;
            transition: all 0.3s ease;
        }
        
        .game-card:hover p {
            color: #ffffff;
            opacity: 1;
            text-shadow: 0 0 8px rgba(15, 255, 195, 0.3);
        }
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-fill-color: transparent;
        }
        .game-rating .star {
            background: linear-gradient(90deg, #ff00cc, #0fffc3);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-fill-color: transparent;
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            display: block;
        }
        .game-card p {
            font-size: 0.9rem;
            color: #b2fefa;
            margin-bottom: 0.8rem;
            line-height: 1.4;
            flex-grow: 1;
        }
        .game-card a.cyber-btn {
            font-size: 0.9rem;
            padding: 0.6rem 1.1rem;
            border-radius: 8px;
            background: linear-gradient(45deg, #0fffc3 0%, #00bfff 50%, #ff00cc 100%);
            color: #111;
            border: 1px solid rgba(15, 255, 195, 0.3);
            font-family: 'Orbitron', Arial, sans-serif;
            font-weight: 700;
            letter-spacing: 1px;
            box-shadow: 0 0 12px rgba(15, 255, 195, 0.4), 0 0 6px rgba(255, 0, 204, 0.2) inset;
            margin-top: auto;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            text-decoration: none;
            display: inline-block;
            align-self: center;
            text-transform: uppercase;
        }
        
        .game-card a.cyber-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            transition: left 0.6s ease;
        }
        
        .game-card a.cyber-btn:hover::before {
            left: 100%;
        }
        
        .game-card a.cyber-btn:hover {
            background: linear-gradient(45deg, #ff00cc 0%, #00bfff 50%, #0fffc3 100%);
            color: #fff;
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 8px 25px rgba(15, 255, 195, 0.6), 0 0 15px rgba(255, 0, 204, 0.5) inset, 0 0 40px rgba(0, 191, 255, 0.3);
            border-color: rgba(15, 255, 195, 0.8);
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        }
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.3s;
        }
        
        .game-card a.cyber-btn:hover::before {
            left: 100%;
        }
        
        .game-card a.cyber-btn:hover {
            background: linear-gradient(90deg, #ff00cc 0%, #0fffc3 100%);
            color: #fff;
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(15, 255, 195, 0.7), 0 0 8px rgba(255, 0, 204, 0.5) inset;
        }
        @media (max-width: 1200px) {
            .panel-content {
                gap: 1.3rem;
                padding: 1.3rem;
            }
            
            .game-card {
                width: 280px;
                height: 320px;
            }
            
            .game-card img {
                width: 200px;
                height: 130px;
            }
        }
        
        @media (max-width: 768px) {
            .panel-content { 
                gap: 1rem; 
                padding: 1rem;
            }
            
            .game-card { 
                width: 260px;
                height: 300px;
                padding: 0.9rem;
            }
            
            .game-card img { 
                width: 180px; 
                height: 120px;
            }
            
            .game-card h2 { 
                font-size: 1rem;
            }
            
            .game-card p { 
                font-size: 0.75rem;
            }
            
            .game-card a.cyber-btn {
                font-size: 0.85rem;
                padding: 0.5rem 1rem;
            }
        }
        
        @media (max-width: 480px) {
            .back-button {
                padding: 10px 16px;
                font-size: 0.9rem;
            }
            
            .panel-content { 
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
            }
            
            .game-card { 
                width: 90%;
                max-width: 300px;
                height: 320px;
                padding: 1rem;
            }
            
            .game-card img { 
                width: 200px; 
                height: 130px;
            }
            
            .game-card h2 { 
                font-size: 1rem;
            }
            
            .game-card p { 
                font-size: 0.8rem;
            }
        } 
            .game-card h2 { 
                font-size: 0.9rem;
            }
            
            .game-card p { 
                font-size: 0.75rem;
            }
            
            .game-card a.cyber-btn {
                font-size: 0.85rem;
                padding: 8px 16px;
            }
        }
            .game-card { 
                padding: 0.7rem;
                gap: 0.6rem;
            }
            .game-card img { 
                width: 60px; 
                height: 60px; 
            }
            .game-card h2 { 
                font-size: 1rem; 
            }
            .game-card p { 
                font-size: 0.75rem; 
            }
            .panel-section { margin: 1rem auto; }
        }
        
        @media (min-width: 900px) {
            .game-card { 
                max-width: 900px;
                padding: 1.2rem;
                gap: 2rem;
            }
            .game-card img { 
                width: 100px; 
                height: 100px; 
            }
        }
        @keyframes rgb-glow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    </style>
    <script>
        // Crear partículas
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }
        
        // Toggle menú
        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.overlay');
            
            sidebar.classList.toggle('open');
            overlay.classList.toggle('show');
        }
        
        // Cerrar menú al hacer clic en overlay
        function closeSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.overlay');
            
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        }
        
        // Inicializar cuando cargue la página
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            // Event listeners
            document.querySelector('.menu-toggle').addEventListener('click', toggleSidebar);
            document.querySelector('.overlay').addEventListener('click', closeSidebar);
        });
    </script>
</head>
<body>
    <!-- Partículas de fondo -->
    <div class="particles"></div>
    
    <!-- Overlay para cerrar menú -->
    <div class="overlay" onclick="closeSidebar()"></div>
    
    <!-- Header superior -->
    <header class="top-header">
        <button class="menu-toggle" onclick="toggleSidebar()">
            <i class="fas fa-bars"></i>
        </button>
        <div class="header-logo">
            <img src="src/Logo.png" alt="BVH3 Logo">
            <span class="header-title">BVH3 CYBERGAMES - Juegos H</span>
        </div>
        <a href="index.php" class="back-button">
            <i class="fas fa-arrow-left" style="margin-right: 8px;"></i>
            Volver
        </a>
    </header>
    
    <!-- Menú lateral -->
    <nav class="sidebar">
        <a href="index.php" class="menu-item">
            <i class="fas fa-home"></i>
            <span>Panel Principal</span>
        </a>
        <a href="#" class="menu-item">
            <i class="fas fa-gamepad"></i>
            <span>Juegos H</span>
        </a>
        <a href="index.php#bots-whatsapp" class="menu-item">
            <i class="fab fa-whatsapp"></i>
            <span>Bots WhatsApp</span>
        </a>
        <a href="index.php#foros" class="menu-item">
            <i class="fas fa-comments"></i>
            <span>Foros</span>
        </a>
        <a href="index.php#comunidad" class="menu-item">
            <i class="fas fa-users"></i>
            <span>Comunidad</span>
        </a>
        <a href="index.php#mas" class="menu-item">
            <i class="fas fa-plus-circle"></i>
            <span>Más</span>
        </a>
    </nav>
    
    <!-- Contenido principal -->
    <div class="main-content">
        <section class="panel-section" id="juegos-h">
            <div class="panel-title">
                <i class="fas fa-gamepad" style="margin-right: 10px; color: #0fffc3;"></i>
                Juegos H
            </div>
            <div class="panel-content game-library">
            <!-- Tarjetas de juegos H -->
            <div class="game-card">
                <img src="src/my.jpg" alt="My Hero Rising" loading="lazy">
                <h2>My Hero Rising</h2>
                <div class="game-rating"><span class="star">★★★★☆</span></div>
                <p>Sumérgete en un mundo de superhéroes con un giro adulto. Desarrolla relaciones íntimas con heroínas mientras luchas contra el mal.</p>
                <a href="https://cuty.io/5jm8YM" class="cyber-btn">Descargar</a>
            </div>
            <div class="game-card">
                <img src="src/feeling.png" alt="Teaching Feeling" loading="lazy">
                <h2>Teaching Feeling 4.0</h2>
                <div class="game-rating"><span class="star">★★★★★</span></div>
                <p>Una emotiva novela visual donde cuidas de Sylvie, una chica con un pasado traumático. Construye confianza y desarrolla una relación íntima.</p>
                <a href="https://cuty.io/S9kJtZkCkV" class="cyber-btn">Descargar</a>
            </div>
            <div class="game-card">
                <img src="src/isekai.jpg" alt="Isekai Awakening" loading="lazy">
                <h2>Isekai Awakening</h2>
                <div class="game-rating"><span class="star">★★★★☆</span></div>
                <p>Transportado a un mundo mágico lleno de aventuras. Forma tu harén mientras exploras dungeons peligrosos en este RPG adulto.</p>
                <a href="https://cuty.io/N8f9oan6" class="cyber-btn">Descargar</a>
            </div>
            <div class="game-card">
                <img src="src/college.jpg" alt="My College" loading="lazy">
                <h2>My College</h2>
                <div class="game-rating"><span class="star">★★★★☆</span></div>
                <p>Vive la experiencia universitaria completa: fiestas, estudios y romance. Simulador de vida universitaria para adultos.</p>
                <a href="https://cuty.io/ktMkRK" class="cyber-btn">Descargar</a>
            </div>
            <div class="game-card">
                <img src="src/sister.jpg" alt="Sister Fight" loading="lazy">
                <h2>Sister Fight</h2>
                <div class="game-rating"><span class="star">★★★☆☆</span></div>
                <p>Combates intensos con habilidades especiales. Sistema de combate arcade con recompensas especiales para adultos.</p>
                <a href="https://cuty.io/9pRQDPjo0B" class="cyber-btn">Descargar</a>
            </div>
            <div class="game-card">
                <img src="src/survive.jpg" alt="Survive" loading="lazy">
                <h2>Survive</h2>
                <div class="game-rating"><span class="star">★★★★☆</span></div>
                <p>Supervivencia post-apocalíptica con elementos adultos. Forma alianzas íntimas para sobrevivir en un mundo hostil.</p>
                <a href="https://cuty.io/mgkU0v8DN" class="cyber-btn">Descargar</a>
            </div>
            <div class="game-card">
                <img src="src/tentacular.jpg" alt="Tentacular" loading="lazy">
                <h2>Tentacular</h2>
                <div class="game-rating"><span class="star">★★★☆☆</span></div>
                <p>Aventura submarina con criaturas misteriosas. Explora las profundidades oceánicas con encuentros únicos.</p>
                <a href="https://cuty.io/wMvLN" class="cyber-btn">Descargar</a>
            </div>
            <div class="game-card">
                <img src="src/together.webp" alt="Together Again" loading="lazy">
                <h2>Together Again</h2>
                <div class="game-rating"><span class="star">★★★★★</span></div>
                <p>Reencuentro emotivo con viejos amores. Historia madura sobre segundas oportunidades y amor verdadero.</p>
                <a href="https://cuty.io/YqBtVH" class="cyber-btn">Descargar</a>
            </div>
            </div>
        </section>
        
        <!-- Footer -->
        <footer class="cyber-footer fade-in" style="margin-top: 3rem; padding: 1rem 0; text-align: center; background: rgba(10, 10, 35, 0.8); border-top: 1px solid rgba(15, 255, 195, 0.3);">
            <p style="color: #0fffc3; font-family: 'Orbitron', Arial, sans-serif;">&copy; 2025 BVH3 CYBERGAMES | Contenido exclusivo +18</p>
            <p style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.8; color: #b2fefa;">Advertencia: Debe ser mayor de 18 años para acceder.</p>
        </footer>
    </div>
</body>
</html>
