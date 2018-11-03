<template>
    <md-autocomplete
            class="search"
            v-model="selectedArtistName"
            :md-options="artistNames"
            @md-selected="onSearchEntrySelected"
            md-layout="box">
        <label>Search artists...</label>
    </md-autocomplete>
</template>
<script lang="ts" src="./ArtistSearch.ts"/>
<style lang="scss">

</style>
