<template>
<b-container class="bv-example-row">
  <b-row>
    
    <b-col></b-col>
    <b-col> 
      
      
       <b-form @submit="onSubmit"  v-if="show">
      <b-form-group
        id="input-group-1"
        label="UserName:"
        label-for="input-1"
      
      
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="Username"
          
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2" >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Password"
          
        ></b-form-input>

      </b-form-group  >
      <a href="#" >Quên mật khẩu ?</a>
      <b-form-group class="text-center">
              <b-button @click.prevent="onSubmit" variant="secondary" >Đăng nhập</b-button>&#160;
              <b-button @click.prevent="SignUp" variant="secondary" >Đăng kí</b-button>
      </b-form-group>
    </b-form></b-col>
    
    <b-col></b-col>
  </b-row>
</b-container>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          username:'',
          password:''
        },
        show:true
      }
    },
    methods: {
      onSubmit(evt) {
         evt.preventDefault()
        console.log(JSON.stringify(this.form))
        this.$router.push('/Home');
      },
     
    }
  }
</script>