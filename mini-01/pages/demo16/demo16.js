// pages/demo16/demo16.js
Page({
    data: {
      list:[
        {
          id:0,
          name:"π",
          value:"apple"
        },
        {
          id:1,
          name:"π",
          value:"grape"
        },
        {
          id:2,
          name:"π",
          value:"bananer"
        }
      ],
      checkedList:[]
    },
    //ε€ιζ‘ιδΈ­δΊδ»Ά
     handleItemChange(e){
         //θ·εε€ιζ‘δΈ­ιδΈ­ηεΌ
         const checledList = e.detail.value;
         this.setData({
             checkedList
         })
     }
  })