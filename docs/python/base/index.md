
# Python
## 环境安装
Python 的解释器是开源免费的，可以直接去官方网站进行下载。
注意：官网是在国外，默认国内访问与下载速度都会非常慢，如果不想等待可以查看最后附录中的下载方式。
首先访问 [Python 官网](https://www.python.org/) 然后点击 Downloads
### 镜像源
pip 国内的一些镜像
* 阿里云 http://mirrors.aliyun.com/pypi/simple/
* 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/
* 豆瓣(douban) http://pypi.douban.com/simple/
* 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/
* 中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/

注：使用国内的镜像源，安装各种包速度会快一些。

临时使用
> pip install 包名 -i 镜像url

### 永久修改
pip 配置文件：
1. Windows 的 pip 配置文件位于：%HOME%\pip\pip.ini 
2. 注：Windows 下 %HOME% 路径一般为：C:\Users\<UserName>
3. 新建 pip 目录，再往 pip 目录下创建一个 pip.ini 配置文件写入如下内容（如果没有配置文件则在相应路径新建一个）

这里以清华镜像源为例：
```
[global]
trusted-host = pypi.tuna.tsinghua.edu.cn
timeout = 6000
```


一个经验： 如果在指定国内的镜像源后，安装某些库速度还是比较慢，那么可以直接在浏览器打开镜像源网站地址，在浏览器中直接搜索并下载所需的库，然后使用命令pip install <文件名> 进行安装。
## 语法
Python的语法比较简单，采用缩进方式，写出来的代码就像下面的样子：ß
```python
# print absolute value of an integer:
a = 100
if a >= 0:
    print(a)
else:
    print(-a)
```
以#开头的语句是注释，注释是给人看的，可以是任意内容，解释器会忽略掉注释。
其他每一行都是一个语句，当语句以冒号:结尾时，缩进的语句视为代码块。
缩进有利有弊。好处是强迫你写出格式化的代码，但没有规定缩进是几个空格还是Tab。
按照约定俗成的惯例，应该始终坚持使用4个空格的缩进。
缩进的另一个好处是强迫你写出缩进较少的代码，你会倾向于把一段很长的代码拆分成若干函数，从而得到缩进较少的代码。
最后，请务必注意，Python程序是**大小写敏感**的，如果写错了大小写，程序会报错。
## 输入输出
```python
name = input("input ur name:")
print("ur name is :" + name)
```
## 标准数据类型
### Number(数字)
Python3 支持 int、float、bool、complex(复数)。
```python
# 奇葩的赋值方式，对象依次赋值给变量，并且没有类型声明
a, b, c, d = 20, 5.5, True, 4+3j

# output：<class 'int'> <class 'float'> <class 'bool'> <class 'complex'>
print(type(a), type(b), type(c), type(d))
```
在Python中，有两种除法，一种除法是 `/` ：
```python
>>> 10 / 3
3.3333333333333335
```
`/` 除法计算结果是浮点数，即使是两个整数恰好整除，结果也是浮点数：
还有一种除法是 `//` ，称为地板除，两个整数的除法仍然是整数：
```python
>>> 10 // 3
3
```
整数的地板除 `//` 永远是整数，即使除不尽。要做精确的除法，使用 `/` 就可以。
### String(字符串)
单引号或双引号表示字符串，`'`或`"`本身只是一种表示方式，不是字符串的一部分。
```python
'hello world'
"hello world"
```
转义字符`\`可以转义很多字符，比如`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\`。
如果字符串里面有很多字符都需要转义，就需要加很多`\`，为了简化，Python还允许用`r''`表示`''`内部的字符串默认不转义。
```python
# 输出转义后的制表符
print('\t')

# 直接输出字符，不进行转义
print(r'\t')
```
多行字符串：Python允许用`'''...'''`的格式表示多行内容，或者表示区块代码的注释
```python
# 多行字符串
print('''
无题
锦瑟无端五十弦
''')
```
### 布尔值
布尔值和布尔代数的表示完全一致，一个布尔值只有True、False两种值，要么是True，要么是False。
`and` 表示 `与运算`，`or` 表示 `或运算`，`not` 表示 `非运算`
```python
>>> True and True
True
>>> True and False
False
>>> False and False
False
>>> 5 > 3 and 3 > 1
True
>>> True or True
True
>>> True or False
True
>>> False or False
False
>>> 5 > 3 or 1 > 3
True
>>> not True
False
>>> not False
True
>>> not 1 > 2
True
```
### 空值None
空值是Python里一个特殊的值，用None表示。None不能理解为0，因为0是有意义的，而None是一个特殊的空值。
### 常量
在Python中，通常用全部大写的变量名表示常量：
```python
PI = 3.14159265359
```

但事实上PI仍然是一个变量，Python根本没有任何机制保证PI不会被改变，
所以，用全部大写的变量名表示常量只是一个习惯上的用法，如果你一定要改变变量PI的值，也没人能拦住你。
### 列表
list是一种有序的集合，可以随时添加和删除其中的元素。
列表 `[]` 很像JS里的数组，不限定元素的类型，并且是支持修改的。
#### 通用序列操作
```python
#列表list或元组tuple均支持以下操作
tags = [1, 2, 3, "hello", "world", True]

#1.索引访问，同其他语言
print(tags[1])  # [2]

#2.分片 [start:end] 不包含end索引

#a)截取第2位，即索引为1
print(tags[1:2])  # [2]

#b)截取最后一个元素
print(tags[-1:])  # [True]

#c)利用分片进行复制list，因为list也是引用，直接赋值只是引用copy，可以通过分片[:]达到深度复制
tagsCopy = tags[:]
tagsCopy += [False]
print(tags)
print(tagsCopy)

#3.序列相加，有些类似于拼接
print([1, 2, 3] + ["abc" + "xyz"])  # [1, 2, 3, 'abcxyz']

#4.序列乘法，即原来的序列被重复N次
print(["repeat"] * 3)  # ['repeat', 'repeat', 'repeat']

#5.检查元素是否在序列中，这里和js中的表示不一样
print("xyz" in ["abc", "xyz", "opq"])  # True
print("ll" in "hello")  # True

#6.长度、最大、最小
nums = [9, 5, 2, 7]
print(len(nums))
print(max(nums))
print(min(nums))
```
#### 列表list

- 列表赋值，同js
- 删除元素，`del lst[index]`
### 元组tuple
tuple和list非常类似，但是tuple一旦初始化就不能修改，比如同样是列出同学的名字：
```python
classmates = ('Michael', 'Bob', 'Tracy')
```
classmates这个tuple不能变了，它也没有append()，insert()这样的方法。
其他获取元素的方法和list是一样的，你可以正常地使用classmates[0]，classmates[-1]，但不能赋值成另外的元素。
不可变的tuple有什么意义？

因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple。

tuple的陷阱：当你定义一个tuple时，在定义的时候，tuple的元素就必须被确定下来，比如：

```python
>>> t = (1, 2)
>>> t
(1, 2)
```

如果要定义一个空的tuple，可以写成 `()`：

```python
>>> t = ()
>>> t
()
```

但是，要定义一个只有1个元素的tuple，如果你这么定义：

```python
>>> t = (1)
>>> t
1
```

定义的不是tuple，是 1 这个数！

这是因为括号 `()` 既可以表示tuple，又可以表示数学公式中的小括号，这就产生了歧义，

因此，Python规定，这种情况下，按小括号进行计算，计算结果自然是1。

所以，只有1个元素的tuple定义时必须加一个逗号 `,` ，来消除歧义：

```python
>>> t = (1,)
>>> t
(1,)
```

最后来看一个“可变的”tuple：

```python
>>> t = ('a', 'b', ['A', 'B'])
>>> t[2][0] = 'X'
>>> t[2][1] = 'Y'
>>> t
('a', 'b', ['X', 'Y'])
```

表面上看，tuple的元素确实变了，但其实变的不是tuple的元素，而是list的元素。

tuple一开始指向的list并没有改成别的list，所以，tuple所谓的“不变”是说，tuple的每个元素，指向永远不变。

即指向'a'，就不能改成指向'b'，指向一个list，就不能改成指向其他对象，但指向的这个list本身是可变的！



### Dictionary(字典)

Python内置了字典：dict的支持，dict全称dictionary，在其他语言中也称为map，使用键-值（key-value）存储，具有极快的查找速度。

举个例子，假设要根据同学的名字查找对应的成绩，如果用list实现，需要两个list：

```python
names = ['Michael', 'Bob', 'Tracy']
scores = [95, 75, 85]
```

给定一个名字，要查找对应的成绩，就先要在names中找到对应的位置，再从scores取出对应的成绩，list越长，耗时越长。

```python
>>> d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
>>> d['Michael']
95
```

由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉：
```python
>>> d['Jack'] = 90
>>> d['Jack']
90
>>> d['Jack'] = 88
>>> d['Jack']
88
```

要避免key不存在的错误，有两种办法，一是通过in判断key是否存在：
```python
>>> 'Thomas' in d
False
```
二是通过dict提供的get()方法，如果key不存在，可以返回None，或者自己指定的value：
```python
>>> d.get('Thomas')
>>> d.get('Thomas', -1)
-1
```
要删除一个key，用pop(key)方法，对应的value也会从dict中删除：
```python
>>> d.pop('Bob')
75
>>> d
{'Michael': 95, 'Tracy': 85}
```
和list比较，dict有以下几个特点：

1. 查找和插入的速度极快，不会随着key的增加而变慢；
2. 需要占用大量的内存，内存浪费多。

而list相反：

1. 查找和插入的时间随着元素的增加而增加；
2. 占用空间小，浪费内存很少。

dict可以用在需要高速查找的很多地方，在Python代码中几乎无处不在，
正确使用dict非常重要，需要牢记的第一条就是dict的key必须是不可变对象。
这是因为dict根据key来计算value的存储位置，如果每次计算相同的key得出的结果不同，那dict内部就完全混乱了。
这个通过key计算位置的算法称为哈希算法（Hash）。
要保证hash的正确性，作为key的对象就不能变。
在Python中，字符串、整数等都是不可变的，因此，可以放心地作为key。而list是可变的，就不能作为key：
### Sets(集合)
set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。
要创建一个set，需要提供一个list作为输入集合：
```python
>>> s = set([1, 2, 3])
>>> s
{1, 2, 3}
```
注意，传入的参数[1, 2, 3]是一个list，而显示的{1, 2, 3}只是告诉你这个set内部有1，2，3这3个元素，显示的顺序也不表示set是有序的。。
重复元素在set中自动被过滤：
```python
>>> s = set([1, 1, 2, 2, 3, 3])
>>> s
{1, 2, 3}
```
通过add(key)方法可以添加元素到set中，可以重复添加，但不会有效果：
```python
>>> s.add(4)
>>> s
{1, 2, 3, 4}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```
通过remove(key)方法可以删除元素：
```python
>>> s.remove(4)
>>> s
{1, 2, 3}
```
## 函数
要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数abs，只有一个参数。
可以直接从Python的官方网站查看文档：
> [http://docs.python.org/3/library/functions.html#abs](http://docs.python.org/3/library/functions.html#abs)

### 数据类型转换
Python内置的常用函数还包括数据类型转换函数，比如int()函数可以把其他数据类型转换为整数：
```python
>>> int('123')
123
>>> int(12.34)
12
>>> float('12.34')
12.34
>>> str(1.23)
'1.23'
>>> str(100)
'100'
>>> bool(1)
True
>>> bool('')
False
```
函数名其实就是指向一个函数对象的引用，完全可以把函数名赋给一个变量，相当于给这个函数起了一个“别名”：
```python
>>> a = abs # 变量a指向abs函数
>>> a(-1) # 所以也可以通过a调用abs函数
1
```
### 定义函数
在Python中，定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:
然后，在缩进块中编写函数体，函数的返回值用return语句返回。
我们以自定义一个求绝对值的my_abs函数为例：
### 空函数
如果想定义一个什么事也不做的空函数，可以用pass语句：
```python
def nop():
    pass
```

### 返回多个值
```python
def get_full_name():
    first_name = 'smith'
    last_name = 'will'
    return last_name, first_name

print(get_full_name()[0])
print(get_full_name()[1])
```
返回值是一个tuple！
但是，在语法上，返回一个tuple可以省略括号，而多个变量可以同时接收一个tuple，按位置赋给对应的值。
所以，Python的函数返回多值其实就是返回一个tuple，但写起来更方便。
关于函数：

- 定义函数时，需要确定函数名和参数个数；
- 如果有必要，可以先对参数的数据类型做检查；
- 函数体内部可以用return随时返回函数结果；
- 函数执行完毕也没有return语句时，自动return None。
- 函数可以同时返回多个值，但其实就是一个tuple。
## 循环
### while
`while` 循环输出0-9：
```python
a = 0
while a < 10:
    print(a)
    a += 1
```
while 循环使用 else 语句
在 while … else 在条件语句为 false 时执行 else 的语句块：
```python
a = 0
while a < 10:
    print(a)
    a += 1
else:
    print('!!! 循环结束 a 的值为：' + str(a))
```
```python
#死循环
while 1:
    print('hi')
```

同样需要注意冒号和缩进。另外，在 Python 中没有 do..while 循环。
### for
列表 list 的遍历：
```python
names = ['jack', 'lucy', 'smith', 'tony']
for t in names:
    print(t)
```
同样的，for..else的用法：
```python
names = ['jack', 'lucy', 'smith', 'tony']
for t in names:
    print(t)
else:
    print('list已遍历完成！')
```
### break和continue

break 语句可以跳出 for 和 while 的循环体。如果你从 for 或 while 循环中终止，任何对应的循环 else 块将不执行。
continue 语句被用来告诉 Python 跳过当前循环块中的剩余语句，然后继续进行下一轮循环。
```python
n = 5
while n > 0:
    n -= 1
    if n == 2:
        break
    print(n)
print('循环结束。')
```

```python
n = 5
while n > 0:
    n -= 1
    if n == 2:
        continue
    print(n)
print('循环结束。')
```
### range() 函数

如果你需要遍历数字序列，可以使用内置range()函数。它会生成数列，例如:

```python
#输出 0-4
for t in range(5):
    print(t)

#输出 10-14
for t in range(10, 15):
    print(t)
```
## 遍历
### list遍历

最简单的 `for...in` 遍历元素，打印输出索引和元素本身：

```python
names = ['jack', 'lucy', 'smith', 'tony']
for t in names:
    index = names.index(t)
    print('index is : {ind} ,element is : {val}'.format(ind=index, val=t))
```

通过 range() 方式快速遍历：

```python
names = ['jack', 'lucy', 'smith', 'tony']
for ind in range(len(names)):
    print('index is : {ind},element is :{val}'.format(ind=ind, val=names[ind]))
```

通过 `enumerate()` 函数将可遍历的数据组合成索引序列：

```python
names = ['jack', 'lucy', 'smith', 'tony']
for i, v in enumerate(names):
    print('{ind} and {val}'.format(ind=i, val=v))
```
### 字典遍历

遍历字典的key值：

```python
someone = {'name': 'jack', 'age': 12, 'location': '芜湖'}
for k in someone:
    print('key:{key},value:{val}'.format(key=k, val=someone[k]))
```

其实，上述 `for k in someone` 也可以换成 `for k in someone.key()`，二者是等价的

遍历字典的value值：

```python
for v in someone.values():
    print('value:{val}'.format(val=v))
```

遍历字典项， `items` 每项是 `tuple`

```python
for it in someone.items():
    print(it)
```

更加快捷的方式：

```python
for k, v in someone.items():
    print('{key}-{val}'.format(key=k, val=v))
```

列表字典组合的遍历：

```python
students = [
    {'name': 'jack', 'age': 12, 'location': '芜湖'},
    {'name': 'lucy', 'age': 14, 'location': '合肥'},
    {'name': 'smith', 'age': 22, 'location': '滁州'},
]

for t in students:
    print('第{number}个元素：'.format(number=students.index(t)))
    for k, v in t.items():
        print('{key}--{val}'.format(key=k, val=v))
```
## 模块

Python 模块(Module)，是一个 Python 文件，以 .py 结尾，包含了 Python 对象定义和Python语句。

模块让你能够有逻辑地组织你的 Python 代码段。
### import

import 模块名1 [as 别名1], 模块名2 [as 别名2]，…：

使用这种语法格式的 import 语句，会导入指定模块中的所有成员（包括变量、函数、类等）。

不仅如此，当需要使用模块中的成员时，需用该模块名（或别名）作为前缀，否则 Python 解释器会报错。

support.py 模块：

```python
def say_hello(name):
    print('你好 {name}'.format(name=name))
```

新建 run.py 文件：

```python
import support

hi = support.say_hello

hi('jack')
```

或者使用别名：

```python
import support as supp

hi = supp.say_hello

hi('jack')
```

一个模块只会被导入一次，不管你执行了多少次import。这样可以防止导入模块被一遍又一遍地执行。



### from…import 语句

`from 模块名 import 成员名 as 别名`

```python
# 导入sys模块的argv成员
from sys import argv
# 使用导入成员的语法，直接使用成员名访问
print(argv[0])
```

对于自定义的模块，还可以这样使用：

```python
from my_lib.test.support import say_hello as self_say

self_say('jack')
```

参考引用：

[Python教程-廖雪峰](https://www.liaoxuefeng.com/wiki/1016959663602400)
