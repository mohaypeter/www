$(function(){
    $('#nyomj').click(()=>{
        $('#nyomj').css('color','white');
        $('#ideirj').remove;
        $('#ideirj').append('Igen most rám kattintottál!');
    })

    $('#szinvalto').click(()=>{
        $('#nyomj').css('color','yellow');
    })


    

})