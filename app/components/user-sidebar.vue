<script lang="ts" setup>
import { useSidebar } from './ui/sidebar'

const { open, setOpen, openMobile, setOpenMobile } = useSidebar()
<<<<<<< HEAD
const tabs = ref<'journal' | 'chat'>('journal')
const chatHistory = reactive<History>({
  today: [],
  yesterday: [],
  thisMonth: [],
  other: [],
})
const journalHistory = reactive<History>({
  today: [],
  yesterday: [],
  thisMonth: [],
  other: [],
})
=======
const tabs = ref<'diary' | 'chat'>('diary')
>>>>>>> afb7cdc (Add custom favicon with brain circuit design in SVG format)

// Sample data for demo purposes
const sampleDiaryEntries = ref([
  { id: 1, title: "Morning Reflections", href: "/diaries/1" },
  { id: 2, title: "Creative Writing", href: "/diaries/2" },
  { id: 3, title: "Daily Insights", href: "/diaries/3" },
])

<<<<<<< HEAD
const {
  data: dataChat,
  refresh: refreshChat,
  status: statusChat,
} = useFetch<ApiChatHistoryItem[]>('/api/m/chats/', {
  method: 'get',
})

const {
  data: dataJournal,
  refresh: refreshJournal,
  status: statusJournal,
} = useFetch<ApiChatHistoryItem[]>('/api/m/journals/', {
  method: 'get',
})

// route变化的时候refresh数据
watch(route, async () => {
  await refreshChat()
  await refreshJournal()
})

// data更新时自动做操作
watch(
  dataChat,
  (newData) => {
    if (newData) {
      if (statusChat.value === 'success') {
        chatHistory.today = []
        chatHistory.yesterday = []
        chatHistory.thisMonth = []
        chatHistory.other = []

        const transfer = (originalData: ApiChatHistoryItem): RenderingItem => {
          return {
            href: `/chats/${originalData._id}`,
            name: originalData.title,
            rename: `/api/m/chats/rename/${originalData._id}`,
            // delete: `https://mindforgeserver.onrender.com/api/chats/delete/${originalData._id}`,
            delete: `/api/m/chats/delete/${originalData._id}`,
            _id: originalData._id,
          }
        }

        // 根据nonTitleUpdatedAt字段来排序 从新到旧
        newData.sort((a, b) => b.nonTitleUpdatedAt - a.nonTitleUpdatedAt)
        // 将数据分组
        newData.forEach((item) => {
          if (new Date(item.nonTitleUpdatedAt).getDate() === new Date().getDate()) {
            // 如果在同一天
            chatHistory.today.push(transfer(item))
          }
          else if (new Date(item.nonTitleUpdatedAt).getDate() === new Date().getDate() - 1) {
            // 如果是昨天
            chatHistory.yesterday.push(transfer(item))
          }
          else if (new Date(item.nonTitleUpdatedAt).getMonth() === new Date().getMonth()) {
            // 如果是更早的
            chatHistory.thisMonth.push(transfer(item))
          }
          else {
            // 如果是其他时间
            chatHistory.other.push(transfer(item))
          }
        })
      }
      else {
        // 出现问题 有空再处理
        console.error(dataChat.value, statusChat.value)
      }
    }
  },
  { immediate: true },
)

