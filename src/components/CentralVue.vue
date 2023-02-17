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
#central{ 
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 6vw 0;
}
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
  width: 100%;
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
  padding: 16px;
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
  gap: 32px;
  width: 100%;
  padding-left: 12px;
}
.chart{
  width: 50vw;
}
.sectitle{
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.sectitleOne{
  color: #FFFFFF;
}
.sectitleTwo{
  color: rgba(255, 255, 255, 0.7);
}
.second{
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  gap: 3vw;
}

@media screen and (max-width: 1481px) {
  #central{
    width: 70vw;
  }
  .sub{
    margin: 3vw 0;
  }
  .second{
    margin-top: 3vw;
  }
}

@media screen and (max-width: 1281px) {
  #central{
    width: 60vw;
  }
}

@media screen and (max-width: 1124px) {
  .head{
    flex-direction: column;
    align-items: stretch;
  }
  .head h2{
    margin-bottom: 1vw;
  }
  .sub{
    flex-direction: column;
    align-items: stretch;
  }
  .subtab{
    margin: auto;
  }
}

@media screen and (max-width: 1024px) {
  #central{
    width: 90vw;
  }
  .head{
    flex-direction: row;
    align-items: center;
  }
  .head h2{
    margin-bottom: 0;
  }
  .sub{
    margin: 3vw 0;
    flex-direction: row;
    align-items: center;
  }
  .chart{
    width: 70vw;
  }
  .second{
    margin-top: 6vw;
  }
}

@media screen and (max-width: 800px) {
  .head{
    flex-direction: column;
    align-items: stretch;
  }
  .head h2{
    margin-bottom: 1vw;
  }
  .sub{
    flex-direction: column;
    align-items: stretch;
  }
  .subtab{
    margin: auto;
  }
  .chart{
    width: 90vw;
  }
  .second{
    width: 90vw;
  }
}
</style>
