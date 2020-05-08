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
    <a href="#">About</a>
    </div>
    <div class="nav-section">
        <h2>Digital</h2>
        <a href="machineLearning.html">Machine Learning</a>
        <a href="#">Coding</a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
    </div>

    <div class="nav-section">
        <h2>Painting</h2>
        <a href="#">Fantastic Project</a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
    </div>

    <div class="nav-section">
        <h2>Printmedia</h2>
        <a href="#">Risograph</a>
        <a href="#">Etching</a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
    </div>

    <div class="nav-section">
        <h2>Drawings</h2>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
    </div>
</nav>`

$(".side-bar").html(menu);

});