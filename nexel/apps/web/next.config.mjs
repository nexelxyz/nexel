/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compile the shared workspace UI package (JSX + CSS).
  transpilePackages: ["@nexel/ui"],
};

export default nextConfig;
