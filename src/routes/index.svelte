<script>
  import supabase from "$lib/db";
  import { onMount } from "svelte";
  import Localbase from "localbase";

  let db = new Localbase("db");

  onMount(() => {
    let dostuffbtn = document.getElementById("dostuff");
    dostuffbtn.addEventListener("click", dostuff);
  });

  const users = [];
  function getUsers() {
    db.collection("users")
      .get()
      .then((users) => {
        console.log(users);
      });
  }

  function dostuff() {
    db.collection("users").add({
      id: 1,
      name: "Bill",
      age: 47,
    });
  }

  async function signUp() {
    // Create a new user
    const { user, error } = await supabase.auth.signUp({
      email: "lcharleslaing@gmail.com",
      password: "Yummyme1968@",
    });
    console.log(user, error);
  }
</script>

<div class="container">
  <h1 class="text-center">Home Page</h1>
</div>

<style>
</style>