watch(
  dataJournal,
  (newData) => {
    if (newData) {
      if (statusJournal.value === 'success') {
        journalHistory.today = []
        journalHistory.yesterday = []
        journalHistory.thisMonth = []
        journalHistory.other = []

        const transfer = (originalData: ApiChatHistoryItem): RenderingItem => {
          return {
            href: `/journals/${originalData._id}`,
            name: originalData.title,
            rename: `/api/m/journals/rename/${originalData._id}`,
            delete: `/api/m/journals/delete/${originalData._id}`,
            _id: originalData._id,
          }
        }

        // 根据nonTitleUpdatedAt字段来排序 从新到旧
        newData.sort((a, b) => b.nonTitleUpdatedAt - a.nonTitleUpdatedAt)
        // 将数据分组
        newData.forEach((item) => {
          if (new Date(item.nonTitleUpdatedAt).getDate() === new Date().getDate()) {
            // 如果在同一天
            journalHistory.today.push(transfer(item))
          }
          else if (new Date(item.nonTitleUpdatedAt).getDate() === new Date().getDate() - 1) {
            // 如果是昨天
            journalHistory.yesterday.push(transfer(item))
          }
          else if (new Date(item.nonTitleUpdatedAt).getMonth() === new Date().getMonth()) {
            // 如果是更早的
            journalHistory.thisMonth.push(transfer(item))
          }
          else {
            // 如果是其他时间
            journalHistory.other.push(transfer(item))
          }
        })
      }
      else {
        // 出现问题 有空再处理
        console.error(dataChat.value, statusChat.value)
      }
    }
  },
  { immediate: true },
)

