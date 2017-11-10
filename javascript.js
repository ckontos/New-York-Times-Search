var searchString; //put search terms
var beginDate;
var endDate;
var numResults;

$(".btn").on("click", function() {
    $("#resultDisplay").text('');
    searchString = $("#searchTerm").val();
    endDate = $("#endYear").val();
    beginDate = $("#beginYear").val();
    numResults = $("#articleNumber").val();
    console.log($("#endYear").val());
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "4b744e35625842f5bd6a82944c6ee7b3",
        'q': '' + searchString + '',
        'end_date': (endDate + "0101"),
        'begin_date': (beginDate + "0101")
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).
    done(function(result) {
        var data = result.response.docs;
        console.log(data);
        //console.log(data.docs);
        console.log(data)
        //$("#resultDisplay").append(data[0].headline);
        for (var i = 0; i < numResults; i++) {
            var artDiv = $("<div>");
            var h2 = $("<h2>").text(data[i].headline.main);
            var a = $("<a>").text(data[i].web_url);
            a.attr('href', data[i].web_url);
            artDiv.append(h2);
            artDiv.append(a);
            $("#resultDisplay").append(artDiv);

        }
    });
})
