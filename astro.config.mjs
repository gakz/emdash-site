import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://emdashmail.com',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react(), sitemap()],
    adapter: netlify({
        devFeatures: {
            environmentVariables: true
        }
    })
});
