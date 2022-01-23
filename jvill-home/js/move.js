

$(document).ready(function() {
    $('.add').click(function() {
        $(this).before(
            '<div class="itin-lists" id="container"><hr><div class="itinerary-detail col-md-9"><div class="days"><h3>Day 1</h3></div><div class="title"><h5>Title</h5><input type="text" name=""></div><div class="description"><h5>Description</h5><textarea rows="3" cols="100"></textarea></div></div><div class="action col-md-3"><span class="input-group-btn"><button id="btn0" type="button" class="btn btn-danger"><span id="icon0" class="glyphicon glyphicon-minus"></span></button></span></div></div>');
    });

    
    $(document).on('click','.action',function() {
        $(this).parent('div').remove();

    });
});