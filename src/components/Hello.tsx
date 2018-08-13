import * as React from "react/index.js";
import HelloProps from "../interfaces/Helloprops";


export const Hello = (props: HelloProps) => {
  console.log(props);
  return (
    <h1>Neira1991: Hello from {props.compiler} and {props.framework}!</h1>
  );
}
