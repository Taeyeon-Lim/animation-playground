import classNames from 'classnames/bind';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import DefaultButton from '../../components/DefaultButton';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

type Coordinate = {
  x: number;
  y: number;
};

function DrawingCanvas() {
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined
  );
  const [isPainting, setIsPainting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 캔버스 크기 초기화
  const resize = () => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    if (ctx) {
      // canvas.width = document.body.clientWidth * pixelRatio;
      // canvas.height = document.body.clientHeight * pixelRatio;
      canvas.width = canvas.clientWidth * pixelRatio;
      canvas.height = canvas.clientHeight * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
    }
  };

  // 좌표 구하기
  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    return {
      x: event.pageX - canvas.offsetLeft - 10,
      y: event.pageY - canvas.offsetTop + 14,
    };
  };

  // 선 그리기
  const drawLine = (
    originMousePosition: Coordinate,
    newMousePosition: Coordinate
  ) => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.strokeStyle = 'blue';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(originMousePosition.x, originMousePosition.y);
      ctx.lineTo(newMousePosition.x, newMousePosition.y);
      ctx.closePath();
      ctx.stroke();
    }
  };

  // mouse painting
  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);

    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, []);
  const paint = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [mousePosition, isPainting]
  );
  const endPaint = useCallback(() => setIsPainting(false), []);

  // touch painting
  const startTouch = useCallback((event: TouchEvent) => {
    event.preventDefault();
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const touch = event.touches[0]; // 터치 좌표
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
  }, []);
  const touch = useCallback((event: TouchEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    const touch = event.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
  }, []);
  const endTouch = useCallback((event: TouchEvent) => {
    event.preventDefault();
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    const mouseEvent = new MouseEvent('mouseup', {});
    canvas.dispatchEvent(mouseEvent);
  }, []);

  // 페인팅 초기화
  const clearPaint = () => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.getContext('2d')!!.clearRect(0, 0, canvas.width, canvas.height);
  };

  // 캔버스 크기 초기화
  useEffect(() => {
    resize();
  }, []);

  // 이벤트 핸들링
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;

    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseup', endPaint);
    canvas.addEventListener('mouseleave', endPaint);

    canvas.addEventListener('touchstart', startTouch);
    canvas.addEventListener('touchmove', touch);
    canvas.addEventListener('touchend', endTouch);
    return () => {
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseup', endPaint);
      canvas.removeEventListener('mouseleave', endPaint);

      canvas.removeEventListener('touchstart', startTouch);
      canvas.removeEventListener('touchmove', touch);
      canvas.removeEventListener('touchend', endTouch);
    };
  }, [startPaint, paint, endPaint, startTouch, touch, endTouch]);

  return (
    <div className={cx('canvas_section')}>
      <div className={cx('draw_button_group')}>
        <DefaultButton
          name={'Click or Touch'}
          onClickButton={clearPaint}
          size={'large'}
          color={'blue'}
        />
      </div>
      <canvas ref={canvasRef} className={cx('draw_canvas')} />
    </div>
  );
}

export default DrawingCanvas;
