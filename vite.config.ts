export default {
    root: './src',
    base: process.env.NETLIFY ? '/' : '/Map-Generator/',
    build: {
        outDir: '../dist',
        assetsDir: './',
    },
    publicDir: '../public',
}