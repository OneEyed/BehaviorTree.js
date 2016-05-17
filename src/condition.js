
module.exports = require('./branch_node').extend({
  _run: function() {
    if (this._nodeRunning) {
      this._nodeRunning.run(this._object);
    } else {
      this.base();
    }
  },
  success: function() {
    this.base();
    if( this.actualTask == 0 ) {
      this._actualTask = 1;
      if (this._actualTask < this.children.length) {
        this._run(this._object);
      } else {
        this._control.success();
      }
    }
    else
      this._control.success();
  },
  fail: function() {
    this.base();
    if( this.actualTask == 0 ) {
      this._actualTask = 2;
      if (this._actualTask < this.children.length) {
        this._run(this._object);
      } else {
        this._control.fail();
      }
    }
    else
      this._control.fail();
  }
});
