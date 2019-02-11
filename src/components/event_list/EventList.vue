<template>
    <md-list>
        <template v-for="event in events">
            <event-list-item
                    :event="event"></event-list-item>
            <md-divider class="md-inset"></md-divider>
        </template>
    </md-list>
</template>

<script lang="ts" src="./EventList.ts">
</script>
