let bulbimg = document.getElementById('bulbimg')
let audio = document.getElementById("playaudio")

function BulbOn()
{
    bulbimg.setAttribute("src","Images/on.jpg")

    audio.setAttribute("src","audio/on.mp3")
    audio.play()
}

function BulbOff()
{
    bulbimg.setAttribute("src","Images/off.jpg")
    
    audio.setAttribute("src","audio/off.mp3")
    audio.play()
}
