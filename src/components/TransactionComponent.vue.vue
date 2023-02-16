<template>
    <div class="transac">
        <img :src="coinImage" alt="Coin Image">
        <div class="name">
            <p>{{ cryptoName }}</p>
            <p class="coinName">{{ coinName}}</p>
        </div>
        <div class="market">
            <p>Market Cap</p>
            <p class="marketValue">$40,243.70</p>
        </div>
        <div class="change">
            <p>24h change</p>
            <p class="changeValue">+1,56</p>
        </div>
        <img :src="lineImage" alt="Line">
        <p class="trade">Trade</p>
    </div>
</template>

<script>

export default {
    name: 'TransactionComponent',

    props: {
        coinImage: {
            type: String,
            required: true,
        },
        cryptoName: {
            type: String,
            required: true,
        },
        coinName: {
            type: String,
            required: true,
        },
        lineImage: {
            type: String,
            required: true,
        },
    },
}

</script>
<style scoped>
.transac{
    display:flex;
    align-items: center;
}
p{
    font-size: 17px;
    line-height: 21px;
    color: #FFFFFF;
    opacity: 0.95;
}
.coinName{
    opacity: 0.7;
}
</style>