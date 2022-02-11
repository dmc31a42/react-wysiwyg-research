webpackHotUpdate_N_E("pages/examples/[example]",{

/***/ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js":
/*!***************************************************************************************************!*\
  !*** ../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js ***!
  \***************************************************************************************************/
/*! exports provided: AndroidEditable, DefaultEditable, DefaultElement, DefaultLeaf, DefaultPlaceholder, Editable, ReactEditor, Slate, useEditor, useFocused, useReadOnly, useSelected, useSlate, useSlateStatic, withReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidEditable", function() { return AndroidEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEditable", function() { return Editable$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultElement", function() { return DefaultElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLeaf", function() { return DefaultLeaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPlaceholder", function() { return DefaultPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editable", function() { return Editable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactEditor", function() { return ReactEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slate", function() { return Slate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEditor", function() { return useEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocused", function() { return useFocused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReadOnly", function() { return useReadOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelected", function() { return useSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlate", function() { return useSlate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlateStatic", function() { return useSlateStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReact", function() { return withReact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! direction */ "../.yarn/cache/direction-npm-1.0.4-c097c04313-572ac39909.zip/node_modules/direction/index.js");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(direction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/throttle */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scroll-into-view-if-needed */ "../.yarn/cache/scroll-into-view-if-needed-npm-2.2.28-0c00390269-0b18d33118.zip/node_modules/scroll-into-view-if-needed/es/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! is-hotkey */ "../.yarn/cache/is-hotkey-npm-0.1.8-735647ba68-793d0cccaf.zip/node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "../.yarn/__virtual__/react-dom-virtual-42ecc65227/0/cache/react-dom-npm-16.14.0-516a97ad33-5a5c49da0f.zip/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);









function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * A React context for sharing the `readOnly` state of the editor.
 */

var ReadOnlyContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/**
 * Get the current `readOnly` state of the editor.
 */

var useReadOnly = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ReadOnlyContext);
};

/**
 * A React context for sharing the editor object, in a way that re-renders the
 * context whenever changes occur.
 */

var SlateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/**
 * Get the current editor object from the React context.
 */

var useSlate = () => {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SlateContext);

  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }

  var [editor] = context;
  return editor;
};

var IS_IOS = typeof navigator !== 'undefined' && typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var IS_APPLE = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent);
var IS_ANDROID = typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent);
var IS_FIREFOX = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var IS_SAFARI = typeof navigator !== 'undefined' && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent); // "modern" Edge was released at 79.x

var IS_EDGE_LEGACY = typeof navigator !== 'undefined' && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(navigator.userAgent);
var IS_CHROME = typeof navigator !== 'undefined' && /Chrome/i.test(navigator.userAgent); // Native `beforeInput` events don't work well with react on Chrome 75
// and older, Chrome 76+ can use `beforeInput` though.

var IS_CHROME_LEGACY = typeof navigator !== 'undefined' && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent); // Firefox did not support `beforeInput` until `v87`.

var IS_FIREFOX_LEGACY = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])).*/i.test(navigator.userAgent); // qq browser

var IS_QQBROWSER = typeof navigator !== 'undefined' && /.*QQBrowser/.test(navigator.userAgent); // UC mobile browser

var IS_UC_MOBILE = typeof navigator !== 'undefined' && /.*UCBrowser/.test(navigator.userAgent); // Wechat browser

var IS_WECHATBROWSER = typeof navigator !== 'undefined' && /.*Wechat/.test(navigator.userAgent); // Check if DOM is available as React does internally.
// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js

var CAN_USE_DOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined'); // COMPAT: Firefox/Edge Legacy don't support the `beforeinput` event
// Chrome Legacy doesn't support `beforeinput` correctly

var HAS_BEFORE_INPUT_SUPPORT = !IS_CHROME_LEGACY && !IS_EDGE_LEGACY && // globalThis is undefined in older browsers
typeof globalThis !== 'undefined' && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges === 'function';

/**
 * Prevent warning on SSR by falling back to useEffect when DOM isn't available
 */

var useIsomorphicLayoutEffect = CAN_USE_DOM ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/**
 * A React context for sharing the `decorate` prop of the editable.
 */

var DecorateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(() => []);
/**
 * Get the current `decorate` prop of the editable.
 */

var useDecorate = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(DecorateContext);
};

/**
 * Types.
 */
/**
 * Returns the host window of a DOM node
 */

var getDefaultView = value => {
  return value && value.ownerDocument && value.ownerDocument.defaultView || null;
};
/**
 * Check if a DOM node is a comment node.
 */

var isDOMComment = value => {
  return isDOMNode(value) && value.nodeType === 8;
};
/**
 * Check if a DOM node is an element node.
 */

var isDOMElement = value => {
  return isDOMNode(value) && value.nodeType === 1;
};
/**
 * Check if a value is a DOM node.
 */

var isDOMNode = value => {
  var window = getDefaultView(value);
  return !!window && value instanceof window.Node;
};
/**
 * Check if a value is a DOM selection.
 */

var isDOMSelection = value => {
  var window = value && value.anchorNode && getDefaultView(value.anchorNode);
  return !!window && value instanceof window.Selection;
};
/**
 * Check if a DOM node is an element node.
 */

var isDOMText = value => {
  return isDOMNode(value) && value.nodeType === 3;
};
/**
 * Checks whether a paste event is a plaintext-only event.
 */

var isPlainTextOnlyPaste = event => {
  return event.clipboardData && event.clipboardData.getData('text/plain') !== '' && event.clipboardData.types.length === 1;
};
/**
 * Normalize a DOM point so that it always refers to a text node.
 */

var normalizeDOMPoint = domPoint => {
  var [node, offset] = domPoint; // If it's an element node, its offset refers to the index of its children
  // including comment nodes, so try to find the right text child node.

  if (isDOMElement(node) && node.childNodes.length) {
    var isLast = offset === node.childNodes.length;
    var index = isLast ? offset - 1 : offset;
    [node, index] = getEditableChildAndIndex(node, index, isLast ? 'backward' : 'forward'); // If the editable child found is in front of input offset, we instead seek to its end

    isLast = index < offset; // If the node has children, traverse until we have a leaf node. Leaf nodes
    // can be either text nodes, or other void DOM nodes.

    while (isDOMElement(node) && node.childNodes.length) {
      var i = isLast ? node.childNodes.length - 1 : 0;
      node = getEditableChild(node, i, isLast ? 'backward' : 'forward');
    } // Determine the new offset inside the text node.


    offset = isLast && node.textContent != null ? node.textContent.length : 0;
  } // Return the node and offset.


  return [node, offset];
};
/**
 * Determines wether the active element is nested within a shadowRoot
 */

var hasShadowRoot = () => {
  return !!(window.document.activeElement && window.document.activeElement.shadowRoot);
};
/**
 * Get the nearest editable child and index at `index` in a `parent`, preferring
 * `direction`.
 */

var getEditableChildAndIndex = (parent, index, direction) => {
  var {
    childNodes
  } = parent;
  var child = childNodes[index];
  var i = index;
  var triedForward = false;
  var triedBackward = false; // While the child is a comment node, or an element node with no children,
  // keep iterating to find a sibling non-void, non-comment node.

  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute('contenteditable') === 'false') {
    if (triedForward && triedBackward) {
      break;
    }

    if (i >= childNodes.length) {
      triedForward = true;
      i = index - 1;
      direction = 'backward';
      continue;
    }

    if (i < 0) {
      triedBackward = true;
      i = index + 1;
      direction = 'forward';
      continue;
    }

    child = childNodes[i];
    index = i;
    i += direction === 'forward' ? 1 : -1;
  }

  return [child, index];
};
/**
 * Get the nearest editable child at `index` in a `parent`, preferring
 * `direction`.
 */

var getEditableChild = (parent, index, direction) => {
  var [child] = getEditableChildAndIndex(parent, index, direction);
  return child;
};
/**
 * Get a plaintext representation of the content of a node, accounting for block
 * elements which get a newline appended.
 *
 * The domNode must be attached to the DOM.
 */

var getPlainText = domNode => {
  var text = '';

  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }

  if (isDOMElement(domNode)) {
    for (var childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }

    var display = getComputedStyle(domNode).getPropertyValue('display');

    if (display === 'block' || display === 'list' || domNode.tagName === 'BR') {
      text += '\n';
    }
  }

  return text;
};
/**
 * Get x-slate-fragment attribute from data-slate-fragment
 */

var catchSlateFragment = /data-slate-fragment="(.+?)"/m;
var getSlateFragmentAttribute = dataTransfer => {
  var htmlData = dataTransfer.getData('text/html');
  var [, fragment] = htmlData.match(catchSlateFragment) || [];
  return fragment;
};
/**
 * Get the x-slate-fragment attribute that exist in text/html data
 * and append it to the DataTransfer object
 */

var getClipboardData = dataTransfer => {
  if (!dataTransfer.getData('application/x-slate-fragment')) {
    var fragment = getSlateFragmentAttribute(dataTransfer);

    if (fragment) {
      var clipboardData = new DataTransfer();
      dataTransfer.types.forEach(type => {
        clipboardData.setData(type, dataTransfer.getData(type));
      });
      clipboardData.setData('application/x-slate-fragment', fragment);
      return clipboardData;
    }
  }

  return dataTransfer;
};

/**
 * Two weak maps that allow us rebuild a path given a node. They are populated
 * at render time such that after a render occurs we can always backtrack.
 */
var NODE_TO_INDEX = new WeakMap();
var NODE_TO_PARENT = new WeakMap();
/**
 * Weak maps that allow us to go between Slate nodes and DOM nodes. These
 * are used to resolve DOM event-related logic into Slate actions.
 */

var EDITOR_TO_WINDOW = new WeakMap();
var EDITOR_TO_ELEMENT = new WeakMap();
var ELEMENT_TO_NODE = new WeakMap();
var NODE_TO_ELEMENT = new WeakMap();
var NODE_TO_KEY = new WeakMap();
var EDITOR_TO_KEY_TO_ELEMENT = new WeakMap();
/**
 * Weak maps for storing editor-related state.
 */

var IS_READ_ONLY = new WeakMap();
var IS_FOCUSED = new WeakMap();
var IS_COMPOSING = new WeakMap();
var IS_ON_COMPOSITION_END = new WeakMap();
/**
 * Weak maps for saving text on composition stage.
 */

var EDITOR_ON_COMPOSITION_TEXT = new WeakMap();
/**
 * Weak map for associating the context `onChange` context with the plugin.
 */

var EDITOR_TO_ON_CHANGE = new WeakMap();
var NODE_TO_RESTORE_DOM = new WeakMap();
/**
 * Symbols.
 */

var PLACEHOLDER_SYMBOL = Symbol('placeholder');

/**
 * Returns the number of characters that are the same at the beginning of the
 * String.
 *
 * @param prev  the previous text
 * @param next  the next text
 * @returns the offset of the start of the difference; null if there is no difference
 */

function getDiffStart(prev, next) {
  var length = Math.min(prev.length, next.length);

  for (var i = 0; i < length; i++) {
    if (prev.charAt(i) !== next.charAt(i)) return i;
  }

  if (prev.length !== next.length) return length;
  return null;
}
/**
 * Returns the number of characters that are the same at the end of the String
 * up to `max`. Max prevents double-counting characters when there are
 * multiple duplicate characters around the diff area.
 *
 * @param prev  the previous text
 * @param next  the next text
 * @param max  the max length to test.
 * @returns number of characters that are the same at the end of the string
 */


function getDiffEnd(prev, next, max) {
  var prevLength = prev.length;
  var nextLength = next.length;
  var length = Math.min(prevLength, nextLength, max);

  for (var i = 0; i < length; i++) {
    var prevChar = prev.charAt(prevLength - i - 1);
    var nextChar = next.charAt(nextLength - i - 1);
    if (prevChar !== nextChar) return i;
  }

  if (prev.length !== next.length) return length;
  return null;
}
/**
 * Takes two strings and returns an object representing two offsets. The
 * first, `start` represents the number of characters that are the same at
 * the front of the String. The `end` represents the number of characters
 * that are the same at the end of the String.
 *
 * Returns null if they are identical.
 *
 * @param prev  the previous text
 * @param next  the next text
 * @returns the difference text range; null if there are no differences.
 */


function getDiffOffsets(prev, next) {
  if (prev === next) return null;
  var start = getDiffStart(prev, next);
  if (start === null) return null;
  var maxEnd = Math.min(prev.length - start, next.length - start);
  var end = getDiffEnd(prev, next, maxEnd);
  if (end === null) return null;
  return {
    start,
    end
  };
}
/**
 * Takes a text string and returns a slice from the string at the given text range
 *
 * @param text  the text
 * @param offsets  the text range
 * @returns the text slice at text range
 */


function sliceText(text, offsets) {
  return text.slice(offsets.start, text.length - offsets.end);
}
/**
 * Takes two strings and returns a smart diff that can be used to describe the
 * change in a way that can be used as operations like inserting, removing or
 * replacing text.
 *
 * @param prev the previous text
 * @param next the next text
 * @returns the text difference
 */


function diffText(prev, next) {
  if (prev === undefined || next === undefined) return null;
  var offsets = getDiffOffsets(prev, next);
  if (offsets == null) return null;
  var insertText = sliceText(next, offsets);
  var removeText = sliceText(prev, offsets);
  return {
    start: offsets.start,
    end: prev.length - offsets.end,
    insertText,
    removeText
  };
}
function combineInsertedText(insertedText) {
  return insertedText.reduce((acc, _ref) => {
    var {
      text
    } = _ref;
    return "".concat(acc).concat(text.insertText);
  }, '');
}
function getTextInsertion(editor, domNode) {
  var node = ReactEditor.toSlateNode(editor, domNode);

  if (!slate__WEBPACK_IMPORTED_MODULE_1__["Text"].isText(node)) {
    return undefined;
  }

  var prevText = node.text;
  var nextText = domNode.textContent; // textContent will pad an extra \n when the textContent ends with an \n

  if (nextText.endsWith('\n')) {
    nextText = nextText.slice(0, nextText.length - 1);
  } // If the text is no different, there is no diff.


  if (nextText !== prevText) {
    var textDiff = diffText(prevText, nextText);

    if (textDiff !== null) {
      var textPath = ReactEditor.findPath(editor, node);
      return {
        text: textDiff,
        path: textPath
      };
    }
  }

  return undefined;
}
function normalizeTextInsertionRange(editor, range, _ref2) {
  var {
    path,
    text
  } = _ref2;
  var insertionRange = {
    anchor: {
      path,
      offset: text.start
    },
    focus: {
      path,
      offset: text.end
    }
  };

  if (!range || !slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(range)) {
    return insertionRange;
  }

  var {
    insertText,
    removeText
  } = text;
  var isSingleCharacterInsertion = insertText.length === 1 || removeText.length === 1;
  /**
   * This code handles edge cases that arise from text diffing when the
   * inserted or removed character is a single character, and the character
   * right before or after the anchor is the same as the one being inserted or
   * removed.
   *
   * Take this example: hello|o
   *
   * If another `o` is inserted at the selection's anchor in the example above,
   * it should be inserted at the anchor, but using text diffing, we actually
   * detect that the character was inserted after the second `o`:
   *
   * helloo[o]|
   *
   * Instead, in these very specific edge cases, we assume that the character
   * needs to be inserted after the anchor rather than where the diff was found:
   *
   * hello[o]|o
   */

  if (isSingleCharacterInsertion && slate__WEBPACK_IMPORTED_MODULE_1__["Path"].equals(range.anchor.path, path)) {
    var [_text] = Array.from(slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].nodes(editor, {
      at: range,
      match: slate__WEBPACK_IMPORTED_MODULE_1__["Text"].isText
    }));

    if (_text) {
      var [node] = _text;
      var {
        anchor
      } = range;
      var characterBeforeAnchor = node.text[anchor.offset - 1];
      var characterAfterAnchor = node.text[anchor.offset];

      if (insertText.length === 1 && insertText === characterAfterAnchor) {
        // Assume text should be inserted at the anchor
        return range;
      }

      if (removeText.length === 1 && removeText === characterBeforeAnchor) {
        // Assume text should be removed right before the anchor
        return {
          anchor: {
            path,
            offset: anchor.offset - 1
          },
          focus: {
            path,
            offset: anchor.offset
          }
        };
      }
    }
  }

  return insertionRange;
}

/**
 * A React context for sharing the editor object.
 */

var EditorContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/**
 * Get the current editor object from the React context.
 */

var useSlateStatic = () => {
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(EditorContext);

  if (!editor) {
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  }

  return editor;
};

/**
 * An auto-incrementing identifier for keys.
 */
var n = 0;
/**
 * A class that keeps track of a key string. We use a full class here because we
 * want to be able to use them as keys in `WeakMap` objects.
 */

class Key {
  constructor() {
    this.id = "".concat(n++);
  }

}

var ReactEditor = {
  /**
   * Return the host window of the current editor.
   */
  getWindow(editor) {
    var window = EDITOR_TO_WINDOW.get(editor);

    if (!window) {
      throw new Error('Unable to find a host window element for this editor');
    }

    return window;
  },

  /**
   * Find a key for a Slate node.
   */
  findKey(editor, node) {
    var key = NODE_TO_KEY.get(node);

    if (!key) {
      key = new Key();
      NODE_TO_KEY.set(node, key);
    }

    return key;
  },

  /**
   * Find the path of Slate node.
   */
  findPath(editor, node) {
    var path = [];
    var child = node;

    while (true) {
      var parent = NODE_TO_PARENT.get(child);

      if (parent == null) {
        if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(child)) {
          return path;
        } else {
          break;
        }
      }

      var i = NODE_TO_INDEX.get(child);

      if (i == null) {
        break;
      }

      path.unshift(i);
      child = parent;
    }

    throw new Error("Unable to find the path for Slate node: ".concat(JSON.stringify(node)));
  },

  /**
   * Find the DOM node that implements DocumentOrShadowRoot for the editor.
   */
  findDocumentOrShadowRoot(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();

    if ((root instanceof Document || root instanceof ShadowRoot) && root.getSelection != null) {
      return root;
    }

    return el.ownerDocument;
  },

  /**
   * Check if the editor is focused.
   */
  isFocused(editor) {
    return !!IS_FOCUSED.get(editor);
  },

  /**
   * Check if the editor is in read-only mode.
   */
  isReadOnly(editor) {
    return !!IS_READ_ONLY.get(editor);
  },

  /**
   * Blur the editor.
   */
  blur(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, false);

    if (root.activeElement === el) {
      el.blur();
    }
  },

  /**
   * Focus the editor.
   */
  focus(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, true);

    if (root.activeElement !== el) {
      el.focus({
        preventScroll: true
      });
    }
  },

  /**
   * Deselect the editor.
   */
  deselect(editor) {
    ReactEditor.toDOMNode(editor, editor);
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();

    if (domSelection && domSelection.rangeCount > 0) {
      domSelection.removeAllRanges();
    }

    if (selection) {
      slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
    }
  },

  /**
   * Check if a DOM node is within the editor.
   */
  hasDOMNode(editor, target) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      editable = false
    } = options;
    var editorEl = ReactEditor.toDOMNode(editor, editor);
    var targetEl; // COMPAT: In Firefox, reading `target.nodeType` will throw an error if
    // target is originating from an internal "restricted" element (e.g. a
    // stepper arrow on a number input). (2018/05/04)
    // https://github.com/ianstormtaylor/slate/issues/1819

    try {
      targetEl = isDOMElement(target) ? target : target.parentElement;
    } catch (err) {
      if (!err.message.includes('Permission denied to access property "nodeType"')) {
        throw err;
      }
    }

    if (!targetEl) {
      return false;
    }

    return targetEl.closest("[data-slate-editor]") === editorEl && (!editable || targetEl.isContentEditable ? true : typeof targetEl.isContentEditable === 'boolean' && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    targetEl.closest('[contenteditable="false"]') === editorEl || !!targetEl.getAttribute('data-slate-zero-width'));
  },

  /**
   * Insert data from a `DataTransfer` into the editor.
   */
  insertData(editor, data) {
    editor.insertData(data);
  },

  /**
   * Insert fragment data from a `DataTransfer` into the editor.
   */
  insertFragmentData(editor, data) {
    return editor.insertFragmentData(data);
  },

  /**
   * Insert text data from a `DataTransfer` into the editor.
   */
  insertTextData(editor, data) {
    return editor.insertTextData(data);
  },

  /**
   * Sets data from the currently selected fragment on a `DataTransfer`.
   */
  setFragmentData(editor, data, originEvent) {
    editor.setFragmentData(data, originEvent);
  },

  /**
   * Find the native DOM element from a Slate node.
   */
  toDOMNode(editor, node) {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    var domNode = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(node) ? EDITOR_TO_ELEMENT.get(editor) : KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.get(ReactEditor.findKey(editor, node));

    if (!domNode) {
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(JSON.stringify(node)));
    }

    return domNode;
  },

  /**
   * Find a native DOM selection point from a Slate point.
   */
  toDOMPoint(editor, point) {
    var [node] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].node(editor, point.path);
    var el = ReactEditor.toDOMNode(editor, node);
    var domPoint; // If we're inside a void node, force the offset to 0, otherwise the zero
    // width spacing character will result in an incorrect offset of 1

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
      at: point
    })) {
      point = {
        path: point.path,
        offset: 0
      };
    } // For each leaf, we need to isolate its content, which means filtering
    // to its direct text and zero-width spans. (We have to filter out any
    // other siblings that may have been rendered alongside them.)


    var selector = "[data-slate-string], [data-slate-zero-width]";
    var texts = Array.from(el.querySelectorAll(selector));
    var start = 0;

    for (var text of texts) {
      var domNode = text.childNodes[0];

      if (domNode == null || domNode.textContent == null) {
        continue;
      }

      var {
        length
      } = domNode.textContent;
      var attr = text.getAttribute('data-slate-length');
      var trueLength = attr == null ? length : parseInt(attr, 10);
      var end = start + trueLength;

      if (point.offset <= end) {
        var offset = Math.min(length, Math.max(0, point.offset - start));
        domPoint = [domNode, offset];
        break;
      }

      start = end;
    }

    if (!domPoint) {
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(JSON.stringify(point)));
    }

    return domPoint;
  },

  /**
   * Find a native DOM range from a Slate `range`.
   *
   * Notice: the returned range will always be ordinal regardless of the direction of Slate `range` due to DOM API limit.
   *
   * there is no way to create a reverse DOM Range using Range.setStart/setEnd
   * according to https://dom.spec.whatwg.org/#concept-range-bp-set.
   */
  toDOMRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    var isBackward = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isBackward(range);
    var domAnchor = ReactEditor.toDOMPoint(editor, anchor);
    var domFocus = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(range) ? domAnchor : ReactEditor.toDOMPoint(editor, focus);
    var window = ReactEditor.getWindow(editor);
    var domRange = window.document.createRange();
    var [startNode, startOffset] = isBackward ? domFocus : domAnchor;
    var [endNode, endOffset] = isBackward ? domAnchor : domFocus; // A slate Point at zero-width Leaf always has an offset of 0 but a native DOM selection at
    // zero-width node has an offset of 1 so we have to check if we are in a zero-width node and
    // adjust the offset accordingly.

    var startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
    var isStartAtZeroWidth = !!startEl.getAttribute('data-slate-zero-width');
    var endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
    var isEndAtZeroWidth = !!endEl.getAttribute('data-slate-zero-width');
    domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
    domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
    return domRange;
  },

  /**
   * Find a Slate node from a native DOM `element`.
   */
  toSlateNode(editor, domNode) {
    var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;

    if (domEl && !domEl.hasAttribute('data-slate-node')) {
      domEl = domEl.closest("[data-slate-node]");
    }

    var node = domEl ? ELEMENT_TO_NODE.get(domEl) : null;

    if (!node) {
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(domEl));
    }

    return node;
  },

  /**
   * Get the target range from a DOM `event`.
   */
  findEventRange(editor, event) {
    if ('nativeEvent' in event) {
      event = event.nativeEvent;
    }

    var {
      clientX: x,
      clientY: y,
      target
    } = event;

    if (x == null || y == null) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }

    var node = ReactEditor.toSlateNode(editor, event.target);
    var path = ReactEditor.findPath(editor, node); // If the drop target is inside a void node, move it into either the
    // next or previous node, depending on which side the `x` and `y`
    // coordinates are closest to.

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node)) {
      var rect = target.getBoundingClientRect();
      var isPrev = editor.isInline(node) ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;
      var edge = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].point(editor, path, {
        edge: isPrev ? 'start' : 'end'
      });
      var point = isPrev ? slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].before(editor, edge) : slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].after(editor, edge);

      if (point) {
        var _range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, point);

        return _range;
      }
    } // Else resolve a range from the caret position where the drop occured.


    var domRange;
    var {
      document
    } = ReactEditor.getWindow(editor); // COMPAT: In Firefox, `caretRangeFromPoint` doesn't exist. (2016/07/25)

    if (document.caretRangeFromPoint) {
      domRange = document.caretRangeFromPoint(x, y);
    } else {
      var position = document.caretPositionFromPoint(x, y);

      if (position) {
        domRange = document.createRange();
        domRange.setStart(position.offsetNode, position.offset);
        domRange.setEnd(position.offsetNode, position.offset);
      }
    }

    if (!domRange) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    } // Resolve a Slate range from the DOM range.


    var range = ReactEditor.toSlateRange(editor, domRange, {
      exactMatch: false,
      suppressThrow: false
    });
    return range;
  },

  /**
   * Find a Slate point from a DOM selection's `domNode` and `domOffset`.
   */
  toSlatePoint(editor, domPoint, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
    var parentNode = nearestNode.parentNode;
    var textNode = null;
    var offset = 0;

    if (parentNode) {
      var _domNode$textContent;

      var voidNode = parentNode.closest('[data-slate-void="true"]');
      var leafNode = parentNode.closest('[data-slate-leaf]');
      var domNode = null; // Calculate how far into the text node the `nearestNode` is, so that we
      // can determine what the offset relative to the text node is.

      if (leafNode) {
        textNode = leafNode.closest('[data-slate-node="text"]');

        if (textNode) {
          var window = ReactEditor.getWindow(editor);
          var range = window.document.createRange();
          range.setStart(textNode, 0);
          range.setEnd(nearestNode, nearestOffset);
          var contents = range.cloneContents();
          var removals = [...Array.prototype.slice.call(contents.querySelectorAll('[data-slate-zero-width]')), ...Array.prototype.slice.call(contents.querySelectorAll('[contenteditable=false]'))];
          removals.forEach(el => {
            el.parentNode.removeChild(el);
          }); // COMPAT: Edge has a bug where Range.prototype.toString() will
          // convert \n into \r\n. The bug causes a loop when slate-react
          // attempts to reposition its cursor to match the native position. Use
          // textContent.length instead.
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10291116/

          offset = contents.textContent.length;
          domNode = textNode;
        }
      } else if (voidNode) {
        // For void nodes, the element with the offset key will be a cousin, not an
        // ancestor, so find it by going down from the nearest void parent.
        leafNode = voidNode.querySelector('[data-slate-leaf]'); // COMPAT: In read-only editors the leaf is not rendered.

        if (!leafNode) {
          offset = 1;
        } else {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          offset = domNode.textContent.length;
          domNode.querySelectorAll('[data-slate-zero-width]').forEach(el => {
            offset -= el.textContent.length;
          });
        }
      }

      if (domNode && offset === domNode.textContent.length && (parentNode.hasAttribute('data-slate-zero-width') || IS_FIREFOX && (_domNode$textContent = domNode.textContent) !== null && _domNode$textContent !== void 0 && _domNode$textContent.endsWith('\n\n'))) {
        offset--;
      }
    }

    if (!textNode) {
      if (suppressThrow) {
        return null;
      }

      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(domPoint));
    } // COMPAT: If someone is clicking from one Slate editor into another,
    // the select event fires twice, once for the old editor's `element`
    // first, and then afterwards for the correct `element`. (2017/03/03)


    var slateNode = ReactEditor.toSlateNode(editor, textNode);
    var path = ReactEditor.findPath(editor, slateNode);
    return {
      path,
      offset
    };
  },

  /**
   * Find a Slate range from a DOM range or selection.
   */
  toSlateRange(editor, domRange, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
    var anchorNode;
    var anchorOffset;
    var focusNode;
    var focusOffset;
    var isCollapsed;

    if (el) {
      if (isDOMSelection(domRange)) {
        anchorNode = domRange.anchorNode;
        anchorOffset = domRange.anchorOffset;
        focusNode = domRange.focusNode;
        focusOffset = domRange.focusOffset; // COMPAT: There's a bug in chrome that always returns `true` for
        // `isCollapsed` for a Selection that comes from a ShadowRoot.
        // (2020/08/08)
        // https://bugs.chromium.org/p/chromium/issues/detail?id=447523

        if (IS_CHROME && hasShadowRoot()) {
          isCollapsed = domRange.anchorNode === domRange.focusNode && domRange.anchorOffset === domRange.focusOffset;
        } else {
          isCollapsed = domRange.isCollapsed;
        }
      } else {
        anchorNode = domRange.startContainer;
        anchorOffset = domRange.startOffset;
        focusNode = domRange.endContainer;
        focusOffset = domRange.endOffset;
        isCollapsed = domRange.collapsed;
      }
    }

    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(domRange));
    }

    var anchor = ReactEditor.toSlatePoint(editor, [anchorNode, anchorOffset], {
      exactMatch,
      suppressThrow
    });

    if (!anchor) {
      return null;
    }

    var focus = isCollapsed ? anchor : ReactEditor.toSlatePoint(editor, [focusNode, focusOffset], {
      exactMatch,
      suppressThrow
    });

    if (!focus) {
      return null;
    }

    var range = {
      anchor: anchor,
      focus: focus
    }; // if the selection is a hanging range that ends in a void
    // and the DOM focus is an Element
    // (meaning that the selection ends before the element)
    // unhang the range to avoid mistakenly including the void

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(range) && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isForward(range) && isDOMElement(focusNode) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
      at: range.focus,
      mode: 'highest'
    })) {
      range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].unhangRange(editor, range, {
        voids: true
      });
    }

    return range;
  },

  hasRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasPath(editor, anchor.path) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasPath(editor, focus.path);
  }

};

