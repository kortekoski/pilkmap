import { useEffect, useState, useRef } from 'react'
import './App.css'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { OSM, TileJSON, Vector as VectorSource } from 'ol/source'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import { Icon, Style } from 'ol/style'
import MapDisplay from './components/MapDisplay'

import marker_icon from './assets/marker-icon.png'


const api_key = import.meta.env.VITE_API_KEY

const App = () => {
  const [isDrawing, setIsDrawing] = useState(false)
  const [defaultIsVisible, defaultSetIsVisible] = useState(true)
  const [satelliteIsVisible, satelliteSetIsVisible] = useState(false)
  const [markerFeatures, setMarkerFeatures] = useState([])
  const [cursor, setCursor] = useState('default')
  const mapCenter = useRef([2746134.0762156197,8457097.129625523])
  const mapZoom = useRef(11)

  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
          visible: defaultIsVisible
        }),
        new TileLayer({
          source: new TileJSON({
            url: `https://api.maptiler.com/maps/satellite/tiles.json?key=${api_key}`,
            tileSize: 512,
            crossOrigin: 'anonymous'
          }),
          visible: satelliteIsVisible
        }),
        new VectorLayer({
          source: new VectorSource({
            features: markerFeatures
          }),
          visible: true
        })
      ],
      view: new View({
        constrainResolution: true,
        center: mapCenter.current,
        zoom: mapZoom.current
      })
    })

    // Prevents the map from recentering or rezooming on layer change.
    map.on('moveend', (event) => {
      const eventMap = event.map
      mapCenter.current = eventMap.getView().getCenter()
      mapZoom.current = eventMap.getView().getZoom()
    })

    map.on('click', (event) => {
      if (isDrawing) {
        console.log('added marker to: ' + map.getEventCoordinate(event.originalEvent))
        const markerCoordinates = map.getEventCoordinate(event.originalEvent)
        createMarker(markerCoordinates)
      }
    })

    const createMarker = (coordinates) => {
      const markerFeature = new Feature({
        geometry: new Point(coordinates),
        name: 'Siika, siika',
        species: 'Siika',
        weight: '2 kg',
        length: '50 cm'
      })
  
      const markerStyle = new Style({
        image: new Icon({
          src: marker_icon
        })
      })
      
      markerFeature.setStyle(markerStyle)
  
      // The created marker is added to an array of markers, which is saved as a state
      setMarkerFeatures([...markerFeatures, markerFeature])
      setIsDrawing(false)
      setCursor('default')
    }

    return () => {
      map.setTarget(null)
    }
  }, [defaultIsVisible, satelliteIsVisible, markerFeatures, isDrawing])

  const handleMarkerClick = () => {
    setIsDrawing(true)
    setCursor(`url(${marker_icon}) 16 16, auto`)
    console.log(isDrawing)
  }

  const handleLayerChange = () => {
    defaultSetIsVisible(!defaultIsVisible)
    satelliteSetIsVisible(!satelliteIsVisible)
    console.log(defaultIsVisible, satelliteIsVisible)
  }

  return (
    <div style={{cursor: cursor}}>
      <div style={{padding: '0'}}>
        <h1>pilkmap</h1>
      </div>
      <MapDisplay />
      <div>
        <button onClick={() => handleLayerChange()}>Vaihda tasoa</button>
        <button onClick={() => handleMarkerClick()}>
          Lisää merkintä
        </button>
      </div>
    </div>
  )
}

export default App
