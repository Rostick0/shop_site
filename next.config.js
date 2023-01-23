/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils')
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig
