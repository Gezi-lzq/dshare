<template>
  <v-app id="inspire">
    <narbar/>
    <!-- 主面板 -->
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            <v-card v-for="share in shares" :key="share.id"
            class="mb-4 mx-lg-auto" elevation="1">
              
              <v-card-title>
                {{share.title}}
              </v-card-title>

              <v-card-subtitle>
                {{ share.title }}
              </v-card-subtitle>

              <v-card-text>
                {{share.title}}
              </v-card-text>
            </v-card>
              <!--  -->
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Narbar from '../components/Narbar.vue'
  export default {
    components:{
      Narbar
    },
    data: () => ({
     // 首页展示文章列表
      shares: [
        {title:'这是一篇分享',id:1},
        {title:'这是一篇分享',id:2},
        {title:'这是一篇分享',id:3},
      ]
    }),
  }
</script>