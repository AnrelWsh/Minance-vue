<template>
  <div id="side">
    <div class="up">
      <UpSideComponent/>
    </div>

    <div class="content">
      <div class="recent">
        <h2>Recent Transactions </h2>
        <div class="recentComponents">
          <RecentTransactionComponent coinImage="img/cryptos/tether.png" cryptoName="USDT" transacNature="Recieved" amountColor="rgba(74, 214, 25, 1" amount="+ $3,546" date="Today, 13:45 pm"/>
          <RecentTransactionComponent coinImage="img/cryptos/bnb.png" cryptoName="BNB" transacNature="Buy" amountColor="rgba(74, 214, 25, 1" amount="+ 0.7546" date="Today, 5:45 am"/>
          <RecentTransactionComponent coinImage="img/cryptos/lite.png" cryptoName="Lite Coin" transacNature="Withdrawal" amountColor="rgba(214, 25, 25, 1)" amount="- 0.7546" date="Today, 7:55 am"/>
          <RecentTransactionComponent coinImage="img/cryptos/btc.png" cryptoName="Bitcoin" transacNature="Recieved" amountColor="rgba(74, 214, 25, 1" amount="+ 2.7546" date="Today, 8:55 am"/>
          <RecentTransactionComponent coinImage="img/cryptos/eth.png" cryptoName="Etherum" transacNature="Recieved" amountColor="rgba(74, 214, 25, 1" amount="+ 1.646" date="Today, 10:02 am"/>
        </div>
      </div>
  
      <div class="assets">
        <h2 class="assetsTitle">Assets</h2>
        <div class="cards">
          <AssetsComponent backgroundColor="linear-gradient(98.73deg, #611D8D 35.75%, #2F7EC1 73.26%)" fontColor="white" coinImage="img/cryptos/btc-big.png" cryptoName="Bitcoin" value="121,6450.45" short="BTC"/>
          <AssetsComponent backgroundColor="linear-gradient(99.56deg, #FAFF00 35.82%, #29ABE2 64.75%, rgba(255, 255, 255, 0.7) 91.33%)" fontColor="black" coinImage="img/cryptos/eth-big.png" cryptoName="Etherum" value="143,850.45" short="ETH"/>  
        </div>
      </div>
    </div>

  </div>
    
</template>

<script>
import UpSideComponent from './UpSideComponent.vue';
import RecentTransactionComponent from './RecentTransactionComponent.vue';
import AssetsComponent from './AssetsComponent.vue';

export default {
  name: 'SideVue',
  components: {
    UpSideComponent,
    RecentTransactionComponent,
    AssetsComponent,
  },
  
}
</script>

<style scoped>
#side{
  padding-left: 15px;
  width: 26vw;
  display: flex;
  flex-direction: column;
}
.content{
  display: flex;
  flex-direction: column;
}
.recent{
  margin-bottom: 20px;
}
h2{
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: white;
  margin-bottom: 40px;
}
.assetsTitle{
  margin-bottom: 16px;
}

@media screen and (max-width: 1481px) {
  .up{
    display: none;
  }
  #side{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70vw;
    padding: 0;
  }
  .assets{
    width: 35vw;
  }
  .content{
    flex-direction: row;
    gap: 5vw;
  }
}

@media screen and (max-width: 1290px) {
  #side{
    width: 65vw;
  }
  .assets{
    width: 25vw;
  }
}

@media screen and (max-width: 1124px) {
  .assets{
    width: 65vw;
  }
  .content{
    flex-direction: column;
  }
  .cards{
    display: flex;
    flex-direction: row;
    gap: 10vw;
  }
}

@media screen and (max-width: 1024px) {
  #side{
    width: 90vw;
  }
  .assets{
    width: 35vw;
  }
  .content{
    flex-direction: row;
  }
  .cards{
    flex-direction: column;
    gap: 0;
  }
}

@media screen and (max-width: 800px) {
  .content{
    flex-direction: column;
  }
  .cards{
    flex-direction: row;
  }
}
@media screen and (max-width: 800px) {

  .cards{
    flex-direction: column;
    width: 80vw;
  }
}
</style>
