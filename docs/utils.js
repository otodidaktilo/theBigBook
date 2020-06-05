$(document).ready(function(){

    let menu = `<div class="title-area">
    <h1 id="site-title"><a href=".">EzgiAteş</a></h1>
    <div class="hamburger-menu">
        <div class="patty"></div>
        <div class="patty"></div>
        <div class="patty"></div>
    </div>
</div>

<nav class="main-nav">
    <div class="nav-section">
    <a href="/theBigBook/docs/About/about.html">About</a>
    </div>
    <div class="nav-section">
        <h2>Digital</h2>
        <a href="/theBigBook/docs/machineLearning.html">StyleGAN2</a>
        <a href="/theBigBook/docs/coding.html">Coding</a>
        <a href="/theBigBook/docs/Prints/mayhem-digital.html">Mayhem</a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
    </div>

    <div class="nav-section">
        <h2>2D</h2>
        <a href="/theBigBook/docs/Paintings/portraits.html">Portraits</a>
        <a href="/theBigBook/docs/Prints/searchingForLove.html">Searching for Love</a>
        <a href="/theBigBook/docs/Prints/mayhem.html">Mayhem</a>
        <a href="/theBigBook/docs/sheepGreen.html">Sheep Green</a>
        <a href="/theBigBook/docs/loveItHateIt.html">Love It Hate It</a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
    </div>

    <div class="nav-section">
        <h2></h2>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
    </div>

    <div class="nav-section">
        <h2>Archive</h2>
        <a href="/theBigBook/docs/painting.html">Painting</a>
        <a href="/theBigBook/docs/drawings.html">Drawing</a>
        <a href="/theBigBook/docs/prints.html">Printmedia</a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
    </div>
</nav>`

$(".side-bar").html(menu);

});