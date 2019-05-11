<template>
    <md-list v-if="events.length > 0">
        <template v-for="event in events">
            <event-list-item
                    :event="event"></event-list-item>
            <md-divider></md-divider>
        </template>
    </md-list>
    <div v-else
         class="w-100 text-center">
        There are no events to display.
    </div>
</template>

<script lang="ts" src="./EventList.ts">
</script>
