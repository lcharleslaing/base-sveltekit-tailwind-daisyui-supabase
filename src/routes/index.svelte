<script>
  import supabase from "$lib/db";

  async function signUp() {
    // Create a new user
    const { user, error } = await supabase.auth.signUp({
      email: "lcharleslaing@gmail.com",
      password: "Yummyme1968@",
    });
    console.log(user, error);
  }
</script>

<div class="text-center mt-12">
  <div class="text-4xl  text-green-400">INDEX PAGE</div>
  <div class="text-4xl  text-green-400">You are Signed In!</div>
</div>
