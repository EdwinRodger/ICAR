// Minimal postbuild to ensure all images end up in dist/images and path references are ./ relative
// This script:
// 1) Moves any images currently in dist root or dist/assets to dist/images
// 2) Rewrites references inside dist/**/*.html, dist/**/*.css, dist/**/*.js to point to ./images/ for moved files

const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const imagesDir = path.join(distDir, 'images');

const imageExts = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif', '.ico']);

function ensureDir(p) {
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function listFilesRecursive(dir) {
    const out = [];
    for (const entry of fs.readdirSync(dir)) {
        const full = path.join(dir, entry);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) out.push(...listFilesRecursive(full));
        else out.push(full);
    }
    return out;
}

function moveAndRewrite() {
    if (!fs.existsSync(distDir)) return;
    ensureDir(imagesDir);

    // Map of oldRelativePath -> newRelativePath (both relative to distDir)
    const movedMap = new Map();

    // 1) Move images from dist root
    for (const entry of fs.readdirSync(distDir)) {
        const full = path.join(distDir, entry);
        const ext = path.extname(entry).toLowerCase();
        if (fs.statSync(full).isFile() && imageExts.has(ext)) {
            const dest = path.join(imagesDir, entry);
            fs.renameSync(full, dest);
            movedMap.set(`./${entry}`, `./images/${entry}`);
            movedMap.set(`${entry}`, `./images/${entry}`);
            movedMap.set(`/${entry}`, `./images/${entry}`);
        }
    }

    // 2) Move images from dist/assets to dist/images
    const assetsDir = path.join(distDir, 'assets');
    if (fs.existsSync(assetsDir)) {
        for (const entry of fs.readdirSync(assetsDir)) {
            const full = path.join(assetsDir, entry);
            if (fs.statSync(full).isFile()) {
                const ext = path.extname(entry).toLowerCase();
                if (imageExts.has(ext)) {
                    const dest = path.join(imagesDir, entry);
                    fs.renameSync(full, dest);
                    movedMap.set(`./assets/${entry}`, `./images/${entry}`);
                    movedMap.set(`assets/${entry}`, `./images/${entry}`);
                    movedMap.set(`/assets/${entry}`, `./images/${entry}`);
                }
            }
        }
    }

    // 3) Rewrite references in html, css, js inside dist
    const textExts = new Set(['.html', '.css', '.js']);
    const files = listFilesRecursive(distDir).filter(f => textExts.has(path.extname(f)));
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        // Replace exact moved paths first
        for (const [oldRef, newRef] of movedMap.entries()) {
            const safeOld = oldRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = new RegExp(safeOld, 'g');
            content = content.replace(re, newRef);
        }
        // Normalize malformed sequences from any overlapping replacements
        content = content
            .replace(/\/\.\//g, './') // '/./' -> './'
            .replace(/\.\/images\.\/images\//g, './images/') // './images./images/' -> './images/'
            .replace(/\.\/\.\//g, './') // '././' -> './'
            .replace(/([^:])\/images\/\.\/images\//g, '$1/images/') // '/images/./images/' -> '/images/'
            .replace(/(href=|src=|url\()"\/(images\/[^"\)]+)"/g, '$1"./$2"') // convert "/images/..." -> "./images/..."
        ;
        fs.writeFileSync(file, content, 'utf8');
    }
}

try {
    moveAndRewrite();
    console.log('Postbuild images step completed.');
} catch (err) {
    console.error('Postbuild images step failed:', err);
    process.exitCode = 1;
}


