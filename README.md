# 智能聊天系统

- 需求说明
- 安装教程
- 相关接口
- 数据库设计
- 技术栈
- 运行效果

### 一、需求说明

1.2

### 二、安装教程

- 环境准备
- 如何运行
- 项目配置

#### 2.1 环境准备

要运行**智能聊天系统**，你需要`Node.js(V10 LTS版本，例如10.6.3)`开发环境和`MySql`数据库

- 安装 Node.js
  - 官网[http://nodejs.cn/download/](http://nodejs.cn/download/)
  - 更推荐使用 nvm 安装 Node.js
    - 安装 nvm
    - 通过 nvm 安装 Node.js
- 安装 MySql

推荐在 Linux 和 MacOS 系统中运行，Windows 系统也兼容的，但是遇到意外问题会多一些

#### 2.2 如何运行

- 本地运行（开发模式）
- 服务器上运行

#### 2.3 项目配置

配置列表

- 服务配置
- 客户端配置
- 客户端构建配置

### 三、相关接口

### 四、数据库设计

#### 4.1 用户表

### 五、技术栈

- **Vue 2.6**：前端页面展示
- **Socket.io**：实现实时通信
- **Vuex**：Vuex，实现不同组件间的状态共享
- **Vue-router**：页面路由切换
- **axios**：一个基于`Promise`的 HTTP 库，向后端发起请求。
- **Koa2**：一个`node.js`web 应用框架
- **Monment.js**：一个时间处理的库，方便对时间进行格式化成需要的格式。
- **ES6、ES7**：采用 ES6 语法，箭头函数、`Promise`等等语法很好用。
- **MySql**：开源数据库
- **Webpack**：前端打包工具。
- **SASS(SCSS)**：用 SCSS 做 CSS 预处理语言，有些地方很方便。
- **flex**：flex 弹性布局，简单适配手机、PC 端。
- **CSS3**：CSS3 过渡动画及样式。

### 六、运行效果

#### 6.1 登录页面

![images](./publice/login.png)

#### 6.2 群聊页面

![images](./publice/chatting.png)

#### 6.3 智能聊天页面

![images](./publice/ai.png)

### 总结

### 参考资料

- [Node.js 文档](https://nodejs.org/docs/latest-v11.x/api/)
- [Koa 文档](https://koajs.com/)
- [Sockit.io 文档](https://socket.io/)
- [Vue.js 文档](https://vuejs.org/)
