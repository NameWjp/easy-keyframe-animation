module.exports = {
  configureWebpack: {
    resolve: {
      // 不使用 link 的真实路径，解决 corejs 报错问题
      symlinks: false,
    },
    // webpack 默认忽略 node_modules 中的改动，这里配置成忽略除了 easy-keyframe-animation 外的改动
    watchOptions: {
      ignored: /node_modules\/(?!easy-keyframe-animation).+/
    }
  }
};
