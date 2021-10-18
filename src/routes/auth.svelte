<script>
  import supabase from "$lib/db";
  import { goto } from "$app/navigation";

  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
    console.log(user, session);
    goto("/");
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    goto("/signin");
  }
</script>

<div class="auth-page">
  <div class="grid gap-4">
    <a href="/signup" class="btn bg-blue-900">Sign In with Email</a>
    <button on:click={signInWithGoogle} class="btn bg-green-900"
      >Sign In with Google</button
    >
    <button on:click={signout} class="btn bg-red-900">Sign Out</button>
  </div>
</div>
