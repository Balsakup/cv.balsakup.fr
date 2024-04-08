import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/html/**/*.html',
        './src/css/*.css'
    ],
    theme: {
        extend: {
            typography: ({theme}) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.slate[700]'),
                        a: {
                            color: theme('colors.green[500]'),
                            textDecoration: 'none',
                            '&:hover': {
                                color: theme('colors.green[600]')
                            }
                        }
                    }
                }
            }),
            fontFamily: {
                'sans': ['Inter', ...defaultTheme.fontFamily.sans]
            }
        },
        container: {
            center: true
        }
    },
    plugins: [
        typography
    ]
};
