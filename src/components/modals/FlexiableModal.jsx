import classNames from 'classnames';
import React from 'react';
import Button from '../common/Button';
import IconCross from "../../assets/icons/cross.svg?react";

const FlexiableModal = ({
  heading = "",
  subHeading = "",
  actionBtnText = "",
  content = "",
  nameLabel = "",
  btnPosition = "end",
  size = "normal",
  disabled = false,
  cancelOperation,
  actionOperation = () => {
    return 0;
  },
}) => {
  const handleCancelAction = () => {
    cancelOperation();
  };

  return (
    <div
      className={classNames(
        "fixed inset-0 h-full w-full flex items-center justify-center z-10 bg-[rgba(0,0,0,0.6)] overflow-y-auto transition-all"
      )}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-h-[90vh] overflow-y-auto">
        <div
          className={classNames("bg-white rounded-lg p-4 shadow-lg z-10", {
            "w-[500px]": size === "normal",
            "w-[400px]": size === "sm",
            "w-[700px]": size === "lg",
          })}
        >
          <div className={classNames("flex justify-between text-primary")}>
            <h2 id="modal-title" className={classNames("text-2xl font-medium")}>
              {heading}
            </h2>
            <button
            onClick={handleCancelAction}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
            {/* <IconCross className={classNames("w-4 h-4 cursor-pointer")} onClick={handleCancelAction} /> */}
          </div>
          <small className={classNames("font-semibold text-primary")}>{subHeading}</small>
          <div className={classNames("mt-4")}>
            <label className={classNames("font-semibold text-[.9rem]")}>{nameLabel}</label>
            <div className={classNames("text-sm font-medium text-primary")}>{content}</div>
          </div>
          <hr className={classNames("mt-2")} />
          <div
            className={classNames("mt-3 flex gap-x-3", {
              "justify-end": btnPosition === "end",
              "justify-start": btnPosition === "start",
              "justify-center": btnPosition === "middle",
            })}
          >
            {/* {/* <Button text={t("buttonName.cancelButton")} onClick={handleCancelAction} isSecondary={true} /> */}
            <Button text={actionBtnText} onClick={actionOperation}  /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexiableModal;