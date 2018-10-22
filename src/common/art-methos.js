//设置百分比
export function setPercent(value) {
  return isNaN(parseFloat(value)) ? "-" : parseFloat(value).toPercent();
}
//设置时间格式
export function setTime(value) {
  if (value.length == 5) {
    value = "0" + value;
  }
  if (value.length >= 6) {
    return (
      value.substring(0, 2) +
      ":" +
      value.substring(2, 4) +
      ":" +
      value.substring(4, 6)
    );
  }
}

// 格式化日期为M月D日
export function formatDateToMD(value) {
  var dateString = value.toFormatDateText();
  var dateArray = dateString.split("-");
  var result = parseInt(dateArray[1]) + "月" + parseInt(dateArray[2]) + "日";
  return result;
}
//将年月日格式化为XXXX/XX/XX
export function formatDateToYMD(value) {
  return (
    value.substr(0, 4) + "/" + value.substr(4, 2) + "/" + value.substr(6, 2)
  );
}
//将年月日格式化为XX-XX-XX
export function formatDateToNewYMD(value) {
  value = value + "";
  return value.substring(4, 6) + "-" + value.substring(6, 8);
}
//将时分秒格式化为XX-XX-XX
export function formatDateToHour(value) {
  value = value + "";
  if (value.length <= 5) {
    value = "0" + value;
  }
  return value.substring(0, 2) + ":" + value.substring(2, 4);
}
// 格式化日期为(M.D-M.D)
export function formatDate(value) {
  var dateString = value.toFormatDateText();
  var dateArray = dateString.split("-");
  var result = parseInt(dateArray[1]) + "." + parseInt(dateArray[2]);
  return result;
}

//日期相差天数
export function GetDateSpan(beginDate, endDate) {
  beginDate = formatDateToYMD(beginDate); //报名开始时间
  endDate = formatDateToYMD(endDate); //报名开始时间
  var sArr = beginDate.split("/");
  var eArr = endDate.split("/");
  var sRDate = new Date(sArr[0], sArr[1], sArr[2]);
  var eRDate = new Date(eArr[0], eArr[1], eArr[2]);
  return (sRDate - eRDate) / (24 * 60 * 60 * 1000);
}
/**
 * decodeURIComponent解码
 */
export function decodeContent(value) {
  return decodeURIComponent(value);
}

/** 获取文字中的数字**/
export function getNumber(param) {
  let reg = /\d+/g;
  return param.match(reg).join("");
}
