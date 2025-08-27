<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BVH3 CYBERGAMES - Biblioteca +18</title>
    <link rel="icon" href="src/Logo.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&family=Russo+One&family=Audiowide&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="animaciones.js" defer></script>
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
            left: -280px;
            width: 280px;
            height: 100vh;
            background: linear-gradient(180deg, #0a0a23 0%, #1a1a3e 100%);
            border-right: 2px solid #0fffc3;
            box-shadow: 0 0 30px #0fffc3;
            transition: left 0.3s ease;
            z-index: 1000;
            padding-top: 70px;
        }
        
        .sidebar.open {
            left: 0;
        }
        
        .sidebar .menu-item {
            display: flex;
            align-items: center;
            padding: 18px 25px;
            color: #fff;
            text-decoration: none;
            transition: background 0.3s, transform 0.2s;
            border-bottom: 1px solid rgba(15, 255, 195, 0.2);
            font-family: 'Orbitron', Arial, sans-serif;
            font-size: 1rem;
        }
        
        .sidebar .menu-item:hover {
            background: linear-gradient(90deg, rgba(15, 255, 195, 0.2), rgba(255, 0, 204, 0.2));
            transform: translateX(10px);
        }
        
        .sidebar .menu-item i {
            margin-right: 15px;
            font-size: 1.3rem;
            color: #0fffc3;
            width: 24px;
        }
        
        /* Header superior */
        .top-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 70px;
            background: linear-gradient(90deg, rgba(10, 10, 35, 0.95), rgba(26, 26, 62, 0.95));
            backdrop-filter: blur(15px);
            border-bottom: 2px solid #0fffc3;
            box-shadow: 0 2px 20px rgba(15, 255, 195, 0.3);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 25px;
            z-index: 999;
        }
        
        .menu-toggle {
            background: none;
            border: none;
            color: #0fffc3;
            font-size: 1.8rem;
            cursor: pointer;
            padding: 12px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .menu-toggle:hover {
            background: rgba(15, 255, 195, 0.2);
            transform: rotate(90deg);
            box-shadow: 0 0 15px rgba(15, 255, 195, 0.5);
        }
        
        .header-logo {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .header-logo img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid #0fffc3;
            box-shadow: 0 0 20px #0fffc3;
            object-fit: cover;
        }
        
        .header-title {
            font-family: 'Audiowide', 'Orbitron', Arial, sans-serif;
            background: linear-gradient(90deg, #0fffc3, #ff00cc);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 1.6rem;
            font-weight: bold;
            letter-spacing: 2px;
        }
        
        /* Dashboard horizontal */
        .dashboard-horizontal {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            gap: 0.8rem;
            margin: 90px auto 2rem auto;
            max-width: 1400px;
            padding: 0 15px;
            z-index: 2;
            position: relative;
            overflow-x: auto;
            scrollbar-width: none;
        }
        
        .dashboard-horizontal::-webkit-scrollbar {
            display: none;
        }
        
        .dash-card {
            background: rgba(10, 10, 35, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(15, 255, 195, 0.4);
            border-radius: 18px;
            box-shadow: 0 0 24px rgba(15, 255, 195, 0.2);
            padding: 1.2rem 0.8rem;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            width: 160px;
            min-width: 160px;
            flex-shrink: 0;
            position: relative;
            overflow: hidden;
        }
        
        .dash-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(15, 255, 195, 0.2), transparent);
            transition: left 0.5s;
        }
        
        .dash-card:hover::before {
            left: 100%;
        }
        
        .dash-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 8px 35px rgba(15, 255, 195, 0.4);
            border-color: rgba(255, 0, 204, 0.6);
        }
        
        .dash-card i {
            font-size: 2rem;
            color: #0fffc3;
            margin-bottom: 0.8rem;
            display: block;
        }
        
        .dash-card h3 {
            font-family: 'Russo One', 'Orbitron', Arial, sans-serif;
            font-size: 0.95rem;
            color: #fff;
            margin-bottom: 0.4rem;
            background: linear-gradient(90deg, #0fffc3, #ff00cc);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .dash-card p {
            font-size: 0.75rem;
            color: #b2fefa;
            margin: 0;
            line-height: 1.3;
        }
        
        /* Contenido principal */
        .main-content {
            margin-top: 0;
            padding: 0;
            z-index: 2;
            position: relative;
        }
        
        /* Overlay para cerrar menú */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s;
            z-index: 998;
        }
        
        .overlay.show {
            opacity: 1;
            visibility: visible;
        }
        
        /* Estilos para las tarjetas de juegos */
        .game-library {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.1rem;
            justify-content: center;
        }
        
        .game-card {
            display: flex;
            flex-direction: row;
            align-items: stretch;
            width: 100%;
            max-width: 800px;
            margin: 0 auto 2rem auto;
            background: rgba(10, 10, 35, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(15, 255, 195, 0.4);
            border-radius: 18px;
            box-shadow: 0 0 24px rgba(15, 255, 195, 0.2), 0 0 12px rgba(255, 0, 204, 0.1) inset;
            padding: 0;
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
        }
        
        .game-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(15, 255, 195, 0.2), transparent);
            transition: left 0.5s;
        }
        
        .game-card:hover::before {
            left: 100%;
        }
        
        .game-card:hover {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(15, 255, 195, 0.4), 0 0 20px rgba(255, 0, 204, 0.2) inset;
        }
        
        .game-card img {
            width: 40%;
            height: auto;
            min-height: 200px;
            object-fit: cover;
            border-radius: 15px 0 0 15px;
            border: none;
            box-shadow: none;
            transition: filter 0.3s, transform 0.3s;
            background: #111;
            flex-shrink: 0;
        }
        
        .game-card:hover img {
            transform: scale(1.05);
            filter: brightness(1.2);
        }
        
        .game-info {
            width: 60%;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;
        }
        
        .game-card h2 {
            font-size: 1.4rem;
            margin: 0 0 0.5rem 0;
            color: #fff;
            font-family: 'Orbitron', Arial, sans-serif;
            background: linear-gradient(90deg, #0fffc3, #ff00cc);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .game-rating .star {
            background: linear-gradient(90deg, #ff00cc, #0fffc3);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 1.1rem;
        }
        
        .game-card p {
            font-size: 0.95rem;
            color: #b2fefa;
            margin-bottom: 1rem;
            line-height: 1.4;
            flex-grow: 1;
        }
        
        .game-card .cyber-btn {
            font-size: 0.9rem;
            padding: 0.5rem 1.1rem;
            border-radius: 8px;
            background: linear-gradient(90deg, #0fffc3 0%, #ff00cc 100%);
            color: #111;
            border: none;
            font-family: 'Orbitron', Arial, sans-serif;
            font-weight: 700;
            letter-spacing: 1px;
            box-shadow: 0 0 8px rgba(15, 255, 195, 0.5), 0 0 4px rgba(255, 0, 204, 0.3) inset;
            margin-top: 0.3rem;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            text-decoration: none;
            display: inline-block;
        }
        
        .game-card .cyber-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.3s;
        }
        
        .game-card .cyber-btn:hover::before {
            left: 100%;
        }
        
        .game-card .cyber-btn:hover {
            background: linear-gradient(90deg, #ff00cc 0%, #0fffc3 100%);
            color: #fff;
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(15, 255, 195, 0.7), 0 0 8px rgba(255, 0, 204, 0.5) inset;
        }
        
        .panel-section {
            max-width: 600px;
            margin: 2rem auto;
            padding: 1.2rem 0.5rem;
            background: linear-gradient(135deg, #0fffc3 0%, #00bfff 40%, #ff00cc 100%);
            border-radius: 22px;
            box-shadow: 0 0 40px #00ffe7, 0 0 24px #ff00cc inset;
        }
        .panel-title {
            font-family: 'Orbitron', Arial, sans-serif;
            background: linear-gradient(90deg, #0fffc3, #00bfff, #ff00cc, #0fffc3);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: #00ffe7;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            text-align: center;
            letter-spacing: 2px;
            animation: rgb-glow 2.5s linear infinite;
            text-shadow: 0 0 12px #00ffe7, 0 0 24px #ff00cc;
        }
        .panel-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.1rem;
            justify-content: center;
        }
        .panel-placeholder {
            color: #b2fefa;
            font-size: 1rem;
            text-align: center;
            margin: 1.2rem auto;
        }
        @keyframes rgb-glow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        }
        
        @media (max-width: 768px) {
            .game-card {
                flex-direction: column;
                max-width: 300px;
                text-align: center;
            }
            
            .game-card img {
                width: 100%;
                border-radius: 15px 15px 0 0;
                min-height: 180px;
            }
            
            .game-info {
                width: 100%;
                padding: 1rem;
                text-align: center;
            }
            
            .game-card h2 {
                font-size: 1.2rem;
            }
            
            .game-card p {
                font-size: 0.85rem;
            }
            
            .dashboard-horizontal {
                margin: 80px auto 1.5rem auto;
                gap: 0.6rem;
                padding: 0 10px;
                justify-content: flex-start;
            }
            
            .dash-card {
                width: 130px;
                min-width: 130px;
                padding: 1rem 0.6rem;
            }
            
            .dash-card i {
                font-size: 1.8rem;
                margin-bottom: 0.6rem;
            }
            
            .dash-card h3 {
                font-size: 0.85rem;
                margin-bottom: 0.3rem;
            }
            
            .dash-card p {
                font-size: 0.7rem;
            }
            
            .header-title {
                font-size: 1.3rem;
            }
            
            .menu-toggle {
                font-size: 1.5rem;
                padding: 8px;
            }
            
            .header-logo img {
                width: 45px;
                height: 45px;
            }
        }
        
        @media (max-width: 480px) {
            .dash-card {
                width: 110px;
                min-width: 110px;
                padding: 0.8rem 0.4rem;
            }
            
            .dash-card h3 {
                font-size: 0.8rem;
            }
            
            .dash-card p {
                font-size: 0.65rem;
            }
            
            .header-logo img {
                width: 40px;
                height: 40px;
            }
            
            .sidebar {
                width: 100%;
                left: -100%;
            }
            
            .header-title {
                font-size: 1.1rem;
                letter-spacing: 1px;
            }
        }
    </style>
    <script>
        // Crear partículas
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            if (!particlesContainer) return;
            
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
            
            if (sidebar && overlay) {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('show');
            }
        }
        
        // Cerrar menú
        function closeSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.overlay');
            
            if (sidebar && overlay) {
                sidebar.classList.remove('open');
                overlay.classList.remove('show');
            }
        }
        
        // Navegación de dashboard
        function navigateToSection(section) {
            if (section === 'juegos-h') {
                // Redirigir a la página de juegos H
                window.location.href = 'juegos-h.php';
            } else {
                document.getElementById(section)?.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
            closeSidebar();
        }
        
        // Inicializar
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
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
            <span class="header-title">BVH3 INDUSTRIES</span>
        </div>
        <div style="color: #0fffc3;">
            <i class="fas fa-crown"></i>
        </div>
    </header>
    
    <!-- Menú lateral -->
    <nav class="sidebar">
        <a href="#" onclick="navigateToSection('juegos-h')" class="menu-item">
            <i class="fas fa-gamepad"></i>
            <span>Juegos H</span>
        </a>
        <a href="#" onclick="navigateToSection('bots-whatsapp')" class="menu-item">
            <i class="fab fa-whatsapp"></i>
            <span>Bots WhatsApp</span>
        </a>
        <a href="#" onclick="navigateToSection('foros')" class="menu-item">
            <i class="fas fa-comments"></i>
            <span>Foros</span>
        </a>
        <a href="#" onclick="navigateToSection('comunidad')" class="menu-item">
            <i class="fas fa-users"></i>
            <span>Comunidad</span>
        </a>
        <a href="#" onclick="navigateToSection('mas')" class="menu-item">
            <i class="fas fa-plus-circle"></i>
            <span>Más</span>
        </a>
    </nav>
    
    <!-- Dashboard horizontal -->
    <section class="dashboard-horizontal">
        <div class="dash-card" onclick="navigateToSection('juegos-h')">
            <i class="fas fa-gamepad"></i>
            <h3>Juegos H</h3>
            <p>Biblioteca de juegos para adultos</p>
        </div>
        <div class="dash-card" onclick="navigateToSection('bots-whatsapp')">
            <i class="fab fa-whatsapp"></i>
            <h3>Bots WhatsApp</h3>
            <p>Automatización y herramientas</p>
        </div>
        <div class="dash-card" onclick="navigateToSection('foros')">
            <i class="fas fa-comments"></i>
            <h3>Foros</h3>
            <p>Discusión y comunidad</p>
        </div>
        <div class="dash-card" onclick="navigateToSection('comunidad')">
            <i class="fas fa-users"></i>
            <h3>Comunidad</h3>
            <p>Conecta con otros usuarios</p>
        </div>
        <div class="dash-card" onclick="navigateToSection('mas')">
            <i class="fas fa-plus-circle"></i>
            <h3>Más</h3>
            <p>Recursos adicionales</p>
        </div>
    </section>
    
    
    
    <footer class="cyber-footer fade-in" style="margin-top: 4rem; padding: 2rem 0; text-align: center; background: linear-gradient(135deg, rgba(10, 10, 35, 0.95), rgba(26, 26, 62, 0.95)); border-top: 2px solid rgba(15, 255, 195, 0.5); backdrop-filter: blur(10px);">
        <p style="color: #0fffc3; font-family: 'Orbitron', Arial, sans-serif; font-size: 1.1rem; margin-bottom: 0.5rem;">&copy; 2025 BVH3 CYBERGAMES</p>
        <p style="color: #b2fefa; font-family: 'Rajdhani', Arial, sans-serif; font-size: 0.9rem; opacity: 0.8;">Contenido exclusivo +18 | Debe ser mayor de edad para acceder</p>
        <div style="margin-top: 1rem; color: #0fffc3; font-family: 'Audiowide', monospace; font-size: 0.95rem; text-shadow: 0 0 10px rgba(15, 255, 195, 0.5);">
            Estaré subiendo más juegos dependiendo del tiempo y visitas
        </div>
    </footer>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3511784162598025" crossorigin="anonymous"></script>
    <script type="text/javascript" src="//www.highperformanceformat.com/bf768c7a265e5e87c52a44be14748a90/invoke.js"></script>
</body>
</html>
