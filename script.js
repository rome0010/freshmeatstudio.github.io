// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close mobile menu
function closeMenu() {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.remove('active');
    hamburger.classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    
    if (!header.contains(event.target) && nav.classList.contains('active')) {
        closeMenu();
    }
});
/* RESET & GLOBAL */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', 'Arial', sans-serif;
    background: linear-gradient(135deg, #1a4d2e 0%, #0d3320 100%);
    color: #fff;
    overflow-x: hidden;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(46, 204, 113, 0.5);
}

.logo {
    color: #fff;
    font-weight: bold;
    font-size: 28px;
    text-shadow: 3px 3px 0px #1a8c4d, 5px 5px 10px rgba(0,0,0,0.3);
    letter-spacing: 2px;
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 25px;
    transition: all 0.3s ease;
    position: relative;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.2);
}

nav a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #fff, #a8e6cf);
    transform: translateX(-50%);
    transition: width 0.3s ease;
}

nav a:hover::before {
    width: 80%;
}

nav a:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
    box-shadow: 0 0 15px #00ff00, 0 0 25px #00ff00;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%);
    position: relative;
    overflow: hidden;
    padding-top: 80px;
}

.hero::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(46, 204, 113, 0.15) 0%, transparent 70%);
    top: -250px;
    right: -250px;
    animation: pulse 4s ease-in-out infinite;
}

.hero::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(39, 174, 96, 0.15) 0%, transparent 70%);
    bottom: -200px;
    left: -200px;
    animation: pulse 4s ease-in-out infinite 2s;
}

.hero-content {
    text-align: center;
    z-index: 2;
    animation: fadeInUp 1s ease-out;
}

.hero-logo {
    width: 500px;
    max-width: 90%;
    filter: drop-shadow(0 8px 20px rgba(39, 174, 96, 0.4));
    animation: float 3s ease-in-out infinite;
    margin-bottom: 30px;
}

.hero-title {
    font-size: 56px;
    font-weight: bold;
    color: #0d3320;
    text-shadow: 3px 3px 0px #2ecc71, 5px 5px 15px rgba(0,0,0,0.2);
    margin-bottom: 20px;
}

.hero-subtitle {
    font-size: 24px;
    color: #1a4d2e;
    margin-bottom: 40px;
}

/* Sections */
section {
    padding: 100px 60px;
    position: relative;
}

.section-title {
    font-size: 48px;
    text-align: center;
    margin-bottom: 60px;
    color: #0d3320;
    text-shadow: 2px 2px 0px #2ecc71;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #2ecc71, #27ae60);
    border-radius: 2px;
}

/* About Section */
.about {
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    border-radius: 30px;
    margin: 20px 60px;
    border: 5px solid #2ecc71;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.about-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 60px;
    align-items: center;
}

.about-image {
    width: 100%;
    border-radius: 20px;
    border: 3px solid rgba(46, 204, 113, 0.5);
    box-shadow: 0 20px 60px rgba(46, 204, 113, 0.3);
    transition: all 0.3s ease;
}

.about-image:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 80px rgba(46, 204, 113, 0.5);
}

.about-info {
    color: #1a4d2e;
}

.about-info p {
    font-size: 18px;
    margin-bottom: 15px;
    line-height: 1.8;
}

.about-info strong {
    color: #27ae60;
    font-weight: 600;
}

/* Achievements */
.achievements {
    max-width: 1100px;
    margin: 50px auto 0;
    padding: 0;
}

.achievements h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
    letter-spacing: 3px;
    color: #0d3320;
    text-shadow: 2px 2px 0px #2ecc71;
}

.achievement-item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 35px;
    padding-bottom: 35px;
    border-bottom: 3px solid rgba(46, 204, 113, 0.3);
    transition: all 0.3s ease;
}

.achievement-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.achievement-item:hover {
    transform: translateX(5px);
}

.achievement-image {
    flex-shrink: 0;
    width: 280px;
    height: 180px;
    overflow: hidden;
    border-radius: 15px;
    border: 4px solid #2ecc71;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}

.achievement-image:hover {
    box-shadow: 0 12px 30px rgba(46, 204, 113, 0.4);
    border-color: #27ae60;
}

.achievement-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.achievement-image img:hover {
    transform: scale(1.08);
}

.achievement-content {
    flex: 1;
}

.achievement-content h3 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #0d3320;
    text-shadow: 1px 1px 0px #2ecc71;
}

.achievement-content p {
    font-size: 1rem;
    color: #1a4d2e;
    line-height: 1.7;
    margin-bottom: 15px;
}

