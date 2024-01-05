<!-- src/lib/components/AppShortcut.svelte -->
<script>
	export let icon; // path to the icon image
	export let title; // text title for the shortcut
  </script>
  
  <div class="app-shortcut">
	<div class="icon" style="background-image: url({icon});"></div>
	<div class="title">{title}</div>
  </div>
  
  <style>
	.app-shortcut {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  width: 64px;
	  margin: 8px; /* Adjust margin for spacing */
	}
  
	.icon {
	  width: 32px;
	  height: 32px;
	  background-size: cover;
	  margin-bottom: 4px; /* Adjust margin for spacing between icon and title */
	}
  
	.title {
	  font-size: 12px; /* Adjust font size for title */
	  text-align: center;
	  color: var(--primary-basic);
	}
  </style>
  