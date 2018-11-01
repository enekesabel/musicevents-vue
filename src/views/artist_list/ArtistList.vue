<template>
    <md-content>
        <md-subheader>Favourite artists</md-subheader>
        <md-list v-if="isMobile">
            <artist-list-item v-for="artist in artists"
                              :artist="artist"></artist-list-item>
        </md-list>
        <div class="md-layout" v-else>
            <div v-for="artist in artists"
                 class="md-layout-item md-medium-size-50 md-large-size-25 my-2">
                <artist-list-card
                        :artist="artist"></artist-list-card>
            </div>
        </div>
    </md-content>
</template>

<script lang="ts" src="./ArtistList.ts">
</script>
