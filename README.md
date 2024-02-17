# Reading notes for《The Little Schemer》

## 目的

使用ramda.js库来实现了书中用到的Haskell函数，如car、cdr，帮助阅读书时可以书写代码来跟上思路。

## 使用说明

src中按照章节，书写了各个函数的实现。

dist中，是src编译的js代码。

test中安装章节，书写了对应函数的测试用例。

安装项目：
``` shell
yarn
```

启动项目：
``` shell
yarn start
```

执行测试用例：
``` shell
yarn test
```

## 关于类型

通常来说递归函数需要手动标注类型。

比如第4章的lt函数，如果不写返回值类型，那么TypeScript就推断不出来返回值的类型。

## 待办

1. 打包后的dist中，存在很多any类型。为它们附上类型。