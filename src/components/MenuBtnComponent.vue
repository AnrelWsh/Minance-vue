<template>
    <div>
        <img :src="imageUrl" alt="Menu Button Component">
        <p>{{ btnText }}</p>
    </div>
</template>

<script>

export default {
    name: 'MenuBtnComponent',

    props: {
        imageUrl: {
            type: String,
            required: true,
        },
        btnText: {
            type: String,
            required: true,
        },
    },
}

</script>
<style scoped>
div{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 0;
}
p{
    font-size: 25px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    opacity: 0.8;
}
</style>