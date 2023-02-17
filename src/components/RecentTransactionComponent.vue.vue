<template>
    <div class="card">
        <img :src="coinImage" alt="Coin Image">
        <div class="txt">
            <div class="name">
                <p class="cryptoName">{{ cryptoName }}</p>
                <p class="transacNature">{{ transacNature }}</p>
            </div>
            <div class="details">
                <p class="amount" :style="{color: amountColor}">{{ amount }}</p>
                <p class="date">{{ date }}</p>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'RecentTransactionComponent',

    props: {
        coinImage: {
            type: String,
            required: true,
        },
        cryptoName: {
            type: String,
            required: true,
        },
        transacNature: {
            type: String,
            required: true,
        },
        amountColor: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
}

</script>
<style scoped>
.card{
    display: flex;
    align-items: center;
    padding: 15px 0 15px 15px;
}
p{
    font-family: "Inter";
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    color: white;
}
.transacNature, .date{
    opacity: 0.7;
}
.name{
    width: 105px;
}
.txt{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 28px;
    width: 300px;
}

</style>