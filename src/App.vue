<template>
    <div id="app">
        <!-- <div>123</div> -->
        <MglMap container="map-test" :center="[78.9629, 20.5937]" :accessToken="accessToken" :mapStyle="mapStyle">
            <MglGeojsonLayer
                :source-id="'geojson-source'"
                :source="getGeoJsonSource()"
                :layer-id="'geojson-layer'"
                :layer="getGeoJsonLayer()"
                :clear-source="true"
                :replace="true"
            />
        </MglMap>
    </div>
</template>

<script>
import { MglMap, MglGeojsonLayer } from 'v-mapbox';

export default {
    name: 'App',
    components: {
        MglMap,
        MglGeojsonLayer
    },
    data() {
        return {
            accessToken: 'pk.eyJ1Ijoic29jaWFsZXhwbG9yZXIiLCJhIjoiREFQbXBISSJ9.dwFTwfSaWsHvktHrRtpydQ',
            mapStyle: 'mapbox://styles/mapbox/streets-v11?optimize=true',
            geojson: 'https://gist.githubusercontent.com/vinayakkulkarni/fe8faa562db9bf4fb65cf9458ff59598/raw/0714b1561d3f4baea35f35b9aaf3440fc60f47c4/test.geojson'
        };
    },
    methods: {
        getGeoJsonSource() {
            return {
                type: 'geojson',
                data: this.geojson
            };
        },
        getGeoJsonLayer() {
            return {
                id: 'geojson-layer',
                type: 'fill',
                source: 'geojson-source',
                paint: {
                    'fill-color': '#f08',
                    'fill-opacity': 0.75
                },
                maxzoom: 22
            };
        }
    }
};
</script>

<style lang="scss">
@import '~mapbox-gl/dist/mapbox-gl.css';
@import '~v-mapbox/dist/v-mapbox.css';

html,
body {
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
    margin: 0;
    height: 100vh;
}
</style>
