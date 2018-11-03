<template>
    <md-app md-waterfall md-mode="fixed-last" class="md-app">
        <md-app-toolbar class="md-dense md-primary">
            <main-toolbar-row v-model="drawerVisible"></main-toolbar-row>
            <div v-if="!isMobile"
                 class="md-toolbar-row">
                <md-tabs class="md-primary" md-sync-route>
                    <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
                    <md-tab id="tab-artists" md-label="My Artists" to="/artists"></md-tab>
                    <md-tab id="tab-events" md-label="My Events" to="/events"></md-tab>
                </md-tabs>
            </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="drawerVisible">
            <md-list>
                <md-list-item :to="{name: Routes.HOME}"
                              @click="closeDrawer">
                    <md-icon>recent_actors</md-icon>
                    <span class="md-list-item-text">Home</span>
                </md-list-item>
                <md-list-item :to="{name: Routes.FAVOURITE_ARTISTS}"
                              @click="closeDrawer">
                    <md-icon>recent_actors</md-icon>
                    <span class="md-list-item-text">My Artists</span>
                </md-list-item>

                <md-list-item :to="{name: Routes.EVENT_LIST}"
                              @click="closeDrawer">
                    <md-icon>event_note</md-icon>
                    <span class="md-list-item-text">My Events</span>
                </md-list-item>
            </md-list>
        </md-app-drawer>

        <md-app-content>
            <router-view>
            </router-view>
        </md-app-content>
    </md-app>
</template>
<script lang="ts" src="./App.ts"/>
<style lang="scss">
    @import './assets/styles/index';

    .md-app {
        height: 100vh;
    }
</style>
