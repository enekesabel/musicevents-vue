<template>
    <div class="md-layout md-alignment-center-center">
        <template v-if="artist">
            <div class="md-layout-item md-xsmall-size-100 md-small-size-80 md-medium-size-60 md-large-size-40 md-xlarge-size-30">
                <md-card>
                    <md-card-area md-inset>
                        <md-card-media>
                            <img :src="artist.imageUrl" :alt="artist.name">
                        </md-card-media>

                        <md-card-header>
                            <md-card-header-text>
                                <div class="md-title">{{artist.name}}</div>
                            </md-card-header-text>

                            <artist-favourite-button :artist="artist">
                            </artist-favourite-button>

                        </md-card-header>

                        <md-card-content>
                            <div class="d-flex flex-row align-items-center justify-content-center">
                                <md-button v-if="artist.facebookPageUrl"
                                           :href="artist.facebookPageUrl"
                                           target="_blank"
                                           class="md-icon-button">
                                    <md-tooltip>Open Facebook page</md-tooltip>
                                    <md-icon>
                                        <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                                    </md-icon>
                                </md-button>
                            </div>
                        </md-card-content>
                    </md-card-area>
                </md-card>
            </div>
        </template>
        <md-progress-spinner v-else
                             class="mt-5"
                             md-mode="indeterminate"/>
    </div>
</template>

<script lang="ts" src="./ArtistDetails.ts">
</script>
