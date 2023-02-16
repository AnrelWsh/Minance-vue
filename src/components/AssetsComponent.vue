<template>
    <div class="card" :style="{color: fontColor, background: backgroundColor}">
        <div class="coin">
            <img :src="coinImage" alt="Coin Image">
            <p class="cryptoName">{{ cryptoName }}</p>
        </div>
        <div class="values">
            <p>{{ value }}</p>
            <p>{{ short }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AssetsComponent',

    props: {
        backgroundColor: {
            type: String,
            required: true,
        },
        fontColor: {
            type: String,
            required: true,
        },
        coinImage: {
            type: String,
            required: true,
        },
        cryptoName: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        short: {
            type: String,
            required: true,
        },
    },
}

</script>
<style scoped>
.card{
    font-weight: 600;
    font-size: 27px;
    line-height: 23px;
    padding: 12px 32px;  
    border-radius: 30px;  
    margin-bottom: 28px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 9px;
}
.cryptoName{
    font-size: 19px;
}
.coin{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.values{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

</style>