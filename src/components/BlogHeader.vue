<template>
  <nav>
      <ul>
          <li>
              <router-link to="/" exact>博客</router-link>
              <router-link to="/add" exact>写博客</router-link>
          </li>
      </ul>
  </nav>
</template>
<script>
    export default{
        name:"blog-header"
    }
</script>
<style>
    ul{
        list-style: none;
        text-align:center;
        margin:0;
    }
    li{
        display:inline-block;
        margin:0 10px;
    }
    a{
       color:#fff;
       text-decoration: none;
       padding:12px;
       border-radius:5px;
    }
    nav{
        background-color: crimson;
        padding:30px 0;
        margin-bottom:40px;
    }
    /* vue自带的class样式 */
    .router-link-active{
        background-color: rgba(255,255,255,0.8);
        color:#555;
    }

</style>
