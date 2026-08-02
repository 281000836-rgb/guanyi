# 微信小程序本地存储适配

```js
import { createJournalStore } from "../src/index.js";

const storage = {
  getItem: (key) => wx.getStorageSync(key),
  setItem: (key, value) => wx.setStorageSync(key, value),
};

const journal = createJournalStore(storage);
journal.add("今天留意到空间采光的变化。");
```

默认只保存在本机。若下游产品加入云同步，必须先明确告知用户数据类别、用途、保存期限、删除方式和第三方接收方，并取得必要授权。
