<template>
  <!-- 顶部导航栏 -->
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <!-- 头像 -->
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>
        
        <v-btn
          v-for="link in links"
          :key="link.name"
          :href="link.url"
          text
        >
          <link>{{ link.name }}
        </v-btn>

        <v-spacer></v-spacer>

        <!-- 搜索框 -->
        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>

<script>
export default {
data: () => ({
      links: [
        {name:'主页',url:'/'},
        {name:'分类',url:'/category'},
        {name:'动态',url:'/subscript'},
        {name:'发布',url:'/post'},
      ],
    }),
}
</script>

<style>

</style>