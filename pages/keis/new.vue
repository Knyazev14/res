<template>
  <main class="main">
    <div class="container">
      <div class="form-new">
        <label>
          <span>H1</span>
          <input type="text" v-model="h1" />
        </label>
        <label>
          <span>Title</span>
          <input type="text" v-model="title" />
        </label>
        <label>
          <span>Description</span>
          <input type="text" v-model="description" />
        </label>
        <label>
          <span>Url</span>
          <input type="text" v-model="url" />
        </label>
        <label>
          <span>Content</span>
          <input type="text" v-model="content" />
        </label>
        <label for="file">
          <span>Изображение</span>
          <input
            type="file"
            name="file"
            ref="file"
            v-on:change="handleFileUpload()"
          />
        </label>
        <button v-on:click="newService">Опубликовать</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  head: {
    title: "Создать запись",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Создать запись",
      },
    ],
  },
  data: () => ({
    h1: "",
    title: "",
    description: "",
    url: "",
    content: "",
    coverImageName: "",
  }),
  methods: {
    newService() {
      let formData = new FormData();
      let file = this.file;
      formData.append("h1", this.h1);
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("url", this.url);
      formData.append("content", this.content);
      formData.append("coverImageName", this.coverImageName);
      formData.append("file", this.file);
      axios
        .post(`https://kniazey.ru/api/keis`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(
          setTimeout(() => {
            this.$router.push(`/keis`);
          }, 500)
        );
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.disableButton = false;
    },
    addFile(newAddFiles) {
      let formData = new FormData();
      let file = this.file;
      formData.append("file", file);
      axios
        .post(`https://kniazey.ru/api/keis/addFile`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => (this.newAddFiles = response.data));
    },
  },
};
</script>

<style>
.form-new {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

.form-new input {
  max-width: 400px;
  padding: 10px;
  width: 100%;
  border: 1px solid #42b883;
  border-radius: 5px;
}

.form-new span {
  widows: 100%;
}
</style>
