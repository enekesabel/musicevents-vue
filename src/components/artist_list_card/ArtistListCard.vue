<template>
    <md-card class="pointer md-card"
             @mouseenter.native="onMouseEnter"
             @mouseleave.native="onMouseLeave"
             :class="classObj"
             @click.native="onItemClick">
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
                               @click.stop="onFavouriteClick">
                        <md-icon>favorite</md-icon>
                    </md-button>
                </md-card-actions>
            </md-card-area>
        </md-card-media-cover>
    </md-card>
</template>

<script lang="ts" src="./ArtistListCard.ts">
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/custom";

    .md-card {
        transition: $transition-base;
    }
</style>
