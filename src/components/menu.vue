<script lang="tsx">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },

  setup({ menuList }) {
    const route = useRoute()
    const router = useRouter()
    const openKeys = ref([...(route.meta.parent ? [route.meta.parent] : [])])
    const selectedKeys = ref([route.path])

    const slot = (v: any) => {
      return {
        icon: () => <font-awesome-icon icon={v.icon}></font-awesome-icon>
      }
    }
    const render = () => {
      return menu()
    }
    const menu = () => {
      return (
        <a-menu
          mode="inline"
          theme="dark"
          selectedKeys={selectedKeys.value}
          openKeys={openKeys.value}
          onClick={selectMenu}
        >
          {menuItem(menuList)}
        </a-menu>
      )
    }
    const menuItem: any = (data: any) => {
      return data.map((v: any) => {
        if (v.children && v.children.length > 0) {
          return (
            <a-sub-menu key={v.path} title={v.title} v-slots={slot(v)}>
              {menuItem(v.children)}
            </a-sub-menu>
          )
        } else {
          return (
            <a-menu-item key={v.path} v-slots={slot(v)}>
              <span>{v.title}</span>
            </a-menu-item>
          )
        }
      })
    }
    const selectMenu = ({ key }: any) => {
      selectedKeys.value = [key]
      router.push(key)
    }
    return () => [selectedKeys, openKeys, render()]
  }
})
</script>
<style scoped>
svg {
  width: 16px;
  height: 16px;
}
</style>
