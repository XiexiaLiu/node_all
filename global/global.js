
/**
 * 全局变量的练习
 */


// 1. console 与在浏览器使用的方式是一样的

//console.log(1);


// 2. __filename  拿到具体文件的路径（包括文件名称）
console.log(__filename);  //C:\Users\10918\Documents\node_all\global\global.js



// 3. __dirname 拿到具体的文件路径（不包括具体名称）

console.log(__dirname);//C:\Users\10918\Documents\node_all\global

// 4. setImmediate, setInterval, setTimeout
/**
 * setInterval
 * setImmediate 与 setTimeout(callback,0)一样
 */


// 5.clearImmediate, clearTimeout, clearInterval 与浏览器用法一样


// 6.process 事件(beforeExit, disconnect, exit, messagge) 感觉不常用, signal Events 这个事件好像与子进程同行有关。没有深入研究
//process.on('exit',(code)=>{console.log(code+100)});

// setTimeout(()=>{ process.exit()},1000)

// 7.process 方法（chdir，cwd）

process.chdir('../') //更改当前的目录
console.log(process.cwd()); //获取当前的目录




// 8.process 属性(arch,argv,paltform)
console.log(process.arch) //可以拿到计算机处理器架构，如：'x64','ia32','arm'

console.log(process.argv) //可以拿到命令行输入的参数

/**
 * 进程中还有许多属性与方法，在这里不一一介绍用法，记住他可以拿到进程中所以要的相关参数即可。
 */


