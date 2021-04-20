<template>
    <div id ="fashion">
        <slot>
            <a href="#" >
                <img src="@/assets/newclothes.jpg">
            </a>
        </slot>
    </div>
</template>

<script>
export default {
    name : "fashion",
}
</script>

<style scoped>
#fashion img{
    height: 100%;
    width: 100%;
}
#fashion{
    border-top :10px solid #eee;
    margin-bottom:5px;
}

</style>