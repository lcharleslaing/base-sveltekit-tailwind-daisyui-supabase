<script>
  import "../app.css";
  import supabase from "$lib/db";
  import { session } from "$app/stores";
  import { browser } from "$app/env";
  import { goto } from "$app/navigation";

  if (browser) {
    $session = supabase.auth.session();
    supabase.auth.onAuthStateChange((event, authsession) => {
      $session = authsession;
    });
  }

  async function signOut() {
    const { user, session: authsession, error } = await supabase.auth.signOut();
    if (error) alert(error.message);
    $session = authsession;
    goto("/signin");
  }
</script>

<!-- <div class="text-center m-12">
  <a href="/" class="btn btn-primary">Index</a>
  <a href="/open" class="btn btn-primary">Open</a>
  <a href="/signin" class="btn btn-primary">Sign In</a>
  <a href="/signup" class="btn btn-primary">Sign Up</a>
  <a href="/open" class="btn btn-primary">Redirect</a>
  <button on:click={signOut} class="btn btn-primary">Logout</button>
</div> -->
<slot />
