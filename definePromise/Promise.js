

(function(window){
    //excutor 执行器函数(同步执行)
    function Promise(excutor){

        this.status='pending' //给promise对象指定status属性，初始值为pending
        this.data=undefined //给promise对象指定一个用于储存结果数据的属性
        this.callback=[]   //每个元素的结构：{onResolved(){},onRejeceted(){} }

        function resolve(value){
            //如果当前状态不是pending，直接结束
            if(this.status=='pending'){
                return
            }
            //将状态改为resolved
            this.status='resovled'
            //保存value数据
            this.data=value
            //如果有待执行的callback函数，立即执行回调函数onResolved
            if(this.callback.length>0){ //放入队列中执行所有成功的回调
                setTimeout(()=>{
                    this.callback.forEach(callbacksObj=>{
                        callbacksObj.onResolved(value)
                    })
                })
            }

        }

        function reject(reason){

            //如果当前状态不是pending，直接结束
            if(this.status=='pending'){
                return
            }
            
            //将状态改为rejected
            this.status='rejected'
            //保存value数据
            this.data=reason
            //如果有待执行的callback函数，立即执行回调函数onRejected
            if(this.callback.length>0){ //放入队列中执行所有成功的回调
                setTimeout(()=>{
                    this.callback.forEach(callbacksObj=>{
                        callbacksObj.onResolved(reason)
                    })
                })
            }

        }

    }
   //Promise原型对象上的then()方法
    指定成功和失败的回调函数
    返回一个新的promise对象
    Promise.prototype.then=function (onResolved,onRejected){

    }
    //Promise原型对象上的catch()方法
    指定失败的回调函数
    返回一个新的promise对象
    Promise.prototype.catch=function(onRejected){

    }

    //Promise 函数对象上的resolve()方法
    返回一个指定结果的成功的promsie
    Promise.resolve=function (value){

    }
   //Promise 函数对象上的reject()方法
    返回一个指定reason的失败的promise
    Promise.reject=function(reason){

    }

    //Promise 函数对象上的all()方法
    返回一个promise,只有当所有promise都成功时才成功，否则只要有一个失败就失败
    Promise.all=function (promises){

    }
    //Promise 函数对象上的race()方法
    返回一个promsie，其结果由第一个完成的promise决定
    Promise.race=function (promises){

    }

    //向外暴露Promise
    window.Promise=Promise


})(window)
