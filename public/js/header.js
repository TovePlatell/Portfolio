class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
    
       `  <nav>
       <a href="/"> <img class="logo" src="images/logo-white.png" alt="tove
  platell logo"> 
</a>


<ul id="nav-list">
   <li><a href="#about-me">About me</a></li>
   <li><a href="#projects">About</a></li>
   <li>
       <a href="#">SchoolProjects &#9662;</a>
       <ul class="dropdown">
           <li><a href="schoolprojects">Unsplash API</a></li>
           <li><a href="news-site">News Site API</a></li>
           <li><a href="#">Content</a></li>
       </ul>
   </li>
   <li><a href="#contact-me">Contact</a></li>
</ul>

           <button class="hamburger" id="hamburger">
               <i class="fa-solid fa-bars"></i>
           </button>
</nav>
       `

 
    }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
`
<footer id="contact-me">
<div class="footer-content" id="footer-content">    

    <p class="footer-info"><a href="mailto:toveplatell@gmail.com">Contact me</a></p>

<div class="footer-bottom">
    <p class="footer-text">copyright &copy;2020 <span>Tove Platell</span></p>

 </div>

</div>
</footer> 
`

    }
}

customElements.define('my-footer', MyFooter);