function gatherMutationData(editor, mutations) {
  var addedNodes = [];
  var removedNodes = [];
  var insertedText = [];
  var characterDataMutations = [];
  mutations.forEach(mutation => {
    switch (mutation.type) {
      case 'childList':
        {
          if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach(addedNode => {
              addedNodes.push(addedNode);
            });
          }

          mutation.removedNodes.forEach(removedNode => {
            removedNodes.push(removedNode);
          });
          break;
        }

      case 'characterData':
        {
          characterDataMutations.push(mutation); // Changes to text nodes should consider the parent element

          var {
            parentNode
          } = mutation.target;

          if (!parentNode) {
            return;
          }

          var textInsertion = getTextInsertion(editor, parentNode);

          if (!textInsertion) {
            return;
          } // If we've already detected a diff at that path, we can return early


          if (insertedText.some(_ref => {
            var {
              path
            } = _ref;
            return slate__WEBPACK_IMPORTED_MODULE_1__["Path"].equals(path, textInsertion.path);
          })) {
            return;
          } // Add the text diff to the array of detected text insertions that need to be reconciled


          insertedText.push(textInsertion);
        }
    }
  });
  return {
    addedNodes,
    removedNodes,
    insertedText,
    characterDataMutations
  };
}
/**
 * In general, when a line break occurs, there will be more `addedNodes` than `removedNodes`.
 *
 * This isn't always the case however. In some cases, there will be more `removedNodes` than
 * `addedNodes`.
 *
 * To account for these edge cases, the most reliable strategy to detect line break mutations
 * is to check whether a new block was inserted of the same type as the current block.
 */

var isLineBreak = (editor, _ref2) => {
  var {
    addedNodes
  } = _ref2;
  var {
    selection
  } = editor;
  var parentNode = selection ? slate__WEBPACK_IMPORTED_MODULE_1__["Node"].parent(editor, selection.anchor.path) : null;
  var parentDOMNode = parentNode ? ReactEditor.toDOMNode(editor, parentNode) : null;

  if (!parentDOMNode) {
    return false;
  }

  return addedNodes.some(addedNode => addedNode instanceof HTMLElement && addedNode.tagName === (parentDOMNode === null || parentDOMNode === void 0 ? void 0 : parentDOMNode.tagName));
};
/**
 * So long as we check for line break mutations before deletion mutations,
 * we can safely assume that a set of mutations was a deletion if there are
 * removed nodes.
 */

var isDeletion = (_, _ref3) => {
  var {
    removedNodes
  } = _ref3;
  return removedNodes.length > 0;
};
/**
 * If the selection was expanded and there are removed nodes,
 * the contents of the selection need to be replaced with the diff
 */

var isReplaceExpandedSelection = (_ref4, _ref5) => {
  var {
    selection
  } = _ref4;
  var {
    removedNodes
  } = _ref5;
  return selection ? slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection) && removedNodes.length > 0 : false;
};
/**
 * Plain text insertion
 */

var isTextInsertion = (_, _ref6) => {
  var {
    insertedText
  } = _ref6;
  return insertedText.length > 0;
};
/**
 * Edge case. Detect mutations that remove leaf nodes and also update character data
 */

var isRemoveLeafNodes = (_, _ref7) => {
  var {
    addedNodes,
    characterDataMutations,
    removedNodes
  } = _ref7;
  return removedNodes.length > 0 && addedNodes.length === 0 && characterDataMutations.length > 0;
};

/**
 * Based loosely on:
 *
 * https://github.com/facebook/draft-js/blob/master/src/component/handlers/composition/DOMObserver.js
 * https://github.com/ProseMirror/prosemirror-view/blob/master/src/domobserver.js
 *
 * The input manager attempts to map observed mutations on the document to a
 * set of operations in order to reconcile Slate's internal value with the DOM.
 *
 * Mutations are processed synchronously as they come in. Only mutations that occur
 * during a user input loop are processed, as other mutations can occur within the
 * document that were not initiated by user input.
 *
 * The mutation reconciliation process attempts to match mutations to the following
 * patterns:
 *
 * - Text updates
 * - Deletions
 * - Line breaks
 *
 * @param editor
 * @param restoreDOM
 */


class AndroidInputManager {
  constructor(editor, restoreDOM) {
    this.editor = editor;
    this.restoreDOM = restoreDOM;
    /**
     * Handle MutationObserver flush
     *
     * @param mutations
     */

    this.flush = mutations => {

      try {
        this.reconcileMutations(mutations);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err); // Failed to reconcile mutations, restore DOM to its previous state

        this.restoreDOM();
      }
    };
    /**
     * Reconcile a batch of mutations
     *
     * @param mutations
     */


    this.reconcileMutations = mutations => {
      var mutationData = gatherMutationData(this.editor, mutations);
      var {
        insertedText,
        removedNodes
      } = mutationData;

      if (isReplaceExpandedSelection(this.editor, mutationData)) {
        var text = combineInsertedText(insertedText);
        this.replaceExpandedSelection(text);
      } else if (isLineBreak(this.editor, mutationData)) {
        this.insertBreak();
      } else if (isRemoveLeafNodes(this.editor, mutationData)) {
        this.removeLeafNodes(removedNodes);
      } else if (isDeletion(this.editor, mutationData)) {
        this.deleteBackward();
      } else if (isTextInsertion(this.editor, mutationData)) {
        this.insertText(insertedText);
      }
    };
    /**
     * Apply text diff
     */


    this.insertText = insertedText => {
      var {
        selection
      } = this.editor; // If it is in composing or after `onCompositionend`, set `EDITOR_ON_COMPOSITION_TEXT` and return.
      // Text will be inserted on compositionend event.

      if (IS_COMPOSING.get(this.editor) || IS_ON_COMPOSITION_END.get(this.editor)) {
        EDITOR_ON_COMPOSITION_TEXT.set(this.editor, insertedText);
        IS_ON_COMPOSITION_END.set(this.editor, false);
        return;
      } // Insert the batched text diffs


      insertedText.forEach(insertion => {
        var text = insertion.text.insertText;
        var at = normalizeTextInsertionRange(this.editor, selection, insertion);
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setSelection(this.editor, at);
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(this.editor, text);
      });
    };
    /**
     * Handle line breaks
     */


    this.insertBreak = () => {
      var {
        selection
      } = this.editor;
      slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertBreak(this.editor);
      this.restoreDOM();

      if (selection) {
        // Compat: Move selection to the newly inserted block if it has not moved
        setTimeout(() => {
          if (this.editor.selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(selection, this.editor.selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(this.editor);
          }
        }, 100);
      }
    };
    /**
     * Handle expanded selection being deleted or replaced by text
     */


    this.replaceExpandedSelection = text => {

      slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(this.editor);

      if (text.length) {
        // Selection was replaced by text, insert the entire text diff
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(this.editor, text);
      }

      this.restoreDOM();
    };
    /**
     * Handle `backspace` that merges blocks
     */


    this.deleteBackward = () => {
      slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(this.editor);
      ReactEditor.focus(this.editor);
      this.restoreDOM();
    };
    /**
     * Handle mutations that remove specific leaves
     */


    this.removeLeafNodes = nodes => {
      for (var node of nodes) {
        var slateNode = ReactEditor.toSlateNode(this.editor, node);

        if (slateNode) {
          var path = ReactEditor.findPath(this.editor, slateNode);
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(this.editor, {
            at: path
          });
          this.restoreDOM();
        }
      }
    };

    this.editor = editor;
    this.restoreDOM = restoreDOM;
  }

}

function useMutationObserver(node, callback, options) {
  var [mutationObserver] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => new MutationObserver(callback));
  useIsomorphicLayoutEffect(() => {
    // Disconnect mutation observer during render phase
    mutationObserver.disconnect();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!node.current) {
      throw new Error('Failed to attach MutationObserver, `node` is undefined');
    } // Attach mutation observer after render phase has finished


    mutationObserver.observe(node.current, options); // Clean up after effect

    return mutationObserver.disconnect.bind(mutationObserver);
  });
}

var MUTATION_OBSERVER_CONFIG$1 = {
  childList: true,
  characterData: true,
  subtree: true
};

function findClosestKnowSlateNode(domNode) {
  var _domEl;

  var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;

  if (domEl && !domEl.hasAttribute('data-slate-node')) {
    domEl = domEl.closest("[data-slate-node]");
  }

  var slateNode = domEl && ELEMENT_TO_NODE.get(domEl);

  if (slateNode) {
    return slateNode;
  } // Unknown dom element with a slate-slate-node attribute => the IME
  // most likely duplicated the node so we have to restore the parent


  return (_domEl = domEl) !== null && _domEl !== void 0 && _domEl.parentElement ? findClosestKnowSlateNode(domEl.parentElement) : null;
}

function useRestoreDom(node, receivedUserInput) {
  var editor = useSlateStatic();
  var mutatedNodes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
  var handleDOMMutation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(mutations => {
    if (!receivedUserInput.current) {
      return;
    }

    mutations.forEach(_ref => {
      var {
        target
      } = _ref;
      var slateNode = findClosestKnowSlateNode(target);

      if (!slateNode) {
        return;
      }

      return mutatedNodes.current.add(slateNode);
    });
  }, []);
  useMutationObserver(node, handleDOMMutation, MUTATION_OBSERVER_CONFIG$1); // Clear mutated nodes on every render

  mutatedNodes.current.clear();
  var restore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    var mutated = Array.from(mutatedNodes.current.values()); // Filter out child nodes of nodes that will be restored anyway

    var nodesToRestore = mutated.filter(n => !mutated.some(m => slate__WEBPACK_IMPORTED_MODULE_1__["Path"].isParent(ReactEditor.findPath(editor, m), ReactEditor.findPath(editor, n))));
    nodesToRestore.forEach(n => {
      var _NODE_TO_RESTORE_DOM$;

      (_NODE_TO_RESTORE_DOM$ = NODE_TO_RESTORE_DOM.get(n)) === null || _NODE_TO_RESTORE_DOM$ === void 0 ? void 0 : _NODE_TO_RESTORE_DOM$();
    });
    mutatedNodes.current.clear();
  }, []);
  return restore;
}

function useTrackUserInput() {
  var editor = useSlateStatic();
  var receivedUserInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var animationFrameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var onUserInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (receivedUserInput.current === false) {
      var window = ReactEditor.getWindow(editor);
      receivedUserInput.current = true;

      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = window.requestAnimationFrame(() => {
        receivedUserInput.current = false;
        animationFrameRef.current = null;
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Reset user input tracking on every render
    if (receivedUserInput.current) {
      receivedUserInput.current = false;
    }
  });
  return {
    receivedUserInput,
    onUserInput
  };
}

var MUTATION_OBSERVER_CONFIG = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  subtree: true
};
function useAndroidInputManager(node) {
  var editor = useSlateStatic();
  var {
    receivedUserInput,
    onUserInput
  } = useTrackUserInput();
  var restoreDom = useRestoreDom(node, receivedUserInput);
  var inputManager = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => new AndroidInputManager(editor, restoreDom), [restoreDom, editor]);
  var timeoutId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isReconciling = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var flush = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(mutations => {
    if (!receivedUserInput.current) {
      return;
    }

    isReconciling.current = true;
    inputManager.flush(mutations);

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      isReconciling.current = false;
      timeoutId.current = null;
    }, 250);
  }, []);
  useMutationObserver(node, flush, MUTATION_OBSERVER_CONFIG);
  return {
    isReconciling,
    onUserInput
  };
}

function useContentKey(node) {
  var contentKeyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  var updateAnimationFrameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var [, setForceRerenderCounter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    NODE_TO_RESTORE_DOM.set(node, () => {
      // Update is already queued and node hasn't re-render yet
      if (updateAnimationFrameRef.current) {
        return;
      }

      updateAnimationFrameRef.current = requestAnimationFrame(() => {
        setForceRerenderCounter(state => state + 1);
        updateAnimationFrameRef.current = null;
      });
      contentKeyRef.current++;
    });
    return () => {
      NODE_TO_RESTORE_DOM.delete(node);
    };
  }, [node]); // Node was restored => clear scheduled update

  if (updateAnimationFrameRef.current) {
    cancelAnimationFrame(updateAnimationFrameRef.current);
    updateAnimationFrameRef.current = null;
  }

  return contentKeyRef.current;
}

var _excluded$3 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "style", "as"];

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Editable.
 */
// https://github.com/facebook/draft-js/blob/main/src/component/handlers/composition/DraftEditorCompositionHandler.js#L41
// When using keyboard English association function, conpositionEnd triggered too fast, resulting in after `insertText` still maintain association state.

var RESOLVE_DELAY = 20;
var AndroidEditable = props => {
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultPlaceholder, Object.assign({}, props)),
    style = {},
    as: Component = 'div'
  } = props,
      attributes = _objectWithoutProperties(props, _excluded$3);

  var editor = useSlate(); // Rerender editor when composition status changed

  var [isComposing, setIsComposing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var inputManager = useAndroidInputManager(ref); // Update internal state on each render.

  IS_READ_ONLY.set(editor, readOnly); // Keep track of some state for the event handler logic.

  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    isComposing: false,
    isUpdatingSelection: false,
    latestElement: null
  }), []);
  var contentKey = useContentKey(editor); // Whenever the editor updates...

  useIsomorphicLayoutEffect(() => {
    // Update element-related weak maps with the DOM element ref.
    var window;

    if (ref.current && (window = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    }

    try {
      // Make sure the DOM selection state is in sync.
      var {
        selection
      } = editor;
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var domSelection = root.getSelection();

      if (state.isComposing || !domSelection || !ReactEditor.isFocused(editor)) {
        return;
      }

      var hasDomSelection = domSelection.type !== 'None'; // If the DOM selection is properly unset, we're done.

      if (!selection && !hasDomSelection) {
        return;
      } // verify that the dom selection is in the editor


      var editorElement = EDITOR_TO_ELEMENT.get(editor);
      var hasDomSelectionInEditor = false;

      if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
        hasDomSelectionInEditor = true;
      } // If the DOM selection is in the editor and the editor selection is already correct, we're done.


      if (hasDomSelection && hasDomSelectionInEditor && selection) {
        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: true,
          suppressThrow: true
        });

        if (slateRange && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(slateRange, selection)) {
          return;
        }
      } // when <Editable/> is being controlled through external value
      // then its children might just change - DOM responds to it on its own
      // but Slate's value is not being updated through any operation
      // and thus it doesn't transform selection on its own


      if (selection && !ReactEditor.hasRange(editor, selection)) {
        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: false
        });
        return;
      } // Otherwise the DOM selection is out of sync, so update it.


      var el = ReactEditor.toDOMNode(editor, editor);
      state.isUpdatingSelection = true;
      var newDomRange = selection && ReactEditor.toDOMRange(editor, selection);

      if (newDomRange) {
        if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isBackward(selection)) {
          domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
        } else {
          domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
        }

        var leafEl = newDomRange.startContainer.parentElement;
        leafEl.getBoundingClientRect = newDomRange.getBoundingClientRect.bind(newDomRange);
        Object(scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_5__["default"])(leafEl, {
          scrollMode: 'if-needed',
          boundary: el
        }); // @ts-ignore

        delete leafEl.getBoundingClientRect;
      } else {
        domSelection.removeAllRanges();
      }

      setTimeout(() => {
        state.isUpdatingSelection = false;
      });
    } catch (_unused) {
      // Failed to update selection, likely due to reconciliation error
      state.isUpdatingSelection = false;
    }
  }); // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
  // needs to be manually focused.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]); // Listen on the native `selectionchange` event to be able to update any time
  // the selection changes. This is required because React's `onSelect` is leaky
  // and non-standard so it doesn't fire until after a selection has been
  // released. This causes issues in situations where another change happens
  // while a selection is being dragged.

  var onDOMSelectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(() => {
    try {
      if (!state.isComposing && !state.isUpdatingSelection && !inputManager.isReconciling.current) {
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        var {
          activeElement
        } = root;
        var el = ReactEditor.toDOMNode(editor, editor);
        var domSelection = root.getSelection();

        if (activeElement === el) {
          state.latestElement = activeElement;
          IS_FOCUSED.set(editor, true);
        } else {
          IS_FOCUSED.delete(editor);
        }

        if (!domSelection) {
          return slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
        }

        var {
          anchorNode,
          focusNode
        } = domSelection;
        var anchorNodeSelectable = hasEditableTarget(editor, anchorNode) || isTargetInsideNonReadonlyVoid(editor, anchorNode);
        var focusNodeSelectable = hasEditableTarget(editor, focusNode) || isTargetInsideNonReadonlyVoid(editor, focusNode);

        if (anchorNodeSelectable && focusNodeSelectable) {
          var range = ReactEditor.toSlateRange(editor, domSelection, {
            exactMatch: false,
            suppressThrow: false
          });
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
        } else {
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
        }
      }
    } catch (_unused2) {// Failed to update selection, likely due to reconciliation error
    }
  }, 100), [readOnly]);
  var scheduleOnDOMSelectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(onDOMSelectionChange, 0), [onDOMSelectionChange]); // Listen on the native `beforeinput` event to get real "Level 2" events. This
  // is required because React's `beforeinput` is fake and never really attaches
  // to the real event sadly. (2019/11/01)
  // https://github.com/facebook/react/issues/11211

  var onDOMBeforeInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    if (!readOnly && hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      // Some IMEs/Chrome extensions like e.g. Grammarly set the selection immediately before
      // triggering a `beforeinput` expecting the change to be applied to the immediately before
      // set selection.
      scheduleOnDOMSelectionChange.flush();
      inputManager.onUserInput();
    }
  }, [readOnly, propsOnDOMBeforeInput]); // Attach a native DOM event handler for `beforeinput` events, because React's
  // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
  // real `beforeinput` events sadly... (2019/11/04)

  useIsomorphicLayoutEffect(() => {
    var node = ref.current; // @ts-ignore The `beforeinput` event isn't recognized.

    node === null || node === void 0 ? void 0 : node.addEventListener('beforeinput', onDOMBeforeInput); // @ts-ignore The `beforeinput` event isn't recognized.

    return () => node === null || node === void 0 ? void 0 : node.removeEventListener('beforeinput', onDOMBeforeInput);
  }, [contentKey, propsOnDOMBeforeInput]); // Attach a native DOM event handler for `selectionchange`, because React's
  // built-in `onSelect` handler doesn't fire for all selection changes. It's a
  // leaky polyfill that only fires on keypresses or clicks. Instead, we want to
  // fire for any change to the selection inside the editor. (2019/11/04)
  // https://github.com/facebook/react/issues/5785

  useIsomorphicLayoutEffect(() => {
    var window = ReactEditor.getWindow(editor);
    window.document.addEventListener('selectionchange', scheduleOnDOMSelectionChange);
    return () => {
      window.document.removeEventListener('selectionchange', scheduleOnDOMSelectionChange);
    };
  }, [scheduleOnDOMSelectionChange]);
  var decorations = decorate([editor, []]);

  if (placeholder && editor.children.length === 1 && Array.from(slate__WEBPACK_IMPORTED_MODULE_1__["Node"].texts(editor)).length === 1 && slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(editor) === '' && !isComposing) {
    var start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start,
      focus: start
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecorateContext.Provider, {
    value: decorate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({
    key: contentKey,
    role: readOnly ? undefined : 'textbox'
  }, attributes, {
    spellCheck: attributes.spellCheck,
    autoCorrect: attributes.autoCorrect,
    autoCapitalize: attributes.autoCapitalize,
    "data-slate-editor": true,
    "data-slate-node": "value",
    contentEditable: readOnly ? undefined : true,
    suppressContentEditableWarning: true,
    ref: ref,
    style: _objectSpread$1({
      // Allow positioning relative to the editable element.
      position: 'relative',
      // Prevent the default outline styles.
      outline: 'none',
      // Preserve adjacent whitespace and new lines.
      whiteSpace: 'pre-wrap',
      // Allow words to break if they are too long.
      wordWrap: 'break-word'
    }, style),
    onCopy: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, 'copy');
      }
    }, [attributes.onCopy]),
    onCut: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, 'cut');
        var {
          selection
        } = editor;

        if (selection) {
          if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
          } else {
            var node = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].parent(editor, selection.anchor.path);

            if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onFocus: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && !state.isUpdatingSelection && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;
        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onBlur: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (readOnly || state.isUpdatingSelection || !hasEditableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      } // COMPAT: If the current `activeElement` is still the previous
      // one, this is due to the window being blurred when the tab
      // itself becomes unfocused, so we want to abort early to allow to
      // editor to stay focused when the tab becomes focused again.


      var root = ReactEditor.findDocumentOrShadowRoot(editor);

      if (state.latestElement === root.activeElement) {
        return;
      }

      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor); // COMPAT: The event should be ignored if the focus is returning
      // to the editor from an embedded editable element (eg. an <input>
      // element inside a void node).

      if (relatedTarget === el) {
        return;
      } // COMPAT: The event should be ignored if the focus is moving from
      // the editor to inside a void node's spacer element.


      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
        return;
      } // COMPAT: The event should be ignored if the focus is moving to a
      // non- editable section of an element that isn't a void node (eg.
      // a list item of the check list example).


      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node = ReactEditor.toSlateNode(editor, relatedTarget);

        if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(node) && !editor.isVoid(node)) {
          return;
        }
      }

      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onClick: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node); // At this time, the Slate document may be arbitrarily different,
        // because onClick handlers can change the document before we get here.
        // Therefore we must check that this path actually exists,
        // and that it still refers to the same node.

        if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasPath(editor, path)) {
          var lookupNode = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].get(editor, path);

          if (lookupNode === node) {
            var _start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, path);

            var end = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].end(editor, path);
            var startVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
              at: _start
            });
            var endVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
              at: end
            });

            if (startVoid && endVoid && slate__WEBPACK_IMPORTED_MODULE_1__["Path"].equals(startVoid[1], endVoid[1])) {
              var range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, _start);
              slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
            }
          }
        }
      }
    }, [readOnly, attributes.onClick]),
    onCompositionEnd: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionEnd)) {
        scheduleOnDOMSelectionChange.flush();
        setTimeout(() => {
          state.isComposing && setIsComposing(false);
          state.isComposing = false;
          IS_COMPOSING.set(editor, false);
          IS_ON_COMPOSITION_END.set(editor, true);
          var insertedText = EDITOR_ON_COMPOSITION_TEXT.get(editor) || []; // `insertedText` is set in `MutationObserver` constructor.
          // If open phone keyboard association function, `CompositionEvent` will be triggered.

          if (!insertedText.length) {
            return;
          }

          EDITOR_ON_COMPOSITION_TEXT.set(editor, []);
          var {
            selection
          } = editor;
          insertedText.forEach(insertion => {
            var text = insertion.text.insertText;
            var at = normalizeTextInsertionRange(editor, selection, insertion);
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setSelection(editor, at);
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, text);
          });
        }, RESOLVE_DELAY);
      }
    }, [attributes.onCompositionEnd]),
    onCompositionUpdate: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        !state.isComposing && setIsComposing(true);
        state.isComposing = true;
        IS_COMPOSING.set(editor, true);
      }
    }, [attributes.onCompositionUpdate]),
    onCompositionStart: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionStart)) {
        !state.isComposing && setIsComposing(true);
        state.isComposing = true;
        IS_COMPOSING.set(editor, true);
      }
    }, [attributes.onCompositionStart]),
    onPaste: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      // this will make application/x-slate-fragment exist when onPaste attributes is passed
      event.clipboardData = getClipboardData(event.clipboardData); // This unfortunately needs to be handled with paste events instead.

      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste) && !readOnly) {
        event.preventDefault();
        ReactEditor.insertData(editor, event.clipboardData);
      }
    }, [readOnly, attributes.onPaste])
  }), useChildren({
    decorations,
    node: editor,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection: editor.selection
  }))));
};

