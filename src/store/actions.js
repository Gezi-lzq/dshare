//Declare IPFS
const ipfsClient = require('ipfs-http-client')

const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values


// 准备actions--用于响应组件中的动作
const actions = {

  async InitBlockchain(context,DShare) {
      const web3 = window.web3;
      //Load account
      const accounts = await web3.eth.getAccounts();
      //Get network ID
      const networkId = await web3.eth.net.getId();
      //Get network data
      const networkData = DShare.networks[networkId];
      if (networkData) {

        const dshare = new web3.eth.Contract(DShare.abi, networkData.address);
        context.commit('InitNetword',{ account:accounts[0] , dshare } )
        context.dispatch('LoadShareDate')
      } else {
        context.commit('InitNetword',{ account:accounts[0] , dshare:null } )
        //If network data doesn't exisits, log error
        window.alert("DShare contrast not deploy to detected network");
      }
    },

    async LoadSharesDate(context){
        const sharesCount = await context.state.dshare.methods.shareCount().call();
        let shares = []
        for (var i = sharesCount; i >= 1; i--) {
          const share = await context.state.dshare.methods.shares(i).call();
          shares = [...shares, share];
          console.log(shares)
        }

        context.commit('SetShares', {shares,sharesCount} );

    },

    async addShare(context,value) {
        ipfs.add(value.buffer,(error, result) => {
            if(error) {
                console.error(error)
                return
            }
            console.log(context.state.dshare)
            context.state.dvideo.methods.uploadShare(result[0].hash, value.title).send({ from: this.state.account }).on('transactionHash', (hash) => {
                console.log("上传智能合约",hash)
                context.dispatch('LoadShareDate')
              })
        })
    },
  
  };
  export default actions;