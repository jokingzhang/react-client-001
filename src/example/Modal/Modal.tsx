import React from "react";
import * as ReactDOM from "react-dom";
import Modal from "antd/lib/modal";
import ActionButton from "antd/lib/modal/ActionButton";
import { ModalFuncProps, destroyFns } from "antd/lib/modal/Modal";

type NewModalFunc = (
  props: ModalFuncProps
) => {
  destroy: () => void;
};

type NewModalProps = typeof Modal & {
  open: NewModalFunc;
};

interface SimpleModalProps extends ModalFuncProps {
  close: (...args: any[]) => void;
  content?: React.ReactNode;
}

const SimpleModal = (props: SimpleModalProps) => {
  const { close, onCancel, onOk, okButtonProps, cancelButtonProps } = props;
  const okType = props.okType || "primary";
  const okText = props.okText || "确定";
  const cancelText = props.cancelText || "取消";
  const content = props.content;
  const autoFocusButton =
    props.autoFocusButton === null ? false : props.autoFocusButton || "ok";

  const renderFooter = () => {
    return (
      <div>
        <ActionButton
          actionFn={onCancel}
          closeModal={close}
          autoFocus={autoFocusButton === "cancel"}
          buttonProps={cancelButtonProps}
        >
          {cancelText}
        </ActionButton>
        <ActionButton
          type={okType}
          actionFn={onOk}
          closeModal={close}
          autoFocus={autoFocusButton === "ok"}
          buttonProps={okButtonProps}
        >
          {okText}
        </ActionButton>
      </div>
    );
  };

  return (
    <Modal {...props} closable={false} footer={renderFooter()}>
      {content}
    </Modal>
  );
};

function open(props: ModalFuncProps) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  let currentConfig = { ...props, close, visible: true } as any;

  function close(...args: any[]) {
    currentConfig = {
      ...currentConfig,
      visible: false,
      // @ts-ignore
      afterClose: destroy.bind(this, ...args)
    };

    render(currentConfig);
  }

  function destroy(...args: any[]) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel = args.some(param => param && param.triggerCancel);
    if (props.onCancel && triggerCancel) {
      props.onCancel(...args);
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function render(props: any) {
    ReactDOM.render(<SimpleModal {...props} />, div);
  }

  render(currentConfig);

  destroyFns.push(close);

  return {
    destroy: close
  };
}

const NewModal: NewModalProps = Object.assign({}, Modal, {open});

export default NewModal;
