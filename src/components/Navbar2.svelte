<script>
  import Menu from "./Menu.svelte";
</script>

<div class="navbar justify-evenly shadow-xl">
  <Menu />
  <div class="logo-brand">
    <div class="logo">
      <img src="b2t-logo.svg" alt="" class="" />
    </div>
    <div class="brand">BIG2TINY</div>
  </div>
  <div class="flex items-center">
    <a href="." class="link">Home</a>
    <a href="/about" class="link">About</a>
    <a href="/portfolio" class="link">Portfolio</a>
    <a href="/contact" class="link">Contact</a>
  </div>
  <Menu />
</div>
