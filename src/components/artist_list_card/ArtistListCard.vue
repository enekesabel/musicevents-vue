<template>
    <md-card>
        <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
                <img :src="artist.imageUrl" :alt="artist.name"/>
            </md-card-media>

            <md-card-area>
                <md-card-header>
                    <span class="md-title">{{artist.name}}</span>
                </md-card-header>

                <md-card-actions>
                    <md-button class="md-icon-button"
                               @click="onFavouriteClick">
                        <md-icon>favorite</md-icon>
                    </md-button>
                </md-card-actions>
            </md-card-area>
        </md-card-media-cover>
    </md-card>
</template>

<script lang="ts" src="./ArtistListCard.ts">
</script>
