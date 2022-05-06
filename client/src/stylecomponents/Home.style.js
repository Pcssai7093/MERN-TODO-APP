import { createGlobalStyle} from "styled-components";

export const Homestyles=createGlobalStyle`
   
   .home_content{
       text-align:center;
       /* color:pink; */
   }

   .task_body{
       text-align:center;
       border:2px solid black;
       padding:30px;
       margin:20px;
   }

      
   .task_body button,button{
       border:none;
       color:white;
       background-color: cornflowerblue;
       padding:5px;
       cursor: pointer;
       font-weight: 600;
       border-radius:99px;
   }

   a{
       text-decoration: none;
       color:red;
       font-weight:500;
   }
   
`