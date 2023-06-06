// App.jsで作成したコンポーネントとWebブラウザの橋渡し
// 必要な要素の取り出し
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App';

// 最終的な成果物をpublic/index.htmlに適用
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
