"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './about.module.css';

// ... (rest of imports)

// Helper component for Team Member
// Helper component for Team Member
const TeamMember = ({ member, index }: { member: any, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.visionaryCard} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
                <img
                    src={member.img}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="hover-scale"
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>

                {/* Social Icons Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 86, 210, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: isHovered ? 'auto' : 'none'
                }}>
                    {/* LinkedIn Icon */}
                    <a
                        href={member.linkedin || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: '2px solid rgba(255, 255, 255, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                            opacity: isHovered ? 1 : 0,
                            transitionDelay: '0.1s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                            e.currentTarget.style.transform = 'translateY(0) scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>

                    {/* Email Icon */}
                    <a
                        href={`mailto:${member.email || ''}`}
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: '2px solid rgba(255, 255, 255, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                            opacity: isHovered ? 1 : 0,
                            transitionDelay: '0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                            e.currentTarget.style.transform = 'translateY(0) scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
            <div style={{ padding: '24px' }}>
                <h4 style={{ marginBottom: '8px', fontSize: '22px', fontWeight: '700', color: 'var(--text-main)' }}>{member.name}</h4>
                <p style={{ fontSize: '12px', color: 'var(--primary-color)', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>{member.role}</p>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{member.bio}</p>
            </div>
        </div>
    );
};

// FAQ Accordion Item Component
const FAQItem = ({ item }: { item: { question: string, answer: string } }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', overflow: 'hidden', boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.2)' : 'none', transition: 'all 0.3s ease' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '24px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    outline: 'none',
                    textAlign: 'left'
                }}
            >
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: 0 }}>{item.question}</h3>
                <span style={{
                    fontSize: '24px',
                    fontWeight: '300',
                    color: '#00C9FF',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                }}>+</span>
            </button>
            <div style={{
                height: isOpen ? 'auto' : '0',
                overflow: 'hidden',
                transition: 'height 0.3s ease'
            }}>
                <div style={{ padding: '0 32px 32px', color: '#a8b2d1', lineHeight: '1.7' }}>
                    {item.answer}
                </div>
            </div>
        </div>
    );
};

// --- Professional Abstract Tech Icons ---
// Abstract representations of concepts using geometric forms, gradients, and subtle transparency.
// Suitable for High-End IT Consultancy.

