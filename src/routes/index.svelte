<script>
   import supabase from "$lib/db";

   async function signUp(){
       // Create a new user
       const { user, error } = await supabase.auth.signUp({
           email: 'lcharleslaing@gmail.com',
           password: 'Yummyme1968@',
       })
       console.log(user, error)
   }
</script>
