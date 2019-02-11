<template>
    <md-list-item md-expand>
        <event-favourite-button class="ml-0 mr-3" :event="event"></event-favourite-button>
        <div class="md-list-item-text">
            <span>{{event.locationName}}</span>
            <span>Artist: {{event.artistId}}</span>
            <p>{{event.datetime}}</p>
        </div>

        <md-list slot="md-expand">
            <md-list-item
                    class="md-inset">
                <div class="md-list-item-text">
                    <div>{{event.city}}</div>
                    <div v-if="description">{{description}}</div>
                </div>
            </md-list-item>
        </md-list>
    </md-list-item>
</template>

<script lang="ts" src="./EventListItem.ts">
</script>
