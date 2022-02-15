<template>
  <div class="editor-contain">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            label="Outlined"
            outlined
            v-model="title"
            class="mt-4"
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="4" align-self="center">
          <v-btn>保存</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <mavon-editor
      class="meditor"
      v-model="content"
      :toolbars="markdownOption"
      :ishljs="true"
    />
  </div>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      title: "",
      content: "",
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
      },
    };
  },
};
</script>

<style scoped>
.v-text-field {
  margin: 0px 15px;
  max-width: 900px;
}
.meditor {
  min-height: 700px !important;
  max-height: 750px !important;
  margin: 10px;
}
</style>
