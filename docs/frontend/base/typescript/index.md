---
prev:
  text: 'JavaScript'
  link: '/frontend/base/javascript/index'
next:
  text: 'Html'
  link: '/frontend/base/html/index'
---

# TypeScript

[中文官方文档](https://www.tslang.cn/docs/home.html)
## Typescript简介
### TypeScript是什么
* 以JavaScript为基础构建的语言。
* 一个JavaScript的超集。
* 可以在任何支持JavaScript的平台中执行。
*  TypeScript扩展了JavaScript并添加了类型。
*  静态输入,静态类型化是一种功能，可以在开发人员编写脚本时检测错误。查找并修复错误是当今开发团队的迫切需求。有了这项功能，就会允许开发人员编写更健壮的代码并对其进行维护，以便使得代码质量更好、更清晰。
* 大型的开发项目,有时为了改进开发项目，需要对代码库进行小的增量更改。这些小小的变化可能会产生严重的、意想不到的后果，因此有必要撤销这些变化。使用TypeScript工具来进行重构更变的容易、快捷。
* 更好的协作,当发开大型项目时，会有许多开发人员，此时乱码和错误的机也会增加。类型安全是一种在编码期间检测错误的功能，而不是在编译项目时检测错误。这为开发团队创建了一个更高效的编码和调试过程。
*  更强的生产力干净的ECMAScript6代码，自动完成和动态输入等因素有助于提高开发人员的工作效率。这些功能也有助于编译器创建优化的代码。
### TypeScript增加了什么
* 类型
* 支持ES的新特性。
* 强大的开发工具。
* 添加ES不具备的新特性。
* 丰富的配置选项。
## TypeScript环境搭建
1. 下载安装Node.js
2. npm安装typescript `npm -g i typescript`
3. 使用tsc对ts文件进行编译
4. 创建tsconfig.json `tsc --init`
## tsc常用命令
* –project（简写 -p）：编译器直接在该目录下查找 tsconfig.json 文件，如果没找到则报错。
* –build（简写 -b）：编译器会进行增量构建。先找到所有引用的工程，然后检查它们是否为最新版本，最后按顺序构建非最新版本的工程。
* –verbose（简写 -v）：打印详细的日志（可以与其它标记一起使用）。
*  –dry: 显示将要执行的操作但是并不真正进行这些操作。
*  –clean: 删除指定工程的输出（可以与–dry一起使用）。
* –force: 把所有工程当作非最新版本对待。
* –watch（简写 -w）：观察模式。watch 模式监控当前项目 ts 文件变化立即进行编译。
## tsconfig.json文件详解
```json
```

## ts类型
### ts声明
**类型声明**：
* 类型声明是TS非常重要的特点。
* 通过类型声明可以指定ts中遍历（参数、形参）的类型。
* 指定类型后，当为变量赋值时，ts编译器会自动检查值是否符合类型声明，符合则赋值，否则报错。
* 类型声明变量设置了类型，使得变量只能存储已设定的类型的值。
let 变量:类型;
let 变量:类型 = 值;
function fun(参数:类型，参数:类型，...):类型{
...
}s
**自动类型判断** ：
* ts拥有自动的类型判断机制。
* 当对变量的声明和赋值时同时进行时，ts会自动判断变量的类型。
* 所以如何你的变量声明和赋值是同时进行的，可以省略掉类型声明。
### ts数据类型

| 类型        | 例子                       | 描述                                      |
|-----------|--------------------------|-----------------------------------------|
| number    | 1,2,-2,1.2               | 任意数字                                    |
| string    | hello world              | 任意字符串                                   |
| boolean   | true,false               |                                         |
| any       | *                        | 任意类型,不安全                                |
| unknown   | *                        | 类型安全的any                                |
| void      | function func():void { } | 用来表示方法没有返回值                             |
| object    |                          | json对象                                  |
| array     | [1,2,3]                  | js数组                                    |
| tuple     | [3,'hello world']        | ts新增类型                                  |
| enum      |                          | ts新增类型                                  |
| null      |                          | 表示对象值缺失                                 |
| undefined |                          | 初始化变量为一个未定义的值                           |
| never     |                          | never是其他类型的null、undefined的子类型，代表从不会出现的值 |

### 类型断言
```ts
//any 表示任意类型 一个变量设置any相当于对该变量关闭ts的类型检测 不建议使用
let d: any
let e  // 声明变量不指定类型，则ts解析器会自动判断变量的类型为any（隐式的any）
d = 10
d = "as"
d = true

//unknown 表示未知类型, 是一个类型安全的any 不能直接赋值给其它变量
let f: unknown
f = 10
f = "as"
f = true
let s: string; // any可以将任意值都赋给其它变量 所以很危险不仅搞自己还把别人也搞了
s = d
// s = f   // unknown就不行，此时会有下波浪线提示
// unknown我们可以通过下面的语法进行赋值

// 第一种通过判断
if (typeof f === "string") {
    s = f
}

// 第二种通过断言
s = f as string

// 第三种<>
s = <string>f  //表达意思是一样的 都是表达当f为string时才给s赋值

```
### 函数
函数在JavaScript中最重要的编程方式，函数类型也是TypeScript中重要的组成部分
函数是有单独的类型的Function
语法：（形参：类型，形参：类型）=> 返回值的类型
* 函数参数的可选类型
* 参数的默认值
* 函数的剩余参数
** 函数重载 **
* 同一个函数提供多个函数定义来进行函数重载
* 多个函数函数名相同，函数的参数类型、顺序、个数不同
* 注意函数重载与返回值的类型无关
* ts重载的作用，只是多了一个参数校验的功能。也就是说在进行函数调用的时候，会对参数进行检查，只有传入的参数类型，顺序，个数与定义的重载函数的参数相同，才能调用成功，否则报错。
## 面向对象
* 传统方法中，JavaScript 通过构造函数实现类的概念，通过原型链实现继承。而在 ES6 中，我们终于迎来了 class。
* TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。

虽然 JavaScript 中有类的概念，但是可能大多数 JavaScript 程序员并不是非常熟悉类
* 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
* 对象（Object）：类的实例，通过 new 生成
* 面向对象（OOP）的三大特性：封装、继承、多态
* 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
* 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
* 存取器（getter & setter）：用以改变属性的读取和赋值行为
* 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
* 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
* 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
* 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。
