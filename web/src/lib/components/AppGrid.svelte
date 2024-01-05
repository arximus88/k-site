<!-- src/lib/components/AppGrid.svelte -->
<script>
    export let apps = []; // Array of app objects
  </script>
  
  <div class="app-grid">
    {#each apps as app}
      <div class="app-icon">
        {app.icon}
        <div class="app-title">{app.title}</div>
      </div>
    {/each}
  </div>
  
  <style>
    .app-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 10px;
      padding: 20px;
    }
  
    .app-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
    .app-title {
      font-size: 16px;
      margin-top: 4px;
    }
  </style>
  