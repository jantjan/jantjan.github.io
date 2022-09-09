class Header extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
      <style>
        header {
        font-family: 'Courier New', Courier, monospace;
        
        width: 98%;
        padding: 10px 10px 10px 10px;   
        }

        label:hover, input:checked ~ label{background:yellow;padding: 5 5 5 5;}
        label{ 
          
          cursor:pointer;
        }
        
        ul.submenu{
            font-family: 'Courier New', Courier, monospace; font-size: 12px;
            max-height:0;
            padding:0;
            overflow:hidden;
            list-style-type:none;
            background:#f2f2f2;
            center: 5;
            transition:max-height 0.5s ease-out;
            position:absolute;
            white-space:wrap;
            min-width:10%;
             
        }
        ul.submenu li a{
            display:block;
            padding:08px;
            background:#f1f1f1;
            color:black;
            text-decoration:none;
            transition:background .3s;
            white-space:wrap;

        }
        ul.submenu li a:hover{
            background:yellow;
        }
        
        input{display:none}
    
        input:checked ~ ul.submenu{
          max-height:300px;
          transition:max-height 0.5s ease-in;
        }

        
     
        nav{
          font-family: 'Courier New', Courier, monospace;
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
            width: 98%;
            z-index: 1
        }
        
        .footer-content-right {
            padding-right:5px;
            margin-top:10px;
            float:right;
          }

          .footer-content-left {
            padding-left:5px;
            margin-top:10px;
            float:left;
            justify-content: left;
            background-color: rgb(0,0,0,0);
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
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54XJFPM"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->
      
        <nav>
            <ul >
                <li class="menu"> <a href="https://jantjan.github.io/experience.html"> About </a></li>
                <li class="drop_menu">
                <input id="check01" type="checkbox" name="drop_menu"/>
                <label for="check01">Portfolio</label>

                  <ul class="submenu">
                    <li><a href="https://jantjan.github.io/portfolio.html"> Product Design </a> </li>
                    <li><a href="https://jantjan.github.io/portfolio.html"> Visual Design </a></li>
                  </ul>
                
                </li>
                <li class="menu"> <a href="https://jtjan.me"> Home </a></li>
            </ul>
        </nav>
    </header>

    <footer class="footer-content-right">
        <a href="https://github.com/jantjan" target="_blank"><img src="assets/github_symbol.png" class="icon-style" alt="Github icon"></a>
        <a href="https://www.youtube.com/channel/UCqiFnOFhlF2U64tgvXpUS0w" target="_blank"><img src="assets/yt_symbol.png" class="icon-style" alt="Twitter icon"></a>
        <a href="mailto:tjan.janice@gmail.com" target="_blank"><img src="assets/email_symbol.png" class="icon-style" alt="Emailicon"></a>
    </footer>

    <footer class="footer-content-left">
    © by Janice Tjan <script type="text/javascript"> document.write(new Date().getFullYear()); </script> 
    </footer>
    
    
    `;
  }

} 
customElements.define('header-component', Header);