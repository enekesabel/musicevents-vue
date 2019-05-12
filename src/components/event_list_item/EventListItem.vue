<template>
    <md-list-item :md-expand="hasOtherArtists">
        <event-favourite-button class="ml-0 mr-3" :event="event"></event-favourite-button>
        <div class="md-list-item-text">
            <span>{{event.locationName}}</span>
            <span>{{event.city}}</span>
            <p>{{event.datetime | parseDate}}</p>
        </div>

        <md-list v-if="hasOtherArtists" slot="md-expand">
            <md-list-item
                    class="md-inset">
                <div class="d-flex flex-column">
                    <div class="md-subheading">Lineup</div>
                    <div class="d-flex flex-column align-items-start">
                        <a href="#" v-for="artist in event.lineup"
                                   @click.prevent="onArtistClick(artist)"
                                   class="md-primary md-body-1 my-1">{{artist}}
                        </a>
                    </div>
                </div>
            </md-list-item>
        </md-list>
    </md-list-item>
</template>

<script lang="ts" src="./EventListItem.ts">
</script>
