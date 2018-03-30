<template>
  <div id="show-blog" v-theme="'wide'">
    <h3>博客总览</h3>
    <input type="text" placeholder="搜索" v-model="search">
    <div v-for="blog in fliterBlogs" class="single-blog" >
        <!-- {{blog}} -->
        <router-link v-bind:to="'/blog/'+blog.id"> 
            <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
        </router-link>
        <article>
            {{blog.body | snippet}}
        </article>
    </div>
  </div>
</template>

<script>
//定义自己的指令
export default {
  name: 'show-blog',
  data(){
      return{
          blogs:[],
          search:""
      }
  },
  created(){
      this.$http.get('../../static/posts.json')
            .then(function(data){
                console.log(data);
                this.blogs=data.body.slice(0,10);
                // console.log(this.blogs);
            })
  },
  computed:{
      fliterBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search)
          })
      }
  },
  //自定义过滤器
  filters:{
    //   "to-uppercase":function(value){
    //         return value.toUpperCase()
    //   },
      toUppercase(value){
          return value.toUpperCase();
      },
      snippet(value){
          return value.slice(0,100)+"...";
      }
  },
  //自定义指令
//   directives:{
//       "rainbow":{
//           bind(el,binding,vnode){
//               return el.style.background="red"
//           }
         
          
//       }
//   }

}
</script>

<style>
    #show-blog{
        max-width:800px;
        margin:0 auto;
    }
    .single-blog{
        padding:20px;
        margin:20px 0;
        box-sizing:border-box;
        background-color: #eee;
        border:1px dotted #aaa;
    }
    #show-blog a{
        color:#444;
        text-decoration: none;
    }
    input[type='text']{
        padding:8px;
        width:100%;
        box-sizing: border-box;
    }
</style>