// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)
function getLength(pt1x, pt1y, pt2x, pt2y) {
  let x = pt2x - pt1x;
  let num1 = Math.pow(x, 2);
  let y = pt2y - pt1y;
  let num2 = Math.pow(y, 2);
  let length = Math.sqrt(num1 + num2);

  return length.toFixed(2);
}

function getSlope(pt1x, pt1y, pt2x, pt2y) {
  let rise = pt2y - pt1y;
  let run = pt2x - pt1x;
  let slope = rise / run;
  return slope.toFixed(2);
}

function getDescription(pt1x, pt1y, pt2x, pt2y) {
  let mySlope = getSlope(pt1x, pt1y, pt2x, pt2y);
  if (pt1x == pt2x) {
    return "vertical";
  } else if (pt1y == pt2y) {
    return "horizontal";
  } else if (Math.sign(mySlope) > 0) {
    return "increasing";
  } else if (Math.sign(mySlope) < 0) {
    return "decreasing";
  }
}

// variable scope:  local { } vs global variables (exist everywhere)
//

//point 1
function getPointLocation(pt1x, pt1y) {
  if (pt1x == 0 && pt1y == 0) {
    return `origin (${pt1x} , ${pt1y})`;
  } else if (Math.sign(pt1x) > 0 && Math.sign(pt1y) > 0) {
    return `quadrant 1 (${pt1x} , ${pt1y})`;
  } else if (Math.sign(pt1x) < 0 && Math.sign(pt1y) > 0) {
    return `quadrant 2 (${pt1x} , ${pt1y})`;
  } else if (Math.sign(pt1x) < 0 && Math.sign(pt1y) < 0) {
    return `quadrant 3 (${pt1x} , ${pt1y})`;
  } else if (Math.sign(pt1x) > 0 && Math.sign(pt1y) < 0) {
    return `quadrant 4 (${pt1x} , ${pt1y})`;
  }
}

//point2
getPointLocation(pt2x, pt2y);

function getPointSlope(pt1x, pt2x, pt1y, pt2y) {
  let m = getSlope(pt1x, pt1y, pt2x, pt2y);
  if (pt1y < 0 && pt1x < 0) {
    let y1 = pt1y - pt1y * 2;
    let x1 = pt1x - pt1x * 2;
    return `y - ${y1} = ${m}(x - ${x1})`;
  } else if (pt1y < 0 && pt1x > 0) {
    let y1 = pt1y - pt1y * 2;
    return `y + ${y1} = ${m}(x - ${pt1x})`;
  } else if (pt1y > 0 && pt1x < 0) {
    let x1 = pt1x - pt1x * 2;
    return `y - ${pt1y} = ${m}(x + ${x1})`;
  } else {
    return `y - ${pt1y} = ${m}(x - ${pt1x})`;
  }
}

function getEquation(pt1x, pt1y, pt2x, pt2y) {
  let m = getSlope(pt1x, pt1y, pt2x, pt2y);
  let b = (pt1y = m * pt1x);
  if (b < 0) {
    let b2 = b - b * 2;
    return `y = ${m}x + ${b2}`;
  } else if (b > 0) {
    return `y = ${m}x - ${b}`;
  }
}
