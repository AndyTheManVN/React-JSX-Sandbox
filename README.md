# React-JSX-Sandbox

##I. HỌC VỚI CODESANDBOX KHÔNG CẦN CÀI ĐẶT:

> 1.  Cách hoạt động:

- File index.js: viết lệnh react dùng JSX
- **createRoot**:
  Tham số 1: id khai báo trong file html.
  Tham số 2: render dữ liệu theo cấu trúc javascript.
- File html: khai báo các id để nhận dữ liệu thay đổi từ createRoot.
  `<div id="root"></div>`

> 2.  Khai báo:

```
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
```

> 3.  Cú pháp:

- Biến sẽ nằm trong {} vì là dạng cấu trúc javascript
  `<h6> This year: **{new Date().getFullYear()}** </h6>`
