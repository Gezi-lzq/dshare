// 准备mutations--用于操作数据(state)
const mutations = {
    InitNetword(state,value){
        state.account = value.account;
        state.dshare = value.dshare;
    },
    SetShares(state,value){
        state.shares = value.shares;
        state.sharesCount = value.sharesCount;
    },
    Setcurrentshare(state,value){
        state.currentHash = value.currentHash;
        state.currentTitle = value.currentTitle;
    },
    SetLoading(state,value){
        state.loading = value;
    }
};
export default mutations;