const IconAbstractEducation = () => (
    <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
        <defs>
            <linearGradient id="gradEdu" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0056D2" />
                <stop offset="1" stopColor="#00C9FF" />
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
                <stop stopColor="#00C9FF" />
                <stop offset="1" stopColor="#0056D2" />
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
                <stop stopColor="#0056D2" stopOpacity="0.2" />
                <stop offset="1" stopColor="#00C9FF" stopOpacity="0" />
            </radialGradient>
        </defs>

        {/* Central Hub/Network - Pulsing */}
        <circle cx="50" cy="50" r="40" fill="url(#gradInn)" style={{ animation: 'pulse-glow 5s infinite' }} />

        {/* Nodes - Spinning Group */}
        <g style={{ transformOrigin: '50px 50px', animation: 'spin-slow 20s linear infinite' }}>
            <circle cx="50" cy="50" r="8" fill="#0056D2" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="20" r="4" fill="#00C9FF" />
            <circle cx="80" cy="50" r="4" fill="#00C9FF" />
            <circle cx="50" cy="80" r="4" fill="#00C9FF" />
            <circle cx="20" cy="50" r="4" fill="#00C9FF" />

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
                <stop stopColor="#0056D2" />
                <stop offset="1" stopColor="#00C9FF" />
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
        <rect x="20" y="60" width="15" height="20" rx="2" fill="#0056D2" fillOpacity="0.4" style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.2s' }} />
        <rect x="42" y="45" width="15" height="35" rx="2" fill="#0056D2" fillOpacity="0.7" style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.4s' }} />
        <rect x="64" y="20" width="15" height="60" rx="2" fill="url(#gradMastery)" style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.6s' }} />

        {/* Trend Line - Drawing Effect (Simulated via dash offset or just opacity for now) */}
        <path d="M15 55L40 40L60 15L90 10" stroke="#00C9FF" strokeWidth="3" strokeLinecap="round" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
        <circle cx="90" cy="10" r="3" fill="white" filter="url(#glowMastery)" style={{ animation: 'pulse-glow 1.5s infinite' }} />

        <defs>
            <linearGradient id="gradMastery" x1="64" y1="20" x2="79" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0056D2" />
                <stop offset="1" stopColor="#00C9FF" />
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
                <stop stopColor="#0056D2" stopOpacity="0.8" />
                <stop offset="1" stopColor="#00C9FF" stopOpacity="0.8" />
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

const IconAbstractMission = () => (
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className={styles.animatedDroplet}>
        <defs>
            <linearGradient id="gradMission" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00C9FF" />
                <stop offset="1" stopColor="#0056D2" />
            </linearGradient>
            <filter id="glowMission" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        {/* Rocket/Launch Abstract Shape */}
        <path d="M50 10C50 10 30 50 30 70C30 85 40 90 50 90C60 90 70 85 70 70C70 50 50 10 50 10Z" fill="url(#gradMission)" fillOpacity="0.2" stroke="url(#gradMission)" strokeWidth="2" />
        <circle cx="50" cy="70" r="8" fill="white" filter="url(#glowMission)" style={{ animation: 'pulse-glow 2s infinite' }} />
        <path d="M30 70L20 90M70 70L80 90" stroke="url(#gradMission)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <circle cx="50" cy="10" r="1" fill="white">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
        </circle>
    </svg>
);

const IconAbstractVision = () => (
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
        <defs>
            <radialGradient id="gradVision" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="60%" stopColor="#0070F3" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0070F3" stopOpacity="0" />
            </radialGradient>
        </defs>
        {/* Eye/Horizon Abstract - Animated Class Applied Here */}
        <g className={styles.animatedEye}>
            <path d="M10 50Q50 10 90 50Q50 90 10 50Z" stroke="#0070F3" strokeWidth="2" fill="none" opacity="0.8" />
            <circle cx="50" cy="50" r="15" fill="url(#gradVision)" />
            <circle cx="50" cy="50" r="6" fill="#111" stroke="white" strokeWidth="2" />
        </g>

        {/* Rays of sight */}
        <line x1="50" y1="50" x2="80" y2="20" stroke="#0070F3" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" style={{ animation: 'spin-slow 20s linear infinite' }} />
        <line x1="50" y1="50" x2="20" y2="80" stroke="#0070F3" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" style={{ animation: 'spin-slow 20s linear infinite' }} />
        <line x1="50" y1="50" x2="80" y2="80" stroke="#0070F3" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" style={{ animation: 'spin-slow 20s linear infinite reverse' }} />
        <line x1="50" y1="50" x2="20" y2="20" stroke="#0070F3" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" style={{ animation: 'spin-slow 20s linear infinite reverse' }} />
    </svg>
);

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect(); // Run once
            }
        }, { threshold: 0.5 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
                const easeOut = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(end * easeOut));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return <span ref={ref} style={{ color: '#0070F3', fontWeight: '800' }}>{count}{suffix}</span>;
};

