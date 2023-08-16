<script>
	import { Map } from "mapbox-gl";
	import { onMount } from "svelte";

	let map;
	let mapContainer;
	let innerWidth;

	export let lng;
	export let lat;
	export let zoom;
	export let visibleFeatures;
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
		"uphams-corner-green",
		"four-corners-green",
		"talbot-avenue-green",
		"morton-street-green",
		"fairmount-green",
		"readville-green",
		"blue-hill-avenue-green",
		"newmarket-green",
		"south-station-green"
	];

	const stations = {
		type: "FeatureCollection",
		features: [
			{
				geometry: {
					coordinates: [-71.068625, 42.319104],
					type: "Point"
				},
				properties: {
					Name: "uphams-corner"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.068625, 42.319104],
					type: "Point"
				},
				properties: {
					Name: "uphams-corner-gray"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.068625, 42.319104],
					type: "Point"
				},
				properties: {
					Name: "uphams-corner-green"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.076928, 42.30502],
					type: "Point"
				},
				properties: {
					Name: "four-corners"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.076928, 42.30502],
					type: "Point"
				},
				properties: {
					Name: "four-corners-gray"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.076928, 42.30502],
					type: "Point"
				},
				properties: {
					Name: "four-corners-green"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.078392, 42.293538],
					type: "Point"
				},
				properties: {
					Name: "talbot-avenue"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.078392, 42.293538],
					type: "Point"
				},
				properties: {
					Name: "talbot-avenue-gray"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.078392, 42.293538],
					type: "Point"
				},
				properties: {
					Name: "talbot-avenue-green"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.086059, 42.280285],
					type: "Point"
				},
				properties: {
					Name: "morton-street"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.086059, 42.280285],
					type: "Point"
				},
				properties: {
					Name: "morton-street-gray"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.086059, 42.280285],
					type: "Point"
				},
				properties: {
					Name: "morton-street-green"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.119161, 42.253865],
					type: "Point"
				},
				properties: {
					Name: "fairmount"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.119161, 42.253865],
					type: "Point"
				},
				properties: {
					Name: "fairmount-gray"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.119161, 42.253865],
					type: "Point"
				},
				properties: {
					Name: "fairmount-green"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.133593, 42.237927],
					type: "Point"
				},
				properties: {
					Name: "readville"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.133593, 42.237927],
					type: "Point"
				},
				properties: {
					Name: "readville-gray"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.133593, 42.237927],
					type: "Point"
				},
				properties: {
					Name: "readville-green"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.093836, 42.27279],
					type: "Point"
				},
				properties: {
					Name: "blue-hill-avenue"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.093836, 42.27279],
					type: "Point"
				},
				properties: {
					Name: "blue-hill-avenue-gray"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.093836, 42.27279],
					type: "Point"
				},
				properties: {
					Name: "blue-hill-avenue-green"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.065583, 42.327564],
					type: "Point"
				},
				properties: {
					Name: "newmarket"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.065583, 42.327564],
					type: "Point"
				},
				properties: {
					Name: "newmarket-gray"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.065583, 42.327564],
					type: "Point"
				},
				properties: {
					Name: "newmarket-green"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.055153, 42.351545],
					type: "Point"
				},
				properties: {
					Name: "south-station"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.055153, 42.351545],
					type: "Point"
				},
				properties: {
					Name: "south-station-gray"
				},
				type: "Feature"
			},
			{
				geometry: {
					coordinates: [-71.055153, 42.351545],
					type: "Point"
				},
				properties: {
					Name: "south-station-green"
				},
				type: "Feature"
			}
		]
	};

	const loadStations = () => {
		map.loadImage("assets/map/stations/south-station.png", (error, image) => {
			if (error) throw error;

			map.addImage("south-station", image);
		});
		map.loadImage("assets/map/stations/newmarket.png", (error, image) => {
			if (error) throw error;

			map.addImage("newmarket", image);
		});
		map.loadImage("assets/map/stations/uphams-corner.png", (error, image) => {
			if (error) throw error;

			map.addImage("uphams-corner", image);
		});
		map.loadImage("assets/map/stations/four-corners.png", (error, image) => {
			if (error) throw error;

			map.addImage("four-corners", image);
		});
		map.loadImage("assets/map/stations/talbot-avenue.png", (error, image) => {
			if (error) throw error;

			map.addImage("talbot-avenue", image);
		});
		map.loadImage("assets/map/stations/morton-street.png", (error, image) => {
			if (error) throw error;

			map.addImage("morton-street", image);
		});
		map.loadImage(
			"assets/map/stations/blue-hill-avenue.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("blue-hill-avenue", image);
			}
		);
		map.loadImage("assets/map/stations/fairmount.png", (error, image) => {
			if (error) throw error;

			map.addImage("fairmount", image);
		});
		map.loadImage("assets/map/stations/readville.png", (error, image) => {
			if (error) throw error;

			map.addImage("readville", image);
		});

		map.loadImage(
			"assets/map/stations/south-station-gray.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("south-station-gray", image);
			}
		);
		map.loadImage("assets/map/stations/newmarket-gray.png", (error, image) => {
			if (error) throw error;

			map.addImage("newmarket-gray", image);
		});
		map.loadImage(
			"assets/map/stations/uphams-corner-gray.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("uphams-corner-gray", image);
			}
		);
		map.loadImage(
			"assets/map/stations/four-corners-gray.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("four-corners-gray", image);
			}
		);
		map.loadImage(
			"assets/map/stations/talbot-avenue-gray.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("talbot-avenue-gray", image);
			}
		);
		map.loadImage(
			"assets/map/stations/morton-street-gray.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("morton-street-gray", image);
			}
		);
		map.loadImage(
			"assets/map/stations/blue-hill-avenue-gray.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("blue-hill-avenue-gray", image);
			}
		);
		map.loadImage("assets/map/stations/fairmount-gray.png", (error, image) => {
			if (error) throw error;

			map.addImage("fairmount-gray", image);
		});
		map.loadImage("assets/map/stations/readville-gray.png", (error, image) => {
			if (error) throw error;

			map.addImage("readville-gray", image);
		});

		map.loadImage(
			"assets/map/stations/south-station-green.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("south-station-green", image);
			}
		);
		map.loadImage("assets/map/stations/newmarket-green.png", (error, image) => {
			if (error) throw error;

			map.addImage("newmarket-green", image);
		});
		map.loadImage(
			"assets/map/stations/uphams-corner-green.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("uphams-corner-green", image);
			}
		);
		map.loadImage(
			"assets/map/stations/four-corners-green.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("four-corners-green", image);
			}
		);
		map.loadImage(
			"assets/map/stations/talbot-avenue-green.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("talbot-avenue-green", image);
			}
		);
		map.loadImage(
			"assets/map/stations/morton-street-green.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("morton-street-green", image);
			}
		);
		map.loadImage(
			"assets/map/stations/blue-hill-avenue-green.png",
			(error, image) => {
				if (error) throw error;

				map.addImage("blue-hill-avenue-green", image);
			}
		);
		map.loadImage("assets/map/stations/fairmount-green.png", (error, image) => {
			if (error) throw error;

			map.addImage("fairmount-green", image);
		});
		map.loadImage("assets/map/stations/readville-green.png", (error, image) => {
			if (error) throw error;

			map.addImage("readville-green", image);
		});
	};

	onMount(() => {
		const offsetLng = innerWidth > 640 && offsetMapPos ? lng + 0.12 : lng;
		const offsetZoom = innerWidth > 640 ? zoom + 0.9 : zoom;
		const initialState = { lng: offsetLng, lat: lat, zoom: offsetZoom };

		map = new Map({
			container: mapContainer,
			accessToken:
				"pk.eyJ1IjoiamFzcGVyYWlycGFydG5lcnMiLCJhIjoiY2w5ZW5tNTk4M2NrZzN1cW05dXk0bnM2dSJ9.kzLXqr_6czhyOGUJPLEn9w",
			style: `mapbox://styles/mapbox/outdoors-v12`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});
		map.on("move", () => {
			updateData();
		});

		map.on("load", () => {
			loadStations();

			map.addSource("city-limits", {
				type: "geojson",
				data: "assets/map/city-limits.geojson"
			});

			map.addLayer({
				id: "city-limits",
				type: "fill",
				source: "city-limits",
				layout: {
					visibility: "none"
				},
				paint: {
					"fill-color": "#db2e51",
					"fill-opacity": 0.25
				}
			});

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
			map.addLayer({
				id: "asthma",
				type: "raster",
				source: "asthma",
				paint: {
					"raster-fade-duration": 0
				},
				layout: {
					visibility: "none"
				}
			});

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
			map.addLayer({
				id: "ej",
				type: "raster",
				source: "ej",
				paint: {
					"raster-fade-duration": 0
				},
				layout: {
					visibility: "none"
				}
			});

			map.addSource("tracks", {
				type: "geojson",
				data: "assets/map/tracks.geojson"
			});

			map.addLayer({
				id: "tracks",
				type: "line",
				source: "tracks",
				layout: {
					visibility: "none",
					"line-join": "round",
					"line-cap": "round"
				},
				paint: {
					"line-color": "#86198f",
					"line-width": 5
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
					visibility: "none",
					"text-field": ["get", "name"],
					"text-variable-anchor": ["top", "bottom", "left", "right"],
					"text-radial-offset": 0.5,
					"text-justify": "auto",
					"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
					"text-size": 20,
					"text-transform": "uppercase",
					"text-offset": [0, 1.5]
				},
				paint: {
					"text-color": "#5B0063",
					"text-halo-color": "#fff",
					"text-halo-width": 3
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
					visibility: "none",
					"text-field": ["get", "name"],
					"text-variable-anchor": ["top", "bottom", "left", "right"],
					"text-radial-offset": 0.5,
					"text-justify": "auto",
					"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
					"text-size": 20,
					"text-transform": "uppercase",
					"text-offset": [0, 1.5]
				},
				paint: {
					"text-color": "#5B0063",
					"text-halo-color": "#fff",
					"text-halo-width": 3
				}
			});

			map.addSource("stations", {
				type: "geojson",
				data: stations
			});

			stations.features.forEach((feature) => {
				map.addLayer({
					id: feature.properties.Name,
					type: "symbol",
					source: "stations",
					layout: {
						visibility: "none",
						"icon-image": feature.properties.Name,
						"icon-allow-overlap": true,
						"icon-size": 0.17
					},
					filter: ["==", "Name", feature.properties.Name]
				});
			});

			visibleFeatures.forEach((feature) => {
				map.setLayoutProperty(feature, "visibility", "visible");
			});
		});
	});

	function updateData() {
		zoom = map.getZoom();
		lng = map.getCenter().lng;
		lat = map.getCenter().lat;
	}

	$: visibleFeatures &&
		features.forEach((feature) => {
			if (map && map.getLayer(feature)) {
				if (visibleFeatures.includes(feature)) {
					map.setLayoutProperty(feature, "visibility", "visible");
				} else {
					map.setLayoutProperty(feature, "visibility", "none");
				}
			}
		});
</script>

<svelte:window bind:innerWidth />

<div class="h-full w-full" bind:this={mapContainer} />
