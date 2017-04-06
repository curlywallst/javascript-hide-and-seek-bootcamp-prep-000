function getFirstSelector(selector){
  const firstElement = document.querySelector(selector)
  return firstElement
}

function nestedTarget(nested, target){
  const element = document.querySelector("#nested, target")
  return element
}

function increaseRankBy(n) {
  var element = 'ul.ranked-list li'
  const lis = document.getElementById('app').querySelectorAll(element)
  for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
  return lis;
}

function deepestChild(){
  var element = 'div, #grand-node'
  var nextElement = 'div, #grand-node, div'
  var children = document.getElementById('app').querySelectorAll(element)
  if (children.length > 0) {
    element = nextElement + ', div';
    nextElement = nextElement + ', div';
    children = document.getElementById('app').querySelectorAll(nextElement);
  }
  children = document.getElementById('app').querySelector(element);
  return children
}
