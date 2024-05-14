/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                ss: '280px',
                xs: '428px',
                '3xl': '1920px',
                '4xl': '2560px'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans'],
                roboto: ['Roboto', 'sans-serif'],
                serif: ['DM Serif Display', 'serif']
            },
            spacing: {
                45.5: '11.375rem',
                101.5: '25.375rem',
                106.7: '26.5rem',
                110: '27.5rem',
                112.5: '28.125rem',
                116.25: '29.0625rem',
                127: '31.75rem',
                131: '32.75rem',
                137: '34.25rem',
                142.4: '35.625rem',
                144.5: '36.125rem',
                159.5: '39.875rem',
                162.5: '40.625rem',
                175: '43.75rem',
                192.5: '48.125rem',
                210: '52.5rem',
                230.25: '57.5625rem',
                250: '62.5rem',
                270: '67.5rem',
                287.5: '71.875rem',
                330: '82.5rem',
                344.5: '86.125rem',
                389: '97.25rem'
            },
            colors: {
                gray: {
                    75: '#F7F7F7',
                    425: '#828796',
                    475: '#7B7B7B',
                    525: '#707070'
                },
                slate: {
                    550: '#696969',
                    725: '#2F3750',
                    925: '#0B1226'
                },
                zinc: {
                    75: '#F4F8FF',
                    850: '#272727'
                },
                blue: {
                    575: '#0A66EC',
                    850: '#253F9C'
                },
                neutral: {
                    575: '#555555'
                },
                orange: {
                    light: '#E5C090'
                }
            },
            fontSize: {
                '2.5xl': '1.6875rem',
                '4.5xl': '2.5rem',
                '4.7xl': '2.75rem',
                '5.5xl': '3.25rem',
                '5.7xl': '3.5rem',
                '7.5xl': '5rem',
                '7.7xl': '5.3125rem'
            },
            lineHeight: {
                11: '3rem',
                12: '3.25rem',
                13: '3.5rem',
                14: '3.75rem',
                15: '4.25rem',
                16: '4.5rem',
                17: '5rem',
                18: '5.8125rem',
                19: '6rem'
            },
            borderRadius: {
                40: '2.5rem',
                8: '2rem'
            }
        }
    },
    plugins: []
};