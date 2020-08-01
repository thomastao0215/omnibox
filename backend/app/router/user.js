module.exports = app => {
  const { controller, middleware, apiV1Router } = app;

  // 用户注册
  apiV1Router.post('/user', app.jwt, controller.user.register);

  // 用户登录
  apiV1Router.post('/user/login', controller.user.login);

  // 获取用户列表
  apiV1Router.get('/user', app.jwt, middleware.pagination, controller.user.getAllUser);

  // 更新用户信息
  apiV1Router.put('/user/:id', app.jwt, controller.user.updateUserInfo);

  // 删除用户信息
  apiV1Router.delete('/user/:id', app.jwt, controller.user.deleteUserById);

};
