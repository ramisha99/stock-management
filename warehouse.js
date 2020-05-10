var stock = [{item:"CB",amt:4,action:"in"},
             {item:"PO",amt:6,action:"in"},
             {item:"LT",amt:4,action:"in"},
             {item:"PO",amt:3,action:"in"},
             {item:"ON",amt:2,action:"in"},
             {item:"TM",amt:3,action:"in"},
             {item:"TM",amt:6,action:"in"},
             {item:"CB",amt:2,action:"out"},
             {item:"ON",amt:1,action:"out"},
             {item:"PO",amt:2,action:"out"},
             {item:"LT",amt:4,action:"in"},
             {item:"TM",amt:3,action:"out"},
             {item:"LT",amt:2,action:"out"},
             {item:"TM",amt:4,action:"out"},
             {item:"PO",amt:4,action:"in"}];

$(document).ready(setUp);

function setUp() {
  showStock();
  $('select#product').change(showStock);
  $('button#in').click(inHandler);
  $('button#out').click(outHandler);
}

function showStock() {
  var a = $('#product').val();
  var stockCount = countStock(a);

  $('#stock').text(stockCount);
}

function inHandler() {
  var amountText = $('#amount').val();
  var amount = Number.parseInt(amountText);
  var a = $('#product').val();
  var newStock = {item: a, amt: amount, action: "in"};

  stock.push(newStock);
  showStock();
}

function outHandler() {
  var amountText = $('#amount').val();
  var amount = Number.parseInt(amountText);
  var a = $('#product').val();
  var newStock = {item: a, amt: amount, action: "out"};
  var stockCount = countStock(a);

  if (amount > stockCount) alert('Insufficient stock');
  else {
    stock.push(newStock);
    showStock();
  }
}

function countStock(item) {
  var count = 0;
  var n = 0;

  while (n < stock.length) {
    if (item == stock[n].item) {
      if (stock[n].action == "in") count = count + stock[n].amt;
      else if (stock[n].action == "out") count = count - stock[n].amt;
    }
    n = n + 1;
  }

  return count;
}
