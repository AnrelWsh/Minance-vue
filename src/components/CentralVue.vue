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

    <div class="sectitle">
      <p></p>
      <p></p>
    </div>
  </div>
    
</template>

<script>

export default {
  name: 'MenuVue',
  components: {
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
}
.chart{
  padding: 42px 0 21px 0;
}
</style>
