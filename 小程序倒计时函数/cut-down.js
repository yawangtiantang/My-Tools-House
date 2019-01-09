/** 
 * 需要一个目标日期，初始化时，先得出到当前时间还有剩余多少秒
 * 1.将秒数换成格式化输出为XX天XX小时XX分钟XX秒 XX
 * 2.提供一个时钟，每1s运行一次，渲染时钟，再总s数自减1
 * 3.剩余的秒次为零时，return，给出tips提示说，已经截止
 */

// 定义一个总毫秒数，以一分钟为例。TODO，传入一个时间点，转换成总毫秒数
// var total_micro_second = 70 * 60 * 1000;
var total_second = 70 * 60;
/* 秒级倒计时 */
function count_down(that) {
  // 渲染倒计时时钟
  that.setData({
    clock: date_format(total_second)
  });

  if (total_second <= 0) {
    that.setData({
      clock: "已经截止"
    });
    // timeout则跳出
    return;
  }
  setTimeout(function () {
    // 放在最后--
    total_second -= 1;
    count_down(that);
  }, 1000)
}

// 时间格式化输出，每1s都会调用一次
function date_format(second) {

  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60));

  return hr + "小时" + min + "分" + sec + "秒";
}

// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}

