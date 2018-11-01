<template>
    <md-list-item @click="onItemClick">
        <md-avatar>
            <img :src="artist.imageUrl" :alt="artist.name">
        </md-avatar>

        <div class="md-list-item-text">
            <span>{{artist.name}}</span>
        </div>

        <md-button class="md-icon-button md-list-action"
                   @click.stop="onFavouriteClick">
            <md-icon class="md-primary">star</md-icon>
        </md-button>
    </md-list-item>
</template>

<script lang="ts" src="./ArtistListItem.ts">
</script>
