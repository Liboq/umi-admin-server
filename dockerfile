# 使用 Node.js 官方镜像作为基础
FROM node:latest

# 设置工作目录
WORKDIR /app

# 复制 package.json、pnpm-lock.yaml 或 pnpmfile.js 到工作目录
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm
RUN npm install -g pnpm

# 安装 Nest.js 依赖项
RUN npm install

# 复制应用程序代码到工作目录
COPY . .

# 设置 Nginx 镜像
FROM nginx:alpine

# 复制 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/admin_end.conf

# 暴露 Nest.js 应用程序的默认端口（假设默认端口是 3000）
EXPOSE 1101

# 启动 Nest.js 应用程序
CMD ["pnpm", "run", "start"]
