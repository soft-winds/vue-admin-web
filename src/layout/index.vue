<template>
  <a-layout style="height: 100%">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <Menu :menuList="menuList"></Menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-flex justify="space-between" align="center" style="height: 64px">
          <font-awesome-icon
            icon="fa-soild fa-align-left"
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <font-awesome-icon
            icon="fa-soild fa-align-right"
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <a-space style="margin-right: 16px" :size="25">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            <font-awesome-icon :icon="['fas', 'bell']" />
            <font-awesome-icon :icon="['fas', 'shirt']" />
            <font-awesome-icon :icon="['fas', 'language']" />
            <a-dropdown>
              <div>
                <a-avatar :size="24" src="https://www.antdv.com/assets/logo.1ef800a8.svg" />
                王晓宇
              </div>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="0">
                    <a target="_blank" rel="noopener noreferrer"> 个人信息 </a>
                  </a-menu-item>
                  <a-menu-item key="1">
                    <a target="_blank" rel="noopener noreferrer"> 修改密码 </a>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="3">退出系统 </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

            <font-awesome-icon :icon="['fas', 'gear']" />
          </a-space>
        </a-flex>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <RouterView></RouterView>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import Menu from '@/components/menu.vue'
import { menuList } from '@/mock/menu'
const collapsed = ref<boolean>(false)
</script>

<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
