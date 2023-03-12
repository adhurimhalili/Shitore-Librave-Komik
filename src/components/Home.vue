<template>


 <div>
  
  <div class="bg-prima py-5 mb-5">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-12">          
          <h1 class="display-4 text-white mt-5 mb-2" style="text-shadow: 3px 3px 5px #000000;">Comictorium</h1>
         <p class="lead  text-white" style="text-shadow: 1px 3px 2px #000000;">Rezervoni librin tuaj të dëshiruar përmes internetit nga komoditeti i shtëpisë tuaj.</p>
          <!-- <h3 class="lead pb-2 text-white" style="text-shadow: 2px 3px 2px #000000;">"Një dhomë pa libra është si një trup pa shpirt"<br><pre class="text-white">                                    (Marcus Tallius)</pre></h3> -->
            <br> <br>
        </div>
      </div>
    </div>
  </div>

 
<div class="container">
  <div class="separator">Ne ofrojmë</div><br>
 <div class="row" >
  <div class="col-xs-6 col-md-4 space" >
    <div class="katroriii" >
    <br>
    <h2 class="text-center">📚</h2>
    <h3 class="text-center">Rezervim të thjeshtë</h3>
    <p class="text-center">Përmes këtij sistemi ju mund të bëni rezervimin e librit <br>në mënyrë shumë të thjeshtë dhe efikase.</p>
    <p class="text-center" ><router-link to="/" exact style="text-decoration: none;"> <a class="text-danger" >Read more >></a></router-link></p>
    </div>
    </div>
    <div class="col-xs-6 col-md-4 space" >
    <div class="katroriii" >
    <br>
    <h2 class="text-center">📋</h2>
    <h3 class="text-center">About</h3>
    <p class="text-center">Ne i fuqizojmë shkollat të edukojnë me sukses studentët<br> duke‎ siguruar qasje në burime cilësore akademike.</p>
    <p class="text-center" ><router-link to="/about" exact style="text-decoration: none;"> <a class="text-danger" >Read more >></a></router-link></p>
    </div>
    </div>
  <div class="col-xs-6 col-md-4 space" >
    <div class="katroriii" >
    <br>
    <h2 class="text-center">🤔</h2>
    <h3 class="text-center">Contact</h3>
    <p class="text-center">Për çdo pyetje apo paqartësi rreth platformës sonë mund <br>të ‎‎‎‎‎‎‎kontaktoni me ne përmes email.</p>
    <p class="text-center" ><router-link to="/contact" exact style="text-decoration: none;"> <a class="text-danger" >Read more >></a></router-link></p>
    </div>
    </div>
</div>
    
    <!-- /.row -->
<div class="separator">Lëshimet e Reja</div><br>
  
   <div v-for="(book,index) in books" :key="index" class="section mb-5 card ">
    <h4 class="text-center pt-3 pb-1 text-danger">{{book.title}}</h4>
  <img :src="book.image"  class="img-fluid bigger">
  <hr>
  <h4 class="lead text-center text-primary pb-1">Autori: {{book.author}}</h4>
  </div>
  </div>
  
</div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'GetBooks',
  data () {
    return {
      books: [
        {title: "Predator (2023)", author:"Ed Brisson", 
        image:"https://cdn.marvel.com/u/prod/marvel/i/mg/c/50/63f4e91b3ebc3/clean.jpg"},
        {title: "Hulk #13",author:"Ryan Ottley", 
        image:"https://s3.amazonaws.com/comicgeeks/comics/covers/large-4704020.jpg?1678611099"},
        {title: "The Last Ronin - The Lost Years #2",author:"Tom Waltz", 
        image:"https://s3.amazonaws.com/comicgeeks/comics/covers/large-1951999.jpg?1675126239"}
      ]
     
    }
  }, 
}
</script>