function openPlayerConfig(event){
    playerConfigOverlayElement.style.display='block';
    backDropElement.style.display = "block";
    editedPlayer =+event.target.dataset.playerid;
}
function closePlayerConfig(){
    playerConfigOverlayElement.style.display='none';
    backDropElement.style.display='none';
    formElement.firstElementChild.classList.remove("error");
    errorOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value='';
}
function savePlayerconfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName=formData.get('player-name').trim();
    if(!enteredPlayerName||enteredPlayerName===''){
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent='Please enter valid name'
        return;
    }
    const updatedPlayerDataElement=document.getElementById('player-'+editedPlayer+'-data');
    updatedPlayerDataElement.children[1].textContent=enteredPlayerName;
    players[editedPlayer-1].name=enteredPlayerName;
    closePlayerConfig();
}