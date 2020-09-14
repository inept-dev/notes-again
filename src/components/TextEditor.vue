<template>
	<!--v-model="editorText" height="500px" -->
	<editor />
</template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Editor, Viewer } from "@toast-ui/vue-editor";

export default {
	components: {
		editor: Editor,
	},
};
</script>

<style scoped></style>