// Scroll Reveal Component for "Brevon-style" Entry Animations
// Scroll Reveal Component for "Brevon-style" Entry Animations
const ScrollReveal = ({ children, delay = 0, animation = 'none' }: { children: React.ReactNode, delay?: number, animation?: 'none' | 'slideUp' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }); // Trigger slightly before fully visible

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const delayStyle = delay ? { transitionDelay: `${delay}s` } : {};

    // Determine classes based on animation prop
    let baseClass = '';
    if (animation === 'slideUp') {
        baseClass = isVisible ? styles.serviceVisible : styles.serviceHidden;
    } else {
        // Default behavior (maintain existing if any, currently empty classes based on previous check)
        baseClass = `${styles.revealHidden} ${isVisible ? styles.revealVisible : ''}`;
    }

    return (
        <div
            ref={ref}
            className={baseClass}
            style={{ ...delayStyle, height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            {children}
        </div>
    );
};

// Word Reveal Component for Headings
const WordReveal = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0, rootMargin: '0px 0px 0px 0px' });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const words = text.split(" ");

    return (
        <span ref={ref} className={className} style={{ display: 'inline-block' }}>
            {words.map((word, i) => (
                <span key={i} className={styles.wordWrapper} style={{ marginRight: '0.25em' }}>
                    <span
                        className={styles.word}
                        style={{
                            animationPlayState: isVisible ? 'running' : 'paused',
                            animationDelay: `${delay + (i * 0.05)}s`
                        }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </span>
    );
};

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Nishan Kamath",
            role: "MANAGING DIRECTOR & CEO",
            img: "/nishan-new.png",
            bio: "Visionary leader driving the strategic direction of Algo Orbit, blending technical expertise with business innovation.",
            linkedin: "https://www.linkedin.com/in/nishan-kamath-b2891b26b/",
            email: "nishankamath@gmail.com"
        },
        {
            name: "Sujatha Kamath",
            role: "DIRECTOR & ACCOUNTS HEAD",
            img: "/sujatha-new.jpg",
            bio: "The financial backbone of the organization, ensuring sustainable growth and operational excellence.",
            linkedin: "#",
            email: "nithinkamath93@gmail.com"
        },
        {
            name: "Prajna Rao",
            role: "HEAD OF TECHNOLOGY & TRAINING",
            img: "/prajna-new.png",
            bio: "Leading the charge in educational transformation and technical delivery, crafting the curriculum of the future.",
            linkedin: "https://www.linkedin.com/in/prajnarao247/",
            email: "prajnarao247@gmail.com"
        }
    ];

    return (
        <div>
            {/* Hero Section with Cinematic Video Simulation */}
            <section className={styles.heroSection}>
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.heroVideo}
                    poster="/hero-robot-poster.png"
                >
                    <source src="/hero-robot-collaboration.mp4" type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    Your browser does not support the video tag.
                </video>

                {/* Overlay for readability */}
                <div className={styles.videoOverlay}></div>

                {/* Motion Simulation Layers: Working & Moving activity */}
                <div className={styles.motionLayer}>
                    {/* Shadow entities passing by */}
                    <div className={styles.shadowSweep}></div>
                    <div className={`${styles.shadowSweep} ${styles.shadowSweepDelay}`}></div>

                    {/* Holographic interface glows (working simulation) */}
                    <div className={`${styles.hologramGlow} ${styles.glowPos1}`}></div>
                    <div className={`${styles.hologramGlow} ${styles.glowPos2}`}></div>

                    {/* Drifting digital nodes (live data simulation) */}
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className={styles.dataDrift}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                transform: `scale(${0.5 + Math.random()})`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Animated Background Orbs (Kept behind but above BG for depth) */}
                <div className={styles.auroraContainer} style={{ zIndex: 1, opacity: 0.4 }}>
                    <div className={`${styles.orb} ${styles.orb1}`}></div>
                    <div className={`${styles.orb} ${styles.orb2}`}></div>
                    <div className={`${styles.orb} ${styles.orb3}`}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                    <div className={styles.heroContent}>
                        <div className={`animate-fade-in ${styles.heroText}`}>
                            <h1 className={styles.heroTitle}>
                                About Us
                            </h1>
                            <p className={styles.heroSubtitle} style={{ margin: '0 auto 40px' }}>
                                We are a product-driven IT consulting company that combines expert services, enterprise training and innovative SaaS products to help organizations thrive in the digital age.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <button className="btn btn-primary">Partner with Us</button>
                                <button className="btn btn-outline">View Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Algo Orbit - Intro */}
            <section className={styles.responsiveSectionSmall} style={{ position: 'relative' }}>
                <div className="container">
                    <div className={styles.responsiveFlex}>

                        {/* LEFT COLUMN: Text Content */}
                        {/* LEFT COLUMN: Text Content */}
                        <div className={styles.responsiveCol} style={{ maxWidth: '650px' }}>
                            <ScrollReveal>
                                <h1 style={{
                                    fontSize: '48px',
                                    fontWeight: '800',
                                    marginBottom: '32px',
                                    color: '#0070F3',
                                    textAlign: 'left'
                                }}>
                                    <WordReveal text="About Algo Orbit" />
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal delay={0.1}>
                                <p style={{ fontSize: '20px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
                                    Algo Orbit is a forward-thinking technology organization driven by innovation and impact. We specialize in developing AI-driven digital solutions, providing strategic IT consultancy, and empowering learners through modern, career-focused education programs.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <p style={{ fontSize: '20px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
                                    Our vision is to make advanced technology accessible to everyone—helping individuals, startups, and institutions embrace digital transformation with clarity and confidence. Through our unique combination of AI innovation, consulting expertise, and education excellence, we enable people to grow, adapt, and lead in a rapidly evolving digital world.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <p style={{ fontSize: '20px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                    At Algo Orbit, we don’t just build technology—we build possibilities. Our mission is to nurture talent, inspire creativity, and drive meaningful change through human-centered innovation.
                                </p>
                            </ScrollReveal>
                        </div>

                        {/* RIGHT COLUMN: Image Collage */}
                        <div style={{ flex: '1', minWidth: '320px', position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Main Large Image */}
                            <div className={styles.interactiveImage} style={{
                                position: 'relative',
                                width: '90%',
                                height: '85%',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                zIndex: 1
                            }}>
                                <img
                                    src="/about-collab-main.png"
                                    alt="Team Collaboration"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Decorative Dots Pattern */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '10px',
                                width: '100px',
                                height: '100px',
                                backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)',
                                backgroundSize: '20px 20px',
                                zIndex: 0
                            }}></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section style={{ padding: '40px 0 100px', background: 'transparent' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>

                    {/* Mission Column */}
                    <div className={styles.missionCard}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                            <div style={{ width: '60px', height: '60px', background: 'var(--primary-gradient)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(121,40,202,0.2)' }}>
                                <IconAbstractMission />
                            </div>
                            <h2 style={{ fontSize: '32px', fontWeight: '800' }}><WordReveal text="Our Mission" delay={0.2} /></h2>
                        </div>
                        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '32px' }}>
                            At Algo Orbit, we don't just build technology—we build possibilities. Our mission is to nurture talent, inspire creativity, and drive meaningful change through human-centered innovation.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontWeight: '500' }}>
                                <span style={{ color: '#0070F3' }}>✓</span> Nurture Talent & Creativity
                            </li>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontWeight: '500' }}>
                                <span style={{ color: '#0070F3' }}>✓</span> Drive Human-Centered Innovation
                            </li>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontWeight: '500' }}>
                                <span style={{ color: '#0070F3' }}>✓</span> Build Endless Possibilities
                            </li>
                        </ul>
                    </div>

                    {/* Vision Column */}
                    <div className={styles.missionCard}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                            <div style={{ width: '60px', height: '60px', background: 'var(--background-paper)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)' }}>
                                <IconAbstractVision />
                            </div>
                            <h2 style={{ fontSize: '32px', fontWeight: '800' }}><WordReveal text="Our Vision" delay={0.3} /></h2>
                        </div>
                        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '32px' }}>
                            Our vision is to make advanced technology accessible to everyone—helping individuals, startups, and institutions embrace digital transformation with clarity and confidence. Through our unique combination of AI innovation, consulting expertise, and education excellence, we enable people to grow, adapt, and lead in a rapidly evolving digital world.
                        </p>
                        <div className={styles.premiumCard} style={{ padding: '24px', borderLeft: '4px solid #0056D2', animation: 'none', opacity: 1, transform: 'none' }}>
                            <p style={{ fontStyle: 'italic', fontWeight: '600', color: 'var(--text-main)' }}>
                                "Enabling people to grow, adapt, and lead in a rapidly evolving digital world."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="container" style={{ marginTop: '80px' }}>
                    <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '40px', color: '#888', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        <WordReveal text="Driven By Values" />
                    </h2>
                    <div className={styles.gridThree} style={{ marginTop: '0', alignItems: 'stretch' }}>
                        <ScrollReveal delay={0.1} animation="slideUp">
                            <div className={styles.premiumCard} style={{ height: '100%' }}>
                                <div className={styles.cardIconBox} style={{ background: 'transparent' }}><IconAbstractInnovation /></div>
                                <h3 className={styles.cardTitle}>Innovation</h3>
                                <p className={styles.cardText}>We constantly push boundaries to deliver cutting-edge solutions.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2} animation="slideUp">
                            <div className={styles.premiumCard} style={{ height: '100%' }}>
                                <div className={styles.cardIconBox} style={{ background: 'transparent' }}><IconAbstractAvatar /></div>
                                <h3 className={styles.cardTitle}>Client-Centric</h3>
                                <p className={styles.cardText}>Your success is our priority. We build lasting partnerships.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3} animation="slideUp">
                            <div className={styles.premiumCard} style={{ height: '100%' }}>
                                <div className={styles.cardIconBox} style={{ background: 'transparent' }}><IconAbstractEducation /></div>
                                <h3 className={styles.cardTitle}>Excellence</h3>
                                <p className={styles.cardText}>We maintain the highest standards in everything we do.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4} animation="slideUp">
                            <div className={styles.premiumCard} style={{ height: '100%' }}>
                                <div className={styles.cardIconBox} style={{ background: 'transparent' }}><IconAbstractStartup /></div>
                                <h3 className={styles.cardTitle}>Growth</h3>
                                <p className={styles.cardText}>We help businesses scale with sustainable solutions.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Core Expertise Section */}
            <section className="container" style={{ padding: '20px 24px 100px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '60px', fontSize: '36px', fontWeight: '800' }}>
                    <WordReveal text="Our Core Expertise" />
                </h2>
                <div className={styles.gridThree} style={{ alignItems: 'stretch' }}>
                    <ScrollReveal delay={0.1}>
                        <div className={styles.premiumCard} style={{ height: '100%' }}>
                            <div className={styles.cardIconBox}>
                                <IconAbstractConsultancy />
                            </div>
                            <h3 className={styles.cardTitle}>IT Consultancy</h3>
                            <p className={styles.cardText}>
                                Strategic technology planning and implementation for enterprise growth. We audit, plan, and execute.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className={styles.premiumCard} style={{ height: '100%' }}>
                            <div className={styles.cardIconBox}>
                                <IconAbstractMastery />
                            </div>
                            <h3 className={styles.cardTitle}>Career & Mastery</h3>
                            <p className={styles.cardText}>
                                Cultivating elite engineering talent through rigorous, industry-aligned mastery programs.
                                We bridge the gap between potential and performance, producing highly trained professionals
                                ready to architect scalable enterprise solutions from day one.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* What Makes Us Different Section */}
            <section style={{ padding: '100px 0', background: '#0B0F19', color: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px', color: '#fff' }}>
                            <WordReveal text="What Makes Us Different" />
                        </h2>
                        <p style={{ fontSize: '18px', color: '#8892b0' }}>We're not just another IT company</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        {/* List Content */}
                        <ScrollReveal delay={0.1}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    "Product-driven approach with in-house SaaS expertise",
                                    "Full-stack capabilities from consulting to training",
                                    "Enterprise-grade solutions with startup agility",
                                    "Deep technical expertise across modern tech stacks",
                                    "Proven track record in digital transformation"
                                ].map((item, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        padding: '20px 24px',
                                        background: 'rgba(255,255,255,0.02)',
                                        borderLeft: '4px solid #00C9FF',
                                        borderRadius: '0 8px 8px 0',
                                        transition: 'all 0.3s ease'
                                    }}
                                        className="hover-glow-card"
                                    >
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#00C9FF', marginBottom: '8px', opacity: 0.9 }}>
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff' }}>
                                            {item}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Image Side */}
                        <ScrollReveal delay={0.3}>
                            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 80px rgba(0,0,0,0.5)' }}>
                                <img
                                    src="/difference-network.png"
                                    alt="Digital Network Visualization"
                                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
                                    className="hover-scale"
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', pointerEvents: 'none' }}></div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className={styles.timelineSection}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '42px', marginBottom: '80px', fontWeight: '800' }}>
                        <WordReveal text="Our Journey" />
                    </h2>
                    <div className={styles.timelineContainer}>

                        {/* 2023 */}
                        <div className={styles.timelineRow}>
                            <div className={styles.timelineImageWrapper}>
                                <div className={styles.glowEffect}></div>
                                <img src="/timeline-2023.png" alt="Genesis" className={styles.timelineImage} />
                            </div>
                            <div className={styles.timelineCenterLine}>
                                <div className={styles.timelineDot}></div>
                            </div>
                            <div className={styles.timelineContent}>
                                <div className={styles.timelineContentInner}>
                                    <div className={styles.yearBadge}>2023</div>
                                    <h3 className={styles.nodeTitle} style={{ fontSize: '28px' }}>Genesis</h3>
                                    <p className={styles.cardText}>
                                        Algo Orbit was born from a singular question: <br />
                                        <span style={{ color: '#0056D2', fontWeight: '600' }}>"How can we democratize AI mastery?"</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2024 */}
                        <div className={`${styles.timelineRow} ${styles.timelineRowReverse}`}>
                            <div className={styles.timelineImageWrapper}>
                                <div className={styles.glowEffect} style={{ background: 'radial-gradient(circle, rgba(0,201,255,0.4) 0%, rgba(0,0,0,0) 70%)' }}></div>
                                <img src="/timeline-2024.png" alt="Prototype" className={styles.timelineImage} />
                            </div>
                            <div className={styles.timelineCenterLine}>
                                <div className={styles.timelineDot}></div>
                            </div>
                            <div className={styles.timelineContent}>
                                <div className={styles.timelineContentInner}>
                                    <div className={styles.yearBadge} style={{ background: 'linear-gradient(135deg, #00C9FF 0%, #0056D2 100%)' }}>2024</div>
                                    <h3 className={styles.nodeTitle} style={{ fontSize: '28px' }}>The Catalyst</h3>
                                    <p className={styles.cardText}>
                                        Launched our first cohort, proving that rapid, high-intensity skill acquisition is possible.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2025 */}
                        <div className={styles.timelineRow}>
                            <div className={styles.timelineImageWrapper}>
                                <div className={styles.glowEffect} style={{ background: 'radial-gradient(circle, rgba(0,86,210,0.4) 0%, rgba(0,0,0,0) 70%)' }}></div>
                                <img src="/timeline-2025.png" alt="Expansion" className={styles.timelineImage} />
                            </div>
                            <div className={styles.timelineCenterLine}>
                                <div className={styles.timelineDot}></div>
                            </div>
                            <div className={styles.timelineContent}>
                                <div className={styles.timelineContentInner}>
                                    <div className={styles.yearBadge} style={{ background: 'linear-gradient(135deg, #00C9FF 0%, #0056D2 100%)' }}>2025</div>
                                    <h3 className={styles.nodeTitle} style={{ fontSize: '28px' }}>Orbiting New Heights</h3>
                                    <p className={styles.cardText}>
                                        Scaling into enterprise consultancy, becoming the bridge between talent and technology.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
                        <ScrollReveal delay={0.1}>
                            <div style={{
                                background: '#ffffff',
                                borderRadius: '24px',
                                padding: '50px 40px',
                                textAlign: 'center',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                cursor: 'pointer'
                            }}
                                className={`stat-card ${styles.statCard}`}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #4A90E2 0%, #0056D2 100%)';
                                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 86, 210, 0.3)';
                                    const number = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                                    const label = e.currentTarget.querySelector('div:last-child') as HTMLElement;
                                    if (number) number.style.color = '#fff';
                                    if (label) label.style.color = 'rgba(255,255,255,0.9)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.background = '#ffffff';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                                    const number = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                                    const label = e.currentTarget.querySelector('div:last-child') as HTMLElement;
                                    if (number) number.style.color = '#0070F3';
                                    if (label) label.style.color = '#666';
                                }}>
                                <div style={{ fontSize: '72px', fontWeight: '800', marginBottom: '16px', color: '#0070F3', lineHeight: '1', transition: 'color 0.4s ease' }}>
                                    <AnimatedCounter end={25} suffix="+" />
                                </div>
                                <div style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', color: '#666', letterSpacing: '1.5px', transition: 'color 0.4s ease' }}>Projects Delivered</div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div style={{
                                background: '#ffffff',
                                borderRadius: '24px',
                                padding: '50px 40px',
                                textAlign: 'center',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                cursor: 'pointer'
                            }}
                                className={`stat-card ${styles.statCard}`}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #4A90E2 0%, #0056D2 100%)';
                                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 86, 210, 0.3)';
                                    const number = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                                    const label = e.currentTarget.querySelector('div:last-child') as HTMLElement;
                                    if (number) number.style.color = '#fff';
                                    if (label) label.style.color = 'rgba(255,255,255,0.9)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.background = '#ffffff';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                                    const number = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                                    const label = e.currentTarget.querySelector('div:last-child') as HTMLElement;
                                    if (number) number.style.color = '#0070F3';
                                    if (label) label.style.color = '#666';
                                }}>
                                <div style={{ fontSize: '72px', fontWeight: '800', marginBottom: '16px', color: '#0070F3', lineHeight: '1', transition: 'color 0.4s ease' }}>
                                    <AnimatedCounter end={500} suffix="+" />
                                </div>
                                <div style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', color: '#666', letterSpacing: '1.5px', transition: 'color 0.4s ease' }}>Professionals Trained</div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div style={{
                                background: '#ffffff',
                                borderRadius: '24px',
                                padding: '50px 40px',
                                textAlign: 'center',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                cursor: 'pointer'
                            }}
                                className={`stat-card ${styles.statCard}`}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #4A90E2 0%, #0056D2 100%)';
                                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 86, 210, 0.3)';
                                    const number = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                                    const label = e.currentTarget.querySelector('div:last-child') as HTMLElement;
                                    if (number) number.style.color = '#fff';
                                    if (label) label.style.color = 'rgba(255,255,255,0.9)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.background = '#ffffff';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                                    const number = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                                    const label = e.currentTarget.querySelector('div:last-child') as HTMLElement;
                                    if (number) number.style.color = '#0070F3';
                                    if (label) label.style.color = '#666';
                                }}>
                                <div style={{ fontSize: '72px', fontWeight: '800', marginBottom: '16px', color: '#0070F3', lineHeight: '1', transition: 'color 0.4s ease' }}>
                                    <AnimatedCounter end={10} suffix="+" />
                                </div>
                                <div style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', color: '#666', letterSpacing: '1.5px', transition: 'color 0.4s ease' }}>Industry Partners</div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section style={{
                padding: '120px 0',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url(/visionaries-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '42px', fontWeight: '800', marginBottom: '16px', color: '#0070F3', display: 'inline-block', width: '100%' }}>
                        <WordReveal text="Meet the Visionaries" />
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '18px', maxWidth: '700px', margin: '0 auto 24px', lineHeight: '1.7' }}>Led by a team of experienced technologists and business leaders</p>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '80px', fontSize: '16px', maxWidth: '800px', margin: '0 auto 80px', lineHeight: '1.8' }}>Our founding team brings together decades of experience in software development, enterprise architecture, product management, and business strategy. We're passionate about building solutions that make a real difference for our clients and their customers.</p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        {teamMembers.map((member, index) => (
                            <div key={index} style={{ flex: '1', minWidth: '320px', maxWidth: '400px' }}>
                                <ScrollReveal delay={index * 0.1}>
                                    <TeamMember member={member} index={index} />
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.responsiveSection} style={{ background: '#0B0F19', overflow: 'hidden' }}>
                <div className="container">
                    <div className={styles.responsiveFlex}>

                        {/* Left Side: Content */}
                        {/* Left Side: Content */}
                        <div className={styles.responsiveCol} style={{ maxWidth: '600px' }}>
                            <h2 style={{ fontSize: '36px', marginBottom: '40px', fontWeight: '800', color: '#ffffff' }}>
                                <WordReveal text="Frequently Asked Questions" />
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                {[
                                    {
                                        question: "What makes Algo Orbit different from others?",
                                        answer: "Unlike traditional training centers that focus on syntax, we engineer careers. Our collaborative, project-based curriculum is reverse-engineered from actual industry demands, ensuring you master the high-impact AI, Cloud, and Full Stack technologies that modern enterprises desperately need."
                                    },
                                    {
                                        question: "Do students get certificates?",
                                        answer: "Absolutely. Upon successful completion of our rigorous programs, students receive industry-recognized certifications. These aren't just papers; they are validations of practical mastery and project execution capabilities that you can showcase on LinkedIn and resumes."
                                    },
                                    {
                                        question: "How do colleges benefit from MoU?",
                                        answer: "Partnering through an MoU (Memorandum of Understanding) empowers institutions with instant access to our cutting-edge curriculum, faculty development programs, and a direct pipeline for student internships and placements. It effectively bridges the gap between static academic theory and dynamic industry application."
                                    }
                                ].map((item, index) => (
                                    <FAQItem key={index} item={item} />
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Illustration */}
                        {/* Right Side: Illustration */}
                        <div className={styles.responsiveCol} style={{ maxWidth: '500px', display: 'flex', justifyContent: 'center' }}>
                            <div className={styles.floatingImage} style={{ position: 'relative' }}>
                                {/* Background Glow */}
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '120%',
                                    height: '120%',
                                    background: 'radial-gradient(circle, rgba(0,112,243,0.15) 0%, rgba(0,0,0,0) 70%)',
                                    borderRadius: '50%',
                                    zIndex: 0
                                }}></div>
                                <img
                                    src="/faq-illustration.png"
                                    alt="FAQ Illustration"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        filter: 'drop-shadow(0 20px 40px rgba(0,112,243,0.15))',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            {/* CTA */}
            < section style={{ padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* Background Decorative Bloom */}
                < div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(121,40,202,0.1) 0%, rgba(0,0,0,0) 70%)',
                    pointerEvents: 'none',
                    animation: 'pulse-glow 8s infinite'
                }}></div >

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
                                color: '#1a202c',
                                letterSpacing: '-1px',
                                textAlign: 'center'
                            }}>
                                <WordReveal text="Ready to Orbit?" />
                            </h2>
                            <p style={{ fontSize: '22px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6', textAlign: 'center' }}>
                                Join Algo Orbit Innovations and launch your digital transformation today.
                            </p>
                            <div style={{ textAlign: 'center' }}>
                                <button className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '18px', borderRadius: '50px', boxShadow: '0 10px 25px rgba(0,118,243,0.3)', transition: 'transform 0.2s' }}>
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
