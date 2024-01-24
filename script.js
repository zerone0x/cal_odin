
const add = function (a, b) {
    return a + b;
  };
const subtract = function (a, b) {
return a - b;
};


const divide = function (a, b) {
return a / b;
};


const multiply = function (a, b) {
return a / b;
};



function operate(num1, operator, num2){
    if (operator == "+"){
        return add(num1, num2);
    }
    else if (operator == "-"){
        return subtract(num1, num2);
    }
    else if (operator == "*"){
        return multiply(num1, num2);
    }
    else if (operator == "/"){
        if (num2 == 0){
            return "Error";
        }
        res = divide(num1, num2);
        return Math.round(res * 100) / 100;
    }
}

let cache_val = ""; // 用来存过程
let cache_num= ""; // 用来存过程中的数字
let last_cache_num = ""; // 用来存过程中的数字
let res_val = 0; // 用来存结果
let cache_operator = ""; // 用来存过程中的运算符

function clearNum(){
    const display = document.querySelector("#textview");
    const display1 = document.getElementById("res");
    display.value = "";
    display1.value = "";
    console.log("clear");
    console.log(display.value);
    cache_val = "";
    cache_num = "";
    cache_operator = "";
    last_cache_num = "";
}



function backspace(){
    const display = document.querySelector("#textview");
    const display1 = document.getElementById("res");
    display.value = display.value.slice(0, -1);
    display1.value = display1.value.slice(0, -1);
    cache_val = display.value;
    cache_num = display1.value;
    console.log("backspace");
    console.log(display.value);

}

// 一定要转数字啊
// cache要及时reset 

function insert(val){
    console.log('cachenum1',cache_num)
    // 输入分两种，一种是数字，一种是运算符，数字的话需要拼接字符串，这是一个补全的数字，运算符的话需要调用operate函数，运算符的话，需要直接计算，更新到cache_val中
    // 需要显示的分两部分，一个是过程运算，纯拼接字符串，无任何condition.另一个是用cache来存结果
    // 在有结果的时候，过程运算消失，把结果传到第2个display里
    // 下一个问题是读取数字，由于是读到运算符为止，所以可能需要cachevalue来存储，并且提取  
    // output 分两种结果，一个是字符串形式的数字，一个是字符串和运算符的组合

    // if(cache_val == "Error"){
    //     cache_val = "";
    // }
    // if(val == "="){
    //     return;
    // }
    if (val == "="){
        const display2 = document.getElementById("res");
        cache_num = Number(cache_num);
        display2.value = cache_num;
        // const display = document.getElementById("textview");
        // display.value = "";


        // cache_val = "";
        // cache_num = "";
        cache_operator = "";
        last_cache_num = "";
    }
    // 是数字输入的时候，有两种情况
    // 一个是前面是运算符，需要把这几个参数传给operator
    // 一个是前面是数字，就直接update cache_num
    if (typeof(val) == "number"){
        console.log(val)

        console.log('cache_num228-----------------',cache_num);
        console.log('cache_val228-----------------',cache_val[cache_val.length - 1]);
        
        if(typeof(Number(cache_val[cache_val.length - 1])) == "number"){
            cache_num = cache_num + val;
            console.log('cache_num3------------',cache_num);
        }
        // else{
        //     const regex = /[+\-*/%^]/g; // 包括加减乘除求余幂等运算符

        //     // 找到所有匹配的运算符
        //     const matches = [...cache_val.matchAll(regex)];
        //     console.log('matches',matches[0]);
        //     let len = matches.length;
        //     let cache_operator = matches[len-1][0];
        //     console.log('cache_operator',cache_operator);
        // }

        if (cache_operator == "+" || cache_operator == "-" || cache_operator == "*" || cache_operator == "/"){
            console.log('cache_num1``````',cache_num);
            num_1 = Number(last_cache_num);
            cache_num = "";
            num2 = Number(val);
            console.log('num_1',num_1);
            console.log('num2',num2);
            cache_num = (operate(num_1, cache_operator, num2)).toString();
            console.log('cache_num4',cache_num);
            // TODO 
        }

}

    if (val == "+" || val == "-" || val == "*" || val == "/"){
        last_cache_num = cache_num;
        cache_num = "";
        cache_operator = val;
        // operate_num = Number(cache_num);
        // 分几种情况,一个是有cache_num,这种可以执行，执行的时候，需要把cache_num来更新。一个是没有需要报错
        // 才意识到，没法执行，在数字的时候才能更新，这种情况下，只能把operator 存一下
        if (cache_val == ""){
            const display2 = document.getElementById("res");
            display2.value = 'num is empty';
        }
        else{
            // res_val = operate(res_val, operator, cache_val);
            // cache_val = "";
            // operator = val;
            // cache_val = cache_val + val;
        }
    }
    if (val != "="){
        cache_val = cache_val + val;
    }
    
    const display = document.querySelector("#textview");
    // cache value it stores the process calculation
    // it executes in every condition 
    display.value = cache_val;

    console.log( 'res',cache_val)
    // cache_val = display.value;
    // it updates when the = appears
    
}