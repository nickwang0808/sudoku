import React from "react";

interface IProps {
  data: number;
}

export default function Cell({ data }: IProps) {
  if (data !== 0) {
    return <div className="debug cell">{data}</div>;
  }
}
