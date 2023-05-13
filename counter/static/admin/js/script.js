var count = parseInt(getCookieValue("count"));

if (isNaN(count)) {
  count = 0;
}

document.getElementById("counter").innerHTML = count;

function incrementCount() {
  count++;
  document.cookie = "count=" + count + ";expires=Thu, 12 May 2023 12:00:00 UTC";
  document.getElementById("counter").innerHTML = count;
}

function decrementCount() {
    count--;
    document.cookie = "count=" + count + ";expires=Thu, 12 May 2023 12:00:00 UTC";
    document.getElementById("counter").innerHTML = count;
}

function getCookieValue(name) {
  var cookies = document.cookie.split('; ');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return decodeURIComponent(cookie[1]);
    }
  }
  return null;
}
