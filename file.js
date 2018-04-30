var remove = document.querySelectorAll("[data-event-action=delete]")
for (var i = 0; remove.length > i; i++){
remove[i].click()
}
var yes = document.querySelectorAll('.active > [onclick=\'change_state(this, "del", hide_thing, undefined, null)\'][class=yes]')
setInterval(del, 400);
var x = 0;
function del (){
if (x < yes.length) {
yes[x].click()
x++;
}
}