/**
 * A React context for sharing the `focused` state of the editor.
 */

var FocusedContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/**
 * Get the current `focused` state of the editor.
 */

var useFocused = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FocusedContext);
};

var _excluded$2 = ["editor", "children", "onChange", "value"];
/**
 * A wrapper around the provider to handle `onChange` events, because the editor
 * is a mutable singleton so it won't ever register as "changed" otherwise.
 */

var Slate = props => {
  var {
    editor,
    children,
    onChange,
    value
  } = props,
      rest = _objectWithoutProperties(props, _excluded$2);

  var unmountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var [context, setContext] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(() => {
    if (!slate__WEBPACK_IMPORTED_MODULE_1__["Node"].isNodeList(value)) {
      throw new Error("[Slate] value is invalid! Expected a list of elements" + "but got: ".concat(JSON.stringify(value)));
    }

    if (!slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(editor)) {
      throw new Error("[Slate] editor is invalid! you passed:" + "".concat(JSON.stringify(editor)));
    }

    editor.children = value;
    Object.assign(editor, rest);
    return [editor];
  });
  var onContextChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    onChange(editor.children);
    setContext([editor]);
  }, [onChange]);
  EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      EDITOR_TO_ON_CHANGE.set(editor, () => {});
      unmountRef.current = true;
    };
  }, []);
  var [isFocused, setIsFocused] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ReactEditor.isFocused(editor));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsFocused(ReactEditor.isFocused(editor));
  });
  useIsomorphicLayoutEffect(() => {
    var fn = () => {
      setTimeout(() => {
        if (unmountRef.current) {
          return;
        }

        setIsFocused(ReactEditor.isFocused(editor));
      }, 0);
    };

    document.addEventListener('focus', fn, true);
    document.addEventListener('blur', fn, true);
    return () => {
      document.removeEventListener('focus', fn, true);
      document.removeEventListener('blur', fn, true);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SlateContext.Provider, {
    value: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditorContext.Provider, {
    value: editor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FocusedContext.Provider, {
    value: isFocused
  }, children)));
};

/**
 * Get the current editor object from the React context.
 * @deprecated Use useSlateStatic instead.
 */

var useEditor = () => {
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(EditorContext);

  if (!editor) {
    throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
  }

  return editor;
};

/**
 * A React context for sharing the `selected` state of an element.
 */

var SelectedContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/**
 * Get the current `selected` state of an element.
 */

var useSelected = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SelectedContext);
};

/**
 * Utilities for single-line deletion
 */

var doRectsIntersect = (rect, compareRect) => {
  var middle = (compareRect.top + compareRect.bottom) / 2;
  return rect.top <= middle && rect.bottom >= middle;
};

var areRangesSameLine = (editor, range1, range2) => {
  var rect1 = ReactEditor.toDOMRange(editor, range1).getBoundingClientRect();
  var rect2 = ReactEditor.toDOMRange(editor, range2).getBoundingClientRect();
  return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
};
/**
 * A helper utility that returns the end portion of a `Range`
 * which is located on a single line.
 *
 * @param {Editor} editor The editor object to compare against
 * @param {Range} parentRange The parent range to compare against
 * @returns {Range} A valid portion of the parentRange which is one a single line
 */


var findCurrentLineRange = (editor, parentRange) => {
  var parentRangeBoundary = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, slate__WEBPACK_IMPORTED_MODULE_1__["Range"].end(parentRange));
  var positions = Array.from(slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].positions(editor, {
    at: parentRange
  }));
  var left = 0;
  var right = positions.length;
  var middle = Math.floor(right / 2);

  if (areRangesSameLine(editor, slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, positions[left]), parentRangeBoundary)) {
    return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, positions[left], parentRangeBoundary);
  }

  if (positions.length < 2) {
    return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, positions[positions.length - 1], parentRangeBoundary);
  }

  while (middle !== positions.length && middle !== left) {
    if (areRangesSameLine(editor, slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, positions[middle]), parentRangeBoundary)) {
      right = middle;
    } else {
      left = middle;
    }

    middle = Math.floor((left + right) / 2);
  }

  return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, positions[right], parentRangeBoundary);
};

/**
 * `withReact` adds React and DOM specific behaviors to the editor.
 *
 * If you are using TypeScript, you must extend Slate's CustomTypes to use
 * this plugin.
 *
 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
 */

var withReact = editor => {
  var e = editor;
  var {
    apply,
    onChange,
    deleteBackward
  } = e; // The WeakMap which maps a key to a specific HTMLElement must be scoped to the editor instance to
  // avoid collisions between editors in the DOM that share the same value.

  EDITOR_TO_KEY_TO_ELEMENT.set(e, new WeakMap());

  e.deleteBackward = unit => {
    if (unit !== 'line') {
      return deleteBackward(unit);
    }

    if (editor.selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(editor.selection)) {
      var parentBlockEntry = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].above(editor, {
        match: n => slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isBlock(editor, n),
        at: editor.selection
      });

      if (parentBlockEntry) {
        var [, parentBlockPath] = parentBlockEntry;
        var parentElementRange = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, parentBlockPath, editor.selection.anchor);
        var currentLineRange = findCurrentLineRange(e, parentElementRange);

        if (!slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(currentLineRange)) {
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor, {
            at: currentLineRange
          });
        }
      }
    }
  };

  e.apply = op => {
    var matches = [];

    switch (op.type) {
      case 'insert_text':
      case 'remove_text':
      case 'set_node':
        {
          for (var [node, path] of slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].levels(e, {
            at: op.path
          })) {
            var key = ReactEditor.findKey(e, node);
            matches.push([path, key]);
          }

          break;
        }

      case 'insert_node':
      case 'remove_node':
      case 'merge_node':
      case 'split_node':
        {
          for (var [_node, _path] of slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].levels(e, {
            at: slate__WEBPACK_IMPORTED_MODULE_1__["Path"].parent(op.path)
          })) {
            var _key = ReactEditor.findKey(e, _node);

            matches.push([_path, _key]);
          }

          break;
        }

      case 'move_node':
        {
          for (var [_node2, _path2] of slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].levels(e, {
            at: slate__WEBPACK_IMPORTED_MODULE_1__["Path"].common(slate__WEBPACK_IMPORTED_MODULE_1__["Path"].parent(op.path), slate__WEBPACK_IMPORTED_MODULE_1__["Path"].parent(op.newPath))
          })) {
            var _key2 = ReactEditor.findKey(e, _node2);

            matches.push([_path2, _key2]);
          }

          break;
        }
    }

    apply(op);

    for (var [_path3, _key3] of matches) {
      var [_node3] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].node(e, _path3);
      NODE_TO_KEY.set(_node3, _key3);
    }
  };

  e.setFragmentData = data => {
    var {
      selection
    } = e;

    if (!selection) {
      return;
    }

    var [start, end] = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].edges(selection);
    var startVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(e, {
      at: start.path
    });
    var endVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(e, {
      at: end.path
    });

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection) && !startVoid) {
      return;
    } // Create a fake selection so that we can add a Base64-encoded copy of the
    // fragment to the HTML, to decode on future pastes.


    var domRange = ReactEditor.toDOMRange(e, selection);
    var contents = domRange.cloneContents();
    var attach = contents.childNodes[0]; // Make sure attach is non-empty, since empty nodes will not get copied.

    contents.childNodes.forEach(node => {
      if (node.textContent && node.textContent.trim() !== '') {
        attach = node;
      }
    }); // COMPAT: If the end node is a void node, we need to move the end of the
    // range from the void node's spacer span, to the end of the void node's
    // content, since the spacer is before void's content in the DOM.

    if (endVoid) {
      var [voidNode] = endVoid;
      var r = domRange.cloneRange();
      var domNode = ReactEditor.toDOMNode(e, voidNode);
      r.setEndAfter(domNode);
      contents = r.cloneContents();
    } // COMPAT: If the start node is a void node, we need to attach the encoded
    // fragment to the void node's content node instead of the spacer, because
    // attaching it to empty `<div>/<span>` nodes will end up having it erased by
    // most browsers. (2018/04/27)


    if (startVoid) {
      attach = contents.querySelector('[data-slate-spacer]');
    } // Remove any zero-width space spans from the cloned DOM so that they don't
    // show up elsewhere when pasted.


    Array.from(contents.querySelectorAll('[data-slate-zero-width]')).forEach(zw => {
      var isNewline = zw.getAttribute('data-slate-zero-width') === 'n';
      zw.textContent = isNewline ? '\n' : '';
    }); // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
    // in the HTML, and can be used for intra-Slate pasting. If it's a text
    // node, wrap it in a `<span>` so we have something to set an attribute on.

    if (isDOMText(attach)) {
      var span = attach.ownerDocument.createElement('span'); // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
      // then leading and trailing spaces will be ignored. (2017/09/21)

      span.style.whiteSpace = 'pre';
      span.appendChild(attach);
      contents.appendChild(span);
      attach = span;
    }

    var fragment = e.getFragment();
    var string = JSON.stringify(fragment);
    var encoded = window.btoa(encodeURIComponent(string));
    attach.setAttribute('data-slate-fragment', encoded);
    data.setData('application/x-slate-fragment', encoded); // Add the content to a <div> so that we can get its inner HTML.

    var div = contents.ownerDocument.createElement('div');
    div.appendChild(contents);
    div.setAttribute('hidden', 'true');
    contents.ownerDocument.body.appendChild(div);
    data.setData('text/html', div.innerHTML);
    data.setData('text/plain', getPlainText(div));
    contents.ownerDocument.body.removeChild(div);
    return data;
  };

  e.insertData = data => {
    if (!e.insertFragmentData(data)) {
      e.insertTextData(data);
    }
  };

  e.insertFragmentData = data => {
    /**
     * Checking copied fragment from application/x-slate-fragment or data-slate-fragment
     */
    var fragment = data.getData('application/x-slate-fragment') || getSlateFragmentAttribute(data);

    if (fragment) {
      var decoded = decodeURIComponent(window.atob(fragment));
      var parsed = JSON.parse(decoded);
      e.insertFragment(parsed);
      return true;
    }

    return false;
  };

  e.insertTextData = data => {
    var text = data.getData('text/plain');

    if (text) {
      var lines = text.split(/\r\n|\r|\n/);
      var split = false;

      for (var line of lines) {
        if (split) {
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].splitNodes(e, {
            always: true
          });
        }

        e.insertText(line);
        split = true;
      }

      return true;
    }

    return false;
  };

  e.onChange = () => {
    // COMPAT: React doesn't batch `setState` hook calls, which means that the
    // children and selection can get out of sync for one render pass. So we
    // have to use this unstable API to ensure it batches them. (2019/12/03)
    // https://github.com/facebook/react/issues/14259#issuecomment-439702367
    react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.unstable_batchedUpdates(() => {
      var onContextChange = EDITOR_TO_ON_CHANGE.get(e);

      if (onContextChange) {
        onContextChange();
      }

      onChange();
    });
  };

  return e;
};

/**
 * Leaf content strings.
 */

var String = props => {
  var {
    isLast,
    leaf,
    parent,
    text
  } = props;
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, text);
  var parentPath = slate__WEBPACK_IMPORTED_MODULE_1__["Path"].parent(path); // COMPAT: Render text inside void nodes with a zero-width space.
  // So the node can contain selection but the text is not visible.

  if (editor.isVoid(parent)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZeroWidthString, {
      length: slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(parent).length
    });
  } // COMPAT: If this is the last text node in an empty block, render a zero-
  // width space that will convert into a line break when copying and pasting
  // to support expected plain text.


  if (leaf.text === '' && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].string(editor, parentPath) === '') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZeroWidthString, {
      isLineBreak: true
    });
  } // COMPAT: If the text is empty, it's because it's on the edge of an inline
  // node, so we render a zero-width space so that the selection can be
  // inserted next to it still.


  if (leaf.text === '') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZeroWidthString, null);
  } // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
  // so we need to add an extra trailing new lines to prevent that.


  if (isLast && leaf.text.slice(-1) === '\n') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextString, {
      isTrailing: true,
      text: leaf.text
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextString, {
    text: leaf.text
  });
};
/**
 * Leaf strings with text in them.
 */


var TextString = props => {
  var {
    text,
    isTrailing = false
  } = props;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var getTextContent = () => {
    return "".concat(text !== null && text !== void 0 ? text : '').concat(isTrailing ? '\n' : '');
  }; // This is the actual text rendering boundary where we interface with the DOM
  // The text is not rendered as part of the virtual DOM, as since we handle basic character insertions natively,
  // updating the DOM is not a one way dataflow anymore. What we need here is not reconciliation and diffing
  // with previous version of the virtual DOM, but rather diffing with the actual DOM element, and replace the DOM <span> content
  // exactly if and only if its current content does not match our current virtual DOM.
  // Otherwise the DOM TextNode would always be replaced by React as the user types, which interferes with native text features,
  // eg makes native spellcheck opt out from checking the text node.
  // useLayoutEffect: updating our span before browser paint


  useIsomorphicLayoutEffect(() => {
    // null coalescing text to make sure we're not outputing "null" as a string in the extreme case it is nullish at runtime
    var textWithTrailing = getTextContent();

    if (ref.current && ref.current.textContent !== textWithTrailing) {
      ref.current.textContent = textWithTrailing;
    } // intentionally not specifying dependencies, so that this effect runs on every render
    // as this effectively replaces "specifying the text in the virtual DOM under the <span> below" on each render

  }); // Render text content immediately if it's the first-time render
  // Ensure that text content is rendered on server-side rendering

  if (!ref.current) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "data-slate-string": true,
      ref: ref
    }, getTextContent());
  } // the span is intentionally same on every render in virtual DOM, actual rendering happens in the layout effect above


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-slate-string": true,
    ref: ref
  });
};
/**
 * Leaf strings without text, render as zero-width strings.
 */


var ZeroWidthString = props => {
  var {
    length = 0,
    isLineBreak = false
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-slate-zero-width": isLineBreak ? 'n' : 'z',
    "data-slate-length": length
  }, '\uFEFF', isLineBreak ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null) : null);
};

/**
 * Individual leaves in a text node with unique formatting.
 */

var Leaf = props => {
  var {
    leaf,
    isLast,
    text,
    parent,
    renderPlaceholder,
    renderLeaf = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultLeaf, Object.assign({}, props))
  } = props;
  var placeholderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var placeholderEl = placeholderRef === null || placeholderRef === void 0 ? void 0 : placeholderRef.current;
    var editorEl = document.querySelector('[data-slate-editor="true"]');

    if (!placeholderEl || !editorEl) {
      return;
    }

    editorEl.style.minHeight = "".concat(placeholderEl.clientHeight, "px");
    return () => {
      editorEl.style.minHeight = 'auto';
    };
  }, [placeholderRef, leaf]);
  var children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(String, {
    isLast: isLast,
    leaf: leaf,
    parent: parent,
    text: text
  });

  if (leaf[PLACEHOLDER_SYMBOL]) {
    var placeholderProps = {
      children: leaf.placeholder,
      attributes: {
        'data-slate-placeholder': true,
        style: {
          position: 'absolute',
          pointerEvents: 'none',
          width: '100%',
          maxWidth: '100%',
          display: 'block',
          opacity: '0.333',
          userSelect: 'none',
          textDecoration: 'none'
        },
        contentEditable: false,
        ref: placeholderRef
      }
    };
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderPlaceholder(placeholderProps), children);
  } // COMPAT: Having the `data-` attributes on these leaf elements ensures that
  // in certain misbehaving browsers they aren't weirdly cloned/destroyed by
  // contenteditable behaviors. (2019/05/08)


  var attributes = {
    'data-slate-leaf': true
  };
  return renderLeaf({
    attributes,
    children,
    leaf,
    text
  });
};

var MemoizedLeaf = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Leaf, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && slate__WEBPACK_IMPORTED_MODULE_1__["Text"].equals(next.leaf, prev.leaf) && next.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL];
});
var DefaultLeaf = props => {
  var {
    attributes,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", Object.assign({}, attributes), children);
};

var _excluded$1 = ["anchor", "focus"],
    _excluded2 = ["anchor", "focus"];
var shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
/**
 * Check if a list of decorator ranges are equal to another.
 *
 * PERF: this requires the two lists to also have the ranges inside them in the
 * same order, but this is an okay constraint for us since decorations are
 * kept in order, and the odd case where they aren't is okay to re-render for.
 */

var isDecoratorRangeListEqual = (list, another) => {
  if (list.length !== another.length) {
    return false;
  }

  for (var i = 0; i < list.length; i++) {
    var range = list[i];
    var other = another[i];

    var rangeOwnProps = _objectWithoutProperties(range, _excluded$1);

    var otherOwnProps = _objectWithoutProperties(other, _excluded2);

    if (!slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(range, other) || range[PLACEHOLDER_SYMBOL] !== other[PLACEHOLDER_SYMBOL] || !shallowCompare(rangeOwnProps, otherOwnProps)) {
      return false;
    }
  }

  return true;
};

/**
 * Text.
 */

var Text = props => {
  var {
    decorations,
    isLast,
    parent,
    renderPlaceholder,
    renderLeaf,
    text
  } = props;
  var editor = useSlateStatic();
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var leaves = slate__WEBPACK_IMPORTED_MODULE_1__["Text"].decorations(text, decorations);
  var key = ReactEditor.findKey(editor, text);
  var children = [];

  for (var i = 0; i < leaves.length; i++) {
    var leaf = leaves[i];
    children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedLeaf, {
      isLast: isLast && i === leaves.length - 1,
      key: "".concat(key.id, "-").concat(i),
      renderPlaceholder: renderPlaceholder,
      leaf: leaf,
      text: text,
      parent: parent,
      renderLeaf: renderLeaf
    }));
  } // Update element-related weak maps with the DOM element ref.


  useIsomorphicLayoutEffect(() => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);

    if (ref.current) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(text, ref.current);
      ELEMENT_TO_NODE.set(ref.current, text);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(text);
    }
  });
  var contentKey = IS_ANDROID ? useContentKey(text) : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-slate-node": "text",
    ref: ref,
    key: contentKey
  }, children);
};

var MemoizedText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Text, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.text === prev.text && isDecoratorRangeListEqual(next.decorations, prev.decorations);
});

/**
 * Element.
 */

var Element = props => {
  var {
    decorations,
    element,
    renderElement = p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultElement, Object.assign({}, p)),
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var editor = useSlateStatic();
  var readOnly = useReadOnly();
  var isInline = editor.isInline(element);
  var key = ReactEditor.findKey(editor, element);
  var children = useChildren({
    decorations,
    node: element,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  }); // Attributes that the developer must mix into the element in their
  // custom node renderer component.

  var attributes = {
    'data-slate-node': 'element',
    ref
  };

  if (isInline) {
    attributes['data-slate-inline'] = true;
  } // If it's a block node with inline children, add the proper `dir` attribute
  // for text direction.


  if (!isInline && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasInlines(editor, element)) {
    var text = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(element);
    var dir = direction__WEBPACK_IMPORTED_MODULE_2___default()(text);

    if (dir === 'rtl') {
      attributes.dir = dir;
    }
  } // If it's a void node, wrap the children in extra void-specific elements.


  if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, element)) {
    attributes['data-slate-void'] = true;

    if (!readOnly && isInline) {
      attributes.contentEditable = false;
    }

    var Tag = isInline ? 'span' : 'div';
    var [[_text]] = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].texts(element);
    children = readOnly ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, {
      "data-slate-spacer": true,
      style: {
        height: '0',
        color: 'transparent',
        outline: 'none',
        position: 'absolute'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedText, {
      renderPlaceholder: renderPlaceholder,
      decorations: [],
      isLast: false,
      parent: element,
      text: _text
    }));
    NODE_TO_INDEX.set(_text, 0);
    NODE_TO_PARENT.set(_text, element);
  } // Update element-related weak maps with the DOM element ref.


  useIsomorphicLayoutEffect(() => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);

    if (ref.current) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(element, ref.current);
      ELEMENT_TO_NODE.set(ref.current, element);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(element);
    }
  });
  var content = renderElement({
    attributes,
    children,
    element
  });

  if (IS_ANDROID) {
    var contentKey = useContentKey(element);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: contentKey
    }, content);
  }

  return content;
};

var MemoizedElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Element, (prev, next) => {
  return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderLeaf === next.renderLeaf && isDecoratorRangeListEqual(prev.decorations, next.decorations) && (prev.selection === next.selection || !!prev.selection && !!next.selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(prev.selection, next.selection));
});
/**
 * The default element renderer.
 */

var DefaultElement = props => {
  var {
    attributes,
    children,
    element
  } = props;
  var editor = useSlateStatic();
  var Tag = editor.isInline(element) ? 'span' : 'div';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, Object.assign({}, attributes, {
    style: {
      position: 'relative'
    }
  }), children);
};

/**
 * Children.
 */

var useChildren = props => {
  var {
    decorations,
    node,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var decorate = useDecorate();
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, node);
  var children = [];
  var isLeafBlock = slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(node) && !editor.isInline(node) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasInlines(editor, node);

  for (var i = 0; i < node.children.length; i++) {
    var p = path.concat(i);
    var n = node.children[i];
    var key = ReactEditor.findKey(editor, n);
    var range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, p);
    var sel = selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].intersection(range, selection);
    var ds = decorate([n, p]);

    for (var dec of decorations) {
      var d = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].intersection(dec, range);

      if (d) {
        ds.push(d);
      }
    }

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(n)) {
      children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedContext.Provider, {
        key: "provider-".concat(key.id),
        value: !!sel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedElement, {
        decorations: ds,
        element: n,
        key: key.id,
        renderElement: renderElement,
        renderPlaceholder: renderPlaceholder,
        renderLeaf: renderLeaf,
        selection: sel
      })));
    } else {
      children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedText, {
        decorations: ds,
        key: key.id,
        isLast: isLeafBlock && i === node.children.length - 1,
        parent: node,
        renderPlaceholder: renderPlaceholder,
        renderLeaf: renderLeaf,
        text: n
      }));
    }

    NODE_TO_INDEX.set(n, i);
    NODE_TO_PARENT.set(n, node);
  }

  return children;
};

/**
 * Hotkey mappings for each platform.
 */

var HOTKEYS = {
  bold: 'mod+b',
  compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
  moveBackward: 'left',
  moveForward: 'right',
  moveWordBackward: 'ctrl+left',
  moveWordForward: 'ctrl+right',
  deleteBackward: 'shift?+backspace',
  deleteForward: 'shift?+delete',
  extendBackward: 'shift+left',
  extendForward: 'shift+right',
  italic: 'mod+i',
  splitBlock: 'shift?+enter',
  undo: 'mod+z'
};
var APPLE_HOTKEYS = {
  moveLineBackward: 'opt+up',
  moveLineForward: 'opt+down',
  moveWordBackward: 'opt+left',
  moveWordForward: 'opt+right',
  deleteBackward: ['ctrl+backspace', 'ctrl+h'],
  deleteForward: ['ctrl+delete', 'ctrl+d'],
  deleteLineBackward: 'cmd+shift?+backspace',
  deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
  deleteWordBackward: 'opt+shift?+backspace',
  deleteWordForward: 'opt+shift?+delete',
  extendLineBackward: 'opt+shift+up',
  extendLineForward: 'opt+shift+down',
  redo: 'cmd+shift+z',
  transposeCharacter: 'ctrl+t'
};
var WINDOWS_HOTKEYS = {
  deleteWordBackward: 'ctrl+shift?+backspace',
  deleteWordForward: 'ctrl+shift?+delete',
  redo: ['ctrl+y', 'ctrl+shift+z']
};
/**
 * Create a platform-aware hotkey checker.
 */

var create = key => {
  var generic = HOTKEYS[key];
  var apple = APPLE_HOTKEYS[key];
  var windows = WINDOWS_HOTKEYS[key];
  var isGeneric = generic && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_6__["isKeyHotkey"])(generic);
  var isApple = apple && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_6__["isKeyHotkey"])(apple);
  var isWindows = windows && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_6__["isKeyHotkey"])(windows);
  return event => {
    if (isGeneric && isGeneric(event)) return true;
    if (IS_APPLE && isApple && isApple(event)) return true;
    if (!IS_APPLE && isWindows && isWindows(event)) return true;
    return false;
  };
};
/**
 * Hotkeys.
 */


var Hotkeys = {
  isBold: create('bold'),
  isCompose: create('compose'),
  isMoveBackward: create('moveBackward'),
  isMoveForward: create('moveForward'),
  isDeleteBackward: create('deleteBackward'),
  isDeleteForward: create('deleteForward'),
  isDeleteLineBackward: create('deleteLineBackward'),
  isDeleteLineForward: create('deleteLineForward'),
  isDeleteWordBackward: create('deleteWordBackward'),
  isDeleteWordForward: create('deleteWordForward'),
  isExtendBackward: create('extendBackward'),
  isExtendForward: create('extendForward'),
  isExtendLineBackward: create('extendLineBackward'),
  isExtendLineForward: create('extendLineForward'),
  isItalic: create('italic'),
  isMoveLineBackward: create('moveLineBackward'),
  isMoveLineForward: create('moveLineForward'),
  isMoveWordBackward: create('moveWordBackward'),
  isMoveWordForward: create('moveWordForward'),
  isRedo: create('redo'),
  isSplitBlock: create('splitBlock'),
  isTransposeCharacter: create('transposeCharacter'),
  isUndo: create('undo')
};

var _excluded = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Children = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, useChildren(props));
/**
 * Editable.
 */


