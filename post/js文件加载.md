---

---



昨天面试百度遇到一个比较有趣的问题，js文件之间存在依赖关系，那么加载的时候，加载顺序是什么样子的。



后续仔细考虑了这个小算法，这不就是拓扑排序，



我们在一开始学习js语法的时候，大概都会学到不同的依赖文件是如何去加载的。核心的思想就是先加载不被其他文件的依赖，然后加载那些依赖已经加载的文件，以此类推。



比如说：

~~~javascript
const dependencies = {
  'index.js': ['1.js', '2.js'],
  '2.js': ['1.js'],
  '1.js': [],
};
~~~

上面的这个数据结构描述了，index.js 文件是依赖于1.js 2.js， 而2.js依赖于1.js



那么加载的时候，加载顺序就是 1.js 2.js index.js



简单来说就是获取依赖树（或者依赖图）的拓扑排序

~~~
// 那么我们从获取拓扑序列的思路来解决这道题
const dependencies = {
    'index.js': ['1.js', '2.js'],
    '2.js': ['1.js'],
    '1.js': [],
  };

function getTopo(dependencies){
    let dep = dependencies
    let res = new Set()

    while(Object.keys(dep).length!==0){
    		//遍历查找入度为0的节点，也就是不依赖于其他的文件的js
        Object.keys(dep).forEach(key=>{            
            if(dep[key].length==0){
            		//加到集合里面
                res.add(key)
                //删除这个文件，并且删除其他文件对该文件的依赖
                delete dep[key]
                var deleteKey = key
                Object.keys(dep).forEach(key =>{
                    const indexOfKey = dep[key].indexOf(deleteKey);
                    if (indexOfKey !== -1) {
                        dep[key].splice(indexOfKey, 1); 
                    }
                })
            }
        })
        
        // 重复上述过程，直到dependencies为空
    }

    console.log(res)
}

~~~

这样的纯暴力的解法，复杂度太高了，有没有更好的算法？ 有！！



我们可以看成是对一个依赖树的遍历，我们不考虑重复问题

```
/ 用于存储已加载的文件的集合
const loadedFiles = new Set();

// 定义加载文件的函数
function loadFile(fileName) {
// 如果文件已加载，则直接返回
if (loadedFiles.has(fileName)) {
    return;
}

// 获取文件的依赖项列表
const fileDependencies = dependencies[fileName];

// 递归加载依赖项
fileDependencies.forEach(dependency => {
    loadFile(dependency);
});

// 模拟加载文件的操作，可以在这里执行实际的加载操作
console.log(`加载文件: ${fileName}`);

// 将文件标记为已加载
loadedFiles.add(fileName);
}

// 加载入口文件
// loadFile('index.js');



```

妙





