/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    // Trailing slash ensures proper routing on GitHub Pages
    trailingSlash: true,
};

export default nextConfig;