var Editable$1 = props => {
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultPlaceholder, Object.assign({}, props)),
    scrollSelectionIntoView = defaultScrollSelectionIntoView,
    style = {},
    as: Component = 'div'
  } = props,
      attributes = _objectWithoutProperties(props, _excluded);

  var editor = useSlate(); // Rerender editor when composition status changed

  var [isComposing, setIsComposing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var deferredOperations = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]); // Update internal state on each render.

  IS_READ_ONLY.set(editor, readOnly); // Keep track of some state for the event handler logic.

  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    isComposing: false,
    hasInsertPrefixInCompositon: false,
    isDraggingInternally: false,
    isUpdatingSelection: false,
    latestElement: null
  }), []); // Whenever the editor updates...

  useIsomorphicLayoutEffect(() => {
    // Update element-related weak maps with the DOM element ref.
    var window;

    if (ref.current && (window = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    } // Make sure the DOM selection state is in sync.


    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();

    if (state.isComposing || !domSelection || !ReactEditor.isFocused(editor)) {
      return;
    }

    var hasDomSelection = domSelection.type !== 'None'; // If the DOM selection is properly unset, we're done.

    if (!selection && !hasDomSelection) {
      return;
    } // verify that the dom selection is in the editor


    var editorElement = EDITOR_TO_ELEMENT.get(editor);
    var hasDomSelectionInEditor = false;

    if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
      hasDomSelectionInEditor = true;
    } // If the DOM selection is in the editor and the editor selection is already correct, we're done.


    if (hasDomSelection && hasDomSelectionInEditor && selection) {
      var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: true,
        // domSelection is not necessarily a valid Slate range
        // (e.g. when clicking on contentEditable:false element)
        suppressThrow: true
      });

      if (slateRange && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(slateRange, selection)) {
        return;
      }
    } // when <Editable/> is being controlled through external value
    // then its children might just change - DOM responds to it on its own
    // but Slate's value is not being updated through any operation
    // and thus it doesn't transform selection on its own


    if (selection && !ReactEditor.hasRange(editor, selection)) {
      editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false,
        suppressThrow: false
      });
      return;
    } // Otherwise the DOM selection is out of sync, so update it.


    state.isUpdatingSelection = true;
    var newDomRange = selection && ReactEditor.toDOMRange(editor, selection);

    if (newDomRange) {
      if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isBackward(selection)) {
        domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
      } else {
        domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
      }

      scrollSelectionIntoView(editor, newDomRange);
    } else {
      domSelection.removeAllRanges();
    }

    setTimeout(() => {
      // COMPAT: In Firefox, it's not enough to create a range, you also need
      // to focus the contenteditable element too. (2016/11/16)
      if (newDomRange && IS_FIREFOX) {
        var el = ReactEditor.toDOMNode(editor, editor);
        el.focus();
      }

      state.isUpdatingSelection = false;
    });
  }); // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
  // needs to be manually focused.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]); // Listen on the native `selectionchange` event to be able to update any time
  // the selection changes. This is required because React's `onSelect` is leaky
  // and non-standard so it doesn't fire until after a selection has been
  // released. This causes issues in situations where another change happens
  // while a selection is being dragged.

  var onDOMSelectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(() => {
    if (!state.isComposing && !state.isUpdatingSelection && !state.isDraggingInternally) {
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var {
        activeElement
      } = root;
      var el = ReactEditor.toDOMNode(editor, editor);
      var domSelection = root.getSelection();

      if (activeElement === el) {
        state.latestElement = activeElement;
        IS_FOCUSED.set(editor, true);
      } else {
        IS_FOCUSED.delete(editor);
      }

      if (!domSelection) {
        return slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
      }

      var {
        anchorNode,
        focusNode
      } = domSelection;
      var anchorNodeSelectable = hasEditableTarget(editor, anchorNode) || isTargetInsideNonReadonlyVoid(editor, anchorNode);
      var focusNodeSelectable = hasEditableTarget(editor, focusNode) || isTargetInsideNonReadonlyVoid(editor, focusNode);

      if (anchorNodeSelectable && focusNodeSelectable) {
        var range = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: false
        });
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
      }
    }
  }, 100), [readOnly]);
  var scheduleOnDOMSelectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(onDOMSelectionChange, 0), [onDOMSelectionChange]); // Listen on the native `beforeinput` event to get real "Level 2" events. This
  // is required because React's `beforeinput` is fake and never really attaches
  // to the real event sadly. (2019/11/01)
  // https://github.com/facebook/react/issues/11211

  var onDOMBeforeInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    if (!readOnly && hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      // Some IMEs/Chrome extensions like e.g. Grammarly set the selection immediately before
      // triggering a `beforeinput` expecting the change to be applied to the immediately before
      // set selection.
      scheduleOnDOMSelectionChange.flush();
      onDOMSelectionChange.flush();
      var {
        selection
      } = editor;
      var {
        inputType: type
      } = event;
      var data = event.dataTransfer || event.data || undefined; // These two types occur while a user is composing text and can't be
      // cancelled. Let them through and wait for the composition to end.

      if (type === 'insertCompositionText' || type === 'deleteCompositionText') {
        return;
      }

      var native = false;

      if (type === 'insertText' && selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      event.data && event.data.length === 1 && /[a-z ]/i.test(event.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      selection.anchor.offset !== 0) {
        native = true; // Skip native if there are marks, as
        // `insertText` will insert a node, not just text.

        if (editor.marks) {
          native = false;
        } // Chrome also has issues correctly editing the end of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1259100
        // Therefore we don't allow native events to insert text at the end of nodes.


        var {
          anchor
        } = selection;
        var inline = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].above(editor, {
          at: anchor,
          match: n => slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isInline(editor, n),
          mode: 'highest'
        });

        if (inline) {
          var [, inlinePath] = inline;

          if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEnd(editor, selection.anchor, inlinePath)) {
            native = false;
          }
        }
      }

      if (!native) {
        event.preventDefault();
      } // COMPAT: For the deleting forward/backward input types we don't want
      // to change the selection because it is the range that will be deleted,
      // and those commands determine that for themselves.


      if (!type.startsWith('delete') || type.startsWith('deleteBy')) {
        var [targetRange] = event.getTargetRanges();

        if (targetRange) {
          var range = ReactEditor.toSlateRange(editor, targetRange, {
            exactMatch: false,
            suppressThrow: false
          });

          if (!selection || !slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(selection, range)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
          }
        }
      } // COMPAT: If the selection is expanded, even if the command seems like
      // a delete forward/backward command it should delete the selection.


      if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection) && type.startsWith('delete')) {
        var direction = type.endsWith('Backward') ? 'backward' : 'forward';
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
          direction
        });
        return;
      }

      switch (type) {
        case 'deleteByComposition':
        case 'deleteByCut':
        case 'deleteByDrag':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
            break;
          }

        case 'deleteContent':
        case 'deleteContentForward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor);
            break;
          }

        case 'deleteContentBackward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor);
            break;
          }

        case 'deleteEntireSoftLine':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
              unit: 'line'
            });
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
              unit: 'line'
            });
            break;
          }

        case 'deleteHardLineBackward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
              unit: 'block'
            });
            break;
          }

        case 'deleteSoftLineBackward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
              unit: 'line'
            });
            break;
          }

        case 'deleteHardLineForward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
              unit: 'block'
            });
            break;
          }

        case 'deleteSoftLineForward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
              unit: 'line'
            });
            break;
          }

        case 'deleteWordBackward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
              unit: 'word'
            });
            break;
          }

        case 'deleteWordForward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
              unit: 'word'
            });
            break;
          }

        case 'insertLineBreak':
        case 'insertParagraph':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertBreak(editor);
            break;
          }

        case 'insertFromComposition':
        case 'insertFromDrop':
        case 'insertFromPaste':
        case 'insertFromYank':
        case 'insertReplacementText':
        case 'insertText':
          {
            if (type === 'insertFromComposition') {
              // COMPAT: in Safari, `compositionend` is dispatched after the
              // `beforeinput` for "insertFromComposition". But if we wait for it
              // then we will abort because we're still composing and the selection
              // won't be updated properly.
              // https://www.w3.org/TR/input-events-2/
              state.isComposing && setIsComposing(false);
              state.isComposing = false;
            } // use a weak comparison instead of 'instanceof' to allow
            // programmatic access of paste events coming from external windows
            // like cypress where cy.window does not work realibly


            if ((data === null || data === void 0 ? void 0 : data.constructor.name) === 'DataTransfer') {
              ReactEditor.insertData(editor, data);
            } else if (typeof data === 'string') {
              // Only insertText operations use the native functionality, for now.
              // Potentially expand to single character deletes, as well.
              if (native) {
                deferredOperations.current.push(() => slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, data));
              } else {
                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, data);
              }
            }

            break;
          }
      }
    }
  }, [readOnly, propsOnDOMBeforeInput]); // Attach a native DOM event handler for `beforeinput` events, because React's
  // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
  // real `beforeinput` events sadly... (2019/11/04)
  // https://github.com/facebook/react/issues/11211

  useIsomorphicLayoutEffect(() => {
    if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
      // @ts-ignore The `beforeinput` event isn't recognized.
      ref.current.addEventListener('beforeinput', onDOMBeforeInput);
    }

    return () => {
      if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
        // @ts-ignore The `beforeinput` event isn't recognized.
        ref.current.removeEventListener('beforeinput', onDOMBeforeInput);
      }
    };
  }, [onDOMBeforeInput]); // Attach a native DOM event handler for `selectionchange`, because React's
  // built-in `onSelect` handler doesn't fire for all selection changes. It's a
  // leaky polyfill that only fires on keypresses or clicks. Instead, we want to
  // fire for any change to the selection inside the editor. (2019/11/04)
  // https://github.com/facebook/react/issues/5785

  useIsomorphicLayoutEffect(() => {
    var window = ReactEditor.getWindow(editor);
    window.document.addEventListener('selectionchange', scheduleOnDOMSelectionChange);
    return () => {
      window.document.removeEventListener('selectionchange', scheduleOnDOMSelectionChange);
    };
  }, [scheduleOnDOMSelectionChange]);
  var decorations = decorate([editor, []]);

  if (placeholder && editor.children.length === 1 && Array.from(slate__WEBPACK_IMPORTED_MODULE_1__["Node"].texts(editor)).length === 1 && slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(editor) === '' && !isComposing) {
    var start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start,
      focus: start
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecorateContext.Provider, {
    value: decorate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({
    role: readOnly ? undefined : 'textbox'
  }, attributes, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.spellCheck : false,
    autoCorrect: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCorrect : 'false',
    autoCapitalize: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCapitalize : 'false',
    "data-slate-editor": true,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !readOnly,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: true,
    ref: ref,
    style: _objectSpread({
      // Allow positioning relative to the editable element.
      position: 'relative',
      // Prevent the default outline styles.
      outline: 'none',
      // Preserve adjacent whitespace and new lines.
      whiteSpace: 'pre-wrap',
      // Allow words to break if they are too long.
      wordWrap: 'break-word'
    }, style),
    onBeforeInput: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      // COMPAT: Certain browsers don't support the `beforeinput` event, so we
      // fall back to React's leaky polyfill instead just for it. It
      // only works for the `insertText` input type.
      if (!HAS_BEFORE_INPUT_SUPPORT && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && hasEditableTarget(editor, event.target)) {
        event.preventDefault();

        if (!state.isComposing) {
          var text = event.data;
          slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, text);
        }
      }
    }, [readOnly]),
    onInput: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      // Flush native operations, as native events will have propogated
      // and we can correctly compare DOM text values in components
      // to stop rendering, so that browser functions like autocorrect
      // and spellcheck work as expected.
      for (var op of deferredOperations.current) {
        op();
      }

      deferredOperations.current = [];
    }, []),
    onBlur: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (readOnly || state.isUpdatingSelection || !hasEditableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      } // COMPAT: If the current `activeElement` is still the previous
      // one, this is due to the window being blurred when the tab
      // itself becomes unfocused, so we want to abort early to allow to
      // editor to stay focused when the tab becomes focused again.


      var root = ReactEditor.findDocumentOrShadowRoot(editor);

      if (state.latestElement === root.activeElement) {
        return;
      }

      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor); // COMPAT: The event should be ignored if the focus is returning
      // to the editor from an embedded editable element (eg. an <input>
      // element inside a void node).

      if (relatedTarget === el) {
        return;
      } // COMPAT: The event should be ignored if the focus is moving from
      // the editor to inside a void node's spacer element.


      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
        return;
      } // COMPAT: The event should be ignored if the focus is moving to a
      // non- editable section of an element that isn't a void node (eg.
      // a list item of the check list example).


      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node = ReactEditor.toSlateNode(editor, relatedTarget);

        if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(node) && !editor.isVoid(node)) {
          return;
        }
      } // COMPAT: Safari doesn't always remove the selection even if the content-
      // editable element no longer has focus. Refer to:
      // https://stackoverflow.com/questions/12353247/force-contenteditable-div-to-stop-accepting-input-after-it-loses-focus-under-web


      if (IS_SAFARI) {
        var domSelection = root.getSelection();
        domSelection === null || domSelection === void 0 ? void 0 : domSelection.removeAllRanges();
      }

      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onClick: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node); // At this time, the Slate document may be arbitrarily different,
        // because onClick handlers can change the document before we get here.
        // Therefore we must check that this path actually exists,
        // and that it still refers to the same node.

        if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasPath(editor, path)) {
          var lookupNode = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].get(editor, path);

          if (lookupNode === node) {
            var _start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, path);

            var end = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].end(editor, path);
            var startVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
              at: _start
            });
            var endVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
              at: end
            });

            if (startVoid && endVoid && slate__WEBPACK_IMPORTED_MODULE_1__["Path"].equals(startVoid[1], endVoid[1])) {
              var range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, _start);
              slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
            }
          }
        }
      }
    }, [readOnly, attributes.onClick]),
    onCompositionEnd: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionEnd)) {
        state.isComposing && setIsComposing(false);
        state.isComposing = false; // COMPAT: In Chrome, `beforeinput` events for compositions
        // aren't correct and never fire the "insertFromComposition"
        // type that we need. So instead, insert whenever a composition
        // ends since it will already have been committed to the DOM.

        if (!IS_SAFARI && !IS_FIREFOX_LEGACY && !IS_IOS && !IS_QQBROWSER && !IS_WECHATBROWSER && !IS_UC_MOBILE && event.data) {
          slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, event.data);
        }

        if (editor.selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(editor.selection)) {
          var leafPath = editor.selection.anchor.path;
          var currentTextNode = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].leaf(editor, leafPath);

          if (state.hasInsertPrefixInCompositon) {
            state.hasInsertPrefixInCompositon = false;
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].withoutNormalizing(editor, () => {
              // remove Unicode BOM prefix added in `onCompositionStart`
              var text = currentTextNode.text.replace(/^\uFEFF/, '');
              slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor, {
                distance: currentTextNode.text.length,
                reverse: true
              });
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, text);
            });
          }
        }
      }
    }, [attributes.onCompositionEnd]),
    onCompositionUpdate: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        !state.isComposing && setIsComposing(true);
        state.isComposing = true;
      }
    }, [attributes.onCompositionUpdate]),
    onCompositionStart: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionStart)) {
        var {
          selection,
          marks
        } = editor;

        if (selection) {
          if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
            return;
          }

          var inline = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].above(editor, {
            match: n => slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isInline(editor, n),
            mode: 'highest'
          });

          if (inline) {
            var [, inlinePath] = inline;

            if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEnd(editor, selection.anchor, inlinePath)) {
              var point = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].after(editor, inlinePath);
              slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setSelection(editor, {
                anchor: point,
                focus: point
              });
            }
          } // insert new node in advance to ensure composition text will insert
          // along with final input text
          // add Unicode BOM prefix to avoid normalize removing this node


          if (marks) {
            state.hasInsertPrefixInCompositon = true;
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertNodes(editor, _objectSpread({
              text: '\uFEFF'
            }, marks), {
              select: true
            });
          }
        }
      }
    }, [attributes.onCompositionStart]),
    onCopy: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, 'copy');
      }
    }, [attributes.onCopy]),
    onCut: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, 'cut');
        var {
          selection
        } = editor;

        if (selection) {
          if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
          } else {
            var node = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].parent(editor, selection.anchor.path);

            if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onDragOver: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
        // Only when the target is void, call `preventDefault` to signal
        // that drops are allowed. Editable content is droppable by
        // default, and calling `preventDefault` hides the cursor.
        var node = ReactEditor.toSlateNode(editor, event.target);

        if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node)) {
          event.preventDefault();
        }
      }
    }, [attributes.onDragOver]),
    onDragStart: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);
        var voidMatch = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node) || slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
          at: path,
          voids: true
        }); // If starting a drag on a void node, make sure it is selected
        // so that it shows up in the selection's fragment.

        if (voidMatch) {
          var range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, path);
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
        }

        state.isDraggingInternally = true;
        ReactEditor.setFragmentData(editor, event.dataTransfer, 'drag');
      }
    }, [readOnly, attributes.onDragStart]),
    onDrop: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
        event.preventDefault(); // Keep a reference to the dragged range before updating selection

        var draggedRange = editor.selection; // Find the range where the drop happened

        var range = ReactEditor.findEventRange(editor, event);
        var data = event.dataTransfer;
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);

        if (state.isDraggingInternally) {
          if (draggedRange && !slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(draggedRange, range) && !slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
            at: range,
            voids: true
          })) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor, {
              at: draggedRange
            });
          }

          state.isDraggingInternally = false;
        }

        ReactEditor.insertData(editor, data); // When dragging from another source into the editor, it's possible
        // that the current editor does not have focus.

        if (!ReactEditor.isFocused(editor)) {
          ReactEditor.focus(editor);
        }
      }
    }, [readOnly, attributes.onDrop]),
    onDragEnd: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      // When dropping on a different droppable element than the current editor,
      // `onDrop` is not called. So we need to clean up in `onDragEnd` instead.
      // Note: `onDragEnd` is only called when `onDrop` is not called
      if (!readOnly && state.isDraggingInternally && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragEnd)) {
        state.isDraggingInternally = false;
      }
    }, [readOnly, attributes.onDragEnd]),
    onFocus: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && !state.isUpdatingSelection && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var el = ReactEditor.toDOMNode(editor, editor);
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement; // COMPAT: If the editor has nested editable elements, the focus
        // can go to them. In Firefox, this must be prevented because it
        // results in issues with keyboard navigation. (2017/03/30)

        if (IS_FIREFOX && event.target !== el) {
          el.focus();
          return;
        }

        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onKeyDown: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && !state.isComposing && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onKeyDown)) {
        var {
          nativeEvent
        } = event;
        var {
          selection
        } = editor;
        var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
        var isRTL = direction__WEBPACK_IMPORTED_MODULE_2___default()(slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(element)) === 'rtl'; // COMPAT: Since we prevent the default behavior on
        // `beforeinput` events, the browser doesn't think there's ever
        // any history stack to undo or redo, so we have to manage these
        // hotkeys ourselves. (2019/11/06)

        if (Hotkeys.isRedo(nativeEvent)) {
          event.preventDefault();
          var maybeHistoryEditor = editor;

          if (typeof maybeHistoryEditor.redo === 'function') {
            maybeHistoryEditor.redo();
          }

          return;
        }

        if (Hotkeys.isUndo(nativeEvent)) {
          event.preventDefault();
          var _maybeHistoryEditor = editor;

          if (typeof _maybeHistoryEditor.undo === 'function') {
            _maybeHistoryEditor.undo();
          }

          return;
        } // COMPAT: Certain browsers don't handle the selection updates
        // properly. In Chrome, the selection isn't properly extended.
        // And in Firefox, the selection isn't properly collapsed.
        // (2017/10/17)


        if (Hotkeys.isMoveLineBackward(nativeEvent)) {
          event.preventDefault();
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'line',
            reverse: true
          });
          return;
        }

        if (Hotkeys.isMoveLineForward(nativeEvent)) {
          event.preventDefault();
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'line'
          });
          return;
        }

        if (Hotkeys.isExtendLineBackward(nativeEvent)) {
          event.preventDefault();
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'line',
            edge: 'focus',
            reverse: true
          });
          return;
        }

        if (Hotkeys.isExtendLineForward(nativeEvent)) {
          event.preventDefault();
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'line',
            edge: 'focus'
          });
          return;
        } // COMPAT: If a void node is selected, or a zero-width text node
        // adjacent to an inline is selected, we need to handle these
        // hotkeys manually because browsers won't be able to skip over
        // the void node with the zero-width space not being an empty
        // string.


        if (Hotkeys.isMoveBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
              reverse: !isRTL
            });
          } else {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].collapse(editor, {
              edge: 'start'
            });
          }

          return;
        }

        if (Hotkeys.isMoveForward(nativeEvent)) {
          event.preventDefault();

          if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
              reverse: isRTL
            });
          } else {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].collapse(editor, {
              edge: 'end'
            });
          }

          return;
        }

        if (Hotkeys.isMoveWordBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].collapse(editor, {
              edge: 'focus'
            });
          }

          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'word',
            reverse: !isRTL
          });
          return;
        }

        if (Hotkeys.isMoveWordForward(nativeEvent)) {
          event.preventDefault();

          if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].collapse(editor, {
              edge: 'focus'
            });
          }

          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'word',
            reverse: isRTL
          });
          return;
        } // COMPAT: Certain browsers don't support the `beforeinput` event, so we
        // fall back to guessing at the input intention for hotkeys.
        // COMPAT: In iOS, some of these hotkeys are handled in the


        if (!HAS_BEFORE_INPUT_SUPPORT) {
          // We don't have a core behavior for these, but they change the
          // DOM if we don't prevent them, so we have to.
          if (Hotkeys.isBold(nativeEvent) || Hotkeys.isItalic(nativeEvent) || Hotkeys.isTransposeCharacter(nativeEvent)) {
            event.preventDefault();
            return;
          }

          if (Hotkeys.isSplitBlock(nativeEvent)) {
            event.preventDefault();
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertBreak(editor);
            return;
          }

          if (Hotkeys.isDeleteBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor);
            }

            return;
          }

          if (Hotkeys.isDeleteForward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor);
            }

            return;
          }

          if (Hotkeys.isDeleteLineBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
                unit: 'line'
              });
            }

            return;
          }

          if (Hotkeys.isDeleteLineForward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
                unit: 'line'
              });
            }

            return;
          }

          if (Hotkeys.isDeleteWordBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
                unit: 'word'
              });
            }

            return;
          }

          if (Hotkeys.isDeleteWordForward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
                unit: 'word'
              });
            }

            return;
          }
        } else {
          if (IS_CHROME || IS_SAFARI) {
            // COMPAT: Chrome and Safari support `beforeinput` event but do not fire
            // an event when deleting backwards in a selected void inline node
            if (selection && (Hotkeys.isDeleteBackward(nativeEvent) || Hotkeys.isDeleteForward(nativeEvent)) && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
              var currentNode = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].parent(editor, selection.anchor.path);

              if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(currentNode) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, currentNode) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isInline(editor, currentNode)) {
                event.preventDefault();
                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
                  unit: 'block'
                });
                return;
              }
            }
          }
        }
      }
    }, [readOnly, attributes.onKeyDown]),
    onPaste: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
        // COMPAT: Certain browsers don't support the `beforeinput` event, so we
        // fall back to React's `onPaste` here instead.
        // COMPAT: Firefox, Chrome and Safari don't emit `beforeinput` events
        // when "paste without formatting" is used, so fallback. (2020/02/20)
        if (!HAS_BEFORE_INPUT_SUPPORT || isPlainTextOnlyPaste(event.nativeEvent)) {
          event.preventDefault();
          ReactEditor.insertData(editor, event.clipboardData);
        }
      }
    }, [readOnly, attributes.onPaste])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Children, {
    decorations: decorations,
    node: editor,
    renderElement: renderElement,
    renderPlaceholder: renderPlaceholder,
    renderLeaf: renderLeaf,
    selection: editor.selection
  }))));
};
/**
 * The default placeholder element
 */

var DefaultPlaceholder = _ref => {
  var {
    attributes,
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", Object.assign({}, attributes), children);
};
/**
 * A default memoized decorate function.
 */

var defaultDecorate = () => [];
/**
 * A default implement to scroll dom range into view.
 */

var defaultScrollSelectionIntoView = (editor, domRange) => {
  // This was affecting the selection of multiple blocks and dragging behavior,
  // so enabled only if the selection has been collapsed.
  if (!editor.selection || editor.selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(editor.selection)) {
    var leafEl = domRange.startContainer.parentElement;
    leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
    Object(scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_5__["default"])(leafEl, {
      scrollMode: 'if-needed'
    });
    delete leafEl.getBoundingClientRect;
  }
};
/**
 * Check if the target is in the editor.
 */

var hasTarget = (editor, target) => {
  return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target);
};
/**
 * Check if the target is editable and in the editor.
 */

var hasEditableTarget = (editor, target) => {
  return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target, {
    editable: true
  });
};
/**
 * Check if the target is inside void and in an non-readonly editor.
 */

var isTargetInsideNonReadonlyVoid = (editor, target) => {
  if (IS_READ_ONLY.get(editor)) return false;
  var slateNode = hasTarget(editor, target) && ReactEditor.toSlateNode(editor, target);
  return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, slateNode);
};
/**
 * Check if an event is overrided by a handler.
 */

var isEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  } // The custom event handler may return a boolean to specify whether the event
  // shall be treated as being handled or not.


  var shouldTreatEventAsHandled = handler(event);

  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }

  return event.isDefaultPrevented() || event.isPropagationStopped();
};
/**
 * Check if a DOM event is overrided by a handler.
 */

var isDOMEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  } // The custom event handler may return a boolean to specify whether the event
  // shall be treated as being handled or not.


  var shouldTreatEventAsHandled = handler(event);

  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }

  return event.defaultPrevented;
};

// Components
var Editable = IS_ANDROID ? AndroidEditable : Editable$1;




/***/ }),

