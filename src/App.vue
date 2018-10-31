<template>
    <md-app md-waterfall md-mode="fixed-last">
        <md-app-toolbar class="md-dense md-primary">
            <div class="md-toolbar-row">
                <div class="md-toolbar-section-start">
                    <md-button class="md-icon-button d-sm-none" @click="menuVisible = !menuVisible">
                        <md-icon>menu</md-icon>
                    </md-button>

                    <span class="md-title">My Title</span>
                </div>

                <div class="md-toolbar-section-end">
                    <div class="d-none d-sm-flex">
                        <md-autocomplete
                                class="search"
                                v-model="selectedArtist"
                                :md-options="artists"
                                md-layout="box">
                            <label>Search artists...</label>
                            <md-icon class="mr-2">search</md-icon>
                        </md-autocomplete>
                    </div>
                    <div class="d-sm-none">
                        <md-menu md-direction="bottom-end">
                            <md-button md-menu-trigger
                                       class="md-icon-button">
                                <md-icon>more_vert</md-icon>
                            </md-button>

                            <md-menu-content>
                                <md-menu-item>Search artists</md-menu-item>
                            </md-menu-content>
                        </md-menu>
                    </div>
                </div>
            </div>

            <div class="d-none d-sm-block">
                <div class="md-toolbar-row">
                    <md-tabs class="md-primary">
                        <md-tab id="tab-home" md-label="My Artists"></md-tab>
                        <md-tab id="tab-pages" md-label="My Events"></md-tab>
                    </md-tabs>
                </div>
            </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
            <md-list>
                <md-list-item>
                    <md-icon>recent_actors</md-icon>
                    <span class="md-list-item-text">My Artists</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>event_note</md-icon>
                    <span class="md-list-item-text">My Events</span>
                </md-list-item>
            </md-list>
        </md-app-drawer>

        <md-app-content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                explicabo, neque.</p>
        </md-app-content>
    </md-app>
</template>
<script lang="ts" src="./App.ts"/>
<style lang="scss">
    @import './assets/styles/index';
</style>
