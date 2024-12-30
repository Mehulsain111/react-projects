import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import React, { useState, useRef, useEffect } from "react";
import { Menu } from "./component  /Menu";

function App() {
  const canvaRef = useRef();
  const ctxRef = useRef();
  const [isDrawing, setisDrawing] = useState(false);
  const [color, setcolor] = useState("black");
  const [brushwid, setbrushwid] = useState(5);
  const [brushopac, setbrushopac] = useState(1);

  useEffect(() => {
    const canvas = canvaRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = brushopac;
    ctx.strokeStyle = color;
    ctx.lineWidth = brushwid;
    ctxRef.current = ctx;

    canvas.width = 1280;
    canvas.height = 720;
  }, [color, brushopac, brushwid]);

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    const rect = canvaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctxRef.current.moveTo(x, y);
    setisDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setisDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const rect = canvaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctxRef.current.lineTo(x, y);
    tly;
    ctxRef.current.stroke();
  };

  const handleMouseLeave = () => {
    if (isDrawing) {
      endDrawing();
    }
  };

  return (
    <div className="App">
      <div className="draw-area">
        <Menu
          setcolor={setcolor}
          setbrushwid={setbrushwid}
          setbrushopac={setbrushopac}
        />
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          onMouseLeave={handleMouseLeave}
          ref={canvaRef}
          width={`100px`}
          height={`100px`}
        />
      </div>
    </div>
  );
}

export default App;
