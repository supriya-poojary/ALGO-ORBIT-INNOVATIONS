import React from 'react';
import styles from './about.module.css';

// --- Professional Abstract Tech Icons ---
// Abstract representations of concepts using geometric forms, gradients, and subtle transparency.
// Suitable for High-End IT Consultancy.

const IconAbstractEducation = () => (
    <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
        <defs>
            <linearGradient id="gradEdu" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7928CA" />
                <stop offset="1" stopColor="#FF0080" />
            </linearGradient>
            <filter id="glowEdu" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        {/* Abstract Stack/Layers representing Knowledge Building - Floating Animation */}
        <path d="M50 20L90 40L50 60L10 40L50 20Z" fill="url(#gradEdu)" fillOpacity="0.2" stroke="url(#gradEdu)" strokeWidth="1" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <path d="M50 35L80 50L50 65L20 50L50 35Z" fill="url(#gradEdu)" fillOpacity="0.5" stroke="white" strokeWidth="0.5" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))', animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }} />
        <path d="M50 50L70 60L50 70L30 60L50 50Z" fill="white" fillOpacity="0.8" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }} />

        {/* Floating Particle */}
        <circle cx="50" cy="15" r="3" fill="#FF0080" filter="url(#glowEdu)" style={{ animation: 'pulse-glow 3s infinite' }} />
    </svg>
);

const IconAbstractStartup = () => (
    <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
        <defs>
            <linearGradient id="gradStart" x1="30" y1="80" x2="70" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF0080" />
                <stop offset="1" stopColor="#0070F3" />
            </linearGradient>
        </defs>
        {/* Ascending Prism/Arrow representing Growth - Upward Pulse */}
        <path d="M50 15L85 80H15L50 15Z" fill="url(#gradStart)" fillOpacity="0.1" stroke="url(#gradStart)" strokeWidth="1" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />

        {/* Inner Core - Rising */}
        <path d="M50 30L70 70H30L50 30Z" fill="url(#gradStart)" fillOpacity="0.8" style={{ filter: 'drop-shadow(0 0 10px rgba(121,40,202,0.3))', animation: 'float 4s ease-in-out infinite' }} />

        {/* Orbit Ring - Spinning */}
        <g style={{ transformOrigin: '50% 65%', animation: 'spin-slow 10s linear infinite' }}>
            <ellipse cx="50" cy="65" rx="30" ry="10" stroke="white" strokeWidth="1" strokeOpacity="0.5" transform="rotate(-10 50 65)" />
        </g>
    </svg>
);

const IconAbstractInnovation = () => (
    <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
        <defs>
            <radialGradient id="gradInn" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(40)">
                <stop stopColor="#0070F3" stopOpacity="0.2" />
                <stop offset="1" stopColor="#7928CA" stopOpacity="0" />
            </radialGradient>
        </defs>

        {/* Central Hub/Network - Pulsing */}
        <circle cx="50" cy="50" r="40" fill="url(#gradInn)" style={{ animation: 'pulse-glow 5s infinite' }} />

        {/* Nodes - Spinning Group */}
        <g style={{ transformOrigin: '50px 50px', animation: 'spin-slow 20s linear infinite' }}>
            <circle cx="50" cy="50" r="8" fill="#0070F3" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="20" r="4" fill="#7928CA" />
            <circle cx="80" cy="50" r="4" fill="#7928CA" />
            <circle cx="50" cy="80" r="4" fill="#7928CA" />
            <circle cx="20" cy="50" r="4" fill="#7928CA" />

            {/* Connections */}
            <line x1="50" y1="42" x2="50" y2="24" stroke="#0070F3" strokeWidth="2" strokeOpacity="0.5" />
            <line x1="58" y1="50" x2="76" y2="50" stroke="#0070F3" strokeWidth="2" strokeOpacity="0.5" />
            <line x1="50" y1="58" x2="50" y2="76" stroke="#0070F3" strokeWidth="2" strokeOpacity="0.5" />
            <line x1="42" y1="50" x2="24" y2="50" stroke="#0070F3" strokeWidth="2" strokeOpacity="0.5" />
        </g>

        {/* Orbital Path - Counter Spin */}
        <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" style={{ transformOrigin: '50px 50px', animation: 'spin-slow 15s linear infinite reverse' }} />
    </svg>
);

