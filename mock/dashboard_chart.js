function chart(req) {
  let res = null;
  switch (req.method) {
    case "GET":
      res = [100, 40, 78, 10, 30, 48];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;