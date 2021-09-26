// pages/demo16/demo16.js
Page({
    data: {
      list:[
        {
          id:0,
          name:"🍎",
          value:"apple"
        },
        {
          id:1,
          name:"🍇",
          value:"grape"
        },
        {
          id:2,
          name:"🍌",
          value:"bananer"
        }
      ],
      checkedList:[]
    },
    //复选框选中事件
     handleItemChange(e){
         //获取复选框中选中的值
         const checledList = e.detail.value;
         this.setData({
             checkedList
         })
     }
  })