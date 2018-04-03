# scheduler-client

[![NPM](https://nodei.co/npm/qcloud-image-sdk.png)](https://nodei.co/npm/qcloud-image-sdk/)

[![npm](https://img.shields.io/npm/v/qcloud-image-sdk.svg)](https://www.npmjs.com/package/qcloud-image-sdk)
[![npm](https://img.shields.io/npm/dm/qcloud-image-sdk.svg)](https://www.npmjs.com/package/qcloud-image-sdk)
[![Build Status](https://travis-ci.org/flavorzyb/qcloud-image-sdk.svg?branch=master)](https://travis-ci.org/flavorzyb/qcloud-image-sdk)
[![Coverage Status](https://coveralls.io/repos/github/flavorzyb/qcloud-image-sdk/badge.svg?branch=master)](https://coveralls.io/github/flavorzyb/qcloud-image-sdk?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/flavorzyb/qcloud-image-sdk/badge.svg)](https://snyk.io/test/github/flavorzyb/qcloud-image-sdk)
[![Dependency Status](https://img.shields.io/david/flavorzyb/qcloud-image-sdk.svg)](https://david-dm.org/flavorzyb/qcloud-image-sdk)
[![David](https://img.shields.io/david/dev/flavorzyb/qcloud-image-sdk.svg)](https://david-dm.org/flavorzyb/qcloud-image-sdk?type=dev)
[![npm](https://img.shields.io/npm/l/express.svg)](https://opensource.org/licenses/MIT)

考勤查询客户端系统，用于查询考勤明细

## 开发环境

- NodeJs v8.11.1
- pm2 2.10.2

## 运行

- 开发环境

```bash
pm2 start start.json --env dev 
```

- 生产环境

```bash
pm2 start start.json --env prod 
```

## 运行单元测试

```bash
npm run test
```

## 生成覆盖率报告

```bash
npm run coverage
```

## 运行单元测试并生成覆盖率报告

```bash
npm run test-coverage
```

