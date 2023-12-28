<!-- src/lib/components/Folder.svelte -->
<script>
    export let folderContent = []; // Array of app objects inside the folder
    let isOpen = false;
  
    function toggleFolder() {
      isOpen = !isOpen;
    }
  </script>
  
  <div class="folder" on:click={toggleFolder}>
    {#if isOpen}
      <!-- Render the apps inside the folder -->
      {#each folderContent as app}
        <div class="app-icon">
          {app.icon}
          <div class="app-title">{app.title}</div>
        </div>
      {/each}
    {/if}
  </div>
  
  <style>
    .folder {
      /* Styling for the folder component */
    }
  
    .app-icon {
      /* Styling for the app icons inside the folder */
    }
  
    .app-title {
      /* Styling for the app titles inside the folder */
    }
  </style>
  