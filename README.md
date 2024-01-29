# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 说明

* 开发环境：node 20.10.0 + npm 10.2.3
* 构建工具：vite 5.0.8
* 前端框架：vue 3.3.11
* 路由工具：Vue Router 4.2.5
* 状态管理：Vuex 4.0.2
* UI 框架：Ant Design Vue 4.1.0
* CSS 预编译：Sass 1.69.7
* HTTP 工具：Axios 1.6.5
* 代码规范：ESLint + Volar

### 初始化 Eslint 配置

<code>npm init @eslint/config</code>

* √ How would you like to use ESLint? · problems
* √ What type of modules does your project use? · esm
* √ Which framework does your project use? · vue
* √ Does your project use TypeScript? · No / Yes
* √ Where does your code run? · browser
* √ What format do you want your config file to be in? · JavaScript

### vite.config.ts 配置

1. 安装并导入 vite-plugin-eslint

<code>npm i vite-plugin-eslint --save-dev</code>
<pre>
  import eslintPlugin from 'vite-plugin-eslint';
  export default defineConfig({
      plugins: [
          vue(),
          eslintPlugin({
                  fix: true, //修复错误
                  include: [
                          'src/**/*.vue',
                          'src/**/*.ts',
                          'src/**/*.js'
                  ],
          }),
      ]
  })
</pre>