.achievement-content .role {
    font-size: 0.9rem;
    color: #27ae60;
    font-style: italic;
    font-weight: bold;
}

.view-cert-btn {
    background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.view-cert-btn:hover {
    background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(46, 204, 113, 0.5);
}

.view-cert-btn:active {
    transform: translateY(-1px);
}

/* Projects Section */
.projects {
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    border-radius: 30px;
    margin: 20px 60px;
    border: 5px solid #2ecc71;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.projects-container {
    max-width: 1100px;
    margin: 0 auto;
}

.project-item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 35px;
    padding-bottom: 35px;
    border-bottom: 3px solid rgba(46, 204, 113, 0.3);
    transition: all 0.3s ease;
}

.project-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.project-item:hover {
    transform: translateX(5px);
}

/* PROJECT IMAGE CONTAINER WITH LAYERED IMAGES */
.project-image-container {
    position: relative;
    flex-shrink: 0;
    width: 280px;
    height: 180px;
    overflow: hidden;
    border-radius: 15px;
    border: 4px solid #2ecc71;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}

.project-image-container:hover {
    box-shadow: 0 12px 30px rgba(46, 204, 113, 0.4);
    border-color: #27ae60;
}

/* BACKGROUND IMAGE (Base layer) */
.project-bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    transition: transform 0.3s ease;
}

.project-image-container:hover .project-bg-image {
    transform: scale(1.1);
}

/* TITLE/LOGO IMAGE (Top layer - nakapatong sa background) */
.project-title-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: auto;
    max-height: 90%;
    z-index: 2;
    object-fit: contain;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6));
}

.project-image-container:hover .project-title-image {
    transform: translate(-50%, -50%) scale(1.05);
}

.project-content {
    flex: 1;
}

.project-content h3 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #0d3320;
    text-shadow: 1px 1px 0px #2ecc71;
}

.project-content p {
    font-size: 1rem;
    color: #1a4d2e;
    line-height: 1.7;
    margin-bottom: 15px;
}

.download-btn {
    background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.download-btn:hover:not(:disabled) {
    background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(46, 204, 113, 0.5);
}

.download-btn:active:not(:disabled) {
    transform: translateY(-1px);
}

/* Contact Section */
.contact {
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    border-radius: 30px;
    margin: 20px 60px;
    border: 5px solid #2ecc71;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.contact-container {
    max-width: 800px;
    margin: 0 auto;
}

.contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 20px;
    margin-bottom: 25px;
    padding: 20px;
    background: linear-gradient(135deg, #a8e6cf 0%, #88d8b0 100%);
    border-radius: 15px;
    border: 2px solid #2ecc71;
    color: #1a4d2e;
    transition: all 0.3s ease;
}

.contact-item:hover {
    background: linear-gradient(135deg, #88d8b0 0%, #a8e6cf 100%);
    border-color: #27ae60;
    transform: translateX(10px);
    box-shadow: 0 8px 20px rgba(46, 204, 113, 0.3);
}

.contact-icon {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 0 10px rgba(46, 204, 113, 0.5));
}

/* Animations */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

@keyframes pulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mobile Menu */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

.hamburger span {
    width: 28px;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* Responsive */
@media (max-width: 968px) {
    .hamburger { display: flex; }
    
    nav {
        position: fixed;
        top: 72px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 72px);
        background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
        flex-direction: column;
        padding: 40px;
        transition: left 0.3s ease;
    }
    
    nav.active { left: 0; }
    
    .about-container {
        grid-template-columns: 1fr;
    }
    
    .achievement-item {
        grid-template-columns: 1fr;
    }
    
    .project-grid {
        grid-template-columns: 1fr;
    }
    
    section {
        padding: 60px 30px;
    }
    
    .hero-title {
        font-size: 36px;
    }
    
    .section-title {
        font-size: 36px;
    }

    .about, .projects, .contact {
        margin: 20px 20px;
    }
}

@media (max-width: 480px) {
    .header { 
        padding: 15px 20px; 
    }
    
    .logo { 
        font-size: 20px; 
    }
    
    .hero-logo { 
        width: 280px; 
    }
    
    .hero-title {
        font-size: 28px;
    }
    
    .section-title {
        font-size: 28px;
    }
    
    .about, .projects, .contact { 
        padding: 30px 20px;
        margin: 15px 10px;
    }
    
    .achievement-image {
        height: 180px;
    }
    
    .achievement-content h3 {
        font-size: 22px;
    }
    
    .project-card {
        padding: 30px 20px;
    }
    
    .project-card h3 {
        font-size: 22px;
    }
}