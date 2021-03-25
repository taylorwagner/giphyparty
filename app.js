const $giphyLocation = $('#giphyLocation');
const $search = $('#search');

function addGiphy(res){
    let num = res.data.length;
    if(num){
        let randomIdx = Math.floor(Math.random() * num);
        let $newDiv = $("<div>");
        let $giphy = $("<img>", {
            src: res.data[randomIdx].images.original.url
        });
        $newDiv.append($giphy);
        $giphyLocation.append($newDiv);
    }
}


$('#giphys').on('submit', async function(e){
    e.preventDefault();

    let search = $search.val();
    $search.val("");

    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: search, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    addGiphy(res.data);
});


$('#remove').on('click', function(){
    $giphyLocation.empty();
})