const IconAbstractConsultancy = () => (
    <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
        <defs>
            <linearGradient id="gradCons" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7928CA" />
                <stop offset="1" stopColor="#0070F3" />
            </linearGradient>
        </defs>

        {/* Interlocking Hexagons/Structure - Breathing */}
        <path d="M30 20L60 20L75 45L60 70L30 70L15 45L30 20Z" stroke="url(#gradCons)" strokeWidth="2" fill="none" opacity="0.6" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <path d="M50 40L80 40L95 65L80 90L50 90L35 65L50 40Z" fill="url(#gradCons)" fillOpacity="0.1" stroke="url(#gradCons)" strokeWidth="2" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }} />

        {/* Data Points - Pulsing */}
        <circle cx="65" cy="55" r="3" fill="white" style={{ animation: 'pulse-glow 2s infinite' }} />
        <line x1="45" y1="45" x2="65" y2="55" stroke="white" strokeWidth="1" opacity="0.5" />
    </svg>
);

const IconAbstractMastery = () => (
    <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
        {/* Step Up / Bar Chart Abstract - Growing */}
        <rect x="20" y="60" width="15" height="20" rx="2" fill="#7928CA" fillOpacity="0.4" style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.2s' }} />
        <rect x="42" y="45" width="15" height="35" rx="2" fill="#7928CA" fillOpacity="0.7" style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.4s' }} />
        <rect x="64" y="20" width="15" height="60" rx="2" fill="url(#gradMastery)" style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.6s' }} />

        {/* Trend Line - Drawing Effect (Simulated via dash offset or just opacity for now) */}
        <path d="M15 55L40 40L60 15L90 10" stroke="#FF0080" strokeWidth="3" strokeLinecap="round" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
        <circle cx="90" cy="10" r="3" fill="white" filter="url(#glowMastery)" style={{ animation: 'pulse-glow 1.5s infinite' }} />

        <defs>
            <linearGradient id="gradMastery" x1="64" y1="20" x2="79" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7928CA" />
                <stop offset="1" stopColor="#FF0080" />
            </linearGradient>
            <filter id="glowMastery" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" />
            </filter>
        </defs>
    </svg>
);

const IconAbstractAvatar = ({ delay = 0 }: { delay?: number }) => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <defs>
            <linearGradient id="gradAvatar" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7928CA" stopOpacity="0.8" />
                <stop offset="1" stopColor="#0070F3" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glowAvatar" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" />
            </filter>
        </defs>

        {/* Glowing Head */}
        <circle cx="50" cy="35" r="15" fill="url(#gradAvatar)" style={{ animation: `pulse-glow 4s infinite ${delay}s` }} />

        {/* Holographic Body/Shoulders */}
        <path d="M20 85C20 65 35 55 50 55C65 55 80 65 80 85" stroke="url(#gradAvatar)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" style={{ animation: `pulse-glow 4s infinite ${delay}s` }} />
        <path d="M25 90C25 75 38 65 50 65C62 65 75 75 75 90" stroke="white" strokeWidth="1" opacity="0.5" />

        {/* Orbit Ring */}
        <ellipse cx="50" cy="50" rx="40" ry="12" stroke="white" strokeWidth="1" strokeOpacity="0.3" transform="rotate(-15 50 50)" style={{ animation: 'spin-slow 8s linear infinite reverse' }} />
    </svg>
);