/***/ "../.yarn/cache/compute-scroll-into-view-npm-1.0.17-708f0ecc3d-b20c05a10c.zip/node_modules/compute-scroll-into-view/dist/index.module.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../.yarn/cache/compute-scroll-into-view-npm-1.0.17-708f0ecc3d-b20c05a10c.zip/node_modules/compute-scroll-into-view/dist/index.module.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}/* harmony default export */ __webpack_exports__["default"] = (function(e,i){var o=window,l=i.scrollMode,d=i.block,u=i.inline,h=i.boundary,a=i.skipOverflowHiddenElements,c="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,s=[],p=e;t(p)&&c(p);){if((p=p.parentElement)===f){s.push(p);break}null!=p&&p===document.body&&n(p)&&!n(document.documentElement)||null!=p&&n(p,a)&&s.push(p)}for(var m=o.visualViewport?o.visualViewport.width:innerWidth,g=o.visualViewport?o.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),b=W.height,H=W.width,y=W.top,E=W.right,M=W.bottom,V=W.left,x="start"===d||"nearest"===d?y:"end"===d?M:y+b/2,I="center"===u?V+H/2:"end"===u?E:V,C=[],T=0;T<s.length;T++){var k=s[T],B=k.getBoundingClientRect(),D=B.height,O=B.width,R=B.top,X=B.right,Y=B.bottom,L=B.left;if("if-needed"===l&&y>=0&&V>=0&&M<=g&&E<=m&&y>=R&&M<=Y&&V>=L&&E<=X)return C;var S=getComputedStyle(k),j=parseInt(S.borderLeftWidth,10),q=parseInt(S.borderTopWidth,10),z=parseInt(S.borderRightWidth,10),A=parseInt(S.borderBottomWidth,10),F=0,G=0,J="offsetWidth"in k?k.offsetWidth-k.clientWidth-j-z:0,K="offsetHeight"in k?k.offsetHeight-k.clientHeight-q-A:0;if(f===k)F="start"===d?x:"end"===d?x-g:"nearest"===d?r(v,v+g,g,q,A,v+x,v+x+b,b):x-g/2,G="start"===u?I:"center"===u?I-m/2:"end"===u?I-m:r(w,w+m,m,j,z,w+I,w+I+H,H),F=Math.max(0,F+v),G=Math.max(0,G+w);else{F="start"===d?x-R-q:"end"===d?x-Y+A+K:"nearest"===d?r(R,Y,D,q,A+K,x,x+b,b):x-(R+D/2)+K/2,G="start"===u?I-L-j:"center"===u?I-(L+O/2)+J/2:"end"===u?I-X+z+J:r(L,X,O,j,z+J,I,I+H,H);var N=k.scrollLeft,P=k.scrollTop;x+=P-(F=Math.max(0,Math.min(P+F,k.scrollHeight-D+K))),I+=N-(G=Math.max(0,Math.min(N+G,k.scrollWidth-O+J)))}C.push({el:k,top:F,left:G})}return C});


/***/ }),

/***/ "../.yarn/cache/direction-npm-1.0.4-c097c04313-572ac39909.zip/node_modules/direction/index.js":
/*!****************************************************************************************************!*\
  !*** ../.yarn/cache/direction-npm-1.0.4-c097c04313-572ac39909.zip/node_modules/direction/index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = direction

var RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC'
var LTR =
  'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
  '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
  '\uFE00-\uFE6F\uFEFD-\uFFFF'

var rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']')
var ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']')

function direction(value) {
  value = String(value || '')

  if (rtl.test(value)) {
    return 'rtl'
  }

  if (ltr.test(value)) {
    return 'ltr'
  }

  return 'neutral'
}


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_Symbol.js":
/*!**************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_Symbol.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_baseGetTag.js":
/*!******************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_baseGetTag.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_baseTrim.js":
/*!****************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_baseTrim.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_freeGlobal.js":
/*!******************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_freeGlobal.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/global.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_getRawTag.js":
/*!*****************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_getRawTag.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_objectToString.js":
/*!**********************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_objectToString.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_root.js":
/*!************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_root.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_trimmedEndIndex.js":
/*!***********************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_trimmedEndIndex.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/debounce.js":
/*!***************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/debounce.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isObject.js":
/*!***************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isObject.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isObjectLike.js":
/*!*******************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isObjectLike.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isSymbol.js":
/*!***************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isSymbol.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/now.js":
/*!**********************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/now.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/throttle.js":
/*!***************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/throttle.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/toNumber.js":
/*!***************************************************************************************************!*\
  !*** ../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/toNumber.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "../.yarn/cache/scroll-into-view-if-needed-npm-2.2.28-0c00390269-0b18d33118.zip/node_modules/scroll-into-view-if-needed/es/index.js":
/*!******************************************************************************************************************************************!*\
  !*** ../.yarn/cache/scroll-into-view-if-needed-npm-2.2.28-0c00390269-0b18d33118.zip/node_modules/scroll-into-view-if-needed/es/index.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compute-scroll-into-view */ "../.yarn/cache/compute-scroll-into-view-npm-1.0.17-708f0ecc3d-b20c05a10c.zip/node_modules/compute-scroll-into-view/dist/index.module.js");


function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}

function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }

  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;

    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}

function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }

  if (isOptionsObject(options)) {
    return options;
  }

  return {
    block: 'start',
    inline: 'nearest'
  };
}

function scrollIntoView(target, options) {
  var targetIsDetached = !target.ownerDocument.documentElement.contains(target);

  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(targetIsDetached ? [] : Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(target, options));
  }

  if (targetIsDetached) {
    return;
  }

  var computeOptions = getOptions(options);
  return defaultBehavior(Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(target, computeOptions), computeOptions.behavior);
}

/* harmony default export */ __webpack_exports__["default"] = (scrollIntoView);

/***/ }),

/***/ "./examples/check-lists.tsx":
/*!**********************************!*\
  !*** ./examples/check-lists.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "../.yarn/__virtual__/@emotion-css-virtual-d83d1c33bf/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");




var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\check-lists.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject3() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          flex: 1;\n          opacity: ", ";\n          text-decoration: ", ";\n\n          &:focus {\n            outline: none;\n          }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          margin-right: 0.75em;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n\n        & + & {\n          margin-top: 0;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'With Slate you can build complex block types that have their own embedded content and behaviors, like rendering checkboxes inside check list items!'
  }]
}, {
  type: 'check-list-item',
  checked: true,
  children: [{
    text: 'Slide to the left.'
  }]
}, {
  type: 'check-list-item',
  checked: true,
  children: [{
    text: 'Slide to the right.'
  }]
}, {
  type: 'check-list-item',
  checked: false,
  children: [{
    text: 'Criss-cross.'
  }]
}, {
  type: 'check-list-item',
  checked: true,
  children: [{
    text: 'Criss-cross!'
  }]
}, {
  type: 'check-list-item',
  checked: false,
  children: [{
    text: 'Cha cha real smooth…'
  }]
}, {
  type: 'check-list-item',
  checked: false,
  children: [{
    text: "Let's go to work!"
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Try it out for yourself!'
  }]
}];

var CheckListsExample = function CheckListsExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var renderElement = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (props) {
    return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 46
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return withChecklists(Object(slate_history__WEBPACK_IMPORTED_MODULE_7__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_5__["createEditor"])())));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    renderElement: renderElement,
    placeholder: "Get to work\u2026",
    spellCheck: true,
    autoFocus: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }));
};

_s(CheckListsExample, "9HkvqXgepfcc58pVdFmOn6blq7U=");

_c = CheckListsExample;

var withChecklists = function withChecklists(editor) {
  var deleteBackward = editor.deleteBackward;

  editor.deleteBackward = function () {
    var selection = editor.selection;

    if (selection && slate__WEBPACK_IMPORTED_MODULE_5__["Range"].isCollapsed(selection)) {
      var _Editor$nodes = slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].nodes(editor, {
        match: function match(n) {
          return !slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_5__["Element"].isElement(n) && n.type === 'check-list-item';
        }
      }),
          _Editor$nodes2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Editor$nodes, 1),
          match = _Editor$nodes2[0];

      if (match) {
        var _match = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(match, 2),
            path = _match[1];

        var start = slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].start(editor, path);

        if (slate__WEBPACK_IMPORTED_MODULE_5__["Point"].equals(selection.anchor, start)) {
          var newProperties = {
            type: 'paragraph'
          };
          slate__WEBPACK_IMPORTED_MODULE_5__["Transforms"].setNodes(editor, newProperties, {
            match: function match(n) {
              return !slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_5__["Element"].isElement(n) && n.type === 'check-list-item';
            }
          });
          return;
        }
      }
    }

    deleteBackward.apply(void 0, arguments);
  };

  return editor;
};

var Element = function Element(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;

  switch (element.type) {
    case 'check-list-item':
      return __jsx(CheckListItemElement, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 14
        }
      }));

    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 14
        }
      }), children);
  }
};

_c2 = Element;

var CheckListItemElement = function CheckListItemElement(_ref) {
  _s2();

  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlateStatic"])();
  var readOnly = Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["useReadOnly"])();
  var checked = element.checked;
  return __jsx("div", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, attributes, {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }), __jsx("span", {
    contentEditable: false,
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject2()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "checkbox",
    checked: checked,
    onChange: function onChange(event) {
      var path = slate_react__WEBPACK_IMPORTED_MODULE_4__["ReactEditor"].findPath(editor, element);
      var newProperties = {
        checked: event.target.checked
      };
      slate__WEBPACK_IMPORTED_MODULE_5__["Transforms"].setNodes(editor, newProperties, {
        at: path
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  })), __jsx("span", {
    contentEditable: !readOnly,
    suppressContentEditableWarning: true,
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject3(), checked ? 0.666 : 1, !checked ? 'none' : 'line-through'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, children));
};

_s2(CheckListItemElement, "Eo1nRXvBiMMNznqbVumFtt9yBuY=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlateStatic"], slate_react__WEBPACK_IMPORTED_MODULE_4__["useReadOnly"]];
});

_c3 = CheckListItemElement;
/* harmony default export */ __webpack_exports__["default"] = (CheckListsExample);

var _c, _c2, _c3;

$RefreshReg$(_c, "CheckListsExample");
$RefreshReg$(_c2, "Element");
$RefreshReg$(_c3, "CheckListItemElement");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/code-highlighting.tsx":
/*!****************************************!*\
  !*** ./examples/code-highlighting.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs */ "../.yarn/cache/prismjs-npm-1.24.1-091db90251-e5d14a4ba5.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-python */ "../.yarn/cache/prismjs-npm-1.24.1-091db90251-e5d14a4ba5.zip/node_modules/prismjs/components/prism-python.js");
/* harmony import */ var prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-php */ "../.yarn/cache/prismjs-npm-1.24.1-091db90251-e5d14a4ba5.zip/node_modules/prismjs/components/prism-php.js");
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-sql */ "../.yarn/cache/prismjs-npm-1.24.1-091db90251-e5d14a4ba5.zip/node_modules/prismjs/components/prism-sql.js");
/* harmony import */ var prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-java */ "../.yarn/cache/prismjs-npm-1.24.1-091db90251-e5d14a4ba5.zip/node_modules/prismjs/components/prism-java.js");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/css */ "../.yarn/__virtual__/@emotion-css-virtual-d83d1c33bf/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");





var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\code-highlighting.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _templateObject9() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            color: #dd4a68;\n          "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            color: #690;\n          "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            color: #999;\n          "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            color: #905;\n          "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            color: #e90;\n          "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            color: #07a;\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            color: #9a6e3a;\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            color: slategray;\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            font-family: monospace;\n            background: hsla(0, 0%, 100%, .5);\n\n        ", "\n\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












var CodeHighlightingExample = function CodeHighlightingExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])('html'),
      language = _useState2[0],
      setLanguage = _useState2[1];

  var renderLeaf = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (props) {
    return __jsx(Leaf, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 43
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_9__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_12__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_10__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_11__["createEditor"])()));
  }, []); // decorate function depends on the language selected

  var decorate = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (_ref) {
    var _ref2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
        node = _ref2[0],
        path = _ref2[1];

    var ranges = [];

    if (!slate__WEBPACK_IMPORTED_MODULE_11__["Text"].isText(node)) {
      return ranges;
    }

    var tokens = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.tokenize(node.text, prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages[language]);
    var start = 0;

    var _iterator = _createForOfIteratorHelper(tokens),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var token = _step.value;
        var length = getLength(token);
        var end = start + length;

        if (typeof token !== 'string') {
          var _ranges$push;

          ranges.push((_ranges$push = {}, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ranges$push, token.type, true), Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ranges$push, "anchor", {
            path: path,
            offset: start
          }), Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ranges$push, "focus", {
            path: path,
            offset: end
          }), _ranges$push));
        }

        start = end;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return ranges;
  }, [language]);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_10__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    contentEditable: false,
    style: {
      position: 'relative',
      top: '5px',
      right: '5px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Select a language", __jsx("select", {
    value: language,
    style: {
      "float": 'right'
    },
    onChange: function onChange(e) {
      return setLanguage(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "JavaScript"), __jsx("option", {
    value: "css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "CSS"), __jsx("option", {
    value: "html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "HTML"), __jsx("option", {
    value: "python",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Python"), __jsx("option", {
    value: "sql",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "SQL"), __jsx("option", {
    value: "java",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Java"), __jsx("option", {
    value: "php",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "PHP")))), __jsx(slate_react__WEBPACK_IMPORTED_MODULE_10__["Editable"], {
    decorate: decorate,
    renderLeaf: renderLeaf,
    placeholder: "Write some code...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }));
};

_s(CodeHighlightingExample, "gOvyx2u8cX8c9T+8PV6djJhG5UE=");

_c = CodeHighlightingExample;

var getLength = function getLength(token) {
  if (typeof token === 'string') {
    return token.length;
  } else if (typeof token.content === 'string') {
    return token.content.length;
  } else {
    return token.content.reduce(function (l, t) {
      return l + getLength(t);
    }, 0);
  }
}; // different token types, styles found on Prismjs website


var Leaf = function Leaf(_ref3) {
  var attributes = _ref3.attributes,
      children = _ref3.children,
      leaf = _ref3.leaf;
  return __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, attributes, {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["css"])(_templateObject(), leaf.comment && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["css"])(_templateObject2()), (leaf.operator || leaf.url) && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["css"])(_templateObject3()), leaf.keyword && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["css"])(_templateObject4()), (leaf.variable || leaf.regex) && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["css"])(_templateObject5()), (leaf.number || leaf["boolean"] || leaf.tag || leaf.constant || leaf.symbol || leaf['attr-name'] || leaf.selector) && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["css"])(_templateObject6()), leaf.punctuation && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["css"])(_templateObject7()), (leaf.string || leaf["char"]) && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["css"])(_templateObject8()), (leaf["function"] || leaf['class-name']) && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["css"])(_templateObject9())),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }), children);
};

_c2 = Leaf;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: '<h1>Hi!</h1>'
  }]
}]; // modifications and additions to prism library

prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.python = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.extend('python', {});
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.insertBefore('python', 'prolog', {
  comment: {
    pattern: /##[^\n]*/,
    alias: 'comment'
  }
});
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.javascript = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.extend('javascript', {});
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.insertBefore('javascript', 'prolog', {
  comment: {
    pattern: /\/\/[^\n]*/,
    alias: 'comment'
  }
});
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.html = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.extend('html', {});
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.insertBefore('html', 'prolog', {
  comment: {
    pattern: /<!--[^\n]*-->/,
    alias: 'comment'
  }
});
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.extend('markup', {});
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.insertBefore('markdown', 'prolog', {
  blockquote: {
    pattern: /^>(?:[\t ]*>)*/m,
    alias: 'punctuation'
  },
  code: [{
    pattern: /^(?: {4}|\t).+/m,
    alias: 'keyword'
  }, {
    pattern: /``.+?``|`[^`\n]+`/,
    alias: 'keyword'
  }],
  title: [{
    pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
    alias: 'important',
    inside: {
      punctuation: /==+$|--+$/
    }
  }, {
    pattern: /(^\s*)#+.+/m,
    lookbehind: !0,
    alias: 'important',
    inside: {
      punctuation: /^#+|#+$/
    }
  }],
  hr: {
    pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
    lookbehind: !0,
    alias: 'punctuation'
  },
  list: {
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
    lookbehind: !0,
    alias: 'punctuation'
  },
  'url-reference': {
    pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: {
        pattern: /^(!?\[)[^\]]+/,
        lookbehind: !0
      },
      string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[\[\]!:]|[<>]/
    },
    alias: 'url'
  },
  bold: {
    pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: {
      punctuation: /^\*\*|^__|\*\*$|__$/
    }
  },
  italic: {
    pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: {
      punctuation: /^[*_]|[*_]$/
    }
  },
  url: {
    pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
    inside: {
      variable: {
        pattern: /(!?\[)[^\]]+(?=\]$)/,
        lookbehind: !0
      },
      string: {
        pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
      }
    }
  }
});
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.bold.inside.url = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.url);
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.italic.inside.url = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.url);
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.bold.inside.italic = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.italic);
prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.italic.inside.bold = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.bold); // prettier-ignore

/* harmony default export */ __webpack_exports__["default"] = (CodeHighlightingExample);

var _c, _c2;

$RefreshReg$(_c, "CodeHighlightingExample");
$RefreshReg$(_c2, "Leaf");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/custom-placeholder.tsx":
/*!*****************************************!*\
  !*** ./examples/custom-placeholder.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");


var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\custom-placeholder.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var PlainTextExample = function PlainTextExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_4__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_3__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_2__["createEditor"])()));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_3__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_3__["Editable"], {
    placeholder: "Type something",
    renderPlaceholder: function renderPlaceholder(_ref) {
      var children = _ref.children,
          attributes = _ref.attributes;
      return __jsx("div", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      }), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }
      }, children), __jsx("pre", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }
      }, "Use the renderPlaceholder prop to customize rendering of the placeholder"));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};

_s(PlainTextExample, "4ewp4wBHt4y6QUDh2ipfoCLaKxY=");

_c = PlainTextExample;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: ''
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (PlainTextExample);

var _c;

$RefreshReg$(_c, "PlainTextExample");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/editable-voids.tsx":
/*!*************************************!*\
  !*** ./examples/editable-voids.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "../.yarn/__virtual__/@emotion-css-virtual-d83d1c33bf/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _richtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./richtext */ "./examples/richtext.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./components.tsx");



var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\editable-voids.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject4() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            padding: 20px;\n            border: 2px solid #ddd;\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            margin: 8px 0;\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          box-shadow: 0 0 0 3px #ddd;\n          padding: 8px;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: unset;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var EditableVoidsExample = function EditableVoidsExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return withEditableVoids(Object(slate_history__WEBPACK_IMPORTED_MODULE_5__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_3__["createEditor"])())));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Slate"], {
    editor: editor,
    value: value,
    onChange: setValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(InsertEditableVoidButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    renderElement: function renderElement(props) {
      return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 33
        }
      }));
    },
    placeholder: "Enter some text...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
};

_s(EditableVoidsExample, "4ewp4wBHt4y6QUDh2ipfoCLaKxY=");

_c = EditableVoidsExample;

var withEditableVoids = function withEditableVoids(editor) {
  var isVoid = editor.isVoid;

  editor.isVoid = function (element) {
    return element.type === 'editable-void' ? true : isVoid(element);
  };

  return editor;
};

var insertEditableVoid = function insertEditableVoid(editor) {
  var text = {
    text: ''
  };
  var voidNode = {
    type: 'editable-void',
    children: [text]
  };
  slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].insertNodes(editor, voidNode);
};

var Element = function Element(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;

  switch (element.type) {
    case 'editable-void':
      return __jsx(EditableVoid, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 14
        }
      }));

    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 14
        }
      }), children);
  }
};

_c2 = Element;
var unsetWidthStyle = Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject());

var EditableVoid = function EditableVoid(_ref) {
  _s2();

  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  return (// Need contentEditable=false or Firefox has issues with certain input types.
    __jsx("div", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
      contentEditable: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }
    }), __jsx("div", {
      className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject2()),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    }, "Name:"), __jsx("input", {
      className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject3()),
      type: "text",
      value: inputValue,
      onChange: function onChange(e) {
        setInputValue(e.target.value);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }, "Left or right handed:"), __jsx("input", {
      className: unsetWidthStyle,
      type: "radio",
      name: "handedness",
      value: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }), ' ', "Left", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }
    }), __jsx("input", {
      className: unsetWidthStyle,
      type: "radio",
      name: "handedness",
      value: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }), ' ', "Right", __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, "Tell us about yourself:"), __jsx("div", {
      className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject4()),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }, __jsx(_richtext__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }))), children)
  );
};

_s2(EditableVoid, "SORcW8kVWUa8fZ+un8oXhp/OLnk=");

_c3 = EditableVoid;

var InsertEditableVoidButton = function InsertEditableVoidButton() {
  _s3();

  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlateStatic"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      insertEditableVoid(editor);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, "add"));
};

_s3(InsertEditableVoidButton, "WYoDIuUdAaGffyWcFDq4gCgXxVo=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlateStatic"]];
});

_c4 = InsertEditableVoidButton;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'In addition to nodes that contain editable text, you can insert void nodes, which can also contain editable elements, inputs, or an entire other Slate editor.'
  }]
}, {
  type: 'editable-void',
  children: [{
    text: ''
  }]
}, {
  type: 'paragraph',
  children: [{
    text: ''
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (EditableVoidsExample);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "EditableVoidsExample");
$RefreshReg$(_c2, "Element");
$RefreshReg$(_c3, "EditableVoid");
$RefreshReg$(_c4, "InsertEditableVoidButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/embeds.tsx":
/*!*****************************!*\
  !*** ./examples/embeds.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");



var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\embeds.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var EmbedsExample = function EmbedsExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return withEmbeds(Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_3__["createEditor"])()));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    renderElement: function renderElement(props) {
      return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 33
        }
      }));
    },
    placeholder: "Enter some text...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }));
};

_s(EmbedsExample, "4ewp4wBHt4y6QUDh2ipfoCLaKxY=");

_c = EmbedsExample;

var withEmbeds = function withEmbeds(editor) {
  var isVoid = editor.isVoid;

  editor.isVoid = function (element) {
    return element.type === 'video' ? true : isVoid(element);
  };

  return editor;
};

var Element = function Element(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;

  switch (element.type) {
    case 'video':
      return __jsx(VideoElement, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 14
        }
      }));

    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 14
        }
      }), children);
  }
};

_c2 = Element;

var VideoElement = function VideoElement(_ref) {
  _s2();

  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlateStatic"])();
  var url = element.url;
  return __jsx("div", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), __jsx("div", {
    contentEditable: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: '75% 0 0 0',
      position: 'relative'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("iframe", {
    src: "".concat(url, "?title=0&byline=0&portrait=0"),
    frameBorder: "0",
    style: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx(UrlInput, {
    url: url,
    onChange: function onChange(val) {
      var path = slate_react__WEBPACK_IMPORTED_MODULE_4__["ReactEditor"].findPath(editor, element);
      var newProperties = {
        url: val
      };
      slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].setNodes(editor, newProperties, {
        at: path
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })), children);
};

_s2(VideoElement, "WYoDIuUdAaGffyWcFDq4gCgXxVo=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlateStatic"]];
});

_c3 = VideoElement;

var UrlInput = function UrlInput(_ref2) {
  _s3();

  var url = _ref2.url,
      _onChange = _ref2.onChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(url),
      _React$useState2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return __jsx("input", {
    value: value,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      marginTop: '5px',
      boxSizing: 'border-box'
    },
    onChange: function onChange(e) {
      var newUrl = e.target.value;
      setValue(newUrl);

      _onChange(newUrl);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  });
};

_s3(UrlInput, "+WW1UdMVeodMsjMPXbl3tqj6AN8=");

_c4 = UrlInput;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'In addition to simple image nodes, you can actually create complex embedded nodes. For example, this one contains an input element that lets you change the video being rendered!'
  }]
}, {
  type: 'video',
  url: 'https://player.vimeo.com/video/26689853',
  children: [{
    text: ''
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Try it out! This editor is built to handle Vimeo embeds, but you could handle any type.'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (EmbedsExample);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "EmbedsExample");
$RefreshReg$(_c2, "Element");
$RefreshReg$(_c3, "VideoElement");
$RefreshReg$(_c4, "UrlInput");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/forced-layout.tsx":
/*!************************************!*\
  !*** ./examples/forced-layout.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");



var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\forced-layout.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var withLayout = function withLayout(editor) {
  var normalizeNode = editor.normalizeNode;

  editor.normalizeNode = function (_ref) {
    var _ref2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        node = _ref2[0],
        path = _ref2[1];

    if (path.length === 0) {
      if (editor.children.length < 1) {
        var title = {
          type: 'title',
          children: [{
            text: 'Untitled'
          }]
        };
        slate__WEBPACK_IMPORTED_MODULE_4__["Transforms"].insertNodes(editor, title, {
          at: path.concat(0)
        });
      }

      if (editor.children.length < 2) {
        var paragraph = {
          type: 'paragraph',
          children: [{
            text: ''
          }]
        };
        slate__WEBPACK_IMPORTED_MODULE_4__["Transforms"].insertNodes(editor, paragraph, {
          at: path.concat(1)
        });
      }

      var _iterator = _createForOfIteratorHelper(slate__WEBPACK_IMPORTED_MODULE_4__["Node"].children(editor, path)),
          _step;

      try {
        var _loop = function _loop() {
          var _step$value = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_step.value, 2),
              child = _step$value[0],
              childPath = _step$value[1];

          var type = void 0;
          var slateIndex = childPath[0];

          var enforceType = function enforceType(type) {
            if (slate__WEBPACK_IMPORTED_MODULE_4__["Element"].isElement(child) && child.type !== type) {
              var newProperties = {
                type: type
              };
              slate__WEBPACK_IMPORTED_MODULE_4__["Transforms"].setNodes(editor, newProperties, {
                at: childPath
              });
            }
          };

          switch (slateIndex) {
            case 0:
              type = 'title';
              enforceType(type);
              break;

            case 1:
              type = 'paragraph';
              enforceType(type);

            default:
              break;
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};

var ForcedLayoutExample = function ForcedLayoutExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var renderElement = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (props) {
    return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 46
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return withLayout(Object(slate_history__WEBPACK_IMPORTED_MODULE_5__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_3__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_4__["createEditor"])())));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_3__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_3__["Editable"], {
    renderElement: renderElement,
    placeholder: "Enter a title\u2026",
    spellCheck: true,
    autoFocus: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }));
};

_s(ForcedLayoutExample, "9HkvqXgepfcc58pVdFmOn6blq7U=");

_c = ForcedLayoutExample;

var Element = function Element(_ref3) {
  var attributes = _ref3.attributes,
      children = _ref3.children,
      element = _ref3.element;

  switch (element.type) {
    case 'title':
      return __jsx("h2", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 14
        }
      }), children);

    case 'paragraph':
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 14
        }
      }), children);
  }
};

_c2 = Element;
var initialValue = [{
  type: 'title',
  children: [{
    text: 'Enforce Your Layout!'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'This example shows how to enforce your layout with domain-specific constraints. This document will always have a title block at the top and at least one paragraph in the body. Try deleting them and see what happens!'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (ForcedLayoutExample);

var _c, _c2;

$RefreshReg$(_c, "ForcedLayoutExample");
$RefreshReg$(_c2, "Element");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/hovering-toolbar.tsx":
/*!***************************************!*\
  !*** ./examples/hovering-toolbar.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/css */ "../.yarn/__virtual__/@emotion-css-virtual-d83d1c33bf/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components */ "./components.tsx");





var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\hovering-toolbar.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          padding: 8px 7px 6px;\n          position: absolute;\n          z-index: 1;\n          top: -10000px;\n          left: -10000px;\n          margin-top: -6px;\n          opacity: 0;\n          background-color: #222;\n          border-radius: 4px;\n          transition: opacity 0.75s;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var HoveringMenuExample = function HoveringMenuExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_8__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_5__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_6__["createEditor"])()));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_5__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(HoveringToolbar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(slate_react__WEBPACK_IMPORTED_MODULE_5__["Editable"], {
    renderLeaf: function renderLeaf(props) {
      return __jsx(Leaf, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 30
        }
      }));
    },
    placeholder: "Enter some text...",
    onDOMBeforeInput: function onDOMBeforeInput(event) {
      event.preventDefault();

      switch (event.inputType) {
        case 'formatBold':
          return toggleFormat(editor, 'bold');

        case 'formatItalic':
          return toggleFormat(editor, 'italic');

        case 'formatUnderline':
          return toggleFormat(editor, 'underlined');
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
};

_s(HoveringMenuExample, "4ewp4wBHt4y6QUDh2ipfoCLaKxY=");

_c = HoveringMenuExample;

var toggleFormat = function toggleFormat(editor, format) {
  var isActive = isFormatActive(editor, format);
  slate__WEBPACK_IMPORTED_MODULE_6__["Transforms"].setNodes(editor, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, format, isActive ? null : true), {
    match: slate__WEBPACK_IMPORTED_MODULE_6__["Text"].isText,
    split: true
  });
};

var isFormatActive = function isFormatActive(editor, format) {
  var _Editor$nodes = slate__WEBPACK_IMPORTED_MODULE_6__["Editor"].nodes(editor, {
    match: function match(n) {
      return n[format] === true;
    },
    mode: 'all'
  }),
      _Editor$nodes2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Editor$nodes, 1),
      match = _Editor$nodes2[0];

  return !!match;
};

var Leaf = function Leaf(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      leaf = _ref.leaf;

  if (leaf.bold) {
    children = __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.italic) {
    children = __jsx("em", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.underlined) {
    children = __jsx("u", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 16
      }
    }, children);
  }

  return __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, attributes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 10
    }
  }), children);
};

_c2 = Leaf;

var HoveringToolbar = function HoveringToolbar() {
  _s2();

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_5__["useSlate"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var el = ref.current;
    var selection = editor.selection;

    if (!el) {
      return;
    }

    if (!selection || !slate_react__WEBPACK_IMPORTED_MODULE_5__["ReactEditor"].isFocused(editor) || slate__WEBPACK_IMPORTED_MODULE_6__["Range"].isCollapsed(selection) || slate__WEBPACK_IMPORTED_MODULE_6__["Editor"].string(editor, selection) === '') {
      el.removeAttribute('style');
      return;
    }

    var domSelection = window.getSelection();
    var domRange = domSelection.getRangeAt(0);
    var rect = domRange.getBoundingClientRect();
    el.style.opacity = '1';
    el.style.top = "".concat(rect.top + window.pageYOffset - el.offsetHeight, "px");
    el.style.left = "".concat(rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2, "px");
  });
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_9__["Portal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_9__["Menu"], {
    ref: ref,
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_7__["css"])(_templateObject()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(FormatButton, {
    format: "bold",
    icon: "format_bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), __jsx(FormatButton, {
    format: "italic",
    icon: "format_italic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }), __jsx(FormatButton, {
    format: "underlined",
    icon: "format_underlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  })));
};

_s2(HoveringToolbar, "zR6WV11V6v+T2KLkAbtbVw8+RTk=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_5__["useSlate"]];
});

_c3 = HoveringToolbar;

var FormatButton = function FormatButton(_ref2) {
  _s3();

  var format = _ref2.format,
      icon = _ref2.icon;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_5__["useSlate"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    reversed: true,
    active: isFormatActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleFormat(editor, format);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, icon));
};

_s3(FormatButton, "YMFVEh3YGumTkrWAgpqmxHJ20Oc=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_5__["useSlate"]];
});

_c4 = FormatButton;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'This example shows how you can make a hovering menu appear above your content, which you can use to make text '
  }, {
    text: 'bold',
    bold: true
  }, {
    text: ', '
  }, {
    text: 'italic',
    italic: true
  }, {
    text: ', or anything else you might want to do!'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Try it out yourself! Just '
  }, {
    text: 'select any piece of text and the menu will appear',
    bold: true
  }, {
    text: '.'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (HoveringMenuExample);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "HoveringMenuExample");
$RefreshReg$(_c2, "Leaf");
$RefreshReg$(_c3, "HoveringToolbar");
$RefreshReg$(_c4, "FormatButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/huge-document.tsx":
/*!************************************!*\
  !*** ./examples/huge-document.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "../.yarn/cache/faker-npm-4.1.0-7e1972c7c9-01cf5adb15.zip/node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");


var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\huge-document.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var HEADINGS = 100;
var PARAGRAPHS = 7;
var initialValue = [];

for (var h = 0; h < HEADINGS; h++) {
  initialValue.push({
    type: 'heading',
    children: [{
      text: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
    }]
  });

  for (var p = 0; p < PARAGRAPHS; p++) {
    initialValue.push({
      type: 'paragraph',
      children: [{
        text: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph()
      }]
    });
  }
}

var HugeDocumentExample = function HugeDocumentExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var renderElement = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (props) {
    return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 46
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_3__["createEditor"])());
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    renderElement: renderElement,
    spellCheck: true,
    autoFocus: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }));
};

_s(HugeDocumentExample, "9HkvqXgepfcc58pVdFmOn6blq7U=");

_c = HugeDocumentExample;

var Element = function Element(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;

  switch (element.type) {
    case 'heading':
      return __jsx("h1", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 14
        }
      }), children);

    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 14
        }
      }), children);
  }
};

_c2 = Element;
/* harmony default export */ __webpack_exports__["default"] = (HugeDocumentExample);

var _c, _c2;

$RefreshReg$(_c, "HugeDocumentExample");
$RefreshReg$(_c2, "Element");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/iframe.tsx":
/*!*****************************!*\
  !*** ./examples/iframe.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "../.yarn/__virtual__/react-dom-virtual-42ecc65227/0/cache/react-dom-npm-16.14.0-516a97ad33-5a5c49da0f.zip/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! is-hotkey */ "../.yarn/cache/is-hotkey-npm-0.1.8-735647ba68-793d0cccaf.zip/node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./components.tsx");



var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\iframe.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code'
};

var IFrameExample = function IFrameExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var renderElement = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (_ref) {
    var attributes = _ref.attributes,
        children = _ref.children;
    return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 35
      }
    }), children);
  }, []);
  var renderLeaf = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (props) {
    return __jsx(Leaf, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 43
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_7__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_5__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_6__["createEditor"])()));
  }, []);
  var handleBlur = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return slate_react__WEBPACK_IMPORTED_MODULE_5__["ReactEditor"].deselect(editor);
  }, [editor]);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_5__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(MarkButton, {
    format: "bold",
    icon: "format_bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(MarkButton, {
    format: "italic",
    icon: "format_italic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx(MarkButton, {
    format: "underline",
    icon: "format_underlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(MarkButton, {
    format: "code",
    icon: "code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(IFrame, {
    onBlur: handleBlur,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_5__["Editable"], {
    renderElement: renderElement,
    renderLeaf: renderLeaf,
    placeholder: "Enter some rich text\u2026",
    spellCheck: true,
    autoFocus: true,
    onKeyDown: function onKeyDown(event) {
      for (var hotkey in HOTKEYS) {
        if (is_hotkey__WEBPACK_IMPORTED_MODULE_4___default()(hotkey, event)) {
          event.preventDefault();
          var mark = HOTKEYS[hotkey];
          toggleMark(editor, mark);
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
};

_s(IFrameExample, "NrwpwIMUGRAR6OGBwAPzXXCqCAA=");

_c = IFrameExample;

var toggleMark = function toggleMark(editor, format) {
  var isActive = isMarkActive(editor, format);

  if (isActive) {
    slate__WEBPACK_IMPORTED_MODULE_6__["Editor"].removeMark(editor, format);
  } else {
    slate__WEBPACK_IMPORTED_MODULE_6__["Editor"].addMark(editor, format, true);
  }
};

var isMarkActive = function isMarkActive(editor, format) {
  var marks = slate__WEBPACK_IMPORTED_MODULE_6__["Editor"].marks(editor);
  return marks ? marks[format] === true : false;
};

var Leaf = function Leaf(_ref2) {
  var attributes = _ref2.attributes,
      children = _ref2.children,
      leaf = _ref2.leaf;

  if (leaf.bold) {
    children = __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.code) {
    children = __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.italic) {
    children = __jsx("em", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.underline) {
    children = __jsx("u", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 16
      }
    }, children);
  }

  return __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 10
    }
  }), children);
};

_c2 = Leaf;

var MarkButton = function MarkButton(_ref3) {
  _s2();

  var format = _ref3.format,
      icon = _ref3.icon;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_5__["useSlate"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    active: isMarkActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleMark(editor, format);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, icon));
};

_s2(MarkButton, "YMFVEh3YGumTkrWAgpqmxHJ20Oc=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_5__["useSlate"]];
});

_c3 = MarkButton;

var IFrame = function IFrame(_ref4) {
  _s3();

  var children = _ref4.children,
      props = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, ["children"]);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      iframeBody = _useState2[0],
      setIframeBody = _useState2[1];

  var handleLoad = function handleLoad(e) {
    setIframeBody(e.target.contentDocument.body);
  };

  return __jsx("iframe", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    srcDoc: "<!DOCTYPE html>"
  }, props, {
    onLoad: handleLoad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }), iframeBody && /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(children, iframeBody));
};

_s3(IFrame, "L5yn77kFApNubnB9O2cMLoj9o9c=");

_c4 = IFrame;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'In this example, the document gets rendered into a controlled '
  }, {
    text: '<iframe>',
    code: true
  }, {
    text: '. This is '
  }, {
    text: 'particularly',
    italic: true
  }, {
    text: ' useful, when you need to separate the styles for your editor contents from the ones addressing your UI.'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'This also the only reliable method to preview any '
  }, {
    text: 'media queries',
    bold: true
  }, {
    text: ' in your CSS.'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (IFrameExample);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "IFrameExample");
$RefreshReg$(_c2, "Leaf");
$RefreshReg$(_c3, "MarkButton");
$RefreshReg$(_c4, "IFrame");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/images.tsx":
/*!*****************************!*\
  !*** ./examples/images.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var image_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! image-extensions */ "../.yarn/cache/image-extensions-npm-1.1.0-1a51760fc0-e69d438523.zip/node_modules/image-extensions/image-extensions.json");
var image_extensions__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! image-extensions */ "../.yarn/cache/image-extensions-npm-1.1.0-1a51760fc0-e69d438523.zip/node_modules/image-extensions/image-extensions.json", 1);
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-url */ "../.yarn/cache/is-url-npm-1.2.4-0a28aeb560-100e74b3b1.zip/node_modules/is-url/index.js");
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/css */ "../.yarn/__virtual__/@emotion-css-virtual-d83d1c33bf/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components */ "./components.tsx");




var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\images.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject3() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            display: ", ";\n            position: absolute;\n            top: 0.5em;\n            left: 0.5em;\n            background-color: white;\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            display: block;\n            max-width: 100%;\n            max-height: 20em;\n            box-shadow: ", ";\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          position: relative;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var ImagesExample = function ImagesExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return withImages(Object(slate_history__WEBPACK_IMPORTED_MODULE_8__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_6__["createEditor"])())));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_7__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(InsertImageButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(slate_react__WEBPACK_IMPORTED_MODULE_7__["Editable"], {
    renderElement: function renderElement(props) {
      return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 33
        }
      }));
    },
    placeholder: "Enter some text...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

_s(ImagesExample, "4ewp4wBHt4y6QUDh2ipfoCLaKxY=");

_c = ImagesExample;

var withImages = function withImages(editor) {
  var insertData = editor.insertData,
      isVoid = editor.isVoid;

  editor.isVoid = function (element) {
    return element.type === 'image' ? true : isVoid(element);
  };

  editor.insertData = function (data) {
    var text = data.getData('text/plain');
    var files = data.files;

    if (files && files.length > 0) {
      var _iterator = _createForOfIteratorHelper(files),
          _step;

      try {
        var _loop = function _loop() {
          var file = _step.value;
          var reader = new FileReader();

          var _file$type$split = file.type.split('/'),
              _file$type$split2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_file$type$split, 1),
              mime = _file$type$split2[0];

          if (mime === 'image') {
            reader.addEventListener('load', function () {
              var url = reader.result;
              insertImage(editor, url);
            });
            reader.readAsDataURL(file);
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

var insertImage = function insertImage(editor, url) {
  var text = {
    text: ''
  };
  var image = {
    type: 'image',
    url: url,
    children: [text]
  };
  slate__WEBPACK_IMPORTED_MODULE_6__["Transforms"].insertNodes(editor, image);
};

var Element = function Element(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;

  switch (element.type) {
    case 'image':
      return __jsx(Image, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 14
        }
      }));

    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 14
        }
      }), children);
  }
};

_c2 = Element;

var Image = function Image(_ref) {
  _s2();

  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["useSlateStatic"])();
  var path = slate_react__WEBPACK_IMPORTED_MODULE_7__["ReactEditor"].findPath(editor, element);
  var selected = Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["useSelected"])();
  var focused = Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["useFocused"])();
  return __jsx("div", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, attributes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }), children, __jsx("div", {
    contentEditable: false,
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: element.url,
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject2(), selected && focused ? '0 0 0 3px #B4D5FF' : 'none'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    active: true,
    onClick: function onClick() {
      return slate__WEBPACK_IMPORTED_MODULE_6__["Transforms"].removeNodes(editor, {
        at: path
      });
    },
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject3(), selected && focused ? 'inline' : 'none'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, "delete"))));
};

_s2(Image, "ztHevWvAaOn2yIyj2MiNQvWDTvo=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_7__["useSlateStatic"], slate_react__WEBPACK_IMPORTED_MODULE_7__["useSelected"], slate_react__WEBPACK_IMPORTED_MODULE_7__["useFocused"]];
});

_c3 = Image;

var InsertImageButton = function InsertImageButton() {
  _s3();

  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["useSlateStatic"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      var url = window.prompt('Enter the URL of the image:');

      if (url && !isImageUrl(url)) {
        alert('URL is not an image');
        return;
      }

      insertImage(editor, url);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, "image"));
};

_s3(InsertImageButton, "WYoDIuUdAaGffyWcFDq4gCgXxVo=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_7__["useSlateStatic"]];
});

_c4 = InsertImageButton;

var isImageUrl = function isImageUrl(url) {
  if (!url) return false;
  if (!is_url__WEBPACK_IMPORTED_MODULE_5___default()(url)) return false;
  var ext = new URL(url).pathname.split('.').pop();
  return image_extensions__WEBPACK_IMPORTED_MODULE_4__.includes(ext);
};

var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.'
  }]
}, {
  type: 'image',
  url: 'https://source.unsplash.com/kFrdX5IeQzI',
  children: [{
    text: ''
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your clipboard and paste it anywhere in the editor!'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'You can delete images with the cross in the top left. Try deleting this sheep:'
  }]
}, {
  type: 'image',
  url: 'https://source.unsplash.com/zOwZKwZOZq8',
  children: [{
    text: ''
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (ImagesExample);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ImagesExample");
$RefreshReg$(_c2, "Element");
$RefreshReg$(_c3, "Image");
$RefreshReg$(_c4, "InsertImageButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/inlines.tsx":
/*!******************************!*\
  !*** ./examples/inlines.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! is-url */ "../.yarn/cache/is-url-npm-1.2.4-0a28aeb560-100e74b3b1.zip/node_modules/is-url/index.js");
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(is_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-hotkey */ "../.yarn/cache/is-hotkey-npm-0.1.8-735647ba68-793d0cccaf.zip/node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "../.yarn/__virtual__/@emotion-css-virtual-d83d1c33bf/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components */ "./components.tsx");




var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\inlines.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject4() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n              padding-left: 0.1px;\n            "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        margin: 0 0.1em;\n\n        background-color: #efefef;\n        padding: 2px 6px;\n        border: 1px solid #767676;\n        border-radius: 2px;\n        font-size: 0.9em;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n              box-shadow: 0 0 0 3px #ddd;\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      font-size: 0;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'In addition to block nodes, you can create inline nodes. Here is a '
  }, {
    type: 'link',
    url: 'https://en.wikipedia.org/wiki/Hypertext',
    children: [{
      text: 'hyperlink'
    }]
  }, {
    text: ', and here is a more unusual inline: an '
  }, {
    type: 'button',
    children: [{
      text: 'editable button'
    }]
  }, {
    text: '!'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'There are two ways to add links. You can either add a link via the toolbar icon above, or if you want in on a little secret, copy a URL to your keyboard and paste it while a range of text is selected. '
  }, // The following is an example of an inline at the end of a block.
  // This is an edge case that can cause issues.
  {
    type: 'link',
    url: 'https://twitter.com/JustMissEmma/status/1448679899531726852',
    children: [{
      text: 'Finally, here is our favorite dog video.'
    }]
  }, {
    text: ''
  }]
}];

var InlinesExample = function InlinesExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return withInlines(Object(slate_history__WEBPACK_IMPORTED_MODULE_9__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_8__["createEditor"])())));
  }, []);

  var onKeyDown = function onKeyDown(event) {
    var selection = editor.selection; // Default left/right behavior is unit:'character'.
    // This fails to distinguish between two cursor positions, such as
    // <inline>foo<cursor/></inline> vs <inline>foo</inline><cursor/>.
    // Here we modify the behavior to unit:'offset'.
    // This lets the user step into and out of the inline without stepping over characters.
    // You may wish to customize this further to only use unit:'offset' in specific cases.

    if (selection && slate__WEBPACK_IMPORTED_MODULE_8__["Range"].isCollapsed(selection)) {
      var nativeEvent = event.nativeEvent;

      if (Object(is_hotkey__WEBPACK_IMPORTED_MODULE_5__["isKeyHotkey"])('left', nativeEvent)) {
        event.preventDefault();
        slate__WEBPACK_IMPORTED_MODULE_8__["Transforms"].move(editor, {
          unit: 'offset',
          reverse: true
        });
        return;
      }

      if (Object(is_hotkey__WEBPACK_IMPORTED_MODULE_5__["isKeyHotkey"])('right', nativeEvent)) {
        event.preventDefault();
        slate__WEBPACK_IMPORTED_MODULE_8__["Transforms"].move(editor, {
          unit: 'offset'
        });
        return;
      }
    }
  };

  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_7__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(AddLinkButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx(RemoveLinkButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }), __jsx(ToggleEditableButtonButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  })), __jsx(slate_react__WEBPACK_IMPORTED_MODULE_7__["Editable"], {
    renderElement: function renderElement(props) {
      return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 33
        }
      }));
    },
    renderLeaf: function renderLeaf(props) {
      return __jsx(Text, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 30
        }
      }));
    },
    placeholder: "Enter some text...",
    onKeyDown: onKeyDown,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }));
};

_s(InlinesExample, "4ewp4wBHt4y6QUDh2ipfoCLaKxY=");

_c = InlinesExample;

var withInlines = function withInlines(editor) {
  var insertData = editor.insertData,
      insertText = editor.insertText,
      isInline = editor.isInline;

  editor.isInline = function (element) {
    return ['link', 'button'].includes(element.type) || isInline(element);
  };

  editor.insertText = function (text) {
    if (text && is_url__WEBPACK_IMPORTED_MODULE_4___default()(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = function (data) {
    var text = data.getData('text/plain');

    if (text && is_url__WEBPACK_IMPORTED_MODULE_4___default()(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

var insertLink = function insertLink(editor, url) {
  if (editor.selection) {
    wrapLink(editor, url);
  }
};

var insertButton = function insertButton(editor) {
  if (editor.selection) {
    wrapButton(editor);
  }
};

var isLinkActive = function isLinkActive(editor) {
  var _Editor$nodes = slate__WEBPACK_IMPORTED_MODULE_8__["Editor"].nodes(editor, {
    match: function match(n) {
      return !slate__WEBPACK_IMPORTED_MODULE_8__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_8__["Element"].isElement(n) && n.type === 'link';
    }
  }),
      _Editor$nodes2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Editor$nodes, 1),
      link = _Editor$nodes2[0];

  return !!link;
};

var isButtonActive = function isButtonActive(editor) {
  var _Editor$nodes3 = slate__WEBPACK_IMPORTED_MODULE_8__["Editor"].nodes(editor, {
    match: function match(n) {
      return !slate__WEBPACK_IMPORTED_MODULE_8__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_8__["Element"].isElement(n) && n.type === 'button';
    }
  }),
      _Editor$nodes4 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Editor$nodes3, 1),
      button = _Editor$nodes4[0];

  return !!button;
};

var unwrapLink = function unwrapLink(editor) {
  slate__WEBPACK_IMPORTED_MODULE_8__["Transforms"].unwrapNodes(editor, {
    match: function match(n) {
      return !slate__WEBPACK_IMPORTED_MODULE_8__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_8__["Element"].isElement(n) && n.type === 'link';
    }
  });
};

var unwrapButton = function unwrapButton(editor) {
  slate__WEBPACK_IMPORTED_MODULE_8__["Transforms"].unwrapNodes(editor, {
    match: function match(n) {
      return !slate__WEBPACK_IMPORTED_MODULE_8__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_8__["Element"].isElement(n) && n.type === 'button';
    }
  });
};

var wrapLink = function wrapLink(editor, url) {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  var selection = editor.selection;
  var isCollapsed = selection && slate__WEBPACK_IMPORTED_MODULE_8__["Range"].isCollapsed(selection);
  var link = {
    type: 'link',
    url: url,
    children: isCollapsed ? [{
      text: url
    }] : []
  };

  if (isCollapsed) {
    slate__WEBPACK_IMPORTED_MODULE_8__["Transforms"].insertNodes(editor, link);
  } else {
    slate__WEBPACK_IMPORTED_MODULE_8__["Transforms"].wrapNodes(editor, link, {
      split: true
    });
    slate__WEBPACK_IMPORTED_MODULE_8__["Transforms"].collapse(editor, {
      edge: 'end'
    });
  }
};

var wrapButton = function wrapButton(editor) {
  if (isButtonActive(editor)) {
    unwrapButton(editor);
  }

  var selection = editor.selection;
  var isCollapsed = selection && slate__WEBPACK_IMPORTED_MODULE_8__["Range"].isCollapsed(selection);
  var button = {
    type: 'button',
    children: isCollapsed ? [{
      text: 'Edit me!'
    }] : []
  };

  if (isCollapsed) {
    slate__WEBPACK_IMPORTED_MODULE_8__["Transforms"].insertNodes(editor, button);
  } else {
    slate__WEBPACK_IMPORTED_MODULE_8__["Transforms"].wrapNodes(editor, button, {
      split: true
    });
    slate__WEBPACK_IMPORTED_MODULE_8__["Transforms"].collapse(editor, {
      edge: 'end'
    });
  }
}; // Put this at the start and end of an inline component to work around this Chromium bug:
// https://bugs.chromium.org/p/chromium/issues/detail?id=1249405


var InlineChromiumBugfix = function InlineChromiumBugfix() {
  return __jsx("span", {
    contentEditable: false,
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 3
    }
  }, "$", String.fromCodePoint(160)
  /* Non-breaking space */
  );
};

_c2 = InlineChromiumBugfix;

var LinkComponent = function LinkComponent(_ref) {
  _s2();

  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;
  var selected = Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["useSelected"])();
  return __jsx("a", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, attributes, {
    href: element.url,
    className: selected ? Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject2()) : '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 5
    }
  }), __jsx(InlineChromiumBugfix, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }
  }), children, __jsx(InlineChromiumBugfix, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 7
    }
  }));
};

_s2(LinkComponent, "0CE7zGEDmoUVvzVIHqbZiGzZMZk=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_7__["useSelected"]];
});

_c3 = LinkComponent;

var EditableButtonComponent = function EditableButtonComponent(_ref2) {
  var attributes = _ref2.attributes,
      children = _ref2.children;
  return (
    /*
      Note that this is not a true button, but a span with button-like CSS.
      True buttons are display:inline-block, but Chrome and Safari
      have a bad bug with display:inline-block inside contenteditable:
      - https://bugs.webkit.org/show_bug.cgi?id=105898
      - https://bugs.chromium.org/p/chromium/issues/detail?id=1088403
      Worse, one cannot override the display property: https://github.com/w3c/csswg-drafts/issues/3226
      The only current workaround is to emulate the appearance of a display:inline button using CSS.
    */
    __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, attributes, {
      onClick: function onClick(ev) {
        return ev.preventDefault();
      } // Margin is necessary to clearly show the cursor adjacent to the button
      ,
      className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject3()),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 5
      }
    }), __jsx(InlineChromiumBugfix, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 7
      }
    }), children, __jsx(InlineChromiumBugfix, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 7
      }
    }))
  );
};

_c4 = EditableButtonComponent;

var Element = function Element(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;

  switch (element.type) {
    case 'link':
      return __jsx(LinkComponent, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 14
        }
      }));

    case 'button':
      return __jsx(EditableButtonComponent, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 14
        }
      }));

    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 14
        }
      }), children);
  }
};

_c5 = Element;

var Text = function Text(props) {
  var attributes = props.attributes,
      children = props.children,
      leaf = props.leaf;
  return __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    // The following is a workaround for a Chromium bug where,
    // if you have an inline at the end of a block,
    // clicking the end of a block puts the cursor inside the inline
    // instead of inside the final {text: ''} node
    // https://github.com/ianstormtaylor/slate/issues/4704#issuecomment-1006696364
    className: leaf.text === '' ? Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject4()) : null
  }, attributes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 5
    }
  }), children);
};

_c6 = Text;

var AddLinkButton = function AddLinkButton() {
  _s3();

  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["useSlate"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    active: isLinkActive(editor),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      var url = window.prompt('Enter the URL of the link:');
      if (!url) return;
      insertLink(editor, url);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 7
    }
  }, "link"));
};

_s3(AddLinkButton, "YMFVEh3YGumTkrWAgpqmxHJ20Oc=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_7__["useSlate"]];
});

_c7 = AddLinkButton;

var RemoveLinkButton = function RemoveLinkButton() {
  _s4();

  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["useSlate"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    active: isLinkActive(editor),
    onMouseDown: function onMouseDown(event) {
      if (isLinkActive(editor)) {
        unwrapLink(editor);
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 7
    }
  }, "link_off"));
};

_s4(RemoveLinkButton, "YMFVEh3YGumTkrWAgpqmxHJ20Oc=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_7__["useSlate"]];
});

_c8 = RemoveLinkButton;

var ToggleEditableButtonButton = function ToggleEditableButtonButton() {
  _s5();

  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["useSlate"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    active: true,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();

      if (isButtonActive(editor)) {
        unwrapButton(editor);
      } else {
        insertButton(editor);
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 7
    }
  }, "smart_button"));
};

_s5(ToggleEditableButtonButton, "YMFVEh3YGumTkrWAgpqmxHJ20Oc=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_7__["useSlate"]];
});

_c9 = ToggleEditableButtonButton;
/* harmony default export */ __webpack_exports__["default"] = (InlinesExample);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "InlinesExample");
$RefreshReg$(_c2, "InlineChromiumBugfix");
$RefreshReg$(_c3, "LinkComponent");
$RefreshReg$(_c4, "EditableButtonComponent");
$RefreshReg$(_c5, "Element");
$RefreshReg$(_c6, "Text");
$RefreshReg$(_c7, "AddLinkButton");
$RefreshReg$(_c8, "RemoveLinkButton");
$RefreshReg$(_c9, "ToggleEditableButtonButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/markdown-preview.tsx":
/*!***************************************!*\
  !*** ./examples/markdown-preview.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs */ "../.yarn/cache/prismjs-npm-1.24.1-091db90251-e5d14a4ba5.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/css */ "../.yarn/__virtual__/@emotion-css-virtual-d83d1c33bf/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");





var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\markdown-preview.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _templateObject6() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            font-family: monospace;\n            background-color: #eee;\n            padding: 3px;\n          "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            display: inline-block;\n            border-left: 2px solid #ddd;\n            padding-left: 10px;\n            color: #aaa;\n            font-style: italic;\n          "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            display: block;\n            text-align: center;\n            border-bottom: 2px solid #ddd;\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            padding-left: 10px;\n            font-size: 20px;\n            line-height: 10px;\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            display: inline-block;\n            font-weight: bold;\n            font-size: 20px;\n            margin: 20px 0 10px 0;\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        font-weight: ", ";\n        font-style: ", ";\n        text-decoration: ", ";\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.extend("markup", {}), prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.insertBefore("markdown", "prolog", {
  blockquote: {
    pattern: /^>(?:[\t ]*>)*/m,
    alias: "punctuation"
  },
  code: [{
    pattern: /^(?: {4}|\t).+/m,
    alias: "keyword"
  }, {
    pattern: /``.+?``|`[^`\n]+`/,
    alias: "keyword"
  }],
  title: [{
    pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
    alias: "important",
    inside: {
      punctuation: /==+$|--+$/
    }
  }, {
    pattern: /(^\s*)#+.+/m,
    lookbehind: !0,
    alias: "important",
    inside: {
      punctuation: /^#+|#+$/
    }
  }],
  hr: {
    pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
    lookbehind: !0,
    alias: "punctuation"
  },
  list: {
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
    lookbehind: !0,
    alias: "punctuation"
  },
  "url-reference": {
    pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: {
        pattern: /^(!?\[)[^\]]+/,
        lookbehind: !0
      },
      string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[\[\]!:]|[<>]/
    },
    alias: "url"
  },
  bold: {
    pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: {
      punctuation: /^\*\*|^__|\*\*$|__$/
    }
  },
  italic: {
    pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: {
      punctuation: /^[*_]|[*_]$/
    }
  },
  url: {
    pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
    inside: {
      variable: {
        pattern: /(!?\[)[^\]]+(?=\]$)/,
        lookbehind: !0
      },
      string: {
        pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
      }
    }
  }
}), prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.bold.inside.url = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.url), prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.italic.inside.url = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.url), prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.bold.inside.italic = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.italic), prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.italic.inside.bold = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown.bold); // prettier-ignore

