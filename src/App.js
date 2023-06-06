// コンポーネントを作成するファイル
import React from 'react';
import { useState } from 'react';

// export:Square関数を、ファイルの外部からアクセス出来るように設定。
// コンポーネントアーキテクチャ：再利用可能なコンポーネントの作成
function Square(){
  // Squareの現在の値をstateに保存し、Squareがクリックされた時にその値を変更
  // 初期値としてnullを入れる
  const [value, setValue] = useState(null);

  function handleClick(){
    console.log("clicked!");
    setValue('X');
  }

  return (
    <button 
      className="squre"
      onClick={ handleClick }
    >
      { value }
    </button>
  );
}

// JSX構文を利用してSquareコンポーネントをrenderする
export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}