$('#searchInput').on('input', function(){
    let searchValue = $('#searchInput').val().toLowerCase(); // Convert to lower case for case-insensitive comparison

// Iterate over each row in the table
$('#table tr').each(function() {
    // For each row, check if any of its cells' text includes the searchValue
    //let rowText = $(this).text().toLowerCase(); // Get all text content of the row and convert to lower case
    let matchesSearch = $(this).text().includes(searchValue); 

   
    $(this).toggle(matchesSearch);
});
})
