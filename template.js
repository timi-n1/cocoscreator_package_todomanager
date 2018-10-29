/**
 * 程序自动生成，切勿手动修改
 */

(function () {

var DataMap = '##EventMapHoldPlace##';

var FSMMap = '##FSMMapHoldPlace##';

var exponent = 0;
var TodoStatus = {};
var TodoStatusMap = {};
for (var type in DataMap) {
    if( type != '*' ){
        TodoStatus[type] = 0;
    }
    for (var i = 0; i < DataMap[type].length; i++) {
        var key = DataMap[type][i];
        var right = Math.pow(2, exponent++);
        if( type == '*' ){
            TodoStatus[key] = right;
            TodoStatusMap[right] = key;
        }
        else{
            TodoStatus[type+'_'+key] = right;
            TodoStatus[type] = TodoStatus[type] | right;
            TodoStatusMap[right] = type+'_'+key;
        }
    }
}

window['cs'] = window['cs'] || {};
window['cs']['TodoStatus'] = TodoStatus;
window['cs']['TodoStatusMap'] = TodoStatusMap;
if (typeof module == 'object' && typeof module.exports == 'object') {
    module.exports = {
        DataMap: DataMap,
        FSMMap: FSMMap
    };
}

})();