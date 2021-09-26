// pages/demo4/demo4.js
Page({
    data: {
        num:0
    },
    handleInput(e){
        // console.log(e.detail.value);
        this.setData({
            num :e.detail.value
        })
    },
    // 加减 按钮的事件
    handletap(e){
        console.log(e);
        const operation = e.currentTarget.dataset.operation;
        this.setData({
            num : this.data.num + operation
        })
    }
})