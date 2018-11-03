<template>
    <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
            <md-button v-if="isMobile"
                       class="md-icon-button"
                       @click="toggleDrawer">
                <md-icon>menu</md-icon>
            </md-button>

            <span v-if="!isMobile || isMobile && !searchShown" class="md-title">My Title</span>
        </div>

        <div class="md-toolbar-section-end">
            <div>
                <div v-if="searchShown"
                     class="d-flex flex-row">
                    <artist-search></artist-search>
                    <md-icon v-if="isMobile" @click.native="hideSearch">arrow_back</md-icon>
                </div>
                <md-icon v-else
                         @click.native="showSearch">
                    search
                </md-icon>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./MainToolbarRow.ts"/>
<style lang="scss">

</style>
