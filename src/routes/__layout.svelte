<script>
  import "../app.css";
  import supabase from "$lib/db";
  import { session } from "$app/stores";
  import { browser } from "$app/env";
  import { goto } from "$app/navigation";
  import Navbar2 from "../components/Navbar2.svelte";

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

<Navbar2 />
<div class="bg-gray-200 h-screen">
  <slot />
</div>

<style>
</style>
