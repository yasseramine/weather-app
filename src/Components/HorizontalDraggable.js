import { useEffect } from 'react';

function HorizontalDraggable({ parent_ref, children }) {
  let mouseDown = false;
  let startX, scrollLeft;

  const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - parent_ref.current.offsetLeft;
    scrollLeft = parent_ref.current.scrollLeft;
  };

  const stopDragging = (e) => {
    mouseDown = false;
  };

  const move = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - parent_ref.current.offsetLeft;
    const scroll = x - startX;
    parent_ref.current.scrollLeft = scrollLeft - scroll;
  };

  useEffect(() => {
    parent_ref.current.addEventListener('mousemove', move, false);
    parent_ref.current.addEventListener(
      'mousedown',
      startDragging,
      false
    );
    parent_ref.current.addEventListener(
      'mouseup',
      stopDragging,
      false
    );
    parent_ref.current.addEventListener(
      'mouseleave',
      stopDragging,
      false
    );
  });
  return <div>{children}</div>;
}

export default HorizontalDraggable;
