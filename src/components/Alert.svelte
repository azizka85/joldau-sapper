<script lang="ts">
let showed = false;
let messages: string[] = [];

export function addMessage(message: string) {
  messages.unshift(message);
  messages = messages;
  show();
}

export function show() {
  showed = true;
}

export function hide() {
  showed = false;
  messages = [];
}
</script>

<div class="alert" class:hide-alert={!showed} on:click={hide}>
  {#each messages as message}
    <p>{message}</p>
  {/each}
</div>
