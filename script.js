import * as reactFlipToolkit from "https://cdn.skypack.dev/react-flip-toolkit@7.0.13";
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const { useState, useEffect, useRef } = React;
const { Flipper, Flipped } = reactFlipToolkit;

const DeleteButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  function toggleState() {
    if (isOpen) return;
    setIsOpen(!isOpen);
    ref.current.blur();
  }

  function keydownHandler(event) {
    if (event.key === "Enter") {
      toggleState();
    }
  }

  return /*#__PURE__*/(
    React.createElement(Flipper, { flipKey: isOpen, spring: "stiff", stagger: true },
    isOpen ? /*#__PURE__*/
    React.createElement(Flipped, { flipId: "wrapper" }, /*#__PURE__*/
    React.createElement("div", {
      ref: ref,
      tabIndex: isOpen ? false : 0,
      role: "dialog",
      className: `dialog animated-in`,
      onClick: toggleState,
      onKeyDown: keydownHandler }, /*#__PURE__*/

    React.createElement("p", { className: "title content" }, "Delete this item?"), /*#__PURE__*/
    React.createElement("p", { class: "content" }, "This operation will permenantly delete this item and all its dependencies. This action ", /*#__PURE__*/

    React.createElement("strong", null, "cannot be undone"), "."), /*#__PURE__*/

    React.createElement("button", {
      className: "button secondary content",
      onClick: closeHandler => setIsOpen(false) }, "Oh no, bring me back"), /*#__PURE__*/



    React.createElement("button", {
      className: "button primary content",
      onClick: closeHandler => setIsOpen(false) }, "I understand, delete it"))) : /*#__PURE__*/






    React.createElement(Flipped, { flipId: "wrapper" }, /*#__PURE__*/
    React.createElement("div", {
      ref: ref,
      tabIndex: 0,
      role: "button",
      className: "button primary",
      onClick: toggleState,
      onKeyDown: keydownHandler }, /*#__PURE__*/

    React.createElement(Flipped, { flipId: "action" }, /*#__PURE__*/
    React.createElement("span", { className: "action" }, "Delete"))))));






};

const root = document.getElementById("root");
ReactDOM.render( /*#__PURE__*/React.createElement(DeleteButton, null), root);