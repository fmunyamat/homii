import React, { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

interface Coordinates {
    longitude: number;
    latitude: number;
}

interface ItemIdentification {
    label: string;
}

interface DataItem {
    coordinates?: Coordinates;
    identification?: ItemIdentification;
    properties: Record<string, any>;
}

interface MapProps {
    items: DataItem[];
}

const Map: React.FC<MapProps> = ({ items }) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<any>(null);

    useEffect(() => {
        // Dynamic import of maplibre-gl to avoid SSR issues
        const initMap = async () => {
            const maplibregl = await import('maplibre-gl');
            
            if (!mapContainer.current || map.current) return;

            map.current = new maplibregl.Map({
                container: mapContainer.current,
                style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
                center: [33.9292, 36.0369],
                zoom: 4
            });

            // Add markers for each item with coordinates
            items.forEach(item => {
                if (item.coordinates) {
                    const marker = new maplibregl.Marker()
                        .setLngLat([item.coordinates.longitude, item.coordinates.latitude])
                        .addTo(map.current);

                    // Add popup if item has a label
                    if (item.identification?.label) {
                        const popup = new maplibregl.Popup({ offset: 25, closeButton: false, closeOnClick: false })
                            .setHTML(`<div>${item.identification.label}</div>`);

                        // Show popup on mouse enter
                        marker.getElement().addEventListener('mouseenter', () => {
                            popup.addTo(map.current);
                            popup.setLngLat(marker.getLngLat());
                        });

                        // Hide popup on mouse leave
                        marker.getElement().addEventListener('mouseleave', () => {
                            popup.remove();
                        });
                    }

                }
            });
        };

        initMap();

        // Cleanup function
        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [items]);

    return (
        <div 
            ref={mapContainer} 
            style={{ 
                width: '100%', 
                height: '400px' 
            }} 
        />
    );
};

export default Map;