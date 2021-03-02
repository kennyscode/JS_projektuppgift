function searchSong(song) {
    let key = "lägg in en key här";
    var cattractionBox = document.getElementsByClassName("AttractionInfoBox");
    if (cattractionBox.length > 0) {
        Array.from(document.getElementsByClassName("AttractionInfoBox")).forEach(
            function(element, index, array) {
                element.remove();
            }
        );
    }