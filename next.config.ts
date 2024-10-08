import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'src/styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'snippet.utkarsh.app',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'another-example.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;