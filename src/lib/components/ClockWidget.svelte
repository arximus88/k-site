<!-- src/lib/components/ClockWidget.svelte -->
<script>
    import { onMount } from 'svelte';
    let currentTime = new Date().toLocaleTimeString();
  
    onMount(() => {
      const interval = setInterval(() => {
        currentTime = new Date().toLocaleTimeString();
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    });
  </script>
  
  <div class="clock-widget">
    {currentTime}
  </div>
  
  <style>
    .clock-widget {
      font-size: 32px;
      text-align: center;
      padding: 20px;
      color: var(--primary-basic);
    }
  </style>
  