<template>
    <div class="card">
        <img :src="coinImage" alt="Coin Image">
        <div class="name">
            <p class="cryptoName">{{ cryptoName }}</p>
            <p class="transacNature">{{ transacNature }}</p>
        </div>
        <div class="details">
            <p class="amount" :style="{color: amountColor}">{{ amount }}</p>
            <p class="date">{{ date }}</p>
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

</style>