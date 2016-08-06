var myClientId = "*****PUT YOUR SOUND CLOUD ID HERE****";

function initSC() : void {
    // init SoundCloud
    SC.initialize({
        client_id: myClientId
    });
}