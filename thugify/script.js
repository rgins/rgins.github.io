document.getElementById('go').onclick = function() {
    var inputText = document.getElementById('#text-input').val();
    var thugifiedText = inputText + ", dawg";
    document.getElementById('output').innerHTML = thugifiedText;
};