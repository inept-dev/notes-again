<template>
    <div class="top-bar">
        <div class="back-btn">
            <button class="back">BACK</button>
        </div>
        <div class="work-btn">
            <button class="archive">ARCHIVE</button>
            <button class="pin">PIN</button>
            <button class="favorite">FAVORITE</button>
            <button class="trash">TRASH</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "managerBar"
    }
</script>

<style scoped>
.top-bar {
	display: flex;
	width: 70vw;
	background: rgba(0, 0, 0, 0.25);
	height: 10vh;
}
button {
	height: 10vh;
	width: 10vh;
}
.work-btn {
	/* align buttons to the right site
	text-align: right;
	*/
	padding-left: calc(70vw - 50vh);
}
.back-btn {
	/*
	text-align: left;
	*/
}
</style>