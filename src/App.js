// コンポーネントを作成するファイル
import React from 'react';

// export:Square関数を、ファイルの外部からアクセス出来るように設定。
// コンポーネントアーキテクチャ：再利用可能なコンポーネントの作成
function Square({ value }){
  return <button className="squre">{ value }</button>;
}

// JSX構文を利用してSquareコンポーネントをrenderする
export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </div>
  );
}