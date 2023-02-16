<template>
    <div class="transac">
        <img :src="coinImage" alt="Coin Image">
        <div class="name">
            <p>{{ cryptoName }}</p>
            <p class="coinName">{{ coinName}}</p>
        </div>
        <div class="market">
            <p>Market Cap</p>
            <p class="marketValue" :style="{color: marketColor}">$40,243.70</p>
        </div>
        <div class="change">
            <p>24h change</p>
            <p class="changeValue" :style="{color: changeColor}">+1,56</p>
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
        marketColor: {
            type: String,
            required: true,
        },
        changeColor: {
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
    gap: 85px;
    background: rgba(32, 35, 43, 0.7);
    border-radius: 30px;
    padding: 18px 30px;
}
p{
    font-family: "Inter";
    font-size: 17px;
    line-height: 21px;
    color: #FFFFFF;
    opacity: 0.95;
}
.name{
    width: 4.5rem;
}
.marketValue, .changeValue{
    font-weight: 600;
    opacity: 0.7;
}
.coinName{
    opacity: 0.7;
}
.trade{
    font-weight: 600;
    background: #000000;
    border-radius: 30px;
    padding: 6px 18px;
}

</style>