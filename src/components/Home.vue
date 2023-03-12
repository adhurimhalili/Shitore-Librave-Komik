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

      


  <!-- ne ofrojme section -->
  <div class="container">    

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

        {title: "Dejah Thoris #1",author:"Tom Waltz", 
        image:"https://s3.amazonaws.com/comicgeeks/comics/covers/large-8578060.jpg?1678262040"},

        {title: "BRZRKR #12",author:"Ryan Ottley", 
        image:"https://s3.amazonaws.com/comicgeeks/comics/covers/large-3145372.jpg?1676939585"},
        
        {title: "Nocterra #12" ,author:"Ryan Ottley", 
        image:"https://s3.amazonaws.com/comicgeeks/comics/covers/large-8942038.jpg?1677872351"},
        
        {title: "House of Slaughter #13",author:"Ryan Ottley", 
        image:"https://s3.amazonaws.com/comicgeeks/comics/covers/large-5272878.jpg?1676645835"},
        
      ]
     
    }
  }, 
}
</script>