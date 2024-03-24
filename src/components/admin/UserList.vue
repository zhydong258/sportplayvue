<template>
  <div>
    用户列表
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 用户列表主题 -->
    <el-card>
      <el-row :gutter="25">
        <!-- 搜索区域 -->
        <!-- 搜索添加 -->
        <el-col :span="10">
          <el-input placeholder="请输入搜索内容">
            <el-button slot="append" icon="el-icon-search"></el-button> </el-input></el-col>
        <!-- 搜索按钮 -->
        <el-col :span="10">
          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
      <span>{{ userList }}</span>
    </el-card>
  </div>
</template>

<script>
export default {
  created() {
    this.getUserList();
  },
  data() {
    return {
      // 查询信息实体
      queryInfo: {
        query: "", // 查询信息
        pageNum: 1, // 当前页
        pageSize: 5, // 每页最大数
      },
      userList: [], // 用户列表
      total: 0, // 总记录数
    };
  },
  methods: {
    // 获取所有用户
    async getUserList() {
      const { data: res } = await this.$http.get("alluser", {
        params: this.queryInfo,
      });
      this.userList = res.data;
      this.total = res.number;
    },
  },
};
</script>

<style lang="less" scoped>
.el-breadcrumb {
  margin-bottom: 15px;
  font-size: 17px;
}
</style>
