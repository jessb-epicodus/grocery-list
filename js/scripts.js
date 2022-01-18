$(document).ready(function() {
  $("#groceryList").submit(function(event) {
    event.preventDefault();
    let item1 = $("#item1").val();
    let item2 = $("#item2").val();
    let item3 = $("#item3").val();
    let item4 = $("#item4").val();
    let item5 = $("#item5").val();

    const inputArr = [item1, item2, item3, item4, item5].sort();

    let i=0;
    inputArr.forEach(function(element) {
      i ++;
      let newItem = element.toUpperCase();
      $(".list").append("<li>"+newItem+"</li>")
    });
    $("#list").show();
  });
});
