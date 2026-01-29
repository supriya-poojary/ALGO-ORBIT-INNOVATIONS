import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav style={{
            height: 'var(--header-height)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Image src="/logo.png" alt="Algo Orbit Logo" width={32} height={32} style={{ objectFit: 'contain' }} />
                    <div style={{ fontWeight: 800, fontSize: '20px', letterSpacing: '-0.5px', background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textTransform: 'uppercase' }}>
                        ALGO ORBIT INNOVATIONS
                    </div>
                </Link>
                <div style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>
                    <Link href="/" style={{ cursor: 'pointer' }}>Home</Link>
                    <Link href="/about" style={{ color: 'var(--primary-color)', fontWeight: 600, cursor: 'pointer' }}>About</Link>
                    <Link href="#" style={{ cursor: 'pointer' }}>Services</Link>
                    <Link href="#" style={{ cursor: 'pointer' }}>Contact</Link>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <button className="btn btn-outline" style={{ height: '40px', fontSize: '14px', borderRadius: '8px' }}>Log In</button>
                    <button className="btn btn-primary" style={{ height: '40px', fontSize: '14px', borderRadius: '8px', padding: '0 20px' }}>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
