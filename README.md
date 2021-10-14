# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

# 项目规范

## 在项目中使用 prettier

## 使用预提交 hook

```
npx mrm lint-staged // 实际操作直接使用存在问题，会报错
//使用一下代替
npm mrm@2 lint-staged
```

## 兼容 create-react-app 中 eslint 的规则

```
yarn add eslint --dev
```
eslint --init生成eslint配置文件

```
yarn add eslint-config-prettier --dev
```
修改eslint配置文件

```
"extends": [
        "plugin:react/recommended",
        "standard",
    +   "prettier"
    ],
```
## git commit 描述规范

```
yarn add @commitlint/config-conventional @commitlint/cli --dev
```

新增 commitlint.config.js

```
module.exports = {extends: ['@commitlint/config-conventional']}
```

添加命令，约定提交语句的格式

```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```