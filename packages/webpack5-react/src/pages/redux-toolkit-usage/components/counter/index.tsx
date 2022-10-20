import React, { useState, useCallback, useDebugValue, useLayoutEffect, memo } from 'react';

const useMyHook = () => {
  useDebugValue('自定义标签');
  useLayoutEffect(() => {
    console.log('同步挂载完毕');
  }, []);
};

export default memo(function Counter() {
  useMyHook();
  const [count, setCount] = useState(0);
  const getDOM = useCallback((node) => {
    if (!node) {
      console.log('已卸载');
      return;
    }
    console.log('已挂载');
  }, []);
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {
        count < 2 ? <button onClick={onClick} ref={getDOM}>点击增加</button> : null
      }
      <p>目前数量：{count}</p>
    </div>
  );
});

