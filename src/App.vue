<template>
<v-app id="app">
  <router-view/>
</v-app>
</template>

<script>
import Web3 from "web3";
import DShare from '../build/abis/Dshare.json'
export default {
  name: 'App',
  data: () => ({
    //
  }),
   created() {
    this.componentWillMount();
  },
  methods: {
    async componentWillMount() {
      await this.loadWeb3();
      await this.$store.dispatch('InitBlockchain',DShare)
    },
    async loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    },
  },
};
</script>