var MarkdownPreviewExample = function MarkdownPreviewExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var renderLeaf = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (props) {
    return __jsx(Leaf, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 43
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_8__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_6__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_7__["createEditor"])()));
  }, []);
  var decorate = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_ref) {
    var _ref2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
        node = _ref2[0],
        path = _ref2[1];

    var ranges = [];

    if (!slate__WEBPACK_IMPORTED_MODULE_7__["Text"].isText(node)) {
      return ranges;
    }

    var getLength = function getLength(token) {
      if (typeof token === 'string') {
        return token.length;
      } else if (typeof token.content === 'string') {
        return token.content.length;
      } else {
        return token.content.reduce(function (l, t) {
          return l + getLength(t);
        }, 0);
      }
    };

    var tokens = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.tokenize(node.text, prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown);
    var start = 0;

    var _iterator = _createForOfIteratorHelper(tokens),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var token = _step.value;
        var length = getLength(token);
        var end = start + length;

        if (typeof token !== 'string') {
          var _ranges$push;

          ranges.push((_ranges$push = {}, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ranges$push, token.type, true), Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ranges$push, "anchor", {
            path: path,
            offset: start
          }), Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ranges$push, "focus", {
            path: path,
            offset: end
          }), _ranges$push));
        }

        start = end;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return ranges;
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_6__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_6__["Editable"], {
    decorate: decorate,
    renderLeaf: renderLeaf,
    placeholder: "Write some markdown...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }));
};

_s(MarkdownPreviewExample, "gnGS35FPQz5Y3Cjo9BTjpOzwGpM=");

_c = MarkdownPreviewExample;

var Leaf = function Leaf(_ref3) {
  var attributes = _ref3.attributes,
      children = _ref3.children,
      leaf = _ref3.leaf;
  return __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, attributes, {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject(), leaf.bold && 'bold', leaf.italic && 'italic', leaf.underlined && 'underline', leaf.title && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject2()), leaf.list && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject3()), leaf.hr && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject4()), leaf.blockquote && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject5()), leaf.code && Object(_emotion_css__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject6())),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }), children);
};

_c2 = Leaf;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'Slate is flexible enough to add **decorations** that can format text based on its content. For example, this editor has **Markdown** preview decorations on it, to make it _dead_ simple to make an editor with built-in Markdown previewing.'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: '## Try it out!'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Try it out for yourself!'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (MarkdownPreviewExample);

var _c, _c2;

$RefreshReg$(_c, "MarkdownPreviewExample");
$RefreshReg$(_c2, "Leaf");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/markdown-shortcuts.tsx":
/*!*****************************************!*\
  !*** ./examples/markdown-shortcuts.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");



var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\markdown-shortcuts.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var SHORTCUTS = {
  '*': 'list-item',
  '-': 'list-item',
  '+': 'list-item',
  '>': 'block-quote',
  '#': 'heading-one',
  '##': 'heading-two',
  '###': 'heading-three',
  '####': 'heading-four',
  '#####': 'heading-five',
  '######': 'heading-six'
};

var MarkdownShortcutsExample = function MarkdownShortcutsExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var renderElement = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (props) {
    return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 46
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return withShortcuts(Object(slate_react__WEBPACK_IMPORTED_MODULE_3__["withReact"])(Object(slate_history__WEBPACK_IMPORTED_MODULE_5__["withHistory"])(Object(slate__WEBPACK_IMPORTED_MODULE_4__["createEditor"])())));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_3__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_3__["Editable"], {
    renderElement: renderElement,
    placeholder: "Write some markdown...",
    spellCheck: true,
    autoFocus: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
};

_s(MarkdownShortcutsExample, "9HkvqXgepfcc58pVdFmOn6blq7U=");

_c = MarkdownShortcutsExample;

var withShortcuts = function withShortcuts(editor) {
  var deleteBackward = editor.deleteBackward,
      insertText = editor.insertText;

  editor.insertText = function (text) {
    var selection = editor.selection;

    if (text === ' ' && selection && slate__WEBPACK_IMPORTED_MODULE_4__["Range"].isCollapsed(selection)) {
      var anchor = selection.anchor;
      var block = slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].above(editor, {
        match: function match(n) {
          return slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].isBlock(editor, n);
        }
      });
      var path = block ? block[1] : [];
      var start = slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].start(editor, path);
      var range = {
        anchor: anchor,
        focus: start
      };
      var beforeText = slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].string(editor, range);
      var type = SHORTCUTS[beforeText];

      if (type) {
        slate__WEBPACK_IMPORTED_MODULE_4__["Transforms"].select(editor, range);
        slate__WEBPACK_IMPORTED_MODULE_4__["Transforms"]["delete"](editor);
        var newProperties = {
          type: type
        };
        slate__WEBPACK_IMPORTED_MODULE_4__["Transforms"].setNodes(editor, newProperties, {
          match: function match(n) {
            return slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].isBlock(editor, n);
          }
        });

        if (type === 'list-item') {
          var list = {
            type: 'bulleted-list',
            children: []
          };
          slate__WEBPACK_IMPORTED_MODULE_4__["Transforms"].wrapNodes(editor, list, {
            match: function match(n) {
              return !slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_4__["Element"].isElement(n) && n.type === 'list-item';
            }
          });
        }

        return;
      }
    }

    insertText(text);
  };

  editor.deleteBackward = function () {
    var selection = editor.selection;

    if (selection && slate__WEBPACK_IMPORTED_MODULE_4__["Range"].isCollapsed(selection)) {
      var match = slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].above(editor, {
        match: function match(n) {
          return slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].isBlock(editor, n);
        }
      });

      if (match) {
        var _match = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(match, 2),
            block = _match[0],
            path = _match[1];

        var start = slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].start(editor, path);

        if (!slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].isEditor(block) && slate__WEBPACK_IMPORTED_MODULE_4__["Element"].isElement(block) && block.type !== 'paragraph' && slate__WEBPACK_IMPORTED_MODULE_4__["Point"].equals(selection.anchor, start)) {
          var newProperties = {
            type: 'paragraph'
          };
          slate__WEBPACK_IMPORTED_MODULE_4__["Transforms"].setNodes(editor, newProperties);

          if (block.type === 'list-item') {
            slate__WEBPACK_IMPORTED_MODULE_4__["Transforms"].unwrapNodes(editor, {
              match: function match(n) {
                return !slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_4__["Element"].isElement(n) && n.type === 'bulleted-list';
              },
              split: true
            });
          }

          return;
        }
      }

      deleteBackward.apply(void 0, arguments);
    }
  };

  return editor;
};

var Element = function Element(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;

  switch (element.type) {
    case 'block-quote':
      return __jsx("blockquote", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 14
        }
      }), children);

    case 'bulleted-list':
      return __jsx("ul", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 14
        }
      }), children);

    case 'heading-one':
      return __jsx("h1", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 14
        }
      }), children);

    case 'heading-two':
      return __jsx("h2", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 14
        }
      }), children);

    case 'heading-three':
      return __jsx("h3", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 14
        }
      }), children);

    case 'heading-four':
      return __jsx("h4", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 14
        }
      }), children);

    case 'heading-five':
      return __jsx("h5", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 14
        }
      }), children);

    case 'heading-six':
      return __jsx("h6", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 14
        }
      }), children);

    case 'list-item':
      return __jsx("li", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 14
        }
      }), children);

    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 14
        }
      }), children);
  }
};

_c2 = Element;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'The editor gives you full control over the logic you can add. For example, it\'s fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with "> " you get a blockquote that looks like this:'
  }]
}, {
  type: 'block-quote',
  children: [{
    text: 'A wise quote.'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Order when you start a line with "## " you get a level-two heading, like this:'
  }]
}, {
  type: 'heading-two',
  children: [{
    text: 'Try it out!'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Try it out for yourself! Try starting a new line with ">", "-", or "#"s.'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (MarkdownShortcutsExample);

var _c, _c2;

$RefreshReg$(_c, "MarkdownShortcutsExample");
$RefreshReg$(_c2, "Element");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/mentions.tsx":
/*!*******************************!*\
  !*** ./examples/mentions.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ "./components.tsx");



var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\mentions.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var MentionExample = function MentionExample() {
  _s();

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      target = _useState2[0],
      setTarget = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      index = _useState3[0],
      setIndex = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      search = _useState4[0],
      setSearch = _useState4[1];

  var renderElement = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (props) {
    return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 46
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return withMentions(Object(slate_react__WEBPACK_IMPORTED_MODULE_5__["withReact"])(Object(slate_history__WEBPACK_IMPORTED_MODULE_4__["withHistory"])(Object(slate__WEBPACK_IMPORTED_MODULE_3__["createEditor"])())));
  }, []);
  var chars = CHARACTERS.filter(function (c) {
    return c.toLowerCase().startsWith(search.toLowerCase());
  }).slice(0, 10);
  var onKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    if (target) {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          var prevIndex = index >= chars.length - 1 ? 0 : index + 1;
          setIndex(prevIndex);
          break;

        case 'ArrowUp':
          event.preventDefault();
          var nextIndex = index <= 0 ? chars.length - 1 : index - 1;
          setIndex(nextIndex);
          break;

        case 'Tab':
        case 'Enter':
          event.preventDefault();
          slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].select(editor, target);
          insertMention(editor, chars[index]);
          setTarget(null);
          break;

        case 'Escape':
          event.preventDefault();
          setTarget(null);
          break;
      }
    }
  }, [index, search, target]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (target && chars.length > 0) {
      var el = ref.current;
      var domRange = slate_react__WEBPACK_IMPORTED_MODULE_5__["ReactEditor"].toDOMRange(editor, target);
      var rect = domRange.getBoundingClientRect();
      el.style.top = "".concat(rect.top + window.pageYOffset + 24, "px");
      el.style.left = "".concat(rect.left + window.pageXOffset, "px");
    }
  }, [chars.length, editor, index, search, target]);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_5__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      console.log(JSON.stringify(value));
      setValue(value);
      var selection = editor.selection;

      if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isCollapsed(selection)) {
        var _Range$edges = slate__WEBPACK_IMPORTED_MODULE_3__["Range"].edges(selection),
            _Range$edges2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Range$edges, 1),
            start = _Range$edges2[0];

        var wordBefore = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].before(editor, start, {
          unit: 'word'
        });
        var before = wordBefore && slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].before(editor, wordBefore);
        var beforeRange = before && slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].range(editor, before, start);
        var beforeText = beforeRange && slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].string(editor, beforeRange);
        var beforeMatch = beforeText && beforeText.match(/^@(\S+)$/);
        var after = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].after(editor, start);
        var afterRange = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].range(editor, start, after);
        var afterText = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].string(editor, afterRange);
        var afterMatch = afterText.match(/^(\s|$)/);

        if (beforeMatch && afterMatch) {
          setTarget(beforeRange);
          setSearch(beforeMatch[1]);
          setIndex(0);
          return "";
        }
      }

      setTarget(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_5__["Editable"], {
    renderElement: renderElement,
    onKeyDown: onKeyDown,
    placeholder: "Enter some text...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }), target && chars.length > 0 && __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["Portal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: ref,
    style: {
      top: '-9999px',
      left: '-9999px',
      position: 'absolute',
      zIndex: 1,
      padding: '3px',
      background: 'white',
      borderRadius: '4px',
      boxShadow: '0 1px 5px rgba(0,0,0,.2)'
    },
    "data-cy": "mentions-portal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, chars.map(function (_char, i) {
    return __jsx("div", {
      key: _char,
      style: {
        padding: '1px 3px',
        borderRadius: '3px',
        background: i === index ? '#B4D5FF' : 'transparent'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 15
      }
    }, _char);
  }))));
};

_s(MentionExample, "53xG2u6BdBwW8fhTxRscytVNS0I=");

_c = MentionExample;

var withMentions = function withMentions(editor) {
  var isInline = editor.isInline,
      isVoid = editor.isVoid;

  editor.isInline = function (element) {
    return element.type === 'mention' ? true : isInline(element);
  };

  editor.isVoid = function (element) {
    return element.type === 'mention' ? true : isVoid(element);
  };

  return editor;
};

var insertMention = function insertMention(editor, character) {
  var mention = {
    type: 'mention',
    character: character,
    children: [{
      text: ''
    }]
  };
  slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].insertNodes(editor, mention);
  slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].move(editor);
};

var Element = function Element(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;

  switch (element.type) {
    case 'mention':
      return __jsx(Mention, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 14
        }
      }));

    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 14
        }
      }), children);
  }
};

_c2 = Element;

var Mention = function Mention(_ref) {
  _s2();

  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;
  var selected = Object(slate_react__WEBPACK_IMPORTED_MODULE_5__["useSelected"])();
  var focused = Object(slate_react__WEBPACK_IMPORTED_MODULE_5__["useFocused"])();
  return __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
    contentEditable: false,
    "data-cy": "mention-".concat(element.character.replace(' ', '-')),
    style: {
      padding: '3px 3px 2px',
      margin: '0 1px',
      verticalAlign: 'baseline',
      display: 'inline-block',
      borderRadius: '4px',
      backgroundColor: '#eee',
      fontSize: '0.9em',
      boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }), "@", element.character, children);
};

_s2(Mention, "HuPpo5U0EHtf6bNXFVpc3GQNhHc=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_5__["useSelected"], slate_react__WEBPACK_IMPORTED_MODULE_5__["useFocused"]];
});

_c3 = Mention;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'This example shows how you might implement a simple @-mentions feature that lets users autocomplete mentioning a user by their username. Which, in this case means Star Wars characters. The mentions are rendered as void inline elements inside the document.'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Try mentioning characters, like '
  }, {
    type: 'mention',
    character: 'R2-D2',
    children: [{
      text: ''
    }]
  }, {
    text: ' or '
  }, {
    type: 'mention',
    character: 'Mace Windu',
    children: [{
      text: ''
    }]
  }, {
    text: '!'
  }]
}];
var CHARACTERS = ['Aayla Secura', 'Adi Gallia', 'Admiral Dodd Rancit', 'Admiral Firmus Piett', 'Admiral Gial Ackbar', 'Admiral Ozzel', 'Admiral Raddus', 'Admiral Terrinald Screed', 'Admiral Trench', 'Admiral U.O. Statura', 'Agen Kolar', 'Agent Kallus', 'Aiolin and Morit Astarte', 'Aks Moe', 'Almec', 'Alton Kastle', 'Amee', 'AP-5', 'Armitage Hux', 'Artoo', 'Arvel Crynyd', 'Asajj Ventress', 'Aurra Sing', 'AZI-3', 'Bala-Tik', 'Barada', 'Bargwill Tomder', 'Baron Papanoida', 'Barriss Offee', 'Baze Malbus', 'Bazine Netal', 'BB-8', 'BB-9E', 'Ben Quadinaros', 'Berch Teller', 'Beru Lars', 'Bib Fortuna', 'Biggs Darklighter', 'Black Krrsantan', 'Bo-Katan Kryze', 'Boba Fett', 'Bobbajo', 'Bodhi Rook', 'Borvo the Hutt', 'Boss Nass', 'Bossk', 'Breha Antilles-Organa', 'Bren Derlin', 'Brendol Hux', 'BT-1', 'C-3PO', 'C1-10P', 'Cad Bane', 'Caluan Ematt', 'Captain Gregor', 'Captain Phasma', 'Captain Quarsh Panaka', 'Captain Rex', 'Carlist Rieekan', 'Casca Panzoro', 'Cassian Andor', 'Cassio Tagge', 'Cham Syndulla', 'Che Amanwe Papanoida', 'Chewbacca', 'Chi Eekway Papanoida', 'Chief Chirpa', 'Chirrut Îmwe', 'Ciena Ree', 'Cin Drallig', 'Clegg Holdfast', 'Cliegg Lars', 'Coleman Kcaj', 'Coleman Trebor', 'Colonel Kaplan', 'Commander Bly', 'Commander Cody (CC-2224)', 'Commander Fil (CC-3714)', 'Commander Fox', 'Commander Gree', 'Commander Jet', 'Commander Wolffe', 'Conan Antonio Motti', 'Conder Kyl', 'Constable Zuvio', 'Cordé', 'Cpatain Typho', 'Crix Madine', 'Cut Lawquane', 'Dak Ralter', 'Dapp', 'Darth Bane', 'Darth Maul', 'Darth Tyranus', 'Daultay Dofine', 'Del Meeko', 'Delian Mors', 'Dengar', 'Depa Billaba', 'Derek Klivian', 'Dexter Jettster', 'Dineé Ellberger', 'DJ', 'Doctor Aphra', 'Doctor Evazan', 'Dogma', 'Dormé', 'Dr. Cylo', 'Droidbait', 'Droopy McCool', 'Dryden Vos', 'Dud Bolt', 'Ebe E. Endocott', 'Echuu Shen-Jon', 'Eeth Koth', 'Eighth Brother', 'Eirtaé', 'Eli Vanto', 'Ellé', 'Ello Asty', 'Embo', 'Eneb Ray', 'Enfys Nest', 'EV-9D9', 'Evaan Verlaine', 'Even Piell', 'Ezra Bridger', 'Faro Argyus', 'Feral', 'Fifth Brother', 'Finis Valorum', 'Finn', 'Fives', 'FN-1824', 'FN-2003', 'Fodesinbeed Annodue', 'Fulcrum', 'FX-7', 'GA-97', 'Galen Erso', 'Gallius Rax', 'Garazeb "Zeb" Orrelios', 'Gardulla the Hutt', 'Garrick Versio', 'Garven Dreis', 'Gavyn Sykes', 'Gideon Hask', 'Gizor Dellso', 'Gonk droid', 'Grand Inquisitor', 'Greeata Jendowanian', 'Greedo', 'Greer Sonnel', 'Grievous', 'Grummgar', 'Gungi', 'Hammerhead', 'Han Solo', 'Harter Kalonia', 'Has Obbit', 'Hera Syndulla', 'Hevy', 'Hondo Ohnaka', 'Huyang', 'Iden Versio', 'IG-88', 'Ima-Gun Di', 'Inquisitors', 'Inspector Thanoth', 'Jabba', 'Jacen Syndulla', 'Jan Dodonna', 'Jango Fett', 'Janus Greejatus', 'Jar Jar Binks', 'Jas Emari', 'Jaxxon', 'Jek Tono Porkins', 'Jeremoch Colton', 'Jira', 'Jobal Naberrie', 'Jocasta Nu', 'Joclad Danva', 'Joh Yowza', 'Jom Barell', 'Joph Seastriker', 'Jova Tarkin', 'Jubnuk', 'Jyn Erso', 'K-2SO', 'Kanan Jarrus', 'Karbin', 'Karina the Great', 'Kes Dameron', 'Ketsu Onyo', 'Ki-Adi-Mundi', 'King Katuunko', 'Kit Fisto', 'Kitster Banai', 'Klaatu', 'Klik-Klak', 'Korr Sella', 'Kylo Ren', 'L3-37', 'Lama Su', 'Lando Calrissian', 'Lanever Villecham', 'Leia Organa', 'Letta Turmond', 'Lieutenant Kaydel Ko Connix', 'Lieutenant Thire', 'Lobot', 'Logray', 'Lok Durd', 'Longo Two-Guns', 'Lor San Tekka', 'Lorth Needa', 'Lott Dod', 'Luke Skywalker', 'Lumat', 'Luminara Unduli', 'Lux Bonteri', 'Lyn Me', 'Lyra Erso', 'Mace Windu', 'Malakili', 'Mama the Hutt', 'Mars Guo', 'Mas Amedda', 'Mawhonic', 'Max Rebo', 'Maximilian Veers', 'Maz Kanata', 'ME-8D9', 'Meena Tills', 'Mercurial Swift', 'Mina Bonteri', 'Miraj Scintel', 'Mister Bones', 'Mod Terrik', 'Moden Canady', 'Mon Mothma', 'Moradmin Bast', 'Moralo Eval', 'Morley', 'Mother Talzin', 'Nahdar Vebb', 'Nahdonnis Praji', 'Nien Nunb', 'Niima the Hutt', 'Nines', 'Norra Wexley', 'Nute Gunray', 'Nuvo Vindi', 'Obi-Wan Kenobi', 'Odd Ball', 'Ody Mandrell', 'Omi', 'Onaconda Farr', 'Oola', 'OOM-9', 'Oppo Rancisis', 'Orn Free Taa', 'Oro Dassyne', 'Orrimarko', 'Osi Sobeck', 'Owen Lars', 'Pablo-Jill', 'Padmé Amidala', 'Pagetti Rook', 'Paige Tico', 'Paploo', 'Petty Officer Thanisson', 'Pharl McQuarrie', 'Plo Koon', 'Po Nudo', 'Poe Dameron', 'Poggle the Lesser', 'Pong Krell', 'Pooja Naberrie', 'PZ-4CO', 'Quarrie', 'Quay Tolsite', 'Queen Apailana', 'Queen Jamillia', 'Queen Neeyutnee', 'Qui-Gon Jinn', 'Quiggold', 'Quinlan Vos', 'R2-D2', 'R2-KT', 'R3-S6', 'R4-P17', 'R5-D4', 'RA-7', 'Rabé', 'Rako Hardeen', 'Ransolm Casterfo', 'Rappertunie', 'Ratts Tyerell', 'Raymus Antilles', 'Ree-Yees', 'Reeve Panzoro', 'Rey', 'Ric Olié', 'Riff Tamson', 'Riley', 'Rinnriyin Di', 'Rio Durant', 'Rogue Squadron', 'Romba', 'Roos Tarpals', 'Rose Tico', 'Rotta the Hutt', 'Rukh', 'Rune Haako', 'Rush Clovis', 'Ruwee Naberrie', 'Ryoo Naberrie', 'Sabé', 'Sabine Wren', 'Saché', 'Saelt-Marae', 'Saesee Tiin', 'Salacious B. Crumb', 'San Hill', 'Sana Starros', 'Sarco Plank', 'Sarkli', 'Satine Kryze', 'Savage Opress', 'Sebulba', 'Senator Organa', 'Sergeant Kreel', 'Seventh Sister', 'Shaak Ti', 'Shara Bey', 'Shmi Skywalker', 'Shu Mai', 'Sidon Ithano', 'Sifo-Dyas', 'Sim Aloo', 'Siniir Rath Velus', 'Sio Bibble', 'Sixth Brother', 'Slowen Lo', 'Sly Moore', 'Snaggletooth', 'Snap Wexley', 'Snoke', 'Sola Naberrie', 'Sora Bulq', 'Strono Tuggs', 'Sy Snootles', 'Tallissan Lintra', 'Tarfful', 'Tasu Leech', 'Taun We', 'TC-14', 'Tee Watt Kaa', 'Teebo', 'Teedo', 'Teemto Pagalies', 'Temiri Blagg', 'Tessek', 'Tey How', 'Thane Kyrell', 'The Bendu', 'The Smuggler', 'Thrawn', 'Tiaan Jerjerrod', 'Tion Medon', 'Tobias Beckett', 'Tulon Voidgazer', 'Tup', 'U9-C4', 'Unkar Plutt', 'Val Beckett', 'Vanden Willard', 'Vice Admiral Amilyn Holdo', 'Vober Dand', 'WAC-47', 'Wag Too', 'Wald', 'Walrus Man', 'Warok', 'Wat Tambor', 'Watto', 'Wedge Antilles', 'Wes Janson', 'Wicket W. Warrick', 'Wilhuff Tarkin', 'Wollivan', 'Wuher', 'Wullf Yularen', 'Xamuel Lennox', 'Yaddle', 'Yarael Poof', 'Yoda', 'Zam Wesell', 'Zev Senesca', 'Ziro the Hutt', 'Zuckuss', 'TESTTEST', '한국', '한국어', '한국어 지원', '한국어 지원을 확'];
/* harmony default export */ __webpack_exports__["default"] = (MentionExample);

