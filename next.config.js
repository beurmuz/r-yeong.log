/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "https://beurmuz.github.io/";

const nextConfig = {
  reactStrictMode: true,
  // basePath: "/{beurmuz.github.io}",
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

module.exports = nextConfig;

export const prefix =
  process.env.NODE_ENV === "production" ? "https://beurmuz.github.io/" : "";
