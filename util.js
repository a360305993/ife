function isArray(arr){
	return Object.prototype.toString.call(arr)==="[object Array]";
}

function isFunction(fn){
	return Object.prototype.toString.call(fn)==="[object Function]"
}

function isRegExp(reg){
	return Object.prototype.toString.call(reg)==="[object RegExp]"
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var result=[],hash={},item,key;
    for(var i=0,len=arr.length;i<len;i++){
    	item=arr[i];
        key=typeof item+item;//使用类型+值作为key,区别数字和字符串
    	if(!hash[key]){
    		hash[key]=true;
    		result.push(item)
    	}
    }
    return result;
}
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var s=str,len=s.length,left=0,right=len;
    for(var i=0;i<len;i++){
        if(str[i]===" "){//空格（只能判断出半角空格和tab）
             left=i+1;//指向下一个
        }else{
             break;
         
        }
    }
    for(var i=len-1;i>=0;i--){
          if(str[i]===" "){//空格
            right=i-1;//指向前一个
        }else{
             break;
        }
    }
    return str.substring(left,right+1);
}
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    //return str.replace(/(^\s+)|(\s+$)/g,"");
    return str.replace(/^\s+/,"").replace(/\s+$/,"")
}
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    //var r=[];
    for(var i=0,len=arr.length;i<len;i++){
        //r.push(fn.call(null,arr[i],i));
        fn.call(null,arr[i],i);
    }
   // return r;
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    if(Object.keys){
        return Object.keys(obj).length;
    }
    var sum=0;
    for(var i in obj){//还会遍历原型链可枚举的属性
        sum++;
    }
    return sum;
}
function isEmail(emailStr) {//以(字母or数字or下划线or点号or减号)开头，名称可以包括：字母、数字、下划线、点号、减号
    var patten=/^[\w_.-]+@\w+.\w+/;
    return patten.test(emailStr); 
}
function isMobilePhone(phone) {//以1开头，后面10位数
    return /^1\d{10}$/.test(phone);
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};

function isElement(element){
    return (element && element.nodeType===1)
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    if(isElement(element)){//如果是element类型
        var preCls=element.className;
        if(preCls.indexOf(newClassName)>-1){//存在
            return;
        }
        element.className=preCls+" "+newClassName;
    }
    
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    if(isElement(element)){
        var preCls=element.className;
        var newCls=preCls.replace(oldClassName,"");
        element.className=trim(newCls);
    }
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    if(isElement(element) && isElement(siblingNode)){
        return element.parentNode===siblingNode.parentNode;
    }   
    return false;
}
// 获取element之前的同胞元素
function prev(element) {
    
}
//获取element之后的同胞元素
function next(element) {
    
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var rect=element.getBoundingClientRect();
    return{x:rect.left,y:rect.top}
}

// 实现一个简单的Query,不直接使用document.querySelector
function $(selector) {
    var idSelectorRE=/^#([\w-]+)$/,
        tagSelectorRE=/^([\w-]+)$/,
        classSelectorRE=/^.([\w-]+)$/;
    var r=[],found;
     if(idSelectorRE.test(selector)){
        //return RegExp.$1;
        return document.getElementById(RegExp.$1)
     }else if(tagSelectorRE.test(selector)){
        //return RegExp.$1;
        return document.getElementsByTagName(RegExp.$1)
     }else if(classSelectorRE.test(selector)){
        //return RegExp.$1;
            return document.getElementsByClassName(RegExp.$1);    
     }else if(document.querySelector){
        return document.querySelector(selector);
     }
}
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if(document.addEventListener){

    }else if()
}

// 例如：
function clicklistener(event) {

}
addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
}