var _c, _c2, _c3;

$RefreshReg$(_c, "MentionExample");
$RefreshReg$(_c2, "Element");
$RefreshReg$(_c3, "Mention");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/paste-html.tsx":
/*!*********************************!*\
  !*** ./examples/paste-html.tsx ***!
  \*********************************/
/*! exports provided: deserialize, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize", function() { return deserialize; });
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slate_hyperscript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-hyperscript */ "../.yarn/__virtual__/slate-hyperscript-virtual-07e8ae0801/1/packages/slate-hyperscript/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "../.yarn/__virtual__/@emotion-css-virtual-d83d1c33bf/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");



var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\paste-html.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          display: block;\n          max-width: 100%;\n          max-height: 20em;\n          box-shadow: ", ";\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ELEMENT_TAGS = {
  A: function A(el) {
    return {
      type: 'link',
      url: el.getAttribute('href')
    };
  },
  BLOCKQUOTE: function BLOCKQUOTE() {
    return {
      type: 'quote'
    };
  },
  H1: function H1() {
    return {
      type: 'heading-one'
    };
  },
  H2: function H2() {
    return {
      type: 'heading-two'
    };
  },
  H3: function H3() {
    return {
      type: 'heading-three'
    };
  },
  H4: function H4() {
    return {
      type: 'heading-four'
    };
  },
  H5: function H5() {
    return {
      type: 'heading-five'
    };
  },
  H6: function H6() {
    return {
      type: 'heading-six'
    };
  },
  IMG: function IMG(el) {
    return {
      type: 'image',
      url: el.getAttribute('src')
    };
  },
  LI: function LI() {
    return {
      type: 'list-item'
    };
  },
  OL: function OL() {
    return {
      type: 'numbered-list'
    };
  },
  P: function P() {
    return {
      type: 'paragraph'
    };
  },
  PRE: function PRE() {
    return {
      type: 'code'
    };
  },
  UL: function UL() {
    return {
      type: 'bulleted-list'
    };
  }
}; // COMPAT: `B` is omitted here because Google Docs uses `<b>` in weird ways.

var TEXT_TAGS = {
  CODE: function CODE() {
    return {
      code: true
    };
  },
  DEL: function DEL() {
    return {
      strikethrough: true
    };
  },
  EM: function EM() {
    return {
      italic: true
    };
  },
  I: function I() {
    return {
      italic: true
    };
  },
  S: function S() {
    return {
      strikethrough: true
    };
  },
  STRONG: function STRONG() {
    return {
      bold: true
    };
  },
  U: function U() {
    return {
      underline: true
    };
  }
};
var deserialize = function deserialize(el) {
  if (el.nodeType === 3) {
    return el.textContent;
  } else if (el.nodeType !== 1) {
    return null;
  } else if (el.nodeName === 'BR') {
    return '\n';
  }

  var nodeName = el.nodeName;
  var parent = el;

  if (nodeName === 'PRE' && el.childNodes[0] && el.childNodes[0].nodeName === 'CODE') {
    parent = el.childNodes[0];
  }

  var children = Array.from(parent.childNodes).map(deserialize).flat();

  if (children.length === 0) {
    children = [{
      text: ''
    }];
  }

  if (el.nodeName === 'BODY') {
    return Object(slate_hyperscript__WEBPACK_IMPORTED_MODULE_3__["jsx"])('fragment', {}, children);
  }

  if (ELEMENT_TAGS[nodeName]) {
    var attrs = ELEMENT_TAGS[nodeName](el);
    return Object(slate_hyperscript__WEBPACK_IMPORTED_MODULE_3__["jsx"])('element', attrs, children);
  }

  if (TEXT_TAGS[nodeName]) {
    var _attrs = TEXT_TAGS[nodeName](el);

    return children.map(function (child) {
      return Object(slate_hyperscript__WEBPACK_IMPORTED_MODULE_3__["jsx"])('text', _attrs, child);
    });
  }

  return children;
};

var PasteHtmlExample = function PasteHtmlExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var renderElement = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (props) {
    return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 46
      }
    }));
  }, []);
  var renderLeaf = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (props) {
    return __jsx(Leaf, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 43
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return withHtml(Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["withReact"])(Object(slate_history__WEBPACK_IMPORTED_MODULE_5__["withHistory"])(Object(slate__WEBPACK_IMPORTED_MODULE_4__["createEditor"])())));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_7__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_7__["Editable"], {
    renderElement: renderElement,
    renderLeaf: renderLeaf,
    placeholder: "Paste in some HTML...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }));
};

_s(PasteHtmlExample, "eGTXoAMSU5Zwxn30ofCLeiwqzhc=");

_c = PasteHtmlExample;

var withHtml = function withHtml(editor) {
  var insertData = editor.insertData,
      isInline = editor.isInline,
      isVoid = editor.isVoid;

  editor.isInline = function (element) {
    return element.type === 'link' ? true : isInline(element);
  };

  editor.isVoid = function (element) {
    return element.type === 'image' ? true : isVoid(element);
  };

  editor.insertData = function (data) {
    var html = data.getData('text/html');

    if (html) {
      var parsed = new DOMParser().parseFromString(html, 'text/html');
      var fragment = deserialize(parsed.body);
      slate__WEBPACK_IMPORTED_MODULE_4__["Transforms"].insertFragment(editor, fragment);
      return;
    }

    insertData(data);
  };

  return editor;
};

var Element = function Element(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;

  switch (element.type) {
    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 14
        }
      }), children);

    case 'quote':
      return __jsx("blockquote", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 14
        }
      }), children);

    case 'code':
      return __jsx("pre", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 9
        }
      }, __jsx("code", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }
      }), children));

    case 'bulleted-list':
      return __jsx("ul", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 14
        }
      }), children);

    case 'heading-one':
      return __jsx("h1", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 14
        }
      }), children);

    case 'heading-two':
      return __jsx("h2", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 14
        }
      }), children);

    case 'heading-three':
      return __jsx("h3", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 14
        }
      }), children);

    case 'heading-four':
      return __jsx("h4", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 14
        }
      }), children);

    case 'heading-five':
      return __jsx("h5", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 14
        }
      }), children);

    case 'heading-six':
      return __jsx("h6", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 14
        }
      }), children);

    case 'list-item':
      return __jsx("li", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 14
        }
      }), children);

    case 'numbered-list':
      return __jsx("ol", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 14
        }
      }), children);

    case 'link':
      return __jsx("a", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        href: element.url
      }, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 9
        }
      }), children);

    case 'image':
      return __jsx(ImageElement, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 14
        }
      }));
  }
};

_c2 = Element;

var ImageElement = function ImageElement(_ref) {
  _s2();

  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;
  var selected = Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["useSelected"])();
  var focused = Object(slate_react__WEBPACK_IMPORTED_MODULE_7__["useFocused"])();
  return __jsx("div", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }), children, __jsx("img", {
    src: element.url,
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject(), selected && focused ? '0 0 0 2px blue;' : 'none'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }));
};

_s2(ImageElement, "HuPpo5U0EHtf6bNXFVpc3GQNhHc=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_7__["useSelected"], slate_react__WEBPACK_IMPORTED_MODULE_7__["useFocused"]];
});

_c3 = ImageElement;

var Leaf = function Leaf(_ref2) {
  var attributes = _ref2.attributes,
      children = _ref2.children,
      leaf = _ref2.leaf;

  if (leaf.bold) {
    children = __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.code) {
    children = __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.italic) {
    children = __jsx("em", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.underline) {
    children = __jsx("u", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.strikethrough) {
    children = __jsx("del", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 16
      }
    }, children);
  }

  return __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 10
    }
  }), children);
};

_c4 = Leaf;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: "By default, pasting content into a Slate editor will use the clipboard's "
  }, {
    text: "'text/plain'",
    code: true
  }, {
    text: " data. That's okay for some use cases, but sometimes you want users to be able to paste in content and have it maintain its formatting. To do this, your editor needs to handle "
  }, {
    text: "'text/html'",
    code: true
  }, {
    text: ' data. '
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'This is an example of doing exactly that!'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: "Try it out for yourself! Copy and paste some rendered HTML rich text content (not the source code) from another site into this editor and it's formatting should be preserved."
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (PasteHtmlExample);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "PasteHtmlExample");
$RefreshReg$(_c2, "Element");
$RefreshReg$(_c3, "ImageElement");
$RefreshReg$(_c4, "Leaf");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/plaintext.tsx":
/*!********************************!*\
  !*** ./examples/plaintext.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\plaintext.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PlainTextExample = function PlainTextExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_3__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])()));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_2__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
    placeholder: "Enter some plain text...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};

_s(PlainTextExample, "4ewp4wBHt4y6QUDh2ipfoCLaKxY=");

_c = PlainTextExample;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'This is editable plain text, just like a <textarea>!'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (PlainTextExample);

var _c;

$RefreshReg$(_c, "PlainTextExample");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/read-only.tsx":
/*!********************************!*\
  !*** ./examples/read-only.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\read-only.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ReadOnlyExample = function ReadOnlyExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])());
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_2__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
    readOnly: true,
    placeholder: "Enter some plain text...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
};

_s(ReadOnlyExample, "4ewp4wBHt4y6QUDh2ipfoCLaKxY=");

_c = ReadOnlyExample;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'This example shows what happens when the Editor is set to readOnly, it is not editable'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (ReadOnlyExample);

var _c;

$RefreshReg$(_c, "ReadOnlyExample");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/richtext.tsx":
/*!*******************************!*\
  !*** ./examples/richtext.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! is-hotkey */ "../.yarn/cache/is-hotkey-npm-0.1.8-735647ba68-793d0cccaf.zip/node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./components.tsx");



var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\richtext.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code'
};
var LIST_TYPES = ['numbered-list', 'bulleted-list'];

var RichTextExample = function RichTextExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var renderElement = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (props) {
    return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 46
      }
    }));
  }, []);
  var renderLeaf = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (props) {
    return __jsx(Leaf, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 43
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_6__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_5__["createEditor"])()));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(MarkButton, {
    format: "bold",
    icon: "format_bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(MarkButton, {
    format: "italic",
    icon: "format_italic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx(MarkButton, {
    format: "underline",
    icon: "format_underlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(MarkButton, {
    format: "code",
    icon: "code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(BlockButton, {
    format: "heading-one",
    icon: "looks_one",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(BlockButton, {
    format: "heading-two",
    icon: "looks_two",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(BlockButton, {
    format: "block-quote",
    icon: "format_quote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(BlockButton, {
    format: "numbered-list",
    icon: "format_list_numbered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx(BlockButton, {
    format: "bulleted-list",
    icon: "format_list_bulleted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    renderElement: renderElement,
    renderLeaf: renderLeaf,
    placeholder: "Enter some rich text\u2026",
    spellCheck: true,
    autoFocus: true,
    onKeyDown: function onKeyDown(event) {
      for (var hotkey in HOTKEYS) {
        if (is_hotkey__WEBPACK_IMPORTED_MODULE_3___default()(hotkey, event)) {
          event.preventDefault();
          var mark = HOTKEYS[hotkey];
          toggleMark(editor, mark);
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
};

_s(RichTextExample, "eGTXoAMSU5Zwxn30ofCLeiwqzhc=");

_c = RichTextExample;

var toggleBlock = function toggleBlock(editor, format) {
  var isActive = isBlockActive(editor, format);
  var isList = LIST_TYPES.includes(format);
  slate__WEBPACK_IMPORTED_MODULE_5__["Transforms"].unwrapNodes(editor, {
    match: function match(n) {
      return !slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_5__["Element"].isElement(n) && LIST_TYPES.includes(n.type);
    },
    split: true
  });
  var newProperties = {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format
  };
  slate__WEBPACK_IMPORTED_MODULE_5__["Transforms"].setNodes(editor, newProperties);

  if (!isActive && isList) {
    var block = {
      type: format,
      children: []
    };
    slate__WEBPACK_IMPORTED_MODULE_5__["Transforms"].wrapNodes(editor, block);
  }
};

var toggleMark = function toggleMark(editor, format) {
  var isActive = isMarkActive(editor, format);

  if (isActive) {
    slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].removeMark(editor, format);
  } else {
    slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].addMark(editor, format, true);
  }
};

var isBlockActive = function isBlockActive(editor, format) {
  var selection = editor.selection;
  if (!selection) return false;

  var _Array$from = Array.from(slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].nodes(editor, {
    at: slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].unhangRange(editor, selection),
    match: function match(n) {
      return !slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_5__["Element"].isElement(n) && n.type === format;
    }
  })),
      _Array$from2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Array$from, 1),
      match = _Array$from2[0];

  return !!match;
};

var isMarkActive = function isMarkActive(editor, format) {
  var marks = slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].marks(editor);
  return marks ? marks[format] === true : false;
};

var Element = function Element(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;

  switch (element.type) {
    case 'block-quote':
      return __jsx("blockquote", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 14
        }
      }), children);

    case 'bulleted-list':
      return __jsx("ul", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 14
        }
      }), children);

    case 'heading-one':
      return __jsx("h1", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 14
        }
      }), children);

    case 'heading-two':
      return __jsx("h2", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 14
        }
      }), children);

    case 'list-item':
      return __jsx("li", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 14
        }
      }), children);

    case 'numbered-list':
      return __jsx("ol", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 14
        }
      }), children);

    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 14
        }
      }), children);
  }
};

_c2 = Element;

var Leaf = function Leaf(_ref2) {
  var attributes = _ref2.attributes,
      children = _ref2.children,
      leaf = _ref2.leaf;

  if (leaf.bold) {
    children = __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.code) {
    children = __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.italic) {
    children = __jsx("em", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 16
      }
    }, children);
  }

  if (leaf.underline) {
    children = __jsx("u", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 16
      }
    }, children);
  }

  return __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 10
    }
  }), children);
};

_c3 = Leaf;

var BlockButton = function BlockButton(_ref3) {
  _s2();

  var format = _ref3.format,
      icon = _ref3.icon;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlate"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    active: isBlockActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleBlock(editor, format);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, icon));
};

_s2(BlockButton, "YMFVEh3YGumTkrWAgpqmxHJ20Oc=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlate"]];
});

_c4 = BlockButton;

var MarkButton = function MarkButton(_ref4) {
  _s3();

  var format = _ref4.format,
      icon = _ref4.icon;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlate"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    active: isMarkActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleMark(editor, format);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, icon));
};

_s3(MarkButton, "YMFVEh3YGumTkrWAgpqmxHJ20Oc=", false, function () {
  return [slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlate"]];
});

_c5 = MarkButton;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'This is editable '
  }, {
    text: 'rich',
    bold: true
  }, {
    text: ' text, '
  }, {
    text: 'much',
    italic: true
  }, {
    text: ' better than a '
  }, {
    text: '<textarea>',
    code: true
  }, {
    text: '!'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: "Since it's rich text, you can do things like turn a selection of text "
  }, {
    text: 'bold',
    bold: true
  }, {
    text: ', or add a semantically rendered block quote in the middle of the page, like this:'
  }]
}, {
  type: 'block-quote',
  children: [{
    text: 'A wise quote.'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Try it out for yourself!'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (RichTextExample);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "RichTextExample");
$RefreshReg$(_c2, "Element");
$RefreshReg$(_c3, "Leaf");
$RefreshReg$(_c4, "BlockButton");
$RefreshReg$(_c5, "MarkButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/search-highlighting.tsx":
/*!******************************************!*\
  !*** ./examples/search-highlighting.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "../.yarn/__virtual__/@emotion-css-virtual-d83d1c33bf/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./components.tsx");




var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\search-highlighting.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject4() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        font-weight: ", ";\n        background-color: ", ";\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n              padding-left: 2.5em;\n              width: 100%;\n            "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n              position: absolute;\n              top: 0.3em;\n              left: 0.4em;\n              color: #ccc;\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n            position: relative;\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var SearchHighlightingExample = function SearchHighlightingExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      search = _useState2[0],
      setSearch = _useState2[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_7__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_5__["createEditor"])()));
  }, []);
  var decorate = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (_ref) {
    var _ref2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
        node = _ref2[0],
        path = _ref2[1];

    var ranges = [];

    if (search && slate__WEBPACK_IMPORTED_MODULE_5__["Text"].isText(node)) {
      var text = node.text;
      var parts = text.split(search);
      var offset = 0;
      parts.forEach(function (part, i) {
        if (i !== 0) {
          ranges.push({
            anchor: {
              path: path,
              offset: offset - search.length
            },
            focus: {
              path: path,
              offset: offset
            },
            highlight: true
          });
        }

        offset = offset + part.length + search.length;
      });
    }

    return ranges;
  }, [search]);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject2()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "search"), __jsx("input", {
    type: "search",
    placeholder: "Search the text...",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject3()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }))), __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    decorate: decorate,
    renderLeaf: function renderLeaf(props) {
      return __jsx(Leaf, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 58
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }));
};

_s(SearchHighlightingExample, "iqzMYLxz6fQVedQtbB1CJ4eyXM8=");

_c = SearchHighlightingExample;

var Leaf = function Leaf(_ref3) {
  var attributes = _ref3.attributes,
      children = _ref3.children,
      leaf = _ref3.leaf;
  return __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, leaf.highlight && {
    'data-cy': 'search-highlighted'
  }, {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject4(), leaf.bold && 'bold', leaf.highlight && '#ffeeba'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }), children);
};

_c2 = Leaf;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'This is editable text that you can search. As you search, it looks for matching strings of text, and adds '
  }, {
    text: 'decorations',
    bold: true
  }, {
    text: ' to them in realtime.'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Try it out for yourself by typing in the search box above!'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (SearchHighlightingExample);

var _c, _c2;

$RefreshReg$(_c, "SearchHighlightingExample");
$RefreshReg$(_c2, "Leaf");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/shadow-dom.tsx":
/*!*********************************!*\
  !*** ./examples/shadow-dom.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "../.yarn/__virtual__/react-dom-virtual-42ecc65227/0/cache/react-dom-npm-16.14.0-516a97ad33-5a5c49da0f.zip/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");
var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\shadow-dom.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var ShadowDOM = function ShadowDOM() {
  _s();

  var container = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (container.current.shadowRoot) return; // Create a shadow DOM

    var outerShadowRoot = container.current.attachShadow({
      mode: 'open'
    });
    var host = document.createElement('div');
    outerShadowRoot.appendChild(host); // Create a nested shadow DOM

    var innerShadowRoot = host.attachShadow({
      mode: 'open'
    });
    var reactRoot = document.createElement('div');
    innerShadowRoot.appendChild(reactRoot); // Render the editor within the nested shadow DOM

    react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(__jsx(ShadowEditor, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }), reactRoot);
  });
  return __jsx("div", {
    ref: container,
    "data-cy": "outer-shadow-root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  });
};

_s(ShadowDOM, "gP936EAkbq44zYYGRnj90r2fLhg=");

_c = ShadowDOM;

var ShadowEditor = function ShadowEditor() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_4__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_3__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_2__["createEditor"])()));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_3__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_3__["Editable"], {
    placeholder: "Enter some plain text...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

_s2(ShadowEditor, "4ewp4wBHt4y6QUDh2ipfoCLaKxY=");

_c2 = ShadowEditor;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'This Editor is rendered within a nested Shadow DOM.'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (ShadowDOM);

var _c, _c2;

$RefreshReg$(_c, "ShadowDOM");
$RefreshReg$(_c2, "ShadowEditor");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./examples/tables.tsx":
/*!*****************************!*\
  !*** ./examples/tables.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends */ "../.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-16.14.0-932446ec69-8484f3ecb1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-react */ "../.yarn/__virtual__/slate-react-virtual-f98a535bba/1/packages/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate */ "../packages/slate/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate-history */ "../.yarn/__virtual__/slate-history-virtual-08ca66ad96/1/packages/slate-history/dist/index.es.js");



var _jsxFileName = "D:\\Documents\\Development\\slate\\site\\examples\\tables.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var TablesExample = function TablesExample() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var renderElement = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (props) {
    return __jsx(Element, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 46
      }
    }));
  }, []);
  var renderLeaf = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (props) {
    return __jsx(Leaf, Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 43
      }
    }));
  }, []);
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return withTables(Object(slate_history__WEBPACK_IMPORTED_MODULE_5__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_3__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_4__["createEditor"])())));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_3__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_3__["Editable"], {
    renderElement: renderElement,
    renderLeaf: renderLeaf,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
};

_s(TablesExample, "eGTXoAMSU5Zwxn30ofCLeiwqzhc=");

_c = TablesExample;

var withTables = function withTables(editor) {
  var deleteBackward = editor.deleteBackward,
      deleteForward = editor.deleteForward,
      insertBreak = editor.insertBreak;

  editor.deleteBackward = function (unit) {
    var selection = editor.selection;

    if (selection && slate__WEBPACK_IMPORTED_MODULE_4__["Range"].isCollapsed(selection)) {
      var _Editor$nodes = slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].nodes(editor, {
        match: function match(n) {
          return !slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_4__["Element"].isElement(n) && n.type === 'table-cell';
        }
      }),
          _Editor$nodes2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Editor$nodes, 1),
          cell = _Editor$nodes2[0];

      if (cell) {
        var _cell = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cell, 2),
            cellPath = _cell[1];

        var start = slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].start(editor, cellPath);

        if (slate__WEBPACK_IMPORTED_MODULE_4__["Point"].equals(selection.anchor, start)) {
          return;
        }
      }
    }

    deleteBackward(unit);
  };

  editor.deleteForward = function (unit) {
    var selection = editor.selection;

    if (selection && slate__WEBPACK_IMPORTED_MODULE_4__["Range"].isCollapsed(selection)) {
      var _Editor$nodes3 = slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].nodes(editor, {
        match: function match(n) {
          return !slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_4__["Element"].isElement(n) && n.type === 'table-cell';
        }
      }),
          _Editor$nodes4 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Editor$nodes3, 1),
          cell = _Editor$nodes4[0];

      if (cell) {
        var _cell2 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cell, 2),
            cellPath = _cell2[1];

        var end = slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].end(editor, cellPath);

        if (slate__WEBPACK_IMPORTED_MODULE_4__["Point"].equals(selection.anchor, end)) {
          return;
        }
      }
    }

    deleteForward(unit);
  };

  editor.insertBreak = function () {
    var selection = editor.selection;

    if (selection) {
      var _Editor$nodes5 = slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].nodes(editor, {
        match: function match(n) {
          return !slate__WEBPACK_IMPORTED_MODULE_4__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_4__["Element"].isElement(n) && n.type === 'table';
        }
      }),
          _Editor$nodes6 = Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Editor$nodes5, 1),
          table = _Editor$nodes6[0];

      if (table) {
        return;
      }
    }

    insertBreak();
  };

  return editor;
};

var Element = function Element(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      element = _ref.element;

  switch (element.type) {
    case 'table':
      return __jsx("table", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }
      }, __jsx("tbody", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }), children));

    case 'table-row':
      return __jsx("tr", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 14
        }
      }), children);

    case 'table-cell':
      return __jsx("td", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 14
        }
      }), children);

    default:
      return __jsx("p", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 14
        }
      }), children);
  }
};

_c2 = Element;

var Leaf = function Leaf(_ref2) {
  var attributes = _ref2.attributes,
      children = _ref2.children,
      leaf = _ref2.leaf;

  if (leaf.bold) {
    children = __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 16
      }
    }, children);
  }

  return __jsx("span", Object(D_Documents_Development_slate_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 10
    }
  }), children);
};

_c3 = Leaf;
var initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'Since the editor is based on a recursive tree model, similar to an HTML document, you can create complex nested structures, like tables:'
  }]
}, {
  type: 'table',
  children: [{
    type: 'table-row',
    children: [{
      type: 'table-cell',
      children: [{
        text: ''
      }]
    }, {
      type: 'table-cell',
      children: [{
        text: 'Human',
        bold: true
      }]
    }, {
      type: 'table-cell',
      children: [{
        text: 'Dog',
        bold: true
      }]
    }, {
      type: 'table-cell',
      children: [{
        text: 'Cat',
        bold: true
      }]
    }]
  }, {
    type: 'table-row',
    children: [{
      type: 'table-cell',
      children: [{
        text: '# of Feet',
        bold: true
      }]
    }, {
      type: 'table-cell',
      children: [{
        text: '2'
      }]
    }, {
      type: 'table-cell',
      children: [{
        text: '4'
      }]
    }, {
      type: 'table-cell',
      children: [{
        text: '4'
      }]
    }]
  }, {
    type: 'table-row',
    children: [{
      type: 'table-cell',
      children: [{
        text: '# of Lives',
        bold: true
      }]
    }, {
      type: 'table-cell',
      children: [{
        text: '1'
      }]
    }, {
      type: 'table-cell',
      children: [{
        text: '1'
      }]
    }, {
      type: 'table-cell',
      children: [{
        text: '9'
      }]
    }]
  }]
}, {
  type: 'paragraph',
  children: [{
    text: "This table is just a basic example of rendering a table, and it doesn't have fancy functionality. But you could augment it to add support for navigating with arrow keys, displaying table headers, adding column and rows, or even formulas if you wanted to get really crazy!"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (TablesExample);

var _c, _c2, _c3;

$RefreshReg$(_c, "TablesExample");
$RefreshReg$(_c2, "Element");
$RefreshReg$(_c3, "Leaf");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "../.yarn/__virtual__/next-virtual-4bb5462f15/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})