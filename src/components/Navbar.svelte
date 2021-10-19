<script>
  import AboutIcon from "../components/AboutIcon.svelte";
  import HomeIcon from "../components/HomeIcon.svelte";
  import ContactIcon from "../components/ContactIcon.svelte";

  // Grab button and sidebar
  const btn = document.querySelector(".left-menu-btn");
  const leftMenu = document.querySelector(".left-menu");
  // Add eventlistener
  btn.addEventListener("click", () => {
    leftMenu.classList.toggle("-translate-x-full");
  });
</script>

<div class="sticky navbar shadow-lg bg-neutral text-neutral-content">
  <div class="flex-none" />
  <div class="flex-1 px-2 mx-2">
    <span>
      <img src="b2t-logo.svg" alt="" class="bg-white rounded-md w-10 h-10" />
    </span>
    <span class="ml-2 text-lg font-bold">BIG2TINY</span>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block w-6 h-6 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    </button>
  </div>
</div>

<div class="flex relative min-h-screen m-0">
  <!-- Sidebar -->
  <div
    class="left-menu bg-gray-300 text-gray-900 w-64 space-y-6 px-4 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out"
  >
    <!-- Logo/Title -->
    <a href="/" class="text-white flex items-center space-x-2">
      <img
        src="b2t-logo.svg"
        alt=""
        class="bg-white w-10 h-10 m-1 bg-gray-300 rounded-md"
      />
      <span class="text-gray-900 text-2xl font-extrabold">BIG2TINY</span>
    </a>

    <!-- Navbar Links -->
    <nav>
      <a
        href="/"
        class="block py-2.5 px-2 flex items-center space-x-2 hover:bg-white rounded-lg transition duration-200"
      >
        <HomeIcon />
        <span class="mx-2">Home</span>
      </a>
      <a
        href="/"
        class="block py-2.5 px-2 flex items-center space-x-2 hover:bg-white rounded-lg transition duration-200"
      >
        <AboutIcon />
        <span class="mx-2">About</span>
      </a>
      <a
        href="/"
        class="block py-2.5 px-2 flex items-center space-x-2 hover:bg-white rounded-lg transition duration-200"
      >
        <ContactIcon />
        <span>Contact</span>
      </a>
    </nav>
  </div>
  <div class="flex-1 p-10 text-2xl font-bold">
    <!-- Content -->
  </div>
</div>

<style>
</style>
