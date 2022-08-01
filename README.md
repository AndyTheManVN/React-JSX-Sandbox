# React-JSX-Sandbox

## I. HỌC VỚI CODESANDBOX KHÔNG CẦN CÀI ĐẶT:

> 1.  Cách hoạt động:

- File index.js: viết lệnh react dùng JSX
- **createRoot**:<br>
  Tham số 1: id khai báo trong file html.<br>
  Tham số 2: render dữ liệu theo cấu trúc javascript.<br>
- File html: khai báo các id để nhận dữ liệu thay đổi từ createRoot.<br>
  `<div id="root"></div>`

> 2.  Khai báo:

```
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
```

> 3.  Cú pháp:

- Biến sẽ nằm trong {} vì là dạng cấu trúc javascript. <br>
  `<h6> This year: {new Date().getFullYear()} </h6>`
