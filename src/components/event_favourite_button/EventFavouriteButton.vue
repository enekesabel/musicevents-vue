<template>
    <md-button class="md-icon-button"
               @click.stop="onClick">
        <md-tooltip>{{tooltip}}</md-tooltip>
        <md-icon class="md-primary">{{icon}}</md-icon>
    </md-button>
</template>

<script lang="ts" src="./EventFavouriteButton.ts">
</script>
