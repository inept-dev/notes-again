<template>
    <editor v-model="editorText" height="500px"/>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'codemirror/lib/codemirror.css';
import { Editor, Viewer } from '@toast-ui/vue-editor';

export default {
    name: "textEditor",
}
</script>

<style scoped>

</style>