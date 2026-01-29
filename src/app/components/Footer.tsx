import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000', color: '#fff', padding: '64px 0 24px' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '48px', marginBottom: '48px' }}>
                    <div>
                        <h3 style={{ color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '18px' }}>Algo Orbit Innovations</h3>
                        <p style={{ maxWidth: '300px', color: '#ccc', fontSize: '14px' }}>
                            Shaping the future with AI. Empowering innovation across enterprises.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '16px' }}>Company</h4>
                        <ul style={{ listStyle: 'none', fontSize: '14px', color: '#ccc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '16px' }}>Support</h4>
                        <ul style={{ listStyle: 'none', fontSize: '14px', color: '#ccc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li>Contact Support</li>
                            <li>FAQ</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #333', paddingTop: '24px', textAlign: 'center', fontSize: '12px', color: '#666' }}>
                    © 2026 Algo Orbit Innovations. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
