<template>
  <vue-editor
    id="editor"
    useCustomImageHandler
    @image-added="handleImageAdded"
    v-model="htmlForEditor"
    :editorToolbar="customToolbar"
  >
  </vue-editor>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
  components: { VueEditor },
  data() {
    return {
      htmlForEditor: "",
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"]
      ]
    };
  },
   methods: {
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData();
      formData.append("image", file);

      axios({
        url: "https://fakeapi.yoursite.com/images",
        method: "POST",
        data: formData
      })
        .then(result => {
          const url = result.data.url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
