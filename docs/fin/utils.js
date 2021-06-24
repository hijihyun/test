// utils

function date_descending(a, b) {
  var dateA = new Date(a["date"]).getTime();
  var dateB = new Date(b["date"]).getTime();
  return dateA < dateB ? 1 : -1;
}

export default date_descending;
