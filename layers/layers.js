var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 0.717000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_66_cities_new_1 = new ol.format.GeoJSON();
var features_66_cities_new_1 = format_66_cities_new_1.readFeatures(json_66_cities_new_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_66_cities_new_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_66_cities_new_1.addFeatures(features_66_cities_new_1);
var lyr_66_cities_new_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_66_cities_new_1, 
                style: style_66_cities_new_1,
                interactive: true,
                title: '<img src="styles/legend/66_cities_new_1.png" /> 66_cities_new'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_66_cities_new_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_66_cities_new_1];
lyr_66_cities_new_1.set('fieldAliases', {'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', });
lyr_66_cities_new_1.set('fieldImages', {'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', });
lyr_66_cities_new_1.set('fieldLabels', {'NAME_0': 'no label', 'NAME_1': 'no label', 'NAME_2': 'inline label', 'NAME_3': 'no label', 'NAME_4': 'no label', });
lyr_66_cities_new_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});