export default function AboutPage() {
    return (
        <div>
            {/* Hero Section with Aurora Background */}
            <section className={styles.heroSection}>
                {/* Animated Background Orbs */}
                <div className={styles.auroraContainer}>
                    <div className={`${styles.orb} ${styles.orb1}`}></div>
                    <div className={`${styles.orb} ${styles.orb2}`}></div>
                    <div className={`${styles.orb} ${styles.orb3}`}></div>
                </div>

                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={`animate-fade-in ${styles.heroText}`}>
                            <h1 className={styles.heroTitle}>
                                Shaping the <br />
                                <span className="text-gradient">Future with AI</span>
                            </h1>
                            <p className={styles.heroSubtitle}>
                                Enterprise innovation & Human Creativity. We build the bridges between today's problems and tomorrow's solutions.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary">Partner with Us</button>
                                <button className="btn btn-outline">View Projects</button>
                            </div>
                        </div>

                        {/* Abstract Tech Visual Replacement (High Fidelity Hero) */}
                        <div className={styles.visualComposition}>
                            {/* Main Floating Card - Logo Core */}
                            <div className={styles.glassCardMain}>
                                <div className={styles.floatingIcon}>
                                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* Animated Orbital Rings around Logo */}
                                        <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', animation: 'spin-slow 20s linear infinite' }}>
                                            <circle cx="100" cy="100" r="80" stroke="url(#gradRing)" strokeWidth="1" fill="none" strokeDasharray="10 10" opacity="0.5" />
                                            <circle cx="100" cy="100" r="60" stroke="#7928CA" strokeWidth="1" fill="none" opacity="0.2" />
                                            <defs>
                                                <linearGradient id="gradRing" x1="0" y1="0" x2="200" y2="200">
                                                    <stop stopColor="#7928CA" />
                                                    <stop offset="1" stopColor="#FF0080" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <img src="/logo.png" alt="Logo" width={100} style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))', zIndex: 10 }} />
                                    </div>
                                </div>
                            </div>

                            {/* Satellite Card 1 - AI Spark */}
                            <div className={`${styles.glassCardSmall} ${styles.small1}`}>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path d="M30 10L35 25L50 30L35 35L30 50L25 35L10 30L25 25L30 10Z" fill="url(#gradSpark)" filter="url(#glowSpark)" />
                                    <defs>
                                        <linearGradient id="gradSpark" x1="10" y1="10" x2="50" y2="50">
                                            <stop stopColor="#FFD700" />
                                            <stop offset="1" stopColor="#FF0080" />
                                        </linearGradient>
                                        <filter id="glowSpark">
                                            <feGaussianBlur stdDeviation="2" result="blur" />
                                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>

                            {/* Satellite Card 2 - Data Cube */}
                            <div className={`${styles.glassCardSmall} ${styles.small2}`}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M25 5L45 15V35L25 45L5 35V15L25 5Z" stroke="#0070F3" strokeWidth="2" fill="rgba(0,112,243,0.05)" />
                                    <path d="M25 5V25M25 45V25M45 15L25 25L5 15" stroke="#0070F3" strokeWidth="1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className={styles.missionSection}>
                <div className="container">
                    <h2 className={styles.quote}>
                        "Technology should not replace humanity, but <span className="text-gradient">amplify</span> its potential."
                    </h2>
                </div>
            </section>

            {/* Vision & Mission */}
            <section style={{ padding: '100px 0', background: '#F7F9FA' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Our Mission</h2>
                    <div className={styles.gridThree}>
                        <div className={styles.premiumCard}>
                            <div className={styles.cardIconBox} style={{ background: 'transparent' }}><IconAbstractEducation /></div>
                            <h3 className={styles.cardTitle}>Transform Education</h3>
                            <p className={styles.cardText}>Empowering the next generation with cutting-edge AI skills through experiential learning.</p>
                        </div>
                        <div className={styles.premiumCard}>
                            <div className={styles.cardIconBox} style={{ background: 'transparent' }}><IconAbstractStartup /></div>
                            <h3 className={styles.cardTitle}>Support Startups</h3>
                            <p className={styles.cardText}>Providing smart digital infrastructure and consultancy for scalability.</p>
                        </div>
                        <div className={styles.premiumCard}>
                            <div className={styles.cardIconBox} style={{ background: 'transparent' }}><IconAbstractInnovation /></div>
                            <h3 className={styles.cardTitle}>Build Innovation Culture</h3>
                            <p className={styles.cardText}>Fostering leadership and creative problem solving in every project we touch.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Expertise */}
            <section className="container" style={{ padding: '100px 24px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '60px', fontSize: '36px' }}>Our Core Expertise</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
                    <div className={`${styles.premiumCard}`} style={{ flex: '1', minWidth: '300px' }}>
                        <div className={styles.cardIconBox} style={{ background: 'transparent' }}><IconAbstractConsultancy /></div>
                        <h3 className={styles.cardTitle}>IT Consultancy</h3>
                        <p className={styles.cardText}>Strategic technology planning and implementation for enterprise growth. We audit, plan, and execute.</p>
                    </div>
                    <div className={`${styles.premiumCard}`} style={{ flex: '1', minWidth: '300px' }}>
                        <div className={styles.cardIconBox} style={{ background: 'transparent' }}><IconAbstractMastery /></div>
                        <h3 className={styles.cardTitle}>Career & Mastery</h3>
                        <p className={styles.cardText}>Comprehensive training programs designed to master modern tech stacks. From zero to deployed.</p>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className={styles.timelineSection}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '36px' }}>Our Journey</h2>
                    <div className={styles.timelineTrack}>
                        <div className={styles.timelineNode}>
                            <div className={styles.year}>2023</div>
                            <div className={styles.dot}></div>
                            <h3 className={styles.nodeTitle}>Inception</h3>
                            <p className={styles.cardText} style={{ fontSize: '14px', maxWidth: '200px', margin: '0 auto' }}>Algo Orbit Innovations was founded to bridge the AI gap.</p>
                        </div>
                        <div className={styles.timelineNode}>
                            <div className={styles.year}>2024</div>
                            <div className={styles.dot}></div>
                            <h3 className={styles.nodeTitle}>First Prototype</h3>
                            <p className={styles.cardText} style={{ fontSize: '14px', maxWidth: '200px', margin: '0 auto' }}>Launched our first AI-driven education solution.</p>
                        </div>
                        <div className={styles.timelineNode}>
                            <div className={styles.year}>2025</div>
                            <div className={styles.dot}></div>
                            <h3 className={styles.nodeTitle}>Global Reach</h3>
                            <p className={styles.cardText} style={{ fontSize: '14px', maxWidth: '200px', margin: '0 auto' }}>Expansion into IT Consultancy & Enterprise markets.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section style={{ padding: '80px 0', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '56px', fontWeight: '800' }} className="text-gradient">25+</div>
                            <div style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', color: '#666', letterSpacing: '1px' }}>Projects Delivered</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '56px', fontWeight: '800' }} className="text-gradient">500+</div>
                            <div style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', color: '#666', letterSpacing: '1px' }}>Professionals Trained</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '56px', fontWeight: '800' }} className="text-gradient">10+</div>
                            <div style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', color: '#666', letterSpacing: '1px' }}>Industry Partners</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '16px', background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', width: '100%' }}>Meet the Visionaries</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px', fontSize: '18px' }}>The innovators attempting to orbit the impossible.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
                        {[0, 1, 2, 3].map((val, index) => (
                            <div key={index} style={{ textAlign: 'center', position: 'relative' }}>
                                {/* Holographic Pedestal Effect */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '60px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '20px',
                                    background: 'radial-gradient(ellipse at center, rgba(0,112,243,0.3) 0%, rgba(0,0,0,0) 70%)',
                                    borderRadius: '50%',
                                    filter: 'blur(5px)'
                                }}></div>

                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.8)',
                                    backdropFilter: 'blur(10px)',
                                    margin: '0 auto 20px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid rgba(255,255,255,1)',
                                    position: 'relative',
                                    zIndex: 2,
                                    animation: 'float 6s ease-in-out infinite',
                                    animationDelay: `${index * 0.5}s`
                                }}>
                                    <IconAbstractAvatar delay={index} />
                                </div>
                                <h4 style={{ marginBottom: '4px', fontSize: '18px', fontWeight: '700' }}>Expert {index + 1}</h4>
                                <p style={{ fontSize: '14px', color: '#7928CA', fontWeight: '600', letterSpacing: '0.5px' }}>SPECIALIST</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* Background Decorative Bloom */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(121,40,202,0.1) 0%, rgba(0,0,0,0) 70%)',
                    pointerEvents: 'none',
                    animation: 'pulse-glow 8s infinite'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className={styles.bentoGrid}>
                        <div className={styles.bentoItem} style={{
                            gridColumn: '1 / -1',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,255,0.9) 100%)',
                            border: '1px solid rgba(255,255,255,0.8)',
                            boxShadow: '0 20px 80px rgba(121,40,202,0.15)',
                            padding: '80px 40px'
                        }}>
                            {/* Floating Abstract Element in BG */}
                            <div style={{ position: 'absolute', top: -50, right: -50, opacity: 0.1, pointerEvents: 'none' }}>
                                <IconAbstractInnovation />
                            </div>
                            <div style={{ position: 'absolute', bottom: -50, left: -50, opacity: 0.1, pointerEvents: 'none', transform: 'scale(1.5)' }}>
                                <IconAbstractConsultancy />
                            </div>

                            <h2 style={{
                                fontSize: '56px',
                                marginBottom: '24px',
                                position: 'relative',
                                background: 'linear-gradient(90deg, #000 0%, #444 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-1px'
                            }}>
                                Ready to Orbit?
                            </h2>
                            <p style={{ fontSize: '22px', color: '#666', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                                Join Algo Orbit Innovations and launch your digital transformation today.
                            </p>
                            <button className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '18px', borderRadius: '50px', boxShadow: '0 10px 25px rgba(0,118,243,0.3)', transition: 'transform 0.2s' }}>
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
