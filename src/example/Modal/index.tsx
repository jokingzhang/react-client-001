import * as React from "react";
import { Button, message } from "antd";
import Modal from "./Modal";

const Example:React.FC = () => {
  const submit = () => {
    return new Promise(function(resolve, reject) {
      // ... some code
      setTimeout(() => {
        resolve("ok");
        message.success("提交成功");
      }, 1000);
    });
  };

  function openModal() {
    Modal.open({
      title: "Do you Want to delete these items?",
      content: "Some descriptions",
      onOk: submit,
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  return (
    <div className="App">
      <h1>Hello Modal</h1>
      <Button onClick={openModal}> 打开 </Button>
      <h2>Smarter way to management antd modal state!</h2>
    </div>
  );
}

export default Example;