

# 剑指offer13-调整数组顺序使奇数位于偶数前面



## 题目描述

######   输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

###### 我的解法：

```javascript
var exchange = function (nums) {
      const ji = []
      const ou = []
      const arr = []
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
          ou.push(nums[i])
        } else {
          ji.push(nums[i])
        }
        let arr = [...ji, ...ou]
      }
      return arr
    };
```

###### 其它的解法：使用数组forEach和concat方法

```javascript
  var exchange = function (nums) {
      const jishu=[]
      const oushu=[]
      nums.forEach((item)=>{
          if(item%2===0){
              oushu.push(item)
              }else{jishu.push(item)}
      })
      return jishu.concat(oushu)
    };
```

###### 考虑使用双指针解：

##### 思路：

##### 第一个指针start从数组第一个元素出发，向尾部前进

##### 第二个指针end从数组的最后一个元素出发，向头部前进

##### start遍历到偶数，end遍历到奇数时，交换两个数的位置

##### 当start>end时，完成交换

```javascript
 function reOrderArray(array) {
      if (Array.isArray(array)) {
        let start = 0;
        let end = array.length - 1;
        while (start < end) {
          while (array[start] % 2 === 1) {
            start++;
          }
          while (array[end] % 2 === 0) {
            end--;
          }
          if (start < end) {
            [array[start], array[end]] = [array[end], array[start]]
          }
        }
      }
      return array;
    }
```



```java
class Solution {
    public int[] exchange(int[] nums) {
        int i=0,j=nums.length-1;
        while(i<=j){
            if((nums[i]&1)==1) i++;
            else if((nums[j]&1)==0) j--;
            else {
                int tmp=nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
                i++;
                j--;
            }
        }
        return nums;
    }
}
```

