/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6',
                secondary: '#7928ca',
                accent: '#79ffe1',
                dark: {
                    primary: '#60a5fa',
                    secondary: '#7928ca',
                    accent: '#79ffe1',
                    text: '#fff',
                    'text-secondary': '#888',
                    background: '#000',
                    'background-secondary': '#111',
                    'background-tertiary': '#171717',
                    border: '#333',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'custom': '0 4px 14px rgba(0, 0, 0, 0.1)',
                'dark': '0 4px 14px rgba(0, 0, 0, 0.25)',
            },
            animation: {
                'morph': 'morph 8s ease-in-out infinite',
                'pulse-slow': 'pulse 10s infinite',
                'cube-rotate': 'cubeRotate 12s linear infinite',
                'cube-float': 'cubeFloat 4s ease-in-out infinite',
                'cube-glow': 'cubeGlow 3s ease-in-out infinite',
            },
            keyframes: {
                morph: {
                    '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                    '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                },
                pulse: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
                cubeRotate: {
                    '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
                    '25%': { transform: 'rotateX(90deg) rotateY(90deg) rotateZ(0deg)' },
                    '50%': { transform: 'rotateX(180deg) rotateY(180deg) rotateZ(90deg)' },
                    '75%': { transform: 'rotateX(270deg) rotateY(270deg) rotateZ(180deg)' },
                    '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
                },
                cubeFloat: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                cubeGlow: {
                    '0%, 100%': { 
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2), 0 0 60px rgba(59, 130, 246, 0.1)',
                    },
                    '50%': { 
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4), 0 0 90px rgba(59, 130, 246, 0.2)',
                    },
                },
            }
        },
    },
    plugins: [],
}