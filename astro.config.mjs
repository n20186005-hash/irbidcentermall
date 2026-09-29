import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 全站纯静态预渲染（output: static），产物直接交给 Workers Static Assets 托管。
// 不挂 Cloudflare 适配器：它生成的 _worker.js 会拦截静态文件请求并做 .html 重定向。
export default defineConfig({
  // site 必须设置，@astrojs/sitemap 才能产出绝对 URL 的 sitemap-index.xml。
  site: 'https://irbidcentermall.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
