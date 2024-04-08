import {defineConfig} from 'vite';
import {resolve} from 'path';
import handlebars from 'vite-plugin-handlebars';
import experiences from './data/experiences.js';
import education from './data/education.js';
import skills from './data/skills.js';

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/html'),
            context: {
                experiences,
                education,
                skills
            }
        })
    ]
});
