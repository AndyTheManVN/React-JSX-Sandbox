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

## II. THỰC HÀNH:

> 1. Manipulate style and time:

- Id="greeting" xuất hiện Good morning, afternoon, everning và thay đổi màu theo đúng giờ truy cập trên trình duyệt.
- Dùng currentTime lấy giờ hiện tại
  ```
  const currentTime = new Date().getHours();
  new Date(2022,1,1,20): số cuối là giờ, nhập để test dữ liệu
  ```
- Dùng inline style để thay đổi màu với CSS

> 2. React Component:

- **Components cho phép chia UI thành các phần độc lập, có thể tái sử dụng và có thể sử dụng chúng 1 cách độc lập.**

- Tạo file App.jsx khai báo tất cả các component sử dụng cho app
  ```
  function App() {
    return(
      <Component1 />
      <component2 />
      ...
    );
  }
  export default App
  export {name1, name2}
  ```
- Trong app.js khai báo để dùng component<br>
  **<App />** : tên khai báo trong export default App
  `createRoot(document.getElementById("reactComponent")).render(<App />);`
