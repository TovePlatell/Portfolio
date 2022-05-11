class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
    
       ` <nav>
       <a href="/"> <img class="logo" src="images/logo-white.png" alt="tove
           platell logo" /> </a>

       <ul id="nav-list">
           <li> <a href="#about-me">About me</li>
               <li href="#projects"><a href="#projects">Projects</a></li>
               <li href="#services"><a href="services.html">Services</a></li>
               <div class="dropdown">
                   <li href="#school">
                       <a class="dropBtn" href="schoolprojects">School
                           projects</a>
                       <i class="fas fa-caret-down"></i></li>
                   <div class="drop-content">
                       <li>
                           <a href="schoolprojects">Unsplash API</a>
                       </li>
                       <li>
                           <a href="news-site">News API</a>
                       </li>
                   </div>

               </div>
               <li href="#contact-me"><a href="#contact-me">Contact</a></li>
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