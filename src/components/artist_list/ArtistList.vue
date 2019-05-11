<template>
    <div v-if="artists.length>0">
        <md-list v-if="isMobile">
            <template v-for="artist in artists">
                <artist-list-item
                        :artist="artist"></artist-list-item>
                <md-divider></md-divider>
            </template>
        </md-list>
        <div class="md-layout" v-else>
            <div v-for="artist in artists"
                 class="md-layout-item md-medium-size-50 md-large-size-25 md-xlarge-size-20 my-2">
                <artist-list-card
                        :artist="artist"></artist-list-card>
            </div>
        </div>
    </div>
    <div v-else
         class="my-5 w-100 text-center">
        There are no artists to display.
    </div>
</template>

<script lang="ts" src="./ArtistList.ts">
</script>
