


// ready the document
$(document).ready(function(){

//on click prevent default
//on click of readmore, hide readmore using .hide(), show readless using .show()
//on click of readmore, slide down the hidden p using .slideDown()
//on click of readless, hide readless using .hide(), show readmore using .show()
//on click of readless, .slide up the hidden p using .slideUp()


//*********** Script for Multiple pages *************
	$('.readmore, .readless').click(function(event){
        event.preventDefault();

    });

    $('.readmore').click(function(){

        $(this).siblings('.hide').slideDown();
        $(this).hide();

   });

    $('.readless').click(function(){

        $(this).siblings('.hide').slideUp();
        $(this).siblings('.readmore').show();
        $(this).hide();

    });

    $('#nav-toggle').click(function(){
        $('#headernav').slideToggle();
    });

//*********** Sources and Suggestions page *********
    //var total = 0;

    $('#commentform').submit(function(){
        event.preventDefault();

        var note = $('#comment').val();
            
        //var note = dollars(inputValue);

        //total = total + inputValue;
            
        //$('#total').text(dollars(total));
        $('#entries').append('<tr>')
        $('#entries').append(`<tr><td colspan="2">{note}</tr>`);
        $('#comment').val('');

    });

//*********** Script to look at after project completion ******
   

//<label for="email" class="required">Your email;</label>
//            <input type="email" name="email" id="email" value="" tabindex="2" required="required">





//    $("#form").submit(function(e){
 //       event.preventDefault();
//
//        var data = {};
 //       data.name = $("#comment_author").val();
//        data.email = $("#email").val();
 //       data.comment = $("#comment").val();
//        
//        var url = "";
//        $.POST(url, data)
//        .done(function(response){
//           
 //           $("#comment").append(response);
 //       });
 //       
 //   });

});