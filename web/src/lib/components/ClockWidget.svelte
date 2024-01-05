<!-- src/lib/components/ClockWidget.svelte -->
<script>
  import { onMount } from 'svelte';
  
  const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false };
  const optionsDate = { weekday: 'short', month: 'short', day: 'numeric' };
  let currentTime = new Date().toLocaleTimeString('en-US', optionsTime);
  let currentDate = new Date().toLocaleDateString('en-US', optionsDate);

  onMount(() => {
    const interval = setInterval(() => {
      const now = new Date();
      currentTime = now.toLocaleTimeString('en-US', optionsTime);
      currentDate = now.toLocaleDateString('en-US', optionsDate);
    }, 60000); // Update every minute since seconds are not displayed

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="clock-widget">
  <div class="current-date">{currentDate}</div>
  <div class="current-time">{currentTime}</div>
</div>

<style>
  .clock-widget {
    font-size: 32px;
    text-align: center;
    padding: 20px;
    color: var(--primary-basic);
    border-radius: 16px;
    border-color: var(--caption-basic);
    border-width: 2px;
    border-style: solid;
    grid-column: span 4;
  }

  .current-date {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .current-time {
    font-size: 32px;
  }
</style>
