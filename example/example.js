/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _ImageZoomer = __webpack_require__(4);

	var _ImageZoomer2 = _interopRequireDefault(_ImageZoomer);

	var _ImagePicker = __webpack_require__(5);

	var _ImagePicker2 = _interopRequireDefault(_ImagePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var images = [];
	for (var i = 1; i < 9; i++) {
	    images.push('http://kingofwallpapers.com/wallpaper-hd/wallpaper-hd-00' + i + '.jpg');
	}

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

	        _this.state = {
	            mainImage: images[0]
	        };
	        _this.changeImage = _this.changeImage.bind(_this);
	        return _this;
	    }

	    _createClass(App, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return this.state.mainImage !== nextState.mainImage;
	        }
	    }, {
	        key: 'changeImage',
	        value: function changeImage(image) {
	            this.setState({ mainImage: image });
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var mainImage = {
	                id: 'mainImage',
	                src: this.state.mainImage,
	                className: 'mainCanvas',
	                width: '400px',
	                height: '200px'
	            };
	            var zoomer = {
	                height: 80,
	                width: 80,
	                style: 'rgba(255,165,0,0.3)'
	            };
	            var zoomedImage = {
	                id: 'zoomedImage',
	                className: 'zoomedCanvas',
	                width: '450px',
	                height: '450px'
	            };

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _ImageZoomer2.default,
	                    { className: 'imageZoomer', mainImage: mainImage, zoomedImage: zoomedImage, zoomer: zoomer },
	                    'Nature Gallery',
	                    _react2.default.createElement(_ImagePicker2.default, { images: images, changeImage: this.changeImage })
	                )
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

		(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultProps = {
	    mainImage: {
	        src: '',
	        width: '200px',
	        height: '100px'

	    },
	    zoomer: {
	        height: 50,
	        width: 50,
	        style: 'rgba(255,165,0,0.5)'
	    },
	    zoomedImage: {
	        postion: 'right',
	        width: '400px',
	        height: '400px'
	    }
	};

	var propTypes = {
	    mainImage: _react.PropTypes.shape({ src: _react.PropTypes.string.isRequired, id: _react.PropTypes.string.isRequired, className: _react.PropTypes.string, width: _react.PropTypes.string, height: _react.PropTypes.string }).isRequired,
	    zoomer: _react.PropTypes.shape({ height: _react.PropTypes.number, width: _react.PropTypes.number, style: _react.PropTypes.string }),
	    zoomedImage: _react.PropTypes.shape({ id: _react.PropTypes.string.isRequird, className: _react.PropTypes.string, position: _react.PropTypes.string, width: _react.PropTypes.string, height: _react.PropTypes.string })
	};

	var ImageZoomer = function (_React$Component) {
	    _inherits(ImageZoomer, _React$Component);

	    function ImageZoomer(props) {
	        _classCallCheck(this, ImageZoomer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageZoomer).call(this, props));

	        _this.state = {
	            showZoomedCanvas: false
	        };
	        _this.drawImage = _this.drawImage.bind(_this);
	        return _this;
	    }

	    _createClass(ImageZoomer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.drawImage();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.drawImage();
	        }
	    }, {
	        key: 'drawImage',
	        value: function drawImage() {
	            var _this2 = this;

	            var mainImageCanvas = this.refs[this.props.mainImage.id];
	            var mainCanvasWidth = mainImageCanvas.width;
	            var mainCanvasHeight = mainImageCanvas.height;

	            // get the absolute postion of the canvas
	            var rectObject = mainImageCanvas.getBoundingClientRect();
	            var mainCanvasLeftOffset = rectObject.left;
	            var mainCanvasTopOffset = rectObject.top;

	            var zoomedCanvas = this.refs[this.props.zoomedImage.id];
	            var zoomedCanvasWidth = zoomedCanvas.width;
	            var zoomedCanvasHeight = zoomedCanvas.height;

	            var zoomerWidth = this.props.zoomer.width;
	            var zoomerHeight = this.props.zoomer.height;

	            var mainContext = mainImageCanvas.getContext('2d');
	            var zoomedContext = zoomedCanvas.getContext('2d');

	            var mainImg = new Image();
	            mainImg.src = this.props.mainImage.src;

	            mainImg.onload = function () {
	                mainContext.drawImage(mainImg, 0, 0, mainCanvasWidth, mainCanvasHeight);
	            };

	            var widthRadio = mainImg.width / mainCanvasWidth;
	            var heightRadio = mainImg.height / mainCanvasHeight;
	            var self = this;
	            mainImageCanvas.onmousemove = function (e) {
	                var mounseXCoord = e.clientX - mainCanvasLeftOffset;
	                var mounseYCoord = e.clientY - mainCanvasTopOffset;
	                _this2.drawImageOnCanvas(mainImg, mainContext, mainCanvasWidth, mainCanvasHeight);
	                var rectCoord = _this2.getRectCord(mounseXCoord, mounseYCoord, mainCanvasWidth, mainCanvasHeight, zoomerWidth, zoomerHeight);
	                _this2.drawRectOnCanvas(mainContext, rectCoord);
	                _this2.drawImageOnZoomedCanvas(mainImg, zoomedContext, mounseXCoord, mounseYCoord, zoomedCanvasWidth, zoomedCanvasHeight, widthRadio, heightRadio, zoomerWidth, zoomerHeight);
	                if (!self.state.showZoomedCanvas) {
	                    self.setState({ showZoomedCanvas: true });
	                }
	            };

	            mainImageCanvas.onmouseleave = function () {
	                return _this2.restoreCanvas(mainImg, mainContext, zoomedContext, mainCanvasWidth, mainCanvasHeight, zoomedCanvasWidth, zoomedCanvasHeight);
	            };
	        }
	    }, {
	        key: 'drawImageOnCanvas',
	        value: function drawImageOnCanvas(img, ctx, canvasWidth, canvasHeight) {
	            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	            ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
	        }
	    }, {
	        key: 'getRectCord',
	        value: function getRectCord(mounseXCoord, mounseYCoord, canvasWidth, canvasHeight, zoomerWidth, zoomerHeight) {
	            var rectStartXCoord = mounseXCoord - zoomerWidth / 2;
	            var rectStartYCoord = mounseYCoord - zoomerHeight / 2;

	            if (rectStartXCoord < 0) {
	                rectStartXCoord = 0;
	            } else if (rectStartXCoord > canvasWidth - zoomerWidth) {
	                rectStartXCoord = canvasWidth - zoomerWidth;
	            }

	            if (rectStartYCoord < 0) {
	                rectStartYCoord = 0;
	            } else if (rectStartYCoord > canvasHeight - zoomerHeight) {
	                rectStartYCoord = canvasHeight - zoomerHeight;
	            }
	            return [rectStartXCoord, rectStartYCoord, zoomerWidth, zoomerHeight];
	        }
	    }, {
	        key: 'drawRectOnCanvas',
	        value: function drawRectOnCanvas(ctx, rectCoord) {
	            ctx.fillStyle = this.props.zoomer.style;
	            ctx.fillRect.apply(ctx, _toConsumableArray(rectCoord));
	        }
	    }, {
	        key: 'drawImageOnZoomedCanvas',
	        value: function drawImageOnZoomedCanvas(img, zoomedCtx, mounseXCoord, mounseYCoord, zoomedCanvasWidth, zoomedCanvasHeight, widthRadio, heightRadio, zoomerWidth, zoomerHeight) {
	            zoomedCtx.clearRect(0, 0, zoomedCanvasWidth, zoomedCanvasHeight);
	            zoomedCtx.drawImage(img, (mounseXCoord - zoomerWidth / 2) * widthRadio, (mounseYCoord - zoomerHeight / 2) * heightRadio, zoomerWidth * widthRadio, zoomerHeight * heightRadio, 0, 0, zoomedCanvasWidth, zoomedCanvasHeight);
	        }
	    }, {
	        key: 'restoreCanvas',
	        value: function restoreCanvas(img, ctx, zoomedCtx, canvasWidth, canvasHeight, zoomedCanvasWidth, zoomedCanvasHeight) {
	            this.drawImageOnCanvas(img, ctx, canvasWidth, canvasHeight);
	            zoomedCtx.clearRect(0, 0, zoomedCanvasWidth, zoomedCanvasHeight);
	            this.setState({ showZoomedCanvas: false });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var zoomeCanvas = this.state.showZoomedCanvas ? 'inline' : 'none';
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('canvas', { id: this.props.mainImage.id, className: this.props.mainImage.className, ref: this.props.mainImage.id, width: this.props.mainImage.width, height: this.props.mainImage.height }),
	                _react2.default.createElement('canvas', { id: this.props.zoomedImage.id, className: this.props.zoomedImage.className, ref: this.props.zoomedImage.id, width: this.props.zoomedImage.width, height: this.props.zoomedImage.height, style: {
	                        display: zoomeCanvas
	                    } }),
	                ' ',
	                this.props.children
	            );
	        }
	    }]);

	    return ImageZoomer;
	}(_react2.default.Component);

	ImageZoomer.defaultProps = defaultProps;
	ImageZoomer.propTypes = propTypes;

	exports.default = ImageZoomer;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImagePicker = function (_React$Component) {
	    _inherits(ImagePicker, _React$Component);

	    function ImagePicker(props) {
	        _classCallCheck(this, ImagePicker);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ImagePicker).call(this, props));
	    }

	    _createClass(ImagePicker, [{
	        key: 'changeImage',
	        value: function changeImage(image) {
	            this.props.changeImage(image);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'imagePickerList' },
	                    this.props.images.map(function (image) {
	                        return _react2.default.createElement(
	                            'li',
	                            { key: image },
	                            _react2.default.createElement('img', { src: image, onClick: function onClick() {
	                                    return _this2.changeImage(image);
	                                } })
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return ImagePicker;
	}(_react2.default.Component);

		exports.default = ImagePicker;

/***/ }
/******/ ]);
//# sourceMappingURL=example.js.map