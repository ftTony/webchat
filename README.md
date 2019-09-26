# 智能聊天系统

- 需求说明
- 安装教程
- 相关接口
- 数据库设计
- 技术栈
- 运行效果

### 一、需求说明

#### 1.1 需求背景

#### 1.2 需求要求

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

- 客户端访问
- 服务器上配置

**客户端运行说明**

访问地址：[http://chat.xiaowuzi.info](http://chat.xiaowuzi.info)

> 请使用 IE8 以上浏览访问或手机访问

**服务器上配置**

#### 2.3 项目配置

配置列表

- 服务配置
- 客户端配置
- 客户端构建配置

### 三、相关接口

#### 3.1 注册接口

#### 3.2 修改头像

#### 3.3 添加好友

#### 3.4 删除好友

#### 3.5 修改密码

#### 3.6 修改用户名

#### 3.7 重围指定用户密码

#### 3.8 发送消息

#### 3.9 获取联系人历史消息

#### 3.10 获取默认群组的历史消息

### 四、数据库设计

#### 4.1 用户表

**创建语句**

```
CREATE TABLE   IF NOT EXISTS  `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `detail_info` json DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

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
