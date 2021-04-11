#### 剑指offer  把数组排成最小的数

输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

**示例 1:**

```
输入: [10,2]
输出: "102"
```

**示例 2:**

```
输入: [3,30,34,5,9]
输出: "3033459"
```





```javascript
function minNumber(numbers) {
      numbers.sort(function (s1, s2) {
        const c1 = `${s1}${s2}`;
        const c2 = `${s2}${s1}`;
        return c1 - c2;
      });
      let min = '';
      numbers.map((i) => min += i);
      return min;
    }

```



