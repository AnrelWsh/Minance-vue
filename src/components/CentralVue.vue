<template>
  <div id="central">

    <div class="head">
      <h2>Hi, Rogers</h2>
      <input type="search" id="" placeholder="Search">
    </div>

    <div class="sub">
      <div class="subText">
        <p class="pone">Total Balance </p>
        <div class="ptwo">
          <p>0.97894652 </p>
          <img src="../../public/img/btc-tag.png" alt="Btc Tag">
        </div>
        <p class="pthree">$40,123.56</p>
      </div>
      <div class="subtab">
        <p class="active">Portfolio</p>
        <p>Funding</p>
        <p>Assets</p>
        <p>P2P</p>
      </div>
    </div>

    <img src="../../public/img/chart.png" alt="Chart" class="chart">

    <div class="second">
      <div class="sectitle">
        <p class="sectitleOne">Recent Transactions </p>
        <p class="sectitleTwo">See all coins</p>
      </div>
      <TransactionComponent coinImage="img/cryptos/btc-mt.png" cryptoName="Bitcoin" coinName="BTC" marketColor="rgba(25, 112, 214, 1)" changeColor="rgba(74, 214, 25, 1)" lineImage="img/line1.png"/>
      <TransactionComponent coinImage="img/cryptos/eth-white.png" cryptoName="Etherum" coinName="ETH" marketColor="rgba(108, 17, 130, 1)" changeColor="rgba(214, 25, 25, 1)" lineImage="img/line2.png"/>
    </div>
    
  </div>
    
</template>

<script>
import TransactionComponent from './TransactionComponent.vue';

export default {
  name: 'CentralVue',
  components: {
    TransactionComponent,
  },
  
}
</script>

<style scoped>
input{
  padding: 15px 73px;
  background-image:url(../../public/img/icons/search.png);
  background-position:15px;
  left: 15px;
  background-repeat:no-repeat;
  border-radius: 15px;
  font-size: 25px;
  color: black;
}
.head{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h2{
  color: white;
  font-size: 35px;
  font-weight: 500;
}
.pone{
  font-weight: 900;
  font-size: 22px;
  line-height: 33px;
  color: #FFFFFF;
  opacity: 0.8;
}
.ptwo{
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 29px;
  line-height: 44px;
  color: #FFFFFF;
}
.pthree{
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #FFFFFF;
  opacity: 0.7;
}
.subtab{
  background: #292727;
  border-radius: 17px;
  display: flex;
  align-items: center;
}
.subtab p{
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: #FFFFFF;
  padding: 17px 22px;
}
.subtab .active{
  background: #0D0C0C;
  border-radius: 17px;
  padding: 5.5px 22px;
  margin-left: 22px;
}
.sub{
  display: flex;
  align-items: center;
  gap: 90px;
  padding-left: 18px;
}
.chart{
  padding: 42px 0 21px 0;
  margin: auto;
}
.sectitle{
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sectitleOne{
  color: #FFFFFF;
}
.sectitleTwo{
  color: rgba(255, 255, 255, 0.7);
}
.second{
  padding: 0 18px;
}
</style>
