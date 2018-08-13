import * as React from "react";

export interface HelloProps { compiler: string; framework: string; user: number }


export const Hello = (props: HelloProps) => {
  console.log(props);
  return (
    <h1>Neira1991: Hello from {props.compiler} and {props.framework}!</h1>
  );
}
