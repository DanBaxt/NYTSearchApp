
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
          'api-key': "7540dab658b44ac19bb3976ee1525f0c",
          'q': "taco"
        });
        
        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
            
          console.log(result);
        }).fail(function(err) {
          throw err;
        });
        
