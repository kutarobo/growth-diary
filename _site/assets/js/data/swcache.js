const resource = [
    /* --- CSS --- */
    '/growth-diary/assets/css/style.css',

    /* --- PWA --- */
    '/growth-diary/app.js',
    '/growth-diary/sw.js',

    /* --- HTML --- */
    '/growth-diary/index.html',
    '/growth-diary/404.html',

    
        '/growth-diary/categories/',
    
        '/growth-diary/tags/',
    
        '/growth-diary/archives/',
    
        '/growth-diary/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/growth-diary/assets/img/favicons/android-chrome-192x192.png',
        '/growth-diary/assets/img/favicons/android-chrome-512x512.png',
        '/growth-diary/assets/img/favicons/apple-touch-icon.png',
        '/growth-diary/assets/img/favicons/favicon-16x16.png',
        '/growth-diary/assets/img/favicons/favicon-32x32.png',
        '/growth-diary/assets/img/favicons/favicon.ico',
        '/growth-diary/assets/img/favicons/mstile-150x150.png',
        '/growth-diary/assets/js/dist/categories.min.js',
        '/growth-diary/assets/js/dist/commons.min.js',
        '/growth-diary/assets/js/dist/home.min.js',
        '/growth-diary/assets/js/dist/misc.min.js',
        '/growth-diary/assets/js/dist/page.min.js',
        '/growth-diary/assets/js/dist/post.min.js',
        '/growth-diary/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    
        'raw.githubusercontent.com',
    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

