
<script>
	import { onMount, onDestroy } from "svelte";
	import stations from "$data/stations.json";

	let map;
	let mapContainer;
	let innerWidth;

	export let lng = -71.12;
	export let lat = 42.295;
	export let zoom = 10.5;
	export let visibleFeatures = [];
	export let offsetMapPos = false;

	const features = [
		"tracks",
		"neighborhoods",
		"city-limits",
		"transit-options",
		"asthma",
		"ej",
		"uphams-corner",
		"four-corners",
		"talbot-avenue",
		"morton-street",
		"fairmount",
		"readville",
		"blue-hill-avenue",
		"newmarket",
		"south-station",
		"uphams-corner-gray",
		"four-corners-gray",
		"talbot-avenue-gray",
		"morton-street-gray",
		"fairmount-gray",
		"readville-gray",
		"blue-hill-avenue-gray",
		"newmarket-gray",
		"south-station-gray",
		"uphams-corner-new",
		"four-corners-new",
		"talbot-avenue-new",
		"morton-street-new",
		"fairmount-new",
		"readville-new",
		"blue-hill-avenue-new",
		"newmarket-new",
		"south-station-new"
	];

	const setFeatureOpacity = (feature, opacity) => {
		try {
			map.setPaintProperty(feature, "fill-opacity", opacity);
		} catch (error) {}
		try {
			map.setPaintProperty(feature, "line-opacity", opacity);
		} catch (error) {}
		try {
			map.setPaintProperty(feature, "raster-opacity", opacity);
		} catch (error) {}
		try {
			map.setPaintProperty(feature, "text-opacity", opacity);
		} catch (error) {}
		try {
			map.setPaintProperty(feature, "icon-opacity", opacity);
		} catch (error) {}
	};

	onMount(() => {
		const offsetLng = innerWidth > 640 && offsetMapPos ? lng + 0.12 : lng;
		const offsetZoom = innerWidth > 640 ? zoom + 0.9 : zoom;
		const initialState = { lng: offsetLng, lat: lat, zoom: offsetZoom };

		map = new mapboxgl.Map({
			container: mapContainer,
			accessToken:
				"pk.eyJ1IjoiamFzcGVyYWlycGFydG5lcnMiLCJhIjoiY2w5ZW5tNTk4M2NrZzN1cW05dXk0bnM2dSJ9.kzLXqr_6czhyOGUJPLEn9w",
			style: `mapbox://styles/mapbox/outdoors-v12`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});

		map.on("load", () => {
			// Find the index of the first symbol layer in the map style to place content below labels
			let layers = map.getStyle().layers;
			let firstSymbolId;
			for (var i = 0; i < layers.length; i++) {
				if (layers[i].type === "symbol") {
					firstSymbolId = layers[i].id;
					break;
				}
			}

			map.addSource("city-limits", {
				type: "geojson",
				data: "assets/map/city-limits.geojson"
			});

			map.addLayer(
				{
					id: "city-limits",
					type: "fill",
					source: "city-limits",
					layout: {},
					paint: {
						"fill-color": "#c67acc",
						"fill-opacity": 0,
						"fill-opacity-transition": { duration: 500 }
					}
				},
				firstSymbolId
			);

			map.addSource("asthma", {
				type: "image",
				url: "assets/map/asthma-overlay.png",
				coordinates: [
					[-71.3, 42.42],
					[-70.9, 42.42],
					[-70.9, 42.2],
					[-71.3, 42.2]
				]
			});
			map.addLayer(
				{
					id: "asthma",
					type: "raster",
					source: "asthma",
					paint: {
						"raster-opacity": 0,
						"raster-fade-duration": 500
					},
					layout: {}
				},
				firstSymbolId
			);

			map.addSource("ej", {
				type: "image",
				url: "assets/map/ej-overlay.png",
				coordinates: [
					[-71.482, 42.532],
					[-70.64, 42.532],
					[-70.64, 42.108],
					[-71.482, 42.108]
				]
			});
			map.addLayer(
				{
					id: "ej",
					type: "raster",
					source: "ej",
					paint: {
						"raster-opacity": 0,
						"raster-fade-duration": 500
					},
					layout: {}
				},
				firstSymbolId
			);

			map.addSource("tracks", {
				type: "geojson",
				data: "assets/map/tracks.geojson"
			});

			map.addLayer({
				id: "tracks",
				type: "line",
				source: "tracks",
				layout: {
					"line-join": "round",
					"line-cap": "round"
				},
				paint: {
					"line-color": "#86198f",
					"line-width": 5,
					"line-opacity": 0,
					"line-opacity-transition": { duration: 500 }
				}
			});

			map.addSource("neighborhoods", {
				type: "geojson",
				data: "assets/map/neighborhoods.geojson"
			});

			map.addLayer({
				id: "neighborhoods",
				type: "symbol",
				source: "neighborhoods",
				layout: {
					"text-field": ["get", "name"],
					"text-variable-anchor": ["top", "bottom", "left", "right"],
					"text-radial-offset": 0.5,
					"text-justify": "auto",
					"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
					"text-size": 20,
					"text-transform": "uppercase",
					"text-offset": [0, 1.5],
					"text-ignore-placement": true,
					"text-allow-overlap": true
				},
				paint: {
					"text-halo-color": "#fff",
					"text-halo-width": 3,
					"text-opacity": 0,
					"text-opacity-transition": { duration: 500 }
				}
			});

			map.addSource("transit-options", {
				type: "geojson",
				data: "assets/map/transit-options.geojson"
			});

			map.addLayer({
				id: "transit-options",
				type: "symbol",
				source: "transit-options",
				layout: {
					"text-field": ["get", "name"],
					"text-variable-anchor": ["top", "bottom", "left", "right"],
					"text-radial-offset": 0.5,
					"text-justify": "auto",
					"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
					"text-size": 20,
					"text-transform": "uppercase",
					"text-offset": [0, 1.5],
					"text-ignore-placement": true,
					"text-allow-overlap": true
				},
				paint: {
					"text-halo-color": "#fff",
					"text-halo-width": 3,
					"text-opacity": 0,
					"text-opacity-transition": { duration: 500 }
				}
			});

			map.addSource("stations", {
				type: "geojson",
				data: stations
			});

			stations.features.forEach((feature) => {
				map.loadImage(
					`assets/map/stations/${feature.properties.Name}.png`,
					(error, image) => {
						if (error) throw error;
						map.addImage(feature.properties.Name, image);

						map.addLayer({
							id: feature.properties.Name,
							type: "symbol",
							source: "stations",
							layout: {
								"icon-image": feature.properties.Name,
								"icon-allow-overlap": true,
								"icon-size": 0.17
							},
							paint: {
								"icon-opacity": 0
							},
							filter: ["==", "Name", feature.properties.Name]
						});
					}
				);
			});
		});
	});

	onDestroy(() => {
		if (map) {
			map.remove();
		}
	});

	$: if (map && map.loaded()) {
		visibleFeatures.forEach((feature) => {
			setFeatureOpacity(feature, 1);
		});
	}

	$: visibleFeatures &&
		features.forEach((feature) => {
			if (map && map.getLayer(feature)) {
				if (visibleFeatures.includes(feature)) {
					setFeatureOpacity(feature, 1);
				} else {
					setFeatureOpacity(feature, 0);
				}
			}
		});
</script>

<svelte:window bind:innerWidth />

<div class="h-full w-full" bind:this={mapContainer} />
