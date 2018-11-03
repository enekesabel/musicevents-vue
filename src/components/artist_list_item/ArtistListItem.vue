<template>
    <md-list-item class="pointer"
                  @click="onItemClick">
        <md-avatar>
            <img :src="artist.imageUrl" :alt="artist.name">
        </md-avatar>

        <div class="md-list-item-text">
            <span>{{artist.name}}</span>
        </div>

        <artist-favourite-button :artist="artist">
        </artist-favourite-button>
    </md-list-item>
</template>

<script lang="ts" src="./ArtistListItem.ts">
</script>
