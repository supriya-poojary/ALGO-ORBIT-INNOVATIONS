import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#050914', color: '#fff', paddingTop: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', paddingBottom: '60px' }}>

                    {/* Brand Column */}
                    <div style={{ maxWidth: '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                            <Image
                                src="/footer-logo-icon.png"
                                alt="Algo Orbit Logo"
                                width={48}
                                height={48}
                                style={{ width: '48px', height: 'auto' }}
                                className="hover-scale"
                            />
                            <div style={{ lineHeight: '1.2' }}>
                                <div style={{ fontSize: '24px', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px' }}>Algo Orbit</div>
                            </div>
                        </div>
                        <p style={{ color: '#8892b0', fontSize: '14px', lineHeight: '1.6' }}>
                            AI Twin • IT Consultancy • Education <br />
                            From Campus to Corporate.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px', color: '#fff' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Home', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} style={{ color: '#8892b0', fontSize: '14px', transition: 'color 0.2s' }} className="hover:text-white">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px', color: '#fff' }}>Services</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['IT Consulting', 'Enterprise Training'].map((item) => (
                                <li key={item}>
                                    <Link href="#" style={{ color: '#8892b0', fontSize: '14px', transition: 'color 0.2s' }}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px', color: '#fff' }}>Products</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['KX26 - NetaWatch', 'Restaurant POS System'].map((item) => (
                                <li key={item}>
                                    <Link href="#" style={{ color: '#8892b0', fontSize: '14px', transition: 'color 0.2s' }}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    padding: '32px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <div style={{ color: '#8892b0', fontSize: '14px' }}>
                        © 2026 <span style={{ fontWeight: '700', color: '#fff' }}>Algo Orbit Innovations Pvt. Ltd.</span> All rights reserved.
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {[
                            // LinkedIn
                            <svg key="li" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
                            // Instagram
                            <svg key="ig" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
                            // Facebook
                            <svg key="fb" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
                            // WhatsApp
                            <svg key="wa" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        ].map((icon, index) => (
                            <div key={index} style={{ color: '#8892b0', cursor: 'pointer', transition: 'color 0.2s' }} className="hover-icon">
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
