<template>
  <div>
    <label for="create-from">From:</label>
    <q-input  type="text" id="create-from" name="name" required
            minlength="4" maxlength="8" size="10"></q-input>

    <label for="create-to">To:</label>
    <q-input  type="text" id="create-to" name="name" required
            minlength="4" maxlength="8" size="10"></q-input>

    <label for="create-message">Message:</label>
    <q-input  type="text" id="create-message" name="name" required
            minlength="4" maxlength="8" size="10"></q-input>

    <button type="button">Generate</button>
            
  </div>
</template>

<script>
export default {
  name: 'Create',
}
</script>