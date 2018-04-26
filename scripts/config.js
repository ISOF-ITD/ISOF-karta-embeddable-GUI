export default {
	localLibraryName: 'sagenkarta_library',

	requiredParams: {
	},

	siteOptions: {
		mapView: {
			// Skulle MapView alltid uppdatera viewPort så att nya prickar på kartan syns alla
			alwaysUpdateViewport: true
		}
	},

	country: 'sweden',

	embeddedApp: true,

	imageUrl: 'http://www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/',
	personImageUrl: 'http://frigg.sprakochfolkminnen.se/media/',
	audioUrl: 'http://130.238.4.107/',

	appUrl: 'http://frigg.sprakochfolkminnen.se/static/js-apps/sagenkarta/',
	siteUrl: 'http://www.sprakochfolkminnen.se/om-oss/kartor/sagenkartan.html',

	// Url till Django/Elasticsearch API
	apiUrl: 'http://frigg.sprakochfolkminnen.se/sagendatabas/api/es/',

	// Url till Django Rest API
	restApiUrl: 'http://frigg.sprakochfolkminnen.se/sagendatabas/api/'
};