async function create() {
  if (tabs.value === 'chat') {
    // 这里为什么不用乐观更新呢?
    // 因为我们需要id 然后用户才能进入界面
    // 所以我们可以用load动画配合处理 先发请求 发完请求就href到新的

    try {
      const data = await $fetch<{
        _id: string
      }>('/api/m/chats', {
        method: 'post',
      })

      if (data && data._id) {
        // 成功创建了新的聊天
        await refreshChat()
        await navigateTo(`/chats/${data._id}`, {
          replace: true,
        })
      }
    }
    catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  else {
    try {
      const data = await $fetch<{
        _id: string
      }>('/api/m/journals', {
        method: 'post',
        body: {
          title: 'New Journal',
        },
      })

      if (data && data._id) {
        // 成功创建了新的聊天
        await refreshChat()
        await navigateTo(`/journals/${data._id}`, {
          replace: true,
        })
      }
    }
    catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

const breakpoints = useBreakpoints({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
})
const isMobile = breakpoints.smaller('md')
=======
const sampleChatEntries = ref([
  { id: 1, title: "Project Ideas", href: "/chats/1" },
  { id: 2, title: "Problem Solving", href: "/chats/2" },
  { id: 3, title: "Brainstorming", href: "/chats/3" },
])
>>>>>>> afb7cdc (Add custom favicon with brain circuit design in SVG format)

function changeOpen() {
  setOpen(!open.value)
}

function changeOpenMobile() {
  setOpenMobile(!openMobile.value)
}

async function createNew() {
  if (tabs.value === 'chat') {
    // For demo purposes, navigate to a sample chat
    await navigateTo('/chats')
  } else {
    // For demo purposes, navigate to a sample diary
    await navigateTo('/diaries')
  }
}
</script>

<template>
  <ClientOnly>
    <Sidebar collapsible="icon">
      <SidebarHeader :class="open ? 'p-4 ' : 'py-4'">
        <div :class="`flex items-center flex-row${open ? ' justify-between' : ' justify-center'}`">
          <div v-if="open" class="flex items-center gap-2">
            <div class="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="lucide:brain-circuit" class="w-3 h-3 text-primary-foreground" />
            </div>
            <span class="font-semibold text-sm">MindForge</span>
          </div>
          <Button variant="outline" size="icon" class="!w-8 !h-8 sm:flex hidden">
            <Icon v-if="open" name="ri:menu-fold-line" class="text-xl" @click="changeOpen" />
            <Icon v-else name="ri:menu-fold-2-line" class="text-xl" @click="changeOpen" />
          </Button>
          <Button variant="outline" size="icon" class="!w-8 !h-8 flex sm:hidden" @click="changeOpenMobile">
            <Icon v-if="openMobile" name="ri:menu-fold-line" class="text-xl" />
            <Icon v-else name="ri:menu-unfold-line" class="text-xl" />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
<<<<<<< HEAD
        <Tabs
          v-if="(!isMobile && open) || isMobile"
          v-model:model-value="tabs"
          default-value="journal"
        >
          <div class="px-2 w-full">
            <TabsList class="w-full">
              <TabsTrigger value="journal">
                <Icon name="system-uicons:notebook" class="text-xl" />
                <span v-if="open">Journals</span>
              </TabsTrigger>
              <TabsTrigger value="chat">
                <Icon name="humbleicons:chats" class="text-xl" />
                <span v-if="open">Chats</span>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="journal">
            <SidebarItemRenderer
              v-if="journalHistory.today.length > 0"
              title="Today"
              :data="journalHistory.today"
            />
            <SidebarItemRenderer
              v-if="journalHistory.yesterday.length > 0"
              title="Yesterday"
              :data="journalHistory.yesterday"
            />
            <SidebarItemRenderer
              v-if="journalHistory.thisMonth.length > 0"
              title="This Month"
              :data="journalHistory.thisMonth"
            />
            <SidebarItemRenderer
              v-if="journalHistory.other.length > 0"
              title="Others"
              :data="journalHistory.other"
            />
          </TabsContent>
          <TabsContent value="chat">
            <SidebarItemRenderer
              v-if="chatHistory.today.length > 0"
              title="Today"
              :data="chatHistory.today"
            />
            <SidebarItemRenderer
              v-if="chatHistory.yesterday.length > 0"
              title="Yesterday"
              :data="chatHistory.yesterday"
            />
            <SidebarItemRenderer
              v-if="chatHistory.thisMonth.length > 0"
              title="This Month"
              :data="chatHistory.thisMonth"
            />
            <SidebarItemRenderer
              v-if="chatHistory.other.length > 0"
              title="Others"
              :data="chatHistory.other"
            />
          </TabsContent>
        </Tabs>
=======
        <div class="px-2 w-full mb-4">
          <div class="bg-muted rounded-lg p-1 flex">
            <Button 
              variant="ghost" 
              size="sm" 
              :class="tabs === 'diary' ? 'bg-background shadow-sm' : ''"
              class="flex-1 text-xs"
              @click="tabs = 'diary'"
            >
              <Icon name="lucide:book-open" class="w-4 h-4 mr-1" />
              <span v-if="open">Diaries</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              :class="tabs === 'chat' ? 'bg-background shadow-sm' : ''"
              class="flex-1 text-xs"
              @click="tabs = 'chat'"
            >
              <Icon name="lucide:message-square" class="w-4 h-4 mr-1" />
              <span v-if="open">Chats</span>
            </Button>
          </div>
        </div>

        <div v-if="tabs === 'diary'" class="px-2">
          <div v-if="open" class="text-xs font-medium text-muted-foreground mb-2 px-2">Recent Entries</div>
          <div class="space-y-1">
            <NuxtLink 
              v-for="entry in sampleDiaryEntries" 
              :key="entry.id" 
              :to="entry.href"
              class="block"
            >
              <div class="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors group">
                <Icon name="lucide:file-text" class="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                <span v-if="open" class="text-sm truncate group-hover:text-primary">{{ entry.title }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div v-if="tabs === 'chat'" class="px-2">
          <div v-if="open" class="text-xs font-medium text-muted-foreground mb-2 px-2">Recent Chats</div>
          <div class="space-y-1">
            <NuxtLink 
              v-for="entry in sampleChatEntries" 
              :key="entry.id" 
              :to="entry.href"
              class="block"
            >
              <div class="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors group">
                <Icon name="lucide:message-square" class="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                <span v-if="open" class="text-sm truncate group-hover:text-primary">{{ entry.title }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
>>>>>>> afb7cdc (Add custom favicon with brain circuit design in SVG format)
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenuButton class="flex items-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors" @click="createNew">
          <Icon name="lucide:plus" class="w-4 h-4" />
          <span v-if="open">New {{ tabs.charAt(0).toUpperCase() + tabs.slice(1) }}</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  </ClientOnly>
</template>

<style></style>
