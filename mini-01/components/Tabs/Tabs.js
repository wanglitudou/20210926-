// components/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
    //  aaa:{
    //     //  type 要接收的数据的类型
    //      type:String,
    //      // value 默认值
    //      value:"" 
    //  }
    tabs:{
        type:Array,
        value:[]
    }
    },

    /**
     * 组件的初始数据
     */
    data: {
       
    },

    /**
     * 组件的方法列表
     */
    methods: {
        hanldeItemTap(e){
             /*
          1 绑定点击事件 需要在methods中绑定
          2 获取被点击的索引
          3 获取原数组
          4 对数组循环 
           1 给每一个循环性 选中属性改为false
           2 给当前的索引 项添加激活选中效果就可以 ！！！
          
          5 点击事件触发的时候
            触发父组件中的自定义事件 同时传递给 父组件
            this.triggerEvent("父组件自定义事件的名称",要传递的参数)
         */
        // 2 获取索引 
         const {index} = e.currentTarget.dataset
        //  触发父组件中的自定义事件 同时传递给 父组件
         this.triggerEvent("itemChange",{index})
        // 3 获取data中的数组
        //解构 对复杂类型进行结构的时候 复制了一份 变量引用而已
        // 最严谨的做法 重新拷贝一份数组，再对这个数组的备份进行处理
        // let tabs = JSON.parse(JSON.stringify(this.data.tabs))
        let {tabs} = this.data;
        // let tabs = this.data.tabs;
        //循环数组
        // [] .forEach 遍历数组的时候 修改了 v ， 但也会导致数组被修改
        tabs.forEach((v,i) => {
            i === index ? v.isActive = true : v.isActive = false;
        })
        this.setData({
            tabs
        })
        }
    }
})
