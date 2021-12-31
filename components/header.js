class Header extends HTMLElement {
    constructor() {
      super();
    }
  

  
  
  connectedCallback() {
    this.innerHTML = `
      <style>
      
        header {
            width: 99%;
            padding: 10px 10px 10px 10px;   
        }
     
        nav{
            float:right;
            width: 100%;
            padding: 10px 10px 10px 10px;     
        }

        ul {
            list-style: none; 
        }

        li {
            display: inline-block;
            background-color:rgb(255, 255, 255);
            width: 100px;
            text-align: center;
            float: right;
            margin: 10px;
            }
        

        a:link{
            text-decoration: none;
            color: rgb(0, 0, 0);
            font-weight: 700;
        }
    
        a:visited {
            color: rgb(199, 199, 199);
        }
    
        a:hover {
            background-color:yellow;
            padding: 5 5 5 5;
        }
        
        footer {
    
            background-color: #ffffff;
            bottom: 0;
            color: #d6d6d6;
            display: flex;
            justify-content: right;
            position: fixed;
            width: 99%;
            z-index: 1
        }
        
        .footer-content-right {
            padding-right:5px;
            margin-top:20px;
            float:right;
          }
          
          .icon-style {
            height:40px;
            margin-left:10px;
            margin-right: 10px;
            margin-top:5px;
            padding: 1 1 1 1;
          }
          
          .icon-style:hover {
            background-color:yellow;
            
          }
         

      </style>

      <header>  
        <nav>
            <ul >
                <li class="menu"> <a href="https://jantjan.github.io/portfolio.html"> Portfolio </a></li>
                <li class="menu"> <a href="https://jantjan.github.io/experience.html"> Experience </a></li>
                <li class="menu"> <a href="index.html"> Home </a></li>
            </ul>
        </nav>
    </header>

    <footer class="footer-content-right">
        <a href="https://github.com/jantjan" target="_blank"><img src="assets/github_symbol.png" class="icon-style" alt="Github icon"></a>
        <a href="https://www.instagram.com/by_jtjan/" target="_blank"><img src="assets/insta_symbol.png" class="icon-style" alt="Twitter icon"></a>
        <a href="mailto:tjan.janice@gmail.com" target="_blank"><img src="assets/email_symbol.png" class="icon-style" alt="Emailicon"></a>
    </footer>

    `;
  }

} 
customElements.define('header-component', Header);