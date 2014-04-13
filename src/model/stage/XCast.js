/*
 * @author cuckoo99
 */

(function() {
	// namespace:
	var o = this.jslgEngine = this.jslgEngine||{};
	o = (o.model = o.model||{});
	o = (o.stage = o.stage||{});

	/**
	 * <h4>キャストクラス</h4>
	 * <p>
	 * マップ土台上に配置できる要素。
	 * </p>
	 * @class
	 * @name XCast
	 * @memberOf jslgEngine.model.stage
	 * @constructor
	 */
	var XCast = jslgEngine.extend(
		jslgEngine.model.common.JSlgElement,
		function(data, options) {
			this.initialize(data, options);
		}
	);
	/**
	 *
	 */
	var p = XCast.prototype;

	/**
	 * クラス名
	 *
	 * @name className
	 * @property
	 * @type String
	 * @memberOf jslgEngine.model.stage.XCast#
	 **/
	p.className = 'Cast';

	/**
	 * パスのキーコード
	 *
	 * @name keyPathCode
	 * @property
	 * @type String[]
	 * @memberOf jslgEngine.model.stage.XCast#
	 **/
	p._keyPathCodes = [	jslgEngine.model.stage.keys.WORLD_REGION,
						jslgEngine.model.stage.keys.LOCAL_REGION,
	                   	jslgEngine.model.stage.keys.STAGE,
	                   	jslgEngine.model.stage.keys.GROUND,
	                   	jslgEngine.model.stage.keys.CAST];

	/**
	 * 対象キーコード
	 *
	 * @name keyCode
	 * @property
	 * @type String
	 * @memberOf jslgEngine.model.stage.XCast#
	 **/
	p._keyCode = jslgEngine.model.stage.keys.CAST;

	/**
	 * 描画オフセット
	 *
	 * @name canvasOffset
	 * @property
	 * @type jslgEngine.model.area.Location
	 * @memberOf jslgEngine.model.stage.XCast#
	 **/
	p.canvasOffset = jslgEngine.config.castOffset;

	/**
	 * 実体要素取得
	 *
	 * @name getPosition
	 * @method
	 * @function
	 * @memberOf jslgEngine.model.stage.XCast#
	 **/
	p.getPosition = function(data, options) {
		var self = this;
		
		var parent = self.getParent(options)||{};
		var parentsPosition = parent.getPosition(data, options)||{x:0,y:0,z:0};
		var scale = parent;
		
		var position = { x : 0,
				 y : 1,
				 z : 0 };
		
		return { x : parentsPosition.x + position.x,
				 y : parentsPosition.y + position.y,
				 z : parentsPosition.z + position.z };
	};
	
	o.XCast = XCast;
}());