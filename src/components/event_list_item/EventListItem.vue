<template>
    <md-list-item>
        <div class="md-list-item-text">
            <span>{{event.locationName}}</span>
            <span>Artist: {{event.artistId}}</span>
            <p>{{event.datetime}}</p>
        </div>

        <event-favourite-button :event="event"></event-favourite-button>
    </md-list-item>
</template>

<script lang="ts" src="./EventListItem.ts">
</script>
